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
      name: '',
      email: '',
      password: ''
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
      const idInput = document.getElementById("deleteId").value;
      console.log(idInput);
      axios.get(`http://localhost:3000/deleteclass/${idInput}`);
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

          <form action='' onSubmit={addClass}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Add Class</strong></button>
            </form>
      </div>
    );
};
  
  export default DersEdit;