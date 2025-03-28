import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const result = await response.json();
        setData(result.clothes);

        // Find the item that matches the query id
        const foundItem = result.clothes.find((item) => item.id === id);
        setSelectedItem(foundItem);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {loading && <p className="text-lg font-semibold text-gray-600">Loading...</p>}

      <button
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      {selectedItem ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4">{selectedItem.name}</h2>
          <img
            src={selectedItem.images[0]}
            alt={selectedItem.name}
            className="w-full h-64  rounded-lg"
          />
          <p className="mt-4 text-gray-700">{selectedItem.description}</p>
        </div>
      ) : (
        !loading && (
          <p className="text-red-500 text-lg font-semibold">
            Item with ID "{id}" not found!
          </p>
        )
      )}
    </div>
  );
}
