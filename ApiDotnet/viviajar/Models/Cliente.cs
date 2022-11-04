using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace viviajar.Models {

    [Table("Clientes")]
    public class Cliente
    {
        [Key()]
        public int ClienteId { get; set; }
        public string cpf { get; set; }
        public string email { get; set; }
        public string endereco { get; set; }
        public string nome { get; set; }
        public string telefone { get; set; }
        
    }
}

