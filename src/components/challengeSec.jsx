import { useState } from "react";
import { Link } from "react-router-dom";
import RankPic from "/public/images/rank.png";

const challenges = [
  {
    title: "Sugar-Free",
    description:
      "Join us in eliminating added sugars from your diet for a week. Say goodbye to sweets, sugary drinks, and processed foods with added sugars.",
    pros: [
      "Stable energy levels",
      "Weight control",
      "Better mood and mental clarity",
    ],
  },
  {
    title: "Intermittent Fasting 16/8",
    description:
      "Try intermittent fasting by eating only during an 8-hour window each day and fasting for the remaining 16 hours.",
    pros: [
      "Improved metabolism",
      "Enhanced mental clarity",
      "Better blood sugar control",
    ],
  },
  {
    title: "Plant-Based Eating",
    description:
      "Switch to a plant-based diet for a week and enjoy the benefits of more vegetables, fruits, and whole grains.",
    pros: ["Better digestion", "Improved heart health", "Reduced inflammation"],
  },
  // เพิ่มchallenge
];

function ChallengeSec() {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);
  const [showResult, setShowResult] = useState(false);

  const randomizeChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setCurrentChallenge(challenges[randomIndex]);
    setShowResult(true);
  };

  return (
    <div className="bg-blue-300 sm:h-[600px] h-full pb-9 ">
      <div className="flex sm:flex-row flex-col justify-evenly items-center font-semibold">
        {/*box1 */}
        <div
          id="chooseBox"
          className="bg-[#0A3288] h-auto sm:h-[480px]  w-[350px] sm:w-[600px] rounded-3xl mt-[60px] p-4 sm:p-0"
        >
          <div className="flex flex-col items-center h-full">
            <p className="w-full bg-yellow-400 text-[#0A3288] px-1 py-5 text-center mb-9 rounded-t-3xl font-bold text-2xl sm:text-4xl">
              Randomize your Challenge
            </p>

            <img
              src={RankPic}
              alt=""
              className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] bg-[#0A3288] mb-9"
            />
            <div className="w-full flex justify-center">
              <button
                className="w-full max-w-[250px] mb-[5px] bg-yellow-400 text-[#0A3288] rounded-lg px-8 py-3 font-bold text-lg text-center"
                onClick={randomizeChallenge}
              >
                Click for Challenge!
              </button>
            </div>
          </div>
        </div>
        {/*box2 */}
        {showResult && (
          <div
            id="resultBox"
            className="bg-[#0A3288] h-auto sm:h-[480px]  w-[350px] sm:w-[600px] rounded-3xl mt-[60px] p-4 sm:p-0 flex flex-col justify-between items-center text-white"
          >
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-row items-center sm:items-start pt-9">
                <p className="mb-2 sm:mb-0 bg-yellow-400 text-blue-900 px-2 py-2 rounded-lg font-bold text-2xl sm:text-4xl mr-2 sm:mr-5 text-center">
                  Challenge:
                </p>
                <p className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400 text-left">
                  {currentChallenge.title}
                  <br />
                  7-Day Challenge
                </p>
              </div>

              <p className="mb-4 mt-4 text-white w-full sm:w-[400px] sm:text-lg text-base sm:font-medium text-center sm:text-left font-normal">
                {currentChallenge.description}
              </p>

              <div className="border border-yellow-400 p-2 mt-2 w-[300px] sm:w-auto mb-4">
                <p className="bg-yellow-400 text-[#0A3288] text-center font-bold">
                  Pros
                </p>
                <ol className="pl-4 sm:text-lg text-base font-normal">
                  {currentChallenge.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="mb-9 flex justify-center w-full space-x-4">
              <button
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                onClick={randomizeChallenge}
              >
                Randomize
              </button>
              <Link
                to={"/comingSoon"}
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300"
              >
                Take the Challenge
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChallengeSec;
