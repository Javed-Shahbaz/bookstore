import React,{useEffect, useState} from 'react'
import { BookList } from './BookList'
import { Form } from './Form';

import { json } from 'react-router-dom';
import { joinPaths } from '@remix-run/router';



 const BookStore = () => {
  let [title,setTitle] = useState('')
  let [author,setAuthor] = useState('')
  let [category,setCategory] = useState('')
  let [data,setData] = useState([])
  let handleData = () => {
    setData ((prevState) => {
      return [...prevState,{title,author,category}]

    })
    
}

  
  return (
    <>
    {data.map((e) => {
      return(
        <BookList  name = {e.title} author={e.author} category={e.category}/>
      )
    })}
    
        
                 
    <Form title={setTitle} author = {setAuthor} category={setCategory} handle={handleData} /> 
    </>
  )
}
export default BookStore;









// let [title,setTitle] = useState('');
//   let [author,setAuthor] = useState('');
//   let [category,setCategory] = useState('');
//   const [manageData,setManageData] = useState([]);
//   useEffect(() => {
//        const storeData = localStorage.getItem('store')
//        if(storeData) {
//          setManageData(JSON.parse(storeData))
//        }
      
//      } ,[])
//   const initialData = () => {
//     let data = {
//       title:title,
//       author:author,
//       category:category
//     }
//     setManageData((prevState) => [...prevState,data] )
//     localStorage.setItem('store',JSON.stringify([...manageData,data]))
//   }
//   return (
//     <>
//     {manageData.map((e) => {
//     return(     
//       <BookList name={e.title} title={e.author} category={e.category}/>     
//     )   
//   })} 
//     <Form title={setTitle} author={setAuthor} category={setCategory} manage={initialData}/> 
//     </>
//   )
// }
    
//   })}