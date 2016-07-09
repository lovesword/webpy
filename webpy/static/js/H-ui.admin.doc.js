/*H-ui.admin.doc.js date:15:42 2015-04-29 by:guojunhui*/
/*----------用户管理------------------*/
/*用户-添加*/
function user_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*用户-查看*/
function user_show(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*用户-密码-修改*/
function user_password_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*用户-密码-修改*/
function message_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*用户-编辑*/
function user_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*用户-编辑-保存*/
function user_edit_save(obj,id){
    var i = parent.layer.getFrameIndex();
    parent.layer.close(i);
}

/*用户-停用*/
function user_stop(obj,id){
    layer.confirm('确认要停用吗？',function(index){
        $.ajax({
            type: 'DELETE',
            url:'/Server/Administrator/User/' + id,
            // data: {ids:ids},
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    $(obj).parents("tr").remove();
                    layer.msg('已停用!',1);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*售票员-停用*/
function seller_stop(obj,id){
    layer.confirm('确认要停用吗？',function(index){
        $.ajax({
            type: 'DELETE',
            url:'/Server/Administrator/Seller/Stop/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    layer.msg('已停用!',1);
                    location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*售票员-启用*/
function seller_start(obj,id){
    layer.confirm('确认要启用吗？',function(index){
        $.ajax({
            type: 'PUT',
            url:'/Server/Administrator/Seller/Start/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    layer.msg('已启用!',1);
                    location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*定制线路-删除*/
function del_apply_bus_route(obj,id){
    layer.confirm('确认要删除此线路吗？',function(index){
        $.ajax({
            type: 'DELETE',
            url:'/Server/LocalBus/OriginateRoute/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    $(obj).parents("tr").remove();
                    layer.msg('已删除!',1);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*定制线路-开通*/
function up_apply_bus_route(obj,id){
    layer.confirm('确认要开通此线路吗？',function(index){
        $.ajax({
            type: 'PUT',
            url:'/Server/LocalBus/OriginateRoute/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    window.parent.location.href="/Server/LocalBus/OriginateRoute";
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*定制线路-关闭*/
function close_apply_bus_route(obj,id){
    layer.confirm('确认要开关闭线路吗？',function(index){
        $.ajax({
            type: 'PATCH',
            url:'/Server/LocalBus/OriginateRoute/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    window.parent.location.href="/Server/LocalBus/OriginateRoute";
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*注册用户-停用*/
function member_stop(obj,id){
    layer.confirm('确认要停用吗？',function(index){
        $.ajax({
            type: 'DELETE',
            url:'/Server/Member/Normal/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    //$(obj).parents("tr").remove();
                    layer.msg('已停用!',1);
					location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}
/*注册用户-启用*/
function member_back(obj,id){
    layer.confirm('确认要启用吗？',function(index){
        $.ajax({
            type: 'POST',
            url:'/Server/Member/Normal/Back/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    //$(obj).parents("tr").remove();
                    layer.msg('已启用!',1);
					location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}


/* 包车选择车辆*/
function select_chartered_car(id, cid){
    layer.confirm('确认要用这辆车吗？',function(index){
    $.ajax({
        type: 'POST',
        data: {carid:id},
        dataType: 'text',
        success: function(res) {
            window.parent.location.href="/Server/Chartered/Action/" + cid
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}

/* 包车出车*/
function go_chartered_car(cid){
    layer.confirm('确认出车吗？',function(index){
    $.ajax({
        type: 'POST',
        url:"/Server/Chartered/Go/" + cid,
        dataType: 'text',
        success: function(res) {
            window.parent.location.href="/Server/Chartered/Action"
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}

/*用户-启用*/
function user_start(obj,id){
    layer.confirm('确认要启用吗？',function(index){
        $.ajax({
            type: 'PUT',
            url:'/Server/Administrator/NoneUser/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    $(obj).parents("tr").remove();
                    layer.msg('已启用!',1);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

/*管理员-用户-批量启用*/
function admin_user_start_list(){
  layer.confirm('确认要启用吗？',function(index){
    var ids = [];
    var i = 0
    $(".user_checkbox").each(function(i) {
        if($(this).is(':checked')){  
              ids[i] = $(this).val();
              i++;
          }
    });
    ids = ids.join();
    $.ajax({
        type: 'PUT',
        url:'/Server/Administrator/NoneUser',
        data: {ids:ids},
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                window.location.reload();
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}

/*管理员-用户-批量删除*/
function admin_user_del_list(){
  layer.confirm('确认要停用吗？',function(index){
    var ids = [];
    var i = 0
    $(".user_checkbox").each(function(i) {
        if($(this).is(':checked')){  
              ids[i] = $(this).val();
              i++;
          }
    });
    ids = ids.join();
    $.ajax({
        type: 'DELETE',
        url:'/Server/Administrator/User',
        data: {ids:ids},
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                window.location.reload();
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}


/*用户-删除*/
function user_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',1);
    });
}
/*------------------版本管理-------------*/
/*Version-添加*/
function version_add(w,h,title,url){
    layer_show(w,h,title,url);
}

/*Version-添加*/
function open_resource_add(w,h,title,url){
    layer_show(w,h,title,url);
}

/*Version-编辑*/
function version_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*Self-编辑*/
function user_self_edit(id,w,h,title,url){
    layer_show(800,h,title,url);
}

/*------------资讯管理----------------*/
/*获取分类值*/
function SetSubID(obj) {
    $("#hid_ccid").val($(obj).val());
}
/*资讯-分类-添加*/
function article_class_add(obj){
    var v = $("#article-class-val").val();
    if(v==""||v==null){
        return false;
    }else{
        //ajax请求 添加分类
    }
}

/*资讯-分类-编辑*/
function article_class_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*资讯-添加*/
function article_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*资讯-编辑*/
function article_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*资讯-下架*/
function article_xiajia(obj,id){
    $(obj).parents("tr").find(".article-manage").prepend('<a style="text-decoration:none" onClick="article_fabu(this,\'10001\')" href="javascript:;" title="发布"><i class="icon-hand-up"></i></a>');
    $(obj).parents("tr").find(".article-status").html('<span class="label radius">已下架</span>');
    $(obj).remove();
}
/*资讯-发布*/
function article_fabu(obj,id){
    $(obj).parents("tr").find(".article-manage").prepend('<a style="text-decoration:none" onClick="article_xiajia(this,\'10001\')" href="javascript:;" title="下架"><i class="icon-hand-down"></i></a>');
    $(obj).parents("tr").find(".article-status").html('<span class="label label-success radius">已发布</span>');
    $(obj).remove();
}
/*管理员-删除*/
function article_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',1);
    });
}
/*------------图片库--------------*/
/*图片库-分类-添加*/
function picture_class_add(obj){
    var v = $("#picture-class-val").val();
    if(v==""||v==null){
        return false;
    }else{
        //ajax请求 添加分类
    }
}

/*图片库-分类-编辑*/
function picture_class_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*图片库-添加*/
function picture_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*图片库-编辑*/
function picture_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*图片库-下架*/
function picture_xiajia(obj,id){
    $(obj).parents("tr").find(".picture-manage").prepend('<a style="text-decoration:none" onClick="picture_fabu(this,\'10001\')" href="javascript:;" title="发布"><i class="icon-hand-up"></i></a>');
    $(obj).parents("tr").find(".picture-status").html('<span class="label radius">已下架</span>');
    $(obj).remove();
}
/*图片库-发布*/
function picture_fabu(obj,id){
    $(obj).parents("tr").find(".picture-manage").prepend('<a style="text-decoration:none" onClick="picture_xiajia(this,\'10001\')" href="javascript:;" title="下架"><i class="icon-hand-down"></i></a>');
    $(obj).parents("tr").find(".picture-status").html('<span class="label label-success radius">已发布</span>');
    $(obj).remove();
}
/*管理员-删除*/
function picture_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',1);
    });
}
/*------------产品库------------------*/
/*产品-品牌-编辑*/
function product_brand_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*------------管理员管理--------------*/
/*管理员-角色-添加*/
function admin_role_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*管理员-角色-编辑*/
function admin_role_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}


function refund_list(){
    var ids = [];
    var i = 0
    $(".r_checkbox").each(function() {
        if($(this).is(':checked')){ 
              var val =  $(this).val();
              if(val && val != "" && val != "0"){
                ids[i] = val;
                i++;
              }
          }
    });
    ids = ids.join();
    if (ids == ""){
        return false;
    }
    layer.confirm('请确认是否需要批量退款？',function(index){
        window.open("/Server/Order/AlipayRefund/RefundAction/" + ids);
    });
}

/*管理员-角色-批量删除*/
function admin_role_del_list(){
  layer.confirm('确认要删除吗？',function(index){
    var ids = [];
    var i = 0
    $(".role_checkbox").each(function() {
        if($(this).is(':checked')){  
              ids[i] = $(this).val();
              i++;
          }
    });
    ids = ids.join();
    $.ajax({
        type: 'DELETE',
        url:'/Server/Administrator/Role',
        data: {ids:ids},
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                window.location.reload();
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}

/*画报-删除*/
function pictorial_del(obj,id){
    layer.confirm('确认要删除此画报吗？',function(index){
        $.ajax({
        type: 'DELETE',
        url:'/Server/System/Pictorial/' + id,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
    });
}

/*删除反馈-删除*/
function fb_del(obj,id){
    layer.confirm('确认要删除此反馈吗？',function(index){
        $.ajax({
        type: 'DELETE',
        url:'/Server/System/FeedBack/' + id,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
    });
}

/*管理员-角色-删除*/
function admin_role_del(obj,roleid){
  layer.confirm('角色删除须谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/Administrator/Role/' + roleid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}

/*管理员-权限-添加*/
function admin_permission_add(){
    
}
/*管理员-权限-编辑*/
function admin_permission_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*管理员-权限-删除*/
function admin_permission_del(obj,id){
    layer.confirm('角色删除须谨慎，确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',1);
    });
}

/*管理员-编辑-保存*/
function admin_edit_save(obj,id){
    var i = parent.layer.getFrameIndex();
    parent.layer.close(i);
}
/*管理员-删除*/
function admin_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',1);
    });
}
/*管理员-编辑*/
function admin_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*管理员-停用*/
function admin_stop(obj,id){
    $(obj).parents("tr").find(".admin-manage").prepend('<a style="text-decoration:none" onClick="admin_start(this,\'10001\')" href="javascript:;" title="启用"><i class="icon-hand-up"></i></a>');
    $(obj).parents("tr").find(".admin-status").html('<span class="label radius">已停用</span>');
    $(obj).remove();
}
/*管理员-启用*/
function admin_start(obj,id){
    $(obj).parents("tr").find(".admin-manage").prepend('<a style="text-decoration:none" onClick="admin_stop(this,\'10001\')" href="javascript:;" title="停用"><i class="icon-hand-down"></i></a>');
    $(obj).parents("tr").find(".admin-status").html('<span class="label label-success radius">已启用</span>');
    $(obj).remove();
}
/*------------系统管理--------------*/
/*系统管理-日志-删除*/
function system_log_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',1);
    });
}
$(function(){
    /*返回顶部调用*/
    $(window).on("scroll",$backToTopFun);
    $backToTopFun();
});

/*Version-删除*/
function version_del(ts, id){
  layer.confirm('确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/System/AppVersion/' + id,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(ts).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}
/*open_resource-删除*/
function open_resource_del(ts, id){
  layer.confirm('确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/System/OpenResource/' + id,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(ts).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}
/*数据字典-删除*/
function data_dict_del(obj,ddid){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/System/DataDict/' + ddid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}
/*数据添加*/
function data_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*画报-添加*/
function pictorial_add(w,h,title,url){
    layer_show(w,h,title,url);
}

/*City-添加*/
function city_add(w,h,title,url){
    layer_show(w,h,title,url);
}

/*车队-添加*/
function company_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*车队-删除*/
function company_del(obj,comid){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/CarCompany/Company/' + comid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
				
               alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
}
/*车队-编辑*/
function company_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}


/*车辆-添加*/
function car_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*车辆-删除*/
function car_del(obj,carid){
  layer.confirm('确认要停用吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/CarCompany/Car/' + carid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                //$(obj).parents("tr").remove();
                layer.msg('已停用!',1);
				location.replace(location.href);
            }else{
				//alert('删除失败！');
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            //console.log("Complete");
        }
    });
  });
  
  
}

function car_up_(obj,carid){
  layer.confirm('确认要启用吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/CarCompany/Car/' + carid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                //$(obj).parents("tr").remove();
                layer.msg('已启用!',2);
				location.replace(location.href);
            }else{
				//alert('删除失败！');
                alert(res);
            }
        },
        error: function(res) {
            //console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            //console.log("Complete");
        }
    });
  });
  
  
}

/*车辆-编辑*/
function car_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}




/*司机-添加*/
function driver_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*司机-删除*/
function driver_del(obj,drrid){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/DriverChecker/Driver/' + drrid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
				//alert(1);
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
  
  
}
/*司机-编辑*/
function driver_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

function param_stop_back(obj,url){
  layer.confirm(obj,function(index){
    $.ajax({
        type: 'POST',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                //$(obj).parents("tr").remove();
                layer.msg('操作成功!',1);
				//window.opener.location.reload()
				location.replace(location.href);
				
				//window.opener.reloadparent();
            }
			else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}


/*检票员-添加*/
function checker_add(w,h,title,url){
    layer_show(w,h,title,url);
}
/*检票员-删除*/
function checker_del(obj,id){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/DriverChecker/Checker/' + id,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
				
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
  
  
}
/*检票员-编辑*/
function checker_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}
/*城市删除*/
function city_del(obj,cityid){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:'/Server/LongDistanceBus/City/' + cityid,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			//alert('删除失败 请检查是否有班次与此车辆关联！');
            alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });
  
}
//删除模板
function param_del(obj,url){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
				//window.opener.location.reload()
				location.replace(location.href);
				
				//window.opener.reloadparent();
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}

function stop_back(obj,url){
  layer.confirm('确定要撤销此条停班规则吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                //$(obj).parents("tr").remove();
                layer.msg('撤销申请已提交!',1);
				//window.opener.location.reload()
				location.replace(location.href);
				
				//window.opener.reloadparent();
            }
			else if(res=='deleteok'){
		        $(obj).parents("tr").remove();
                layer.msg('撤销成功!',1);	
			}
			else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}


function sh_tmp_del(obj,url){
  layer.confirm('确定要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('删除成功!',1);
				//window.opener.location.reload()
				location.replace(location.href);
				
				//window.opener.reloadparent();
            }
			else if(res == "Check"){
                layer.msg('删除申请已提交!',1);
				//window.opener.location.reload()
				location.replace(location.href);				
			}
			else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}

function stop_back_now(obj,url){
  layer.confirm('确定要撤销此条停班规则吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('撤销成功!',1);
				//window.opener.location.reload()
				location.replace(location.href);
				
				//window.opener.reloadparent();
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}

function param_update(obj,url){
   
    $.ajax({
        type: 'POST',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                 alert('保存成功!');
				location.replace(location.href);
				//layer.msg('保存成功!',1);
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
}

//删除模板
function param_del_2(obj,url){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
				location.replace(location.href);
            }
			else if(res=='Check'){
				layer.msg('删除申请已提交!',1);
				location.replace(location.href);
			}
			else{
				layer.msg(res,1);
				
                //layer.msg('已提交审核!',1);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}

//删除模板
function lroute_lstation_del(obj,url){
  layer.confirm('请输入生效日期 <input type="text" class="input-text" id="zzz" value="" datatype="*1-20" placeholder="">',function(index){
	  //console.log($("#zzz").val())
    $.ajax({
        type: 'DELETE',
        url:url+'/@'+$("#zzz").val(),
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                //$(obj).parents("tr").remove();
                layer.msg('数据已提交!',1);
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert(res);
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}

//编辑模板
function param_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

//详情查看模板
function param_view(id,w,h,title,url){
    layer_show(w,h,title,url);
}
//删除车辆排班
function tests_del(obj,url){
  layer.confirm('删除数据需谨慎，确认要删除吗？',function(index){
    $.ajax({
        type: 'DELETE',
        url:url,
        data: null,
        dataType: 'text',
        success: function(res) {
            if (res == "Success"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',1);
            }else{
				
                alert(res);
            }
        },
        error: function(res) {
            console.log("Error");
			alert('删除失败 请检查是有关联数据！');
            //alert(res);
        },
        complete: function() {
            console.log("Complete");
        }
    });
  });	
	
}

/*城市-编辑*/
function city_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*租车单个订单-编辑*/
function show_order_detail_or_edit(id,w,h,title,url){
    layer_show_big(w,h,title,url);
}

/*租车单个订单-编辑*/
function show_order_detail_or_edit(id,w,h,title,url){
    layer_show_big(w,h,title,url);
}

/*用户-停用*/
function refund_lorder_ticket(obj,id){
    layer.confirm('确认要退票吗？',function(index){
        $.ajax({
            type: 'POST',
            url:'/Server/Order/LongDistanceBus/Lticket/Refund/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    layer.msg('退票处理中!',1);
                    location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

function refund_bus_order_ticket(obj,id){
    layer.confirm('确认要退票吗？',function(index){
        $.ajax({
            type: 'POST',
            url:'/Server/Order/LocalBus/Busticket/Refund/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    layer.msg('退票处理中!',1);
                    location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}

function refund_order(obj,id){
    layer.confirm('确认要退此订单吗？',function(index){
        $.ajax({
            type: 'POST',
            url:'/Server/Order/Refund/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    layer.msg('退订单处理中!',1);
                    location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}


/*数据字典-添加*/
function data_dict_add(w,h,title,url){
    layer_show(w,h,title,url);
}

/*汽车路线- 价格-编辑*/
function lroute_price_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*汽车路线-站点-编辑*/
function lroute_station_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*汽车线路-基本数据-编辑*/
function lroute_route_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*管理员-角色-编辑*/
function admin_role_edit(id,w,h,title,url){
    layer_show(w,h,title,url);
}

/*积分处理*/
function jifen_do(id){
    layer.confirm('确认要处理完成吗？',function(index){
        $.ajax({
            type: 'POST',
            url:'/Server/IntegrationManager/DuiHuang/' + id,
            dataType: 'text',
            success: function(res) {
                if (res == "Success"){
                    layer.msg('处理完成!',2);
                    location.replace(location.href);
                }else{
                    alert(res);
                }
            },
            error: function(res) {
                console.log("Error");
                alert(res);
            },
            complete: function() {
                console.log("Complete");
            }
        });
    });
}