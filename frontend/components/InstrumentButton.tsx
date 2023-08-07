import { useDrag } from "react-dnd";

const InstrumentButton = ({ instrumentName }) => {
  const [, dragRef] = useDrag({
    type: "instrumentButton",
    item: { instrumentName },
  });

  return (
    <button ref={dragRef} style={{ border: "1px solid black" }}>
      {instrumentName}
    </button>
  );
};

export default InstrumentButton;
