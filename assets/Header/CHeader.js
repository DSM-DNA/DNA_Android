import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="129" viewBox="0 0 500 129">
  <defs>
    <clipPath id="clip-path">
      <rect id="사각형_199" data-name="사각형 199" width="500" height="129" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
    <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 512 512">
      <image width="512" height="512" xlink:href="data:image/png;base64,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"/>
    </pattern>
  </defs>
  <g id="마스크_그룹_6" data-name="마스크 그룹 6" clip-path="url(#clip-path)">
    <g id="그룹_147" data-name="그룹 147">
      <rect id="사각형_197" data-name="사각형 197" width="514" height="106" rx="16" transform="translate(-7 -5)" fill="#204051" opacity="0.09"/>
      <rect id="사각형_198" data-name="사각형 198" width="509" height="99" rx="16" transform="translate(-5 -5)" fill="#3b6978"/>
      <g id="그룹_146" data-name="그룹 146" transform="translate(59 -49.189)">
        <path id="패스_1109" data-name="패스 1109" d="M619.269,213.607c0,12.5-22.635,47.841-22.635,47.841S574,226.107,574,213.606a22.635,22.635,0,0,1,45.269,0Z" transform="translate(-406 -83.02)" fill="#cae8d5"/>
        <g id="그룹_145" data-name="그룹 145" transform="translate(177.421 117.437)">
          <path id="패스_1110" data-name="패스 1110" d="M12.86,0A12.86,12.86,0,1,1,0,12.86,12.86,12.86,0,0,1,12.86,0Z" transform="translate(0.353 0.288)" fill="#f2f2f2"/>
          <g id="그룹_144" data-name="그룹 144" transform="translate(-171.473 -111.514)">
            <path id="패스_1111" data-name="패스 1111" d="M9.556,0A9.556,9.556,0,1,1,0,9.556,9.556,9.556,0,0,1,9.556,0Z" transform="translate(175.262 115.214)" fill="#f2f2f2"/>
            <circle id="타원_726" data-name="타원 726" cx="9.5" cy="9.5" r="9.5" transform="translate(175 115)" fill="url(#pattern)"/>
          </g>
        </g>
      </g>
      <text id="일반_대화_하기" data-name="일반 대화 하기" transform="translate(204 34)" fill="#fff" font-size="15" font-family="NanumGothic, Nanum Gothic" opacity="0.49"><tspan x="0" y="20">일반 대화 하기</tspan></text>
    </g>
  </g>
  </svg>
`;

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `NanumGothic-Regular` from a static resource
      'NanumGothic': require('../fonts/NanumGothic-Regular.ttf'),
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