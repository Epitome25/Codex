import { Link } from "react-router-dom";
import { userType } from "libs/isAuth";
import icon from "assets/icon.jpg";
import introduce from "assets/introduce.png";
import cooperate from "assets/coop.png";

export function CompanyBanner() {
  const type = userType();
  return (
    <>
      {type === "recruiter" ? (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#0892d0] to-[#4b0082] text-white py-12">
          

          {/* Section 3 */}
          <div className="md:w-10/12 w-11/12 flex flex-wrap mx-auto text-center gap-8 mt-12">
            <div className="w-full space-y-6 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-200">
                We help tech companies reach their full potential
              </h1>
              <p className="text-lg text-gray-300">
                Post jobs for free and decide how much you are willing to pay
                for an interview or hire. Make your recruitment process
                crowdsourced and remove expensive headhunters.
              </p>
              <div className="flex justify-center mt-6 gap-3">
                <Link
                  to="/create-new-job"
                  className="bg-[#3498db] hover:bg-[#5dade2] transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
                >
                  Request a demo
                </Link>
                <Link
                  to="/for-recruiter"
                  className="bg-gray-700 hover:bg-gray-600 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
                >
                  Read more
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      ) : null}
    </>
  );
}
