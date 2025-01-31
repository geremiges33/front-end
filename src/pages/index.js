import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 gap-6">
      <button className="w-96 h-48 bg-red-500" onClick={() => {
            router.push("cv");
          }}>cv</button>
      <button className="w-96 h-48 bg-red-500" onClick={() => {
            router.push("task2");
          }}>Weather</button>
      <button className="w-96 h-48 bg-red-500" onClick={() => {
            router.push("task3");
          }}>News</button>  
      <button className="w-96 h-48 bg-red-500" onClick={() => {
            router.push("adgiintask");
          }}>search</button>
      <button className="w-96 h-48 bg-red-500" onClick={() => {
            router.push("cv");
          }}>05</button>
      <button className="w-96 h-48 bg-red-500">06</button>
    </div>
  );
}