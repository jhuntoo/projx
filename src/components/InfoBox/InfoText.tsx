import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  text: {
    display: "block",
    fontWeight: 300,
    lineHeight: 1.5,
    fontSize: ".95em",
    textAlign: "left",
    marginBottom: ".8em",
    "& p:first-child": {
      marginTop: 0
    },
    "& p:last-child": {
      marginBottom: 0
    }
  }
});

const InfoText = (props: InfoTextProps) => {
  const { classes, info } = props;
  const text = info.node.html;

  return <div className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />;
}

interface InfoTextProps {
  classes: any;
  info: any;
};

export default injectSheet(styles)(InfoText);
