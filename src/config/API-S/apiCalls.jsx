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
export const fetchDetailArticle = async (slug) => {
  try {
    const response = await axios.get(
      `https://toi2.petergangmei.com/api/articles/${slug}`
    );

    return response.data;
  } catch (error) {
    return [];
  }
};
