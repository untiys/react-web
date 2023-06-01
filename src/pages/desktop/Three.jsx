import React, { memo, useEffect } from "react"
import * as echarts from "echarts"
import "echarts-wordcloud"
import style from "./desktop.module.scss"

function Three() {
  useEffect(() => {
    setTimeout(() => {
      init()
    })
  }, [])

  const init = () => {
    const myE = echarts.init(document.getElementById("three"))
    var getname = [
      "南海诸岛",
      "北京",
      "天津",
      "上海",
      "重庆",
      "河北",
      "河南",
      "云南",
      "辽宁",
      "黑龙江",
      "湖南",
      "安徽",
      "山东",
      "新疆",
      "江苏",
      "浙江",
      "江西",
      "湖北",
      "广西",
      "甘肃",
      "山西",
      "内蒙古",
      "陕西",
      "吉林",
      "福建",
      "贵州",
      "广东",
      "青海",
      "西藏",
      "四川",
      "宁夏",
      "海南",
      "台湾",
      "香港",
      "澳门",
    ]
    var getvalue = [
      0, 524, 13, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 4, 31, 104, 36,
      1052, 33, 347, 9, 157, 22, 4, 18, 5, 2398, 41, 0, 484, 404, 22, 3, 5, 225,
    ]
    var data = []
    for (let i = 0; i < getname.length; ++i) {
      data.push({
        name: getname[i],
        value: getvalue[i],
      })
    }

    var option = {
      tooltip: {
        trigger: "item",
        padding: [10, 15],
        formatter: function (params) {
          return params.name + "<br/>订单完成数: " + params.value + "单"
        },
      },
      series: [
        {
          type: "wordCloud",
          gridSize: 25,
          sizeRange: [14, 24],
          rotationRange: [0, 0],
          width: "100%",
          height: "90%",
          textStyle: {
            color: () => {
              return `rgb(${[
                Math.round(Math.random() * 200 + 55),
                Math.round(Math.random() * 200 + 55),
                Math.round(Math.random() * 200 + 55),
              ].join(",")})`
            },
          },
          data: data,
        },
      ],
    }
    myE.setOption(option)
    window.addEventListener("resize", () => {
      myE.resize()
    })
  }

  return <div id="three" className={style.one}></div>
}

export default memo(Three)
