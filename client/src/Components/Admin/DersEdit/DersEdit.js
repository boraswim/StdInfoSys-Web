import React, { useEffect, useState } from "react"
import axios from 'axios'

function DersEdit() 
{
  const [data, setData] = useState([]);
  useEffect(() => 
    {
      getClasses();
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

    function deleteClass()
    {
      const codeInput = document.getElementById("deleteCode").value;
      console.log(codeInput);
      axios.get(`http://localhost:3000/deleteclass/${codeInput}`);
      window.location.reload();
    }

    const addClass = (event) => {
      event.preventDefault();
      
          axios.post('http://localhost:3000/addclass', values)
          .then(res => {
              console.log(res)
              window.location.reload();
          })
          .catch(err => console.log(err)); 
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
          <input placeholder="Enter code to delete" id="deleteCode"></input>
          <button onClick={deleteClass}>DELETE</button>

          <form action='' onSubmit={addClass}>
                <div className='mb-3'>
                    <label htmlFor='code'><strong>Code</strong></label>
                    <input type='text' placeholder='Enter Code' name='code'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='status'><strong>Status</strong></label>
                    <input type='text' placeholder='Enter Status' name='status'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='term'><strong>Term</strong></label>
                    <input type='text' placeholder='Enter Term' name='term'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='credit'><strong>Credit</strong></label>
                    <input type='text' placeholder='Enter Credit' name='credit'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Add Class</strong></button>
            </form>
      </div>
    );
};
  
  export default DersEdit;