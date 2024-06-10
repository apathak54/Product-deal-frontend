import Appbar from './components/Appbar'
import DataGridDemo from './components/DataGrid'
import Filter from './components/Filter'
import ImportLead from './components/ImportLead'
import LeadForms from './components/LeadForms'
import LeadOverview from './components/LeadOverview'


function App() {
 

  return (
    <>
     <Appbar/>
     <Filter/>
     <ImportLead/>
     <LeadForms/>
     <LeadOverview/>
     <DataGridDemo/>
    </>
  )
}

export default App
