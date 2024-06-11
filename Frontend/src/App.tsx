import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Deals from './pages/Deals'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/deal' element={<Deals/>} />
      <Route path="/" element={<Mainpage/>} />
     
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
