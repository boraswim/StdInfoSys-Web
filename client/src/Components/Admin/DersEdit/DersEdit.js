import React, { useEffect, useState } from "react"
import axios from 'axios'

function DersEdit() 
{
  const [data, setData] = useState([]);
  useEffect(() => 
    {
      getClasses();
    }, []);

    async function getClasses()
    {
    var res = await axios.get('http://localhost:3000/getclasses');
    setData(res.data);
    }


  return (
      <div>
          <h1>Class List</h1>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mail</th>
              <th>Password</th>
            </tr>
            </thead>
            <tbody>
              {
                data?.map((_class, index) => {
                  return<tr key={index}>
                    <td>{_class.id}</td>
                    <td>{_class.name}</td>
                    <td>{_class.email}</td>
                    <td>{_class.password}</td>
                  </tr>
                  })
              }
            </tbody>
          </table>
      </div>
    );
};
  
  export default DersEdit;