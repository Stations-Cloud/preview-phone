import {
  ExternalNotificationScreen,
  InternalNotificationScreen,
} from "preview-phone";

function App() {
  return (
    <div style={{ display: "flex", gap: 50 }}>
      <ExternalNotificationScreen description="teste" title="teste" />
      <InternalNotificationScreen
        barText="Notificação"
        buttonLink="https://www.google.com"
        buttonText="Ir para o site"
        code="8JBOLXYE"
        discountRules="Para conseguir resgatar seu ingresso,
clique em resgate já e ao finalizar a compra
insira o código acima "
        logo="https://node.clubecerto.com.br/superapp/images/assets/station/celphoneIcon.svg"
        notificationDescription={`
          Assista "Ainda Estou Aqui" com Fernanda
Torres, vencedora do Globo de Ouro. Emoção

garantida! 🍿✨
        `}
        pageTitle="🎥 Imperdível: Fernanda!"
      />
    </div>
  );
}

export default App;
