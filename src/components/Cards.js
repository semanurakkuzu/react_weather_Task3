import { useContext, useState, useEffect } from 'react'
import SelectProvince from '../context/SelectProvince'
import axios from 'axios'
import WeatherCodes from '../MockData/weatherCodes'

function Cards() {
  //The context information is transferred to the page
  const { province } = useContext(SelectProvince)
  const [weatherData, setWeatherData] = useState()
// Icon and code information are obtained from weatherCodes
  const weatherTypes = WeatherCodes;
// When there is no province, useEffect does not work, and if there is one, getWeatherData fetches the data
  useEffect(() => {
    if (!province) return

    getWeatherData(province)
  }, [province])
// This function fetches data from the API based on the province information
  function getWeatherData(province) {
    axios(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${province.latitude}&lon=${province.longitude}&appid=f5244eae4e81b70362d7814803f0069c`
    )
      .then((res) => setWeatherData(res.data))
      .catch((e) => console.log(e))
  }
  // The temperature is converted to Celsius and the first two digits are taken
  function getFirstNDigits(number) {
    return Number(String(number).slice(0, 2))
  }
// Day information is obtained and the day of the week is calculated based on the information
  function getDateDay(date) {
    const day = new Date(date)
    const dayNow = day.getDay()
    if (dayNow === 1) {
      return 'Pazartesi'
    } else if (dayNow === 2) {
      return 'Salı'
    } else if (dayNow === 3) {
      return 'Çarşamba'
    } else if (dayNow === 4) {
      return 'Perşembe'
    } else if (dayNow === 5) {
      return 'Cuma'
    } else if (dayNow === 6) {
      return 'Cumartesi'
    } else {
      return 'Pazar'
    }
  }
  console.log(weatherTypes)

  return (
    <>
      {weatherData && (
        <div className="flex flex-row ml-10">
          <div className="basis-1/4 mr-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
              <div className="px-4 py-6">
                <div className="font-bold text-xl mb-2 text-center">
                  {getDateDay(weatherData.list[0].dt_txt)}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-full weather_img object-center rounded-full"
                  src={weatherTypes[weatherData.list[0].weather[0].icon].icon}
                  alt="weather"
                />
              </div>
              <div className="flex justify-center pt-4 pb-2 ">
                <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[0].main.temp_min - 273.15)}
                  °C
                </span>
                <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[0].main.temp_max - 273.15)}
                  °C
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 mr-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
              <div className="px-4 py-6">
                <div className="font-bold text-xl mb-2 text-center">
                  {getDateDay(weatherData.list[8].dt_txt)}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-full weather_img object-center rounded-full"
                  src={weatherTypes[weatherData.list[8].weather[0].icon].icon}
                  alt="weather"
                />
              </div>
              <div className="flex justify-center pt-4 pb-2 ">
                <span className="inline-block  bg-gray-100 rounded-lg  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[8].main.temp_min - 273.15)}
                  °C
                </span>
                <span className="inline-block bg-gray-100 rounded-lg  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[8].main.temp_max - 273.15)}
                  °C
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 mr-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
              <div className="px-4 py-6">
                <div className="font-bold text-xl mb-2 text-center">
                  {getDateDay(weatherData.list[16].dt_txt)}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-full weather_img object-center rounded-full"
                  src={weatherTypes[weatherData.list[16].weather[0].icon].icon}
                  alt="weather"
                />
              </div>
              <div className="flex justify-center pt-4 pb-2 ">
                <span className="inline-block bg-gray-100 rounded-lg  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[16].main.temp_min - 273.15)}
                  °C
                </span>
                <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[16].main.temp_max - 273.15)}
                  °C
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 mr-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
              <div className="px-4 py-6">
                <div className="font-bold text-xl mb-2 text-center">
                  {getDateDay(weatherData.list[24].dt_txt)}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-full weather_img object-center rounded-full"
                  src={weatherTypes[weatherData.list[24].weather[0].icon].icon}
                  alt="weather"
                />
              </div>
              <div className="flex justify-center pt-4 pb-2 ">
                <span className="inline-block  bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[24].main.temp_min - 273.15)}
                  °C
                </span>
                <span className="inline-block  bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[24].main.temp_max - 273.15)}
                  °C
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 mr-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
              <div className="px-4 py-6">
                <div className="font-bold text-xl mb-2 text-center">
                  {getDateDay(weatherData.list[32].dt_txt)}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-full weather_img object-center rounded-full"
                  src={weatherTypes[weatherData.list[32].weather[0].icon].icon}
                  alt="weather"
                />
              </div>
              <div className="flex justify-center pt-4 pb-2 ">
                <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[32].main.temp_min - 273.15)}
                  °C
                </span>
                <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getFirstNDigits(weatherData.list[32].main.temp_max - 273.15)}
                  °C{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cards
