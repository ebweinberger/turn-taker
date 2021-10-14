import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Switch from "react-switch";
import { Typography } from "@mui/material";

const MySwitch = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <Typography
        variant="h2"
        component="div"
        gutterBottom
        align="center"
        pt={1}
      >
        {props.name}
      </Typography>
      <div className={styles.switchContainer}>
        <Switch
          onChange={handleChange}
          checked={checked}
          height={80}
          width={200}
          handleDiameter={70}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={"#d8b6f2"}
          offColor={"#88e3a9"}
        />
      </div>
    </div>
  );
};

export default MySwitch;
