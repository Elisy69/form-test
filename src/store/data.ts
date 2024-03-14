import {
  AccommodationOptions,
  Cities,
  Country,
  UniversityType,
} from "../types/types";

export const countries: Country[] = [
  { id: 1, name: "РФ" },
  { id: 2, name: "РБ" },
];

export const cities: Cities = {
  1: ["Москва", "Сочи"],
  2: ["Гомель", "Минск"],
};

export const universityTypes: UniversityType[] = [
  "Технический",
  "Гуманитарный",
];

export const accommodationOptions: AccommodationOptions = {
  1: ["Аренда", "Общежития", "Не интересует", "Общежития + Аренда"],
  2: ["Общежития", "Не интересует"],
};
