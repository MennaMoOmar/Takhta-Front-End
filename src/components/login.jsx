import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="login">
        <div className="login__box">
          <div className="login__box__header">
            <h5>Login</h5>
          </div>
          <img
            className="navBar__image login__box__img"
            src="/images/logo.png"
            alt="logo"
          ></img>
          <br />
          <form className={classes.root} noValidate autoComplete="off">
          {/* add error prop if in valid */}
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Password" />
            <NavLink className="login__box__a" to="">Forget Your Password?</NavLink>
            <button className="button btn login__box__btn">
              <span className="button__link">Sign in</span>
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
