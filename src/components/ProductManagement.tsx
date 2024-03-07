import React from "react";

export default function ProductManagement() {
  return (
    <>
      <div className="h-16 px-10 py-5 bg-slate-400 ">
        <h1 className="text-2xl font-medium">Product Management</h1>
      </div>
      <br />
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-4">Product name</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Price</th>
              <th className="px-4 py-4">No. in stock</th>
              <th className="px-4 py-4">No. of items sold</th>
              <th className="px-4 py-4">Expiry date</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Vegetables --> */}
            <tr>
              <td className="px-4 py-2">Carrots</td>
              <td className="px-4 py-2">Vegetables</td>
              <td className="px-4 py-2">$2.50</td>
              <td className="px-4 py-2">20</td>
              <td className="px-4 py-2">15</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Spinach</td>
              <td className="px-4 py-2">Vegetables</td>
              <td className="px-4 py-2">$3.00</td>
              <td className="px-4 py-2">15</td>
              <td className="px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tomatoes</td>
              <td className="px-4 py-2">Vegetables</td>
              <td className="px-4 py-2">$1.80</td>
              <td className="px-4 py-2">25</td>
              <td className="px-4 py-2">20</td>
            </tr>

            {/* <!-- Fruits --> */}
            <tr>
              <td className="px-4 py-2">Apples</td>
              <td className="px-4 py-2">Fruits</td>
              <td className="px-4 py-2">$1.00</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bananas</td>
              <td className="px-4 py-2">Fruits</td>
              <td className="px-4 py-2">$0.75</td>
              <td className="px-4 py-2">40</td>
              <td className="px-4 py-2">35</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Oranges</td>
              <td className="px-4 py-2">Fruits</td>
              <td className="px-4 py-2">$1.20</td>
              <td className="px-4 py-2">35</td>
              <td className="px-4 py-2">30</td>
            </tr>

            {/* <!-- Grains --> */}
            <tr>
              <td className="px-4 py-2">Brown Rice</td>
              <td className="px-4 py-2">Grains</td>
              <td className="px-4 py-2">$2.20</td>
              <td className="px-4 py-2">50</td>
              <td className="px-4 py-2">45</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Quinoa</td>
              <td className="px-4 py-2">Grains</td>
              <td className="px-4 py-2">$3.50</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Oats</td>
              <td className="px-4 py-2">Grains</td>
              <td className="px-4 py-2">$1.80</td>
              <td className="px-4 py-2">40</td>
              <td className="px-4 py-2">35</td>
            </tr>

            {/* <!-- Protein Foods --> */}
            <tr>
              <td className="px-4 py-2">Chicken Breast</td>
              <td className="px-4 py-2">Protein Foods</td>
              <td className="px-4 py-2">$5.50</td>
              <td className="px-4 py-2">20</td>
              <td className="px-4 py-2">15</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Salmon</td>
              <td className="px-4 py-2">Protein Foods</td>
              <td className="px-4 py-2">$7.00</td>
              <td className="px-4 py-2">15</td>
              <td className="px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tofu</td>
              <td className="px-4 py-2">Protein Foods</td>
              <td className="px-4 py-2">$3.00</td>
              <td className="px-4 py-2">25</td>
              <td className="px-4 py-2">20</td>
            </tr>

            {/* <!-- Dairy --> */}
            <tr>
              <td className="px-4 py-2">Milk</td>
              <td className="px-4 py-2">Dairy</td>
              <td className="px-4 py-2">$2.00</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Cheese</td>
              <td className="px-4 py-2">Dairy</td>
              <td className="px-4 py-2">$4.50</td>
              <td className="px-4 py-2">25</td>
              <td className="px-4 py-2">20</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Yogurt</td>
              <td className="px-4 py-2">Dairy</td>
              <td className="px-4 py-2">$3.20</td>
              <td className="px-4 py-2">35</td>
              <td className="px-4 py-2">30</td>
            </tr>

            {/* <!-- Oils & Solid Fats --> */}
            <tr>
              <td className="px-4 py-2">Olive Oil</td>
              <td className="px-4 py-2">Oils & Solid Fats</td>
              <td className="px-4 py-2">$6.00</td>
              <td className="px-4 py-2">20</td>
              <td className="px-4 py-2">15</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Butter</td>
              <td className="px-4 py-2">Oils & Solid Fats</td>
              <td className="px-4 py-2">$4.00</td>
              <td className="px-4 py-2">15</td>
              <td className="px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Coconut Oil</td>
              <td className="px-4 py-2">Oils & Solid Fats</td>
              <td className="px-4 py-2">$5.50</td>
              <td className="px-4 py-2">25</td>
              <td className="px-4 py-2">20</td>
            </tr>

            {/* <!-- Added Sugars --> */}
            <tr>
              <td className="px-4 py-2">Cane Sugar</td>
              <td className="px-4 py-2">Added Sugars</td>
              <td className="px-4 py-2">$2.00</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Honey</td>
              <td className="px-4 py-2">Added Sugars</td>
              <td className="px-4 py-2">$3.50</td>
              <td className="px-4 py-2">25</td>
              <td className="px-4 py-2">20</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Maple Syrup</td>
              <td className="px-4 py-2">Added Sugars</td>
              <td className="px-4 py-2">$4.00</td>
              <td className="px-4 py-2">35</td>
              <td className="px-4 py-2">30</td>
            </tr>

            {/* Beverages */}
            <tr>
              <td className="px-4 py-2">Water</td>
              <td className="px-4 py-2">Beverages</td>
              <td className="px-4 py-2">$1.00</td>
              <td className="px-4 py-2">50</td>
              <td className="px-4 py-2">45</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Coffee</td>
              <td className="px-4 py-2">Beverages</td>
              <td className="px-4 py-2">$2.50</td>
              <td className="px-4 py-2">40</td>
              <td className="px-4 py-2">35</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tea</td>
              <td className="px-4 py-2">Beverages</td>
              <td className="px-4 py-2">$1.80</td>
              <td className="px-4 py-2">45</td>
              <td className="px-4 py-2">40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
