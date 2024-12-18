using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;

namespace AzureFunctions
{
    public static class GetPerson
    {
        // Define a função Azure com o nome "GetPerson"
        [FunctionName("GetPerson")]
        public static async Task<Person> Run(
            // Define o gatilho HTTP para a função com nível de autorização Function
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            // Define a tabela de armazenamento do Azure para recuperar dados
            [Table("Person")]CloudTable cloudTable,
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou um pedido
            log.LogInformation("GetPerson function started a request.");

            // Define a chave de partição para o objeto Person
            var partitionKey = "Person";
            // Define a chave de linha a partir do parâmetro de consulta "id"
            var rowKey = req.Query["id"];

            // Cria uma operação de recuperação para a tabela
            TableOperation person = TableOperation.Retrieve<Person>(partitionKey, rowKey);
            // Executa a operação de recuperação de forma assíncrona na tabela
            TableResult result = await cloudTable.ExecuteAsync(person);

            // Loga uma mensagem informando que a função finalizou um pedido
            log.LogInformation("GetPerson function finished a request.");

            // Retorna o resultado da operação de recuperação como um objeto Person
            return (Person)result.Result;
        }
    }
}
