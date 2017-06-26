using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class public_GetDefaultRoamingConfig : getRoamingList
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string placeid = "";
        if (Request.Params["placeid"] != null)
        {
            placeid = Request.Params["placeid"].ToString().Trim();
        } 
        List<string> roamingList = getAllRoamingList();
        foreach (string roamingConfigName in roamingList) {
            if (roamingConfigName.StartsWith("DEFAULT_")) { 
                string[] ps = roamingConfigName.Split('_');
                for (int i = 1; i < ps.Length; i++) {
                    if (placeid.Equals(ps[i].Trim())) {
                        Response.Write(roamingConfigName);
                        return;
                    }
                }
            }
        }
    }
}