using AsehellmannAppApi.Modelos.ModeloDto;
using AsehellmannAppApi.Repositorio.IRepositorio;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AsehellmannAppApi.Controllers
{
    //[Route("api/[controller]")] // Una opcion
    [ApiController]
    [Route("api/usuarios")]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepositorio _usRepo;
        private readonly IMapper _mapper;

        public UsuariosController(IUsuarioRepositorio _usRepo, IMapper _mapper )
        {
            _usRepo = _usRepo;
            _mapper = _mapper;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult getUsuarios()
        {
            var listaUsuarios = _usRepo.getUsuarios();
            var listaUsuariosDto = new List<UsuarioDto>();
            
            foreach (var lista in listaUsuarios)
            {
                listaUsuariosDto.Add(_mapper.Map<UsuarioDto>(lista));
            }
            return Ok(listaUsuariosDto);
        }

        [HttpGet("{usuarioId:int}", Name = "getUsuario")]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult getUsuario(int usuarioId)
        {
            var itemUsuario = _usRepo.getUsuario(usuarioId);
            if(itemUsuario == null)
            {
                return NotFound();
            }
            var itemUsuarioDto = _mapper.Map<UsuarioDto>(itemUsuario);
            return Ok(itemUsuarioDto);
        }


    }

}
