import { useState, useRef, useEffect } from "react";
import { Button, Round, Wrapper, YellowDot } from "./BeatCircle.styles";

export function BeatCircle({
  radius,
  numButtons,
  bpm,
}: {
  radius: number;
  numButtons: number;
  bpm: number;
}) {
  const center = radius * 1.25;
  const [activateButtonIndices, setActivateButtonIndices] = useState<number[]>(
    []
  );
  const handleButtonClick = (index: number) => {
    const updatedIndices = [...activateButtonIndices];
    if (updatedIndices.includes(index)) {
      updatedIndices.splice(updatedIndices.indexOf(index), 1);
    } else {
      updatedIndices.push(index);
    }

    setActivateButtonIndices(updatedIndices);
  };

  const [angle, setAngle] = useState(0);
  const prevTimeRef = useRef();
  useEffect(() => {
    const animate = (time) => {
      if (!prevTimeRef.current) {
        prevTimeRef.current = time;
      }
      const deltaTime = time - prevTimeRef.current;

      const angleDelta = (bpm * deltaTime * 0.001) % 360;
      setAngle((prevAngle) => (prevAngle + angleDelta) % 360);
      prevTimeRef.current = time;
      requestAnimationFrame(animate);
    };
    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [bpm]);
  const { x, y } = {
    x:
      center -
      (radius * 0.02) / 2 +
      (1 - 0.02 / 2) * radius * Math.cos((angle * Math.PI) / 180),
    y:
      center -
      (radius * 0.02) / 2 +
      (1 - 0.02 / 2) * radius * Math.sin((angle * Math.PI) / 180),
  };

  const buttonClicked = activateButtonIndices
    .map((index) => ((2 * index * Math.PI) / numButtons).toFixed(1))
    .includes((angle * (Math.PI / 180)).toFixed(1));

  useEffect(() => {
    if (buttonClicked) {
      //   console.log(1);
      // Set a timeout to reset the buttonClicked state after a short delay
      const timeoutId = setTimeout(() => 500);
      return () => clearTimeout(timeoutId);
    }
  });

  const roundSize = buttonClicked ? radius * 1.05 : radius; // Increase the size of Round if any button is clicked
  //   const roundSize = radius * 1.1;

  const buttons = Array.from(Array(numButtons).keys()).map((index) => {
    return (
      <Button
        key={index}
        onClick={() => handleButtonClick(index)}
        style={{
          backgroundColor: activateButtonIndices.includes(index)
            ? "black"
            : "#e2e2e2",
          left: `${
            roundSize -
            roundSize * 0.02 +
            (1 - 0.02 / 2) *
              roundSize *
              Math.cos((2 * Math.PI * index) / numButtons)
          }px`,
          top: `${
            roundSize -
            roundSize * 0.02 +
            (1 - 0.02 / 2) *
              roundSize *
              Math.sin((2 * Math.PI * index) / numButtons)
          }px`,
        }}
      />
    );
  });
  return (
    <Wrapper radius={radius} center={center}>
      <Round radius={roundSize} center={center}>
        {buttons}
      </Round>
      <YellowDot style={{ top: y, left: x }}></YellowDot>
    </Wrapper>
  );
}
