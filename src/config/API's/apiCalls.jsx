import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://toi2.petergangmei.com/api/articles/"
    );
    return response.data.results;
  } catch (error) {
    return [];
  }
};
