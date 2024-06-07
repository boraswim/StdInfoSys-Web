import React, { useEffect, useState } from "react"
import axios from 'axios'

function OgrenciEdit() 
{
  const [data, setData] = useState([]);
  useEffect(() => 
    {
      getStudents();
    }, []);

    async function getStudents()
    {
    var res = await axios.get('http://localhost:3000/getstudents');
    setData(res.data);
    }

  return (
      <div>
          <h1>Student List</h1>
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
                data?.map((student, index) => {
                  return<tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.password}</td>
                  </tr>
                  })
              }
            </tbody>
          </table>
      </div>
    );
};
  
  export default OgrenciEdit;