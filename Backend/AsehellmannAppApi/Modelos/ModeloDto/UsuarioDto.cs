using System.ComponentModel.DataAnnotations;

namespace AsehellmannAppApi.Modelos.ModeloDto
{
    public class UsuarioDto
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }

        public string correo { get; set; }

        public string password { get; set; }

        public string role { get; set; }
    }
}
