var swfVersionStr = "10.2.0";
var xiSwfUrlStr = "playerProductInstall.swf";
var flashvars = { config: "config.xml" };
var params = {};
params.quality = "high";
params.bgcolor = "#ffffff";
params.allowscriptaccess = "sameDomain";
params.allowfullscreen = "true";
params.wmode = "Transparent";
var attributes = {};
attributes.id = "ASProject";
attributes.name = "ASProject";
attributes.align = "right";
swfobject.embedSWF(
                "ASProject.swf", "flashContent",
                "100%", "900px",
                swfVersionStr, xiSwfUrlStr,
                flashvars, params, attributes);
swfobject.createCSS("#flashContent", "display:block;text-align:left;magin-top:-15px;");



var serverPath = "/public/";//我本机服务代码端口8029

var servermappath = "/map/";
var pano = null;
var floorConfig = null;





var url = document.location.href;
var obj2;
var obj3;


function initFlashOverHand() {
    
    init();

    
    pano = document.getElementById("ASProject");

    pano.setRoadFlatHand("assets/swf/up.swf");
    //pano.showPanoPlace(panoid, mapid, 0, 0, 75);

    choosePano();

    obj2 = new Object();
    obj2.align = "top_left";
    obj2.scale_x = 0.5;
    obj2.scale_y = 0.5;
    obj2.margin_left = 10;
    obj2.margin_top = 12;
    pano.addBottomTool("assets/swf/fhouseController.swf", obj2);

    //startRoaming();
}


var configRoot = "../public/data/roaming/config/";
var roamingConfig = null;
var roamingPlaceids = null;
var speed = 10;
var isRoaming = false;
var isRoamingConfigLoaded = false;
/*
function isRoamingConfigLoaded() {
    if (roamingConfig == null || roamingPlaceids == null)
        return false;
    for (var i = 1; i < roamingPlaceids.length; i++) {
        if (mapid == roamingPlaceids[i])
            return true;
    }
    return false;
}*/

function nextPano() {

    var found = false;
    for (var j = 0; j < roamingConfig.places.length; j++) {
        for (var k = 0; k < roamingConfig.places[j].sences.length; k++) {
            for (var i = 0; i < roamingConfig.places[j].sences[k].panos.length; i++) {
                if (roamingConfig.places[j].sences[k].panos[i].placeid == mapid && roamingConfig.places[j].sences[k].panos[i].panoid == panoid) {
                    found = true;
                    var placeIndex = j;
                    var sencesIndex = k;
                    var panoIndex = i;

                    panoIndex++;
                    if (panoIndex >= roamingConfig.places[j].sences[k].panos.length) {
                        panoIndex = 0;
                        sencesIndex++;
                        if (sencesIndex >= roamingConfig.places[j].sences.length) {
                            sencesIndex = 0;
                            placeIndex++;
                            if (placeIndex >= roamingConfig.places.length) {
                                placeIndex = 0;
                            }
                        }
                    }
                    mapid = roamingConfig.places[placeIndex].sences[sencesIndex].panos[panoIndex].placeid;
                    panoid = roamingConfig.places[placeIndex].sences[sencesIndex].panos[panoIndex].panoid;
                    break;
                }
            }
        }
    }
    if (!found) {
        mapid = roamingConfig.places[0].sences[0].panos[0].placeid;
        panoid = roamingConfig.places[0].sences[0].panos[0].panoid;
    }
    
    startAutoPlay(mapid,panoid);


}

function runStageCompleteHand() {//转完后调用方法
    //alert("runStageCompleteHand");
    isRoaming = true;
    nextPano();

}


function autoPlayClick() {
    setTimeout(startRoaming, 100);
    //startRoaming();
    var btn = document.getElementById("autoPlayButton");
    //btn.src = "images/manual.png";
    btn.src = pauseAutoPlayIcon;
    btn.setAttribute("onclick", "stopPlayClick();");
}
function stopPlayClick() {
    pano.autoStopHand();
    var btn = document.getElementById("autoPlayButton");
    //btn.src = "images/auto.png";
    btn.src = startAutoPlayIcon;
    btn.setAttribute("onclick", "autoPlayClick();");
}
function startRoaming() {


    var isLoaded = (roamingConfig!=null);

    if (!isLoaded)
    //getDefaultRoamingConfigName();
        requestRoamingConfig(configRoot + configName);
    //else {

    pano.autoPlayHand(speed);
    isRoaming = true;
    //}

    }

    function stopPlayCompleteHand() {
        
        isRoaming = false;
        stopPlayClick();

    }

function startAutoPlay(placeid, panoid) {

    pano.showPanoPlace(panoid, placeid, 0, 0, 90);
    
    //pano.showPlayPanoHand(panoid, placeid, speed);   
}




function requestRoamingConfig(reqUrl) {
    $.ajax({
        type: "GET",
        dataType: "text",
        url: reqUrl,
        success: function (result) {


            var obj = eval('(' + result + ')');
            roamingConfig = obj.roamingConfig;
            //startAutoPlay(mapid, panoid);

           
        },
        error: function (result) {
            alert("load roaming config failed!");
        }
    });
}


function getDefaultRoamingConfigName() {
    var reUrl = "/public/getDefaultRoamingConfig.aspx?placeid=" + mapid;
    $.ajax({
        type: "post",
        async: false, //默认为异步：true
        dataType: "text",
        url: reUrl,

        success: function (msg) {
            configName = msg;
            if (configName != "") {
                roamingPlaceids = configName.split('_');
                var configUrl = configRoot + configName + ".txt";
                requestRoamingConfig(configUrl);
            }
        },
        error: function (msg) {
            alert("出现异常！");
        }
    });
}


function audioHand(val) {
    if (val == "1") {
        pano.setPlayAudioHand(true, "a.mp3");
    } else {
        pano.setPlayAudioHand(false, "a.mp3");
    }
}

function init() {
    pano = document.getElementById("ASProject");
    autoFitHeight();
}

var ba = true;
function mapviewcompletehand() {
}

var isPlaceChanged = true;
var lastMapid = -1;
//全景加载完成
function loadPanoComplete(json) {

    var obj = eval('(' + json + ')');
    isPlaceChanged = (lastMapid != obj.placeid);
    mapid = obj.placeid;
    panoid = obj.panoid;
    lastMapid = mapid;

    var str = "";

    if (isPlaceChanged) {
        isPlaceChanged = false;
       
        str = getplacemapdata(mapid);
        
        //var str2 = getplacemapdata2(mapid);
        var serverpath = servermappath + "/" + mapid + ".png";
        
        var img = new Image();
        img.src = serverpath;
        var h = 100;
        // 加载完成执行
        changeFloor(mapid);
        img.onload = function () {

            //h = (window.innerHeight - img.height) / 2 - 100;
            
            changeMap(serverpath, str);
        };
    }
    //alert("isRoaming="+isRoaming);
    if (isRoaming) {
        //pano.autoPlayHand(speed);
        autoPlayClick();
       
    }
}

function changeMap(mapPath,str) {
    pano.removeMapView("assets/plugswf/MapView1.swf");
    var pro = '[{"mapalpha":"1","visible":"true","isshowtool":"false","align":"top","marginTop":"0","marginBottom":"55","marginLeft":"50","callFunName":"MapViewCompleteHand","defaultIsClose":"false","showIcon":"false","openIcon":null,"closeIcon":null,"autoHide":false,"isXYZ":false,"isClipMap":false,"mapMaxWidth":"400","mapMaxHeight":"300","cacheCradarUrl":"","isGotoEffect":"false","iscachetype":"2","backimg":"","showCradarCircle":"true"}]';
    pano.addMapView("assets/plugswf/MapView1.swf", mapPath, str);
}

function getplacemapdata(placeid) {
    var reUrl = serverPath + "getplacemapdata.aspx?placeid=" + placeid;
    var mapinfos = "";
    $.ajax({
        type: "post",
        async: false, //默认为异步：true
        dataType: "json",
        url: reUrl,
       
        success: function (msg) {
            mapinfos += "[";
            for (var i = 0; i < msg.length; i++) {
                //var str='[{"x":"50","y":"50","panoid":"daolan2q","openicon":"null","closeicon":"null"} //最新的参数格式
                mapinfos += '{"x":"' + msg[i].x + '","y":"' + msg[i].y + '","panoid":"' + msg[i].panoid + '","openicon":"assets/icons/red.png","closeicon":"assets/icons/yellow.png"},';
            }
            mapinfos = mapinfos.substring(0, mapinfos.length - 1);
            mapinfos += "]"
        },
        error: function (msg) {
            alert("出现异常！");
        }
    });
    return mapinfos;

}







