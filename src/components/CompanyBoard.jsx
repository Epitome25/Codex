import { useContext, useEffect, useState } from "react";
import axios from "axios";
import apiList from "../libs/apiList";
import Recruiter from "./Recruiter";
import Loader from "./Loader";
import { SetPopupContext } from "App";

export default function CompanyBoard() {
  const setPopup = useContext(SetPopupContext);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    let recruiter = apiList.allRecruiter;
    axios
      .get(recruiter)
      .then((response) => {
        setCompanies(response?.data.allUser);
        console.log("companie:", response?.data.allUser);
      })
      .catch((err) => {
        console.log(err.message);
        setPopup({
          open: true,
          icon: "error",
          message: err.message,
        });
      });
  }, []);

  if (!companies) {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-light">
        <div className="md:w-10/12 w-11/12 mx-auto h-full md:pb-28 pb-12 ">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-900 text-center md:pb-16 pb-12">
            Recruiter
          </h1>
        
        </div>
      </div>
    </>
  );
}
