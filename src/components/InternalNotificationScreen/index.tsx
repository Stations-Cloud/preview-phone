import {
  BarText,
  ButtonLink,
  CodeContainer,
  CodeText,
  ColumContainer,
  Container,
  ContentContainer,
  DiscountRules,
  LineFinal,
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
      <TopBar>
        <BarText>{barText ? barText : "Notificação"}</BarText>
      </TopBar>
      <ContentContainer>
        {logo ? <Logo src={logo} alt="logo" /> : <div />}
        <LineFinal />
        <PageTitle>{pageTitle}</PageTitle>
        <NotificationDescription>
          {notificationDescription}
        </NotificationDescription>
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
        {code && <LineFinal />}
        {code ? (
          <ColumContainer>
            <PageTitle>Código</PageTitle>
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
      </ContentContainer>
    </Container>
  );
};

export default InternalNotificationScreen;
