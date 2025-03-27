import ArrowRight from "../../icons/ArrowRigth";
import Share from "../../icons/Share";
import {
  ArrowLeft,
  BarText,
  ButtonLink,
  CodeContainer,
  CodeText,
  ColumContainer,
  Container,
  ContainerInternal,
  ContentContainer,
  DiscountRules,
  Logo,
  NotificationDescription,
  PageTitle,
  TopBar,
} from "./styles";

interface InternalNotificationScreenProps {
  banner?: string;
  bannerType?: "vertical" | "horizontal" | "small";
  pageTitle?: string;
  notificationDescription?: string;
  code?: string;
  discountRules?: string;
  buttonText?: string;
  buttonType: "internal" | "external";
}

const InternalNotificationScreen: React.FC<InternalNotificationScreenProps> = ({
  buttonText,
  code,
  discountRules,
  banner,
  notificationDescription,
  pageTitle,
  bannerType,
  buttonType,
}) => {
  return (
    <Container>
      <ContainerInternal>
        <TopBar>
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
                <CodeText>{code}</CodeText>
              </CodeContainer>
            </ColumContainer>
          ) : (
            <div />
          )}
          {discountRules ? (
            <DiscountRules>{discountRules}</DiscountRules>
          ) : (
            <div />
          )}
          {buttonText && buttonType === "internal" ? (
            <ButtonLink>
              {buttonText} <ArrowRight />
            </ButtonLink>
          ) : buttonText && buttonType === "external" ? (
            <ButtonLink>
              {buttonText} <Share />
            </ButtonLink>
          ) : (
            <div />
          )}
        </ContentContainer>
      </ContainerInternal>
    </Container>
  );
};

export default InternalNotificationScreen;
