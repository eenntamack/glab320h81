import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = "2a137000-4767-4dce-a60a-a73e151e04f9";
  const { symbol } = useParams();
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error("Error fetching coin data:", e);
      setCoin(null); // fallback in case of error
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => (
    <div>
      <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
      <h2>{coin.rate}</h2>
    </div>
  );

  return coin && coin.rate ? loaded() : <h1>Loading...</h1>;
}