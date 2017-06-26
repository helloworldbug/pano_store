using System;
using System.Collections.Generic;
using System.Web;

public class RoamingPoint {
    public string panoid;
    public int placeid;
}
public class RoamingSence
{
    public string senceName;
    public string senceImg;
    public List<RoamingPoint> panos=new List<RoamingPoint>();
}
public class RoamingPlace
{
    public string placeName;
    public List<RoamingSence> sences=new List<RoamingSence>();
}
/// <summary>
/// RoamingClass 的摘要说明
/// </summary>
public class RoamingConfig
{
    
    public List<RoamingPlace> places=new List<RoamingPlace>();
	public RoamingConfig()
	{
		//
		// TODO: 在此处添加构造函数逻辑
		//
        

	}
}

public class RoamingClass {
    public RoamingConfig roamingConfig;
}