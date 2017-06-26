using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getExibitionHalls : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //根据展厅编码找到同展览的其它展厅 参数：tb_place_number  条件：与tb_place_number 的tb_place_desc 相同的展厅集合

        if (!IsPostBack)
        {
            string exhibition = "";
            if (Request.Params["exhibit"] != null)
            {
                exhibition = Request.Params["exhibit"].ToString();
            }
            string responseStr = string.Empty;
            responseStr = GetHalls(exhibition);
            HttpContext.Current.Response.Write(responseStr);
            HttpContext.Current.Response.End();
        } 
    }

    private string GetHalls(string exhibition)
    {
       
        List<tb_place> halls = new List<tb_place>();
        
        foreach (KeyValuePair<string, string> str in StaticData.DicPlaceData)
        {
            tb_place placedata = Newtonsoft.Json.JsonConvert.DeserializeObject<tb_place>(str.Value);
            if (!string.IsNullOrEmpty(placedata.tb_place_desc) && !string.IsNullOrEmpty(placedata.tb_place_number) && placedata.tb_place_desc.Equals(exhibition))
            {
                
                halls.Add(placedata);
            }
        }
        
        



        return Newtonsoft.Json.JsonConvert.SerializeObject(halls);
    } 


}