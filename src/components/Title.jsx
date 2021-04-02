import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography } from "@material-ui/core";
import theme from "../constants/theme";
const useStyles = makeStyles((theme) => ({
  titleStyle: {
    fontSize: "30px",
    fontWeight: 600,
    letterSpacing: "1px",
    "@media(max-width: 600px)": {
      fontSize: "20px",
    },
  },
  containerStyle: {
    marginTop: "3em",
  },
}));
const Title = () => {
  const classes = useStyles();
  let title_content =
    "Welcome to photobomb gallery! Browse photos of your choice";
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.containerStyle}>
        <Typography
          variant="body2"
          component="div"
          align="center"
          className={classes.titleStyle}
        >
          {title_content}
        </Typography>
      </Container>
    </ThemeProvider>
  );
};
export default Title;
