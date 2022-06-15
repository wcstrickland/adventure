using Microsoft.AspNetCore.Mvc;

namespace AdventureWorks.CustomerCarePortal.Web.Controllers
{
    public class Customer : Controller
    {


        
        
        public IActionResult Index()
        {
            return View();
        }
    }
}
