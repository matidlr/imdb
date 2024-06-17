import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [newUser, setNewUser] = useState({
    name: 'Your name',
    email: 'Your email',
    password: 'Your password'
  })
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setNewUser({...newUser, 
      [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault;
    try {
      const {name, email, password} = newUser;
      const res = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, email, password
        })
      })
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
           <input type='text'
                  placeholder="username"
                  onChange={handleChange}
                  name='name'
                  value={newUser.username}
                 />
           <input type='email'
                  placeholder="email"
                  onChange={handleChange}
                  name='email'
                  value={newUser.email}
                 />
           <input type='password'
                  placeholder="password"
                  onChange={handleChange}
                  name='password'
                  value={newUser.password}
                 />
                 <button>Sign in</button>
        </form>
          
      </div>
    </div>
  )
}
