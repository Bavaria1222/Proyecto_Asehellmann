using System.ComponentModel.DataAnnotations;

namespace AsehellmannAppApi.Modelos.ModeloDto
{
    public class UsuarioRegistroDto
    {
        [Required(ErrorMessage = "El nombre es obligatorio")]
        public string nombre { get; set; }
        [Required(ErrorMessage = "Los apellidos son obligatorios")]
        public string apellidos { get; set; }

        [Required(ErrorMessage = "El correo es obligatorio")]
        public string correo { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria")]
        public string password { get; set; }
        public string role { get; set; }

    }
}
