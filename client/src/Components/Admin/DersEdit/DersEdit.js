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

    function deleteClass()
    {
      const idInput = document.getElementById("deleteId").value;
      console.log(idInput);
      axios.get(`http://localhost:3000/deleteclass/${idInput}`);
      window.location.reload();
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
          <input placeholder="Enter ID to delete" name="id" id="deleteId"></input>
          <button onClick={deleteClass}>DELETE</button>
      </div>
    );
};
  
  export default DersEdit;