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

export const TermsText = styled.div`
  font-size: 18px;
  font-family: "Nexa Bold";
  margin-left: 10px;
  margin-top: 18px;
  width: 80%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2px;
  background-color: white;
  height: 90%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

export const Logo = styled.img<{
  bannerType?: "vertical" | "horizontal" | "small";
}>`
  align-self: center;
  border-radius: 14px;

  width: ${({ bannerType }) =>
    bannerType === "horizontal"
      ? "90%"
      : bannerType === "vertical"
      ? "120px"
      : "100px"};

  height: ${({ bannerType }) =>
    bannerType === "vertical"
      ? "170px"
      : bannerType === "horizontal"
      ? "100px"
      : "100px"};
`;
export const PageTitle = styled.h1`
  font-size: 14px;
  font-family: "Nexa Regular";
  justify-content: flex-start;
  display: flex;
  font-weight: 400;
  margin-top: 10px;
  width: 95%;
`;

export const ColumContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

export const CodeContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  gap: 20px;
  height: 30px;
  width: 80%;
  align-items: center;
  border-radius: 30px;
  justify-content: space-evenly;
`;

export const CodeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding-top: 3px;
  align-self: center;
  font-family: "Nexa Regular";
  letter-spacing: 1px;
`;

export const NotificationDescription = styled.p`
  font-size: 10px;
  font-family: "Nexa Regular";
  justify-content: flex-start;
  display: flex;
  text-align: start;
  color: #666;
  margin-top: 5px;
  width: 95%;
`;

export const ButtonLink = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
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
  justify-content: flex-start;
  text-align: start;
  font-size: 9px;
  margin-left: 5px;
  color: #777;
  margin-top: 20px;
  font-family: "Nexa Regular";
  width: 95%;
`;
