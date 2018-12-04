import * as React from 'react';

const ActiveDot = () => (
  <div className="br-100" style={{ height: 8, width: 8, background: '#2A9FD8' }} />
)

const Step = (props) => (
  <div className="flex flex-column items-center">
    <div
      style={{ width: 30, height: 30, cursor: 'pointer', color: props.active ? 'inherit' : '#a9a7a7' }}
      className={`flex justify-center items-center br-100 ${props.active ? 'bg-white paper-effect' : 'inherit ba'}`}
      onClick={() => props.onStepChange(props.label)}
    >
      {props.active ? <ActiveDot /> : props.step}
    </div>
    <div className="mt2" style={{ color: props.active ? '#000000' : '#a9a7a7', fontSize: 12 }}>
      {props.label}
    </div>
  </div>
);

export default (props) => (
  <div className="flex justify-between mt3">
    {props.steps.map((label, index) => {
      const step = index + 1;
      return (
        <Step
          key={label}
          step={step}
          active={props.activeStep === label}
          onStepChange={props.onStepChange}
          label={label}
        />
      );
    })}
  </div>
);
