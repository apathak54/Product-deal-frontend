import Appbar from "../components/Appbar"
import Box from "../components/Box"
import Filter from "../components/Filter"


const Mainpage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200">
        <Appbar/>
        <Filter/>
        <Box/>
    </div>
  )
}

export default Mainpage