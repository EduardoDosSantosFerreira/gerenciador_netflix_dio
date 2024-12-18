using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;

namespace AzureFunctions
{
    public static class CreatePersonQueue
    {
        // Define a função Azure com o nome "CreatePersonQueue"
        [FunctionName("CreatePersonQueue")]
        public static void Run(
            // Define o gatilho de fila para a função com conexão ao armazenamento do Azure
            [QueueTrigger("CreatePerson", Connection = "AzureWebJobsStorage")]string queueItem, 
            // Define a tabela de armazenamento do Azure para inserir dados
            [Table("Person")]CloudTable cloudTable, 
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou
            log.LogInformation($"CreatePersonQueue trigger function started.");

            // Desserializa o item da fila em um objeto do tipo Person
            var data = JsonConvert.DeserializeObject<Person>(queueItem);
            // Define a chave de partição para o objeto Person
            data.PartitionKey = "Person";
            // Define a chave de linha como um novo GUID para o objeto Person
            data.RowKey = Guid.NewGuid().ToString();

            // Cria uma operação de inserção para a tabela
            var tableOperation = TableOperation.Insert(data);
            // Executa a operação de inserção de forma assíncrona na tabela
            cloudTable.ExecuteAsync(tableOperation);

            // Loga uma mensagem informando que a função finalizou
            log.LogInformation($"CreatePersonQueue trigger function finished.");
        }
    }
}
