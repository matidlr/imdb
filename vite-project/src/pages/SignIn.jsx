import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [newUser, setNewUser] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setNewUser({...newUser, 
      [e.target.id]: e.target.value.trim() })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!newUser.username || !newUser.email || !newUser.password){
          return setErrorMessage('Please fill out all fields.')
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if (res.ok){
        navigate('/sign-in')
      }
      
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  return (
    <div>
      <div className="">

        <form 
             className="flex flex-col gap-4  bg-slate-400 py-20 pl-8 items-center"
             onSubmit={handleSubmit}>
              <h1 className="bold-lg">Create an account</h1>
              <div className="">
                <label>Username: </label>
                <input type='text'
                    placeholder="username"
                    onChange={handleChange}
                    className="rounded-lg border-2 p-2 w-full"
                    id='name'
                    value={newUser.username}
                  />
              </div>
          
              <div className="">
              <label>Password: </label>
              <input type='password'
                  placeholder="password"
                  onChange={handleChange}
                  className="rounded-lg border-2 p-2 w-full"
                  id='password'
                  value={newUser.password}
                 />
              </div>
                 <button 
                      type='submit'
                      className="text-white bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40 justify-center"
                      disabled={loading}
                      >
                        {
                          loading ? 'Loading...' : 'Sign In'
                        }
                        </button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
               <span>Dont have an account?</span>
               <Link to='/sign-up' className='text-blue-500'>
                  Sign Up
               </Link>
            </div>
      </div>
    </div>
  )
}
