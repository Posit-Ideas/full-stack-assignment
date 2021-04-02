import React, { useState, useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import Images from "./Images";
import Axios from "axios";
import { SECRET_KEY, ACCESS_KEY } from "../config";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: "1em",
  },
}));
const TabView = () => {
  const [value, setValue] = useState("All");
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setLoading] = useState("true");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setImage([]);
  };
  const fetchImage = useCallback(async () => {
    const accessKey = ACCESS_KEY;
    setPage(page + 1);
    const request = await Axios.get(
      `https://api.unsplash.com/photos/random?query=${value}&page=${page}&client_id=${accessKey}&count=30`
    );
    console.log(request.data);
    setImage([...image, ...request.data]);
  }, [value]);
  useEffect(() => {
    fetchImage();
  }, [value]);
  useEffect(() => {
    fetchImage();
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab label="All" value="All"></Tab>
        <Tab label="Web Design" value="Web Design"></Tab>
        <Tab label="Digital Design" value="Digital Design"></Tab>
      </Tabs>
      <Images images={image} fetchImage={fetchImage} />
    </Container>
  );
};
export default TabView;
