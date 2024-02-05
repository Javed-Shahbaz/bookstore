import React, { createContext, useState } from "react";
import { BookList } from "./BookList";
import { Form } from "./Form";

export const testprop = createContext();
const BookStore = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [category, setCategory] = useState("");
  let [data, setData] = useState([]);
  let handleData = () => {
    setData((prevState) => {
      return [...prevState, { title, author, category }];
    });
  };

  return (
    <>
      {data.map((e) => {
        return (
          <BookList name={e.title} author={e.author} category={e.category} />
        );
      })}
    <testprop.Provider value={{setTitle, setAuthor, setCategory, handleData}}>
      <Form />
    </testprop.Provider>
    </>
  );
};
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
