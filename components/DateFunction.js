import React from "react";

const DateFunction = (props) => {
  let date = new Date(props);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate =
    monthNames[date.getMonth()] + " " + String(date.getDate()).padStart(2, "0");
  return formattedDate;
};

export default DateFunction;
