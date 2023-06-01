import React, { memo, useState, useRef, useEffect } from "react"
import { Table, Tag, Space, Button, Form, Input, Select } from "antd"
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  SyncOutlined,
} from "@ant-design/icons"
import StationForm from "./stationForm"
import "./station.module.css"

const { Option } = Select

function Station() {
  const formRef = useRef()
  const [visible, setVisible] = useState(false)

  const [options, setOptions] = useState([
    {
      name: "全部",
      value: "",
    },
    {
      name: "正常",
      value: "1",
    },
    {
      name: "空缺",
      value: "2",
    },
    {
      name: "暂定",
      value: "3",
    },
  ])
  const columns = [
    {
      title: "岗位编号",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "岗位编码",
      dataIndex: "stationCode",
      align: "center",
    },
    {
      title: "岗位名称",
      dataIndex: "stationName",
      align: "center",
    },
    {
      title: "岗位排序",
      dataIndex: "sort",
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "status",
      align: "center",
      render: (status) => {
        const colors = {
          1: "blue",
          2: "red",
          3: "orange",
        }
        return (
          <Tag color={colors[status]}>
            {status == "1"
              ? "正常"
              : status == "2"
              ? "空缺"
              : status == "3"
              ? "暂定"
              : ""}
          </Tag>
        )
      },
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      align: "center",
    },
    {
      align: "center",
      title: "操作",
      render: (_, record) => (
        <Space size="mini">
          <Button size="small" type="link" icon={<EditOutlined />}>
            编辑
          </Button>
          <Button size="small" type="link" icon={<DeleteOutlined />}>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: "1",
      stationCode: "ceo",
      stationName: "董事长",
      sort: "1",
      status: "1", //1正常，2空缺，3暂定
      createTime: "2022-10-05 12:50:04",
    },
    {
      key: "2",
      stationCode: "se",
      stationName: "项目经理",
      sort: "2",
      status: "2", //1正常，2空缺，3暂定
      createTime: "2022-10-05 12:50:04",
    },
    {
      key: "3",
      stationCode: "hr",
      stationName: "人力资源",
      sort: "3",
      status: "3", //1正常，2空缺，3暂定
      createTime: "2022-10-05 12:50:04",
    },
    {
      key: "4",
      stationCode: "user",
      stationName: "普通员工",
      sort: "4",
      status: "1", //1正常，2空缺，3暂定
      createTime: "2022-10-05 12:50:04",
    },
  ]
  // 查询
  const onSearch = (e) => {
    console.log(e)
  }
  // 重置
  const onReset = () => {
    formRef.current.resetFields()
  }
  // 新增
  const add = () => {
    setVisible(true)
  }
  // 模态框的回调
  const onCallBack = (e) => {
    setVisible(e)
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      )
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  }
  useEffect(() => {
    // let table = document.querySelector(".ant-table-tbody")
    // table.innerHTML += table.innerHTML
    // // 盒子内容高度
    // let contentHeight = table.scrollHeight
    // // 容器可视区高度
    // const tableBodyHeight = table.clientHeight
    // let left = 0
    // console.log((table.style.top = -50 + "px"))
    // setInterval(() => {
    //   left -= 2
    //   if (Math.abs(left) == contentHeight / 2) {
    //     left = 0
    //   }
    //   table.style.top = left + "px"
    // }, 20)
  }, [])

  return (
    <div style={{ padding: "10px" }}>
      <Form
        ref={formRef}
        initialValues={{ status: "" }}
        layout="inline"
        onFinish={onSearch}
      >
        <Form.Item label="岗位编码：" name="stationCode">
          <Input placeholder="请输入岗位编码" />
        </Form.Item>
        <Form.Item label="岗位名称" name="stationName">
          <Input placeholder="请输入岗位名称" />
        </Form.Item>
        <Form.Item label="状态" name="status">
          <Select style={{ width: "200px" }} placeholder="岗位状态">
            {options.map((item, i) => {
              return (
                <Option value={item.value} key={i}>
                  {item.name}
                </Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
              查询
            </Button>
            <Button icon={<SyncOutlined />} onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Space style={{ marginTop: 15 }}>
        <Button type="primary" className="button-success" onClick={add}>
          新增
        </Button>
        <Button>删除</Button>
      </Space>
      <div style={{ marginTop: "15px" }}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
      <StationForm visible={visible} onCallBack={onCallBack} />
    </div>
  )
}

export default memo(Station)
