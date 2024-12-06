import React from "react";
import { BrowserRouter as Router, Route, Routes, useSearchParams } from "react-router-dom";

const Greeting = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Recruto";
  const message = searchParams.get("message") || "Давай дружить!";
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello {name}!</h1>
      <p>{message}</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
