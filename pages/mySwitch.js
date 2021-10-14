import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Switch from "react-switch";
import { Typography } from "@mui/material";

const MySwitch = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    console.log(checked);
    setChecked(!checked);
  };
  return (
    <div>
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        align="center"
        pt={5}
      >
        {props.name}
      </Typography>
      <div className={styles.switchContainer}>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          className={styles.person}
        >
          Eli
        </Typography>
        <Switch
          onChange={handleChange}
          checked={checked}
          height={200}
          width={700}
          handleDiameter={180}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={"#d8b6f2"}
          offColor={"#88e3a9"}
        />
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          className={styles.person}
        >
          Summer
        </Typography>
      </div>
    </div>
  );
};

export default MySwitch;
