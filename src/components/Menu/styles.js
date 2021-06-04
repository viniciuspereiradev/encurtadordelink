import styled from "styled-components/native"
import {Platform, StatusBar} from "react-native"

export const ButtonMenu = styled.TouchableOpacity`
    top: ${Platform.OS === "ios" ? StatusBar.currentHeight + 60+"px" : 10+"px"};
    left: 10px;
    position: absolute;
    justify-content: space-around;
`