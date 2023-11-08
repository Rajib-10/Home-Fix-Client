import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";


const PendingWork = () => {
    const [pendingWorks,setPendingWorks] = useState([])
    const [loading,setLoading] = useState(true)
    const {user} = useAuth()

    useEffect(()=>{
        axios.get("http://localhost:5000/booking-services",{withCredentials:true})
        .then(res=>{
            const filterPendingWorks = res.data.filter(item=>item.providerEmail==user?.email)
            setPendingWorks(filterPendingWorks)
            setLoading(false)
        })
    },[user.email])



    const handleStatusChange = (event, bookingId) => {
        const newStatus = event.target.value;
            axios.patch(`http://localhost:5000/booking-services/${bookingId}`,{status: newStatus})
            .then(res=>{
              if(res.data.modifiedCount > 0){
                const remaining = pendingWorks.filter(item=> item._id!==bookingId)
                const updated = pendingWorks.find(item=> item._id===bookingId)
                updated.status = newStatus
                const newPendingWorks = [updated,...remaining]
                setPendingWorks(newPendingWorks)
                toast.success("Status changed successfully.")
              }
              console.log(res.data)
            })
    }


    const handleDelete =(id)=>{
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        
        if (result.isConfirmed) {
  
          axios.delete(`http://localhost:5000/booking-services/${id}`)
      .then(res=>{
        if(res.data.deletedCount>0){
          const remaining = pendingWorks.filter(item=>item._id!==id)
          setPendingWorks(remaining)
          Swal.fire({
            title: "Deleted!",
            text: "Pending work has been deleted.",
            icon: "success"
          });
        }
        console.log(res.data)
      })
          
         
        }
      });
    }
  

    return (
        <div>
           {
      loading ? <div className="flex justify-center items-center h-[70vh]">
        
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#F97316"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>:
     <div>
      {
        pendingWorks.length < 1 ? <div className="flex justify-center items-center h-[50vh]" >
          <h1 className="text-3xl text-red-500">You do not have any pending works..</h1>
        </div> :
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Action
              </th>
              <th>Service Name&Taker Email</th>
              <th>Instruction</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingWorks?.map((booking) => (
              <tr key={booking._id}>
                <th>
                  <button onClick={()=>handleDelete(booking._id)} className="btn btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking.serviceUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.serviceName}</div>
                      <div className="text-sm opacity-50">{booking.userEmail}</div>
                      <div className="text-sm opacity-50">${booking.price}</div>
                      
                    </div>
                  </div>
                </td>
                <td>
                  {booking.instruction}
                 
                </td>
                <td>{booking.date}</td>
                <td>
                <select
                value={booking.status}
                 onChange={(event) => handleStatusChange(event, booking._id)}
                >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
     </div>
     }
     <Toaster />
        </div>
    );
};

export default PendingWork;