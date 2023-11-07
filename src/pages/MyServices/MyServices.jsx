import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import MyServiceCard from "./MyServiceCard";
import { Helmet } from "react-helmet";

const MyServices = () => {
  const { user } = useAuth();
  const [myServices, setMyServices] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/add-services?email=${user?.email}`)
      .then((res) => setMyServices(res.data));
  }, [user]);

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto">
        {myServices?.map((myService) => (
          <MyServiceCard
            key={myService._id}
            myService={myService}
            myServices={myServices}
            setMyServices={setMyServices}
          />
        ))}
      </div>
      <Helmet>
        <title>Home-Fix | My Service</title>
      </Helmet>
    </div>
  );
};

export default MyServices;
