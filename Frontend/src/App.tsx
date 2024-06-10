import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
