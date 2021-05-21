import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Search from "../search";
import Notification from "../notification";

/*start ddl*/
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));
/*end ddl*/

const StdNavBar = () => {
  /*start collapse navbar*/
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  /*end collapse navbar*/

  /*start ddl*/
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  /*end ddl*/

  return (
    <React.Fragment>
      <nav className="stdnavBar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="navBar__image"
              src="/images/logo.png"
              alt="logo"
            ></img>
            <span className="stdnavBar__span">Takhta</span>
          </a>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          >
            <div className="stdnavBar__list navbar-nav">
              <div className={classes.root}></div>
              <Search></Search>
              <Notification></Notification>
              <div>
                <Button
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  className="stdnavbar-brand"
                >
                  <img
                    className="navBar__image__user"
                    src="/images/user.png"
                    alt="user"
                  ></img>
                  <span className="stdnavBar__span">Hi, Menna</span>
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default StdNavBar;
