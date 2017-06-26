using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getExhibitionList : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            
            string responseStr = string.Empty;
            responseStr = GetExhibitionList();
            HttpContext.Current.Response.Write(responseStr);
            HttpContext.Current.Response.End();
        }
    }



    private string GetExhibitionList() {
        List<string> addedExhibition = new List<string>();
        List<tb_place> placeDataList = new List<tb_place>();
        foreach (KeyValuePair<string, string> str in StaticData.DicPlaceData) {
             tb_place placedata = Newtonsoft.Json.JsonConvert.DeserializeObject<tb_place>(str.Value);
             placeDataList.Add(placedata);
             
        }
        placeDataList.Sort(ComparePlaceDataByAddTime);
        foreach(tb_place placedata in placeDataList){
            if (!string.IsNullOrEmpty(placedata.tb_place_desc)  )
             {
                 string exhibitionName = placedata.tb_place_desc.Trim();
                 if (!addedExhibition.Contains(exhibitionName))
                     addedExhibition.Add(exhibitionName);
             }
        }
        

        return Newtonsoft.Json.JsonConvert.SerializeObject(addedExhibition);
    }

    private static int ComparePlaceDataByAddTime(tb_place x, tb_place y) {
        return DateTime.Compare(y.addtime,x.addtime);
    }
}