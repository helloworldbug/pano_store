using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class getTourList : System.Web.UI.Page
{
    static string configRoot = System.Web.HttpContext.Current.Server.MapPath("data/roaming/tourLines");
    static string configSuffix = ".txt";
   
    static object lockObj = new object();
    //static Dictionary<string,TourClass> tourDic= new Dictionary<string,TourClass>();
    //static List<string> deletedTours = new List<string>();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            bool isDicChanged = false; 
            Dictionary<string, TourClass> cachedDic = (Dictionary<string, TourClass>)Cache["tourDic"];

            Dictionary<string, TourClass> tourDic = null;
            lock (lockObj)
            {
                if (cachedDic == null)
                {
                    tourDic = new Dictionary<string, TourClass>();
                }
                else {
                    tourDic = new Dictionary<string, TourClass>(cachedDic);
                }
            }
            DirectoryInfo TheFolder = new DirectoryInfo(configRoot);
            foreach(TourClass tour in tourDic.Values){
                tour.isExsited = false;
            }
            foreach (FileInfo f in TheFolder.GetFiles())
            {
                if (f.Name.EndsWith(configSuffix))
                {
                    string tourName = f.Name.Substring(0, f.Name.Length - configSuffix.Length);
                   
                    if (tourDic.ContainsKey(tourName)) {
                        TourClass aTour = tourDic[tourName];
                        aTour.isExsited = true;
                        if (DateTime.Compare(f.LastWriteTime, aTour.lastUpdateTime) <= 0) {                            
                            continue;
                        }
                    }

                    
                    string filePath = configRoot + "/" + f.Name;
                    using (System.IO.StreamReader reader = new System.IO.StreamReader(filePath))
                    {
                        try
                        {
                            string content = reader.ReadToEnd();
                            //content = Encoding.GetEncoding( "GBK").GetString( Encoding.UTF8.GetBytes(content)); 

                            TourClass tour = Newtonsoft.Json.JsonConvert.DeserializeObject<TourClass>(content);
                            tour.tourName = tourName;
                            tour.lastUpdateTime = f.LastWriteTime;
                            tour.isExsited = true;
                            tourDic.Add(tourName, tour);
                            isDicChanged = true;
                        }catch(Exception eee){
                        
                        }finally{
                            reader.Dispose();
                            reader.Close();
                        }
                    }
                }
            }
            List<TourClass> temp = new List<TourClass>(tourDic.Values);
            for (int i=0;i<temp.Count;i++)
            {
                TourClass tour = temp[i];
                if (!tour.isExsited) {
                    tourDic.Remove(tour.tourName);
                    
                }
            }
            if (isDicChanged)
            {
                lock(lockObj){
                    Cache["tourDic"] = tourDic;
                }
            }

            Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(tourDic.Values));
           
        }
    }


    
}