import Image from "next/image";
import styles from "./page.module.css";
import Map from "./client/map";
import Svg from "./server/svg";
import SvgClient from "./client/svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        THIS IS RENDERED ON SERVER?
        {/* <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          id={"map"}
          // allowfullscreen
          src="https://www.google.com/maps/embed/v1/view?zoom=7&center=39.0458%2C-76.6413&key=AIzaSyBtwr6-O2UG7XA-LzKDsSAQP7UakX3lqlI"
        ></iframe>
        <Map /> */}
        <Svg />
        <SvgClient />
      </div>
    </main>
  );
}
