import { Platform } from 'react-native';
import styled from "styled-components/native"

export const Container = styled.View`
flex: 1;
background-color: #132742;

`;
export const Title = styled.Text`
margin-top: ${Platform.OS === "ios" ? 35 + "%" : 20 + "%"};
margin-left: 20px;
font-size: 36px;
font-weight: bold;
color: #FFF;
`;

export const ListLinks = styled.FlatList`

`;

export const WarningText = styled.Text`
font-size: 15px;
color: #FFF;
`;

export const ContainerEmpty = styled.View`
margin-top: 15%;
align-items: center;

`;