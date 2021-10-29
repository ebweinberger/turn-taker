import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Switch from "react-switch";
import { Typography } from "@mui/material";
import axios from "axios"

const MySwitch = (props) => {
  const [checked, setChecked] = useState(false);
  const [thisSwitch, setThisSwitch] = useState({})


  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_GET_URL)
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

  const handleChange = () => {
    setChecked(!checked);
    axios.post(process.env.NEXT_PUBLIC_SET_URL, {
      switchId: thisSwitch.id,
      position: checked ? 0 : 1
    })
      .catch(e => console.error('ERROR POSTING: ', e))
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
