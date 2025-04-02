import {
  ArrowLeft,
  BarText,
  Card,
  Container,
  ContainerInternal,
  ContentCard,
  ContentCardText,
  ContentContainer,
  LogoCard,
  TextCard,
  TopBar,
} from "./styles";

interface ListNotificationScreen {
  logo: string;
  title: string;
  description: string;
}

const ListNotificationScreen: React.FC<ListNotificationScreen> = ({
  logo,
  description,
  title,
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
          <Card>
            <ContentCard>
              <LogoCard src={logo} />
              <ContentCardText>
                <TextCard>
                  {title?.length > 20 ? `${title?.slice(0, 20)}...` : title}
                </TextCard>
                <TextCard>
                  {description?.length > 20
                    ? `${description?.slice(0, 18)}...`
                    : description}
                </TextCard>
              </ContentCardText>
            </ContentCard>
          </Card>
        </ContentContainer>
      </ContainerInternal>
    </Container>
  );
};

export default ListNotificationScreen;
