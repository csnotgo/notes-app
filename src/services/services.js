import axios from "axios";

const API_KEY = "	bWs8oNdZbdSy0ehv0TAmkD";
axios.defaults.baseURL = `https://quintadb.com.ua/apps/a-qbL6WPjdT7VdJ1mgqJjJ/`;

export const getAll = async () => {
  try {
    return await axios.get(`dtypes/entity/bFrCkYWRzkEyo4W5iaWOeq.json?rest_api_key=${API_KEY}`);
  } catch (error) {
    console.log(error);
  }
};

export const createNew = async () => {
  try {
    return await axios.post(`dtypes.json?rest_api_key=${API_KEY}`, {
      values: {
        entity_id: "bFrCkYWRzkEyo4W5iaWOeq",
        baWO3cQa1bFOD0WR1Mm10O: " ",
        ddM3Kkm2bkk4kBwSojo8kB: " ",
        dcIcBdQa5ei4k6WPVcH8o6: new Date(Date.now()),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecord = async (id) => {
  try {
    return await axios.delete(`dtypes/${id}.json?rest_api_key=${API_KEY} `);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecord = async (id, note) => {
  try {
    return await axios.put(`dtypes/${id}.json?rest_api_key=${API_KEY} `, {
      values: {
        entity_id: "bFrCkYWRzkEyo4W5iaWOeq",
        baWO3cQa1bFOD0WR1Mm10O: note.title,
        ddM3Kkm2bkk4kBwSojo8kB: note.text,
        dcIcBdQa5ei4k6WPVcH8o6: new Date(Date.now()),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
