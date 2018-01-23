using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AirportDashBoard.BAL;
using System.Diagnostics;

namespace AirportDashBoard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to Devops Kickstart Program";

            System.Reflection.Assembly assembly = System.Reflection.Assembly.GetExecutingAssembly();
            FileVersionInfo fvi = FileVersionInfo.GetVersionInfo(assembly.Location);
            string version = fvi.FileVersion;
            ViewBag.Version = version;
            return View("Index"); 
           // return View();
        }
        public ActionResult CheckCountValue(int i)
        {
            if (i < 20)
            {
                ViewBag.Message = "Your value is " + i.ToString();


                //business logic goes here  
            }
            else
            {
                throw (new Exception("Out of the Range"));
            }

            return View("Index");
        } 

        public ActionResult About()
        {
            return View();
        }
        public ActionResult Contact()
        {

            return View();
        }

        //added new parameter for date
        public JsonResult GetTrafficHandledJson(string Frequency,string fromdate)
        {
            DataTable table = new DataTable();
            //adding date parmeter
            //table = GetChartData.GetTrafficHandled(Frequency, "2015-06-17");
            //table = GetChartData.GetTrafficHandled(Frequency, fromdate);
            table = GenerateDelayStubb();
            var resul = Newtonsoft.Json.JsonConvert.SerializeObject(table);
            return Json(resul, JsonRequestBehavior.AllowGet);
            //return GetDetails();
        }

        private DataTable GenerateDelayStubb()
        {
            DataTable table = new DataTable();
            table.Columns.Add("MOVEMENTS", typeof(int));
            table.Columns.Add("TIMEPERIOD", typeof(int));
            table.Columns.Add("DELAY_MINS", typeof(int));


            // Here we add five DataRows.
            table.Rows.Add(47,  0,502);
            table.Rows.Add(37, 1, 645);
            table.Rows.Add(31, 2, 567);
            table.Rows.Add(44, 3, 632);
            table.Rows.Add(43, 4, 999);
            table.Rows.Add(52, 5, 677);
            table.Rows.Add(48, 6, 798);
            table.Rows.Add(55, 7, 921);
            table.Rows.Add(41, 8, 786);
            table.Rows.Add(38, 9, 393);
            table.Rows.Add(38, 10, 492);
            table.Rows.Add(38, 11, 521);
            table.Rows.Add(34, 12, 389);
            table.Rows.Add(37, 13, 503);
            table.Rows.Add(36, 14, 798);
            return table;
        }

        private DataTable GenerateSlotStubb()
        {
            DataTable table = new DataTable();
            table.Columns.Add("PRIORITY", typeof(int));
            table.Columns.Add("AIRLINE_GROUP", typeof(string));
            table.Columns.Add("SA_PERCENT", typeof(int));


            // Here we add five DataRows.
            table.Rows.Add(1, "APAC", 72);
            table.Rows.Add(1, "EMEA", 56);
            table.Rows.Add(1, "EUROPE", 48);
            
            return table;
        }

        //added new parameter for date
        public JsonResult GetKPI2SA_L1(string Frequency, string fromdate)
        {
            DataTable table = new DataTable();

            //adding date parmeter
          //table = GetChartData.GetKPI2L1(Frequency, "2015-06-20");
              //table = GetChartData.GetKPI2L1(Frequency, fromdate);
            table = GenerateSlotStubb();
            var resul = Newtonsoft.Json.JsonConvert.SerializeObject(table);
            return Json(resul, JsonRequestBehavior.AllowGet);

        }

        //Return Result Create KPI1 L2 Project DataTable
        //added new parameter for date
        public JsonResult GetTrafficHandledL2(string Frequency, string Direction,string fromdate)
        {

            DataTable table = new DataTable();
            //adding date parmeter
              //table = GetChartData.GetTrafficHandledL2(Frequency, Direction, "2015-06-17");
          table = GetChartData.GetTrafficHandledL2(Frequency, Direction, fromdate);
            var resul = Newtonsoft.Json.JsonConvert.SerializeObject(table);
            return Json(resul, JsonRequestBehavior.AllowGet);
        }

        //FOR KPI2 L2
        private static DataSet KPI2L2dataset;
        //Return Result Create KPI1 L2 Project Dataset
        public JsonResult GetKPI2L2(string Frequency)
        {

            KPI2L2dataset = GetChartData.GetKPI2L2Dataset(Frequency, "all");
            var resul = Newtonsoft.Json.JsonConvert.SerializeObject(KPI2L2dataset.Tables[0]);
            return Json(resul, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetKPI2L2Tables(int TableType,string direction)
        {
            //if (KPI2L2dataset == null)
            KPI2L2dataset = GetChartData.GetKPI2L2Dataset("Daily", direction);
                // KPI2L2dataset = GetChartData.GetKPI2L2Dataset("Daily", "All");
           var resul = Newtonsoft.Json.JsonConvert.SerializeObject(KPI2L2dataset, Newtonsoft.Json.Formatting.Indented);
           // var resul = Newtonsoft.Json.JsonConvert.SerializeObject(KPI2L2dataset.Tables[Convert.ToInt16(TableType)]);
            return Json(resul, JsonRequestBehavior.AllowGet);
        }

        public ActionResult KPI()
        {
            return View("~/Views/Home/AirportDelayKPI.cshtml");
        }
        public ActionResult slotAdherenceKPI()
        {
            return View("~/Views/Home/slotAdherenceKPI.cshtml");
        }

    }

}
