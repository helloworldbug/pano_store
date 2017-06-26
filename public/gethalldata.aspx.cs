using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
//using Discuz.Common;
using System.Runtime.Serialization.Json;
using Newtonsoft.Json.Converters;

class PlaceData { 
    
}
public partial class gethalldata : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            string hallid = "";
            if (Request.Params["hallid"] != null) { 
                hallid = Request.Params["hallid"].ToString().Trim();
            } 
            string responseStr = string.Empty;
            responseStr = GetHallData(hallid);
            HttpContext.Current.Response.Write(responseStr);
            HttpContext.Current.Response.End();
        }
    } 

    private string GetHallData(string hallid)
    { 
        string jsonStr = string.Empty; 
        jsonStr += "{\"hallData\":[";
        int num = 0;
        foreach (KeyValuePair<string, string> str in StaticData.DicPlaceData)
        { 
            tb_place placedata = Newtonsoft.Json.JsonConvert.DeserializeObject<tb_place>(str.Value);
            if (hallid.Equals(placedata.tb_place_number))
            {
                jsonStr += str.Value+",";
                num++;
            }
        } 
        if(num>0)
        jsonStr = jsonStr.Substring(0, jsonStr.Length - 1);
        jsonStr += "]}";
        return jsonStr;
    } 
}
 