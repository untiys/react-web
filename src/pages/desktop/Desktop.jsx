import React, { memo } from "react"
import style from "./desktop.module.scss"
import One from "./One"
import Two from "./Two"
import Three from "./Three"
import Four from "./Four"
// 工作台
function Desktop() {
  return (
    <div className={style.page}>
      <div className={style.left}>
        <div className={style["left-top"]}>
          <div className={style["left-top-item"]}>
            <div className={style.title}>业务增值率</div>
            <One />
          </div>

          <div className={style["left-top-item"]}>
            <div className={style.title}>订单交易数</div>
            <Two />
          </div>
          <div className={style["left-top-item"]}>
            <div className={style.title}>订单完成数</div>
            <Three />
          </div>
        </div>
        <div className={style["left-bottom"]}>
          <div className={style["left-bottom-left"]}>
            <div className={style["bottom-top"]}>
              <div className={style.title}>各部门当月交易数</div>
              <Four />
            </div>
            <div className={style["bottom-bottom"]}>
              <div className={style["bottom-right-left"]}></div>
              <div className={style["bottom-right-right"]}></div>
            </div>
          </div>
          <div className={style["left-bottom-right"]}></div>
        </div>
      </div>
      <div className={style.right}>22</div>
    </div>
  )
}

export default memo(Desktop)
