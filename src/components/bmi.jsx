import Header from "./header";

function BMI() {
  return (
    <>
      <div className="bg-blue-500 h-screen">
        <Header />
        <div className="flex justify-center mt-[50px] font-semibold">
          <div className="bg-white h-[550px] w-[450px] rounded-3xl flex flex-col items-center">
            <p className="text-3xl font-midium bg-[#0A3288] py-[20px] w-[450px] text-white text-center rounded-t-3xl">
              BMI CALCULATOR
            </p>
            <form>
              <div>
                <label
                  for="height"
                  class="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Height (cm)
                </label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  class="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
              <div>
                <label
                  for="weight"
                  class="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Weight (kg)
                </label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  class="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
            </form>
            <div>
              <button className="w-[250px] bg-[#0A3288] text-white text-[20px] font-semibold border border-white py-2 px-6 rounded-xl mb-[20px] mt-[30px]">
                calculate your BMI
              </button>
            </div>
            <div className="text-[#0A3288] mb-[20px] flex flex-col justify-center items-center">
              <p className="text-xl font-midium ">Your BMI is</p>
              <p className="text-3xl font-midium  py-2 px-2 mt-2 border-2 border-blue-500 rounded-xl">
                22.0
              </p>
            </div>
            <div>
              <p className="text-[#0A3288] mt-2">
                You are NORMAL & Your best weight is 51-64 kg
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMI;
