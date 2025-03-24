import styled from "styled-components";

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
export const TopBar = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  margin-bottom: 30px;
  justify-content: center;
  background-color: #8f0cf2;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const ArrowLeft = styled.img`
  width: 16px;
  height: 12px;
  margin-left: 10px;
  margin-top: 18px;
`;

export const BarText = styled.div`
  font-size: 15px;
  font-family: "Nexa Bold";
  margin-left: 10px;
  margin-top: 18px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export const Logo = styled.img`
  align-self: center;
  height: 70px;
  width: 70px;
`;

export const PageTitle = styled.h1`
  font-size: 14px;
  font-family: "Nexa Regular";
  justify-content: center;
  display: flex;
  font-weight: 400;
  margin-top: 10px;
  width: 95%;
`;

export const CodeContainer = styled.div`
  display: flex;
  border: 1px dashed #8f0cf2;
  height: 30px;
  width: 80%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CodeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-family: "Nexa Regular";
  letter-spacing: 1px;
`;

export const NotificationDescription = styled.p`
  font-size: 10px;
  font-family: "Nexa Regular";
  justify-content: center;
  display: flex;
  text-align: center;
  color: #666;
  margin-top: 5px;
  width: 95%;
`;

export const ButtonLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8f0cf2;
  color: #fff;
  margin-top: 10px;
  font-size: 13px;
  font-family: "Nexa Regular";
  border: none;
  border-radius: 30px;
  height: 30px;
  width: 170px;
`;

export const LineFinal = styled.div`
  height: 1px;
  background-color: #8f0cf2;
  margin-top: 20px;
  width: 100%;
`;

export const DiscountRules = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 9px;
  color: #777;
  margin-top: 20px;
  font-family: "Nexa Regular";
  width: 95%;
`;
