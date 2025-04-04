import ArrowRight from "../../icons/ArrowRigth";
import Copy from "../../icons/Copy";
import Share from "../../icons/Share";
import {
  ArrowLeft,
  BarText,
  ButtonLink,
  CodeContainer,
  CodeText,
  ColumContainer,
  ContainerInternal,
  ContainerInternalNotification,
  ContentContainer,
  DiscountRules,
  Logo,
  NotificationDescription,
  PageTitle,
  TermsText,
  TopBar,
} from "./styles";

interface InternalNotificationScreenProps {
  banner?: string;
  bannerType?: "vertical" | "horizontal" | "small";
  pageTitle?: string;
  notificationDescription?: string;
  code?: string;
  primaryColor?: string;
  discountRules?: string;
  buttonText?: string;
  buttonType?: "internal" | "external";
}

const InternalNotificationScreen: React.FC<InternalNotificationScreenProps> = ({
  buttonText,
  code,
  discountRules,
  banner,
  notificationDescription,
  pageTitle,
  bannerType,
  primaryColor,
  buttonType,
}) => {
  return (
    <ContainerInternalNotification>
      <ContainerInternal primaryColor={primaryColor}>
        <TopBar primaryColor={primaryColor}>
          <ArrowLeft />
          <BarText> Notificação</BarText>
          <div />
        </TopBar>
        <ContentContainer>
          {banner ? (
            <Logo src={banner} alt="logo" bannerType={bannerType} />
          ) : (
            <div />
          )}

          <PageTitle>{pageTitle}</PageTitle>
          <NotificationDescription>
            {notificationDescription}
          </NotificationDescription>

          {code ? (
            <ColumContainer>
              <CodeContainer>
                <div />
                <CodeText>{code}</CodeText>
                <Copy />
              </CodeContainer>
            </ColumContainer>
          ) : (
            <div />
          )}
          {discountRules ? (
            <div style={{ width: "100%" }}>
              <TermsText>Termos e Condições</TermsText>
              <DiscountRules>{discountRules}</DiscountRules>
            </div>
          ) : (
            <div />
          )}
          {buttonText && buttonType === "internal" ? (
            <ButtonLink primaryColor={primaryColor}>
              {buttonText} <ArrowRight />
            </ButtonLink>
          ) : buttonText && buttonType === "external" ? (
            <ButtonLink primaryColor={primaryColor}>
              {buttonText} <Share />
            </ButtonLink>
          ) : (
            <div />
          )}
        </ContentContainer>
      </ContainerInternal>
    </ContainerInternalNotification>
  );
};

export default InternalNotificationScreen;
