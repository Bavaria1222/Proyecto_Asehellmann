using AsehellmannAppApi.Modelos.ModeloDto;
using AsehellmannAppApi.Modelos;

namespace AsehellmannAppApi.Repositorio.IRepositorio
{
    public interface IUsuarioRepositorio
    {
        ICollection<Usuario> getUsuarios();
        Usuario getUsuario(int usuarioId);
        bool isUniqueUser(string usuario);
        Task<UsuarioLoginRespuestaDto> login(UsuarioLoginDto usuarioLoginDto);
        Task<Usuario> registro(UsuarioRegistroDto usuarioRegistroDto);
    }
}
