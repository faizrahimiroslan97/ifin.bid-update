import { useState } from "react";
import ReactSlider from "react-slider";

const SliderAmount = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const changeValue = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
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
  );
};

export default SliderAmount;