import { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [resultado, setResultado] = useState('');

  const convertirTemperatura = () => {
    const tempCelsius = parseFloat(celsius);

    if (isNaN(tempCelsius)) {
      alert('Por favor, ingrese un número válido.');
      setCelsius('');
      return;
    }

    const fahrenheit = (tempCelsius * 9/5) + 32;
    const kelvin = tempCelsius + 273.15;

    setResultado(`Grados Kelvin: ${kelvin.toFixed(2)}\nGrados Fahrenheit: ${fahrenheit.toFixed(2)}`);
  };

  const manejarCambio = (e) => {
    setCelsius(e.target.value);
  };

  return (
    <div className="App">
      <h1>Conversor de Temperatura</h1>
      <input
        type="text"
        value={celsius}
        onChange={manejarCambio}
        placeholder="Ingrese temperatura en °C"
      />
      <button onClick={convertirTemperatura}>Convertir</button>
      <pre>{resultado}</pre>
    </div>
  );
}

export default App;
