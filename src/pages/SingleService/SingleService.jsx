import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const SingleService = () => {
    const {user}=useAuth()
  const { id } = useParams();
  const [service, setService] = useState({});
  const [restServices,setRestServices] = useState([])
  const { serviceUrl, serviceName, name, photo, price,email, description,area } =
    service || {};
  useEffect(() => {
    axios
      .get(`http://localhost:5000/add-services/${id}`)
      .then((res) => setService(res.data));
  }, [id]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/add-services`)
    .then(res=>{
      const filterRestServices = res.data.filter(item=>item.email==email && item._id!==id)
      setRestServices(filterRestServices)
    })
  },[id,email])


  const handlePurchase = e =>{
    e.preventDefault()
    const form = e.target
    const serviceUrl = form.image.value
    const serviceName = form.serviceName.value
    const providerEmail = form.email.value
    const userEmail = form.userEmail.value
    const price = form.price.value
    const date = form.date.value
    const instruction = form.instruction.value

    const booking = {serviceUrl,serviceName,providerEmail,userEmail,price,date,instruction}
       axios.post("http://localhost:5000/booking-services",booking)
       .then((res) => {
        if (res.data.insertedId) {
          toast.success("Service purchase successfully."); 
          form.reset();
        }
        console.log(res.data);
      })
    }

  return (
    <div>
      <div className="my-6 flex justify-center items-center w-[60%] mx-auto">
      
      <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-base-100">
        <div className="flex justify-between items-center">
        <div className="flex space-x-4  items-center">
          <img
            alt=""
            src={photo}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 "
          />
          <div className="flex flex-col space-y-1">
            <h1
              
              className="text-sm font-semibold"
            >
              {name}
            </h1>
            
          </div>
        </div>
            <p className="font-semibold">{area}</p>
        </div>
        <div>
          <img
            src={serviceUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-lg"
          />
          <div className="flex justify-between items-center">
          <h2 className="mb-1 text-xl font-semibold">
            {serviceName}
          </h2>
          <p>${price}</p>
          </div>
          <p className="text-sm text-gray-400">
            {description}
          </p>
        </div>
        <div>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className={`btn bg-orange-400 hover:bg-orange-500 text-white`} disabled={user?.email === email} >Book Now</button>
            {
              user?.email === email && <span className="text-red-700 mx-1">you are service provider you can not book service</span>
            }

{/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handlePurchase} className=" mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Service URL</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={serviceUrl}
              readOnly
                type="text"
                placeholder="Service URL"
                name="image"
                required
                className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={serviceName}
              readOnly
                type="text"
                placeholder="Service Name"
                name="serviceName"
                required
                className="w-full input input-bordered  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row gap-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Provider Email</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={email}
                readOnly
                type="email"
                placeholder="Email."
                required
                name="email"
                className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={user.email}
                readOnly
                type="email"
                placeholder="Your Email"
                name="userEmail"
                required
                className="w-full input input-bordered  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <label className="input-group">
              <input
               
                type="date"
                name="date"
                required
                className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
              readOnly
              defaultValue={price}
                type="text"
                placeholder="Price"
                name="price"
                required
                className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>
        </div>

        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Instruction</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Instruction (max 100)"
                name="instruction"
                required
                className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
              />
            </label>
          </div>

        <input
          className="btn bg-orange-400 text-white  w-full my-4 hover:bg-orange-500"
          type="submit"
          value="Purchase"
        />
      </form>
  </div>
</dialog>

        </div>
      </div>
      
    </div>

<div>
  <h1>more service by same provider:{restServices.length}</h1>
</div>

    <Toaster /> 
      <Helmet>
      <title>Home-Fix | Single Service</title>
     </Helmet>
    </div>
  );
};

export default SingleService;
