import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Content() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const API_ENDPOINT = 'https://restcountries.com/v3.1/all';

  const handleSearchInput = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleRegionSelect = (e) => {
    setSelectedRegion(e.target.value);
  };

  async function fetchAllCountries() {
    try {
      const res = await fetch(API_ENDPOINT);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log('error fetching data', error);
    }
  }

  useEffect(() => {
    fetchAllCountries();
  }, []);

  
  // Filter countries based on the search input
  const filteredCountries = countries.filter(country =>
    (country.name.common).toLowerCase().includes(searchCountry.toLowerCase()) &&
    (selectedRegion === 'All' || country.region === selectedRegion)
  );

  

  return (
    <>
      <main>
        <div className="content">
          <form action="" method="get">
            <div className="form-container">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search for a country"
                  value={searchCountry}
                  onChange={handleSearchInput}
                />
                <FaSearch className="search-icon" />
              </div>
            </div>
            <div>
              <select value={selectedRegion} onChange={handleRegionSelect}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </form>
        </div>
        <div className="main-content">
          {filteredCountries.map((country) => (
            <Link
              to={`/country-details/${country.name.common}`}
              key={country.cca3}
              style={{ textDecoration: 'none' }}
              className="country-card"
            >
              <img src={country.flags.png} alt={`${country.name.common} flag`} />
              <h2>{country.name.common}</h2>
              <p style={style}>Population: <span>{country.population.toLocaleString()}</span></p>
              <p style={style}>Region: <span>{country.region}</span></p>
              <p className="last-p" style={style}>Capital: <span>{country.capital}</span></p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Content;

let style = {
  padding: '.2rem .4rem',
  color: 'hsl(200, 15%, 8%)',
  fontWeight: 600,
};
