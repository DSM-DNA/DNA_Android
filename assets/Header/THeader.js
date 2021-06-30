import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="129" viewBox="0 0 500 129">
  <defs>
    <clipPath id="clip-path">
      <rect id="사각형_205" data-name="사각형 205" width="500" height="129" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
    <pattern id="pattern" width="1" height="1" viewBox="-0.29 -0.725 25.571 25.571">
      <image preserveAspectRatio="xMidYMid slice" width="25.571" height="25.571" xlink:href="data:image/png;base64,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"/>
    </pattern>
  </defs>
  <g id="마스크_그룹_8" data-name="마스크 그룹 8" clip-path="url(#clip-path)">
    <g id="그룹_152" data-name="그룹 152">
      <rect id="사각형_203" data-name="사각형 203" width="514" height="107" rx="16" transform="translate(-7 -6)" fill="#204051" opacity="0.09"/>
      <rect id="사각형_204" data-name="사각형 204" width="509" height="100" rx="16" transform="translate(-5 -6)" fill="#3b6978"/>
      <g id="그룹_151" data-name="그룹 151" transform="translate(59 -49.189)">
        <path id="패스_1115" data-name="패스 1115" d="M619.269,213.607c0,12.5-22.635,47.841-22.635,47.841S574,226.107,574,213.606a22.635,22.635,0,0,1,45.269,0Z" transform="translate(-406 -83.02)" fill="#cae8d5"/>
        <g id="그룹_150" data-name="그룹 150" transform="translate(177.421 117.437)">
          <path id="패스_1116" data-name="패스 1116" d="M12.86,0A12.86,12.86,0,1,1,0,12.86,12.86,12.86,0,0,1,12.86,0Z" transform="translate(0.353 0.288)" fill="#f2f2f2"/>
          <circle id="타원_728" data-name="타원 728" cx="12.785" cy="12.785" r="12.785" fill="url(#pattern)"/>
        </g>
      </g>
      <text id="대리구매자_구하기" data-name="대리구매자 구하기" transform="translate(192 34)" fill="#fff" font-size="15" font-family="NanumGothic, Nanum Gothic" opacity="0.49"><tspan x="0" y="20">대리구매자 구하기</tspan></text>
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