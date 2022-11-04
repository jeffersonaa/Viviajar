using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

using viviajar.Models;

namespace viviajar.Models {

    [Table("Passagens")]
    public class Passagem
    {
        [Key()]
        public int Id { get; set; }

        public Cliente Cliente { get; set; }

        public Destino Destino { get; set; }

    }


}
