import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"

function Content() {

    const [ countries, setCountries ] = useState([])
    const [ searchCountry, setSearchCountry ] = useState('')
    const { id } = useParams()
    
  const API_ENDPOINT = 'https://restcountries.com/v3.1/all?'

  const userInput = (e)=>{
    e.preventDefault()
    const userSearch = (e.target.value);
    setSearchCountry(userSearch)
  }
  
  async function allCountries () {
    try {
      const res = await fetch(API_ENDPOINT)
      const data = await res.json()
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log('error fetching data', error);
    }
  }

  useEffect(()=>{
    allCountries()
  },[id])

  return (
    <>
      <main>
        <div className="content">
          <form  action="" method="post">
            <div className="form-container">
              <div className="input-container">
                <input
                 type="text"
                 placeholder="Search for a country"
                 value={searchCountry} 
                 onChange={userInput}
                  />
                <FaSearch className="search-icon" />
              </div>
            </div>
            <div>
              <select name="" id="">
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </div>
          </form>
        </div>
        <div className="main-content">
          {countries.map((country) => (
            <Link
              to={`/country-details/${country.name.common}`} 
              key={country.cca3}
              style={{ textDecoration: 'none' }}
              className="country-card"
            >
              <img src={country.flags.png} alt={`${country.name.common} flag`} />
              <h2>{country.name.common}</h2>
              <p style={style}>Population: <span>{country.population.toLocaleString()}</span></p>
              <p style={style}>Region: <span>{country.region}</span> </p>
              <p className="last-p" style={style}>Capital: <span>{country.capital}</span></p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Content

let style = {
  padding: '.2rem .4rem',
  color: 'hsl(200, 15%, 8%)',
  fontWeight: 600,
}