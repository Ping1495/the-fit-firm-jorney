//ส่วน
import { Link } from "react-router-dom";
import bmiPic from "/public/images/bmi.png";

function CardSection() {
  return (
    <>
      <div className="h-[600px]  bg-white ">
        <h1 className="text-white text-3xl py-[50px]  text-center">
          Body Check
        </h1>

        <div className="flex flex-roe items-center justify-around ">
          <Link
            to={`/bmi`}
            class="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 borger-white"
          >
            <img
              src={bmiPic}
              alt="Your Image"
              class="w-full h-48 object-contain pt-5"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-[#0A3288]">BMI</div>
              <p class="text-gray-700 w-[250px]">
                BMI is a measurement comparing body weight and height for health
                assessment.
              </p>
            </div>
          </Link>

          <Link
            to={`/bmr`}
            class="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 borger-white"
          >
            <img
              src={bmiPic}
              alt="Your Image"
              class="w-full h-48 object-contain pt-5"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-[#0A3288]">BMR</div>
              <p class="text-gray-700 w-[250px]">
                basal metabolic rate (BMR) is the number of calories your body
                needs to accomplish its most basic (basal) life-sustaining
                functions.
              </p>
            </div>
          </Link>

          <Link
            to={`/WaterCalculate`}
            class="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 borger-white"
          >
            <img
              src={bmiPic}
              alt="Your Image"
              class="w-full h-48 object-contain pt-5"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-[#0A3288]">
                Water Calculation
              </div>
              <p class="text-gray-700 w-[250px]">
                How Much Water Should You Drink Per Day?
              </p>
            </div>
          </Link>

          <Link
            to={`/ProtineCalculate`}
            class="h-[400px] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-8 borger-white"
          >
            <img
              src={bmiPic}
              alt="Your Image"
              class="w-full h-48 object-contain pt-5"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-[#0A3288]">
                Protein Calculation
              </div>
              <p class="text-gray-700 w-[250px]">
                How Much Protein Should You Eat Per Day?
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardSection;
