﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using viviajar.Database;

#nullable disable

namespace viviajar.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20221104013050_initial migration")]
    partial class initialmigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("viviajar.Models.Cliente", b =>
                {
                    b.Property<int>("ClienteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("cpf")
                        .HasColumnType("longtext");

                    b.Property<string>("email")
                        .HasColumnType("longtext");

                    b.Property<string>("endereco")
                        .HasColumnType("longtext");

                    b.Property<string>("nome")
                        .HasColumnType("longtext");

                    b.Property<string>("telefone")
                        .HasColumnType("longtext");

                    b.HasKey("ClienteId");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("viviajar.Models.Destino", b =>
                {
                    b.Property<int>("DestinoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("cidade")
                        .HasColumnType("longtext");

                    b.Property<string>("descricao")
                        .HasColumnType("longtext");

                    b.Property<string>("estado")
                        .HasColumnType("longtext");

                    b.Property<string>("nome")
                        .HasColumnType("longtext");

                    b.HasKey("DestinoId");

                    b.ToTable("Destinos");
                });

            modelBuilder.Entity("viviajar.Models.Passagem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("ClienteId")
                        .HasColumnType("int");

                    b.Property<int?>("DestinoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.HasIndex("DestinoId");

                    b.ToTable("Passagens");
                });

            modelBuilder.Entity("viviajar.Models.Passagem", b =>
                {
                    b.HasOne("viviajar.Models.Cliente", "Cliente")
                        .WithMany("Passagens")
                        .HasForeignKey("ClienteId");

                    b.HasOne("viviajar.Models.Destino", "Destino")
                        .WithMany("Passagens")
                        .HasForeignKey("DestinoId");

                    b.Navigation("Cliente");

                    b.Navigation("Destino");
                });

            modelBuilder.Entity("viviajar.Models.Cliente", b =>
                {
                    b.Navigation("Passagens");
                });

            modelBuilder.Entity("viviajar.Models.Destino", b =>
                {
                    b.Navigation("Passagens");
                });
#pragma warning restore 612, 618
        }
    }
}
