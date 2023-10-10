import React from "react";
import { TopBar } from "../components";
import { Outlet } from "react-router-dom";
import styles from "../styles/layouts/main-layout.module.scss";

export const MainLayout: React.FC = () => (
  <div className={styles.mainLayout}>
    <TopBar />
    <Outlet />
  </div>
);
