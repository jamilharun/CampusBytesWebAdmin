import axios from "axios"

const ip = import.meta.env.VITE_LINODE_SERVER

export const fetchAllUser = async () => {
    try {
      const response = await axios.get(`${ip}/api/postgres/user`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export const fetchAllShop = async () => {
  try {
    const response = await axios.get(`${ip}/api/sanity/shop/`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const fetchAllOrder = async () => {
  try {
    const response = await axios.get(`${ip}/api/postgres/order/`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateOrder = async (order : any) => {
  try {
    // let orderid = order.checkoutid
    let userRef = order.userref
    let shopRef = order.shopref
    let groupNum = order.groupnum
    let isCanceled = true
    const response = await axios.post(`${ip}/api/postgres/order/cancel`, {userRef, shopRef, groupNum, isCanceled});
    if (response.data) {
      console.log(response.data);
      return response.data;
    } else {
      return "isCancell failed"
    }
  } catch (error  ) {
    console.log('error', error);
    throw error;
  }
}
