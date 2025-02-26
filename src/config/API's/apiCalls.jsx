import axios from "axios";

export const AllApiCall = {
  newsGet: async () => {
    try {
      const response = await axios.get("https://toi2.petergangmei.com/api");
      return response.data;
      //   console.log("response", response);
    } catch (error) {
      console.error("error fetching data from the endpoints", error);
      throw new Error("error");
    }
  },
};
