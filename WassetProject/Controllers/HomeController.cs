using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
using System.Web.Mvc;
using WassetPortal_DAL.Models;
using Excel = Microsoft.Office.Interop.Excel;
namespace WassetPortal.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult ReadFromExcel(string fileName)
        {
            //Create COM Objects. Create a COM object for everything that is referenced
            Excel.Application xlApp = new Excel.Application();
            Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(Server.MapPath("~/Uploads/" + fileName));
            Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[1];
            Excel.Range xlRange = xlWorksheet.UsedRange;

            int rowCount = xlRange.Rows.Count;
            int colCount = xlRange.Columns.Count;
            List<String> ListFromEcxel = new List<string>();
            //iterate over the rows and columns and print to the console as it appears in the file
            //excel is not zero based!!
            for (int i = 1; i <= rowCount; i++)
            {
                for (int j = 1; j <= colCount; j++)
                {
                    //new line
                    if (j == 1)
                        Console.Write("\r\n");

                    //write the value to the console
                    if (xlRange.Cells[i, j] != null && xlRange.Cells[i, j].Value2 != null)
                        ListFromEcxel.Add(xlRange.Cells[i, j].Value2.ToString() + "\t");
                    //add useful things here!   
                }
            }
            //cleanup
            GC.Collect();
            GC.WaitForPendingFinalizers();

            //rule of thumb for releasing com objects:
            //  never use two dots, all COM objects must be referenced and released individually
            //  ex: [somthing].[something].[something] is bad

            //release com objects to fully kill excel process from running in the background
            Marshal.ReleaseComObject(xlRange);
            Marshal.ReleaseComObject(xlWorksheet);

            //close and release
            xlWorkbook.Close();
            Marshal.ReleaseComObject(xlWorkbook);

            //quit and release
            xlApp.Quit();
            Marshal.ReleaseComObject(xlApp);
            return View();
        }

        [HttpPost]
        public string UploadFile()
        {
            try
            {
                var file = Request.Files;
                if (file.Count > 0)
                {
                    if (!Directory.Exists(Server.MapPath("~/Uploads")))
                    {
                        Directory.CreateDirectory(Server.MapPath("~/Uploads"));
                    }
                    file[0].SaveAs(Server.MapPath("~/Uploads/") + file[0].FileName);
                    return "Saved";
                }
                else
                {
                    return "failed";
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

        public DataTable ReadExcelFile(string sheetName = "Sheet1", string path = @"C:\Users\melga\Downloads\07.01.2022 (A).xlsx")
        {

            using (OleDbConnection conn = new OleDbConnection())
            {
                DataTable dt = new DataTable();
                string Import_FileName = path;
                string fileExtension = Path.GetExtension(Import_FileName);
                if (fileExtension == ".xls")
                    conn.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Import_FileName + ";" + "Extended Properties='Excel 8.0;HDR=YES;'";
                if (fileExtension == ".xlsx")
                    conn.ConnectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + Import_FileName + ";" + "Extended Properties='Excel 12.0 Xml;HDR=YES;'";
                using (OleDbCommand comm = new OleDbCommand())
                {
                    comm.CommandText = "Select * from [" + sheetName + "$A2:end]";
                    comm.Connection = conn;
                    using (OleDbDataAdapter da = new OleDbDataAdapter())
                    {
                        da.SelectCommand = comm;
                        da.Fill(dt);
                    }
                }
                return dt;
            }
        }

        public ActionResult InsertExcelData()
        {
            var dt = ReadExcelFile();
            bool flag = false;
            for (int i = 0; i <= dt.Columns.Count; i++)
            {
                try
                {
                    if (dt.Columns[i].ColumnName.Trim() == "CASE")
                        flag = true;
                    if (flag && dt.Columns[i].ColumnName.Trim() != "CASE")
                    {
                        dt.Columns.RemoveAt(i);
                        i = i - 1;
                    }
                }
                catch (Exception)
                {
                    break;
                }
            }
            dt.Columns.RemoveAt(0);
            dt.Columns["ID/IQAMA"].ColumnName = "ID_IQAMA";
            dt.Columns["CASE "].ColumnName = "_CASE";
            dt.Columns["HESN NO#"].ColumnName = "HESN_NO";
            dt = dt.Rows
                        .Cast<DataRow>()
                        .Where(row => !row.ItemArray.All(field => field is DBNull ||
                                                         string.IsNullOrWhiteSpace(field as string)))
                        .CopyToDataTable();
            WassetPortalDBEntities context = new WassetPortalDBEntities();
            var commandText = "exec USP_InsertPatientInfo @PatientsInfo";
            var name = new SqlParameter("@PatientsInfo", dt);
            name.TypeName = "dbo.PatientInfo";
            context.Database.ExecuteSqlCommand(commandText, name);
            return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
        }
    }
}