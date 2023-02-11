import React, { useState } from 'react'

const TestAPI = () => {
 
    conconst [error, setError] = useState(null);
    st const [loading, setLoading] = useState(true);[data, setData] = useState({});
    
    
     return (
    <div>Test
        
  
        const fetchData = () => {      
  fetch("htt.then((response) => response.json())
        ps:/.then((data) => setData(data))
        /geo.catch(() => setError("error message") )
        
  .finally(() => setLoading(true))  }fy.org/api/v2/country,city,vpn?apiKey=at_TVG63iHfwfaDK3aS3cXHeIiGHgrbO&ipAddress=8.8.8.8")
          v>
  )
}

export default TestAPI