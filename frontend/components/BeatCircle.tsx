import React from 'react';
import BeatButtons from "./InstrumentContainer/BeatButton";
import {
  CircleContainer,
  Round,
} from "./InstrumentContainer/BeatCircle.styles";
import { Spinner } from "./InstrumentContainer/Spinner";

interface BeatCircleProps {
  radius: number;
  angle: number;
  numButtons: number;
  bpm: number;
  setBPM: (value: number) => void;
  n_beats: number;
  setn_beats: (value: number) => void;
  nth_partial: number;
  setnth_partial: (value: number) => void;
}

export function BeatCircle({
  radius,
  angle,
  numButtons,
  bpm,
  setBPM,
  n_beats,
  setn_beats,
  nth_partial,
  setnth_partial
}: BeatCircleProps): JSX.Element {
  const wrapperSize = radius * 2.5;
  const center = wrapperSize / 2;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleContainer
        style={{ width: ` ${wrapperSize}px`, height: `${wrapperSize}px` }}
      >
        <Round
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            border: `${radius * 0.02}px solid #cdcdcd`,
            top: `${center - radius}px`,
            left: `${center - radius}px`,
          }}
        ></Round>
        <BeatButtons
          numButtons={numButtons}
          center={center}
          roundRadius={radius}
          activateButtonIndices={[0, 4, 8, 12]}
          handleButtonClick={() => {}}
        ></BeatButtons>
        
        <Spinner radius={radius} angle={angle} center={center} />
      </CircleContainer>

      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'row' }}>
        {[
          { label: 'BPM:', value: bpm, setter: setBPM, min: 30, type: 'input' },
          { label: 'BEAT:', value: n_beats, setter: setn_beats, min: 1, type: 'button' },
          { label: 'DIVISION:', value: nth_partial, setter: setnth_partial, min: 1, type: 'button' }
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '10px' }}>
            <span>{item.label}</span>
            {item.type === 'input' ? (
              <input 
                type="number"
                value={item.value}
                onChange={(e) => item.setter(Number(e.target.value))}
                style={{ width: '50px', textAlign: 'center', marginRight: '10px' }}
              />
            ) : (
              <>
                <button onClick={() => {
                  if (item.value > item.min) {
                    item.setter(prev => prev - 1);
                  }
                }}>-</button>
                <div style={{ margin: '0 10px' }}>{item.value}</div>
                <button onClick={() => item.setter(prev => prev + 1)}>+</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
