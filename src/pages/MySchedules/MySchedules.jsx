import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hook/useAuth";
import { BallTriangle } from "react-loader-spinner";
import PendingWork from "./PendingWork";
import Swal from "sweetalert2";

const MySchedules = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://home-fix-server.vercel.app/booking-services?email=${user?.email}`,
        { withCredentials: true }
      )
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete bookings?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://home-fix-server.vercel.app/booking-services/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = bookings.filter((item) => item._id !== id);
              setBookings(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });
            }
            console.log(res.data);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-orange-400 text-2xl  p-8">My Bookings</h1>

      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
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
        </div>
      ) : (
        <div>
          {bookings.length < 1 ? (
            <div className="flex justify-center items-center h-[50vh]">
              <h1 className="text-3xl text-red-500">
                You do not have available bookings right now.
              </h1>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Service Name&Provider Email</th>
                    <th>Instruction</th>
                    <th>Date</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((booking) => (
                    <tr key={booking._id}>
                      <th>
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="btn btn-circle"
                        >
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
                            <div className="font-bold">
                              {booking.serviceName}
                            </div>
                            <div className="text-sm opacity-50">
                              {booking.providerEmail}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{booking.instruction}</td>
                      <td>{booking.date}</td>
                      <td>${booking.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <h1 className="text-orange-400 text-2xl  p-8">My Pending Works</h1>
      <PendingWork />
      <Helmet>
        <title>Home-Fix | MySchedule</title>
      </Helmet>
    </div>
  );
};

export default MySchedules;
