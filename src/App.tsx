import { useState } from "react";
import "./App.css";
import {
  accommodationOptions,
  cities,
  countries,
  universityTypes,
} from "./store/data";

function App() {
  const [selectedCountryId, setSelectedCountryId] = useState<string | number>(
    "",
  );
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedAccom, setSelectedAccom] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryId(e.target.value);
    setSelectedCity("");
    setSelectedUniversity("");
    setSelectedAccom("");
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
    setSelectedUniversity("");
    setSelectedAccom("");
  };
  const handleUniversityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUniversity(e.target.value);
    setSelectedAccom("");
  };
  const handleAccomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccom(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Анкета</h1>
      <div class="selectContainer">
        <div class="selectWrapper">
          <label htmlFor="countrySelect">Выберите страну:</label>
          <select
            id="countrySelect"
            onChange={handleCountryChange}
            value={selectedCountryId}
          >
            <option disabled value="">
              Cтрана
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div class="selectWrapper">
          <label htmlFor="citySelect">Выберите город:</label>
          <select
            id="citySelect"
            disabled={!selectedCountryId}
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option disabled value="">
              Город
            </option>
            {selectedCountryId &&
              cities[selectedCountryId as number].map((city) => (
                <option key={Math.random()} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
        <div class="selectWrapper">
          <label htmlFor="university">Тип ВУЗа:</label>
          <select
            id="university"
            disabled={!selectedCity}
            value={selectedUniversity}
            onChange={handleUniversityChange}
          >
            <option disabled value="">
              ВУЗ
            </option>
            {universityTypes.map((uni) => (
              <option key={Math.random()} value={uni}>
                {uni}
              </option>
            ))}
          </select>
        </div>
        <div class="selectWrapper">
          <label htmlFor="accom">Вариант проживания:</label>
          <select
            id="accom"
            disabled={!selectedUniversity}
            value={selectedAccom}
            onChange={handleAccomChange}
          >
            <option disabled value="">
              Проживание
            </option>
            {selectedCountryId &&
              accommodationOptions[selectedCountryId as number].map((opt) => (
                <option key={Math.random()} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        </div>
      </div>
      <button disabled={!selectedAccom} type="submit">
        Отправить
      </button>
    </form>
  );
}

export default App;
