import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../../store/store';
import { login } from '../../store/mainSlice';
import style from './AuthForm.module.css';

const AuthForm: React.FC = () => {

  const dispatch = useAppDispatch();
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    dispatch(login(values))
    form.resetFields()
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <h2 className={style.title}>Авторизация</h2>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: '0 auto', marginTop: 80, border: '1px solid #00000075', padding: 30, borderRadius: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="idInstance"
          name="idInstance"
          rules={[{ required: true, message: 'Please input your idInstance!' }]}
        >
          <Input type='password'/>
        </Form.Item>

        <Form.Item
          label="apiTokenInstance"
          name="apiTokenInstance"
          rules={[{ required: true, message: 'Please input your apiTokenInstance!' }]}
        >
          <Input type='password'/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
  ;

export default AuthForm;