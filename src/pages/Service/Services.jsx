import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { BallTriangle } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Services = () => {
  const [searchServiceName, setSearchServiceName] = useState("");
  const [searchServices, setSearchServices] = useState([]);
  const [services, setServices] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/add-services").then((res) => {
      setServices(res.data);
      setSearchServices(res.data);
      setLoading(false);
    });
  }, []);

  const handleSearch = () => {
    const serviceName = searchServiceName.toLowerCase();
    const filtered = services.filter((service) =>
      service.serviceName.toLowerCase().includes(serviceName)
    );
    setSearchServices(filtered);
  };

  console.log("search", searchServiceName);
  return (
    <div>
      <div className="flex justify-evenly my-3">
        <h1 className="text-xl font-medium text-orange-500">
          Comprehensive Home Improvement Services
        </h1>
        <div>
          <div className="form-control">
            <div className="input-group">
              <input
                onChange={(e) => setSearchServiceName(e.target.value)}
                type="text"
                placeholder="Search…"
                className="input border-orange-400 focus:outline-none focus:border-orange-500 "
              />
              <button
                onClick={handleSearch}
                className="btn btn-square border-orange-500"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

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
          {searchServices == 0 ? (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-3xl text-red-700 font-bold">
                Your searched service is not now available
              </h1>
            </div>
          ) : (
            <div>
              {isShow ? (
                <div className="grid grid-cols-1 gap-8 w-1/2 mx-auto my-10">
                  {searchServices?.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 w-1/2 mx-auto my-10">
                  {searchServices?.slice(0, 6).map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))}
                </div>
              )}
              {searchServices?.length > 6 && (
                <div className={`text-center my-2 ${isShow && "hidden"}`}>
                  <button
                    onClick={() => setIsShow(true)}
                    className="btn bg-orange-400 hover:bg-orange-400 text-white"
                  >
                    Show All
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <Helmet>
      <title>Home-Fix | Services</title>
     </Helmet>
    </div>
  );
};

export default Services;
