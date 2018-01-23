using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AirportDashBoard.Controllers;
using System.Web.Mvc;

namespace AirportDashBoard.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
        }


        [TestMethod]
        public void CheckCountValueTest()
        {
            int count = 10;
            HomeController controller = new HomeController();
            ViewResult result = controller.CheckCountValue(count) as ViewResult;
            Assert.IsNotNull(result);
        }
       [TestMethod]
        public void IndexActionReturnsIndexView()
        {
            string expected = "Index";
            HomeController controller = new HomeController();

            var result = controller.Index() as ViewResult;

            Assert.AreEqual(expected, result.ViewName);
        }

    }
}
