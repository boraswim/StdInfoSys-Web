import React, { useEffect, useState } from "react"
import axios from 'axios'

function OgretmenEdit() 
{
  const [data, setData] = useState([]);
  useEffect(() => 
    {
      getTeachers();
    }, []);

    const [values, setValues] = useState({
      number: '',
      name: '',
      class: '',
      email: '',
      password: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
}

    async function getTeachers()
    {
    var res = await axios.get('http://localhost:3000/getteachers');
    setData(res.data);
    }

    function deleteTeacher()
    {
      const numberInput = document.getElementById("deleteNumber").value;
      console.log(numberInput);
      axios.get(`http://localhost:3000/deleteteacher/${numberInput}`);
      window.location.reload();
    }

    const addTeacher = (event) => {
      event.preventDefault();
      
          axios.post('http://localhost:3000/addteacher', values)
          .then(res => {
              console.log(res)
              window.location.reload();
          })
          .catch(err => console.log(err)); 
      }  


  return (
      <div>
          <h1>Teacher List</h1>
          <table>
            <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Class</th>
              <th>Mail</th>
              <th>Password</th>
            </tr>
            </thead>
            <tbody>
              {
                data?.map((teacher, index) => {
                  return<tr key={index}>
                    <td>{teacher.number}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.class}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.password}</td>
                  </tr>
                  })
              }
            </tbody>
          </table>
          <input placeholder="Enter number to delete" name="number" id="deleteNumber"></input>
          <button onClick={deleteTeacher}>DELETE</button>

          <form action='' onSubmit={addTeacher}>
          <div className='mb-3'>
                    <label htmlFor='number'><strong>Number</strong></label>
                    <input type='text' placeholder='Enter Number' name='number'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='class'><strong>Class</strong></label>
                    <input type='text' placeholder='Enter Class' name='class'
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
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Add Teacher</strong></button>
            </form>
      </div>
    );
};
  
  export default OgretmenEdit;