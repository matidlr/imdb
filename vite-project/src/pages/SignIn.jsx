import { useState } from "react"

export default function SignIn() {
  const [newUser, setNewUser] = useState({})

  const handleChange = (e) =>{
    
  }
  return (
    <div>
      <div className="">
        <form>
           <input type='text'
                  placeholder="username"
                  onChange={handleChange}
                  value={username}
                 />
           <input type='email'
                  placeholder="email"
                  onChange={handleChange}
                  value={email}
                 />
           <input type='password'
                  placeholder="password"
                  onChange={handleChange}
                  value={password}
                 />
        </form>
          
      </div>
    </div>
  )
}
