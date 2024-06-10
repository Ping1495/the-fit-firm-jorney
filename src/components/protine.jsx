import { useState } from "react";
import Header from "./header";

const ProtineCalculate = () => {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [minProtine, setMinProtine] = useState("");
  const [maxProtine, setMaxProtine] = useState("");
  const [message, setMessage] = useState("");
  const [hyphen, setHyphen] = useState("");

  //calculate protine
  //min
  const calculate = () => {
    let minValue = 0;
    let maxValue = 0;
    let thatMessage = "";
    if (goal === "healthy") {
      minValue = weight * 0.8;
      maxValue = weight * 1;
      thatMessage =
        "Not just muscles! Protein helps you feel full, boosts immunity, strengthens skin, hair & nails, and improves brain function! Make sure you get enough!";
    } else if (goal === "loseWeight") {
      minValue = weight * 1.2;
      maxValue = weight * 1.5;
      thatMessage =
        "Protein takes longer to digest than carbs and fats, making you feel full for longer. This curbs cravings and helps burn more calories throughout the day.";
    } else if (goal === "gainMuscleMass") {
      minValue = weight * 1.6;
      maxValue = weight * 2.2;
      thatMessage =
        "Muscle growth needs protein! It's like bricks for your body, repairing damage and building bigger, stronger muscles for future workouts.";
    }

    setMinProtine(minValue.toFixed(2));
    setMaxProtine(maxValue.toFixed(2));
    setMessage(thatMessage);
    setHyphen("-");
  };

  const handleCalculate = () => {
    calculate();
  };

  return (
    <>
      <div className="bg-blue-500 h-[800px] sm:h-screen pb-9">
        <Header />
        <div className="flex justify-center mt-[50px] font-semibold">
          <div className="bg-white sm:h-[550px] sm:w-[450px] h-full w-[350px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] sm:w-[450px] w-[350px] text-white text-center rounded-t-3xl">
              PROTEIN&nbsp;&nbsp;CALCULATOR
            </p>
            <form>
              <div>
                <label
                  htmlFor="weight"
                  className="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Weight (kg)
                </label>
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="65"
                  type="text"
                  id="weight"
                  name="weight"
                  className="mt-1 p-2 border-2 border-[#0A3288] rounded sm:w-[350px] w-[320px]"
                />
              </div>
              <div className="block text-lg font-normal text-[#0A3288] mt-4">
                <p className="block text-lg font-normal text-[#0A3288]">
                  The Goal is
                </p>
                <label className="ml-[30px]">
                  <input
                    type="radio"
                    name="goal"
                    value="healthy"
                    checked={goal === "healthy"}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                  &nbsp;&nbsp;Healthy
                </label>
                <br />
                <label className="ml-[30px]">
                  <input
                    type="radio"
                    name="goal"
                    value="loseWeight"
                    checked={goal === "loseWeight"}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                  &nbsp;&nbsp;Lose Weight
                </label>
                <br />
                <label className="ml-[30px]">
                  <input
                    type="radio"
                    name="goal"
                    value="gainMuscleMass"
                    checked={goal === "gainMuscleMass"}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                  &nbsp;&nbsp;Gain Muscle Mass
                </label>
              </div>
            </form>
            <div>
              <button
                className="w-[250px] bg-[#0A3288] text-white text-[20px] font-semibold border border-white py-2 px-6 rounded-xl mb-[10px] mt-[10px]"
                onClick={handleCalculate}
              >
                calculate your Protein
              </button>
            </div>
            <div className="text-[#0A3288] mb-[15px] flex flex-col justify-center items-center">
              <p className="text-xl font-midium ">You need protein</p>
              <div className="text-[#0A3288]  flex flex-rol justify-center items-center">
                <p className="text-[20px] font-semibold  py-1 px-1 mt-3 border-2 border-blue-500 rounded-xl w-[160px] h-[40px] text-center ml-[25px]">
                  {minProtine} {hyphen} {maxProtine}
                </p>
                <p className="text-[20px] font-normal ">&nbsp;&nbsp;g.</p>
              </div>
            </div>
            <div>
              <p className="text-[#0A3288] text-center text-sm w-[400px]">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtineCalculate;
