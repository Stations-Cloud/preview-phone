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
  barText?: string;
  banner?: string;
  bannerType?: "vertical" | "horizontal" | "small";
  pageTitle?: string;
  notificationDescription?: string;
  code?: string;
  discountRules?: string;
  buttonText?: string;
}

const InternalNotificationScreen: React.FC<InternalNotificationScreenProps> = ({
  barText,
  buttonText,
  code,
  discountRules,
  banner,
  notificationDescription,
  pageTitle,
  bannerType,
}) => {
  return (
    <Container>
      <ContainerInternal>
        <TopBar>
          <ArrowLeft
            alt="seta"
            src="https://node.clubecerto.com.br/superapp/images/assets/station/left-arrow.png"
          />
          <BarText>{barText ? barText : "Notificação"}</BarText>
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
          {buttonText ? <ButtonLink>{buttonText}</ButtonLink> : <div />}
        </ContentContainer>
      </ContainerInternal>
    </Container>
  );
};

export default InternalNotificationScreen;
