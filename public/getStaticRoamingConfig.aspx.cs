using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getStaticRoamingConfig : System.Web.UI.Page
{
    
    
    static string configRoot = System.Web.HttpContext.Current.Server.MapPath("data/roaming/config");

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

                RoamingClass roamingClass = new RoamingClass();
                RoamingConfig config = new RoamingConfig();
                for (int i = 0; i < exhibits.Length; i++)
                {

                    string filePath = configRoot + "/" + exhibits[i]+".txt";
                    using (System.IO.StreamReader reader = new System.IO.StreamReader(filePath))
                    {
                        try
                        {
                            string content = reader.ReadToEnd();
                            //content = Encoding.GetEncoding( "GBK").GetString( Encoding.UTF8.GetBytes(content)); 

                            RoamingClass configObj = Newtonsoft.Json.JsonConvert.DeserializeObject<RoamingClass>(content);
                            //HttpContext.Current.Response.Write(configObj.roamingConfig.places.Count);
                            foreach (RoamingPlace p in configObj.roamingConfig.places)
                            {
                                if (p != null)
                                {
                                    //HttpContext.Current.Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(p));
                                    config.places.Add(p);
                                }
                            }
                        }
                        catch (Exception eee)
                        {
                            HttpContext.Current.Response.Write(eee.ToString());
                        }
                        finally
                        {
                            reader.Dispose();
                            reader.Close();
                        }
                    }

                    
                }

                roamingClass.roamingConfig = config;
                string responseStr = Newtonsoft.Json.JsonConvert.SerializeObject(roamingClass);

                HttpContext.Current.Response.Write(responseStr);
                HttpContext.Current.Response.End();
            }
            
            
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