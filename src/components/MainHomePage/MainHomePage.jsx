import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/league-gothic";
const mavigationList = ["Home", "Tokens", "Learn"];
const result = [
  {
    value: "98%",
    name: "User Satisfaction",
  },
  {
    value: "5M+",
    name: "Cool Number",
  },
  {
    value: "4.7",
    name: "Google Review",
  },
  {
    value: "21+",
    name: "API integration",
  },
];
const ourWork = [
  {
    icon: "./img/nft/infytoken/mobile.svg",
    icon: ".",
    title: "Mobile Payment",
    description: "Secure loans using real estate properties as collateral.",
    alt: "mobile",
  },
  {
    icon: "./img/nft/infytoken/security.svg",
    title: "Security & Control",
    description: "Unlock liquidity by leveraging mortgage securities.",
    alt: "security",
  },
  {
    icon: "./img/nft/infytoken/protect.svg",
    title: "Protect the identity",
    description: "Tap into a global network of lenders and borrowers.",
    alt: "protect",
  },
  {
    icon: "./img/nft/infytoken/doller.svg",
    title: "No Transaction Fees",
    description:
      "Leverage the security and transparency of blockchain technology.",
    alt: "doller",
  },
];
const card = [
  {
    icon: "/img/nft/infytoken/shield.svg",
    title: "Secure and Transparent",
    description:
      "Benefit from secure and transparent hiring processes with AI-driven assessments and blockchain-backed credentials.",
    name: "shield",
  },
  {
    icon: "/img/nft/infytoken/internet.png",
    title: "Global Reach",
    description: "Connect with top recruiters and applicants worldwide, breaking geographical barriers in job hiring and interview preparation.",
    name: "internet",
  },
  {
    icon: "/img/nft/infytoken/refresh.svg",
    title: "Seamless Collaboration",
    description:
      "Conduct smooth and efficient coding interviews with real-time online code collaboration rooms (Interview Room) and AI-powered question generation.",
    name: "refresh",
  },
  {
    icon: "/img/nft/infytoken/coin.png",
    title: "Diverse Asset Coverage",
    description:
      "• Recruiters can post jobs, evaluate candidates, and conduct interviews efficiently. • Applicants can track DSA progress, review and optimize code, and apply to jobs effortlessly.",
    name: "coin",
  },
];
const aboutUsContent = [
  "CodeHireX is a cutting-edge interview preparation and hiring platform that bridges the gap between recruiters and applicants through advanced AI-driven tools.",
  "Whether you're a recruiter looking to hire top talent or an applicant preparing for your dream job, CodeHireX provides a seamless, tech-enabled environment to streamline the hiring process.",
];
const dropDownData = [
  {
    title: "How do I apply for jobs on CodeHireX?",
    description:
      "Simply create a profile, browse job listings, and apply using the one-click Job Apply feature.",
  },
  {
    title: "What is the DSA Tracker, and how does it help?",
    description:
      "The DSA Tracker helps you monitor your progress in Data Structures & Algorithms, ensuring you're ready for coding interviews.",
  },
  {
    title: "How does the Code Optimizer work?",
    description:
      "Our Code Optimizer provides instant feedback, suggests improvements, and ensures your code follows best practices.",
  },
  {
    title: "Can I create custom coding challenges for applicants?",
    description:
      "Yes! Use our AI-powered Question Generator to design technical challenges tailored to your job requirements.",
  },
  {
    title: "How do I conduct a live coding interview?",
    description:
      "Our Online Code Collaborator (Interview Room) allows real-time coding assessments, pair programming, and instant feedback.",
  },
  {
    title: "What makes CodeHireX different from traditional job portals?",
    description:
      "We offer real-time collaboration, AI-driven assessments, and automated code reviews, making hiring faster and more efficient.",
  },
];
const graph = [
  {
    title: "Marketing",
    percentage: "25%",
    color: `#9517AF`,
    backgroundColor: "#F1DEF3",
  },
  {
    title: "Business Development",
    percentage: "15%",
    color: `#01CC9B`,
    backgroundColor: "#E2F0F1",
  },
  {
    title: "Product Development",
    percentage: "10%",
    color: `#7DE314`,
    backgroundColor: "#EEF2E3",
  },
  {
    title: "Reserve ",
    percentage: "10%",
    color: `#E5EA05`,
    backgroundColor: "#FBF5E1",
  },
  {
    title: "Reserve ",
    percentage: "13%",
    color: `#14A0C0`,
    backgroundColor: "#E4ECF4",
  },
  {
    title: "Token Sale",
    percentage: "18%",
    color: `#3206D3`,
    backgroundColor: "#E4ECF4",
  },
];
const download = [1, 2, 3];
const TemplateReact = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const showMenuItems = () => {
    if (!showMenu) {
      document.body.style.overflow = "hidden";                     
    } else {
      document.body.style.overflow = "auto";
    }
    setShowMenu(!showMenu);
  };
  return (
    <div className="w-full min-h-[100vh] font-inter" style={{ backgroundColor: "transparent"}}>
      <div className="mx-auto ">
        <div className="flex flex-col gap-20 items-center">
          <div className="max-w-screen-xl w-full relative">
            
          </div>
          <div className="sm:px-20 px-8 flex gap-2 max-w-screen-xl w-full">
            <div className="flex flex-col gap-10">
              <span className="text-4xl text-[#dc7bef] font-extrabold">
                About US
              </span>
              <div className="flex flex-col gap-7">
                <div className="max-w-xl">
                  <span className="text-2xl text-[#ffffff] font-semibold">
                  CodeHireX – The Ultimate Interview Preparation & Hiring Platform
                  </span>
                </div>
                <div className="max-w-xl flex flex-col gap-5">
                  {aboutUsContent?.map((data, index) => (
                    <span
                      key={index}
                      className="text-xl text-[#ffffff] font-normal"
                    >
                      {data}
                    </span>
                  ))}
                </div>
                <button className="flex py-3 px-5 bg-gradient-to-br from-[#9517AF] to-[#3206D3] text-white rounded-md w-fit text-lg hover:bg-gradient-to-l" onClick={() => navigate("/sign-in")}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block min-w-[450px] xl:min-w-[550px]">
              <img
                src="/img/nft/infytoken/aboutus.svg"
                alt="about-us image"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:px-20 px-8 max-w-screen-xl w-full">
            <div className="flex flex-col gap-7 items-center">
              <span className="font-semibold text-4xl text-[#dc7bef] text-center">
                Key Features Of CodeHireX
              </span>
              <span className="text-center text-2xl font-normal max-w-xl text-[#ffffff]">
              Empowering Smarter Hiring & Career Growth with CodeHireX
              </span>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 justify-center">
              {card?.map((data, index) => (
                <div
                  className="flex max-w-[546px] cursor-pointer hover:shadow-lg rounded-2xl"
                  key={index}
                >
                  <div className="w-full  bg-gradient-to-t to-[#9517AF] from-[#3206D3]  px-[1px] border py-[1px] 2xl:px-0.5 2xl:py-0.5   rounded-2xl">
                    <div className=" h-full w-full bg-[#FBF4FA] rounded-2xl py-6 px-5 flex flex-col gap-2.5">
                      <div className="h-6 w-6">
                        <img src={data?.icon} alt={data?.name} />
                      </div>
                      <span className="text-lg sm:text-2xl font-semibold text-[#dc7bef]">
                        {data?.title}
                      </span>
                      <span className="text-md sm:text-xl font-normal text-[#233047]">
                        {data?.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="">
              <div className="flex max-w-5xl mx-auto justify-between flex-col md:flex-row gap-10 ">
                {result?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-4 text-center"
                    >
                      <span className="text-2xl text-[#dc7bef] leading-6 font-semibold">
                        {data?.value}
                      </span>
                      <span className="text-[#ffffff] text-xl  leading-5 font-normal">
                        {data?.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          <div className="sm:px-20 px-8  flex flex-col gap-9 max-w-screen-xl w-full">
            <div className="flex flex-col gap-7 items-center">
              <span className="text-2xl sm:text-4xl text-[#dc7bef] font-semibold">
              Frequently Asked Questions (FAQ) – CodeHireX
              </span>
              <span className="text-xl sm:text-2xl text-[#ffffff] font-normal text-center max-w-xl">
                Emphasize the benefits of choosing CodeHireX for Smarter Hiring & Career Growth
              </span>
            </div>
            {dropDownData.map((acc, index) => {
              return (
                <div key={index} className="py-1">
                  <div className="w-full bg-gradient-to-t to-[#9517AF] from-[#3206D3] px-[1px] 2xl:px-0.5 2xl:py-0.5 py-[1px] rounded-2xl ">
                    <div className=" h-full w-full bg-[#FBF4FA] rounded-2xl">
                      <DropDown title={acc.title} content={acc.description} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default TemplateReact;
export const DropDown = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="w-full cursor-pointer bg-transparent py-8 px-7 gap-3"
      onClick={toggleExpanded}
    >
      <div className="flex  flex-row items-center justify-between text-left gap-3">
        <h5 className="flex-1 text-lg sm:text-2xl font-medium ">{title}</h5>
        <div className="flex items-center justify-center rounded-full">
          <img
            src="/img/nft/infytoken/uparrow.png"
            alt="arrow"
            className={!expanded ? "rotate-180" : "rotate-0"}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden pt-0 transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-1"
        }`}
      >
        <p className="pb-4 text-left  sm:text-xl font-normal text-sm ">
          {content}
        </p>
      </div>
    </div>
  );
};