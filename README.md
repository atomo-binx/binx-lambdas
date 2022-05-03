# Lambdas - Binx

## Utilização

Utilizar o lambda `getTemplate` para realizar requisições na API que podem ser executadas com o método GET.

Não alterar a lambda, apenas criar um novo evento no `eventBridge` e selecionar como destino o lambda `getTemplate`, alterando o JSON de eventos para selecionar o destino e parâmetros da requisição.

## Variáveis de Ambiente

O lambda `getTemplate` possui por padrão as seguintes variáveis de ambientes configuradas:

```ENV
COGNITO_CLIENT_ID
COGNITO_REGION
USER_EMAIL
USER_PASSWORD
```

As variáveis são utilizadas para realizar a autenticação em rotas protegidas.

## JSON de Evento

Exemplo de JSON de evento com parâmetros:

```JSON
{
  "baseURL": "https://api.binx.com.br/api",
  "endpoint": "/sincroniza/pedidosvenda",
  "params": {
    "period": "days",
    "value": 1
  }
}
```

Exemplo de JSON de evento sem parâmetros:

```JSON
{
  "baseURL": "https://api.binx.com.br/api",
  "endpoint": "/sincroniza/pedidosvenda",
  "params": {}
}
```
