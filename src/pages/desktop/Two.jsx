import React, { useEffect } from "react"
import * as echarts from "echarts"
import style from "./desktop.module.scss"

export default function Two() {
  useEffect(() => {
    setTimeout(() => {
      init()
    })
  }, [])
  const init = () => {
    const myE = echarts.init(document.getElementById("two"))
    let option = {
      color: [
        "#37a2da",
        "#32c5e9",
        "#9fe6b8",
        "#ffdb5c",
        "#ff9f7f",
        "#fb7293",
        "#e7bcf3",
        "#8378ea",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "交易订单统计",
          type: "pie",
          radius: [40, 80],
          roseType: "area",
          labelLine: {
            length: 10,
            length2: 10,
          },
          data: [
            { value: 10, name: "集成部" },
            { value: 5, name: "旅游部" },
            { value: 15, name: "生产部" },
            { value: 25, name: "消防部" },
            { value: 20, name: "建设部" },
            { value: 35, name: "教育部" },
            { value: 30, name: "开发部" },
            { value: 40, name: "电子部" },
          ],
        },
      ],
    }

    myE.setOption(option)
    window.addEventListener("resize", () => {
      myE.resize()
    })
  }
  return <div id="two" className={style.one}></div>
}
