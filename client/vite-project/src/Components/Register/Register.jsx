import React, {useState} from 'react'
import './Register.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import video from '../../assets/video.mp4'
import logo from '../../assets/logo.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })
    //USestate to handle inputs
    // const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('')

    // Onclick is to get what the user has entered
    // const createUser = ()=>{
    //     // require axios to create an API that connects to the server
    //     axios.post('http://localhost:3002/register', {
    //         //create var to send to server though the route
    //         Email: email,
    //         Username: username,
    //         Password: password
    //     }).then(()=>{
    //         console.log('User has been registered')
    //     })
    // }

    const handleChange = (event) =>{
            setValues({...values, [event.target.name]: [event.target.value]})
        }

    const handleSubmit = (event) => {
            event.preventDefault();
            axios.post('http://localhost:3003/finance', values).then(res => console.log("Registered!")).catch(err=>console.log(err));
        }

   

  return (
    <div className='registerPage flex'>
    <div className="container flex">
        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
            <div className="textDiv">
                <h2 className="title">Create and Sell Extraordinary Products</h2>
                <p>From the comforts of your home!</p>
            </div>

            <div className="footerDiv flex">
                <span className='text'>Have an account?</span>
                <Link to={'/'}>
                    <button className='btn'>Login</button>
                </Link>
            </div>      
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo" />
                <h3>Create an Account</h3>
            </div>

            <form onSubmit={handleSubmit} className='form grid'>
               
            <div className="inputDiv">
                    <label htmlFor="name">Username</label>
                    <div className="input flex">
                    <FaUserShield className='icon'/>
                    <input name='name' type="text" id='username' placeholder='Enter Username' onChange={handleChange}/>

                    </div>
                </div>
                
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <div className="input flex">
                    <MdMarkEmailRead className='icon'/>
                    <input name='email'  type="email" id='email' placeholder='Enter Email' onChange={handleChange}/>

                    </div>
                </div>

               

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                    <BsFillShieldLockFill className='icon'/>
                    <input name='password' type="password" id='password' placeholder='Enter Password' onChange={handleChange}/>

                    </div>
                </div> 

                <button type='submit' className='btn flex'>
                    <span>Register</span>
                    <AiOutlineSwapRight className="icon"/>
                </button>

                <span className='forgotPassword'>
                    Forgot Password? <a href="">Click Here</a>
                </span>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register