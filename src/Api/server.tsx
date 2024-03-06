import axios from "axios"

const ip = import.meta.env.VITE_LINODE_SERVER

export const fetchAllUser = async () => {
    try {
      const response = await axios.get(`${ip}/api/postgres/user`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };