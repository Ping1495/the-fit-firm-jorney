import { Link } from "react-router-dom";
import RankPic from "/public/images/rank.png";

/*dietChallenge = No Sugar Challenge/ Intermittent Fasting 16/8 Challenge /Plant-Based Eating Challenge/Hydration Challenge /
Mindful Eating Challenge /No Processed Foods Challenge/Low Carb Challenge / Meal Prep Challenge/ Lean Protein Challenge /Fiber-Rich Diet Challenge*/

/*workout challenhe =  */

function RankSec() {
  return (
    <>
      <div className="bg-blue-300 h-[600px]">
        <div className="flex flex-row justify-evenly items-center font-semibold ">
          <div
            className="bg-[#0A3288] h-[480px] w-[600px] rounded-3xl 
           mt-[60px]"
          >
            <div className="flex flex-col  items-center h-[480px]">
              <p className="w-[600px] bg-yellow-400 text-[#0A3288] px-1 py-5 text-center mb-9 rounded-t-3xl font-bold text-4xl">
                Randomize your Challenge
              </p>
              <img
                src={RankPic}
                alt=""
                className="w-[250px] h-[250px] bg-[#0A3288] mb-9"
              />
              <div className="w-[600px] flex flex-row items-end  justify-evenly">
                <p className="w-[150px] mb-[5px]  bg-yellow-400 text-[#0A3288] rounded-full px-1 py-1 font-semibold text-[24px] text-center">
                  Workout
                </p>
                <p className="w-[150px] mb-[5px] bg-yellow-400 text-[#0A3288]   rounded-full px-1 py-1 font-semibold  text-[24px] text-center">
                  Diet
                </p>
                <p className="w-[150px] mb-[5px] bg-yellow-400 text-[#0A3288]  rounded-full px-1 py-1 font-semibold  text-[24px] text-center">
                  Lifestyle
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#0A3288] h-[480px] w-[700px] rounded-3xl flex flex-col items-center mt-[60px]"></div>
        </div>
      </div>
    </>
  );
}

export default RankSec;
