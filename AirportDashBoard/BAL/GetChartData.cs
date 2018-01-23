using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using AirportDashBoard.DAL;

namespace AirportDashBoard.BAL
{
    public class GetChartData
    {

        public static DataTable GetTrafficHandled(string Frequency, string From = null, string To = null)
        {
            DataTable dt = new DataTable();
            var sqlParam = new SqlParameter[3];

            sqlParam[0] = new SqlParameter("@Frequency", Frequency)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            sqlParam[1] = new SqlParameter("@From", From)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[2] = new SqlParameter("@To", null)
            {
                SqlDbType = SqlDbType.DateTime
            };

            dt = SqlDBHelper.ExecuteQuery("sp_TrafficHandled_L1", sqlParam);
            return dt;
        }

        public static DataTable GetKPI2L1(string Frequency, string From = null, string To = null)
        {
            DataTable dt = new DataTable();
            var sqlParam = new SqlParameter[3];

            sqlParam[0] = new SqlParameter("@Frequency", Frequency)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            sqlParam[1] = new SqlParameter("@From", From)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[2] = new SqlParameter("@To", null)
            {
                SqlDbType = SqlDbType.DateTime
            };

            dt = SqlDBHelper.ExecuteQuery("sp_SA_L1", sqlParam);
            return dt;
        }
        public static DataTable GetTrafficHandledL2(string Frequency, string Direction, string From = null, string To = null)
        {
            DataTable ds = new DataTable();
            var sqlParam = new SqlParameter[4];

            sqlParam[0] = new SqlParameter("@Frequency", Frequency)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            sqlParam[1] = new SqlParameter("@From", From)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[2] = new SqlParameter("@To", null)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[3] = new SqlParameter("@Direction", Direction)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            ds = SqlDBHelper.ExecuteQuery("sp_TrafficHandled_L2_Test", sqlParam);
            return ds;
        }
        public static DataSet GetTrafficHandledL2Dataset(string Frequency, string Direction, string From = null, string To = null)
        {
            DataSet ds = new DataSet();
            var sqlParam = new SqlParameter[4];

            sqlParam[0] = new SqlParameter("@Frequency", Frequency)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            sqlParam[1] = new SqlParameter("@From", From)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[2] = new SqlParameter("@To", null)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[3] = new SqlParameter("@Direction", Direction)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            ds = SqlDBHelper.ExecuteQueryGetDataset("sp_TrafficHandled_L2", sqlParam);
            return ds;
        }
        public static DataSet GetKPI2L2Dataset(string Frequency, string Direction, string From = null, string To = null)
        {
            DataSet ds = new DataSet();
            var sqlParam = new SqlParameter[4];

            sqlParam[0] = new SqlParameter("@Frequecy", Frequency)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            sqlParam[1] = new SqlParameter("@From", From)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[2] = new SqlParameter("@To", null)
            {
                SqlDbType = SqlDbType.DateTime
            };
            sqlParam[3] = new SqlParameter("@Direction", Direction)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            ds = SqlDBHelper.ExecuteQueryGetDataset("sp_SATotal_L2_Test", sqlParam);
            return ds;
        }
        public static DataSet GetTrafficHandledDataset(string Frequency, string From = "", string To = "")
        {
            DataSet dt = new DataSet();
            var sqlParam = new SqlParameter[3];

            sqlParam[0] = new SqlParameter("@Frequency", Frequency)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            sqlParam[1] = new SqlParameter("@From", From)
            {
                SqlDbType = SqlDbType.NVarChar
            };
            sqlParam[2] = new SqlParameter("@To", To)
            {
                SqlDbType = SqlDbType.NVarChar
            };

            dt = SqlDBHelper.ExecuteQueryGetDataset("sp_TrafficHandled_L1", sqlParam);
            return dt;
        }
    }
}