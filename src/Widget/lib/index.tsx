import axios from "axios";

export const apiwidget = axios.create({
  baseURL: process.env.REACT_APP_API_WIDGET,
});
