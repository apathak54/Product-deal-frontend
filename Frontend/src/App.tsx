import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Deals from './pages/Deals'
import Workspace from './pages/Workspace'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/deals/:workspaceId' element={<Deals/>} />
      <Route path="/" element={<Mainpage/>} />
      <Route path='/workspace' element={<Workspace/>} />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
