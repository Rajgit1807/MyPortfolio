"use client";
import React, {useState } from "react";
import Image from "next/image";
import TelImg from "../assets/telephone.png";
import "./Contact.css";

const Contact: React.FC = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleFocus = (
    setFocus: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setFocus(true);
  };

  // Handle blur with value type properly defined
  const handleBlur = (
    setFocus: React.Dispatch<React.SetStateAction<boolean>>,
    value: string
  ) => {
    if (!value) setFocus(false);
  };

  return (
    <div className="flex justify-center w-full pt-20 md:pt-32" id="contact">
      <div className="w-full max-w-[1800px] con-social" >
        {/* Left Section with Title and Image */}
        <div className="ps-[20%] contact-me">
          <div className="flex items-center ">
            <p className="text-white text-nowrap text-4xl md:text-5xl font-semibold contact-text">
              CONTACT <span className="text-[#FF2B51]">ME</span>
            </p>
            <div>
            <Image src={TelImg} className="vibrate-on-hover w-14 lg:w-16 mt-2 cursor-pointer tel-img" alt="Tel Image"  
            />
            </div>
            </div>
          <form className="w-full sm:max-w-md  mt-8 space-y-6">
            <div className="relative">
              <label
                className={`absolute  left-0 top-3 text-[#d32948]  transition-all ${
                  nameFocused
                    ? " text-[14px] sm:text-[14px] top-[-12px] font-semibold"
                    : "text-[15px] sm:text-[16px]"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                className="w-full text-[14px] sm:text-[16px]  bg-transparent border-b-2 border-white outline-none text-white py-2"
                onFocus={() => handleFocus(setNameFocused)}
                onBlur={(e) => handleBlur(setNameFocused, e.target.value)}
              />
            </div>

            <div className="relative">
              <label
                className={`absolute left-0 top-3 text-[#d32948] transition-all ${
                  emailFocused
                    ? "  text-sm top-[-12px] font-semibold"
                    : "text-base"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                className="w-full text-[14px] sm:text-[16px] bg-transparent border-b-2 border-white outline-none text-white py-2"
                onFocus={() => handleFocus(setEmailFocused)}
                onBlur={(e) => handleBlur(setEmailFocused, e.target.value)}
              />
            </div>

            <div className="relative">
              <label
                className={`absolute left-0 top-3 text-[#d32948] transition-all ${
                  messageFocused
                    ? "  text-sm top-[-12px] font-semibold"
                    : "text-base"
                }`}
              >
                Message
              </label>
              <textarea
                className="w-full text-[14px] sm:text-[16px]  bg-transparent border-b-2 border-white outline-none text-white py-2"
                rows={3}
                onFocus={() => handleFocus(setMessageFocused)}
                onBlur={(e) => handleBlur(setMessageFocused, e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        {/* Right Section with Form */}
        <div className="ps-[14%] social">
          <div className="social-div">
            <p className="text-white text-4xl md:text-5xl font-semibold ps-1 social-text">SOCIAL</p>
            <div className="flex gap-5 items-center mt-6">
              <svg
  className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
  xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="54px"
                height="54px"
              >
                <path
                  fill="#ffffff"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#000000"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                />
              </svg>
              <svg
                className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path
                  fill="white"
                  d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                />
              </svg>
              <svg
                className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                width="45px"
                height="44px"
              >
                <path fill="white" d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z" />
              </svg>
              <svg
                className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="53px"
                height="53px"
              >
                <path
                  fill="#FFFFFF"
                  d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
                />
              </svg>
            </div>
            <div className="flex gap-3 mt-8 other-method">
            <p className="text-white text-3xl font-semibold ps-1 text-nowrap label"><span className="text-[#FF2B51]">E-</span><span className="">MAIL -</span></p>
            <p className="text-2xl text-white mt-1 value">
              rudrii1807<span className="text-[#FF2B51]">@</span>gmail.com
            </p>
            </div>
            <div className="flex gap-3 mt-8 other-method">
            <p className="text-white text-3xl font-semibold ps-1 label"><span className="">MOBILE</span><span className=""> -</span></p>
            <p className="text-2xl text-white mt-1 value">
              +91<span className="text-[#FF2B51]">-</span>7903518918
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
