import axios from "axios";

const apiKey = process.env.REACT_APP_API;

export const createPerson = async (name, authtoken) =>
  await axios.post(`${apiKey}/person`, name, {
    headers: {
      authtoken,
    },
  });
