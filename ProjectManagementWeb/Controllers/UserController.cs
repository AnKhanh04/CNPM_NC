using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectManagementWeb.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DuAn()
        {
            return View();
        }
        public ActionResult ThanhVien()
        {
            return View();
        }
        public ActionResult NhiemVu()
        {
            return View();
        }
        public ActionResult Lich()
        {
            return View();
        }
    }
}