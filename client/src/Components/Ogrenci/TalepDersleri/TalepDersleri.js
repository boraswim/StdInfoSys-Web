import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function TalepDersleri(){
  const [data, setData] = useState([]);
  useEffect(() => 
    {
      getClasses();
    }, []);

    const [_data, _setData] = useState([]);
    useEffect(() => 
      {
        getCurrentRequest();
      }, []);

    const [values, setValues] = useState({
      code: '',
      name: '',
      status: '',
      term: '',
      credit: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
}

    async function getClasses()
    {
    var res = await axios.get('http://localhost:3000/getclasses');
    setData(res.data);
    }

    const addRequest = (event) => {
      event.preventDefault();
      
          axios.post('http://localhost:3000/addrequest', values)
          .then(res => {
              console.log(res)
              window.location.reload();
          })
          .catch(err => console.log(err)); 
      }

      async function getCurrentRequest()
      {
      const currentInput = 1306210013;
      console.log(currentInput);
      var res = await axios.get(`http://localhost:3000/getcurrentrequest/${currentInput}`);
      _setData(res.data);
      }

  return (
    
   <div>
          
          <h4 style={{color:"#007bff", textAlign:"center"}}>Öğrenci Talep Edilen Dersler</h4>
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
                _data?.map((_request, index) => {
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
   </div>
  );
};

export default TalepDersleri;