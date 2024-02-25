import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { arjd, grss } from '../lib/Redis/rf';
import { sanityFetch } from '../lib/Sanity/sf';
import { fetchAllShops } from '../lib/Sanity/gq';
import { sClient } from '../Api/sanity';
import rClient from '../Api/redis';

export default function ShopManagement() {
  const [shopData, getShopData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);

  console.log('shop Management');
  
  const debuging = async () => {
    // its okay but somehow not working
    try {
      const data = await sClient.fetch(fetchAllShops);
      console.log('data retrieved from sanity', data);
      // return data;
    } catch (error) {
      console.log('An error occurred:', error);
      throw error; // Re-throw the error to propagate it to the calling code
    }

    // testing redis
    // console.log('fetching data from redis');
    // try {
    // const rData = await rClient.hGetAll('test:1');
    // console.log(rData);
    // } catch (error) {
      
    // }
  };
  const YourComponent = () => {
    debuging();
    // const { data, isLoading, error } = useQuery('data', debuging);
  
    // useEffect(() => {
    //   // Do something with the data, isLoading, and error
    //   console.log(data, isLoading, error);
    // }, [data, isLoading, error]);
  
  };
  
  // const fetchData = async () => {
  // const key = 'shop';
  
  //   try {
      
  //     const redRes = await grss(key);
  //     if (!redRes || redRes.length == 0) {
  //       console.log('Error in fetching data from redis', redRes);
  //       const sanRes = await sanityFetch(fetchAllShops);
  //       if (!sanRes) {
  //         console.log('Error in fetching data from sanity', sanRes);
  //         return null
  //       } else {
  //         console.log(`${sanRes.length} data retrieved from sanity`);
  //         await Promise.all(sanRes?.map(async (d: any) => {
  //         await arjd(d);
  //         }));
  //         return sanRes;
  //       }
  //     } else {
  //       console.log(`${redRes.length} data retrieved from redis`);
  //       return redRes;
  //     }
  //   } catch (error) {
  //     const fE = `Error in fetching data from redis: ${error}`;
  //     console.log(fE);
  //     return null;    
  //   }
  // };


  // const initialFetch = async () => {
  //   const { data, isLoading, error} = useQuery('test', fetchData)
  //   useEffect(() => {
  //     if (data) {console.log(data);};

  //     if (isLoading) {return setLoading(true);};
  
  //     if (error) {return setError(true);};
  //   },[data, isLoading, error]);
  // };

  useEffect(()  =>  {
    // initialFetch();
    // const data = fetchData()
    // console.log(data);
  },[shopData]);

  return (
    <div>
      <div className='h-16 px-10 py-5 bg-slate-400 '>
        <h1 className='text-2xl font-medium'>Shop Management</h1>
      </div>
      <div>
        <div className='grid grid-cols-12 gap-5'>
          <div>_id</div>
          <div>Shop Name</div>
          <div>Shop Owner</div>
          <div>_type</div>
          <div>address</div>
          <div>Latitude</div>
          <div>Longitude</div>
          <div>IsActive</div>
          <div>isFeatured</div>
          <div>isPromoted</div>
          <div>_createdAt</div>
          <div>_updatedAt</div>
        </div>
        {/* {
          shopData.map((shop) => (
            <div className='grid grid-cols-12 gap-5'>
              <div>{shop._id}</div>
              <div>{shop.shopName}</div>
              <div>{shop.shopOwner}</div>
              <div>{shop._type}</div>
              <div>{shop.address}</div>
              <div>{shop.latitude}</div>
              <div>{shop.longitude}</div>
              <div>{shop.isActive}</div>
              <div>{shop.isFeatured}</div>
              <div>{shop.isPromoted}</div>
              <div>{shop._createdAt}</div>
              <div>{shop._updatedAt}</div>
            </div>
          ))
        } */}
        <div>
          <button onClick={()=>{
            YourComponent()
          }}>
            button
          </button>
        </div>
      </div>
    </div>
  )
}
