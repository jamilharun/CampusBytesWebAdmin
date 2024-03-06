import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function ShopManagement() {
  const [shopData, getShopData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState('');

  const queryClient = useQueryClient();

  // const { data: shops, isLoading, error, isFetching} = useQuery({ 
  //   queryKey: ['shop'], 
  //   queryFn: fetchAllShop,
  //   gcTime: 10000,
  // });
  
  // console.log({isLoading, isFetching, error, shops});
  
  // const { mutateAsync: shopMutation } = useMutation({
  //   mutationFn: ,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['shop'] })
  //   },
  // })

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <div className='h-16 px-10 py-5 bg-slate-400 '>
        <h1 className='text-2xl font-medium'>Shop Management</h1>
      </div>
      <div>
        <div>
          <input type="text" placeholder="shopName" />
          <button type='submit'>submit</button>
        </div>
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
          shops?.map((shop: any) => (
            <div key={shop?._id}  className='grid grid-cols-12 gap-5'>
              <div>{shop?._id}</div>
              <div>{shop?.shopName}</div>
              <div>{shop?.shopOwner}</div>
              <div>{shop?._type}</div>
              <div>{shop?.address}</div>
              <div>{shop?.latitude}</div>
              <div>{shop?.longitude}</div>
              <div>{shop?.isActive}</div>
              <div>{shop?.isFeatured}</div>
              <div>{shop?.isPromoted}</div>
              <div>{shop?._createdAt}</div>
              <div>{shop?._updatedAt}</div>
            </div>
          ))
        } */}
        <div>
          <button onClick={()=>{
            // basta button
          }}>
            button
          </button>
        </div>
      </div>
    </div>
  )
}
