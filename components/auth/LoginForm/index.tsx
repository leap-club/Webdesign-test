import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Typography, Space, Button as LoginButton, Form, Input} from "antd";
import styles from "./Login.module.css";
import { loginSchema } from "../../../schema";
import Link from "next/link";
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import useForm, { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCredentials } from "./LoginSlice";
import Router, { useRouter } from "next/router";
import ButtonLight from "../../common/Button/ButtonLight";


const { Text } = Typography;

const LoginForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const userdata = useAppSelector((state) => state.loginSlice);

  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  function TermsOfUSe() {
    window.open("https://leap.club/terms_of_use", "_blank");
  }

  function Policy() {
    window.open("https://leap.club/privacy_policy", "_blank");
  }

  function LeapWebsite() {
    window.open("https://leap.club", "_blank");
  }

  function EmailSupport() {
    window.open("mailto:members@leap.club", "_blank");
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  function isAuth() {
    if (
      userdata.email == "team@leap.club" &&
      userdata.password == "team@leap"
    ) {
      return true;
    } else {
      return false;
    }
  }
  const onFinish = (values: any) => {
    const user = {
      email: values.email.toLowerCase().trim(),
      password: values.password.trim(),
    };
    dispatch(setCredentials(user));
    if (isAuth()) {
      router.push("/feed");
    } else {
    }
  };

  const handleLogin = (values: any) => {
    const user = {
      email: values.email.toLowerCase().trim(),
      password: values.password.trim(),
    };
    dispatch(setCredentials(user));
    if (isAuth()) {
      router.push("/feed");
    } else {
    }
  };

  return (
    <div className={styles.LoginContainer}>
      <Form
        className="form"
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          className={styles.InputLabel}
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "please enter your email",
            },
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject();
                }
                if (!validateEmail(value.toLowerCase())) {
                  return Promise.reject("please enter a valid email");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            className={styles.Input}
            placeholder=" gal@gadot.com"
          />
        </Form.Item>
        <Form.Item
          className={styles.InputLabel}
          label="password"
          name="password"
          rules={[{ required: true, message: "please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            className={styles.Input}
            placeholder=" enter your password"
          />
        </Form.Item>
        <div className={styles.Forgot}>
          <Link href="/forgotpassword">
            <a className={styles.ForgotLink}>forgot password ?</a>
          </Link>
        </div>
        <Form.Item className={styles.ButtonWrapper}>
          <LoginButton
            type="primary"
            htmlType="submit"
            id={styles.Button}
            loading={loading}
          >
            login
          </LoginButton>
        </Form.Item>
      </Form>

      <Text className={styles.JoinLink}>
        not a member?
        <a onClick={LeapWebsite} target="_blank">
          join the waitlist{" "}
        </a>
      </Text>

      <div className={styles.BottomTextWrapper}>
        <Text className={styles.BottomText}>
          by logging in you agree to our{" "}
          <Text onClick={Policy} className={styles.BottomLink}>
            <a target="_blank">community guidelines</a>
          </Text>
          {" & "}
          <Text onClick={TermsOfUSe} className={styles.BottomLink}>
            <a target="_blank">terms of use</a>
          </Text>
          , if you do do not agree, please write to us on{" "}
          <Text onClick={EmailSupport} className={styles.BottomLink}>
            <a target="_blank">members@leap.club</a>
          </Text>
        </Text>
      </div>
    </div>
  );
};

export default LoginForm;
