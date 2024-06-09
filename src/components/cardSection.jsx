import { Link } from "react-router-dom";
import bmiPic from "/public/images/bmi.png";
import waterPic from "/public/images/water.jpg";
import meatPic from "/public/images/meat.jpg";
import noodlePic from "/public/images/noodle.jpg";

function CardSection() {
  return (
    <div className="sm:h-[600px] h-[1900px] bg-[#0A3288]">
      <h1 className="text-white text-3xl py-[50px] text-center">Body Check</h1>
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <Link
          to={`/bmi`}
          className="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 border-white mb-4 sm:mb-0"
        >
          <img
            src={bmiPic}
            alt="Your Image"
            className="w-full h-48 object-contain pt-5"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#0A3288]">BMI</div>
            <p className="text-gray-700 w-[250px]">
              BMI is a measurement comparing body weight and height for health
              assessment.
            </p>
          </div>
        </Link>

        <Link
          to={`/bmr`}
          className="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 border-white mb-4 sm:mb-0"
        >
          <img
            src={noodlePic}
            alt="Your Image"
            className="w-full h-48 object-contain pt-5"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#0A3288]">BMR</div>
            <p className="text-gray-700 w-[250px]">
              Basal metabolic rate (BMR) is the number of calories your body
              needs to accomplish its most basic (basal) life-sustaining
              functions.
            </p>
          </div>
        </Link>

        <Link
          to={`/WaterCalculate`}
          className="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 border-white mb-4 sm:mb-0"
        >
          <img
            src={waterPic}
            alt="Your Image"
            className="w-full h-48 object-contain pt-5"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#0A3288]">
              Water Calculation
            </div>
            <p className="text-gray-700 w-[250px]">
              How Much Water Should You Drink Per Day?
            </p>
          </div>
        </Link>

        <Link
          to={`/ProtineCalculate`}
          className="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 border-white"
        >
          <img
            src={meatPic}
            alt="Your Image"
            className="w-full h-48 object-contain pt-5"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#0A3288]">
              Protein Calculation
            </div>
            <p className="text-gray-700 w-[250px]">
              How Much Protein Should You Eat Per Day?
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardSection;
