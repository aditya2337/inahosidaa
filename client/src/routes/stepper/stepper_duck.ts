const STEP_CHANGE = 'STEPPER_STEP_CHANGE';

export default (state = {
  steps: ['Settings', 'Questions', 'Audience', 'Access', 'Summary'],
  currentStep: 'Settings'
}, action) => {
  switch (action.type) {
    case STEP_CHANGE:
      console.log(action.currentStep);
      return (<any>Object).assign({}, state, {
        currentStep: action.currentStep
      });
  
    default:
      return state;
  }
}

export const changeStep = currentStep => ({
  type: STEP_CHANGE,
  currentStep
});
