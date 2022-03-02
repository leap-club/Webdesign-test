import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Typography , Space } from 'antd'
import styles from './Login.module.css';
import Link from 'next/link'
import { UserOutlined, LockOutlined , EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import useForm , {useAppDispatch} from '../../app/hooks';
import { setCredentials } from './LoginSlice';


const { Text } = Typography

const LoginForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch();
    const validateEmail = (email: string) => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(email)
	}

    function LeapWebsite() {
        window.open(
            "https://leap.club", "_blank");
    }
	
    function EmailSupport() {
        window.open(
          "mailto:members@leap.club", "_blank");
    }

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

    const onFinish =  (values : any) => {
        const user = {
			email: values.email.toLowerCase().trim(),
			password: values.password.trim(),
		}
     
            
            console.log(user);
            dispatch(setCredentials(user))
	}

  return (
        <div className={styles.waitlistContainer}>
                            <Form
                                className='form'
                                name='basic'
                                layout='vertical'
                                
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                form={form}
                            >
                                <Form.Item
                                    className={styles.inputLabel}
                                    label='email'
                                            name='email'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'please enter your email',
                                                },
                                                () => ({
                                                    validator(_, value) {
                                                        if (!value) {
                                                            return Promise.reject()
                                                        }
                                                        if (!validateEmail(value.toLowerCase())) {
                                                            return Promise.reject('please enter a valid email')
                                                        }
                                                        return Promise.resolve()
                                                    },
                                                }),
                                            ]}>
                                        
                                    <Input  prefix={<UserOutlined className="site-form-item-icon" />} className={styles.input} placeholder=' gal@gadot.com' />
                                
                                </Form.Item>
                                <Form.Item
                                    className={styles.inputLabel}
                                    label="password"
                                    name="password"
                                    rules={[{ required: true, message: 'please input your password!' }]}
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} className={styles.input} placeholder=' enter your password'  />
                                </Form.Item>
                                <div className={styles.forgotPassWrapper}>
                                    <Link href="/forgotpassword" >
                                        <a className={styles.linkstyle}>forgot password ?</a>
                                    </Link>
                                 </div>
                                <Form.Item className={styles.buttonWrapper}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        id={styles.buttonPrimary}
                                        loading={loading}
                                    >
                                        login
                                    </Button>
                                </Form.Item>
                                
                            </Form>
                            <Text className={styles.linkstyle3}>
                                      not a member?<a onClick={LeapWebsite} target="_blank">join the waitlist </a>
                            </Text>
                           
                            <div className={styles.bottomTextWrapper}>
                                <Text className={styles.bottomText}>
                                    by logging in you agree to our 
                                    <Text onClick={LeapWebsite}  className={styles.linkstyle2}>
                                        <a  target="_blank" > community guidelines & terms of use</a>
                                    </Text>
                                    , you do do not agree, please write to us on  
                                    <Text onClick={EmailSupport}  className={styles.linkstyle2}>
                                        <a target="_blank"  > members@leap.club</a>
                                    </Text>
                                </Text>
                            </div>
                            {/* {isError && (
                                <div className={styles.errorWrapper}>
                                    <span
                                        className={`${commonStyles.textCenter} ${commonStyles.highlightedText}`}
                                    >
                                        something went wrong! please try again later.
                                    </span>
                                </div>
                            )} */}
                </div>
  )
}

export default LoginForm