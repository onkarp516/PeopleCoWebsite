import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Page1 from "./components/Page1";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen" style={{ overflow: "hidden" }}>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/page1" element={<Page1 />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
