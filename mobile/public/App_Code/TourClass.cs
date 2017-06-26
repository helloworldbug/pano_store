using System;
using System.Collections.Generic;
using System.Web;

public class Exhibition {
    public string exhibitionName;
    public string exhibitionImg;
}

public class ExhibitionRoamingConfig
{
    public List<Exhibition> exhibitions = new List<Exhibition>();
}
/// <summary>
/// TourClass 的摘要说明
/// </summary>
public class TourClass
{
    public string tourName;
    public DateTime lastUpdateTime;
    public ExhibitionRoamingConfig exhibitionRoamingConfig;
    public bool isExsited;
}

