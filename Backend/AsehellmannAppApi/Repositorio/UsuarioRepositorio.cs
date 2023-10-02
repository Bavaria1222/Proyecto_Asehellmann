using AsehellmannAppApi.Data;
using AsehellmannAppApi.Modelos;
using AsehellmannAppApi.Modelos.ModeloDto;
using AsehellmannAppApi.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using XSystem.Security.Cryptography;

namespace AsehellmannAppApi.Repositorio
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly ApplicationDbContext _bd; // Para poder acceder a la base de datos
        private string claveSecreta;
        public UsuarioRepositorio(ApplicationDbContext bd, IConfiguration config)
        {
            _bd = bd;
            claveSecreta = config.GetValue<string>("ApiSettings:Secreta");
        }
      
        public Usuario getUsuario(int usuarioId)
        {
            return _bd.Usuario.FirstOrDefault(u => u.id == usuarioId);
        }

        public ICollection<Usuario> getUsuarios()
        {
            return _bd.Usuario.OrderBy(u => u.apellidos).ToList();
        }
        //Hace la busqueda de los usuarios por el correo
        public bool isUniqueUser(string correo)
        {
            var usuariobd = _bd.Usuario.FirstOrDefault(u => u.correo == correo);
            if (usuariobd == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        //Método para encriptar contraseña con MD5 se usa tanto en el Acceso como en el Registro
        public static string obtenermd5(string valor)
        {
            MD5CryptoServiceProvider x = new MD5CryptoServiceProvider();
            byte[] data = System.Text.Encoding.UTF8.GetBytes(valor);
            data = x.ComputeHash(data);
            string resp = "";
            for (int i = 0; i < data.Length; i++)
                resp += data[i].ToString("x2").ToLower();
            return resp;
        }

        public  async Task<Usuario> registro(UsuarioRegistroDto usuarioRegistroDto)
        {
            var  passwordEncriptado = obtenermd5(usuarioRegistroDto.password);
            Usuario usuario = new Usuario
            {
                nombre = usuarioRegistroDto.nombre,
                apellidos = usuarioRegistroDto.apellidos,
                password = passwordEncriptado,
                role = usuarioRegistroDto.role,
            };
            _bd.Add(usuario);
            await _bd.SaveChangesAsync();
            usuario.password = passwordEncriptado;
            return usuario;
        }
     
        public  async Task<UsuarioLoginRespuestaDto> login(UsuarioLoginDto usuarioLoginDto)
        {
            var passwordEncriptado = obtenermd5(usuarioLoginDto.password);
            var usuario = _bd.Usuario.FirstOrDefault(
                u => u.correo.ToLower() == usuarioLoginDto.correo.ToLower() 
                && u.password == passwordEncriptado
                );
            //Validamos si el usuario existe con la combinacion de correo y contraseña

            if(usuario== null)
            {
                return new UsuarioLoginRespuestaDto()
                {
                    Token = "",
                    correo = null
                };
            }
            // Aqui si existe el usuario, entonces se procede a realizar el login 

            var manejadorToken = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(claveSecreta);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, usuario.correo.ToString()),
                    new Claim(ClaimTypes.Role, usuario.role)
                })
            };

            //var token = manejadorToken.CreateToken(tokenDescriptor);
            //UsuarioLoginRespuestaDto usuarioLoginRespuestaDto = new UsuarioLoginRespuestaDto()
            //{
            //    Token = manejadorToken.WriteToken(token),
            //    Usuario = correusuo
            //};
            //return usuarioLoginRespuestaDto;
            return null;
        }

    }
}
