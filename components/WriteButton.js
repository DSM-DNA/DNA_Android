import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="52" viewBox="0 0 296 52">
      <g id="그룹_177" data-name="그룹 177" transform="translate(-102 -871)">
        <g id="그룹_93" data-name="그룹 93" transform="translate(-32)">
          <rect id="사각형_168" data-name="사각형 168" width="296" height="47" rx="16" transform="translate(134 876)" fill="#204051" opacity="0.09"/>
          <rect id="사각형_142" data-name="사각형 142" width="296" height="47" rx="16" transform="translate(134 871)" fill="#3b6978"/>
        </g>
        <text id="등록" transform="translate(226 883)" fill="#fff" font-size="25" font-family="NanumGothic, Nanum Gothic"><tspan x="0" y="23">등록</tspan></text>
      </g>
    </svg>
`;

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `NanumGothic-Regular` from a static resource
      NanumGothic: require('../assets/fonts/NanumGothic-Regular.ttf'),
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
