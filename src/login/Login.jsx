import React, { useRef, memo } from "react"
import { useNavigate } from "react-router-dom"
import style from "./Login.module.css"
import { Button, Checkbox, Form, Input, Space } from "antd"
function Login() {
  const navigate = useNavigate()
  const formRef = useRef()
  // 校验成功执行
  const onFinish = (e) => {
    console.log(e, "成功")
    // 重置表单
    // formRef.current.resetFields()
    navigate("/home", {
      replace: true,
    })
  }
  // 校验失败执行
  const onFinishFailed = (e) => {
    console.log(e, "失败")
  }
  return (
    <>
      <div className={style.page}>
        <div className={style["login-box"]}>
          <Form
            ref={formRef}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: "请输入账号" }]}
            >
              <Input placeholder="请输入账号" />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7 }}>
              <Space size={20}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}
export default memo(Login)
