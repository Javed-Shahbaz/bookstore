// import React from 'react'
// import './BookList.css'
// import { Progress } from '../Progress'

// export const BookList = ({name,title,category}) => {
//   return (
//     <div className='bookstore'>

//       <div className='store-info'>
//         <div className='info'>
//         <h2>{category}</h2>
//         <h1>{title}</h1>
//         <span>{name}</span>
//         </div>

//       <div className='buttons'>
//         <button className='btn'>Comments</button>
//         <button>Remove</button>
//         <button>Edits</button>

//       </div>

//       </div>

//       <div className='main-store'>

//       <div className='report'>

//       <Progress />
//       <div className='report-details'>
//        <span>64%</span> <span>Completed</span></div>
//        </div>
//       <div className='bar'></div>

//       <div className='new-progress'>
//         <h4>Current Chapter</h4>
//         <p>Chapter 3 of 5</p>
//         <button className='button'>Update Progress</button>
//       </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import "./BookList.css";
import { Progress } from "../Progress";

export const BookList = ({ name, author, category }) => {
  console.log(name);
  return (
    <div className="bookstore scale-in-hor-left">
      <div className="store-info">
        <div className="info">
          <h2>{category}</h2>
          <h1>{name}</h1>
          <span>{author}</span>
        </div>
        <div className="buttons">
          <button className="btn">Comments</button>
          <button>Remove</button>
          <button>Edits</button>
        </div>
      </div>
      <div className="main-store">
        <div className="report">
          <Progress />
          <div className="report-details">
            <span>64%</span> <span>Completed</span>
          </div>
        </div>
        <div className="bar"></div>
        <div className="new-progress">
          <h4>Current Chapter</h4>
          <p>Chapter 3 of 5</p>
          <button className="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};
