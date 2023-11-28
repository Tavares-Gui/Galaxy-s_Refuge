use master
go

if exists(select * from sys.databases where name = 'GalaxysRefugeDB')
	drop database GalaxysRefugeDB
go

create database GalaxysRefugeDB
go

use GalaxysRefugeDB
go


/*
create table Imagem(
	ID int identity primary key,
	Foto varbinary(MAX) not null
);
go
-- a
create table Usuario(
	ID int identity primary key,
	Nome varchar(80) not null,
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	ImagemID int references Imagem(ID)
);
go

create table Post(
	ID int identity primary key,
	UsuarioID int references Usuario(ID) not null,
	ImagemID int references Imagem(ID) not null
);
go
*/