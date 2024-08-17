import axiosIntance from "axios";

export const axiosApi = axiosIntance.create({
  baseURL: `${window.location.origin}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const axios = axiosIntance.create({
  baseURL: `${window.location.origin}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
