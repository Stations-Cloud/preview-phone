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

var Container$1 = styled.div.withConfig({
  displayName: "styles__Container"
})(["position:relative;display:flex;flex-direction:column;width:250px;height:500px;background-image:url(\"https://node.clubecerto.com.br/superapp/images/assets/station/notificationScreen.svg\");background-repeat:no-repeat;background-size:contain;"]);
var MainContainer = styled.div.withConfig({
  displayName: "styles__MainContainer"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-top:171px;"]);
var TitleContainer = styled.div.withConfig({
  displayName: "styles__TitleContainer"
})(["margin-left:37px;"]);
var TitleNotification = styled.h1.withConfig({
  displayName: "styles__TitleNotification"
})(["font-size:8px;font-family:\"Nexa Bold\";text-align:left;"]);
var DescriptionContainer = styled.div.withConfig({
  displayName: "styles__DescriptionContainer"
})(["margin-left:38px;margin-top:-13px;width:180px;"]);
var DescriptionNotification = styled.p.withConfig({
  displayName: "styles__DescriptionNotification"
})(["font-size:7px;font-family:\"Nexa Regular\";color:#555;text-align:left;margin-top:10px;"]);

var ExternalNotificationScreen = function ExternalNotificationScreen(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return jsx(Container$1, {
    children: jsxs(MainContainer, {
      children: [jsx(TitleContainer, {
        children: jsx(TitleNotification, {
          children: (title === null || title === void 0 ? void 0 : title.length) > 37 ? "".concat(title === null || title === void 0 ? void 0 : title.slice(0, 34), "...") : title
        })
      }), jsx(DescriptionContainer, {
        children: jsx(DescriptionNotification, {
          children: (description === null || description === void 0 ? void 0 : description.length) > 37 ? "".concat(description === null || description === void 0 ? void 0 : description.slice(0, 37), "...") : description
        })
      })]
    })
  });
};

var ArrowRight = function ArrowRight(props) {
  return jsx("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 12,
    fill: "none",
    children: jsx("path", {
      stroke: "white",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M1 6h13m0 0-5-5m5 5-5 5"
    })
  }));
};

var Copy = function Copy(props) {
  return jsx("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 23 22",
    children: jsx("path", {
      stroke: "#616161",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15.7 7V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.18 1 13.62 1 12.5 1H4.9c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1.7 2.52 1.7 3.08 1.7 4.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.22 15 3.78 15 4.9 15h2.8m3.2 6h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.18 7 19.62 7 18.5 7h-7.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.7 8.52 7.7 9.08 7.7 10.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.22 21 9.78 21 10.9 21Z"
    })
  }));
};

var Share = function Share(props) {
  return jsx("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    children: jsx("path", {
      stroke: "white",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M15 5V1m0 0h-4m4 0-7 7M6 1H4.8c-1.26 0-2.04 0-2.51.25a2 2 0 0 0-.92.92C1 2.76 1 3.48 1 4.8v6.4c0 1.26 0 2.04.25 2.51a2 2 0 0 0 .92.92C2.76 15 3.48 15 4.8 15h6.4c1.26 0 2.04 0 2.51-.25a2 2 0 0 0 .92-.92C15 13.24 15 12.52 15 11.2V9"
    })
  }));
};

var Arrow = function Arrow(props) {
  return jsx("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 8,
    height: 14,
    fill: "none",
    children: jsx("path", {
      stroke: "white",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 13 1 7l6-6"
    })
  }));
};

var ContainerInternalNotification = styled.div.withConfig({
  displayName: "styles__ContainerInternalNotification"
})(["position:relative;flex-direction:column;width:250px;height:500px;display:flex;align-items:center;justify-content:center;background-image:url(\"https://node.clubecerto.com.br/superapp/images/assets/station/celphoneIcon.svg\");background-repeat:no-repeat;background-size:contain;"]);
var ContainerInternal$1 = styled.div.withConfig({
  displayName: "styles__ContainerInternal"
})(["background-color:", ";width:220px;height:480px;flex-direction:column;display:flex;align-items:center;justify-content:center;border-top-left-radius:14px;border-top-right-radius:14px;"], function (_ref) {
  var primaryColor = _ref.primaryColor;
  return primaryColor || "#8f0cf2";
});
var TopBar$1 = styled.div.withConfig({
  displayName: "styles__TopBar"
})(["display:flex;width:100%;height:50px;margin-top:10px;justify-content:space-between;background-color:", ";color:#fff;font-size:18px;font-weight:bold;border-top-left-radius:5px;border-top-right-radius:5px;"], function (_ref2) {
  var primaryColor = _ref2.primaryColor;
  return primaryColor || "#8f0cf2";
});
var ArrowLeft$1 = styled(Arrow).withConfig({
  displayName: "styles__ArrowLeft"
})(["margin-left:14px;margin-top:17px;"]);
var BarText$1 = styled.div.withConfig({
  displayName: "styles__BarText"
})(["font-size:15px;font-family:\"Nexa Bold\";margin-left:10px;margin-top:18px;width:50%;"]);
var TermsText = styled.h1.withConfig({
  displayName: "styles__TermsText"
})(["font-size:14px;margin-left:5px;font-family:\"Nexa Regular\";justify-content:flex-start;display:flex;font-weight:400;margin-top:10px;width:80%;"]);
var ContentContainer$1 = styled.div.withConfig({
  displayName: "styles__ContentContainer"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;margin-top:2px;background-color:white;height:90%;border-top-left-radius:14px;border-top-right-radius:14px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;box-shadow:0 0 10px rgba(0,0,0,0.3);overflow-y:auto;overflow-x:hidden;padding-top:50px;"]);
var Logo = styled.img.withConfig({
  displayName: "styles__Logo"
})(["align-self:center;border-radius:14px;width:", ";height:", ";margin-top:-40px;position:relative;z-index:10;"], function (_ref3) {
  var bannerType = _ref3.bannerType;
  return bannerType === "horizontal" ? "90%" : bannerType === "vertical" ? "120px" : "100px";
}, function (_ref4) {
  var bannerType = _ref4.bannerType;
  return bannerType === "vertical" ? "170px" : bannerType === "horizontal" ? "100px" : "100px";
});
var PageTitle = styled.h1.withConfig({
  displayName: "styles__PageTitle"
})(["font-size:14px;font-family:\"Nexa Regular\";justify-content:flex-start;display:flex;font-weight:400;margin-top:10px;width:95%;"]);
var ColumContainer = styled.div.withConfig({
  displayName: "styles__ColumContainer"
})(["display:flex;width:100%;height:50px;align-items:center;justify-content:center;flex-direction:column;align-items:center;background-color:#f5f5f5;"]);
var CodeContainer = styled.div.withConfig({
  displayName: "styles__CodeContainer"
})(["display:flex;border:1px solid lightgray;gap:20px;height:30px;width:80%;align-items:center;border-radius:30px;justify-content:space-evenly;"]);
var CodeText = styled.p.withConfig({
  displayName: "styles__CodeText"
})(["font-size:14px;font-weight:600;padding-top:3px;align-self:center;font-family:\"Nexa Regular\";letter-spacing:1px;"]);
var NotificationDescription = styled.p.withConfig({
  displayName: "styles__NotificationDescription"
})(["font-size:10px;font-family:\"Nexa Regular\";justify-content:flex-start;display:flex;text-align:start;color:#666;margin-top:5px;width:95%;"]);
var ButtonLink = styled.button.withConfig({
  displayName: "styles__ButtonLink"
})(["display:flex;justify-content:center;gap:10px;align-items:center;background-color:", ";color:#fff;margin-top:10px;font-size:12px;font-family:\"Nexa Regular\";border:none;border-radius:30px;height:30px;width:170px;margin-bottom:20px;min-width:170px;min-height:30px;flex-shrink:0;"], function (_ref5) {
  var primaryColor = _ref5.primaryColor;
  return primaryColor || "#8f0cf2";
});
var DiscountRules = styled.p.withConfig({
  displayName: "styles__DiscountRules"
})(["display:flex;justify-content:flex-start;text-align:start;font-size:9px;margin-left:5px;color:#777;margin-top:10px;font-family:\"Nexa Regular\";width:95%;"]);

var InternalNotificationScreen = function InternalNotificationScreen(_ref) {
  var buttonText = _ref.buttonText,
    code = _ref.code,
    discountRules = _ref.discountRules,
    banner = _ref.banner,
    notificationDescription = _ref.notificationDescription,
    pageTitle = _ref.pageTitle,
    bannerType = _ref.bannerType,
    primaryColor = _ref.primaryColor,
    buttonType = _ref.buttonType;
  return jsx(ContainerInternalNotification, {
    children: jsxs(ContainerInternal$1, {
      primaryColor: primaryColor,
      children: [jsxs(TopBar$1, {
        primaryColor: primaryColor,
        children: [jsx(ArrowLeft$1, {}), jsx(BarText$1, {
          children: " Notificac\u0327a\u0303o"
        }), jsx("div", {})]
      }), jsxs(ContentContainer$1, {
        children: [banner ? jsx(Logo, {
          src: banner,
          alt: "logo",
          bannerType: bannerType
        }) : jsx("div", {}), jsx(PageTitle, {
          children: pageTitle
        }), jsx(NotificationDescription, {
          children: notificationDescription
        }), code ? jsx(ColumContainer, {
          children: jsxs(CodeContainer, {
            children: [jsx("div", {}), jsx(CodeText, {
              children: code
            }), jsx(Copy, {})]
          })
        }) : jsx("div", {}), discountRules ? jsxs("div", {
          style: {
            width: "100%"
          },
          children: [jsx(TermsText, {
            children: "Termos e Condic\u0327o\u0303es"
          }), jsx(DiscountRules, {
            children: discountRules
          })]
        }) : jsx("div", {}), buttonText && buttonType === "internal" ? jsxs(ButtonLink, {
          primaryColor: primaryColor,
          children: [buttonText, " ", jsx(ArrowRight, {})]
        }) : buttonText && buttonType === "external" ? jsxs(ButtonLink, {
          primaryColor: primaryColor,
          children: [buttonText, " ", jsx(Share, {})]
        }) : jsx("div", {})]
      })]
    })
  });
};

var Container = styled.div.withConfig({
  displayName: "styles__Container"
})(["position:relative;flex-direction:column;width:250px;height:500px;display:flex;align-items:center;justify-content:center;background-image:url(\"https://node.clubecerto.com.br/superapp/images/assets/station/celphoneIcon.svg\");background-repeat:no-repeat;background-size:contain;"]);
var ContainerInternal = styled.div.withConfig({
  displayName: "styles__ContainerInternal"
})(["background-color:", ";width:220px;height:480px;flex-direction:column;display:flex;align-items:center;justify-content:center;border-top-left-radius:14px;border-top-right-radius:14px;"], function (_ref) {
  var primaryColor = _ref.primaryColor;
  return primaryColor || "#8f0cf2";
});
var TopBar = styled.div.withConfig({
  displayName: "styles__TopBar"
})(["display:flex;width:100%;height:50px;margin-top:10px;justify-content:space-between;background-color:", ";color:#fff;font-size:18px;font-weight:bold;border-top-left-radius:5px;border-top-right-radius:5px;"], function (_ref2) {
  var primaryColor = _ref2.primaryColor;
  return primaryColor || "#8f0cf2";
});
var ArrowLeft = styled(Arrow).withConfig({
  displayName: "styles__ArrowLeft"
})(["margin-left:14px;margin-top:17px;"]);
var BarText = styled.div.withConfig({
  displayName: "styles__BarText"
})(["font-size:15px;font-family:\"Nexa Bold\";margin-left:10px;margin-top:18px;width:50%;"]);
var ContentContainer = styled.div.withConfig({
  displayName: "styles__ContentContainer"
})(["display:flex;flex-direction:column;align-items:center;width:100%;margin-top:2px;background-color:white;height:90%;border-top-left-radius:14px;border-top-right-radius:14px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow:0 0 10px rgba(0,0,0,0.3);overflow-y:auto;"]);
var Card = styled.div.withConfig({
  displayName: "styles__Card"
})(["display:flex;flex-direction:column;width:90%;margin-top:2px;background-color:#eeeeee;margin-top:20px;min-height:60px;border-radius:15px;"]);
var ContentCard = styled.div.withConfig({
  displayName: "styles__ContentCard"
})(["display:flex;flex-direction:row;width:90%;margin-top:10px;margin-left:5px;align-items:flex-start;justify-content:flex-start;gap:15px;"]);
var ContentCardText = styled.div.withConfig({
  displayName: "styles__ContentCardText"
})(["display:flex;flex-direction:column;justify-content:flex-start;gap:8px;"]);
var TextCard = styled.p.withConfig({
  displayName: "styles__TextCard"
})(["margin:0;font-family:\"Nexa Regular\";font-size:12px;width:100%;max-width:100%;text-align:start;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;"]);
var LogoCard = styled.img.withConfig({
  displayName: "styles__LogoCard"
})(["height:30px;width:30px;border-radius:50%;"]);

var ListNotificationScreen = function ListNotificationScreen(_ref) {
  var logo = _ref.logo,
    description = _ref.description,
    title = _ref.title,
    primaryColor = _ref.primaryColor;
  return jsx(Container, {
    children: jsxs(ContainerInternal, {
      primaryColor: primaryColor,
      children: [jsxs(TopBar, {
        primaryColor: primaryColor,
        children: [jsx(ArrowLeft, {}), jsx(BarText, {
          children: " Notificac\u0327a\u0303o"
        }), jsx("div", {})]
      }), jsx(ContentContainer, {
        children: jsx(Card, {
          children: jsxs(ContentCard, {
            children: [jsx(LogoCard, {
              src: logo
            }), jsxs(ContentCardText, {
              children: [jsx(TextCard, {
                children: (title === null || title === void 0 ? void 0 : title.length) > 20 ? "".concat(title === null || title === void 0 ? void 0 : title.slice(0, 20), "...") : title
              }), jsx(TextCard, {
                children: (description === null || description === void 0 ? void 0 : description.length) > 20 ? "".concat(description === null || description === void 0 ? void 0 : description.slice(0, 18), "...") : description
              })]
            })]
          })
        })
      })]
    })
  });
};

export { ExternalNotificationScreen, InternalNotificationScreen, ListNotificationScreen };
//# sourceMappingURL=index.esm.js.map
