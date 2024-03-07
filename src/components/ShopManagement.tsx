import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function ShopManagement() {
  const [shopData, getShopData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState("");

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
      <div className="h-16 px-10 py-5 bg-slate-400 ">
        <h1 className="text-2xl font-medium">Shop Management</h1>
      </div>
      <br />
      <div>
        <div className="flex">
          <input
            type="text"
            placeholder="Shop Name"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </div>
        <br />
        <div>
          <table className="min-w-full divide-y divide-gray-200 overflow-scroll">
            <thead className="bg-gray-50">
              <tr className="grid grid-cols-12 gap-5">
                <th className="px-4 py-4">_id</th>
                <th className="px-4 py-4">Shop Name</th>
                <th className="px-4 py-4">Shop Owner</th>
                <th className="px-4 py-4">_type</th>
                <th className="px-4 py-4">Address</th>
                <th className="px-4 py-4">Latitude</th>
                <th className="px-4 py-4">Longitude</th>
                <th className="px-4 py-4">IsActive</th>
                <th className="px-4 py-4">IsFeatured</th>
                <th className="px-4 py-4">IsPromoted</th>
                <th className="px-4 py-4">_createdAt</th>
                <th className="px-4 py-4">_updatedAt</th>
              </tr>
            </thead>
            <tbody>{/* Add your table rows here */}</tbody>
          </table>
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
          <button
            onClick={() => {
              // basta button
            }}
          >
            button
          </button>
        </div>
      </div>
    </div>
  );
}
