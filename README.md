# Preview Phone

Uma biblioteca para emular um estilo de notificação no seu projeto React. Esta biblioteca fornece dois componentes principais:

- **ExternalNotificationScreen**: Exibe uma notificação externa com um título e uma descrição.
- **InternalNotificationScreen**: Exibe uma notificação interna com suporte a logo, título da página, descrição, código de desconto e botão de ação.

## Instalação

Para instalar a biblioteca, execute o seguinte comando:

```sh
npm install preview-phone
# ou
yarn add preview-phone
```

## Uso

Importe e utilize os componentes conforme necessário:

### Exemplo de uso do `ExternalNotificationScreen`

```tsx
import React from "react";
import ExternalNotificationScreen from "preview-phone";

const App = () => {
  return (
    <ExternalNotificationScreen
      title="Nova Notificação"
      description="Esta é uma notificação externa de exemplo."
    />
  );
};

export default App;
```

### Exemplo de uso do `InternalNotificationScreen`

```tsx
import React from "react";
import InternalNotificationScreen from "preview-phone";

const App = () => {
  return (
    <InternalNotificationScreen
      barText="Oferta Especial"
      logo="https://seu-site.com/logo.png"
      pageTitle="Desconto Exclusivo"
      notificationDescription="Aproveite um desconto especial em sua próxima compra."
      code="DESCONTO10"
      discountRules="Válido até 31/12/2024."
      buttonText="Resgatar"
      buttonLink="https://seu-site.com/desconto"
    />
  );
};

export default App;
```

## Para Desenvolvimento

Para rodar o projeto em tempo real e testar as modificações na biblioteca:

1.  Na pasta raiz da biblioteca, execute:

    ```sh
    yarn link
    ```

    ou

    ```sh
    npm link
    ```

2.  Na pasta example, execute:

    ```sh
    yarn link "preview-phone"
    ```

    ou

    ```sh
    npm link "preview-phone"
    ```

3.  Execute o seguinte comando para instalar as dependências:

    ```sh
    yarn install
    ```

    ou

    ```sh
    npm install
    ```

4.  Na raiz da biblioteca, rode o seguinte comando para compilar as modificações em tempo real:

    ```sh
    yarn run dev
    ```

    ou

        ```sh

    npm run dev

    ```

    ```

Agora, qualquer modificação feita na biblioteca será refletida automaticamente no projeto de exemplo.

## Licença

Este projeto está licenciado sob a MIT License.

## --------

Desenvolvido por [Hugo Emannuel](https://github.com/hugoemannuel). Sinta-se à vontade para contribuir ou relatar problemas!

```

```
