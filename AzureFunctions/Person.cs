using Microsoft.WindowsAzure.Storage.Table;

namespace AzureFunctions
{
    // Define a classe Person que herda de TableEntity para ser usada na tabela de armazenamento do Azure
    public class Person : TableEntity
    {
        // Propriedade para armazenar o nome da pessoa
        public string Name { get; set; }
        // Propriedade para armazenar o email da pessoa
        public string Email { get; set; }

        // Construtor padrão da classe Person
        public Person() { }
    }
}
