import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [data, setData] = useState([])
  const {id} = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3090/appointments/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.put('http://localhost:3090/appointments/'+id, data)
    .then(res => {
      alert("Data Updated Successfully!!!");
      navigate("/");
    });
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-light p-5">
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="id">ID : </label>
          <input
            type="text"
            name="id"
            className="form-control"
            value={data.id || ""}
            disabled
          />
        </div>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={data.title || ""}
            onChange={(e) => setData({...data, title: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="date">Date : </label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={data.date || ""}
            onChange={(e) => setData({...data, date: e.target.value})}

          />
        </div>
        <div>
          <label htmlFor="starttime">Start Time : </label>
          <input
            type="time"
            name="starttime"
            className="form-control"
            value={data.starttime || ""}
            onChange={(e) => setData({...data, starttime: e.target.value})}

          />
        </div>
        <div>
          <label htmlFor="endtime">End Time : </label>
          <input
            type="time"
            name="endtime"
            className="form-control"
            value={data.endtime || ""}
            onChange={(e) => setData({...data, endtime: e.target.value})}

          />
        </div>
        <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Edit
