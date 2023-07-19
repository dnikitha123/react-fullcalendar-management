import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [inputData, setInputData] = useState({ title: "", date: "" , starttime: "", endtime: "" });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3090/appointments", inputData).then((res) => {
      alert("Data Added Successfully!");
      navigate("/");
    }).catch(err => console.log(err));
  };


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="date">Date : </label>
            <input
              type='date'
              name="date"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, date: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="starttime">Start Time : </label>
            <input
              type='time'
              name="starttime"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, starttime: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="endtime">End Time : </label>
            <input
              type='time'
              name="endtime"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, endtime: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
