import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchAllOrder, fetchAllQueue, updateOrder } from "../Api/server";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

export default function OrderManagement() {
  const [sortBy, setSortBy] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedReport, setSelectedReport] = useState<string>('');

  const { data: orders} = useQuery({
    queryKey: ['order'],
    queryFn: fetchAllOrder,
    gcTime: 10000,
  });

  const {data: queue} = useQuery({
    queryKey: ["fetchQueue"],
    queryFn: fetchAllQueue,
    gcTime: 10000,
  });



  const handleOpenModal = (order : any) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null); // Reset selected order
  };

  const handleUpdateOrder = () => {
    const result = updateOrder(selectedOrder);
    console.log(result);
    
    handleCloseModal();
  };

  // const getSelectedReport = () => {
  //   if (selectedReport) {
  //     // Find all orders that match the selected report
  //     const matchingOrders = orders.filter((order: any) => order.shopref === selectedReport);
  //     if (matchingOrders.length > 0) {
  //       // Prepare the CSV content
  //       let csvContent = "data:text/csv;charset=utf-8,";
  
  //       // Loop through matchingOrders and append each order's data to the CSV content
  //       matchingOrders.forEach((order: any) => {
  //         const rowData = Object.values(order).join(",") + "\n";
  //         csvContent += encodeURIComponent(rowData);
  //       });
  
  //       // Create a link element to trigger the download
  //       const link = document.createElement("a");
  //       link.setAttribute("href", csvContent);
  //       link.setAttribute("download", `report${selectedReport}.csv`);
  //       // Append the link to the body and trigger the download
  //       document.body.appendChild(link);
  //       link.click();
  //     } else {
  //       console.error("No orders found for the selected report");
  //     }
  //   } else {
  //     console.error("No report selected");
  //   }
  // };
  
  const getSelectedReport = () => {
    if (selectedReport) {
      // Find all orders that match the selected report
      const matchingOrders = orders.filter((order : any) => order.shopref === selectedReport);
      if (matchingOrders.length > 0) {
        // Create a new jsPDF instance
        const doc = new jsPDF();
        
        // Define the columns for the table
        const columns = Object.keys(matchingOrders[0]);
        
        // Define an empty array to store rows
        const rows:any = [];
        
        // Loop through matchingOrders and push each order's data as a row
        matchingOrders.forEach((order : any) => {
          const rowData = Object.values(order);
          rows.push(rowData);
        });
        
        // Add the table to the PDF
        doc.autoTable({
          head: [columns],
          body: rows
        });
        
        // Save the PDF
        doc.save(`report_${selectedReport}.pdf`);
      } else {
        console.error("No orders found for the selected report");
      }
    } else {
      console.error("No report selected");
    }
  };
  
  return (
    <>
      <div className=" h-16 px-10 py-5 bg-slate-400 ">
        <h1 className="text-2xl font-medium">Order Management</h1>
      </div>

      {/* all order that has no payment reference */}
      <div  className="mt-8">
        <div className="mb-8">
          <h1 className="text-2xl font-medium">Get Report</h1>
          <select value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)}>
            <option value="">Select a Report</option>
            {
              queue?.map((queue : any) => {
                return <option key={queue?.shopid} value={`${queue?.shopid}`}>{queue?.shopid}</option>
              })
            }
          </select>
          <button onClick={getSelectedReport}>Get Selected Report</button>
        </div>
        <h1 className="text-2xl font-medium">All incomplete orders</h1>
        
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
          <tr className="">
            <th className="px-4 py-2" >Checkout ID</th>
              {/* Add similar onClick handlers for other headers */}
              <th className="mx-4 my-4">paymentRef</th>
              <th className="mx-4 my-4">userRef</th>
              <th className="mx-4 my-4">shopRef</th>
              <th className="mx-4 my-4">groupNum</th>
              <th className="mx-4 my-4">sericeTax</th>
              <th className="mx-4 my-4">totalamount</th>
              <th className="mx-4 my-4">location</th>
              <th className="mx-4 my-4">isSpecial</th>
              <th className="mx-4 my-4">isCanceled</th>
              <th className="mx-4 my-4">isFinished</th>
              <th className="mx-4 my-4">createdAt</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order : any) => (
              !order.iscanceled ? (
                <tr 
                  key={order._id} 
                  onClick={() => handleOpenModal(order)}
                  className="text-center border-b border-gray-300 hover:bg-teal-300 ease-linear duration-300">
                  <td className="px-4 py-2">{order.checkoutid}</td>
                  <td className="px-4 py-2">{order.paymentref}</td>
                  <td className="px-4 py-2">{order.userref}</td>
                  <td className="px-4 py-2">{order.shopref}</td>
                  <td className="px-4 py-2">{order.groupnum}</td>
                  <td className="px-4 py-2">{order.servicetax}</td>
                  <td className="px-4 py-2">{order.totalamount}</td>
                  <td className="px-4 py-2">{order.location}</td>
                  <td className="px-4 py-2">{order.isspecial ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2">{order.iscanceled ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2">{order.isfinished ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2">{new Date(order.created_at).toLocaleString()}</td>
                </tr>
              ) : null
            ))}
          </tbody>
        </table>
        
      </div>
      

      {/* all order data */}
      <div  className="mt-8">
        <h1 className="text-2xl font-medium">All orders</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
          <tr className="">
            <th className="px-4 py-2" >Checkout ID</th>
              {/* Add similar onClick handlers for other headers */}
              <th className="mx-4 my-4">paymentRef</th>
              <th className="mx-4 my-4">userRef</th>
              <th className="mx-4 my-4">shopRef</th>
              <th className="mx-4 my-4">groupNum</th>
              <th className="mx-4 my-4">sericeTax</th>
              <th className="mx-4 my-4">totalamount</th>
              <th className="mx-4 my-4">location</th>
              <th className="mx-4 my-4">isSpecial</th>
              <th className="mx-4 my-4">isCanceled</th>
              <th className="mx-4 my-4">isFinished</th>
              <th className="mx-4 my-4">createdAt</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order : any) => (
              <tr key={order.checkoutid} className="text-center border-b border-gray-300">
                <td className="px-4 py-2">{order.checkoutid}</td>
                <td className="px-4 py-2">{order.paymentref}</td>
                <td className="px-4 py-2">{order.userref}</td>
                <td className="px-4 py-2">{order.shopref}</td>
                <td className="px-4 py-2">{order.groupnum}</td>
                <td className="px-4 py-2">{order.servicetax}</td>
                <td className="px-4 py-2">{order.totalamount}</td>
                <td className="px-4 py-2">{order.location}</td>
                <td className="px-4 py-2">{order.isspecial ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2">{order.iscanceled ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2">{order.isfinished ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2">{order.created_at}</td>
                <td className="px-4 py-2">{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

      {/* modals */}
      {/* Modal Component (Replace with your actual modal implementation) */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 p-4 md:p-8"> {/* Adjust styling as needed */}
          <div className="p-5 mx-auto max-w-2xl rounded-lg shadow-md bg-white overflow-hidden">
            <p className="text-xl">set order to complete?</p>
            <p className="pt-3">Data:</p>
            <p>Checkout ID: {selectedOrder?.checkoutid}</p>
            <p>Payment Ref: {selectedOrder?.paymentref}</p>
            <div className="flex justify-start">
              <button 
                className="rounded-md mr-5 mt-3 py-2 px-3 bg-slate-400 hover:bg-slate-500 hover:text-white duration-300 ease-linear"
                onClick={handleCloseModal}>Close
              </button>
              <button 
                className="rounded-md mt-3 py-2 px-5 bg-emerald-300 hover:bg-emerald-500 hover:text-white duration-300 ease-linear"
                onClick={handleUpdateOrder}>Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
