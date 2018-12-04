import * as React from 'react';
import { Card, Select, Input } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const state = {
  steps: ['Settings', 'Questions', 'Audience', 'Access', 'Summary'],
  currentStep: 'Audience',
  surveyInfo: {
    name: '',
    type: '',
    intro: '',
    logo: '',
    isAnonymous: true,
    allowSkipSingleChoice: true,
    status: 'draft'
  },
  communication: {
    subject: '',
    body: '',
    sendSMS: false,
    reminder: {
      frequency: '2 Days',
      stopAfter: '30 Days'
    }
  },
  surveyPreview: {
    recipients: [{ email: 'l.simpson@acme.com', name: 'Leane Simpson' }],
    message: '',
  },
  questions: [
    {
      question: "I'm proud to tell others I work here",
      category: ['engagement'],
      type: 'muliple-choice',
      choices: ['Strongly Agree', 'Agree', 'Niether Agree nor disagree', 'Disagree', 'Strongly disagree'],
      allowComments: true,
      calculate: true,
      calculateFavorability: true,
      isDriverImpactQuestion: true,
    }
  ],
  participants: {
    auto: [{ email: 'l.simpson@acme.com', name: 'Leane Simpson' }],
    manual: [{ email: 'l.simpson@acme.com', name: 'Leane Simpson' }],
    total: 2
  },
  acl: // Access List
    [{
      email: 'l.simpson@acme.com',
      source: 'auto', // ['auto', 'manual'],
      accessType: ['all'] // e.g ['view', 'edit', 'message'] access right for the user
    }]
}

export default () => {
  const menu = (
    <Select className="mt-8" defaultValue="Engagement" style={{ width: '100%' }}>
      <Option value="1">Engagement</Option>
      <Option value="2">Onboarding</Option>
      <Option value="3">Offboarding</Option>
    </Select>
  );
  return (
    <>
      <Card>
        <h3>General Settings</h3>
        <div style={{ margin: '0 300px' }}>
          <label>Survey Name</label>
          <Input className="mt-8" />
          <div className="mt3">
            <label>Survey Type</label>
            {menu}
          </div>
          <div className="mt3">
            <label>Intoduction Page Test</label>
            <TextArea className="mt-8" autosize={{ minRows: 2, maxRows: 6 }} />
          </div>
        </div>
      </Card>
      <Card style={{ marginTop: '1rem' }}>
        <h3>Communications</h3>
      </Card>
    </>
  );
};
