import axios from "axios";

const apiKey = process.env.REACT_APP_API;
console.log("มาจากฟังชั่น", apiKey);

export const registerHandler = async (user) => {
  return await axios.post(`${apiKey}/register`, user, {
    headers: {
      "Content-Type": "application/json"
    },
  });
};
export const loginHandler = async (user) => {
  return await axios.post(`${apiKey}/login`, user, {
    headers: {
      "Content-Type": "application/json"
    },
  });
};
