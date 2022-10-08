import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React, { Suspense } from "react";

const MainPage = React.lazy(() => import("./Pages/MainPage"));
const DetailPage = React.lazy(() => import("./Pages/DetailPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/:id" element={<DetailPage />} />
        </Routes>
      </Suspense>
    </>
  );  
}

export default App;
