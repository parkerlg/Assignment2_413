using System;
using System.ComponentModel.DataAnnotations;

namespace ParkerGsFirstASPNETWebApp.Models
{
    public class PageModel
    {
        [Required]
        [Range(0, 100)]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int group_projects { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int exams { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
