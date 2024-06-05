import { useState, useEffect } from "react";
import Header from "./header";

function BMR() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [tdee, setTdee] = useState("");
  const [bmr, setBmr] = useState("...");

  const bmrTdeeCalculate = () => {
    //find bmr
    let bmrValue = 0;
    if (sex === "male") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (sex === "female") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(bmrValue.toFixed(0));

    //find tdee

    let tdeeValue = 0;
    if (activityLevel === "1") {
      tdeeValue = bmrValue * 1.2;
    } else if (activityLevel === "2") {
      tdeeValue = bmrValue * 1.375;
    } else if (activityLevel === "3") {
      tdeeValue = bmrValue * 1.55;
    } else if (activityLevel === "4") {
      tdeeValue = bmrValue * 1.725;
    } else if (activityLevel === "5") {
      tdeeValue = bmrValue * 1.9;
    }
    setTdee(tdeeValue.toFixed(0));
  };

  const handleCalculate = () => {
    bmrTdeeCalculate();
  };

  return (
    <>
      <div className="bg-blue-500 h-screen">
        <Header />
        <div className="flex justify-center mt-[50px] font-semibold">
          <div className="bg-white h-[550px] w-[450px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] w-[450px] text-white text-center rounded-t-3xl">
              BMR CALCULATOR
            </p>
            <form>
              <div className="block text-lg font-normal text-[#0A3288] mb-2 mt-7">
                <p className="block text-lg font-normal text-[#0A3288] mb-2 mt-4">
                  Gender
                </p>
                <label className="mr-[50px] ml-[100px]">
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    checked={sex === "male"}
                    onChange={(e) => setSex(e.target.value)}
                  />
                  &nbsp;&nbsp;Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    checked={sex === "female"}
                    onChange={(e) => setSex(e.target.value)}
                  />
                  &nbsp;&nbsp;Female
                </label>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Age
                </label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="26"
                  type="text"
                  id="age"
                  name="age"
                  className="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>

              <div>
                <label
                  htmlFor="height"
                  className="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Height (cm)
                </label>
                <input
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="159"
                  type="text"
                  id="height"
                  name="height"
                  className="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
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
                  placeholder="45"
                  type="text"
                  id="weight"
                  name="weight"
                  className="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
            </form>
          </div>

          <div className="bg-white h-[550px] w-[450px] rounded-3xl flex flex-col items-center ml-7">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] w-[450px] text-white text-center rounded-t-3xl">
              BMR CALCULATOR
            </p>
            <form>
              <div className="block text-lg font-normal text-[#0A3288] mb-2 mt-4">
                <p className="block text-lg font-normal text-[#0A3288] mb-2 mt-4">
                  Activity
                </p>
                <label className="">
                  <input
                    type="radio"
                    name="activityLevel"
                    value="1"
                    checked={activityLevel === "1"}
                    onChange={(e) => setActivityLevel(e.target.value)}
                  />
                  &nbsp;&nbsp;Little or no exercise
                </label>
                <br />
                <label className="">
                  <input
                    type="radio"
                    name="activityLevel"
                    value="2"
                    checked={activityLevel === "2"}
                    onChange={(e) => setActivityLevel(e.target.value)}
                  />
                  &nbsp;&nbsp;Light exercise 1-3 times per week
                </label>
                <br />
                <label className="">
                  <input
                    type="radio"
                    name="activityLevel"
                    value="3"
                    checked={activityLevel === "3"}
                    onChange={(e) => setActivityLevel(e.target.value)}
                  />
                  &nbsp;&nbsp;Moderate exercise 4-5 times per week
                </label>
                <br />

                <label className="">
                  <input
                    type="radio"
                    name="activityLevel"
                    value="4"
                    checked={activityLevel === "4"}
                    onChange={(e) => setActivityLevel(e.target.value)}
                  />
                  &nbsp;&nbsp;Intense exercise 6-7 times per week
                </label>
                <br />
                <label className="">
                  <input
                    type="radio"
                    name="activityLevel"
                    value="5"
                    checked={activityLevel === "5"}
                    onChange={(e) => setActivityLevel(e.target.value)}
                  />
                  &nbsp;&nbsp;Very intense exercise daily, or physical job
                </label>
                <br />
              </div>
            </form>
            <div>
              <button
                className="w-[250px] bg-[#0A3288] text-white text-[20px] font-semibold border border-white py-2 px-4 rounded-xl mb-[10px] mt-[8px]"
                onClick={handleCalculate}
              >
                calculate your Calories
              </button>
            </div>
            <div className=" text-base font-semibold text-[#0A3288] mt-2 border-b-2 border-[#0A3288] pb-2">
              <span>Your BMR is&nbsp;{bmr}&nbsp; Calories per day</span>
            </div>
            <div className="flex flex-col justify-center items-center  text-lg font-semibold text-[#0A3288]">
              <p className="text-xl font-midium mt-2">
                Daily calories with activity (TDEE):
              </p>
              <p className="w-[80px] h-[50px] text-3xl font-semibold  py-1 px-1 mt-4 border-2 border-blue-500 rounded-xl text-center">
                {tdee}
              </p>
            </div>

            <div className=" text-base font-semibold text-[#0A3288] mt-1">
              <p className="text-xs mt-5">
                *BMR is the number of calories your body needs to function at
                rest.
              </p>
              <p className="text-xs ">
                *TDEE is the number of calories needed daily to maintain your
                weight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMR;
