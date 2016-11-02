using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FullStackToDoAPI.Models
{
    public class Todo
    {
        
        // primary key
        [Key]
        public int ToDoId { get; set; }

        // additional columns
       
        public string Name { get; set; }
        public int Priority { get; set; }

    }
}