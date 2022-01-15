using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WassetPortal.Helpers
{
    public class SqlCommandHelper
    {
        //private static DbCommand CreateCommand(DbContext context, string commandText, CommandType commandType, params SqlParameter[] parameters)
        //{
        //    var command = context.Database.GetDbConnection().CreateCommand();
        //    command.CommandText = commandText;
        //    command.CommandType = commandType;
        //    //command.Transaction = GetActiveTransaction();
        //    foreach (var parameter in parameters)
        //    {
        //        command.Parameters.Add(parameter);
        //    }
        //    return command;
        //}
    }
}