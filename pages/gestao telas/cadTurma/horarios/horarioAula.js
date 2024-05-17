import './App.css';
import { useState } from 'react';
import axios from "axios"
function App() {
  const [data, setData] = useState([])
  // Número total de páginas
  const [totalPages, setTotalPages] = useState(1)
  // Número total de passageiros
  const [totalPassengers, setTotalPassengers] = useState(1)
  return (
    <div className="App"></div>
  );
}
export default App;