import { useEffect, useState  } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const override= {
  display: "block",
  textAlign: "center",
  margin: "0 auto",
  borderColor: "lightgrey",
};

const loaderContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const AboutCountry = () => {
  const { id } = useParams();  // id --> actual value of the URL parameter
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
        const data = await res.json();
        setCountry(data[0]);
          } catch (error) {
        console.log('Error fetching country data', error);
      }
    }

    fetchCountry();
  }, [id]);

  if (!country) return <div
   style={loaderContainerStyle}>
    <ClipLoader
    color='blue'
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
    />;
  </div>

  return (
    <>
    <div className="country-container dark:bg-black">
          <Link 
          className="inline-flex items-center gap-4 rounded-md bg-white text-black my-8 mx-0 decoration-0 shadow-custom px-4 py-2"
          to='/'>
          <FaArrowLeft color="darkgrey" />
            Back
          </Link>
          <div className="country-details">
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <div>
                <h1>{country.name.common}</h1>
                <p>Native Name: <span>{Object.values(country.name.nativeName)[0].common}</span></p>
                <p>Population: <span>{country.population.toLocaleString()}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
                <p className="borders">
                      Border Countries: <span>{ country.borders ? (country.borders).join(', ') : "no border countries"}</span>
                    </p>
                </div>
                <div>
                    <p>Sub Region: <span>{country.subregion}</span></p>
                    <p>Top Level Domain: <span>{(country.tld).map(domain => domain)}</span></p>
                    <p>Currencies: <span>{Object.values(country.currencies).map(currency => `${currency.name}`)}</span></p>
                    <p>{Object.keys(country.languages).length > 1 ? 'Languages' : 'Language'}: <span>
                      {
                        Object.values(country.languages).join(', ')
                      }
                    </span>
                    </p>
                </div>       
          </div>
    </div>
    </>
  );
};

export default AboutCountry;


