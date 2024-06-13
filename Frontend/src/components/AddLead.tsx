
import LeadDetails from './LeadDetails';
import EmailTemplate from './EmailTemplate';
import { useNavigate } from 'react-router-dom';

interface props {
  onClose: () => void;
}
const  AddLead = ({onClose} : props) => {
  const navigate = useNavigate()
  const handleAdd = () =>{
    navigate('/deals')
  }
  const handleCancel = () => {
     onClose()
  }
  return (
    <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-xl font-bold text-center mb-6 bg-yellow-400 rounded-md w-full">ADD NEW LEAD</h1>
      <div className="bg-white  rounded-lg p-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LeadDetails />
          <EmailTemplate />
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={handleCancel}  className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            CANCEL
          </button>
          <button onClick={handleAdd} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLead;
