import React, { useEffect, useState } from "react"
import axios from 'axios'

function DersOnay()
{
    const [data, setData] = useState([]);
    useEffect(() => 
      {
        getRequests();
      }, []);

      async function getRequests()
      {
      var res = await axios.get('http://localhost:3000/getrequests');
      setData(res.data);
      }

      function approveRequest()
      {
        const approveInput = document.getElementById("approveID").value;
        console.log(approveInput);
        axios.get(`http://localhost:3000/approverequest/${approveInput}`);
        window.location.reload();
      }
    return (
        <div>
          <h1>Request List</h1>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Student Number</th>
              <th>Class Code</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
              {
                data?.map((_request, index) => {
                  return<tr key={index}>
                    <td>{_request.id}</td>
                    <td>{_request.stdnum}</td>
                    <td>{"BIMU" + _request.classcode}</td>
                    <td>{_request.status}</td>
                  </tr>
                  })
              }
            </tbody>
          </table>
          <input placeholder="Enter ID to approve" id="approveID"></input>
          <button onClick={approveRequest}>APPROVE</button>
        </div>
    );
};

export default DersOnay;