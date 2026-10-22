import styles from "./page.module.css";
import CarsComponent from "@/src/component/cars-component/CarsComponent";

export default function Home() {
  return (
      <div className={styles.page}>
        <CarsComponent/>
      </div>
  );
}