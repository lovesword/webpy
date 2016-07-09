var startImg = '/static/images/baidu_map_marker.png';
var endImg = 'baidu_static/img/endPoint.png';
var carImg = "baidu_static/img/car+.png";
var findImg = '/static/images/baidu_map_find_marker.png';
// connect

function find_point_by_msg(msg){
        baidumapdrive.findPoint(msg);
}

function initPolylineMarker(){
    baidumapdrive.map.clearOverlays();
    baidumapdrive.map.addContextMenu(baidumapdrive.menu);
    if(baidumapdrive.beginPoint){
        baidumapdrive.map.addOverlay(baidumapdrive.beginMarker);
    }
    if(baidumapdrive.endPoint){
        baidumapdrive.map.addOverlay(baidumapdrive.endMarker);
    }
    if(baidumapdrive.beginPoint && baidumapdrive.endPoint){
        drv.search(baidumapdrive.beginPoint, baidumapdrive.endPoint);
    }
}

function setMenuStyle(){
    $(".MenuItemP").parent().parent().parent().css({"width":"70px", "height":"33px"});
    $(".MenuItemP").parent().parent().css({"width":"70px", "height":"30px"});
    $(".MenuItemP").parent().parent().css({"margin-top":"-6px"});
}

var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
function bd2gg(bd_lat, bd_lng){
    var gg_lat = null;
    var gg_lng = null;
    var x = bd_lng - 0.0065;
    var y = bd_lat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    gg_lng = z * Math.cos(theta);
    gg_lat = z * Math.sin(theta);
    return "[" + gg_lat + ", " + gg_lng + "]";
}

function gg2bd(gg_lat, gg_lng){
    var bd_lat = null;
    var bd_lng = null;
    var x = gg_lng;
    var y = gg_lat;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    bd_lng = z * Math.cos(theta) + 0.0065;
    bd_lat = z * Math.sin(theta) + 0.006;
    return [bd_lat, bd_lng];
}

var baidumapdrive = {
    map: null,

    beginPoint: null,
    endPoint: null,
    tmpMenuItemPoint: null,
    beginMarker: null,
    endMarker: null,
    findmarker: null,
    lushu: null,
    startPoint: new BMap.Point(114.068933, 22.548462),

    changeSpeedPause: true,

    menu: new BMap.ContextMenu(),
    go_status: "stoped",

    gps_data: null,
    newspoint:[],

    txtMenuItem: [
        {
            text:'<p class="MenuItemPA MenuItemP" id="MenuItem">标记坐标</p>',
            callback:function(){
                baidumapdrive.beginPoint = baidumapdrive.tmpMenuItemPoint;
                baidumapdrive.beginMarker.setPosition(baidumapdrive.beginPoint);
                initPolylineMarker();
                $(window.parent.document).find("#latitude").val(baidumapdrive.tmpMenuItemPoint.lat);
                $(window.parent.document).find("#longitude").val(baidumapdrive.tmpMenuItemPoint.lng);
                $("#this_lng").val(baidumapdrive.tmpMenuItemPoint.lng);
                $("#this_lat").val(baidumapdrive.tmpMenuItemPoint.lat);
            }
        }
    ],

    webSocketSend: function(type, msg){
        var sendMsgObj = {"type": type, "msg": msg};
        var sendMsgStr = JSON.stringify(sendMsgObj);
        this.globalMapStatus.mapmsgAction(sendMsgObj)
    },

    sendgps: function (){
        if(baidumapdrive.go_status == "started" && baidumapdrive.gps_data){
            this.globalMapStatus.gpsAction(baidumapdrive.gps_data);
        }
        setTimeout("baidumapdrive.sendgps()", 300);
    },

    init: function(parent) {
        this.globalMapStatus = parent;
    
        setTimeout("baidumapdrive.sendgps()", 300);

        try{
            this.map = new BMap.Map('map_canvas');
        }
        catch (err) {
            console.log(err);
        }

        this.map.enableScrollWheelZoom();
        // this.map.centerAndZoom(baidumapdrive.startPoint, 17);

     
        for(var i=0; i < baidumapdrive.txtMenuItem.length; i++){
            baidumapdrive.menu.addItem(new BMap.MenuItem(baidumapdrive.txtMenuItem[i].text,baidumapdrive.txtMenuItem[i].callback,100));
        }
        baidumapdrive.menu.addEventListener("open", function(e){
            setMenuStyle();
            baidumapdrive.tmpMenuItemPoint = e.point;
        })
        this.map.addContextMenu(baidumapdrive.menu);

        baidumapdrive.beginMarker = new BMap.Marker(baidumapdrive.startPoint);
        baidumapdrive.beginMarker.setIcon(new BMap.Icon(startImg, new BMap.Size(24, 24),{anchor : new BMap.Size(10,15)}))
        baidumapdrive.beginMarker.disableDragging();
        baidumapdrive.beginMarker.addEventListener("dragend", function(e){
             baidumapdrive.beginPoint = e.point;
             initPolylineMarker();
        })    
        baidumapdrive.endMarker = new BMap.Marker(baidumapdrive.startPoint);
        baidumapdrive.endMarker.setIcon(new BMap.Icon(endImg, new BMap.Size(24, 24),{anchor : new BMap.Size(10, 15)}))
        baidumapdrive.endMarker.disableDragging();
        baidumapdrive.endMarker.addEventListener("dragend", function(e){    
             baidumapdrive.endPoint = e.point;
             initPolylineMarker();
        });

        drv = new BMap.DrivingRoute('world', {
            onSearchComplete: function(res) {
                if (drv.getStatus() == BMAP_STATUS_SUCCESS) {
                    var arrPois = res.getPlan(0).getRoute(0).getPath();
                    baidumapdrive.map.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#77B9FF'}));
                    baidumapdrive.lushu = new BMapLib.LuShu(baidumapdrive.map, arrPois,{
                    defaultContent:"",
                    autoView:true,
                    icon  : new BMap.Icon(carImg, new BMap.Size(17,16),{anchor : null}),
                    speed: 0,
                    enableRotation:true,
                    landmarkPois: []
                  });
                  baidumapdrive.lushu._addMarker();        
                }
            }
        });

        this.map.addEventListener("click", this.showInfo);

    },

    showInfo: function(e){
        baidumapdrive.tmpMenuItemPoint = e.point;
        $(window.parent.document).find("#latitude").val(baidumapdrive.tmpMenuItemPoint.lat);
        $(window.parent.document).find("#longitude").val(baidumapdrive.tmpMenuItemPoint.lng);
        $("#this_lng").val(baidumapdrive.tmpMenuItemPoint.lng);
        $("#this_lat").val(baidumapdrive.tmpMenuItemPoint.lat);
        baidumapdrive.beginPoint = baidumapdrive.tmpMenuItemPoint;
        baidumapdrive.beginMarker.setPosition(baidumapdrive.beginPoint);
        initPolylineMarker();
    },

    findPoint: function(msg){
        var local = new BMap.LocalSearch(
            baidumapdrive.map, 
            {
                renderOptions:{map: baidumapdrive.map},
                pageCapacity:1,
                onSearchComplete: function(results){
                    console.log(results)
                    var RR = "";
                    if (results.Vq){
                        RR = results.Vq;
                    }
                    else if (results.Wq){
                        RR = results.Wq;
                    }
                    if(RR.length == 0){
                        console.log("NO RR.");
                    }else{
                        var findPoint = RR[0].point;
                        baidumapdrive.map.centerAndZoom(findPoint, 17);
                    }
                },
                onMarkersSet: function(markers){
                    if(markers.length > 0){
                        baidumapdrive.findmarker = markers[0]
                        baidumapdrive.findmarker.marker.setIcon(new BMap.Icon(findImg, new BMap.Size(24, 24),{anchor : new BMap.Size(10,15)}));
                    }
                }
            }
        );
        local.search(msg);
    },

    gpsSend: function(lat, lng){
        baidumapdrive.gps_data = bd2gg(lat, lng);
    },

    changeSpeed: function(msg){
        baidumapdrive.lushu.changeSpeed(msg);
        if(msg == 0){
            baidumapdrive.changeSpeedPause = true;
            baidumapdrive.lushu.pause();
        }
        else{
            if(baidumapdrive.changeSpeedPause){
                baidumapdrive.changeSpeedPause = false;
                if(baidumapdrive.go_status == "started"){
                    baidumapdrive.startDriving();
                }
            }
        }
    },

    clearRoutes: function(msg){
        baidumapdrive.map.clearOverlays();
        try{
            baidumapdrive.lushu.stop();
        }
        catch (err) {
            console.log(err);
        }
    },

    updateRoutesbyLatLng: function(msg){
        baidumapdrive.changeSpeedPause = true;
        if(baidumapdrive.go_status != "stoped"){
            baidumapdrive.stopDriving();
        }
        baidumapdrive.go_status = "stoped";
        var _startPointArray = JSON.parse(msg[0]);
        var _endPointArray = JSON.parse(msg[1]);
        var _start = gg2bd(_startPointArray[0], _startPointArray[1]);
        var _end = gg2bd(_endPointArray[0], _endPointArray[1]);

        baidumapdrive.beginPoint = new BMap.Point(_start[1], _start[0]);
        baidumapdrive.endPoint = new BMap.Point(_end[1], _end[0]);
        baidumapdrive.beginMarker.setPosition(baidumapdrive.beginPoint);
        baidumapdrive.endMarker.setPosition(baidumapdrive.endPoint);

        initPolylineMarker();
       
        baidumapdrive.map.centerAndZoom(baidumapdrive.beginPoint, 17);
    },

    setmenuflag: function(msg){
        if(msg){
            baidumapdrive.map.addContextMenu(baidumapdrive.menu);
        }else{
            baidumapdrive.map.removeContextMenu(baidumapdrive.menu);
            baidumapdrive.endPoint = null;
            baidumapdrive.beginPoint = null;
        }
    },

    startDriving: function(msg){
        baidumapdrive.go_status = "started";
        if(baidumapdrive.lushu._opts.Tspeed == 0){

        }else{
            baidumapdrive.lushu.start();
        }
    },

    pauseDriving: function(msg){
        baidumapdrive.go_status = "pauseed";
        baidumapdrive.lushu.pause();
    },

    stopDriving: function(msg){
        baidumapdrive.go_status = "stoped";
        try{
            baidumapdrive.lushu.stop();
        }
        catch (err) {
            console.log(err);
        }
    }
}
