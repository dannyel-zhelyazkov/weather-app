import moment from "moment";

export const convertToMonthDay = (date?: string) =>
  moment(date).format("MMM DD");

export const convertToHoursMinutes = (date?: string) =>
  moment(date).format("HH:mm");
