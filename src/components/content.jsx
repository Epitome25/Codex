import { Link } from "react-router-dom";
import billThree from "../assets/darklogo.png";
import phones from "../assets/images/phones.png";
import { useState } from "react";
import { userType } from "../libs/isAuth";
import RecruiterFeature from "./FeatureCard/RecruiterFeature/RecruiterFeature";
import StudentFeature from "./FeatureCard/StudentFeature/StudentFeature";
import MainHomePage from "../components/MainHomePage/MainHomePage"


export default function Jumbotron() {
  let [isOpen, setIsOpen] = useState(false);
  const type = userType();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {type === "recruiter" ? (
        <main className="bg-gradient-to-br from-[#191714] to-[#2234AE]">
          <div className="w-11/12 flex flex-wrap mx-auto">
            <div className="lg:text-left text-center lg:w-7/12 w-12/12 lg:pt-24 pt-12 lg:pb-40 pb-16 mx-auto">
              <h1 className="text-white lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Welcome to Recruiter home
                <br />
              </h1>
              <p className="mt-3 text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                With profound knowledge in the IT field and specialized skills,
                we can assist you in accessing and recruiting the best IT
                candidates.
              </p>
              <div className="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link
                  onClick={() => openModal()}
                  className="transform ease-in duration-100 md:mx-0 text-black  font-semibold rounded-xl items-center justify-center py-3 border-2  hover:bg-black hover:text-primary  text-base  bg-primary md:py-4 md:text-lg px-8"
                >
                  See Companies board
                </Link>
              </div>
            </div>

            <div className="md:w-5/12 w-12/12 md:pt-12 md:pl-10 pl-0 pt-0 md:pb-12 pb-20 mx-auto">
              <img
                className="md:mt-28 mt-0 w-full lg:float-right float-none mx-auto"
                src={phones}
                alt="phones"
              />
            </div>
          </div>
          <RecruiterFeature />
        </main>
      ) : type === "applicant" ? (
        <main className="bg-gradient-to-br from-[#191714] to-[#2234AE]">
        <div className="w-11/12 flex flex-wrap mx-auto">
          <div className="lg:text-left text-center lg:w-7/12 w-12/12 lg:pt-24 pt-12 lg:pb-40 pb-16 mx-auto">
            <h1 className="text-white lg:text-6xl text-4xl sm:mt-5 font-bold sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
              Welcome to Applicant Home
              <br />
            </h1>
            <p className="mt-3 text-xl text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
              With profound knowledge in the IT field and specialized skills,
              we can assist you in accessing and targeting the best IT
              Roles.
            </p>
          </div>

          <div className="md:w-5/12 w-12/12 md:pt-12 md:pl-10 pl-0 pt-0 md:pb-12 pb-20 mx-auto">
            <img
              className="md:mt-28 mt-0 w-full lg:float-right float-none mx-auto"
              src={phones}
              alt="phones"
            />
          </div>
        </div>
        <StudentFeature/>

      </main>
      ) : (
        <main className="bg-gradient-to-br from-[#191714] to-[#2234AE]">

          <div className="text-center w-[90%] pt-32 pb-52 mx-auto space-y-20 flex flex-col items-center">
            {/* Hero Section */}
            <div className="relative w-[80%] flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f7d4d8] via-[#ffffff] to-[#9ae3f4] text-white p-12 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105">
              <div className="md:w-1/2 w-full text-left space-y-6">
                <h1 className="text-5xl font-extrabold leading-tight text-violet-500" >
                  Your Career, Your Future
                </h1>
                <p className="text-lg text-black opacity-90">
                  Unlock the best job opportunities with personalized
                  recommendations and expert insights.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link to={"/jobs"}>
                    <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 transform transition hover:-translate-y-1">
                      Explore Jobs
                    </button>
                  </Link>
                  <Link to={"/sign-up"}>
                    <button className="border-2 border-blue-800 text-black font-semibold py-3 px-6 rounded-full hover:bg-pink-400 hover:text-white transform transition hover:-translate-y-1">
                      Sign Up Free
                    </button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
                <img
                  src={billThree}
                  className="w-80 rounded-2xl shadow-xl"
                  alt="Carousel"
                />
              </div>
            </div>


              <MainHomePage/>

          </div>
        </main>
      )}

      
    </>
  );
}
