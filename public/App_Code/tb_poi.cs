using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
///tb_poi 的摘要说明
/// </summary>
public class tb_poi
{
    public int tb_poi_id;//
    public int tb_place_id;//
    public string tb_pano_id;//
    public int tb_parent_id;//
    public string tb_poi_number;
    public string tb_poi_name;//
    public string tb_poicontent_url;
    public int tb_poiactiontype_id;//
    public int tb_poiicondisplaytype_id;//
    public int tb_poistate_id;
    public int tb_poitype_id;
    public string tb_poi_desc;
    public string tb_poiicon_path;
    public int tb_poiicontype_id;
    public List<pt> tb_poi_coord;

	public tb_poi()
	{
		//
		//TODO: 在此处添加构造函数逻辑
		//
        
	}
}