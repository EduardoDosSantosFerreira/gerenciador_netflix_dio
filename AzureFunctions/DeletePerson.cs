using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace AzureFunctions
{
    public static class DeletePerson
    {
        // Define a função Azure com o nome "DeletePerson"
        [FunctionName("DeletePerson")]
        public static async Task<IActionResult> Run(
            // Define o gatilho HTTP para a função com nível de autorização Function
            [HttpTrigger(AuthorizationLevel.Function, "delete", Route = null)]HttpRequest req,
            // Define a fila de armazenamento do Azure para coletar itens de forma assíncrona
            [Queue("DeletePerson", Connection = "AzureWebJobsStorage")]IAsyncCollector<string> queueItem,
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou um pedido
            log.LogInformation("DeletPerson function started a request.");

            // Adiciona o item de exclusão à fila de armazenamento
            await queueItem.AddAsync(
                JsonConvert.SerializeObject(
                    new Person
                    {
                        // Define a chave de partição para o objeto Person
                        PartitionKey = "Person",
                        // Define a chave de linha a partir do parâmetro de consulta "id"
                        RowKey = req.Query["id"]
                    }
                )
            );

            // Loga uma mensagem informando que a função finalizou um pedido
            log.LogInformation("DeletePerson function finished a request.");

            // Retorna um resultado de sucesso com uma mensagem de agradecimento
            return new OkObjectResult($"Obrigado! Seu registro já esta sendo processado.");
        }
    }
}
