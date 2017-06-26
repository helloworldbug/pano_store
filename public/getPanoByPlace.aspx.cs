using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getPanoByPlace : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            string responseStr = string.Empty;
            responseStr = GetPlaceData();
            string callBack = Discuz.Common.DNTRequest.GetString("callback");
            HttpContext.Current.Response.Write(JsonP.Pack(callBack, responseStr));
        }
    }

    private string GetPlaceData()
    {
        
        string did = Discuz.Common.DNTRequest.GetString("did");
      

        if (string.IsNullOrEmpty(did))
                return "";
        string id = did.ToLower() ;
        foreach (string data in StaticData.DicPlaceData.Values) {
            tb_place place = Newtonsoft.Json.JsonConvert.DeserializeObject<tb_place>(data);
           
                
                try
                {

                    if (place != null && id.Equals(place.tb_place_number.ToLower()))
                    {
                        PanoObj obj = new PanoObj();
                        obj.tb_place_id = place.tb_place_id;
                        obj.tb_pano_id = place.tb_pano_id;

                        string panoinfostr = StaticData.DicPanoinfoData[obj.tb_place_id+"_"+obj.tb_pano_id];
                        tb_panoinfo panoinfo = Newtonsoft.Json.JsonConvert.DeserializeObject<tb_panoinfo>(panoinfostr);
                        obj.p = panoinfo.dp;
                        obj.t = panoinfo.dt;

                        return Newtonsoft.Json.JsonConvert.SerializeObject(obj);
                    }
                }
                catch (Exception e) { }
                
                
            }
        
        
        return "";
        
    }
}