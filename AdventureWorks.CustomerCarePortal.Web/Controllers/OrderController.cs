﻿using Microsoft.AspNetCore.Mvc;

namespace AdventureWorks.CustomerCarePortal.Web.Controllers
{
    public class OrderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
