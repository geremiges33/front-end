import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [historicalToolsData, setHistoricalToolsData] = useState([]);
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [provincesData, setProvincesData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const fetchAndSet = async (url, setter) => {
          const response = await fetch(url);
          const result = await response.json();
          setter(Object.values(result)[0]);
        };

        await Promise.all([
          fetchAndSet("https://mongol-api-rest.vercel.app/Clothes", setClothesData),
          fetchAndSet("https://mongol-api-rest.vercel.app/Instruments", setInstrumentsData),
          fetchAndSet("https://mongol-api-rest.vercel.app/HistoricalTools", setHistoricalToolsData),
          fetchAndSet("https://mongol-api-rest.vercel.app/EthnicGroups", setEthnicGroupsData),
          fetchAndSet("https://mongol-api-rest.vercel.app/Provinces", setProvincesData),
          fetchAndSet("https://mongol-api-rest.vercel.app/HistoricalFigures", setHistoricalFiguresData),
          fetchAndSet("https://mongol-api-rest.vercel.app/TouristAttractions", setTouristAttractionsData),
        ]);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterData = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSubmit = () => {
      // axios.get
      // axios.post - shineer data uusgeh
      // axios.patch - edit buyu 
      // axios.delete
      axios.post("https://mongol-api-rest.vercel.app/Clothes");
    }

  return (
    
    <div className="mx-auto p-8 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for items..."
          className="p-3 border-2 border-gray-300 rounded-lg w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center">
      <button className="bg-blue-400 rounded-2xl p-2">shiner haritsgch uusgeh</button>
    </div>
      

      

      {loading && (
        <p className="text-center text-gray-700 font-semibold text-lg">Loading...</p>
      )}

      <div className="space-y-10">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Clothes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData(clothesData).map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer p-4 space-y-3"
                onClick={() => router.push(`/11a/${item.id}`)}
              >
                <img
                  src={item?.images?.[0] || item?.images}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <p className="font-semibold text-lg text-center">{item.name}</p>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Instruments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData(instrumentsData).map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer p-4 space-y-3"
              >
                <img
                  src={item?.images?.[0] || item?.images}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <p className="font-semibold text-lg text-center">{item.name}</p>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Historical Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData(historicalToolsData).map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer p-4 space-y-3"
              >
                <img
                  src={item?.images?.[0] || item?.images}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <p className="font-semibold text-lg text-center">{item.name}</p>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Ethnic Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData(ethnicGroupsData).map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer p-4 space-y-3"
              >
                <img
                  src={item?.images?.[0] || item?.images}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <p className="font-semibold text-lg text-center">{item.name}</p>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Historical Figures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData(historicalFiguresData).map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer p-4 space-y-3"
              >
                <img
                  src={item?.images?.[0] || item?.images}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <p className="font-semibold text-lg text-center">{item.name}</p>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Tourist Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData(touristAttractionsData).map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer p-4 space-y-3"
              >
                <img
                  src={item?.images?.[0] || item?.images}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <p className="font-semibold text-lg text-center">{item.name}</p>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
