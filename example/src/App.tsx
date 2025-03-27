import {
  ExternalNotificationScreen,
  InternalNotificationScreen,
  ListNotificationScreen,
} from "preview-phone";

function App() {
  return (
    <div style={{ display: "flex", gap: 50 }}>
      <ExternalNotificationScreen description="teste" title="teste" />
      <InternalNotificationScreen
        buttonType="internal"
        buttonText="Ir para o site"
        bannerType="small"
        code="8JBOLXYE"
        discountRules="Para conseguir resgatar seu ingresso,
clique em resgate já e ao finalizar a compra
insira o código acima "
        banner="https://node.stations.cloud/notifications/image/2025-03-27T17_53_20_909Z.png"
        notificationDescription={`
          Assista "Ainda Estou Aqui" com Fernanda
Torres, vencedora do Globo de Ouro. Emoção

garantida! 🍿✨
        `}
        pageTitle="🎥 Imperdível: Fernanda!"
      />
      <ListNotificationScreen
        description={`Cinema com desconto `}
        title="Imperdível: Fernanda!"
        logo="https://node.stations.cloud/notifications/image/2025-03-27T17_53_20_909Z.png"
      />
    </div>
  );
}

export default App;
