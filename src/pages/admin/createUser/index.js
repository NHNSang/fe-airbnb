import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, DatePicker, Form, Input, Select, message } from 'antd';
import { userAuth } from '../../../service/userService';
// const onFinish = (values) => {
//     console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };
const CreateUser = () => {

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        let newUser = {
            name: values?.name,
            email: values?.email,
            password: values?.password
        }
        console.log(newUser)
        userAuth.createNewUser().then((res) => {
            message.success("Successful Registration!");
            let inforUser = {
                email: values?.email,
                passWord: values?.passWord,
            };
            let onSuccess = () => {
                navigate("/admin/user-manager");
            };
            console.log(res)
            form.resetFields();

        }).catch((err) => {
            console.log(err);
            message.error("Register failed");
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h1 className='text-2xl font-medium'>Create User</h1>
                <button className='border border-black p-2 rounded-lg text-base'>
                    <Link to={"/admin/user-manager"}>Back</Link>
                </button>
            </div>
            <Form
                form={form}

                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Gender"
                    name="gender">
                    <Select>
                        <Select.Option value="true">Male</Select.Option>
                        <Select.Option value="false">Female</Select.Option>
                    </Select>
                </Form.Item>



                <Form.Item
                    label="Birthday"
                    name="birthday">
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Role"
                    name="role">
                    <Select>
                        <Select.Option value="ADMIN">ADMIN</Select.Option>
                        <Select.Option value="USER">USER</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="danger" htmlType="reset">
                        Clear
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateUser
