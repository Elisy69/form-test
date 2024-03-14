type CountriesAvailable = "РБ" | "РФ";
type CitiesAvailable = "Москва" | "Сочи" | "Минск" | "Гомель";
export type UniversityType = "Технический" | "Гуманитарный";
type Accommodation =
  | "Общежития"
  | "Аренда"
  | "Не интересует"
  | "Общежития + Аренда";

export interface Country {
  id: number;
  name: CountriesAvailable;
}

export interface Cities {
  [key: number]: CitiesAvailable[];
}

export interface AccommodationOptions {
  [key: number]: Accommodation[];
}
