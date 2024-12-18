using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;

namespace AzureFunctions
{
    public static class DeletePersonQueue
    {
        // Define a função Azure com o nome "DeletePersonQueue"
        [FunctionName("DeletePersonQueue")]
        public static void Run(
            // Define o gatilho de fila para a função com conexão ao armazenamento do Azure
            [QueueTrigger("DeletePerson", Connection = "AzureWebJobsStorage")]string queueItem,
            // Define a tabela de armazenamento do Azure para deletar dados
            [Table("Person")]CloudTable cloudTable,
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou
            log.LogInformation($"DeletePersonQueue trigger function started.");

            // Desserializa o item da fila em um objeto do tipo Person
            var data = JsonConvert.DeserializeObject<Person>(queueItem);

            // Cria uma entidade de tabela dinâmica com a chave de partição e linha do objeto Person
            var person = new DynamicTableEntity(data?.PartitionKey, data?.RowKey);
            // Define o ETag como "*" para permitir a exclusão incondicional
            person.ETag = "*";

            // Cria uma operação de exclusão para a tabela
            var tableOperation = TableOperation.Delete(person);
            // Executa a operação de exclusão de forma assíncrona na tabela
            cloudTable.ExecuteAsync(tableOperation);

            // Loga uma mensagem informando que a função finalizou
            log.LogInformation($"DeletePersonQueue trigger function finished.");
        }
    }
}
