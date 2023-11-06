import { Cursor, useTypewriter } from "react-simple-typewriter";


const UpdateService = () => {


    

    const [text] = useTypewriter({
        words: [" Service URL", " Service Name", " price", " Service Area", " Description"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
      });

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target
        const  serviceUrl = form.image.value
        const serviceName = form.serviceName.value
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const price = form.price.value
        const area = form.area.value
        const description = form.description.value

        const updating = {serviceUrl,serviceName,name,email,photo,price,area,description}
        console.log(updating)

    }

    return (
        <div>
        <h1 className="text-3xl font-bold text-center my-8 text-orange-400">Update Service</h1>
  
        <h1 className="text-2xl text-orange-500 text-center">
          Please Carefully Update
          <span className="text-2xl text-indigo-700">
            {text} <Cursor cursorStyle="<" />
          </span>
        </h1>
  
        <form className="md:w-[70%] mx-auto p-4" onSubmit={handleAddProduct} >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service URL</span>
              </label>
              <label className="input-group">
                <input
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
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
               
                  type="text"
                  placeholder="Your Name"
                  required
                  name="name"
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
               
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  required
                  className="w-full input input-bordered  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
                />
              </label>
            </div>
          </div>
  
          
  
          <div className="flex flex-col md:flex-row  gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Image</span>
              </label>
              <label className="input-group">
                <input
              
                  type="text"
                  placeholder="Image URL"
                  name="photo"
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
                  type="text"
                  placeholder="Price"
                  name="price"
                  required
                  className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
                />
              </label>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row  gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Area"
                  name="area"
                  required
                  className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Description (max 100)"
                  name="description"
                  required
                  className="input input-bordered w-full  bg-gray-200  focus:border-orange-300 focus:bg-white focus:outline-none"
                />
              </label>
            </div>
          </div>
  
          
          <input
            className="btn bg-orange-400 text-white  w-full my-4 hover:bg-orange-500"
            type="submit"
            value="Update Service"
          />
        </form>
        
      
      </div>
    );
};

export default UpdateService;