import React, { useState } from "react";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import "./Interest.css";
import icon_back from "./img/left-arrow.png";
import icon_info from "./img/icon_info.png";
import icon_favorites from "./img/icon_favorites.png";
import img_favorite from "./img/img_favorite.png";
import icon_search_white from "./img/icon_search_white.png";

function Interest() {
  return (
    <div className="Interest">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/home" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" hidden />
            </div>
          </a>
          <select className="Order_items">
            <option value="관심회원권">관심회원권</option>
            {/* <option value="회원권시세">회원권시세</option> */}
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
      <div className="Interest_contents">
        <table>
          <caption hidden>관심회원권</caption>
          <thead>
            <tr>
              <th>회원권명</th>
              <th>현재가</th>
              <th>전일대비</th>
              <th>등록량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="productName">88(팔팔)</th>
              <th className="price">21,000</th>
              <th className="info_compared up">
                37,450
                <br />
                <span className="percent">(823%)</span>
              </th>
              <th className="regi_quantity">
                <span>1,979</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 본 컨텐츠 : e */}

      {/* 관심회원권없음 empty : s  */}
      <div className="Interest_contents empty">
        <h2>등록된 관심회원권이 없습니다.</h2>
        <p>검색을 통해 관심회원권을 등록해보세요.</p>
        <form>
          <div className="input_unit input_search">
            <button className="search-btn"></button>
            <input type="text" placeholder="회원권 검색하기" />
          </div>
        </form>
      </div>
      {/* 관심회원권없음 empty : e */}
    </div>
  );
}
export default Interest;
