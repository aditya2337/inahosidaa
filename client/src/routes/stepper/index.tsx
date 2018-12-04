import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import Steps from './steps';
import { changeStep } from './stepper_duck';
import * as AllSteps from './allSteps';

const mapStateToProps = state => ({
  currentStep: state.steps.currentStep,
  steps: state.steps.steps
});
const mapDispatchToProps = dispatch => ({
  changeStep: currentStep => dispatch(changeStep(currentStep)),
});

interface StateProps {
  currentStep: any,
  steps: [],
  changeStep: (nextStep) => void
}

const Actions = ({ nextStep, isLast, currentStep, onNextStepClick }) => {
  const primaryLabel = isLast ? 'Launch' : `Next Step: ${nextStep}`;
  return (
    <div className="mt3 flex justify-end">
      {currentStep !== 'Settings' && <Button className="mr3">Send Survey Preview</Button> }
      <Button type="primary" onClick={() => !isLast && onNextStepClick(nextStep)}>{primaryLabel}</Button>
    </div>
  )
}

class Stepper extends React.Component<StateProps> {
  returnCurrentStep = () => {
    switch (this.props.currentStep) {
      case 'Settings':
        return <AllSteps.Settings />;
      case 'Questions':
        return <AllSteps.Questions />;
      case 'Audience':
        return <AllSteps.Audience />;
      case 'Access':
        return <AllSteps.Access />;
      case 'Summary':
        return <AllSteps.Summary />;
      default:
        break;
    }
  }

  getActionProps = () => {
    const { currentStep, steps } = this.props;

    const indexOfCurrentStep = steps.indexOf(currentStep as never);
    const isLast = indexOfCurrentStep === (steps.length - 1);
    const nextStep = isLast ? currentStep : steps[indexOfCurrentStep + 1];
    return {
      isLast,
      nextStep,
      currentStep,
      onNextStepClick: (nextStep) => this.props.changeStep(nextStep)
    }
  }

  render() {
    const { currentStep, steps } = this.props;
    return (
      <div className="pa4 h-100 bg-light-gray">
        <Steps
          steps={steps}
          activeStep={currentStep}
          onStepChange={this.props.changeStep}
        />

        <div style={{ marginTop: '1rem' }}>
          {this.returnCurrentStep()}
        </div>
        <Actions {...this.getActionProps()} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stepper as any);
