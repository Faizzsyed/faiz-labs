import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return loading ? <Loader /> : <Home />;
}

export default App;