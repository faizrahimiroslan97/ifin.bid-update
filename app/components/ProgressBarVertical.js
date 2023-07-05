const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="h-12 w-full rounded-md bg-gray-300">
      <div style={fillerStyles}>
        <p className="h-full py-2 text-2xl font-bold text-white">{`${completed}%`}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
