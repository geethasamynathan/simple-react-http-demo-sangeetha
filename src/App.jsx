import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import BrandList from "./components/brandlist";
import Posts from "./components/posts";

function App() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://localhost:7092/api/Brands", {
    //       mode: "no-cors",
    //     });
    //     console.log("response" + response.json());
    //     // if (!response.ok) {
    //     //   throw new Error("Failed to fetch data");
    //     // }
    //     const data = await response.json();
    //     console.log("returned data" + data);
    //     setBrands(data); // Assuming the API response directly provides the brands array
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7092/api/Brands");
        // if (!response.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        const data = await response.json();
        console.log("API Response:", data); // Log the response data
        setBrands(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* <Posts/> */}
      <h1>Brands</h1>
      <BrandList brands={brands} />
    </div>
  );
}

export default App;
