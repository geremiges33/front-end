import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const result = await response.json();
        setData(result.clothes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            
            {item.materials && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Materials:</strong> {item.materials}
              </p>
            )}
          
            {item.time_period && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Time Period:</strong> {item.time_period}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
