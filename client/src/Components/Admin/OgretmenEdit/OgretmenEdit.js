import React, { useEffect, useState } from "react"
import axios from 'axios'

function OgretmenEdit() 
{
  const [data, setData] = useState([]);
  useEffect(() => 
    {
      getTeachers();
    }, []);

    async function getTeachers()
    {
    var res = await axios.get('http://localhost:3000/getteachers');
    setData(res.data);
    }


  return (
      <div>
          <h1>Teacher List</h1>
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
                data?.map((teacher, index) => {
                  return<tr key={index}>
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.password}</td>
                  </tr>
                  })
              }
            </tbody>
          </table>
      </div>
    );
};
  
  export default OgretmenEdit;