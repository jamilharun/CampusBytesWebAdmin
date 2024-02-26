import { sClient } from "../../Api/sanity";
import { fetchAllShops } from "./gq";

export const sanityFetch = async (query: any) => {
    try {
        const data = await sClient.fetch(query);
        if (data.length == 0) {
          console.log('failed to fetch from Sanity.io:');
          return null;
        } else {
          console.log('data retrieved from Sanity.io:', data.length);
          return data;
        }
      } catch (error) {
        console.log('An error occurred:', error);
        throw error;
      }
};
export const sanityUpdate = async (data: any) => {
    // Update the data in Sanity.io using the appropriate method
};

export const sanityDelete = async (data: string) => {
    try {
        // Delete the data in Sanity.io using the appropriate method
        const response = await sClient.delete(data);
    
        return response;
      } catch (error) {
        console.error('Error deleting shop data in Sanity.io:', error);
        throw error;
      }
};

//==================================
//fetch
export const fetchAllShop = async () => {
  try {
    const sanRes = await sanityFetch(fetchAllShops);
    if (!sanRes) {
      console.log('Error in fetching data from sanity', sanRes);
      return null
    } else {
      console.log(`fetching successful`);
      return sanRes;
    }
  } catch (error) {
    const fE = `Error in fetching data from sanity: ${error}`;
    console.log(fE);
    return null;    
  }
};