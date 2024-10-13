"use client";
import { useParams } from "next/navigation";
import NavBar from "@/app/components/NavBar";

const countries = [
  {
    name: "Pakistan",
    population: 1000000000,
    capital: "Islamabad"
  },
  {
    name: "India",
    population: 1000000000,
    capital: "New Delhi"
  },
  {
    name: "China",
    population: 1000000000,
    capital: "Beijing"
  },
  {
    name: "USA",
    population: 1000000000,
    capital: "Washington D.C."
  },
  {
    name: "Turkey",
    population: 1000000000,
    capital: "Ankara"
  }
];

export default function CountryDetails() {
  const params = useParams(); 
  const country_name = params.country_name as string;

  const countryData = countries.find(country => country.name.toLowerCase() === country_name.toLowerCase());

  if (!countryData) {
    return (
      <div>
        <NavBar/>
        <h1>Country not found</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar/>
      <h1>{countryData.name} Details</h1>
      <p>Population: {countryData.population}</p>
      <p>Capital: {countryData.capital}</p>
    </div>
  );
}
