import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 500px;
  background-image: url("https://node.clubecerto.com.br/superapp/images/assets/station/notificationScreen.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 171px;
`;

export const TitleContainer = styled.div`
  margin-left: 37px;
`;

export const TitleNotification = styled.h1`
  font-size: 8px;
  font-family: "Nexa Bold";
  text-align: left;
`;

export const DescriptionContainer = styled.div`
  margin-left: 38px;
  margin-top: -13px;
  width: 180px;
`;

export const DescriptionNotification = styled.p`
  font-size: 7px;
  font-family: "Nexa Regular";
  color: #555;
  text-align: left;
  margin-top: 10px;
`;
