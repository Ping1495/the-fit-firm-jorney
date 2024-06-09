import React from "react";
import lifestyles from "/public/images/lifestyles.png"; // Update the path to your image

function WelcomeSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-6/12 bg-[#D9E3FB] h-auto md:h-[500px] px-4 md:px-10 flex flex-col items-center justify-evenly py-8 md:py-0">
        <div className="text-center md:text-left">
          <h2 className="text-black text-3xl md:text-4xl w-full md:w-[550px]">
            Welcome to The Fit Firm Journey
          </h2>

          <p className="w-full md:w-[500px] mt-4 md:mt-8 text-[16px] pl-2">
            Your go-to destination for simplified wellness.
            <br />
            <br />
            Navigate effortlessly through our user-friendly tools, empowering
            you to understand and monitor your health with ease. Gain invaluable
            insights into your well-being with just a few clicks.
            <br />
            <br />
            Explore additional resources on our site and embark on your journey
            towards a healthier life today!
          </p>
        </div>

        <button className="w-auto bg-[#0A3288] text-white font-semibold border border-white py-4 px-6 rounded-lg mt-8 md:mt-0">
          START YOUR JOURNEY
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-6/12 h-auto md:h-[500px] py-8 md:py-0">
        <img
          src={lifestyles}
          alt="lifestyles-pic"
          className="w-[250px] md:w-[350px]"
        />
      </div>
    </div>
  );
}

export default WelcomeSection;
