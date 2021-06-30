import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="183" viewBox="0 0 500 183">
      <defs>
        <clipPath id="clip-path">
          <rect id="사각형_211" data-name="사각형 211" width="500" height="183" fill="#fff"/>
        </clipPath>
        <pattern id="pattern" width="1" height="1" viewBox="1.976 1.976 26.048 26.048">
          <image preserveAspectRatio="xMidYMid slice" width="30" height="30" xlink:href="data:image/png;base64,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"/>
        </pattern>
      </defs>
      <g id="그룹_160" data-name="그룹 160" transform="translate(-6509 -7532)">
        <rect id="사각형_212" data-name="사각형 212" width="500" height="183" transform="translate(6509 7532)" fill="#fff"/>
        <g id="그룹_159" data-name="그룹 159" transform="translate(487 -32)">
          <g id="마스크_그룹_9" data-name="마스크 그룹 9" transform="translate(6022 7564)" clip-path="url(#clip-path)">
            <rect id="사각형_207" data-name="사각형 207" width="468" height="703" rx="22" transform="translate(16 130)" fill="#204051" opacity="0.09"/>
            <g id="그룹_158" data-name="그룹 158" transform="translate(56.71 -17.323)">
              <path id="패스_1117" data-name="패스 1117" d="M624.579,216.262c0,13.967-25.29,53.452-25.29,53.452S574,230.228,574,216.261a25.29,25.29,0,0,1,50.579,0Z" transform="translate(-406 -83.02)" fill="#3b6978"/>
              <g id="그룹_157" data-name="그룹 157" transform="translate(178.921 118.872)">
                <path id="패스_1118" data-name="패스 1118" d="M14.369,0A14.369,14.369,0,1,1,0,14.369,14.369,14.369,0,0,1,14.369,0Z" fill="#f2f2f2"/>
              </g>
            </g>
            <rect id="사각형_208" data-name="사각형 208" width="408" height="36" transform="translate(46 183)" fill="#fff"/>
            <rect id="사각형_209" data-name="사각형 209" width="408" height="46" transform="translate(46 242)" fill="#fff"/>
            <rect id="사각형_210" data-name="사각형 210" width="408" height="459" transform="translate(46 318)" fill="#fff"/>
            <path id="패스_1119" data-name="패스 1119" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" transform="translate(415 186)" fill="url(#pattern)"/>
            <text id="카테고리를_설정해_주세요" data-name="카테고리를 설정해 주세요" transform="translate(64 192)" font-size="16" font-family="NanumGothic, Nanum Gothic" opacity="0.29"><tspan x="0" y="15">카테고리를 설정해 주세요</tspan></text>
            <text id="제목을_입력해_주세요" data-name="제목을 입력해 주세요" transform="translate(64 256)" font-size="16" font-family="NanumGothic, Nanum Gothic" opacity="0.29"><tspan x="0" y="15">제목을 입력해 주세요</tspan></text>
          </g>
        </g>
      </g>
    </svg>
`;

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `NanumGothic-Regular` from a static resource
      NanumGothic: require('../fonts/NanumGothic-Regular.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if(fontsLoaded){
    return (
      <SvgXml xml={xml} width="100%" height="100%" />
    );
  } else {
    return null;
  }
};