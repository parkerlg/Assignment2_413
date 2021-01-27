using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParkerGsFirstASPNETWebApp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ParkerGsFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Page")]
        public IActionResult Page ()
        {
            return View();
        }

        [HttpPost("Page")]
        public IActionResult Page (PageModel model)
        {
            return View();
        }
    }
}
