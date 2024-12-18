using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace AzureFunctions
{
    public static class CreatePerson
    {
        // Define a função Azure com o nome "CreatePerson"
        [FunctionName("CreatePerson")]
        public static async Task<IActionResult> Run(
            // Define o gatilho HTTP para a função com nível de autorização Function
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)]HttpRequest req, 
            // Define a fila de armazenamento do Azure para coletar itens de forma assíncrona
            [Queue("CreatePerson", Connection = "AzureWebJobsStorage")]IAsyncCollector<string> queueItem, 
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou um pedido
            log.LogInformation("CreatePerson function started a request.");

            // Lê o corpo da requisição HTTP de forma assíncrona
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            // Adiciona o corpo da requisição à fila de armazenamento
            await queueItem.AddAsync(requestBody);

            // Loga uma mensagem informando que a função finalizou um pedido
            log.LogInformation("CreatePerson function finished a request.");

            // Retorna um resultado de sucesso com uma mensagem de agradecimento
            return new OkObjectResult($"Obrigado! Seu registro já está sendo processado.");
        }
    }
}
