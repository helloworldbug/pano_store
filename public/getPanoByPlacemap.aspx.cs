using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getPanoByPlacemap : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            string responseStr = string.Empty;
            responseStr = getPlacemapData();
            string callBack = Discuz.Common.DNTRequest.GetString("callback");
            HttpContext.Current.Response.Write(JsonP.Pack(callBack,responseStr));
        }
    }

    private string getPlacemapData()
    {
        
        string did = Discuz.Common.DNTRequest.GetString("did");
        string sid = Discuz.Common.DNTRequest.GetString("sid");
        
        if (string.IsNullOrEmpty(did))
                return "";
        
        string id = did.ToLower().Trim()+"_"+sid.ToLower().Trim() ;

        foreach ( string data in StaticData.DicPlaceMapData.Values)
        
        {
            
            List<tb_placemap> placemaps = Newtonsoft.Json.JsonConvert.DeserializeObject<List<tb_placemap>>(data);

            foreach (tb_placemap placemap in placemaps)
            {
                try
                {
                    
                    if (placemap != null && id.Equals(placemap.panodesc.ToLower().Trim()))
                    {



                        PanoObj obj = new PanoObj();
                        obj.tb_place_id = placemap.placeid;
                        obj.tb_pano_id = placemap.panoid;
                        obj.p = placemap.dp;
                        obj.t = placemap.dt;
                        return Newtonsoft.Json.JsonConvert.SerializeObject(obj);
                    }
                }
                catch (Exception e) { }
            }
                
        }
        
        
        return "";
        
    }
}