import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = (props) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    console.log("aaaa)
    return fetch(
      `${process.env.GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      JSON.parse(process.env.geoAPIOption)
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
