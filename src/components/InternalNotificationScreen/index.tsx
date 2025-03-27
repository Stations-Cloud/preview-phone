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
  logo?: string;
  pageTitle?: string;
  notificationDescription?: string;
  code?: string;
  discountRules?: string;
  buttonText?: string;
  buttonLink?: string;
}

const InternalNotificationScreen: React.FC<InternalNotificationScreenProps> = ({
  barText,
  buttonLink,
  buttonText,
  code,
  discountRules,
  logo,
  notificationDescription,
  pageTitle,
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
          {logo ? <Logo src={logo} alt="logo" /> : <div />}

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
          {buttonLink ? (
            <a
              style={{ textDecoration: "none" }}
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonLink>{buttonText}</ButtonLink>
            </a>
          ) : (
            <div />
          )}
        </ContentContainer>
      </ContainerInternal>
    </Container>
  );
};

export default InternalNotificationScreen;
