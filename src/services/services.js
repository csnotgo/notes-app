import axios from "axios";

const API_KEY = "	cmW6ddUxbngQBdH8oaW7vG";
axios.defaults.baseURL = `https://quintadb.com.ua/apps/dcQ8koW4PntOojWPBdRCkx/`;

export const getAll = async () => {
  try {
    return await axios.get(`dtypes/entity/coWONcKbvdVOovW7ZcO8oq.json?rest_api_key=${API_KEY}`);
  } catch (error) {
    console.log(error);
  }
};

export const createNew = async () => {
  try {
    return await axios.post(`dtypes.json?rest_api_key=${API_KEY}`, {
      values: {
        entity_id: "coWONcKbvdVOovW7ZcO8oq",
        dcGSkGWP1adikXFCkuAmoi: " ",
        ddRCo2W6HdTAfdWPjHiSoP: " ",
        bvW7PSW6PcJyoYWONcKmkI: new Date(Date.now()),
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
        entity_id: "coWONcKbvdVOovW7ZcO8oq",
        dcGSkGWP1adikXFCkuAmoi: note.title,
        ddRCo2W6HdTAfdWPjHiSoP: note.text,
        bvW7PSW6PcJyoYWONcKmkI: new Date(Date.now()),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchByQuery = async (query) => {
  try {
    return await axios.post(`https://quintadb.com.ua/search/dcQ8koW4PntOojWPBdRCkx.json?rest_api_key=${API_KEY}`, {
      entity_id: "coWONcKbvdVOovW7ZcO8oq",
      search: [[{ a: "ddRCo2W6HdTAfdWPjHiSoP", b: query, o: "contains" }]],
    });
  } catch (error) {
    console.log(error);
  }
};
