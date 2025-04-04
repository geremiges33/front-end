import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const result = await response.json();
        setData(result.clothes);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-semibold">Loading...</p>
    </div>;
  }

  if (!data) {
    return <div className="flex justify-center items-center h-screen">
      <p className="text-lg text-gray-500">Data not loaded yet.</p>
    </div>;
  }

  const foundItem = data.find((item) => item.id === router.query.id);

  return (
    <div className="p-4">
      <button
        className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
        onClick={() => router.back()}
      >
        Go Back
      </button>

      {foundItem ? (
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">{foundItem.name}</h2>
          <p className="text-gray-600 mb-2">{foundItem.description}</p>
          <img src={foundItem.images} alt={foundItem.name} className="w-full max-w-md rounded-md mb-4" />
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
            View More
          </button>
        </div>
      ) : (
        <p className="text-red-500">
          Item with ID "{router.query.id}" not found.
        </p>
      )}
    </div>
  );
}