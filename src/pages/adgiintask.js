import { useRouter } from "next/router";
import { useState } from "react";

const userData = [
    { id:1, name: "Anar", email: "anar@gmail.com"}, 
    { id:2, name: "Hanbileg", email: "hanbileg@gmail.com"},  
    { id:3, name: "Tselmeg", email: "tselmeg@gmail.com"},  
    { id:4, name: "Enhjaw", email: "enhjaw@gmail.com"},  
    { id:5, name: "Shine-Erdene", email: "shinee@gmail.com"},  
    { id:6, name: "tugsuu", email: "tugsuu@gmail.com"},  
    { id:7, name: "Amartuwshin", email: "amartuwshin@gmail.com"},  
    { id:8, name: "Anar-erdene", email: "anaraa@gmail.com"},  
];
export default function Users(){
    const router = useRouter();
    const [users, setUsers] = useState(userData);
    const [search, setSearch] = useState("");
    const filteredUsers = users.filter((user)=>
    user.name.toLowerCase().includes(search.toLowerCase())
);
return(
    <div className="min-h-screen bg-gray-500 p-8">
        <h1>
            Hereglegchiin jagsaalt
        </h1>
        <div className="mb-6">
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Hereglegchiin nereer haina uu..."
            className="w-full p-2 border bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            <div className="grid gap-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user)=>(
                        <div
                        key={user.id}
                        className="bg-black shadow-md rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-medium">{user.name}</p>
                                <p className="tet-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>
                    ))
                ) :(
                    <p className="text-center text-black">Hereglegch oldsongui.</p>

                )}

            </div>
            <div>
      <button
        className="border rounded-lg bg-gray-400 p-4 font-bold mb-2 hover:bg-blue-200"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
    </div>
    </div>
);
}