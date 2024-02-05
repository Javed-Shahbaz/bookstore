import React, { useContext } from "react";
import "./Form.css";
import { testprop } from "./BookStore";

export const Form = () => {
  const { setTitle, setAuthor, setCategory, handleData } = useContext(testprop);
  return (
    <>
      <div className="line-bar"></div>
      <div className="form scale-in-hor-left">
        <div className="form-heading">
          <h2>ADD NEW BOOK</h2>
        </div>
        <div className="form-details">
          <div className="form-description">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add Title"
            />{" "}
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Add Author"
            />
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Add Category"
            />
            <button onClick={handleData} className="button1">
              Add Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
