import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    Type: '1', // Default type value
    photo: null, 
  });

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData({ ...formData, ["photo"]: selectedImage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
      formDataToSend.append('mobile', formData.mobile);
     formDataToSend.append('Type', formData.Type);
    formDataToSend.append('photo', formData.photo);
    formDataToSend.append('password', formData.password);
  console.log(formData)
    try {
      const response = await fetch('https://lonex.onrender.com/user/signup', {
        method: 'POST',
         
       body:formDataToSend,
      });

    const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>Sign-Up Form</h1>
      <input name="name" type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input name="email" id="email" type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input name="mobile" id="mobile" type="number" placeholder="Phone Number" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
       
        <input name="photo" id="photo" type="file" onChange={handleImageChange} accept="image/*" />
      <input name="password" id="password" type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
  
    
    
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;