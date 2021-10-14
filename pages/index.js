import styles from "../styles/Home.module.css";
import MySwitch from "./mySwitch";

export default function Home() {
  return (
    <div className={styles.container}>
      <MySwitch name={"Dinner"} />
      <MySwitch name={"TV"} />
      <MySwitch name={"Game"} />
    </div>
  );
}
