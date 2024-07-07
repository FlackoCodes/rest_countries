import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AboutCountry = () => {

    const { id } = useParams()
    const [ country, setCountry ] = useState(null)

    useEffect(()=>{
    const countryAPI = `https://restcountries.com/v3.1/alpha/${id}`
    async function selectedCountry (){
        try {
            const res = await  fetch(countryAPI)
            const data = await res.json()
            setCountry(data[0])
            console.log(country);
        } catch (error) {
            console.log('error fetching data', error);
        }
    }
    selectedCountry()
    }, [id])
  

    // if (!country) return 'loading';
    return (
    <>
    <Link to={'/'}>
        Back
    </Link>
    <div>
        <h2>{country.name.common}</h2>
    </div>
    </>
  )
}

export default AboutCountry
