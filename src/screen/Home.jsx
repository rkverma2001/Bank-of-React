import SliderCom from "../components/SliderComp";
import Navbar from "../components/Navbar";
import "../screen/Home.css";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../components/PieChart";
import Select from "../components/Select";

Chart.register(CategoryScale);

const Home = () => {
  const [homeValue, setHomeValue] = useState(1700);
  const [downPaymentValue, setDownPaymentValue] = useState(180);
  const [loanAmountValue, setLoanAmountValue] = useState(1520);
  const [interestValue, setInterestValue] = useState(2);

  const [chartData, setChartData] = useState({
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Monthly Payment",
        data: [homeValue, 230],
        backgroundColor: ["#fadce5", "#d9ebfb"],
        borderColor: ["#f383a3", "#67b5ef"],
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    //Update the downpaymentvalue : 20% of current homevalue
    const downPayment = homeValue * 0.2;
    setDownPaymentValue(downPayment);

    // Update the loanAmountValue : homevalue - downPaymentValue
    const loanAmount = homeValue - downPaymentValue;
    setLoanAmountValue(loanAmount);
  }, [homeValue]);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <div className="home">
        {/* Sliders */}
        <div className="slider">
          <SliderCom
            title={"Home Value"}
            symbol={"$"}
            setValue={setHomeValue}
            value={homeValue}
            min={1000}
            max={10000}
            step={10}
          />
          <SliderCom
            title={"Down Payment"}
            symbol={"$"}
            setValue={setDownPaymentValue}
            value={downPaymentValue}
            min={0}
            max={homeValue}
            step={10}
          />
          <SliderCom
            title={"Loan Amount"}
            symbol={"$"}
            setValue={setLoanAmountValue}
            value={loanAmountValue}
            min={0}
            max={homeValue}
            step={10}
          />
          <SliderCom
            title={"Interest Rate"}
            symbol={"%"}
            setValue={setInterestValue}
            value={interestValue}
            min={2}
            max={18}
            step={1}
          />
          <Select />
        </div>
        {/* Graph */}
        <div className="graph">
          <div className="pie-graph">
            <PieChart chartData={chartData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
