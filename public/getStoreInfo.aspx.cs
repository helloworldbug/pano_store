using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Net;
using System.IO;
public partial class getStoreInfo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            //string responseStr = string.Empty;
            //responseStr = getStoreInfoFromWebService();
            //string callBack = Discuz.Common.DNTRequest.GetString("callback");
            //HttpContext.Current.Response.Write(JsonP.Pack(callBack, responseStr));
            
            //以下是新api返回的数据接口
            string did = Discuz.Common.DNTRequest.GetString("did");
            string sid = Discuz.Common.DNTRequest.GetString("sid");
            string pid = Discuz.Common.DNTRequest.GetString("pid");
            did = did.Replace("-",".");
            string url="http://121.40.74.120/dcmp/ws/queryInventoryDetail?area_nbr="+did+"&warehouse_nbr="+sid+"&bin_nbr="+pid;
             
            string responseStr = string.Empty;
            responseStr = GetHtml(url); 
            string callBack = Discuz.Common.DNTRequest.GetString("callback");
            HttpContext.Current.Response.Write(JsonP.Pack(callBack, responseStr));
        }
    }

    private string getStoreInfoFromWebService()
    {
        
        string did = Discuz.Common.DNTRequest.GetString("did");
        string sid = Discuz.Common.DNTRequest.GetString("sid");
        string pid = Discuz.Common.DNTRequest.GetString("pid");
        if (string.IsNullOrEmpty(did) || string.IsNullOrEmpty(sid) || string.IsNullOrEmpty(pid))
                return "";
        return Newtonsoft.Json.JsonConvert.SerializeObject(new WhpWebServiceImpService().queryInventoryDetail(did, sid, pid,null,null));
         
    }

    private string GetHtml(string URL)
    {
        string responseFromServer = "";

        WebRequest request = WebRequest.Create(URL);
        request.Credentials = CredentialCache.DefaultCredentials;
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();
        Stream dataStream = response.GetResponseStream();
        StreamReader reader = new StreamReader(dataStream);
        responseFromServer = reader.ReadToEnd();
        reader.Close();
        dataStream.Close();
        response.Close();
        return responseFromServer;
    }
    }