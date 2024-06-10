import { useState } from "react";
import Header from "./header";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("00.00");
  const [message, setMessage] = useState("Normal weight");
  const [bestMinWeight, setBestMinWeight] = useState("00.00");
  const [bestMaxWeight, setBestMaxWeight] = useState("00.00");

  //validate height input
  const validateHeightInput = () => {
    if (height === "") {
      alert("Height is required");
      return false;
    }

    const heightNumber = Number(height);

    if (isNaN(heightNumber) || heightNumber <= 0) {
      alert("Please enter a valid number for height");
      return false;
    }

    return true;
  };

  //validate weight input
  const validateWeightInput = () => {
    if (weight === "") {
      alert("weight is required");
      return false;
    }

    const weightNumber = Number(weight);

    if (isNaN(weightNumber) || weightNumber <= 0) {
      alert("Please enter a valid number for weight");
      return false;
    }

    return true;
  };
  const calculateBMI = () => {
    //check validate inputs
    if (!validateHeightInput() || !validateWeightInput()) {
      return;
    }

    //bmi calculate
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    //message
    if (bmiValue < 18.5) {
      setMessage("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.99) {
      setMessage("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.99) {
      setMessage("Overweight");
    } else if (bmiValue >= 30) {
      setMessage("Obese");
    }

    //best weight
    //min
    const minWeight = (18.5 * (heightInMeters * heightInMeters)).toFixed(2);
    setBestMinWeight(minWeight);
    //max
    const maxWeight = (24.9 * (heightInMeters * heightInMeters)).toFixed(2);
    setBestMaxWeight(maxWeight);
  };

  const handleCalculate = () => {
    calculateBMI();
  };

  return (
    <>
      <div className="bg-blue-500 sm:h-screen w-[full]  h-[800px]">
        <Header />
        <div className="flex justify-center mt-[50px] font-semibold">
          <div className="bg-white h-[550px]  w-[450px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] w-[450px] text-white text-center rounded-t-3xl">
              BMI CALCULATOR
            </p>
            <form>
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
            <div>
              <button
                className="w-[250px] bg-[#0A3288] text-white text-[20px] font-semibold border border-white py-2 px-6 rounded-xl mb-[20px] mt-[30px]"
                onClick={handleCalculate}
              >
                calculate your BMI
              </button>
            </div>
            <div className="text-[#0A3288] mb-[15px] flex flex-col justify-center items-center">
              <p className="text-xl font-midium ">Your BMI is</p>
              <p className="text-3xl font-midium  py-2 px-2 mt-2 border-2 border-blue-500 rounded-xl">
                {bmi}
              </p>
            </div>

            <div>
              <p className="text-[#0A3288] text-center">
                You are a {message} <br /> Your best weight is {bestMinWeight}
                &nbsp;-&nbsp;
                {bestMaxWeight} kg
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMI;
