var totalData = null;
var totalIds = null;

function closeStoreInfoFrame() {
    $("#storeInfoDiv").hide();
}
function importData(data) {
    var list = [];
    totalIds = new Array();
    if (data != null) {

        for (var i = 0; i < data.length; i++) {

            if (list[data[i].whpNbr] == undefined) {
                totalIds.push(data[i].whpNbr);
                list[data[i].whpNbr] = data[i];
            }
            else {
                list[data[i].whpNbr].whpNum += data[i].whpNum;
                
            }
        }
    }
    totalData = list;
    


}


function showStoreInfo(i) {

    var data = totalData;
    var key = totalIds[i];
   
    $("#didValue").html(data[key].areaNbr);
    $("#sidValue").html(data[key].wareHouseNbr);
    $("#pidValue").html(data[key].bingNbr);
    $("#countDateValue").html(data[key].countDate);
    $("#batchIdValue").html(data[key].batchNbr);
    $("#whpNbrValue").html(data[key].whpNbr);
    $("#whpNumValue").html(data[key].whpNum);
    $("#unitValue").html(data[key].unit);
    $("#areaNameValue").html(data[key].areaName);
    $("#storeNameValue").html(data[key].wareHouseName);
    $("#whpNameValue").html(data[key].whpName);
    $("#whpNickNameValue").html(data[key].whpNickName);

    if (data.length > 1) {
        var content = "";
        for (var j = 0; j < totalIds.length; j++) {
            content += "<a " + (j == i ? "color='red' " : "") + " href='javascript:showStoreInfo("+j+");'>" + (j + 1) + "</a>";
            if (j < totalIds.length - 1) {
                content += "&nbsp";
            }
        }
        $("#pages").html(content)
           
    }  
}   

function showStoreInfoFrame(data) {
    importData(data);
    showStoreInfo(0);
    $("#storeInfoDiv").show();
    setDivCenter(document.getElementById("storeInfoDiv"),1);
    
}
function setDivCenter(obj, topHeight) {
    var winWidth, winHeight;
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    if (document.body.scrollWidth && document.body.scrollWidth > winWidth)
        winWidth = document.body.scrollWidth;
    // 获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;

    if (document.body.scrollHeight && document.body.scrollHeight > winHeight)
        winHeight = document.body.scrollHeight;

    
    obj.style.left = (winWidth - obj.offsetWidth) / 2 + "px";
    obj.style.top = (winHeight - obj.offsetHeight - topHeight) / 2 + "px";

}
function popHand(jsonStr) {
    
    var obj = eval('(' + jsonStr + ')');

    if (obj.tb_poi_number == "showData" && obj.tb_poi_desc != "") {

        
        
        var obj2 = eval('(' + obj.tb_poi_desc + ')');
        $.ajax({
            type: "get",
            async: false,
            url: "/public/getStoreInfo.aspx",
            dataType: "jsonp",
            data: "did=" + obj2.did + "&sid=" + obj2.sid + "&pid=" + obj2.pid,
            jsonp: "callback",
            jsonpCallback: "jsonpReturn2",
            success: function (data) {

                if (data.length > 0) {
                    if (data[0].retCode == 0) {
                        showStoreInfoFrame(data[0].retData);
                    }
                    else {
                        alert(data[0].retInfo);
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                dataStr = '[{"retData":[{"areaName":"中远化工物流有限公司","areaNbr":"91310000717851830U.01","batchNbr":"20161112//100","bingNbr":"D3","countDate":"2016-11-20T00:00:00+08:00","countDateSpecified":true,"unit":"公斤","wareHouseName":"中远1号仓库","wareHouseNbr":"301A","whpName":"甲苯二异氰酸酯","whpNbr":"1019","whpNickName":"二异氰酸甲苯酯；TDI","whpNum":250.0,"whpNumSpecified":true,"whpProNbr":"V0/SC913100007109365242/IN1017/PN00241990/UN2078/CAS26471-62-5/PK1AK250/BN20161112//100/IT10015/CKCB93"},{"areaName":"中远化工物流有限公司","areaNbr":"91310000717851830U.01","batchNbr":"20161112//100","bingNbr":"D3","countDate":"2016-11-20T00:00:00+08:00","countDateSpecified":true,"unit":"公斤","wareHouseName":"中远1号仓库","wareHouseNbr":"301A","whpName":"甲苯二异氰酸酯","whpNbr":"1017","whpNickName":"二异氰酸甲苯酯；TDI","whpNum":250.0,"whpNumSpecified":true,"whpProNbr":"V0/SC913100007109365242/IN1017/PN00241990/UN2078/CAS26471-62-5/PK1AK250/BN20161112//100/IT10015/CKCB93"},{"areaName":"中远化工物流有限公司","areaNbr":"91310000717851830U.01","batchNbr":"20161112//100","bingNbr":"D3","countDate":"2016-11-20T00:00:00+08:00","countDateSpecified":true,"unit":"公斤","wareHouseName":"中远1号仓库","wareHouseNbr":"301A","whpName":"甲苯二异氰酸酯","whpNbr":"1017","whpNickName":"二异氰酸甲苯酯；TDI","whpNum":250.0,"whpNumSpecified":true,"whpProNbr":"V0/SC913100007109365242/IN1017/PN00241990/UN2078/CAS26471-62-5/PK1AK250/BN20161112//100/IT10014/CKCB93"},{"areaName":"中远化工物流有限公司","areaNbr":"91310000717851830U.01","batchNbr":"20161112//100","bingNbr":"D3","countDate":"2016-11-20T00:00:00+08:00","countDateSpecified":true,"unit":"公斤","wareHouseName":"中远1号仓库","wareHouseNbr":"301A","whpName":"甲苯二异氰酸酯","whpNbr":"1017","whpNickName":"二异氰酸甲苯酯；TDI","whpNum":250.0,"whpNumSpecified":true,"whpProNbr":"V0/SC913100007109365242/IN1017/PN00241990/UN2078/CAS26471-62-5/PK1AK250/BN20161112//100/IT10013/CKCB93"},{"areaName":"中远化工物流有限公司","areaNbr":"91310000717851830U.01","batchNbr":"20161112//100","bingNbr":"D3","countDate":"2016-11-20T00:00:00+08:00","countDateSpecified":true,"unit":"公斤","wareHouseName":"中远1号仓库","wareHouseNbr":"301A","whpName":"甲苯二异氰酸酯","whpNbr":"1017","whpNickName":"二异氰酸甲苯酯；TDI","whpNum":250.0,"whpNumSpecified":true,"whpProNbr":"V0/SC913100007109365242/IN1017/PN00241990/UN2078/CAS26471-62-5/PK1AK250/BN20161112//100/IT10012/CKCB93"},{"areaName":"中远化工物流有限公司","areaNbr":"91310000717851830U.01","batchNbr":"20161112//100","bingNbr":"D3","countDate":"2016-11-20T00:00:00+08:00","countDateSpecified":true,"unit":"公斤","wareHouseName":"中远1号仓库","wareHouseNbr":"301A","whpName":"甲苯二异氰酸酯","whpNbr":"1017","whpNickName":"二异氰酸甲苯酯；TDI","whpNum":250.0,"whpNumSpecified":true,"whpProNbr":"V0/SC913100007109365242/IN1017/PN00241990/UN2078/CAS26471-62-5/PK1AK250/BN20161112//100/IT10011/CKCB93"}],"retCode":0,"retInfo":"OK"}]';
                var data = eval('(' + dataStr + ')');
                showStoreInfoFrame(data[0].retData);
            }
        }); 
    }
    else if (obj.tb_poi_number == "openLink") {
        if (obj.tb_poi_desc != "") {
            window.open(obj.tb_poi_desc, "_blank");
        }
    } else if (obj.tb_poi_number == "showHD") {
        var tail = "";
        if (obj.tb_poi_desc != "") {
            tail = "?imgName=" + obj.tb_poi_desc;
        }
        window.open("http://192.168.0.149:9080/hd.html" + tail);
    }
    else if (obj.tb_poi_number == "enterPano") {
        var obj2 = eval('(' + obj.tb_poi_desc + ')');
        showpano(obj2.placeid, obj2.panoid);
    }
    else if (obj.tb_poi_number == "enterHall") {

        if (yearmonthday == "") {
            var myDate = new Date();
            var year = myDate.getFullYear();
            var month = myDate.getMonth() + 1;
            var data = myDate.getDate();
            yearmonthday = year + "-" + month + "-" + data;
        }
        var url = "http://" + server + "/ExhibitionProject/dataInteface_byExhibitAndRoomFindPlaceid.action"
        $.ajax({
            type: "get",
            async: false,
            url: url,
            dataType: "jsonp",
            data: "time=" + yearmonthday + "&roomId=" + obj.tb_poi_desc,
            jsonp: "callbackparam",
            success: function (data) {

                if (data == null || data == "") {
                    alert("该展厅在" + yearmonthday + "没有展览！");
                }
                else {
                    var reUrl = "/public/getpoilist.aspx?placeid=" + data[0].placeid + "&poiName=" + obj.tb_poi_name;
                    $.ajax({
                        type: "post",
                        async: false, //默认为异步：true
                        dataType: "json",
                        url: reUrl,

                        success: function (msg) {

                            var nextPanoId = null;
                            if (msg != "") {
                                nextPanoId = msg[0].tb_pano_id;
                            }

                            showpano(data[0].placeid, nextPanoId);
                        },
                        error: function (msg) {
                            alert("出现异常！");
                        }
                    });

                }
            }
        });
    }
}