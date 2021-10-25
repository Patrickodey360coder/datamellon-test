import React from 'react'
import { useState, useEffect } from 'react'
import Chart from './Chart';
import SaleChart from './SaleChart';

function SkyHigh() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const url = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub";
    const data = {
      "angular_test": "angular-developer" 
    }
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, fetchData)
      .then( response => response.json())
      .then( data => {
        setSales(data);
        setLoading(true);
      })
  }, [])
  // console.log(sales)
  return (
    <div>
      {<Chart sales={sales}/>}
      {loading? <SaleChart sales={sales}/> : <h1>Loading...</h1>}
    </div>
  )
}

export default SkyHigh
