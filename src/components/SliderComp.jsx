import Slider from "@mui/material/Slider";
import "../components/SliderComp.css";
const SliderComp = ({ min, max, step, value, symbol, title, setValue }) => {

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <div>
        <p>
          {title}
        </p>
      </div>
      <div>
        <h2>
          {symbol} {value}
        </h2>
      </div>
      <div>
        <Slider
          aria-label="Temperature"
          defaultValue={value}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={step}
          marks
          min={min}
          max={max}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
      <div className="min-max">
        <div>
          <p>
            {symbol} {min}
          </p>
        </div>
        <div>
          <p>
            {symbol} {max}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderComp;
