import axiosIntance from "axios";

export const axiosApi = axiosIntance.create({
  baseURL: `${import.meta.env.VITE_API}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const axios = axiosIntance.create({
  baseURL: `${import.meta.env.VITE_API}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
