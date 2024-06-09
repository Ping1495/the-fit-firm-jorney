import { Link } from "react-router-dom";
import RankPic from "/public/images/rank.png";

/*dietChallenge = No Sugar Challenge/ Intermittent Fasting 16/8 Challenge /Plant-Based Eating Challenge/Hydration Challenge /
Mindful Eating Challenge /No Processed Foods Challenge/Low Carb Challenge / Meal Prep Challenge/ Lean Protein Challenge /Fiber-Rich Diet Challenge*/

/*workout challenhe =  */

function ChallengeSec() {
  return (
    <>
      <div className="bg-blue-300 h-[600px]">
        <div className="flex flex-row justify-evenly items-center font-semibold ">
          {/*box1 */}
          <div
            id="chooseBox"
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
                <button className="w-[250px] mb-[5px] bg-yellow-400 text-[#0A3288]   rounded-lg px-8 py-3 font-bold  text-lg text-center">
                  Click for Challenge!
                </button>
              </div>
            </div>
          </div>
          {/*box2 */}
          <div
            id="resultBox"
            className="bg-[#0A3288] h-[480px] w-[600px] rounded-3xl 
            mt-[60px] flex flex-col justify-between items-center text-white"
          >
            <div
              id="resultBox"
              className="bg-[#0A3288] h-[480px] w-[600px] rounded-3xl 
              mt-[35px] flex flex-col justify-between items-center text-white"
            >
              <div className="flex flex-col items-center w-[600px] ">
                <div className="flex flex-row">
                  <p className=" mb-2 bg-yellow-400 text-blue-900 px-2 py-2 rounded-lg font-bold text-4xl mr-5 text-center">
                    Challenge:
                  </p>
                  <p className="text-2xl font-bold mb-4 text-yellow-400">
                    Sugar-Free
                    <br />
                    7-Day Challenge
                  </p>
                </div>

                <p className=" mb-4 mt-4 text-white w-[400px] text-lg font-medium text-center">
                  Join us in eliminating added sugars from your diet for a week.
                  Say goodbye to sweets, sugary drinks, and processed foods with
                  added sugars.
                </p>

                <div className="border border-yellow-400 p-2 mt-2">
                  <p className="bg-yellow-400 text-[#0A3288] text-center font-bold">
                    Pros
                  </p>
                  <ol className="pl-4">
                    <li>Stable energy levels</li>
                    <li>Weight control</li>
                    <li>Better mood and mental clarity</li>
                  </ol>
                </div>
              </div>
              <div className="mb-9 flex justify-center w-full">
                <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold  hover:bg-yellow-500 transition duration-300">
                  Randomize
                </button>
                <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold  hover:bg-yellow-500 transition duration-300 ml-4">
                  Take the Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeSec;
