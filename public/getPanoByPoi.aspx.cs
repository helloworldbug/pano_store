using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getPanoByPoi : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            string responseStr = string.Empty;
            responseStr = GetPoiData();
            string callBack = Discuz.Common.DNTRequest.GetString("callback");
            HttpContext.Current.Response.Write(JsonP.Pack(callBack, responseStr));
        }
    }

    private string GetPoiData()
    {
        
        string did = Discuz.Common.DNTRequest.GetString("did");
        string sid = Discuz.Common.DNTRequest.GetString("sid");
        string pid = Discuz.Common.DNTRequest.GetString("pid");
        if (string.IsNullOrEmpty(did) || string.IsNullOrEmpty(sid) || string.IsNullOrEmpty(pid))
                return "";
        //string id = did.Trim() + "_" + sid.Trim() + "_" + pid.Trim();
        did = did.Trim().ToLower();
        sid = sid.Trim().ToLower();
        pid = pid.Trim().ToLower();
        foreach (string data in StaticData.DicPoiData.Values) {
            List<tb_poi> poi = Newtonsoft.Json.JsonConvert.DeserializeObject<List<tb_poi>>(data);
            foreach (tb_poi p in poi)
            {
                string poi_desc = p.tb_poi_desc;
                try
                {
                    if (!string.IsNullOrEmpty(poi_desc))
                    {
                        
                        StoreObj obj = Newtonsoft.Json.JsonConvert.DeserializeObject<StoreObj>(poi_desc.Trim());
                        if (did.Equals(obj.did.ToLower()) && sid.Equals(obj.sid.ToLower()) && pid.Equals(obj.pid.ToLower()))
                        {
                            PanoObj result = new PanoObj();
                            result.tb_place_id = p.tb_place_id;
                            result.tb_pano_id = p.tb_pano_id;

                            result.p = p.tb_poi_coord[0].P;
                            result.t = p.tb_poi_coord[0].T;
                            return Newtonsoft.Json.JsonConvert.SerializeObject(result);
                        }
                    }
                }
                catch (Exception e) { }
                
                
            }
        }
        
        return "";
        
    }
}