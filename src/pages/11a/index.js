import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

  const CardGrid = ({ title, data }) => (
    <div>
      <p className="text-2xl font-bold border-b-2 pb-2 mb-4">{title}</p>
      <div className="grid grid-cols-4 gap-4 m-4">
        {filterData(data).map((item) => (
          <div
            key={item.id}
            className="border-4 border-gray-500 rounded shadow cursor-pointer p-4 text-xs space-y-2 hover:border-black"
            onClick={() => router.push(`/11a/${item.id}`)}
          >
            <img
              src={item?.images?.[0] || item?.images}
              alt={item.name}
              className="w-full h-60 rounded-xl bg-cover border-b-2"
            />
            <p className="font-bold text-center text-xl border-t-2 pt-2 text-black">{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-lg w-1/2 shadow-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading && <p className="text-center text-gray-700 font-semibold">Loading...</p>}

      <CardGrid title="Clothes" data={clothesData} />
      <CardGrid title="Instruments" data={instrumentsData} />
      <CardGrid title="Historical Tools" data={historicalToolsData} />
      <CardGrid title="Ethnic Groups" data={ethnicGroupsData} />
      <CardGrid title="Tourist Attractions" data={touristAttractionsData} />
    </div>
  );
}
