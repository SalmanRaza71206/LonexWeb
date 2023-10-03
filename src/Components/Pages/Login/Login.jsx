import React, { useEffect, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader';
function Login() {
  const nav = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [spinner,setspinner]=useState(false)
  const loginguser = localStorage.getItem("token")
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
setspinner(true)
      const response = await fetch('https://lonex.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      
      });

      if (response.ok) {
        
        const data = await response.json();
        console.log(data);
        console.log(data.token)
        localStorage.setItem("token",data.token)
        
        nav('/home')
        setspinner(false)

      } else {
          
        console.error('Login failed');
        setToggle(true)
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("token")
    if (auth) {
  nav('/home');
    }
    
  },[])
  
  return (
    <div>
    {spinner&&<Loader/>}     
    <form onSubmit={handleSubmit}>
      {
                    toggle ? (
                        <div id="notification_holder">
                            {!loginguser ? (
                                <div className='notificatioerror'>
                                    <h3 id='errorshow'>Invalid credentials</h3>
                                </div>
                            ) : (<h3>Success</h3>)
                            }
                        </div>
                    ) : null
        }
        <h3>Please Login</h3>
      <h2>Login</h2>
    
        <label>
          Username:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
       
      
      </form>
    </div>
  );
}

export default Login;
