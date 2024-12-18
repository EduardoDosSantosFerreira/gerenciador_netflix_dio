# Azure Functions

![Azure Functions](https://img.shields.io/badge/Azure%20Functions-v3-blue)
![.NET Core](https://img.shields.io/badge/.NET%20Core-3.1-blue)
![Azure Storage](https://img.shields.io/badge/Azure%20Storage-available-brightgreen)

## Descrição

Este repositório contém um exemplo de como implementar uma aplicação Serverless utilizando Azure Functions v3, .NET Core 3 e Azure Storage. Ele oferece uma implementação simples e eficaz que demonstra como construir aplicações escaláveis sem a necessidade de gerenciar a infraestrutura subjacente.

## Como executar

1. Crie um arquivo `local.settings.json` na raiz do projeto.
2. Dentro do `local.settings.json`, defina as connection strings `AzureWebJobsStorage` e `AzureWebJobsDashboard` e coloque as strings de conexão do Azure Storage.
3. Se preferir executar a aplicação localmente, pode usar essas strings de conexão para conectar-se ao Azure Storage.
4. Como alternativa, você pode publicar diretamente a função no Azure para um ambiente totalmente gerenciado sem servidores.

## Requisitos

- Azure Functions v3 runtime  
- .NET Core 3.1 SDK ou posterior  
- Conta do Azure Storage

## Informações Adicionais

O Azure Functions permite criar aplicações orientadas a eventos sem a necessidade de gerenciar a infraestrutura, enquanto o Azure Storage oferece uma solução de armazenamento altamente disponível e durável para sua aplicação. Este exemplo demonstra como conectar o Azure Functions com o Azure Storage para processar dados, armazenar logs e gerenciar gatilhos de forma eficiente.
