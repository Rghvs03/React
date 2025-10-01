import React, { useState } from 'react'
import Form from './components/Form'
import UsersCard from './components/UsersCard';
import "./index.css"

const App = () => {

  const [usersdata, setUsersdata] = useState([]);
  // console.log(usersdata);

  // const handleDelete = (id) => {
  //     let filteredData = usersdata.filter((user, i) => i!==id)
  //     setUsersdata(filteredData);
  // }
  return (

    <div>
      <Form setUsersdata = {setUsersdata}/>


      <div className='flex m-5 gap-5'>
       {usersdata.map((user, i)=>{
        return <UsersCard {...user} key = {i} id = {i} handleDelete = {handleDelete}/>
       })} 
      </div>


    </div>
    
  )
}

export default App

// const App = () => {

//   const [usersdata, setUsersdata] = useState([]);
//   // console.log(usersdata);

//   const handleDelete = (id) => {
//       let filteredData = usersdata.filter((user, i) => i!==id)
//       setUsersdata(filteredData);
//   }
//   return (

//     <div>
//       <Form setUsersdata = {setUsersdata} usersData={usersdata}/>


//       <div className='flex m-5 gap-5'>
//        {usersdata?.map((user, i)=>{
//         return <UsersCard {...user} key = {i} id = {i} handleDelete = {handleDelete}/>
//        })} 
//       </div>


//     </div>
    
//   )
// }

// export default App