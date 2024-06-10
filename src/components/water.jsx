/*ใช้วิธีการคำนวณตามน้ำหนักตัว: น้ำหนักตัว (กิโลกรัม) x 30-35 มิลลิลิตร
ปรับตามระดับกิจกรรม: เพิ่ม 0.70 มิลลิลิตรต่อชั่วโมงของการออกกำลังกาย
ถ้าอากาศร้อนเพิ่ม 0.5ลิตร*/
import { useState } from "react";
import Header from "./header";

const WaterCalculate = () => {
  const [weight, setWeight] = useState("");
  const [workoutTime, setworkoutTime] = useState("");
  const [isHotDay, setIsHotDay] = useState("");
  const [minWater, setMinWater] = useState("");
  const [maxWater, setMaxWater] = useState("");
  const [hyphen, setHyphen] = useState("");

  //calculate water

  const Calculate = () => {
    if (isHotDay === "no" && workoutTime === "0") {
      setMinWater((weight * 0.03).toFixed(1));
      setMaxWater((weight * 0.035).toFixed(1));
      setHyphen("-");
    } else if (isHotDay === "yes" && workoutTime === "0") {
      setMinWater((weight * 0.03 + 0.5).toFixed(1));
      setMaxWater((weight * 0.035 + 0.5).toFixed(1));
      setHyphen("-");
    } else if (isHotDay === "no" && workoutTime !== "0") {
      setMinWater((weight * 0.03 + 0.7 * workoutTime).toFixed(1));
      setMaxWater((weight * 0.035 + 0.7 * workoutTime).toFixed(1));
      setHyphen("-");
    } else if (isHotDay === "yes" && workoutTime !== "0") {
      setMinWater((weight * 0.03 + 0.5 + 0.7 * workoutTime).toFixed(1));
      setMaxWater((weight * 0.035 + 0.5 + 0.7 * workoutTime).toFixed(1));
      setHyphen("-");
    }
  };

  const handleCalculate = () => {
    Calculate();
  };

  return (
    <>
      <div className="bg-blue-500 h-[750px] sm:h-screen pb-9">
        <Header />
        <div className="flex justify-center mt-[50px] font-semibold">
          <div className="bg-white sm:h-[550px] sm:w-[450px] h-full w-[350px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] sm:w-[450px] w-[350px] text-white text-center rounded-t-3xl">
              WATER&nbsp;&nbsp;CALCULATOR
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
              <div>
                <label
                  htmlFor="workoutTime"
                  className="block text-lg font-normal text-[#0A3288] mb-2 mt-2"
                >
                  How many hours of exercise per day?
                </label>
                <input
                  value={workoutTime}
                  onChange={(e) => setworkoutTime(e.target.value)}
                  type="text"
                  name="workoutTime"
                  id="workoutTime"
                  className="mt-1 p-2 border-2 border-[#0A3288] rounded  sm:w-[350px] w-[320px] "
                  placeholder="1.5"
                />
              </div>
              <div className="block text-lg font-normal text-[#0A3288] mb-1 mt-2">
                <p>You are in a hot environment.</p>
                <label className="ml-[30px]">
                  <input
                    type="radio"
                    name="isHotDay"
                    value="yes"
                    checked={isHotDay === "yes"}
                    onChange={(e) => setIsHotDay(e.target.value)}
                  />
                  &nbsp;&nbsp;Yes
                </label>
                <br />

                <label className="ml-[30px]">
                  <input
                    type="radio"
                    name="isHotDay"
                    value="no"
                    checked={isHotDay === "no"}
                    onChange={(e) => setIsHotDay(e.target.value)}
                  />
                  &nbsp;&nbsp;No
                </label>
                <br />
              </div>
            </form>
            <div>
              <button
                className="w-[250px] bg-[#0A3288] text-white text-[20px] font-semibold border border-white py-2 px-6 rounded-xl mb-[10px] mt-[10px]"
                onClick={handleCalculate}
              >
                calculate your water
              </button>
            </div>
            <div className="text-[#0A3288] mb-[15px] flex flex-col justify-center items-center">
              <p className="text-xl font-midium ">You need water</p>
              <div className="text-[#0A3288]  flex flex-rol justify-center items-center">
                <p className="text-[20px] font-semibold  py-1 px-1 mt-3 border-2 border-blue-500 rounded-xl w-[160px] h-[40px] text-center ml-[25px]">
                  {minWater} {hyphen} {maxWater}
                </p>
                <p className="text-[20px] font-normal text-center pt-3">
                  &nbsp;&nbsp;L.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterCalculate;
