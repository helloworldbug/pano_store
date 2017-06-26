using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getExhibitionRoamingList : System.Web.UI.Page
{
    RoamingClass roamingClass = new RoamingClass();
    RoamingConfig config = new RoamingConfig();
    
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            string tourName = "未知路线";
            if (Request.Params["tour"] != null)
            {
                tourName = Request.Params["tour"].ToString();
            }
            string exhibitions = "";
            if (Request.Params["exhibits"] != null)
            {
                exhibitions = Request.Params["exhibits"].ToString();
            }

            
            if (string.IsNullOrEmpty(exhibitions))
                return;

            string[] exhibits = exhibitions.Split(',');

            if (!string.IsNullOrEmpty(tourName))
            {


                for (int i = 0; i < exhibits.Length; i++)
                {
                    RoamingPlace place = new RoamingPlace();
                    place.placeName = exhibits[i];// tourName;
                    config.places.Add(place);
                    RoamingSence sence = GetRoamingList(exhibits[i]);
                    place.sences.Add(sence);
                }
            }
            roamingClass.roamingConfig = config;
            string responseStr = Newtonsoft.Json.JsonConvert.SerializeObject(roamingClass);
           
            HttpContext.Current.Response.Write(responseStr);
            HttpContext.Current.Response.End();
        }
    }

    private RoamingSence GetRoamingList2(string exhibition) {
        return null;
    }

    private RoamingSence GetRoamingList(string exhibition)
    {
       

        RoamingSence sence = new RoamingSence();
        sence.senceName = exhibition;

        foreach (KeyValuePair<string, string> str in StaticData.DicPlaceData)
        {
            tb_place placedata = Newtonsoft.Json.JsonConvert.DeserializeObject<tb_place>(str.Value);
            if (!string.IsNullOrEmpty(placedata.tb_place_desc) && !string.IsNullOrEmpty(placedata.tb_place_number) && placedata.tb_place_desc.Equals(exhibition))
            {
                RoamingPoint point = new RoamingPoint();
                point.placeid = (placedata.tb_place_id);
                point.panoid = placedata.tb_pano_id;
                sence.panos.Add(point);
            }
        }
        sence.panos.Sort(ComparePlaceDataByPlaceid);

        return sence;


        //return Newtonsoft.Json.JsonConvert.SerializeObject(halls);
    }
    private static int ComparePlaceDataByPlaceid(RoamingPoint x, RoamingPoint y)
    {
        return (y.placeid - x.placeid);
    }
}