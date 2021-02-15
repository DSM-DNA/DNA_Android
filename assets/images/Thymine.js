import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="243" height="165" viewBox="0 0 243 165">
      <defs>
        <filter id="사각형_162" x="0" y="0" width="243" height="165" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="4.5" result="blur"/>
          <feFlood flood-opacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <pattern id="pattern" width="1" height="1" viewBox="-0.741 -0.741 33.483 33.483">
          <image preserveAspectRatio="xMidYMid slice" width="32" height="32" xlink:href="data:image/png;base64,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"/>
        </pattern>
      </defs>
      <g id="그룹_131" data-name="그룹 131" transform="translate(-254.5 -520.5)">
        <g transform="matrix(1, 0, 0, 1, 254.5, 520.5)" filter="url(#사각형_162)">
          <rect id="사각형_162-2" data-name="사각형 162" width="216" height="138" rx="16" transform="translate(13.5 10.5)" fill="#cae8d5" opacity="0.49"/>
        </g>
        <g id="그룹_68" data-name="그룹 68" transform="translate(66 121)">
          <g id="그룹_66" data-name="그룹 66" transform="translate(210 418)">
            <circle id="타원_694" data-name="타원 694" cx="19" cy="19" r="19" fill="#fff"/>
          </g>
          <g id="타원_681" data-name="타원 681" transform="translate(213 421)" stroke="#3b6978" stroke-width="1" fill="url(#pattern)">
            <circle cx="16" cy="16" r="16" stroke="none"/>
            <circle cx="16" cy="16" r="15.5" fill="none"/>
          </g>
        </g>
        <text id="대리구매자_구하기" data-name="대리구매자 구하기" transform="translate(326 550)" fill="#204051" font-size="15" font-family="NanumGothicExtraBold, Nanum Gothic" opacity="0.85"><tspan x="0" y="14">대리구매자 구하기</tspan></text>
        <text id="나를_대신해_물건을_배송해줄_사람을_구합니다" data-name="나를 대신해, 물건을 배송해줄 
    사람을 구합니다" transform="translate(291 590)" fill="#204051" font-size="12" font-family="NanumGothic, Nanum Gothic"><tspan x="0" y="11">나를 대신해, 물건을 배송해줄 </tspan><tspan x="0" y="25">사람을 구합니다</tspan></text>
      </g>
    </svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;