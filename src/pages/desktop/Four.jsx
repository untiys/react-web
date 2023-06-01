import React, { memo, useEffect } from "react"
import * as echarts from "echarts"
import style from "./desktop.module.scss"

function Four() {
  useEffect(() => {
    setTimeout(() => {
      init()
    })
  }, [])

  const init = () => {
    const myE = echarts.init(document.getElementById("four"))
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        show: false,
      },
      grid: {
        top: "10%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["集成", "工艺", "文旅", "智慧", "消防", "数字", "医疗"],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "",
          type: "line",
          smooth: true,
          symbol: "none",
          color: "rgba(25,163,223,0.7)",
          areaStyle: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(25,163,223,.3)",
                },
                {
                  offset: 1,
                  color: "rgba(25,163,223, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(25,163,223, 0.5)", //阴影颜色
            shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ],
    }
    myE.setOption(option)
    window.addEventListener("resize", () => {
      myE.resize()
    })
  }
  return (
    <div id="four" className={style.one}>
      Four
    </div>
  )
}

export default memo(Four)
