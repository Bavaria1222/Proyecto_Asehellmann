using AsehellmannAppApi.Modelos;
using AsehellmannAppApi.Modelos.ModeloDto;
using AutoMapper;
using System.Runtime;

namespace AsehellmannAppApi.Mapper
{
    public class AsehellmannMapper: Profile 
    {
        public AsehellmannMapper()
        {
            CreateMap<Usuario, UsuarioDto>().ReverseMap();
        }
    }
}
