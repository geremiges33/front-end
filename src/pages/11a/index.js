import { useEffect, useState } from "react";

export default function Home() {
  const [historicalToolsData, setHistoricalToolsData] = useState([]);
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [provincesData, setProvincesData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 

        const clothesResponse = await fetch("https://mongol-api-rest.vercel.app/Clothes");
        const clothesResult = await clothesResponse.json();
        setClothesData(clothesResult.clothes);

        const instrumentsResponse = await fetch("https://mongol-api-rest.vercel.app/Instruments");
        const instrumentsResult = await instrumentsResponse.json();
        setInstrumentsData(instrumentsResult.instruments);

        const historicalToolsResponse = await fetch("https://mongol-api-rest.vercel.app/HistoricalTools");
        const historicalToolsResult = await historicalToolsResponse.json();
        setHistoricalToolsData(historicalToolsResult.historicalTools);

        const ethnicGroupsResponse = await fetch("https://mongol-api-rest.vercel.app/EthnicGroups");
        const ethnicGroupsResult = await ethnicGroupsResponse.json();
        setEthnicGroupsData(ethnicGroupsResult.ethnicGroups);

        const provincesResponse = await fetch("https://mongol-api-rest.vercel.app/Provinces");
        const provincesResult = await provincesResponse.json();
        setProvincesData(provincesResult.provinces);

        const historicalFiguresResponse = await fetch("https://mongol-api-rest.vercel.app/HistoricalFigures");
        const historicalFiguresResult = await historicalFiguresResponse.json();
        setHistoricalFiguresData(historicalFiguresResult.historicalFigures);

        const touristAttractionsResponse = await fetch("https://mongol-api-rest.vercel.app/TouristAttractions");
        const touristAttractionsResult = await touristAttractionsResponse.json();
        setTouristAttractionsData(touristAttractionsResult.touristAttractions);

        setLoading(false); 
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
 


  return (
      <div className="mx-auto p-8">
  
    

   
  {loading && <p className="absolute right-1/2 bg-black ">...loading</p>}
    <p>Clothes</p>
      <div className="grid grid-cols-4 gap-4 m-4">
        {clothesData.map((item) =>(
          <div
          key={item.id}
          className="border-2 rounded  shadow cursor-pointer p-4 text-xs space-y-2"
          onClick={() => router.push('/11a/${item.id}')}>
            <img
            src={item?.images[0]}
            alt="123"
            className="w-full h-60 rounded-xl bg-cover">

            </img>
            <p className="font-bold text-center">{item.name}</p>
            <p>{item.description}</p>

          </div>
        ))}

      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instrumentsData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {historicalToolsData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">
              {item.description}
            </p>

            {item.materials && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>Materials:</h1> {item.materials}
              </p>
            )}

            {item.timePeriod && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Time Period:</h1> {item.timePeriod}
              </p>
            )}
            {item.usage && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Usage:</h1> {item.usage}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ethnicGroupsData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>

            {item.linguistic && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>Linguistic:</h1> {item.linguistic}
              </p>
            )}

            {item.population && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Population:</h1> {item.population}
              </p>
            )}
          </div>
        ))}
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {provincesData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">
              {item.description}
            </p>

            {item.area && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>area:</h1> {item.area}
              </p>
            )}

            {item.population && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>population:</h1> {item.population}
              </p>
            )}
            {item.capital && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>population:</h1> {item.capital}
              </p>
            )}
            {item.soums && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>population:</h1> {item.soums}
              </p>
            )}
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {historicalFiguresData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>

            {item.dateOfBirth && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>dateOfBirth:</h1> {item.dateOfBirth}
              </p>
            )}

            {item.countryOfBirth && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>countryOfBirth:</h1> {item.countryOfBirth}
              </p>
            )}

            {item.dateOfDeath && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>dateOfDeath:</h1> {item.dateOfDeath}
              </p>
            )}
          
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {touristAttractionsData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">
              {item.description}
            </p>

            {item.address[0] && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>address:</h1> {item.address[0]}
              </p>
            )}
          </div>
        ))}
      </div>
    




    </div>
    
  );
}
