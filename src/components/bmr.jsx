import Header from "./header";
import "./bmr.css";

function BMR() {
  return (
    <>
      <div className="bg-blue-500 h-screen">
        <Header />
        <div className="flex justify-center mt-[50px]">
          <div className="bg-white h-[550px] w-[450px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] w-[450px] text-white text-center rounded-t-3xl">
              BMR CALCULATOR
            </p>
            <form>
              <div className="flex flex-col justify-center items-center ">
                <label htmlFor="age" className="text-2xl font-midium">
                  Age
                </label>

                <input type="number" name="age" id="age" className="age" />
              </div>
              <div className="flex flex-rol justify-center items-center ">
                <div>
                  <input type="checkbox" name="sex" id="male" />
                  <label htmlFor="male" className="text-2xl font-midium">
                    Male
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="sex" id="female" />
                  <label htmlFor="female" className="text-2xl font-midium">
                    Female
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <label htmlFor="height" className="text-2xl font-midium">
                  Height(cm)
                </label>

                <input
                  type="number"
                  name="height"
                  id="height"
                  className="height"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <label htmlFor="weight" className="text-2xl font-midium">
                  Weight(kg)
                </label>

                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="weight"
                />
              </div>
            </form>
            <div className="">
              <p className="text-3xl font-midium ">BMR</p>
              <p className="text-3xl font-midium ">22.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMR;
