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
    if (goal === "healthy") {
      setMinProtine((weight * 0.8).toFixed(2));
      setMaxProtine((weight * 1).toFixed(2));
      setMessage(
        "Not just muscles! Protein helps you feel full, boosts immunity, strengthens skin, hair & nails, and improves brain function! Make sure you get enough!"
      );
      setHyphen("-");
    } else if (goal === "loseWeight") {
      setMinProtine((weight * 1.2).toFixed(2));
      setMaxProtine((weight * 1.5).toFixed(2));
      setMessage(
        "Protein takes longer to digest than carbs and fats, making you feel full for longer. This curbs cravings and helps burn more calories throughout the day."
      );
      setHyphen("-");
    } else if (goal === "gainMuscleMass") {
      setMinProtine((weight * 1.6).toFixed(2));
      setMaxProtine((weight * 2.2).toFixed(2));
      setMessage(
        "Muscle growth needs protein! It's like bricks for your body, repairing damage and building bigger, stronger muscles for future workouts."
      );
      setHyphen("-");
    }
  };

  const handleCalculate = () => {
    calculate();
  };

  return (
    <>
      <div className="bg-blue-500 h-screen">
        <Header />
        <div className="flex justify-center mt-[50px] font-semibold">
          <div className="bg-white h-[550px] w-[450px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] w-[450px] text-white text-center rounded-t-3xl">
              PROTINE&nbsp;&nbsp;CALCULATOR
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
                  className="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
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
                calculate your Protine
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
