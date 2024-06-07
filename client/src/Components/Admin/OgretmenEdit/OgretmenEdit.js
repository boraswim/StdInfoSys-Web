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

    function deleteTeacher()
    {
      const idInput = document.getElementById("deleteId").value;
      console.log(idInput);
      axios.get(`http://localhost:3000/deleteteacher/${idInput}`);
      window.location.reload();
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
          <input placeholder="Enter ID to delete" name="id" id="deleteId"></input>
          <button onClick={deleteTeacher}>DELETE</button>
      </div>
    );
};
  
  export default OgretmenEdit;