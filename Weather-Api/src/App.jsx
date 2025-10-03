import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { AirVent, CloudSun, Droplet, LucideCloudy, Thermometer } from "lucide-react";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState("Bhopal");

  let fetchWeatherData = async (city) => {
    try {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=ab680f9da7ee4422bbb94836250110&q=${city}&aqi=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log("Data not fetched successfully...", error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchWeatherData(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  console.log(weatherData);

  return (
    <div className="w-screen h-screen flex flex-col font-mono bg-blue-400">
      <div>
        <Navbar setSearch={setSearch} />

        <div className="flex flex-col gap-3 ml-50 mt-25">
          <h1 className="text-7xl text-white border-b-3 border-blue-500 rounded-2xl w-fit p-2 hover:text-blue-600 duration-300">
            {weatherData?.location?.name}
          </h1>
          <h2 className="text-4xl text-white">
            {weatherData?.current?.condition?.text}
          </h2>
        </div>

        <div className="flex-col">
          <div className="flex gap-5 justify-center">
            <Card
              title={"Temperature"}
              value={`${weatherData?.current?.temp_c}°C`}
              icon={Thermometer}
            />
            <Card
              title={"Humidity"}
              value={`${weatherData?.current?.humidity}%`}
              icon={CloudSun}
            />
            <Card
              title={"Wind"}
              value={`${weatherData?.current?.wind_kph}kph`}
              icon={AirVent}
            />
          </div>
          <div className="flex gap-5 justify-center">
            <Card
              title={"Feels Like"}
              value={`${weatherData?.current?.feelslike_c}°C`}
              icon={LucideCloudy}
            />
            <Card
              title={"Dew Point"}
              value={`${weatherData?.current?.dewpoint_c}°C`}
              icon={Droplet}
            />
            <Card
              title={"UV Index"}
              value={`${weatherData?.current?.uv}`}
              icon={LucideCloudy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
