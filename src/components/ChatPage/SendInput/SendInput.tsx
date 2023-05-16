import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { addUIMessage, sendMessage } from '../../../store/mainSlice';

const SendInput: React.FC = () => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm()
    const currentNumber = useAppSelector(state => state.mainSlice.currentNumber)
    const idInstance = useAppSelector(state => state.mainSlice.auth.idInstance)
    const apiTokenInstance = useAppSelector(state => state.mainSlice.auth.apiTokenInstance)

    const onFinish = (values: any) => {
        dispatch(sendMessage({phoneNumber: currentNumber, message: values.message, idInstance, apiTokenInstance }))
        form.resetFields()
        dispatch(addUIMessage({phoneNumber: currentNumber, message: values.message}))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
            <Form
                name="basic"
                form={form}
                style={{ display: 'flex', alignItems: 'center', width: '100%' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                    style={{ width: '90%' }}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
    )
};

export default SendInput;