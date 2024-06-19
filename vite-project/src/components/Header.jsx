import { Link } from 'react-router-dom';
import logo from '../assets/poke.jpg';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  return (
    <header className='flex items-center justify-between'>
       <div className="">
            <img src={logo}
                className=' h-20 w-23' />
       </div>
       <div>
          <input 
             type='text'
             placeholder='Search for Pokemons...'
             className='items-center justify-center'/>
        </div>
        
        <div className="flex">
       
            <HamburgerMenu />
            <Link className='bg-blue-400 rounded-lg py-2 px-3 hover:bg-slate-500 mr-4'
           to='/sign-in'>
           Sign in
        </Link>
        </div>
       
    </header>
  )
}
