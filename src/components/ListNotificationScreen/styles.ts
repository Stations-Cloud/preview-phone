import styled from "styled-components";
import Arrow from "../../icons/Arrow";

export const Container = styled.div`
  position: relative;
  flex-direction: column;
  width: 250px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://node.clubecerto.com.br/superapp/images/assets/station/celphoneIcon.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ContainerInternal = styled.div`
  background-color: #8f0cf2;
  width: 220px;
  height: 480px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;
export const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  justify-content: space-between;
  background-color: #8f0cf2;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ArrowLeft = styled(Arrow)`
  margin-left: 14px;
  margin-top: 17px;
`;

export const BarText = styled.div`
  font-size: 15px;
  font-family: "Nexa Bold";
  margin-left: 10px;
  margin-top: 18px;
  width: 50%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2px;
  background-color: white;
  height: 90%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 2px;
  background-color: #eeeeee;
  margin-top: 20px;
  min-height: 60px;
  border-radius: 15px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  margin-left: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;

export const ContentCardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

export const TextCard = styled.p`
  margin: 0;
  font-family: "Nexa Regular";
  font-size: 12px;
  width: 100%;
  max-width: 100%;
  text-align: start;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;
export const LogoCard = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
