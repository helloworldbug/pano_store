var fov = 90;

function gotoPano(msg) {
    if (msg != "" && msg.length > 0) {
        panoid = msg[0].tb_pano_id; ;
        placeid = msg[0].tb_place_id;
        pano.showPanoPlace(panoid, placeid, msg[0].p, msg[0].t, fov);
    }
    else {
        alert("No Data Found!");
    }
}
function gotoPanoById(reUrl) {
    
    $.ajax({
        type: "get",
        async: false, //默认为异步：true
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jsonpReturn2",
        url: reUrl,

        success: function (msg) {
            gotoPano(msg);
        },
        error: function (msg) {
            alert("出现异常！");
        }
    });
}


function choosePano() {
    var reUrl = "";
    if (did != "" && sid !="" && pid!="") {
       
       reUrl = "/public/getPanoByPoi.aspx?did=" + did + "&sid=" + sid + "&pid=" + pid;
    }
    else if(did != "" && sid !=""){
        reUrl = "/public/getPanoByPlacemap.aspx?did=" + did + "&sid=" + sid;
    }
    else if (did != "") {
       reUrl = "/public/getPanoByPlace.aspx?did=" + did;
    }

    if (reUrl != "")
        gotoPanoById(reUrl);
    else
        gotoFloor(0);
}
function gotoFloor(floor) {

    panoid = floorPanoIds[floor];
    placeid = floorPlaceIds[floor];
    changeFloor(placeid);
   // alert("panoid:"+panoid+",placeid:"+placeid);
    pano.showPanoPlace(panoid, placeid, 0, 0, 90);

}

function changeFloor(floorPlaceId) {
    for (var i = 0; i < floorPlaceIds.length; i++) {
        var divObj = document.getElementById("floor" + i);

        if (floorPlaceIds[i] != floorPlaceId) {
            if (divObj != null && divObj != undefined)
                divObj.setAttribute("src", whitePrefix + i + ".png");
        }
        else {
            if (divObj != null && divObj != undefined)
                divObj.setAttribute("src", redPrefix + i + ".png");
            
        }
    }
}

function autoFitHeight() {

    var winHeight = 0;
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;

    
    if (pano != null)
        pano.height = (winHeight ) + "px";
    
}

window.onresize = function () {
    
    autoFitHeight();
        
    

}