import React from "react";
import {
  Container,
  DescriptionContainer,
  DescriptionNotification,
  MainContainer,
  TitleContainer,
  TitleNotification,
} from "./styles";

interface ExternalNotificationScreenProps {
  title: string;
  description: string;
}

const ExternalNotificationScreen: React.FC<ExternalNotificationScreenProps> = ({
  title,
  description,
}) => {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleNotification>{title}</TitleNotification>
        </TitleContainer>
        <DescriptionContainer>
          <DescriptionNotification>{description}</DescriptionNotification>
        </DescriptionContainer>
      </MainContainer>
    </Container>
  );
};

export default ExternalNotificationScreen;
