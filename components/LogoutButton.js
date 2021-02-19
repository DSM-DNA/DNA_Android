import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="333" height="55" viewBox="0 0 333 55">
    <g id="그룹_108" data-name="그룹 108" transform="translate(-84 -664)">
      <g id="사각형_193" data-name="사각형 193" transform="translate(84 664)" fill="#fff" stroke="#204051" stroke-width="4">
        <rect width="333" height="55" rx="27.5" stroke="none"/>
        <rect x="2" y="2" width="329" height="51" rx="25.5" fill="none"/>
      </g>
      <text id="로그아웃_하기_" data-name="로그아웃 하기!" transform="translate(178 679)" font-size="22" font-family="NanumGothic, Nanum Gothic"><tspan x="-69.784" y="20">로그아웃 하기!</tspan></text>
    </g>
    </svg>
`;

export default () => <SvgXml xml={xml} width="66.6%" height="4.5%"/>;