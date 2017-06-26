using System;
using System.Collections.Generic;

using System.Web;

/// <summary>
///tb_poi 的摘要说明
/// </summary>
public class JsonP
{


    public JsonP()
	{
		//
		//TODO: 在此处添加构造函数逻辑
		//
        
	}
    public static string Pack(string function, string json) {
        if (string.IsNullOrEmpty(function))
        {
            return json;
        }
        
        return function + "([" + json + "])";
    }
}