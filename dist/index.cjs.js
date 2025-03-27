'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');

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
    return (jsxRuntime.jsx(Container$2, { children: jsxRuntime.jsxs(MainContainer, { children: [jsxRuntime.jsx(TitleContainer, { children: jsxRuntime.jsx(TitleNotification, { children: title }) }), jsxRuntime.jsx(DescriptionContainer, { children: jsxRuntime.jsx(DescriptionNotification, { children: description }) })] }) }));
};

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
const ArrowLeft$1 = styled.img `
  width: 16px;
  height: 12px;
  margin-left: 10px;
  margin-top: 18px;
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

const InternalNotificationScreen = ({ barText, buttonText, code, discountRules, banner, notificationDescription, pageTitle, bannerType, }) => {
    return (jsxRuntime.jsx(Container$1, { children: jsxRuntime.jsxs(ContainerInternal$1, { children: [jsxRuntime.jsxs(TopBar$1, { children: [jsxRuntime.jsx(ArrowLeft$1, { alt: "seta", src: "https://node.clubecerto.com.br/superapp/images/assets/station/left-arrow.png" }), jsxRuntime.jsx(BarText$1, { children: barText ? barText : "Notificação" }), jsxRuntime.jsx("div", {})] }), jsxRuntime.jsxs(ContentContainer$1, { children: [banner ? (jsxRuntime.jsx(Logo, { src: banner, alt: "logo", bannerType: bannerType })) : (jsxRuntime.jsx("div", {})), jsxRuntime.jsx(PageTitle, { children: pageTitle }), jsxRuntime.jsx(NotificationDescription, { children: notificationDescription }), code ? (jsxRuntime.jsx(ColumContainer, { children: jsxRuntime.jsx(CodeContainer, { children: jsxRuntime.jsx(CodeText, { children: code }) }) })) : (jsxRuntime.jsx("div", {})), discountRules ? (jsxRuntime.jsx(DiscountRules, { children: discountRules })) : (jsxRuntime.jsx("div", {})), buttonText ? jsxRuntime.jsx(ButtonLink, { children: buttonText }) : jsxRuntime.jsx("div", {})] })] }) }));
};

const Arrow = (props) => (jsxRuntime.jsx("svg", Object.assign({}, props, { xmlns: "http://www.w3.org/2000/svg", width: 8, height: 14, fill: "none", children: jsxRuntime.jsx("path", { stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 13 1 7l6-6" }) })));

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
    return (jsxRuntime.jsx(Container, { children: jsxRuntime.jsxs(ContainerInternal, { children: [jsxRuntime.jsxs(TopBar, { children: [jsxRuntime.jsx(ArrowLeft, {}), jsxRuntime.jsx(BarText, { children: " Notificac\u0327a\u0303o" }), jsxRuntime.jsx("div", {})] }), jsxRuntime.jsx(ContentContainer, { children: jsxRuntime.jsx(Card, { children: jsxRuntime.jsxs(ContentCard, { children: [jsxRuntime.jsx(LogoCard, { src: logo }), jsxRuntime.jsxs(ContentCardText, { children: [jsxRuntime.jsx(TextCard, { children: title }), jsxRuntime.jsx(TextCard, { children: description })] })] }) }) })] }) }));
};

exports.ExternalNotificationScreen = ExternalNotificationScreen;
exports.InternalNotificationScreen = InternalNotificationScreen;
exports.ListNotificationScreen = ListNotificationScreen;
//# sourceMappingURL=index.cjs.js.map
