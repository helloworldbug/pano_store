﻿(function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],u=/^([^?]*)\??/.exec(r)[1],a=t.parentNode,f=new XMLHttpRequest,l;f.onreadystatechange=function(){f.readyState===4&&l()};l=function(){var n=f.responseText;if(n&&t.parentNode&&(!f.status||f.status<400||f.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\//.test(n)?'url("'+s+n+'")':/^\//.test(n)?'url("'+o+n+'")':/^\?/.test(n)?'url("'+u+n+'")':'url("'+i+n+'")'});var r=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var l=document.createElement("style");l.textContent=n;l.media=t.media;l.disabled=t.disabled;l.setAttribute("data-href",t.getAttribute("href"));a.insertBefore(l,t);a.removeChild(t);l.media=t.media}};try{f.open("GET",r);f.send(null)}catch(n){if(typeof XDomainRequest!="undefined"){f=new XDomainRequest;f.onerror=f.onprogress=function(){};f.onload=l;f.open("GET",r);f.send(null)}}t.setAttribute("data-inprogress","")},styleElement:function(t){if(t.hasAttribute("data-noprefix"))return;var n=t.disabled;t.textContent=e.fix(t.textContent,!0,t);t.disabled=n},styleAttribute:function(t){var n=t.getAttribute("style");n=e.fix(n,!1,t);t.setAttribute("style",n)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);t("style").forEach(StyleFix.styleElement);t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,n){(e.fixers=e.fixers||[]).splice(n===undefined?e.fixers.length:n,0,t)},fix:function(t,n,r){for(var i=0;i<e.fixers.length;i++)t=e.fixers[i](t,n,r)||t;return t},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};(function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()})();(function(e){function t(e,t,r,i,s){e=n[e];if(e.length){var o=RegExp(t+"("+e.join("|")+")"+r,"gi");s=s.replace(o,i)}return s}if(!window.StyleFix||!window.getComputedStyle)return;var n=window.PrefixFree={prefixCSS:function(e,r,i){var s=n.prefix;n.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(e,t,n,r){return t+(n||"")+"linear-gradient("+(90-r)+"deg"}));e=t("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",e);e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",e);e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",e);if(n.properties.length){var o=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,s+"$1")},e)}if(r){e=t("selectors","","\\b",n.prefixSelector,e);e=t("atrules","@","\\b","@"+s+"$1",e)}e=e.replace(RegExp("-"+s,"g"),"-");e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix);return e},property:function(e){return(n.properties.indexOf(e)?n.prefix:"")+e},value:function(e,r){e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e);e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e);return e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var r=n.prefix+e;return t?StyleFix.camelCase(r):r}};(function(){var e={},t=[],r={},i=getComputedStyle(document.documentElement,null),s=document.createElement("div").style,o=function(n){if(n.charAt(0)==="-"){t.push(n);var r=n.split("-"),i=r[1];e[i]=++e[i]||1;while(r.length>3){r.pop();var s=r.join("-");u(s)&&t.indexOf(s)===-1&&t.push(s)}}},u=function(e){return StyleFix.camelCase(e)in s};if(i.length>0)for(var a=0;a<i.length;a++)o(i[a]);else for(var f in i)o(StyleFix.deCamelCase(f));var l={uses:0};for(var c in e){var h=e[c];l.uses<h&&(l={prefix:c,uses:h})}n.prefix="-"+l.prefix+"-";n.Prefix=StyleFix.camelCase(n.prefix);n.properties=[];for(var a=0;a<t.length;a++){var f=t[a];if(f.indexOf(n.prefix)===0){var p=f.slice(n.prefix.length);u(p)||n.properties.push(p)}}n.Prefix=="Ms"&&!("transform"in s)&&!("MsTransform"in s)&&"msTransform"in s&&n.properties.push("transform","transform-origin");n.properties.sort()})();(function(){function i(e,t){r[t]="";r[t]=e;return!!r[t]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"];var t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};n.functions=[];n.keywords=[];var r=document.createElement("div").style;for(var s in e){var o=e[s],u=o.property,a=s+"("+o.params+")";!i(a,u)&&i(n.prefix+a,u)&&n.functions.push(s)}for(var f in t){var u=t[f];!i(f,u)&&i(n.prefix+f,u)&&n.keywords.push(f)}})();(function(){function s(e){i.textContent=e+"{}";return!!i.sheet.cssRules.length}var t={":read-only":null,":read-write":null,":any-link":null,"::selection":null},r={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[];n.atrules=[];var i=e.appendChild(document.createElement("style"));for(var o in t){var u=o+(t[o]?"("+t[o]+")":"");!s(u)&&s(n.prefixSelector(u))&&n.selectors.push(o)}for(var a in r){var u=a+" "+(r[a]||"");!s("@"+u)&&s("@"+n.prefix+u)&&n.atrules.push(a)}e.removeChild(i)})();n.valueProperties=["transition","transition-property"];e.className+=" "+n.prefix;StyleFix.register(n.prefixCSS)})(document.documentElement);
 
 //victor added begin
  var curPlaceId = -1;
 	var curPlaceIndex=0,curSenceIndex=0,curPanoIndex=0;
	var roamingConfig = null;
	var curColumnIndex = 0;
	var panoSliderLen = 0;
 	
        var serverPath = "/public/";
        var servermappath = "/map/";

		
        //得到参数的函数
        function GetArgsFromHref(sHref, sArgName) {
            var args = sHref.split("?");
            var retval = "";
            if (args[0] == sHref) /*参数为空*/ {
                return retval; /*无需做任何处理*/
            }
            var str = args[1];
            args = str.split("&");
            for (var i = 0; i < args.length; i++) {
                str = args[i];
                var arg = str.split("=");
                if (arg.length <= 1) continue;
                if (arg[0] == sArgName)
                    retval = arg[1];
            }
            return retval;
        }

        var url = document.location.href;
        var panoid = "out016";
        var mapid = "147"; 
        var pano = null;

       
function initFlashOverHand(dp, dt, df) { 
        	var obj = new Object();
            
            pano = document.getElementById("ASProject");
          obj.align = "top_left";
          obj.scale_x = 0.41;
          obj.scale_y = 0.41;
          obj.margin_left = 10;
          obj.margin_top = 12;

           pano.addCommonTool("assets/swf/fhouseControllermy.swf", obj);
          startRoaming();
        	
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
                        mapinfos += '{"x":"' + msg[i].x + '","y":"' + msg[i].y + '","panoid":"' + msg[i].panoid + '"},';
                    }
                    mapinfos = mapinfos.substring(0, mapinfos.length - 1);
                    mapinfos += "]"
                },
                error: function (msg) {
                    alert("出现异常2！");
                }
            });
            return mapinfos;
        }
        var swfVersionStr = "10.2.0";
        var xiSwfUrlStr = "playerProductInstall.swf";
        var flashvars = { config: "../config.xml" };
        var params = {};
        params.quality = "high";
        params.bgcolor = "#ffffff";
        params.wmode = "transparent";
        params.allowscriptaccess = "sameDomain";
        params.allowfullscreen = "true";
        var attributes = {};
        attributes.id = "ASProject";
        attributes.name = "ASProject";
        attributes.align = "middle";
        attributes.wmode = "transparent";
        swfobject.embedSWF(
            "ASProject.swf", "flashContent",
            "100%", "100%",
            swfVersionStr, xiSwfUrlStr,
            flashvars, params, attributes);
        swfobject.createCSS("#flashContent", "display:block;text-align:left;");
        
        
 //victor added end.

        var roamingConfig = "roamingConfigmy";
        var act = 0;
//main自适应高度
        var exhibits = null;
        var tourName;
$(document).ready(function(){
	var inPlaceIndex = GetArgsFromHref(url,"placeindex");
	if(inPlaceIndex != "")
		curPlaceIndex = curColumnIndex = parseInt(inPlaceIndex);
	var inSenceIndex = GetArgsFromHref(url,"senceindex");
	if(inSenceIndex != "")
	    curSenceIndex = parseInt(inSenceIndex);
	var configName = GetArgsFromHref(url, "config");
	if (configName != "")
	    roamingConfig = configName;
	var inActStr = (GetArgsFromHref(url, "act"));
	if (inActStr != "") {
	    act = parseInt(inActStr);
	}
	tourName = (GetArgsFromHref(url, "tour"));
	
	exhibits = (GetArgsFromHref(url, "exhibits"));
	

$(".gbmy").click(function(){
		$(".mbbg").fadeOut()
		$(".helpbg").fadeOut();
	
		})
	$(".gb1").click(function () {
	    $(".mbbg").fadeOut()
	    $(".gqmb").fadeOut();
	    
	})
	$(".bzan").click(function(){
		$(".mbbg").fadeIn()
		$(".helpbg").fadeIn();})

var mainw=$(document.body).width();
$(".lineclick").css("left",(mainw/2-37)); 
loadRoamingConfig();
      });
$(window).resize(function(){  
var mainw=$(document.body).width();
$(".lineclick").css("left",(mainw/2-37)); 
//var mainh=$(document.body).height()-138;
//$(".main").css("height",mainh); 




}); 

function getPanoIndexInPlace(){
	  var panoIndexInPlace = curPanoIndex;
		for(var i=0; i< curSenceIndex; i++){
				panoIndexInPlace += roamingConfig.places[curPlaceIndex].sences[i].panos.length;
		}
		return panoIndexInPlace;
}

function getCurPlacePanoNum(){
		var totalPanos = 0 ;
				for(var i=0; i<roamingConfig.places[curPlaceIndex].sences.length;i++){
					totalPanos += roamingConfig.places[curPlaceIndex].sences[i].panos.length;
					
		}
		return totalPanos;
}

function changeSliderValue(percent){
	if(percent==null || percent == "" || percent > 100 || percent < 0){
		alert("invalid percent:"+percent);
		return;
	}
	panoSliderLen = 100.0 / getCurPlacePanoNum();
	var slider = $( "#slider" );	
	var panoIndexInPlace = getPanoIndexInPlace();
	var newValue = 1+ percent/100.0 *panoSliderLen +  panoSliderLen*panoIndexInPlace;	
	//console.warn("percent:"+percent+" panoSliderLen:"+panoSliderLen+" panoIndexInPlace:"+panoIndexInPlace+" newValue:"+newValue);
	slider.slider( "value", newValue );
}

function runStateHand(percent){
	//画面旋转过程.传出的进度百分比值
	//alert(percent);	
	changeSliderValue(percent);
}
var lastPlaceId = -1;

function setRoamingPosByPanoId(panoid){
	for(var i=0;i< roamingConfig.places[curPlaceIndex].sences.length;i++){
	for(var j=0;j< roamingConfig.places[curPlaceIndex].sences[i].panos.length;j++){
		if(roamingConfig.places[curPlaceIndex].sences[i].panos[j].panoid==panoid){
			curSenceIndex=i;
			curPanoIndex=j;
			return;
		}
	}

}
}

//flash callback when pano is loaded
function loadPanoComplete(jsonstr) {

    if (isAutoPlaying)
        pano.autoPlayHand(speed);


    var panojson = eval('(' + jsonstr + ')');
    
	setRoamingPosByPanoId(panojson.panoid);
	
	 //pano=document.getElementById("ASProject");
	//pano.setHelpTipHand("assets/swf/panoj.swf");
	//pano.setRoadFlatHand("assets/swf/cs3.swf"); 
    curPlaceId=panojson.placeid;
		if(curPlaceId != lastPlaceId){ 
        			var isFirst = (lastPlaceId == -1);
        				
        			lastPlaceId = curPlaceId;
        		    str = getplacemapdata(curPlaceId);
        		    
        		    lastPlaceId =  curPlaceId;
        		    var serverpath = servermappath + "/" + curPlaceId + ".png";
        		    var img = new Image();
        		    img.src = serverpath;
        		    var h = 100;
        		    // 加载完成执行
        		    
        		    img.onload = function () {

        		        h = (window.innerHeight - img.height) / 2 - 100;

        		        changeMap(serverpath, str);
        		    };
        		    /*if (isFirst) {
        		        var pro = '[{"isshowtool":"false","align":"top","marginTop":"0","marginBottom":"0","callFunName":"MapViewCompleteHand","defaultIsClose":"true","openIcon":"assets/img/mapopen.png","closeIcon":"assets/img/mapclose.png","autoHide":false,"isXYZ":false,"isClipMap":false,"mapMaxWidth":"366","mapMaxHeight":"288","cacheCradarUrl":"assets/icons/rd1.png","isGotoEffect":"false","iscachetype":"1"}]';
        		        pano.addMapView("assets/plugswf/MapView1.swf", serverpath, str, pro);
        		    }
        		    else
        		    	pano.changeMapViewHand(serverpath,str);
                        */
        		    
        		    pano.setScreenWindowHand(true);//全屏         		   
        				
     }
     pano.SetPanoRadarHand(pano.getPanoRadar());
 }

 function changeMap(mapPath, str) {
     pano.removeMapView("assets/plugswf/MapView1.swf");
     var pro = '[{"mapalpha":"0.3","visible":"true","isshowtool":"false","align":"bottom","marginTop":"50","marginBottom":"55","marginLeft":"50","callFunName":"MapViewCompleteHand","defaultIsClose":"false","showIcon":"false","openIcon":null,"closeIcon":null,"autoHide":false,"isXYZ":true,"isClipMap":false,"mapMaxWidth":"400","mapMaxHeight":"300","cacheCradarUrl":"assets/icons/rd1.png","isGotoEffect":"false","iscachetype":"2","backimg":"assets/icons/back.png","showCradarCircle":"true"}]';
     pano.addMapView("assets/plugswf/MapView1.swf", mapPath, str, pro);
 }

function runStageCompleteHand() {//转完后调用方法
    isAutoPlaying = true;
	nextPano();
				
}

        function startAutoPlay(placeid,panoid) {
					 
		        $(".bzan2").fadeIn();
                 var str = "";
        		 
        		 curPlaceId = placeid;

        		 pano.showPanoPlace(panoid, placeid, 0, 0, 75);
				 //pano.showPlayPanoHand(panoid,placeid,speed);
				 isAutoPlaying = true;
				 $("#bfq_ks").addClass("bfq_kson").removeClass("bfq_ks");	 
        	}
			
	var isAutoPlaying = true;
	var speed = 20;
	function stopPlayCompleteHand(){
			isAutoPlaying = false;
			$("#bfq_ks").addClass("bfq_ks").removeClass("bfq_kson");
	}
	function pauseOrRestartAutoPlay(){
		
	    if (isAutoPlaying) {
			//var pano=document.getElementById("ASProject");
			pano.autoStopHand();
			isAutoPlaying = false;
			$("#bfq_ks").addClass("bfq_ks").removeClass("bfq_kson");
				
		}
	    else {
			//startRoaming();
			//var pano=document.getElementById("ASProject");
			pano.autoPlayHand(speed);
			isAutoPlaying = true;
			$("#bfq_ks").addClass("bfq_kson").removeClass("bfq_ks");
		}
		
        

	}
	
	function nextPano(){
			if(curPanoIndex >= roamingConfig.places[curPlaceIndex].sences[curSenceIndex].panos.length-1){ // reach panos' end
					if(curSenceIndex >= roamingConfig.places[curPlaceIndex].sences.length-1){ // reach sences' end
						if(curPlaceIndex >= roamingConfig.places.length-1){ // reach places' end, start again
								curPlaceIndex = 0;
								curSenceIndex=0;
								curPanoIndex=0;
						}
						else{ // go to next place
								curPlaceIndex ++;
								curSenceIndex=0;
								curPanoIndex = 0;
								
						}
						curColumnIndex = curPlaceIndex;
						showColumn();
						showSencesPreview();
					}
					else{ // go to next sence
								curSenceIndex ++ ;
								curPanoIndex=0;
					}	
				}
				else{ // go to next pano
							curPanoIndex++;
				}
				startAutoPlay(roamingConfig.places[curPlaceIndex].sences[curSenceIndex].panos[curPanoIndex].placeid,roamingConfig.places[curPlaceIndex].sences[curSenceIndex].panos[curPanoIndex].panoid);
	}

	function startRoaming(){
		  pano=document.getElementById("ASProject"); // kenny
		if(pano==null || roamingConfig== null)
			setTimeout(startRoaming,100);
		else {
		    //alert(curPlaceIndex + "," + curSenceIndex + roamingConfig.places[0].sences.length);
			var placeid = roamingConfig.places[curPlaceIndex].sences[curSenceIndex].panos[curPanoIndex].placeid;
			var panoid= roamingConfig.places[curPlaceIndex].sences[curSenceIndex].panos[curPanoIndex].panoid;
			startAutoPlay(placeid,panoid);
		}
		}
		
		function showSencesPreview(){
			var ul = document.getElementById('scencesUl');
			var liList = ul.getElementsByTagName('li');
			var lilength =  liList.length;
			for (var i = lilength-1; i >=0; i--) {
    			ul.removeChild(liList[i]);
			}	
			for(var i=0; i< roamingConfig.places[curColumnIndex].sences.length;i++){
			    var li = document.createElement("li");
			    if (i == 0) {
			        li.id = "current";
			    }
				 	if(i==curSenceIndex)
				 		li.className="current1";
				 	var a = document.createElement("a");	
				 	a.href="javascript:changeSence("+i+")";
				 	a.style.height="90px";
				 	var img = document.createElement("img");
				 	if (roamingConfig.places[curColumnIndex].sences[i].senceImg != null) {
				 	    img.src = previewRoot + roamingConfig.places[curColumnIndex].sences[i].senceImg;
				 	} else {
				 	    img.src = "img/new/" + curColumnIndex + "_" + (i < 10 ? "0" : "") + (i + 1) + ".jpg";
				 	}
				 	var span = document.createElement("span");
				 	if(roamingConfig.places[curColumnIndex].sences[i].senceName!="")
				 	span.innerHTML=roamingConfig.places[curColumnIndex].sences[i].senceName;
				 	a.appendChild(span);
				 	a.appendChild(img);
				 	
				 	li.appendChild(a);
				 	ul.appendChild(li);
			}
		}
		
		
		function changePano(destPanoId, destPlaceId) {
		   
		    for (var i = 0; roamingConfig != null && i < roamingConfig.places.length; i++) {
		        for (var j = 0; j < roamingConfig.places[i].sences.length; j++) {
		            for (var k = 0; k < roamingConfig.places[i].sences[j].panos.length; k++) {
		                if (destPanoId == roamingConfig.places[i].sences[j].panos[k].panoid &&
                            destPlaceId == roamingConfig.places[i].sences[j].panos[k].placeid) {
		                    curSenceIndex = j;
		                    curPanoIndex = k;
 				            curPlaceIndex = i; 
		                    changeColumn(i);
		                    startAutoPlay(destPlaceId, destPanoId);
		                    
		                    break;
		                }
		            }
		        }
		    }
		}
		
		function changeSence(senceIndex){
			
			curPlaceIndex = curColumnIndex;
			curSenceIndex = senceIndex;	
			curPanoIndex =0;
			showSencesPreview();
			startRoaming();
		}
		function changeColumn(columnIndex){
			
				curColumnIndex = columnIndex;//光标所在的位置
				showColumn();
				showSencesPreview();
				var n = columnIndex * 80 + 50;
				var aa = document.all.scencesUl.offsetWidth;
				var az = (aa - 72) / 2;
				document.getElementById("linebox").style.left = (n - az) + "px";
                
		}
		
		function showColumn(){
			
			var columnTitle = document.getElementById("columnTitle");
			var liList = columnTitle.getElementsByTagName('li');
			var lilength =  liList.length;
			for (var i = lilength-1; i >=0; i--) {
    			columnTitle.removeChild(liList[i]);
			}	
			
			for(var i=0;i<roamingConfig.places.length;i++){
				var li = document.createElement("li");
				if(i==curColumnIndex)
					li.className="navson";
				li.id="columnTitle"+i;
				var a = document.createElement("a");
				a.href="javascript:changeColumn("+i+")";
				a.innerHTML = roamingConfig.places[i].placeName;
				li.appendChild(a);
				columnTitle.appendChild(li);
				}
		}
		var isColumnOpen=true;
		function closeOrOpenColumn(){
			if(isColumnOpen){
				isColumnOpen = false;
				$(".lineclick").animate({ bottom : '0px'}, 500);
				$(".linebg").animate({ bottom : '-140px'}, 500);
				$(".linebox").animate({ bottom : '-140px'}, 500);
				$("#lineclicka").addClass("lineclickb");
			//runStateHandtest();
     }else{
     		isColumnOpen = true;
      	$(".lineclick").animate({ bottom : '140px'}, 500);
				$(".linebg").animate({ bottom : '0px'}, 500);
				$(".linebox").animate({ bottom : '0px'}, 500);
				$("#lineclicka").removeClass("lineclickb");
			}
		}
		var page=0;
		function nextPage(){
		 var $parent = $(".v_show");
		 var $v_show = $(".v_content_list"); 
		 var $v_content = $(".v_content"); 
		 //var len = $v_show.find("li").length;
		 var len = roamingConfig.places[curColumnIndex].sences.length;
		 var v_width = $(".v_content_list ul li").width();
		 
		 var page_count = Math.ceil(len) ;   
		 if( !$v_show.is(":animated") ){    
			  if( page == page_count ){  
				$v_show.animate({ left : '0px'}, "slow"); 
				page = 1;
				}else{
					
				$v_show.animate({ left : '-='+v_width }, "slow");  
				page++;
			 }
		 }
		 $v_show.find("li").eq((page-1)).addClass("current1").siblings().removeClass("current1");
		}
		
		function prePage(){
			 var $parent = $(".v_show");
		 var $v_show = $(".v_content_list"); 
		 var $v_content = $(".v_content"); 
		 //var len = $v_show.find("li").length;
		 var len = roamingConfig.places[curColumnIndex].sences.length;
		 var v_width = $(".v_content_list ul li").width();
		 
		 var page_count = Math.ceil(len) ;   
		 if( !$v_show.is(":animated") ){    
		 	 if( page == 1 ){  
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
		 $v_show.find("li").eq((page-1)).addClass("current1").siblings().removeClass("current1");
		}
		

		function initSlider(){
			var slider = $( "#slider" );
			slider.slider({
			min: 1,
			max: 100,
			range: "min",
			value: 1,
			stop: function( event, ui ) {
			//$("#mastersdd").html( ui.value - 1);
				panoSliderLen = 100.0 / getCurPlacePanoNum();
			  var panoindex = parseInt(ui.value / panoSliderLen);
			  curPanoIndex = panoindex;
			  startRoaming();
			},
			start:function( event, ui ) {
				//var pano=document.getElementById("ASProject");
				pano.autoStopHand();
			}
			});

			showColumn();
			

		}

		//读取cookies 
		function getCookie(name) {
		    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		    if (arr = document.cookie.match(reg))

		        return unescape(arr[2]);
		    else
		        return null;
		}
		var cookieName = "VRoamingConfig";
		var configRoot = "../public/data/roaming/config/";
		var previewRoot = "../public/data/roaming/img/";
		var exhibitConfigUrl = serverPath + "/getStaticRoamingConfig.aspx?exhibits=";
		var tourRoot = "../public/data/roaming/tourLines/";
		function loadRoamingConfig() {
		    if (act == 4) {
		        var localConfig = getCookie("VExhibitionRoamingConfig");

		        var configObj = null;
		        if (localConfig != null && localConfig!="") {
		            var localTour = eval('(' + localConfig + ')');
		            var tourExhibits = "";
		            for (var i = 0; i < localTour.length; i++) {
		                tourExhibits += localTour[i] + (i < localTour.length - 1 ? "," : "");
		            }
		            var url = exhibitConfigUrl + tourExhibits + "&tour=" + tourName;
		            requestRoamingConfig(url);
		        }
		       
		    }
            else if (act == 3) {
       
                var url = tourRoot + tourName + ".txt";
        
                requestTourConfig(url);
            }
            else if (act == 2) {
                var url = exhibitConfigUrl+ exhibits+"&tour="+tourName;
                requestRoamingConfig(url);
            }
            else if (act == 1) {
                var localConfig = getCookie(cookieName);
        
                var configObj = null;
                if (localConfig != null) {
                    configObj = eval('(' + localConfig + ')');
                    roamingConfig = configObj.roamingConfig;
                    if (roamingConfig) {
                        initSlider();
                        changeColumn(curPlaceIndex);
                        startRoaming();


                    }
                }

            }
            else {
                //var reqUrl = "../data/roamingConfigmy.txt";
                var reqUrl = configRoot + roamingConfig + ".txt";
                requestRoamingConfig(reqUrl);
            }

}

var tourConfig = null;
function requestTourConfig(reqUrl) {
    $.ajax({
        type: "GET",
        dataType: "text",
        url: reqUrl,
        success: function (result) {

            
            tourConfig = eval('(' + result + ')');
            var exhibitions = tourConfig.exhibitionRoamingConfig.exhibitions;
           
            var exhibits = "";
            for (var i = 0; i < exhibitions.length; i++) {
                exhibits += exhibitions[i].exhibitionName + (i < exhibitions.length - 1 ? "," : "");
            }

            var url = exhibitConfigUrl + exhibits + "&tour=" + tourName;
            requestRoamingConfig(url);
        },
        error: function (result) {
            alert("load roaming config failed!");
        }
    });
}
function requestRoamingConfig(reqUrl) {
    $.ajax({
        type: "GET",
        dataType: "text",
        url: reqUrl,
        success: function (result) {

            
            var obj = eval('('+result+')');

            roamingConfig = obj.roamingConfig;
           
            if (tourConfig != null) {
                var exhibitions = tourConfig.exhibitionRoamingConfig.exhibitions;
                for (var i = 0; i < roamingConfig.places[0].sences.length; i++) {
                    for (var j = 0; j < exhibitions.length; j++) {
                        if (roamingConfig.places[0].sences[i].senceName == exhibitions[i].exhibitionName) {
                            roamingConfig.places[0].sences[i].senceImg = exhibitions[i].exhibitionImg;
                            break;
                        }
                    }
                }
            }
            //pano.setAutoLineHand(obj.roamingConfig);

            if (roamingConfig) {
                initSlider();
                changeColumn(curPlaceIndex);
                startRoaming();


            }
        },
        error: function (result) {
            alert("load roaming config failed!");
        }
    });
}