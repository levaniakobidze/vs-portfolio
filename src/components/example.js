import { Input } from "@mui/icons-material";
import React from "react";

const data = [
  {
    question: "fisrt question",
    answear: "first answear",
    active: false,
  },
  {
    question: "fisrt question",
    answear: "first answear",
    active: false,
  },
  {
    question: "fisrt question",
    answear: "first answear",
    active: false,
  },
  {
    question: "fisrt question",
    answear: "first answear",
    active: false,
  },
  {
    question: "fisrt question",
    answear: "first answear",
    active: false,
  },
  {
    question: "fisrt question",
    answear: "first answear",
    active: false,
  },
];

const handlechnage = (e) => {};

function example() {
  return (
    <div>
      {" "}
      <input onChange={handlechnage} />{" "}
    </div>
  );
}

export default example;
