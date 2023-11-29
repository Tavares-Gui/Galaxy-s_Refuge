use master
go

if exists(select * from sys.databases where name = 'GalaxysRefugeDB')
	drop database GalaxysRefugeDB
go

create database GalaxysRefugeDB
go

use GalaxysRefugeDB
go

create table Usuario(
	ID int identity primary key,
	Nome varchar(80) not null,
	Cpf varchar(20) not null,
	Email varchar(20) not null,
	DataNasc date not null,
	Numero varchar(20) not null,
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	Adm bit not null,
);
go