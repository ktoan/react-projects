import "./newletter.css";
import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const NewLetter = () => {
  return (
    <div className="newLetter">
      <div className="contentNewLetter">
        <h1 className="contentNewLetterTitle">NewsLetter</h1>
        <p className="contentNewLetterDesc">
          Get timely updates from your favorite products
        </p>
        <form className="inputContainer">
          <input
            type="email"
            placeholder="Type your email..."
            autoComplete="false"
          />
          <button type="submit">
            <RiSendPlane2Fill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewLetter;
