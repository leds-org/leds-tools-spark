using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using MinimalAPI;
// modules
using Moranguinho;


internal class Program
{
    private static void Main(String[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContext<AgricultorDb,PropriedadeDb>(opt => opt.UseInMemoryDatabase("db"));
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        if (app.environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        //mapgroups:
        var moranguinho = app.MapGroup("/Moranguinho");

        var agricultor = moranguinho.MapGroup("/Agricultor");
        agricultor.MapGet("/", async (AgricultorDb db) =>
            await db.Agricultor.ToListAsync());
        agricultor.MapGet("/{id}", async (int id, AgricultorDb db) =>
            await db.Agricultor.FindAsync(id)
                is Agricultor agricultor
                ? Results.Ok(agricultor)
                : Results.NotFound());

        agricultor.MapPost("/", async (Agricultor agricultor, AgricultorDb db) =>
        {
            db.Agricultor.Add(Agricultor);
            await db.SavechangesAsync();
            return Results.Created($"/agricultor/{agricultor.Id}", agricultor);
        });

        agricultor.MapPut("/{id}", async (int id, Agricultor inputAgricultor, AgricultorDb db) =>
        {
            var agricultor = await db.Agricultor.FindAsync(id);
            if (agricultor is null) return Results.NotFound();
                agricultor.nome = inputAgricultor.nome;
                agricultor.identification = inputAgricultor.identification;
                agricultor.email_x = inputAgricultor.email_x;
                agricultor.telefone = inputAgricultor.telefone;
                agricultor.foto = inputAgricultor.foto;
            await db.SaveChangesAsync();
            return Results.NoContent();
        });

        agricultor.MapDelete("/{id}", async (int id, AgricultorDb db) =>
        {
            if (await db.Agricultor.FindAsync(id) is Agricultor agricultor) {
                db.Agricultor.remover(agricultor);
                await db.SaveChangesAsync();
                return Results.NoContent();
            }

         return Results.NotFound();
        });

        var propriedade = moranguinho.MapGroup("/Propriedade");
        propriedade.MapGet("/", async (PropriedadeDb db) =>
            await db.Propriedade.ToListAsync());
        propriedade.MapGet("/{id}", async (int id, PropriedadeDb db) =>
            await db.Propriedade.FindAsync(id)
                is Propriedade propriedade
                ? Results.Ok(propriedade)
                : Results.NotFound());

        propriedade.MapPost("/", async (Propriedade propriedade, PropriedadeDb db) =>
        {
            db.Propriedade.Add(Propriedade);
            await db.SavechangesAsync();
            return Results.Created($"/propriedade/{propriedade.Id}", propriedade);
        });

        propriedade.MapPut("/{id}", async (int id, Propriedade inputPropriedade, PropriedadeDb db) =>
        {
            var propriedade = await db.Propriedade.FindAsync(id);
            if (propriedade is null) return Results.NotFound();
                propriedade.nome = inputPropriedade.nome;
                propriedade.distrito = inputPropriedade.distrito;
            await db.SaveChangesAsync();
            return Results.NoContent();
        });

        propriedade.MapDelete("/{id}", async (int id, PropriedadeDb db) =>
        {
            if (await db.Propriedade.FindAsync(id) is Propriedade propriedade) {
                db.Propriedade.remover(propriedade);
                await db.SaveChangesAsync();
                return Results.NoContent();
            }

         return Results.NotFound();
        });



    }
}
