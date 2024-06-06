import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

function AdminLogin() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    } 

    const handleErrors = (errors) => {
        console.log("errors bunlar -> ", errors)
        setErrors({
            name: errors.name,
            email: errors.email,
            password: errors.password
        })
        console.log("state'teki hali bunlar -> ", errors)

        if(errors.email === "" && errors.password === "") return true
        return false
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        const health = handleErrors(Validation(values))

        if(health){
            console.log("hata yok istek atıyor")
            axios.post('http://localhost:3000/adminLogin', values)
            .then(res => {
                console.log(res)
                if(res.data === "Success") {
                    navigate('/adminHome')
                }
                else{
                    alert("No record exists")
                }
                
            })
            .catch(err => console.log(err)); 
        }  
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary-subtle vh-100'>
        <div className='bg-white p-3 rounded w-25'> 
        <h2>Admin Login</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                <p>Agree to our terms</p>
                <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin