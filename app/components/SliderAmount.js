import { useState } from "react";
import ReactSlider from "react-slider";

const SliderAmount = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const changeValue = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div>
      <div className="inline-block h-6 w-1/2 pl-6 pr-10">
        <ReactSlider
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          defaultValue={1000}
          min={1000}
          max={100000}
          value={currentValue}
          onChange={(value) => setCurrentValue(value)}
          renderMark={(props) => {
            if (props.key < currentValue) {
              props.className = "customSlider-mark customSlider-mark-before";
            } else if (props.key === currentValue) {
              props.className = "customSlider-mark customSlider-mark-active";
            }
            return <span {...props} />;
          }}
        />
      </div>
      <div className="ml-2 inline-block w-1/4 px-2 align-middle">
        <input
          type="text"
          name="tenure"
          id="tenure"
          className="w-full rounded-lg border-2 border-gray-300 p-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
          value={currentValue}
        />
      </div>
    </div>
  );
};

export default SliderAmount;
