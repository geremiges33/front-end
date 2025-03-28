import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect, useState } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [color, setColor] = useState("");
  
  return (
    
    <div className={`flex space-x-4 w-full h-screen bg-${color}-500`}>
      <p>Ungu solih</p>
      <button className="border bg-purple-500 py-4 px-6 h-36 w-36" onClick={() => {
        setColor("purple");
      }}>
        Purple
      </button>
      <button className="border bg-yellow-500 py-4 px-6 h-36 w-36" onClick={() => {
        setColor("yellow");
      }}>
        Yellow  
      </button>
      <button className="border bg-cyan-500 py-4 px-6 h-36 w-36" onClick={() => {
        setColor("cyan");
      }}>
        Cyan
      </button>

      
    </div>
  );
}