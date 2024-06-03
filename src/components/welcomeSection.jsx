import lifestyles from "/public/images/lifestyles.png";

function WelcomeSection() {
  return (
    <>
      <div className="flex flex-row ">
        <div className="w-6/12  bg-[#D9E3FB] h-[500px] px-10 flex flex-col items-center justify-evenly">
          <div>
            <h2 className="text-black  text-4xl w-[550px] ">
              Welcome to The Fit Firm Journey
            </h2>

            <p className="w-[500px] mt-8 text-[16px] pl-2">
              {" "}
              Your go-to destination for simplified wellness.
              <br />
              <br />
              Navigate effortlessly through our user-friendly tools, empowering
              you to understand and monitor your health with ease. Gain
              invaluable insights into your well-being with just a few clicks.
              <br />
              <br />
              Explore additional resources on our site and embark on your
              journey towards a healthier life today!"
            </p>
          </div>

          <button className="w-auto bg-[#0A3288] text-white font-semibold border border-white py-4 px-6 rounded-lg mr-[320px]">
            START YOUR JOURNEY
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-6/12 h-[500px] ">
          <img src={lifestyles} alt="lifestyles-pic" className="w-[350px]" />
        </div>
      </div>
    </>
  );
}

export default WelcomeSection;
