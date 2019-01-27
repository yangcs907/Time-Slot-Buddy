import { createStore } from "redux";
import reducer from "../reducers";
const initialState = {
  name9: "Nobody yet, fill out the form below to book this slot",
  number9: "",
  name10: "Nobody yet, fill out the form below to book this slot",
  number10: "",
  name11: "Nobody yet, fill out the form below to book this slot",
  number11: "",
  name12: "Nobody yet, fill out the form below to book this slot",
  number12: "",
  name1: "Nobody yet, fill out the form below to book this slot",
  number1: "",
  name2: "Nobody yet, fill out the form below to book this slot",
  number2: "",
  name3: "Nobody yet, fill out the form below to book this slot",
  number3: "",
  name4: "Nobody yet, fill out the form below to book this slot",
  number4: ""
};
export const store = createStore(reducer, initialState);
