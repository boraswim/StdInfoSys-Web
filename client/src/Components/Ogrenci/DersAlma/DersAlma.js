import React, { useEffect, useState  } from 'react';
import axios from 'axios';

function DersAlma(){
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
          <h1>Class List</h1>
          <table>
            <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Status</th>
              <th>Term</th>
              <th>Credit</th>
            </tr>
            </thead>
            <tbody>
              {
                data?.map((_class, index) => {
                  return<tr key={index}>
                    <td>{"BIMU" + _class.code}</td>
                    <td>{_class.name}</td>
                    <td>{_class.status}</td>
                    <td>{_class.term}</td>
                    <td>{_class.credit}</td>
                  </tr>
                  })
              }
            </tbody>
          </table>
          <form action='' onSubmit={addRequest}>
                <div className='mb-3'>
                    <label htmlFor='stdnum'><strong>Student Number</strong></label>
                    <input type='text' placeholder='Enter Student Number' name='stdnum'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='classcode'><strong>Class Code</strong></label>
                    <input type='text' placeholder='Enter Class Code' name='classcode'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Add Request</strong></button>
            </form>
            <h1>Current Requests</h1>
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

export default DersAlma;