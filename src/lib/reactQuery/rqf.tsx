// import { useEffect, useState } from "react";
// import { fetchAllShop } from "../Sanity/sf";

// //fetch
// export const allShop = async () => {
//     const [Loading, setLoading] = useState(false);
//     const [err, setErr] = useState(false);

//     const { data, isLoading, error} = useQuery('shop', fetchAllShop)
//     useEffect(() => {
//       if (data) {console.log(data);};

//       if (isLoading) {return setLoading(true);};
  
//       if (error) {return setErr(true);};
//     },[data, isLoading, error]);
// };

// export const useSanityData = () => {
//     return query.useQuery('sanityData', fetchSanityData);
//   };