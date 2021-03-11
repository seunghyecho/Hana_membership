import React, { useState } from "react";
import "./Market.css";
import icon_back from "./img/left-arrow.png";
import icon_info from "./img/icon_info.png";
import icon_favorites from "./img/icon_favorites.png";
import img_favorite from "./img/img_favorite.png";
import icon_search_white from "./img/icon_search_white.png";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import memberships from "./mock/membership_price.json";

function Market() {
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);
  const openModal = (e) => {
    //react 에서 선택된 해당 Dom만 target으로 잡는 방법
    console.log(e.currentTarget.dataset.index);
    const ms_index = e.currentTarget.dataset.index;

    //가상의 데이터에 구분되는 식별 ID 가 없어서 중복되지 않는 PRICE 값으로 선택된 회원권 값을 가져오도록 처리
    const ms_price = e.currentTarget.dataset.price;
    // console.log(memberships.filter(ms => ms.Current_price == ms_price));
    const selected_ms = memberships.filter(ms => ms.Current_price == ms_price);
    setModalData(selected_ms[0]);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className="Market">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/home" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/home" hidden />
            </div>
          </a>
          <select className="Order_items">
            <option value="회원권시세">회원권시세</option>
          </select>
          {/* <a href="/notice" className="header_icon_item icon_alarm_white">
            <div className="icon_img">
              <img src={icon_alarm_white} />
            </div>
          </a> */}
          <a href="/search" className="header_icon_item icon_alarm_white">
            <div className="icon_img">
              <img src={icon_search_white} />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}

      {/* 본 컨텐츠 : s */}
      <div className="Market_contents">
        <table>
          <caption hidden>회원권시세</caption>
          <thead>
            <tr>
              <th>회원권명</th>
              <th>현재가</th>
              <th>전일대비</th>
              <th>등록량</th>
            </tr>
          </thead>
          <tbody>
            {
              memberships.map(
                  (ms, index) => (
                    <tr onClick={openModal} data-index={index} data-price={ms.Current_price}>
                      <th className="productName">{ms.Membership_name}</th>
                      <th className="price">{ms.Current_price}</th>
                      <th className={ index % 3 == 0 ? 'info_compared up' : 'info_compared down'}>
                        {ms.Base_price}
                        <br />
                        <span className="percent">({ Math.round(Math.random() * 20) }%)</span>
                      </th>
                      <th className="regi_quantity">
                        <span>{ms.Total_transactions}</span>
                      </th>
                    </tr>
                  )
                )
              }

            {/* <tr onClick={openModal}>
              <th className="productName">88(팔팔)</th>
              <th className="price">21,000</th>
              <th className="info_compared equal">
                37,450
                <br />
                <span className="percent">(823%)</span>
              </th>
              <th className="regi_quantity">
                <span>1,979</span>
              </th>
            </tr>
            <tr onClick={openModal}>
              <th className="productName">88(팔팔)</th>
              <th className="price">21,000</th>
              <th className="info_compared down">
                37,450
                <br />
                <span className="percent">(823%)</span>
              </th>
              <th className="regi_quantity">
                <span>1,979</span>
              </th>
            </tr> */}
          </tbody>
        </table>
      </div>
      {/* 본 컨텐츠 : e */}

      {/* 회원권시세없음 empty : s 
      <div className="Market_contents empty">
        <h2>등록된 회원권시세가 없습니다.</h2>
        <p>검색을 통해 회원권시세를 등록해보세요.</p>
        <form>
          <div className="input_unit input_search">
            <button className="search-btn"></button>
            <input type="text" placeholder="회원권 검색하기" />
          </div>
        </form>
      </div>
      */}
      {/* 회원권시세없음 empty : e */}

       {/* 관심회원권터치 : s ( 현재 modal_wrapper -> display:none; )*/}
       <div id="modal" className={modalState ? "on" : ""} onClick={closeModal}>
        <div className="Interest_contents modal_wrapper">
          <div className="modal">
            {/* <div className="modal_favorite">
              <img src={img_favorite} alt="등록" />
            </div> */}
            <div className="modal_tit">
              <span className="product">{modalData.Membership_name}</span>
              <div className="modal_icon">
                <img src={icon_info} alt="info" />
                <img src={icon_favorites} alt="favorites" />
              </div>
            </div>
            <div className="modal_content">
              <table>
                <tr>
                  <th>기준가(만원)</th>
                  <th className="standard_price">{modalData.Current_price}</th>
                </tr>
                <tr>
                  <th>고가(만원)</th>
                  <th className="high_price">{modalData.High_price}</th>
                </tr>
                <tr>
                  <th>저가(만원)</th>
                  <th className="low_price">{modalData.Low_price}</th>
                </tr>
                <tr>
                  <th>총 거래량</th>
                  <th className="total_quantity">{modalData.Total_transactions}</th>
                </tr>
              </table>
              <div className="btn_wrapper Btn">
                {/* 호가,차트,매수 */}
                <button className="w72 bgGf5" type="button">
                  호가
                </button>
                <button className="w72 bgGf5" type="button">
                  차트
                </button>
                <button className="w168 bgN" type="button">
                  매수
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 관심회원권터치 : e */}

    </div>
  );
}
export default Market;
