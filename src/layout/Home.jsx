import React, { useEffect, useState, memo } from "react"
import { useNavigate, Outlet, useLocation } from "react-router-dom"
import { v4 } from "uuid"
import style from "./Home.module.css"

import {
  DesktopOutlined,
  SettingFilled,
  CloseOutlined,
  BarChartOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
const { Content, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem("工作台", "/home/desktop", <DesktopOutlined />),
  getItem("系统管理", "sys", <SettingFilled />, [
    getItem("角色管理", "/home/sys/role"),
    getItem("岗位管理", "/home/sys/station"),
  ]),
  getItem("统计管理", "statisticsManagement", <BarChartOutlined />, [
    getItem("绩效考核", "/home/statisticsManagement/attendance"),
    getItem("任务完成率", "/home/statisticsManagement/complete"),
  ]),
]

const Home = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const [navList, setNavList] = useState([
    {
      path: "/home/desktop",
      name: "工作台",
      active: true,
      id: v4(),
      disable: true,
    },
  ])

  useEffect(() => {
    if (localStorage.getItem("navList")) {
      setNavList(JSON.parse(localStorage.getItem("navList")))
    }
    if (location.pathname == "/home") {
      setDefaultSelectedKeys("/home/desktop")
    } else {
      setDefaultSelectedKeys(location.pathname)
    }
  }, [])

  const onSelect = (key, domEvent) => {
    const list = [...navList].map((item) => {
      item.active = false
      return item
    })
    let index = null
    const isHave = list.some((item, i) => {
      if (item.path == key) {
        index = i
        return true
      }
      return false
    })
    if (key == "/home/desktop") {
      list[0].active = true
      setNavList([...list])
      localStorage.setItem("navList", JSON.stringify([...list]))
      navigate(key)
      setDefaultSelectedKeys("/home/desktop")
      return
    }
    if (isHave) {
      list[index].active = true
      setNavList([...list])
      localStorage.setItem("navList", JSON.stringify([...list]))
      navigate(key)
      setDefaultSelectedKeys(key)

      return
    }

    const obj = {
      path: key,
      name: domEvent.target.innerText,
      active: true,
      id: v4(),
    }
    setNavList([...list, obj])
    setDefaultSelectedKeys(key)
    navigate(key)
    localStorage.setItem("navList", JSON.stringify([...list, obj]))
  }

  const handleClick = (key, i) => {
    let list = [...navList]

    list = list.map((item, index) => {
      item.active = false
      return item
    })
    list[i].active = true
    setNavList(list)
    localStorage.setItem("navList", JSON.stringify(list))

    navigate(key)
  }

  const handleClose = (active, i) => {
    let list = [...navList]
    const navs = JSON.parse(localStorage.getItem("navList"))
    navs.splice(i, 1)
    localStorage.setItem("navList", JSON.stringify(navs))

    if (!active) {
      list.splice(i, 1)
      setNavList(list)
      return
    }
    list.map((item) => {
      item.active = false
      return item
    })

    if (list.length - 1 == i) {
      list.splice(i, 1)

      list[i - 1].active = true
      navigate(list[i - 1].path)
    } else {
      list.splice(i, 1)

      list[i].active = true
      navigate(list[i].path)
    }
    localStorage.setItem("navList", JSON.stringify(list))
    setNavList(list)
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={style.logo}>卷王</div>
        <Menu
          theme="dark"
          defaultOpenKeys={["sys"]}
          selectedKeys={[defaultSelectedKeys]}
          mode="inline"
          items={items}
          onSelect={({ key, domEvent }) => onSelect(key, domEvent)}
        />
      </Sider>
      <Layout className={style["site-layout"]}>
        <div className={style["layout-header-background"]}>
          <div className={style.tags}>
            <div className={style[`scroll-container`]}>
              <div className={style["scrollbar__wrap"]}>
                {navList.map((item, index) => {
                  return (
                    <span
                      key={item.id}
                      className={`${style["tag-item"]} ${
                        item.active == true ? style["active-tag"] : ""
                      }`}
                      onClick={() => handleClick(item.path, index)}
                    >
                      <span style={{ margin: "0 5px" }}>{item.name}</span>
                      <CloseOutlined
                        style={{
                          display: item.disable ? "none" : "inline-block",
                        }}
                        className={style["close-hover"]}
                        onClick={(e) => {
                          e.stopPropagation()
                          return handleClose(item.active, index)
                        }}
                      />
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <Content
          style={{
            margin: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default memo(Home)
