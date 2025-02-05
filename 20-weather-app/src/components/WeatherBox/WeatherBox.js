import PickCity from "../PickCity/PickCity";
import WeatherSummary from "../WeatherSummary/WeatherSummary";
import Loader from "../Loader/Loader";
import { useCallback, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";

const WeatherBox = () => {
  const [cityWeather, setCityWeather] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const handleCityChange = useCallback((city) => {
    setRequestError(false);
    setPendingRequest(true);

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
    ).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          const weatherData = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          };
          setPendingRequest(false);
          setCityWeather(weatherData);
        });
      } else {
        setRequestError(true);
        setPendingRequest(false);
        setCityWeather("");
      }
    });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {cityWeather && <WeatherSummary {...cityWeather} />}
      {pendingRequest && <Loader />}
      {requestError && (
        <ErrorBox>We cannot access data for this city.</ErrorBox>
      )}
    </section>
  );
};

export default WeatherBox;
