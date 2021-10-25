import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editer from "../editer/editer";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editer />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
