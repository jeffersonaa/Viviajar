using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace viviajar.Models {

    [Table("Destinos")]
    public class Destino
    {
        [Key()]
        public int DestinoId { get; set; }
        public string cidade { get; set; }
        public string descricao { get; set; }
        public string estado { get; set; }
        public string nome { get; set; }

    }
}
