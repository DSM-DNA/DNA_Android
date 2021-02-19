import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="380" height="406.326" viewBox="0 0 380 406.326">
      <g id="그룹_101" data-name="그룹 101" transform="translate(-60 -254)">
        <g id="사각형_192" data-name="사각형 192" transform="translate(60 254)" fill="#204051" stroke="#204051" stroke-width="9">
          <rect width="380" height="341" rx="40" stroke="none"/>
          <rect x="4.5" y="4.5" width="371" height="332" rx="35.5" fill="none"/>
        </g>
        <text id="피드백은_언제나_환영입니다_버그_혹은_불편사항이_있으시다면_언제든지_말해주세요_또한_이_앱의_디자인에_모든걸_갈아넣으신_김해교_님에게_수고했다고_해주세요_로그아웃_하시겠습니까_" data-name="피드백은 언제나 환영입니다!

    버그 혹은 불편사항이 있으시다면 
    언제든지 말해주세요!

    또한 이 앱의 디자인에 모든걸
    갈아넣으신 김해교 님에게
    수고했다고 해주세요 ㅎㅎ

    로그아웃 하시겠습니까?" transform="translate(81 289)" fill="#fff" font-size="20" font-family="NanumGothic, Nanum Gothic"><tspan x="-122.64" y="18">피드백은 언제나 환영입니다!</tspan><tspan x="0" y="41"></tspan><tspan x="-140" y="64">버그 혹은 불편사항이 있으시다면 </tspan><tspan x="-91.64" y="87">언제든지 말해주세요!</tspan><tspan x="0" y="110"></tspan><tspan x="-124" y="133">또한 이 앱의 디자인에 모든걸</tspan><tspan x="-109" y="156">갈아넣으신 김해교 님에게</tspan><tspan x="-109" y="179">수고했다고 해주세요 ㅎㅎ</tspan><tspan x="0" y="202"></tspan><tspan x="-102.25" y="225">로그아웃 하시겠습니까?</tspan></text>
        <g id="그룹_13" data-name="그룹 13" transform="translate(191.318 517.355)">
          <g id="그룹_10" data-name="그룹 10" transform="translate(34.682 47.645)">
            <ellipse id="타원_668" data-name="타원 668" cx="21.054" cy="4.737" rx="21.054" ry="4.737" transform="translate(3.879 85.851)" fill="#204051"/>
            <path id="패스_1027" data-name="패스 1027" d="M622.757,215.351c0,13.464-24.379,51.527-24.379,51.527S574,228.814,574,215.351a24.379,24.379,0,0,1,48.757,0Z" transform="translate(-574 -190.972)" fill="#204051"/>
            <circle id="타원_669" data-name="타원 669" cx="13.851" cy="13.851" r="13.851" transform="translate(10.527 10.527)" fill="#f2f2f2"/>
          </g>
        </g>
      </g>
    </svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;