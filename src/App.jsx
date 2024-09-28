import React, { useState, useEffect } from 'react’;

function Fetchdata() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, []); 

return (
  <div>
  {data ? (
  <ul>
  {data.map(item => (
  <li
  key={item.id}>{item.name}</li>
  ))}
  </ul>
) : (
<p>Loading...</p>
)}
</div>
);
}

export default Fetchdata;