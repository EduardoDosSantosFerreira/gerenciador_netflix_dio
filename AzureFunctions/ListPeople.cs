using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;
using System.Collections.Generic;

namespace AzureFunctions
{
    public static class ListPeople
    {
        // Define a função Azure com o nome "ListPeople"
        [FunctionName("ListPeople")]
        public static async Task<IEnumerable<Person>> Run(
            // Define o gatilho HTTP para a função com nível de autorização Function
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            // Define a tabela de armazenamento do Azure para recuperar dados
            [Table("Person")]CloudTable cloudTable,
            // Logger para registrar informações durante a execução da função
            ILogger log)
        {
            // Loga uma mensagem informando que a função iniciou um pedido
            log.LogInformation("ListPeople function started a request.");

            // Cria uma consulta para recuperar todos os objetos do tipo Person
            var tableQuery = new TableQuery<Person>();
            // Token de continuação para a consulta segmentada
            TableContinuationToken continuationToken = null;

            // Segmento de resultado da consulta
            TableQuerySegment<Person> tableQueryResult;
            do
            {
                // Executa a consulta de forma segmentada e assíncrona na tabela
                tableQueryResult = await cloudTable.ExecuteQuerySegmentedAsync(tableQuery, continuationToken);
                // Atualiza o token de continuação para a próxima iteração
                continuationToken = tableQueryResult.ContinuationToken;
            } while (continuationToken != null); // Continua enquanto houver mais resultados

            // Loga uma mensagem informando que a função finalizou um pedido
            log.LogInformation("ListPeople function finished a request.");

            // Retorna os resultados da consulta como uma lista de objetos Person
            return tableQueryResult.Results;
        }
    }
}
