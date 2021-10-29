import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Switch from "react-switch";
import { Typography } from "@mui/material";
import axios from "axios"

const MySwitch = (props) => {
  const [checked, setChecked] = useState(false);
  const [thisSwitch, setThisSwitch] = useState({})
  const handleChange = () => {
    setChecked(!checked);
    axios.post('http://localhost:3000/api/setSwitch', {
      switchId: thisSwitch.id,
      position: checked ? 0 : 1
    })
      .catch(e => console.error('ERROR POSTING: ', e))
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/getSwitches')
      .then(res => {
        setThisSwitch(res.data.filter(function (data) { return data.name === props.name })[0])
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  useEffect(() => {
    if (thisSwitch.position) {
      setChecked(true)
    }
  }, [thisSwitch])

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
