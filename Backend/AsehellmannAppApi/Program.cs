using AsehellmannAppApi.Data;
using AsehellmannAppApi.Mapper;
using AsehellmannAppApi.Repositorio;
using AsehellmannAppApi.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

//Configuracion conexion a sql server

builder.Services.AddDbContext<ApplicationDbContext>(opciones =>
{
    opciones.UseSqlServer(builder.Configuration.GetConnectionString("ConexionSql"));
});


//Agregamos los repositorios

builder.Services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();


//Agregamos el Automapper

builder.Services.AddAutoMapper(typeof(AsehellmannMapper));


// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
