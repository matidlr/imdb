import { Link } from 'react-router-dom';
import logo from '../assets/movie.jpg';
import { HamburgerMenu } from './HamburgerMenu';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export const Header = () => {
  const [isOpen, setIsOpen] = useState();

  const {currentUser} = useSelector((state)=> state.user);
  return (
    <header className='flex items-center justify-between sticky top-0 bg-white'>
       <div className="">
            <img src={logo}
                className=' h-20 w-23' />
       </div>
       <div>
          <input 
             type='text'
             placeholder='Search...'
             className='items-center justify-center'/>
        </div>
        
        <div className="flex">
       
           
            {currentUser ? (
               <>
                 
                  <button className='hover:text-blue-700'
                  onClick={() => setIsOpen(!isOpen)}>
                        {currentUser.username}
                    </button>
                 
                  {isOpen && (
                    <div className='w-30 fixed shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white items-center justify-center'>
                      <p className="p-[0.08rem] pl-2 rounded-xl bg-white items-center justify-center hover:bg-slate-400">{currentUser.username}</p>
                      <p className=" p-[0.08rem] pl-2 rounded-xl bg-white items-center justify-center hover:bg-slate-400">{currentUser.email}</p>
                      <Link to='/dashboard?tab=profile' className='text-white bg-blue-800 hover:bg-black rounded-full px-2'>Profile</Link>
                      <p className=" p-[0.08rem]  rounded-xl bg-white items-center justify-center hover:bg-red-400 pl-2">Sign Out</p>
                    </div>
                  )}
               </>
            ) : (
              <Link className='bg-blue-400 rounded-lg py-2 px-3 hover:bg-slate-500 mr-4'
              to='/sign-in'>
              Sign in
              </Link>
            )}
            <HamburgerMenu />
        </div>
       
    </header>
  )
}
