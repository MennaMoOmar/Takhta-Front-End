import React from "react";

/*start import accordion */
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
/*end import accordion */

const StdSrcGradeAccordion = () => {
  /*accordion */
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="stdgradeaccordion">
        <div className="stdgradeaccordion__accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="stdgradeaccordion__header"
            >
              <Typography className={classes.heading}>
                <span className="stdgradeaccordion__img">
                  <img src="/images/math.png" alt="logo"></img>
                </span>
                <span className="stdgradeaccordion__course">React</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="stdgradeaccordion__body">

              <Typography className="stdgradeaccordion__body__typography">
                  <span className="stdgradeaccordion__body__typography__title">Title:</span>
                  <span className="stdgradeaccordion__body__typography__title__data">Quiz1</span>
                  <br />
                  <span className="stdgradeaccordion__body__typography__grade">Grade:</span>
                  <span className="stdgradeaccordion__body__typography__grade__data">A+</span>
              </Typography>
              {/* هو الي هيكر زاهيمرووو Typography */}
              <Typography className="stdgradeaccordion__body__typography">
                  <span className="stdgradeaccordion__body__typography__title">Title:</span>
                  <span className="stdgradeaccordion__body__typography__title__data">Quiz2</span>
                  <br />
                  <span className="stdgradeaccordion__body__typography__grade">Grade:</span>
                  <span className="stdgradeaccordion__body__typography__grade__data">B+</span>
              </Typography>
              
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdSrcGradeAccordion;
