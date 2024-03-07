import React from "react";

const categories = [
  "Vegetables",
  "Fruits",
  "Grains",
  "Protein Foods",
  "Dairy",
  "Oils & Solid Fats",
  "Added Sugars",
  "Beverages",
];

const YourComponent: React.FC = () => {
  return (
    <>
      <div className="h-16 px-10 py-5 bg-slate-400 ">
        <h1 className="text-2xl font-medium">Category Management</h1>
      </div>
      <br />
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-4"></th>
              <th className="px-4 py-4">No. of items</th>
              <th className="px-4 py-4">Total rating</th>
              <th className="px-4 py-4">Column 3</th>
              <th className="px-4 py-4">Column 4</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{category}</td>
                <td className="px-4 py-2">Data</td>
                <td className="px-4 py-2">Data</td>
                <td className="px-4 py-2">Data</td>
                <td className="px-4 py-2">Data</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
/* export default function CategoryManagement() {
  return (
    <>
      <div className="h-16 px-10 py-5 bg-slate-400 ">
        <h1 className="text-2xl font-medium">Category Management</h1>
      </div>
      <br />
      <div className="grid justify-items-end">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {
            // Open form to add new category
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add Category
        </button>
      </div>
    </>
  );
} */
export default YourComponent;
