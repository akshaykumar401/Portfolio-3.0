import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components/index.js";
import { Loader } from "../src/Components/index.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center bg-slate-950">
          <Loader />
        </div>
      ) : (
        <div className="min-h-screen flex flex-wrap content-between dark:bg-slate-950 bg-slate-200 dark:text-white text-black">
          <div className="w-full block">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
