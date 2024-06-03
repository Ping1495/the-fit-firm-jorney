import { useState, useEffect } from "react";
import Header from "./header";

function BMR() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState("?");
  const [message, setMessage] = useState("...");
  const [bestMinWeight, setBestMinWeight] = useState("");
  const [bestMaxWeight, setBestMaxWeight] = useState("");

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
              <div className="block text-lg font-normal text-[#0A3288] mb-2 mt-7">
                <p className="block text-lg font-normal text-[#0A3288] mb-2 mt-4">
                  Activity
                </p>
                <label className="">
                  <input
                    type="radio"
                    name="activity"
                    value="little"
                    checked={activity === "little"}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  &nbsp;&nbsp;Little or no exercise
                </label>
                <br />
                <label className="">
                  <input
                    type="radio"
                    name="activity"
                    value="light"
                    checked={activity === "light"}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  &nbsp;&nbsp;Light exercise 1-3 times per week
                </label>
                <br />
                <label className="">
                  <input
                    type="radio"
                    name="activity"
                    value="moderate"
                    checked={activity === "moderate"}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  &nbsp;&nbsp;Moderate exercise 4-5 times per week
                </label>
                <br />

                <label className="">
                  <input
                    type="radio"
                    name="activity"
                    value="Intense"
                    checked={activity === "Intense"}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  &nbsp;&nbsp;Intense exercise 6-7 times per week
                </label>
                <br />
                <label className="">
                  <input
                    type="radio"
                    name="activity"
                    value="sportsperson"
                    checked={activity === "sportsperson"}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  &nbsp;&nbsp;Very intense exercise daily, or physical job
                </label>
                <br />
              </div>
            </form>
            <div>
              <button className="w-[250px] bg-[#0A3288] text-white text-[20px] font-semibold border border-white py-2 px-6 rounded-xl mb-[20px] mt-[15px]">
                calculate your BMR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMR;
