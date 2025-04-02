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
          <TitleNotification>
            {title.length > 37 ? `${title.slice(0, 34)}...` : title}
          </TitleNotification>
        </TitleContainer>
        <DescriptionContainer>
          <DescriptionNotification>
            {description.length > 37
              ? `${description.slice(0, 37)}...`
              : description}
          </DescriptionNotification>
        </DescriptionContainer>
      </MainContainer>
    </Container>
  );
};

export default ExternalNotificationScreen;
