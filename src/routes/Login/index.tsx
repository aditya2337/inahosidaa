import React, { Component } from 'react';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const { Content } = Layout;
const FormItem = Form.Item;

interface Props {
  form: WrappedFormUtils
}

const FormField = ({ field, getFieldDecorator, message, required, style, iconType, type, placeholder }) => (
  <FormItem>
    {getFieldDecorator(field, {
      rules: [{ required, message }],
    })(
      <Input
        prefix={<Icon type={iconType} style={style} />}
        type={type}
        placeholder={placeholder}
      />
    )}
  </FormItem>
)

class LoginForm extends Component<Props> {

  handleSubmit = () => {}

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="measure-wide flex-auto">
        <FormField
          field="userName"
          getFieldDecorator={getFieldDecorator}
          message="Please input your username!"
          required={true}
          style={{ color: 'rgba(0,0,0,.25)' }}
          iconType="user"
          type="text"
          placeholder="Username"
        />
        <FormField
          field="password"
          getFieldDecorator={getFieldDecorator}
          message="Please input your Password!"
          required={true}
          style={{ color: 'rgba(0,0,0,.25)' }}
          iconType="lock"
          type="password"
          placeholder="Password"
        />
        <Button type="primary" htmlType="submit" className="w-100">
          Log in
        </Button>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create()<Props>(LoginForm);


export default () => (
  <div className="h-100 flex flex-row">
    <div className="w-100 bg-black-40">
    </div>
    <div className="w-100 flex items-center">
      <Content className="pa3 flex justify-center">
        <WrappedLoginForm />
      </Content>
    </div>
  </div>
);
