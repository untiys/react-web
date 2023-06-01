import React, { memo, useState } from "react"
import { Modal, Form, Input } from "antd"
// 新增修改的表单
function StationForm(props) {
  const [form] = Form.useForm()
  const [confirmLoading, setConfirmLoading] = useState(false)
  const handleOk = async () => {
    // 注册form表单域，可以获得表单数据
    ;(function () {
      form.validateFields().then((values) => {
        console.log(values)
        setConfirmLoading(true)
        // 验证通过，请求接口
        setTimeout(() => {
          setConfirmLoading(false)
          form.resetFields()
          props.onCallBack(false)
        }, 1000)
      })
    })()
  }
  const handleCancel = () => {
    form.resetFields()
    // 通过事件子传父
    props.onCallBack(false)
  }

  return (
    <Modal
      title="新增"
      visible={props.visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      layout={"inline"}
      style={{ maxWidth: 600 }}
    >
      <Form form={form}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

StationForm.propTypes = {
  visible: Function,
  onCallBack: Function,
}
export default memo(StationForm)
