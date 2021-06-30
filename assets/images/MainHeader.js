import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="308.758" height="95.326" viewBox="0 0 308.758 95.326">
      <g id="그룹_126" data-name="그룹 126" transform="translate(-39.242 -54)">
        <text id="DNA" transform="translate(106 54)" fill="#204051" font-size="45" font-family="NanumGothicBold, Nanum Gothic"><tspan x="0" y="41">DNA</tspan></text>
        <g id="그룹_13" data-name="그룹 13" transform="translate(4.561 6.356)">
          <g id="그룹_10" data-name="그룹 10" transform="translate(34.682 47.645)">
            <ellipse id="타원_668" data-name="타원 668" cx="21.054" cy="4.737" rx="21.054" ry="4.737" transform="translate(3.879 85.851)" fill="#204051"/>
            <path id="패스_1027" data-name="패스 1027" d="M622.757,215.351c0,13.464-24.379,51.527-24.379,51.527S574,228.814,574,215.351a24.379,24.379,0,0,1,48.757,0Z" transform="translate(-574 -190.972)" fill="#204051"/>
            <circle id="타원_669" data-name="타원 669" cx="13.851" cy="13.851" r="13.851" transform="translate(10.527 10.527)" fill="#f2f2f2"/>
          </g>
        </g>
        <text id="Dsm_sns_Application" data-name="Dsm sns Application" transform="translate(106 126)" fill="#204051" font-size="20" font-family="NanumGothic, Nanum Gothic" opacity="0.4"><tspan x="0" y="18">Dsm sns Application</tspan></text>
      </g>
    </svg>
`;

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `NanumGothic-Regular` from a static resource
      'NanumGothic': require('../fonts/NanumGothic-Regular.ttf'),
      'NanumGothicBold': require('../fonts/NanumGothic-Bold.ttf'),
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