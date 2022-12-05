import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import React from "react";

const Search = (props) => {
  const [search, setSearch] = useState(null);
  const geoAPIKey = import.meta.env.VITE_GEO_API_KEY;
  const geoAPIOption = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": geoAPIKey,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${
        import.meta.env.VITE_GEO_API_URL
      }/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoAPIOption
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
