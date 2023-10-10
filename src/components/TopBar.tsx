import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Menubar } from "primereact/menubar";
import styles from "../styles/components/top-bar.module.scss";
import {
  CELSIUS,
  FAHRENHEIT,
  IMPERIAL_UNIT,
  KELVIN,
  METRIC_UNIT,
  STANDARD_UNIT,
} from "../common/constants";
import { setUnits } from "../store/weather";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const units = useAppSelector((state) => state.weather.units);

  const items = [
    {
      label: "Weather",
      command: () => navigate("/"),
    },
    {
      label: "Units",
      items: [
        {
          label: KELVIN,
          icon: units === STANDARD_UNIT ? "pi pi-check" : "",
          command: () => dispatch(setUnits(STANDARD_UNIT)),
        },
        {
          label: FAHRENHEIT,
          icon: units === IMPERIAL_UNIT ? "pi pi-check" : "",
          command: () => dispatch(setUnits(IMPERIAL_UNIT)),
        },
        {
          label: CELSIUS,
          icon: units === METRIC_UNIT ? "pi pi-check" : "",
          command: () => dispatch(setUnits(METRIC_UNIT)),
        },
      ],
    },
  ];

  return <Menubar className={styles.topBar} model={items} />;
};
