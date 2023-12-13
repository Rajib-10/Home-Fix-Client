import toast, { Toaster } from "react-hot-toast";


const Emergency = () => {
  
  const handleSubmit = e => {
    
    e.preventDefault()
    const form =e.target
    const name = form.name.value
    const location = form.location.value
    const description = form.description.value
    const request = {name,location,description}
    if(request){
        toast.success("Request sent successfully.")
        form.reset()
    }

  };

  return (
    <div className="container mx-auto p-4">
       <h1 className="text-orange-500 text-center text-3xl font-medium">
        Emergency Service Request
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">
            Service Name
          </label>
          <input
            type="text"
            id="serviceName"
            name="name"
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Service Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Description"
          />
        </div>

        <button
          type="submit"
        
          className="btn bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Emergency Request
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Emergency;
