
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//     yellowHeader: {
//       backgroundColor: '#f59e0b', // Tailwind CSS yellow-500
//     },
//   });

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90,  },
  {
    field: 'Company',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'CompanyName',
    headerName: 'Company Name',
    width: 150,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    
    width: 230,
    editable: true,
  },
  {
    field: 'COMODITY',
    headerName: 'COMODITY',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.Company || ''} ${row.CompanyName || ''}`,
  },
  {
    field: 'TEMPLATE',
    
    
    headerName: 'TEMPLATE',
    // headerClassName: 'yellow-header',
    width: 110,
    
    
    editable: true,
    renderCell: (params) => (
        <div>
          <IconButton aria-label="edit" size="small" onClick={() => handleEdit(params.row)}>
            <EditIcon className='text-yellow-500' fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" size="small" onClick={() => handleDelete(params.row)}>
            <DeleteIcon className='text-yellow-500' fontSize="small" />
          </IconButton>
        </div>
      ),
  },
  {
    field: 'DATE',
    headerName: 'DATE',
   
    width: 110,
    editable: true,
    // valueGetter: (params) => {
    //     if (params.row.DATE) {
    //       return new Date(params.row.DATE);
    //     }
    //     return null;
    //   },
  },
  {
    field: 'STATUS',
    headerName: 'STATUS',
    
    width: 110,
    type:'boolean',
    renderCell: (params) => (
        <div className='flex  items-center '>
        <div className='w-3 h-3 mt-5 rounded-[50%] bg-red-500 ' >
          
        </div>
        </div>
      ),
  },
  {
    field: 'SEND',
    headerName: 'SEND',
    
    width: 110,
    editable: true,
    renderCell: (params) => (
        <div className='flex w-[100%] h-[100%]  items-center '>
        <div onClick={()=>console.log(params)} className='w-14 h-7 text-black text-[13px] text-center flex items-center justify-center  rounded-[10px] bg-yellow-500 ' >
          SEND
        </div>
        </div>
      ),
  },
  
  
];

const rows:any = [
    { id: 1, CompanyName: 'Snow', Company: 'Jon', Email: 'jon.snow@example.com', DATE: '2023-06-01', STATUS: true },
    { id: 2, CompanyName: 'Lannister', Company: 'Cersei', Email: 'cersei.lannister@example.com', DATE: '2023-06-02', STATUS: false },
    { id: 3, CompanyName: 'Lannister', Company: 'Jaime', Email: 'jaime.lannister@example.com', DATE: '2023-06-03', STATUS: true },
    { id: 4, CompanyName: 'Stark', Company: 'Arya', Email: 'arya.stark@example.com', DATE: '2023-06-04', STATUS: false },
    { id: 5, CompanyName: 'Targaryen', Company: 'Daenerys', Email: 'daenerys.targaryen@example.com', DATE: '2023-06-05', STATUS: true },
    { id: 6, CompanyName: 'Melisandre', Company: 'Melisandre', Email: 'melisandre@example.com', DATE: '2023-06-06', STATUS: false },
    { id: 7, CompanyName: 'Clifford', Company: 'Ferrara', Email: 'ferrara.clifford@example.com', DATE: '2023-06-07', STATUS: true },
    { id: 8, CompanyName: 'Frances', Company: 'Rossini', Email: 'rossini.frances@example.com', DATE: '2023-06-08', STATUS: false },
    { id: 9, CompanyName: 'Roxie', Company: 'Harvey', Email: 'harvey.roxie@example.com', DATE: '2023-06-09', STATUS: true },
    { id: 10, CompanyName: 'Greyjoy', Company: 'Theon', Email: 'theon.greyjoy@example.com', DATE: '2023-06-10', STATUS: false },
    { id: 11, CompanyName: 'Baratheon', Company: 'Stannis', Email: 'stannis.baratheon@example.com', DATE: '2023-06-11', STATUS: true },
    { id: 12, CompanyName: 'Tyrell', Company: 'Margaery', Email: 'margaery.tyrell@example.com', DATE: '2023-06-12', STATUS: false },
    { id: 13, CompanyName: 'Bolton', Company: 'Ramsay', Email: 'ramsay.bolton@example.com', DATE: '2023-06-13', STATUS: true },
    { id: 14, CompanyName: 'Martell', Company: 'Oberyn', Email: 'oberyn.martell@example.com', DATE: '2023-06-14', STATUS: false },
    { id: 15, CompanyName: 'Baelish', Company: 'Petyr', Email: 'petyr.baelish@example.com', DATE: '2023-06-15', STATUS: true },
    { id: 16, CompanyName: 'Tarly', Company: 'Samwell', Email: 'samwell.tarly@example.com', DATE: '2023-06-16', STATUS: false },
    { id: 17, CompanyName: 'Tarth', Company: 'Brienne', Email: 'brienne.tarth@example.com', DATE: '2023-06-17', STATUS: true },
    { id: 18, CompanyName: 'Sand', Company: 'Ellaria', Email: 'ellaria.sand@example.com', DATE: '2023-06-18', STATUS: false },
    { id: 19, CompanyName: 'Seaworth', Company: 'Davos', Email: 'davos.seaworth@example.com', DATE: '2023-06-19', STATUS: true },
    { id: 20, CompanyName: 'Mormont', Company: 'Jorah', Email: 'jorah.mormont@example.com', DATE: '2023-06-20', STATUS: false },
  ];

// const rows = [
//   { id: 1, CompanyName: 'Snow', Company: 'Jon', Email: 14 },
//   { id: 2, CompanyName: 'Lannister', Company: 'Cersei', Email: 31 },
//   { id: 3, CompanyName: 'Lannister', Company: 'Jaime', Email: 31 },
//   { id: 4, CompanyName: 'Stark', Company: 'Arya', Email: 11 },
//   { id: 5, CompanyName: 'Targaryen', Company: 'Daenerys', Email: null },
//   { id: 6, CompanyName: 'Melisandre', Company: null, Email: 150 },
//   { id: 7, CompanyName: 'Clifford', Company: 'Ferrara', Email: 44 },
//   { id: 8, CompanyName: 'Frances', Company: 'Rossini', Email: 36 },
//   { id: 9, CompanyName: 'Roxie', Company: 'Harvey', Email: 65 },
// ];
const handleEdit = (row:any) => {
    console.log('Edit row:', row);
    // Add your edit logic here
  };
  
  const handleDelete = (row:any) => {
    console.log('Delete row:', row);
    // Add your delete logic here
  };
export default function DataGridDemo() {
  return (
    <div className='w-[100%] flex justify-center ' >
    <Box className=' max-w-[90%] flex justify-center '  sx={{ marginTop:'200px',marginBottom:'200px',display:'flex',justifyContent:'center' }}  >
      <DataGrid className='max-w-5xl'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
}