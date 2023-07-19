import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from "react-router-dom";
import { PencilFill, Trash2Fill } from "react-bootstrap-icons";

const Calendar = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [eventTitles, setEventTitles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3090/appointments").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
      const titles = res.data.map((event) => event.title);
      setEventTitles(titles);
    });
  }, []);

  const handleSubmit = (id) => {
    const conf = window.confirm("Do you want to Delete?");
    if (conf) {
      axios
        .delete("http://localhost:3090/appointments/" + id)
        .then((res) => {
          alert("Record has deleted");
        })
        .catch((err) => console.log(err));
    }
    navigate("/");
  };

  const fetchEvents = (fetchInfo, successCallback) => {
    axios.get("http://localhost:3090/appointments").then((res) => {
      const events = res.data.map((event) => ({
        id: event.id,
        title: event.title,
        date: event.date,
        starttime: event.starttime,
        endtime: event.endtime,
      }));
      successCallback(events);
    });
  };

  return (
    <div className="mt-1">
      <div className="text-center">
        <Link to="/create" className="mt-2 btn btn-primary">
          Add New Appointment
        </Link>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        editable={true}
        droppable={true}
        events={fetchEvents}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "timeGridWeek,timeGridDay",
        }}
        height="90vh"
        // display="background"
        eventContent={(eventInfo) => (
          <div className="text-center bg-white">
            <div className="text-black fs-6 bg-white">{eventInfo.event.title}</div>
            <Link to={`/edit/${eventInfo.event.id}`} className=" btn btn-sm ">
              <PencilFill />
            </Link>
            <button
              onClick={(e) => handleSubmit(eventInfo.event.id)}
              className="btn btn-sm"
            >
              <Trash2Fill />
            </button>
          </div>
        )}
      />
      <div className="mt-3 text-center">
        <h4 className="text-light bg-dark">Going On/Up Coming Events Summary:</h4>
        {eventTitles.map((title, index) => (
          <h5 key={index}>{title}</h5>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
