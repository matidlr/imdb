import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import PokeCard from './components/PokeCard';
import { Header } from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/pokecard/:id' element={<PokeCard/>}/>
      </Routes>
    </BrowserRouter>
      

  )
}
