using System;

	/// <summary>
	/// tb_place:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class tb_place
	{
		public tb_place()
		{}
		
		public int tb_place_id;
		public string tb_place_name;
		public string tb_pano_id;
		public string tb_place_number;
		public string tb_place_imagename;
		public string tb_place_imagepath;
		public string tb_place_desc;
		public int tb_placestate_id;
		public int tb_placestep_id;
		public int tb_placetype_id;
		public DateTime addtime= DateTime.Now;
		public int tb_project_id;
		
		

	}


