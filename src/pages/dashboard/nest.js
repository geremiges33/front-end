export default function Dashboard(){
  return(
    <div className="h-screen p-8 flex space-x-8 ">
      <div className="w-1/5 h-full bg-gray-200 rounded-xl flex flex-col items-center p-4 space-y-4">
      <img src="https://nhs.edu.mn/favicon.ico" className="w-24 h-24 flex justify-center"></img>
      <h1 className="text-blue-500 text-lg font-bold mt-2">Nest Education IT School</h1>
      <p className="font-bold text-sm">Энхжав Батжаргал</p>
      <p className="text-sm">Анги: 11A</p>
      
      <div className="w-60 flex flex-col gap-4 ">
        <button className="bg-blue-500 text-white py-2 rounded">Go To Lab 1</button>
        <button className="bg-blue-500 text-white py-2 rounded">Go To Lab 2</button>
        </div>
      </div>

      <main className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-4 ">
          <div className="space-x-2 p-2">
          <button className="bg-black text-white text-lg font-semibold py-2 px-1 rounded">Харилцагчид</button>
          <input type="text" placeholder="Search" className="w-96 p-2 mb-4 border border-gray-300 rounded"></input>
        </div>
          <button className="bg-orange-500 text-white px-2 py-2 rounded">Барааг бүртгэх</button>
        </div>

        
      </main>
    </div>
  );
}