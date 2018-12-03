import React, { useState, useEffect } from 'react';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { connect } from 'react-redux';

import { loginUser } from './login_duck';

const { Content } = Layout;
const FormItem = Form.Item;

interface Props {
  form: WrappedFormUtils,
  loginUser: any,
  isRequestingAuth: boolean,
}

const FormField = ({
  field,
  getFieldDecorator,
  message,
  required,
  style,
  iconType,
  type,
  placeholder,
  onChange
}) => (
  <FormItem>
    {getFieldDecorator(field, {
      rules: [{ required, message }],
    })(
      <Input
        prefix={<Icon type={iconType} style={style} />}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    )}
  </FormItem>
)

export const LoginForm = (props) => {
  const username = useFormInput('');
  const password = useFormInput('');

  const { isRequestingAuth, form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser({
      email: username.value,
      password: password.value
    })
  }
  return (
    <Form onSubmit={handleSubmit} className="measure-wide flex-auto">
      <FormField
        field="userName"
        getFieldDecorator={getFieldDecorator}
        message="Please input your username!"
        required={true}
        style={{ color: 'rgba(0,0,0,.25)' }}
        iconType="user"
        type="text"
        placeholder="Username"
        onChange={username.onChange}
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
        onChange={password.onChange}
      />
      <Button type="primary" htmlType="submit" className="w-100" loading={isRequestingAuth}>
        Log in
      </Button>
    </Form>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}


const WrappedLoginForm = Form.create()<Props>(LoginForm);

const mapStateToProps = state => ({
  isRequestingAuth: state.auth.isRequestingAuth
});
const mapDispatchToProps = dispatch => ({
  loginUser: payload => dispatch(loginUser(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => (
  <div className="h-100 flex flex-row">
    <div className="w-100 bg-black-40">
    </div>
    <div className="w-100 flex items-center">
      <Content className="pa3 flex justify-center">
        <WrappedLoginForm {...props} />
      </Content>
    </div>
  </div>
));
