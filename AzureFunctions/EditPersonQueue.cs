using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;

namespace AzureFunctions
{
    public static class EditPersonQueue
    {
        // Define a função Azure com o nome "EditPersonQueue"
        [FunctionName("EditPersonQueue")]
        public static void Run(
            // Define o gatilho de fila para a função com conexão ao armazenamento do Azure
            [QueueTrigger("EditPerson", Connection = "AzureWebJobsStorage")]string queueItem,
            // Define a tabela de armazenamento do Azure para inserir ou substituir dados
            [Table("Person")]CloudTable cloudTable,
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou
            log.LogInformation($"EditPersonQueue trigger function started.");

            // Desserializa o item da fila em um objeto do tipo Person
            var data = JsonConvert.DeserializeObject<Person>(queueItem);

            // Cria uma operação de inserção ou substituição para a tabela
            var tableOperation = TableOperation.InsertOrReplace(data);
            // Executa a operação de inserção ou substituição de forma assíncrona na tabela
            cloudTable.ExecuteAsync(tableOperation);

            // Loga uma mensagem informando que a função finalizou
            log.LogInformation($"EditPersonQueue trigger function finished.");
        }
    }
}
