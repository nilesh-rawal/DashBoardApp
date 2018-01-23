using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AirportDashBoard.DAL
{
    public class SqlDBHelper
    {

        public static DataTable ExecuteQuery(string storeProcedure, SqlParameter[] param)
        {
            try
            {
                var table = new DataTable();
                string connectionString = GetConnectionString();
                using (var con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = con.CreateCommand();
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = storeProcedure;
                    cmd.Parameters.AddRange(param);
                    cmd.CommandTimeout = 0;

                    if (con.State != ConnectionState.Open)
                    {
                        con.Open();
                    }

                    using (var da = new SqlDataAdapter(cmd))
                    {
                        da.Fill(table);
                    }
                }
                return table;
            }
            catch 
            {
               return  null;
                
            }
        }
        public static DataSet ExecuteQueryGetDataset(string storeProcedure, SqlParameter[] param)
        {
            try
            {
                var ds = new DataSet();
                string connectionString = GetConnectionString();
                using (var con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = con.CreateCommand();
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = storeProcedure;
                    cmd.Parameters.AddRange(param);
                    cmd.CommandTimeout = 0;

                    if (con.State != ConnectionState.Open)
                    {
                        con.Open();
                    }

                    using (var da = new SqlDataAdapter(cmd))
                    {
                        da.Fill(ds);
                    }
                }
                return ds;
            } 
            catch(Exception ex)
            {
                throw ex;
            }
        }
        private static string GetConnectionString()
        {

            string connectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

            return connectionString;
        }

    }
}