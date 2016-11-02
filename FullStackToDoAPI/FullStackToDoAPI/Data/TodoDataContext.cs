using FullStackToDoAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FullStackToDoAPI.Data
{

    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("FullStackToDoDb")
        {

        }

        public IDbSet<Todo> Todoes { get; set; }
      
    }
}