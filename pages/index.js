import styles from "../styles/Home.module.css";
import MySwitch from "./mySwitch";

export default function Home() {
  return (
    <div>
      <MySwitch name={"Dinner"} />
      <MySwitch name={"TV"} />
      <MySwitch name={"Game"} />
    </div>
  );
}
