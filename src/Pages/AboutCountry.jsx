import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
const AboutCountry = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        const data = await res.json();
        setCountry(data[0]); // data is an array with one element
        console.log(data);
          } catch (error) {
        console.log('Error fetching country data', error);
      }
    }

    fetchCountry();
  }, [id]);

  if (!country) return <div>Loading...</div>;

  return (
    <>
    <div className="country-container">
          <Link 
          style={linkStyle}
          to='/'>
          <FaArrowLeft color="black" />
            Back
          </Link>
          <div style={{display:'flex', gap: '1rem'}}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <div>
                <h1>{country.name.common}</h1>
                <h1>{country.languages.nativeName}</h1>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                <div>
                    <p>Languages: {
            Object.entries(country.languages).map(([key, value]) => (
              <span key={key}>{value}</span>
            ))}
                    </p>
                    <p></p>
                    <p></p>
                </div>
            </div>

          </div>
    </div>
    </>
  );
};

export default AboutCountry;

let linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'white',
    borderRadius: '5px',
    color: 'black',
    textDecoration: 'none',
    boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '.4rem 1rem',
    margin: '30px 0'
}
