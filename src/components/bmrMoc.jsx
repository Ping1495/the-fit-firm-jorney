import React, { useState } from "react";

function BMR_TDEE_Calculator() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState(0);
  const [bmr, setBMR] = useState(0);
  const [tdee, setTDEE] = useState(0);

  const calculateBMR_TDEE = () => {
    let bmrValue = 0;
    if (sex === "male") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (sex === "female") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      bmrValue = 0;
    }
    setBMR(bmrValue);

    let tdeeValue = 0;
    switch (activityLevel) {
      case 1:
        tdeeValue = bmrValue * 1.2;
        break;
      case 2:
        tdeeValue = bmrValue * 1.375;
        break;
      case 3:
        tdeeValue = bmrValue * 1.55;
        break;
      case 4:
        tdeeValue = bmrValue * 1.725;
        break;
      case 5:
        tdeeValue = bmrValue * 1.9;
        break;
      default:
        tdeeValue = bmrValue * 0;
    }
    setTDEE(tdeeValue);
  };

  const handleCalculate = () => {
    calculateBMR_TDEE();
  };

  return (
    <div>
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      <label>Sex:</label>
      <select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />

      <label>Height (cm):</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />

      <label>Weight (kg):</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />

      <label>Activity Level:</label>
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(parseInt(e.target.value))}
      >
        <option value={1}>Sedentary (Little to no exercise)</option>
        <option value={2}>
          Lightly active (Light exercise/sports 1-3 days/week)
        </option>
        <option value={3}>
          Moderately active (Moderate exercise/sports 3-5 days/week)
        </option>
        <option value={4}>
          Very active (Hard exercise/sports 6-7 days a week)
        </option>
        <option value={5}>
          Extra active (Very hard exercise/sports & physical job or 2x training)
        </option>
      </select>
      <br />

      <button onClick={handleCalculate}>Calculate BMR & TDEE</button>
      <br />

      <div>
        {bmr !== null && tdee !== null && (
          <>
            <h2>BMR: {bmr.toFixed(2)}</h2>
            <h2>TDEE: {tdee.toFixed(2)}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default BMR_TDEE_Calculator;
