// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

// const Calendar = () => {

//     const [columns, setColumns] = useState([]);
//     const [records, setRecords] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:3090/appointments")
//         .then((res) => {
//           setColumns(Object.keys(res.data[0]))
//           setRecords(res.data)
    
//         });
//       }, []);
    
//       const handleSubmit = (id) => {
//         const conf = window.confirm("Do you want to Delete?");
//         if(conf) {
//           axios.delete('http://localhost:3090/appointments/'+id)
//           .then(res => {
//              alert('Record has deleted');
//           }).catch(err => console.log(err))
//         }
//         navigate('/');
//        }

//   return (
//     <div>
//         <div><link to="/create" className="btn btn-primary">Add +</link></div>

//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView={"timeGridWeek"}
//         editable={true}
//         droppable={true}
//         // events={[
//         //   { title: "event 1", date: "2023-07-20" },
//         //   { title: "event 2", date: "2023-07-19" },
//         // ]}
//         headerToolbar={{
//           start: "today prev,next",
//           center: "title",
//           end: "timeGridWeek,timeGridDay",
//         }}
//         height="98vh"
//         display = 'background'
//       />
//     </div>
//   );
// };

// export default Calendar;
