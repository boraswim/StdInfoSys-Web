import React, { useEffect, useState } from "react"
import axios from 'axios'
import "../DersOnay/DersOnay.css"

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
          <h4 style={{color:"#007bff", textAlign:"center"}}>Öğrenci Ders Talep Listesi</h4>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Öğrenci Numarası</th>
              <th>Sınıf Numarası</th>
              <th>Onay Durumu</th>
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
          <input placeholder="Onay için ID gir" id="approveID"></input>
          <button onClick={approveRequest}>Onayla</button>
        </div>
    );
};

export default DersOnay;