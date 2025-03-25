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

const Container$1 = styled.div `
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
    return (jsx(Container$1, { children: jsxs(MainContainer, { children: [jsx(TitleContainer, { children: jsx(TitleNotification, { children: title }) }), jsx(DescriptionContainer, { children: jsx(DescriptionNotification, { children: description }) })] }) }));
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
const TopBar = styled.div `
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
styled.img `
  width: 16px;
  height: 12px;
  margin-left: 10px;
  margin-top: 18px;
`;
const BarText = styled.div `
  font-size: 15px;
  font-family: "Nexa Bold";
  margin-left: 10px;
  margin-top: 18px;
`;
const ContentContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;
const Logo = styled.img `
  align-self: center;
  height: 70px;
  width: 70px;
`;
const PageTitle = styled.h1 `
  font-size: 14px;
  font-family: "Nexa Regular";
  justify-content: center;
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
  border: 1px dashed #8f0cf2;
  height: 30px;
  width: 80%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
const CodeText = styled.p `
  font-size: 14px;
  font-weight: 600;
  font-family: "Nexa Regular";
  letter-spacing: 1px;
`;
const NotificationDescription = styled.p `
  font-size: 10px;
  font-family: "Nexa Regular";
  justify-content: center;
  display: flex;
  text-align: center;
  color: #666;
  margin-top: 5px;
  width: 95%;
`;
const ButtonLink = styled.button `
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
const LineFinal = styled.div `
  height: 1px;
  background-color: #8f0cf2;
  margin-top: 20px;
  width: 100%;
`;
const DiscountRules = styled.p `
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 9px;
  color: #777;
  margin-top: 20px;
  font-family: "Nexa Regular";
  width: 95%;
`;

const InternalNotificationScreen = ({ barText, buttonLink, buttonText, code, discountRules, logo, notificationDescription, pageTitle, }) => {
    return (jsxs(Container, { children: [jsx(TopBar, { children: jsx(BarText, { children: barText ? barText : "Notificação" }) }), jsxs(ContentContainer, { children: [logo ? jsx(Logo, { src: logo, alt: "logo" }) : jsx("div", {}), jsx(LineFinal, {}), jsx(PageTitle, { children: pageTitle }), jsx(NotificationDescription, { children: notificationDescription }), buttonLink ? (jsx("a", { style: { textDecoration: "none" }, href: buttonLink, target: "_blank", rel: "noopener noreferrer", children: jsx(ButtonLink, { children: buttonText }) })) : (jsx("div", {})), code && jsx(LineFinal, {}), code ? (jsxs(ColumContainer, { children: [jsx(PageTitle, { children: "C\u00F3digo" }), jsx(CodeContainer, { children: jsx(CodeText, { children: code }) })] })) : (jsx("div", {})), discountRules ? (jsx(DiscountRules, { children: discountRules })) : (jsx("div", {}))] })] }));
};

export { ExternalNotificationScreen, InternalNotificationScreen };
//# sourceMappingURL=index.esm.js.map
