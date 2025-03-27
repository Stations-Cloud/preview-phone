import { jsx, jsxs } from 'react/jsx-runtime';
import styled from 'styled-components';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@font-face {\r\n    font-family: \"Nexa Black\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/nexaBlack.otf\")\r\n  }\r\n  @font-face {\r\n    font-family: \"Nexa Bold\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/NexaBold.otf\");\r\n  }\r\n  @font-face {\r\n    font-family: \"Nexa Book\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/NexaBook.otf\");\r\n  }\r\n  @font-face {\r\n    font-family: \"Nexa ExtraBold\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/nexabold.otf\");\r\n  }\r\n  @font-face {\r\n    font-family: \"Nexa ExtraLight\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/nexalight.otf\");\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Nexa Regular\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/NexaRegular.otf\");\r\n  }\r\n  .font-regular {\r\n    font-family: \"Nexa Regular\";\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Nexa Light\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/NexaLight.otf\");\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Nexa Heavy\";\r\n    src: url(\"https://node.clubecerto.com.br/superapp/images/assets/fonts/NexaHeavy.otf\");\r\n  }\r\n  ";
styleInject(css_248z);

const Container$2 = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 500px;
  background-image: url("https://node.clubecerto.com.br/superapp/images/assets/station/notificationScreen.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;
const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 171px;
`;
const TitleContainer = styled.div `
  margin-left: 37px;
`;
const TitleNotification = styled.h1 `
  font-size: 8px;
  font-family: "Nexa Bold";
  text-align: left;
`;
const DescriptionContainer = styled.div `
  margin-left: 38px;
  margin-top: -13px;
  width: 180px;
`;
const DescriptionNotification = styled.p `
  font-size: 7px;
  font-family: "Nexa Regular";
  color: #555;
  text-align: left;
  margin-top: 10px;
`;

const ExternalNotificationScreen = ({ title, description, }) => {
    return (jsx(Container$2, { children: jsxs(MainContainer, { children: [jsx(TitleContainer, { children: jsx(TitleNotification, { children: title }) }), jsx(DescriptionContainer, { children: jsx(DescriptionNotification, { children: description }) })] }) }));
};

const ArrowRight = (props) => (jsx("svg", Object.assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: 15, height: 12, fill: "none", children: jsx("path", { stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M1 6h13m0 0-5-5m5 5-5 5" }) })));

const Share = (props) => (jsx("svg", Object.assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", children: jsx("path", { stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 5V1m0 0h-4m4 0-7 7M6 1H4.8c-1.26 0-2.04 0-2.51.25a2 2 0 0 0-.92.92C1 2.76 1 3.48 1 4.8v6.4c0 1.26 0 2.04.25 2.51a2 2 0 0 0 .92.92C2.76 15 3.48 15 4.8 15h6.4c1.26 0 2.04 0 2.51-.25a2 2 0 0 0 .92-.92C15 13.24 15 12.52 15 11.2V9" }) })));

const Arrow = (props) => (jsx("svg", Object.assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: 8, height: 14, fill: "none", children: jsx("path", { stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 13 1 7l6-6" }) })));

const Container$1 = styled.div `
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
const ContainerInternal$1 = styled.div `
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
const TopBar$1 = styled.div `
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
const ArrowLeft$1 = styled(Arrow) `
  margin-left: 14px;
  margin-top: 17px;
`;
const BarText$1 = styled.div `
  font-size: 15px;
  font-family: "Nexa Bold";
  margin-left: 10px;
  margin-top: 18px;
  width: 50%;
`;
const ContentContainer$1 = styled.div `
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
const Logo = styled.img `
  align-self: center;
  border-radius: 14px;

  width: ${({ bannerType }) => bannerType === "horizontal"
    ? "90%"
    : bannerType === "vertical"
        ? "120px"
        : "100px"};

  height: ${({ bannerType }) => bannerType === "vertical"
    ? "170px"
    : bannerType === "horizontal"
        ? "100px"
        : "100px"};
`;
const PageTitle = styled.h1 `
  font-size: 14px;
  font-family: "Nexa Regular";
  justify-content: flex-start;
  display: flex;
  font-weight: 400;
  margin-top: 10px;
  width: 95%;
`;
const ColumContainer = styled.div `
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const CodeContainer = styled.div `
  display: flex;
  border: 1px solid gray;
  height: 30px;
  width: 80%;
  border-radius: 30px;
  justify-content: center;
`;
const CodeText = styled.p `
  font-size: 14px;
  font-weight: 600;
  align-self: center;
  font-family: "Nexa Regular";
  letter-spacing: 1px;
`;
const NotificationDescription = styled.p `
  font-size: 10px;
  font-family: "Nexa Regular";
  justify-content: flex-start;
  display: flex;
  text-align: start;
  color: #666;
  margin-top: 5px;
  width: 95%;
`;
const ButtonLink = styled.button `
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
styled.div `
  height: 1px;
  background-color: #8f0cf2;
  margin-top: 20px;
  width: 100%;
`;
const DiscountRules = styled.p `
  display: flex;
  justify-content: flex-start;
  text-align: start;
  font-size: 9px;
  color: #777;
  margin-top: 20px;
  font-family: "Nexa Regular";
  width: 95%;
`;

const InternalNotificationScreen = ({ buttonText, code, discountRules, banner, notificationDescription, pageTitle, bannerType, buttonType, }) => {
    return (jsx(Container$1, { children: jsxs(ContainerInternal$1, { children: [jsxs(TopBar$1, { children: [jsx(ArrowLeft$1, {}), jsx(BarText$1, { children: " Notificac\u0327a\u0303o" }), jsx("div", {})] }), jsxs(ContentContainer$1, { children: [banner ? (jsx(Logo, { src: banner, alt: "logo", bannerType: bannerType })) : (jsx("div", {})), jsx(PageTitle, { children: pageTitle }), jsx(NotificationDescription, { children: notificationDescription }), code ? (jsx(ColumContainer, { children: jsx(CodeContainer, { children: jsx(CodeText, { children: code }) }) })) : (jsx("div", {})), discountRules ? (jsx(DiscountRules, { children: discountRules })) : (jsx("div", {})), buttonText && buttonType === "internal" ? (jsxs(ButtonLink, { children: [buttonText, " ", jsx(ArrowRight, {})] })) : buttonText && buttonType === "external" ? (jsxs(ButtonLink, { children: [buttonText, " ", jsx(Share, {})] })) : (jsx("div", {}))] })] }) }));
};

const Container = styled.div `
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
const ContainerInternal = styled.div `
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
const TopBar = styled.div `
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #8f0cf2;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const ArrowLeft = styled(Arrow) `
  margin-left: 14px;
  margin-top: 15px;
`;
const BarText = styled.div `
  font-size: 15px;
  font-family: "Nexa Bold";
  margin-left: 10px;
  margin-top: 18px;
  width: 50%;
`;
const ContentContainer = styled.div `
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
const Card = styled.div `
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 2px;
  background-color: lightgray;
  margin-top: 20px;
  min-height: 60px;
  border-radius: 15px;
`;
const ContentCard = styled.div `
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  margin-left: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;
const ContentCardText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;
const TextCard = styled.p `
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
const LogoCard = styled.img `
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const ListNotificationScreen = ({ logo, description, title, }) => {
    return (jsx(Container, { children: jsxs(ContainerInternal, { children: [jsxs(TopBar, { children: [jsx(ArrowLeft, {}), jsx(BarText, { children: " Notificac\u0327a\u0303o" }), jsx("div", {})] }), jsx(ContentContainer, { children: jsx(Card, { children: jsxs(ContentCard, { children: [jsx(LogoCard, { src: logo }), jsxs(ContentCardText, { children: [jsx(TextCard, { children: title }), jsx(TextCard, { children: description })] })] }) }) })] }) }));
};

export { ExternalNotificationScreen, InternalNotificationScreen, ListNotificationScreen };
//# sourceMappingURL=index.esm.js.map
