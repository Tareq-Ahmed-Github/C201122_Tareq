import { Button } from "bootstrap";
import React from "react";

const AddNew = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="border  p-5 m-5">
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Cover photo</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />{" "}
        </div>
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Title</label>
          <input type="text"  classname=''/>
        </div>
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Audio</label>
          <input
            class="someClass"
            type="file"
            name="UploadAudio"
            accept="audio/mp3"
          />{" "}
        </div>
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Description</label>
          <textarea name="description" id="" cols="30" rows="4"></textarea>
        </div>
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Author</label>
          <input type="text"  classname=''/>
        </div>
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Catagory</label>
          <select name="catagory" id="category-select" className="py-2">
            <option value="">--Please choose an option--</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <div className="d-flex flex-column justify-content-between gap-1 my-4">
          <label htmlFor="">Tags</label>
          <input type="text"  classname=''/>
        </div>
        <button className="w-100 py-2 rounded text-white bg-dark bg-gradient">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNew;
