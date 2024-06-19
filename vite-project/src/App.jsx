import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import { Header } from './components/Header';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import { PiSignIn } from 'react-icons/pi';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/sign-in' element={<SignIn/>}/>
         <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
      

  )
}
