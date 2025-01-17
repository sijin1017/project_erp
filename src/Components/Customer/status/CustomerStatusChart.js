// 작성자: 박승희
// 고객현황 데이터 시각화 메인 페이지

import * as React from 'react'
import "../../Main/Main.css"
import Rank from './RankChart.js'
import Dist from "./DistChart.js"
import Goal from './GoalChart.js'
import TopProd from './TopProdChart.js'
import "../Customer.css"

const CustomerMain = () => {
  return (
    <div className='CustomerMain'>
      <div className="content" style={{ display: "flex", paddingTop: "15px" ,paddingBottom: "15px"}}>
        <section id="sec">
          <div className="row first">
            {/*고객수목표 달성도*/}
            <div className="col-xl-3 col-lg-12 goal" style={{ marginTop: "10px" }}>{/*칸이 작아지면 수직정렬*/}
              <Goal />
            </div>
            {/*고객분포도*/}
            <div className="col-xl-9 col-lg-12 dist" style={{ marginTop: "10px" }}>
              <Dist />
            </div>
          </div>
          {/*상품별 선호도 내용*/}
          <div className="row second" id="section1" style={{ marginTop: "20px" }}>
            <TopProd />
          </div>
          {/*고객구매실적*/}
          <div className="row third rank" style={{ marginTop: "20px", paddingBottom: "15px"}}>
            <Rank />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CustomerMain;