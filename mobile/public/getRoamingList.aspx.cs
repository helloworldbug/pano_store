using System;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getRoamingList : System.Web.UI.Page
{
    static string configRoot = System.Web.HttpContext.Current.Server.MapPath("data/roaming/config");
    static string configSuffix = ".txt";
    
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            List<string> roamingList = getAllRoamingList();
            if (roamingList!=null)
                Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(roamingList));
        }
    }

    protected List<string> getAllRoamingList() {
        List<string> roamingList = new List<string>();
        DirectoryInfo TheFolder = new DirectoryInfo(configRoot);
        foreach (FileInfo f in TheFolder.GetFiles())
        {
            if (f.Name.EndsWith(configSuffix))
            {
                roamingList.Add(f.Name.Substring(0, f.Name.Length - configSuffix.Length));
            }

        }
        return roamingList;
    }



    
}