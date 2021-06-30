import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="330" height="356.228" viewBox="0 0 330 356.228">
        <g id="그룹_107" data-name="그룹 107" transform="translate(-223 483.566)">
          <g id="사각형_194" data-name="사각형 194" transform="translate(223 -483.566)" fill="#204051" stroke="#204051" stroke-width="9">
            <rect width="330" height="296.132" rx="40" stroke="none"/>
            <rect x="4.5" y="4.5" width="321" height="287.132" rx="35.5" fill="none"/>
          </g>
          <g id="그룹_102" data-name="그룹 102" transform="translate(328.939 -270.308)">
            <g id="그룹_10" data-name="그룹 10" transform="translate(34.682 47.645)">
              <ellipse id="타원_668" data-name="타원 668" cx="21.054" cy="4.737" rx="21.054" ry="4.737" transform="translate(3.879 85.851)" fill="#204051"/>
              <path id="패스_1027" data-name="패스 1027" d="M622.757,215.351c0,13.464-24.379,51.527-24.379,51.527S574,228.814,574,215.351a24.379,24.379,0,0,1,48.757,0Z" transform="translate(-574 -190.972)" fill="#204051"/>
              <circle id="타원_669" data-name="타원 669" cx="13.851" cy="13.851" r="13.851" transform="translate(10.527 10.527)" fill="#f2f2f2"/>
            </g>
          </g>
          <text id="피드백은_언제나_환영입니다._이_앱_디자이너_김해교님에게_수고했다고_해주세요_로그아웃_하시겠습니까_" data-name="피드백은 언제나 환영입니다.
        
        이 앱 디자이너 김해교님에게
        수고했다고 해주세요 ㅎㅎ
        
        로그아웃 하시겠습니까?
        " transform="translate(388 -398)" fill="#fff" font-size="20" font-family="NanumGothic, Nanum Gothic"><tspan x="-121.43" y="0">피드백은 언제나 환영입니다.</tspan><tspan x="0" y="23"></tspan><tspan x="-121.2" y="46">이 앱 디자이너 김해교님에게</tspan><tspan x="-109" y="69">수고했다고 해주세요 ㅎㅎ</tspan><tspan x="0" y="92"></tspan><tspan x="-102.25" y="115">로그아웃 하시겠습니까?</tspan><tspan font-family="NanumGothic"><tspan x="0" y="138"></tspan></tspan></text>
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