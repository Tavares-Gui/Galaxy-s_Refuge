using System;
using System.Collections.Generic;

namespace DonOrgBack.Model;

public partial class Post
{
    public int Id { get; set; }

    public int UsuarioId { get; set; }

    public virtual Usuario Usuario { get; set; }
}