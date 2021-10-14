import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Switch from "react-switch";
import { Typography } from "@mui/material";
import useWindowSize from "./hooks/useWindowSize";

const MySwitch = (props) => {
  const [checked, setChecked] = useState(false);
  const windowSize = useWindowSize();
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(300);
  const [handleDiameter, setHandleDiameter] = useState(90);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (windowSize.width < 500 || windowSize.height < 1000) {
      //   setHeight(25);
      //   setWidth(100);
      //   setHandleDiameter(20);
    }
  }, [windowSize]);
  return (
    <div>
      <Typography
        variant="h2"
        component="div"
        gutterBottom
        align="center"
        pt={5}
      >
        {props.name}
      </Typography>
      <div className={styles.switchContainer}>
        {/* <Typography
          variant="h3"
          component="div"
          gutterBottom
          className={styles.person}
        >
          Eli
        </Typography> */}
        <Switch
          onChange={handleChange}
          checked={checked}
          height={height}
          width={width}
          handleDiameter={handleDiameter}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={"#d8b6f2"}
          offColor={"#88e3a9"}
        />
        {/* <Typography
          variant="h3"
          component="div"
          gutterBottom
          className={styles.person}
        >
          Summer
        </Typography> */}
      </div>
    </div>
  );
};

export default MySwitch;
