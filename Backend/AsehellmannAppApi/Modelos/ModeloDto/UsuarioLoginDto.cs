using System.ComponentModel.DataAnnotations;

namespace AsehellmannAppApi.Modelos.ModeloDto
{
    public class UsuarioLoginDto
    {
        [Required]
        public string correo { get; set; }
        [Required]
        public string password { get; set; }
    }
}
