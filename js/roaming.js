function gotoRoaming(obj) {
    if (obj != null) {
        var roamingConfig = document.getElementById("label_" + obj.id).innerHTML;
        //window.open("pano_my.html?config=" + roamingConfig, "_blank");
        window.open("pano_my.html?act=2&exhibits=" + roamingConfig, "_blank");
        //alert(roamingConfig);
    } else {
        //alert("go to customer's line");
        window.open("pano_my.html?act=1", "_blank");
    }
   
}
function gotoTour(obj) {
    if (obj != null) {
        var tourName = document.getElementById("label_" + obj.id).innerHTML;
        //alert("pano_my.html?act=3&tour=" + tourName);
        window.open("pano_my.html?act=3&tour=" + tourName, "_blank");
    } else {
        window.open("pano_my.html?act=4&tour=自定义路线", "_blank");
    }
}
function showTourList(tourList) {

    if (tourList.length > 0) {
        var listr = ""; //tb_place_desc
        for (var i = 0; i < tourList.length; i++) {

            listr += '<li>  <label for="tour' + i + '" class="treebg" id="label_tour' + i + '">' + tourList[i].tourName + '</label> <input type="checkbox" onclick="gotoTour(this);" id="tour' + i + '"/>';
            listr +='<ol>';
            var exhibits = tourList[i].exhibitionRoamingConfig["exhibitions"];
            for(var j=0;j<exhibits.length;j++){
                listr += '<li><img src="images/roaming/' + exhibits[j].exhibitionImg + '"/></li>';
            }
            listr += '</ol>';
            listr += '</li>';
            //listr += '<li ><span style="font-family: 微软雅黑; font-size: 13px; " ><a href="javascript:void(0);" onclick="listExhibitionHalls(this)">' + allexhibitinfo[i] + '</a></span></li><br/>';
        }
        
        document.getElementById("olRoamingList").innerHTML = listr;
    }
}

function getTourListData() {
    
    var reqUrl = serverPath + "getTourList.aspx";
    $.ajax({
        type: "GET",
        async: false,//默认是异步true，这里设置为同步false
        dataType: "text",
        url: reqUrl,
        success: function (result) {
            
            if (result != "") {
                var tourList = eval('(' + result + ')');
                showTourList(tourList);
            }
        },
        error: function (result) {
            alert("load tour list failed!");
        }
    });
}
function getRoamingListData() {
    //var reqUrl = serverPath + "getRoamingList.aspx";
    var reqUrl = serverPath + "getExhibitionList.aspx";
    $.ajax({
        type: "GET",
        async: false,//默认是异步true，这里设置为同步false
        dataType: "text",
        url: reqUrl,
        success: function (result) {
            
            if (result != "") {
                var roamingList = eval('(' + result + ')');
                //showRoamingList(roamingList);
            }
        },
        error: function (result) {
            alert("load roaming config failed!");
        }
    });

}

var localListName = "VExhibitionRoamingConfig";

function showLocalList() {
    var localListStr = getCookie(localListName);
    var localList = null;
    if (localListStr != null && localListStr != "") {
        localList = eval('('+localListStr+')');
    }
    var myid = "local";
    if (localList != null && localList.length > 0) {
        var listr = ""; //tb_place_desc
        for (var i = 0; i < localList.length; i++) {

            listr += '<li>  <label for="' + myid + i + '" class="treebg" id="label_' + myid + i + '">' + localList[i] + '</label> <input type="checkbox" onclick="deleteExhibition(this);" id="' + myid + i + '"/> </li>';
            //listr += '<li ><span style="font-family: 微软雅黑; font-size: 13px; " ><a href="javascript:void(0);" onclick="listExhibitionHalls(this)">' + allexhibitinfo[i] + '</a></span></li><br/>';
        }

        document.getElementById("selectedExhibitions").innerHTML = listr;
    }
    else {
        document.getElementById("selectedExhibitions").innerHTML = "";
    }
}

function deleteExhibition(obj) {
    var name = document.getElementById("label_" + obj.id).innerHTML;
    var localListStr = getCookie(localListName);
    var localList = null;
    if (localListStr != null && localListStr != "") {
        localList = eval('(' + localListStr + ')');
    }
    if (localList != null && localList.length > 0) {
        for (var i = 0; i < localList.length; i++) {
            if (localList[i] == name) {
                localList.pop(localList[i]);
                var configStr = JSON.stringify(localList);
                setCookie(localListName, configStr);
                alert("从自定义路线中成功移出展览："+name);
            }
        }
    }
    showLocalList();
}

function addExhibition(obj) {
    var name = document.getElementById("label_" + obj.id).innerHTML;
    
    var localListStr = getCookie(localListName);
    var localList = null;
    if (localListStr != null && localListStr != "") {
        localList = eval('(' + localListStr + ')');
    }
    if (localList == null) {
        localList = [];
    }
    
    localList.push(name);
    var configStr = JSON.stringify(localList);

    setCookie(localListName, configStr);
    showLocalList();
}
function getTourList() {

    var roamingDiv = document.getElementById("divRoamingList");
    if (roamingDiv.style.display != displayType) {
        hideAllInfo();
        roamingDiv.style.display = displayType;
        pano.width = flashMinWidth();
        document.getElementById("flashContainer").className = "partFlash";
        getTourListData();
        //getallexhibit("exhibitioninfo2", "olExhibitionList", "addExhibition");
       
    } else {

        roamingDiv.style.display = "none";
        pano.width = "100%";
        document.getElementById("flashContainer").className = "fullFlash";

    }
}

function setCookie(name, value) {
    var Days = 3000;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies 
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//删除cookies 
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
var cookieName = "VRoamingConfig";
var sampleRoamingConfig = '{"roamingConfig": {"places": [{"placeName": "自定义路线","sences": [{"senceName": "自定义路线",	"senceImg": "custom.jpg","panos": []}]}]}}';
function addRoaming() {
    
    var localConfig = getCookie(cookieName);
    var configObj = null;
    if (localConfig == null) {
        configObj = eval('(' + sampleRoamingConfig + ')');
    }
    else {
        configObj = eval('(' + localConfig + ')');
    }
   

    var current = eval('(' + '{"placeid":"' + mapid + '","panoid":"' + panoid + '"}' + ')');
    for (var i = 0; i < configObj.roamingConfig.places[0].sences[0].panos.length; i++) {
        if (mapid == configObj.roamingConfig.places[0].sences[0].panos[i].placeid && panoid == configObj.roamingConfig.places[0].sences[0].panos[i].panoid) {
            alert("当前场景已在自定义路线中，不能重复添加！");
            return;
        }
    }

    configObj.roamingConfig.places[0].sences[0].panos.push(current);
    
    var configStr = JSON.stringify(configObj);
    setCookie(cookieName, configStr);
    alert("成功将当前场景添加到自定义路线中！");
}

function delRoaming() {
    var localConfig = getCookie(cookieName);
    var configObj = null;
    if (localConfig == null) {
        alert("自定义路线还是空的！");
        return;
    }
    else {
        configObj = eval('(' + localConfig + ')');
    }
    var current = eval('(' + '{"placeid":"' + mapid + '","panoid":"' + panoid + '"}' + ')');
    for (var i = 0; i < configObj.roamingConfig.places[0].sences[0].panos.length; i++) {
        if (mapid == configObj.roamingConfig.places[0].sences[0].panos[i].placeid && panoid == configObj.roamingConfig.places[0].sences[0].panos[i].panoid) {
            configObj.roamingConfig.places[0].sences[0].panos.pop(current);
            var configStr = JSON.stringify(configObj);
            setCookie(cookieName, configStr);
            alert("当前场景已从自定义路线中移出！");
            return;
        }
    }
    alert("自定义路线中没有当前场景！");
}



