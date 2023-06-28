import { useState } from "react";
import ReactSlider from "react-slider";

const Slider = () => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <ReactSlider
      className="customSlider"
      trackClassName="customSlider-track"
      thumbClassName="customSlider-thumb"
      defaultValue={1000}
      min={1000}
      max={10000}
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
  );
};

export default Slider;
