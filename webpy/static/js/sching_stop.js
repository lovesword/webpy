// JavaScript Document
function lsch_opennn(){
//layer.confirm('确认要停用吗？');
    layer_show(400,600,'12',"/WeiXin/dodo");
}
function dele_table_tr(t_id){
var t1=document.getElementById(t_id); 

var rowNum=t1.rows.length; 
 
if(rowNum>0) 
{ 
for(i=1;i<rowNum;i++) 
{ 
t1.deleteRow(i); 
rowNum=rowNum-1; 
i=i-1; 
} 
}  
}
function lsch_get_table_data(url,datas){
	   $.ajax({
		 type:"GET",
		 url:url,
		 data:datas,
		 dataType:"json",//要发送的数据             
		 //object是后台传过来的java list数据集合
		 success:function(return_objs){ 
		 //alert(return_objs);                      
                              //objects = JSON.stringify(objects);    
			  //1,获取上面id为cloneTr的tr元素
			  dele_table_tr('app_table');
                          var tr = $("#app_table_head_tr");
                       //alert(objects); 
					   objects_l = return_objs['lorder_detail'];
                       $.each(objects_l, function(index,item){                            
                             //克隆tr，每次遍历都可以产生新的tr                            
                               var clonedTr = tr.clone();
                               //var _index = index;
                               //循环遍历cloneTr的每一个td元素，并赋值
                               clonedTr.children("td").each(function(inner_index){
                                
                                      //根据索引为每一个td赋值
                                            switch(inner_index){
                                                  case(0): 
                                                     $(this).html(item[0]);
                                                     break;
                                                  case(1):
                                                     $(this).html(item[1]);
                                                     break;
                                                 case(2):
                                                     $(this).html(item[2]);
                                                     break;
                                                 case(3):
                                                     $(this).html(item[3]);
                                                     break;
                                                 case(4):
                                                     $(this).html(item[4]);
                                                     break;
                                                 case(5):
                                                     $(this).html(item[5]);
                                                     break;
                                                 case(6):
                                                     $(this).html(item[6]);
                                                     break;
                                                 case(7):
                                                     $(this).html(item[7]);
                                                     break;
                                                 case(8):
                                                     $(this).html(item[8]);
                                                     break; 
                                                 case(9):
														 
                                                     $(this).html(item[9]);
                                                     break;                             
                                           }//end switch                        
                            });//end children.each
                        
                           //把克隆好的tr追加原来的tr后面
                           clonedTr.insertAfter(tr);
                        });//end $each
                        //$("#cloneTr").hide();//隐藏id=clone的tr，因为该tr中的td没有数据，不隐藏起来会在生成的table第一行显示一个空行
                        //$("#generatedTable").show();
						dele_table_tr('wint_table');
						var tr = $("#wint_table_head_tr");
					   objects_w = return_objs['wint_detail'];
                       $.each(objects_w, function(index,item){                            
                             //克隆tr，每次遍历都可以产生新的tr                            
                               var clonedTr = tr.clone();
                               //var _index = index;
                               //循环遍历cloneTr的每一个td元素，并赋值
                               clonedTr.children("td").each(function(inner_index){
                                
                                      //根据索引为每一个td赋值
                                            switch(inner_index){
                                                  case(0): 
                                                     $(this).html(item[0]);
                                                     break;
                                                  case(1):
                                                     $(this).html(item[1]);
                                                     break;
                                                 case(2):
                                                     $(this).html(item[2]);
                                                     break;
                                                 case(3):
                                                     $(this).html(item[3]);
                                                     break;
                                                 case(4):
                                                     $(this).html(item[4]);
                                                     break;
                                                 case(5):
                                                     $(this).html(item[5]);
                                                     break;
                                                 case(6):
                                                     $(this).html(item[6]);
                                                     break;
                                                 case(7):
                                                     $(this).html(item[7]);
                                                     break;                              
                                                 case(8):
                                                     $(this).html(item[8]);
                                                     break;   
                                           }//end switch                        
                            });//end children.each
                        
                           //把克隆好的tr追加原来的tr后面
                           clonedTr.insertAfter(tr);
                        });//end $each
                        //$("#cloneTr2").hide();
         },//end success
            error: function(objects) {
                console.log("Error");
                //alert(objects);
				alert('获取票据数据失败');
            },
            complete: function() {
                console.log("Complete");
            }
    });//end ajaxpost                        
 
	
}

function bussch_get_table_data(url,datas){
	   $.ajax({
		 type:"GET",
		 url:url,
		 data:datas,
		 dataType:"json",//要发送的数据             
		 //object是后台传过来的java list数据集合
		 success:function(return_objs){ 
		 //alert(return_objs);                      
                              //objects = JSON.stringify(objects);    
			  //1,获取上面id为cloneTr的tr元素
			  dele_table_tr('app_table');
                          var tr = $("#app_table_head_tr");
                       //alert(objects); 
					   objects_l = return_objs['lorder_detail'];
                       $.each(objects_l, function(index,item){                            
                             //克隆tr，每次遍历都可以产生新的tr                            
                               var clonedTr = tr.clone();
                               //var _index = index;
                               //循环遍历cloneTr的每一个td元素，并赋值
                               clonedTr.children("td").each(function(inner_index){
                                
                                      //根据索引为每一个td赋值
                                            switch(inner_index){
                                                  case(0): 
                                                     $(this).html(item[0]);
                                                     break;
                                                  case(1):
                                                     $(this).html(item[1]);
                                                     break;
                                                 case(2):
                                                     $(this).html(item[2]);
                                                     break;
                                                 case(3):
                                                     $(this).html(item[3]);
                                                     break;
                                                 case(4):
                                                     $(this).html(item[4]);
                                                     break;
                                                 case(5):
                                                     $(this).html(item[5]);
                                                     break;
                                                 case(6):
                                                     $(this).html(item[6]);
                                                     break;
                                                 case(7):
                                                     $(this).html(item[7]);
                                                     break;
                                                 case(8):
                                                     $(this).html(item[8]);
                                                     break; 
                                                 case(9):
                                                     $(this).html(item[9]);
                                                     break;                                                                             
                                           }//end switch                        
                            });//end children.each
                        
                           //把克隆好的tr追加原来的tr后面
                           clonedTr.insertAfter(tr);
                        });//end $each
                         
         },//end success
            error: function(objects) {
                console.log("Error");
                alert('获取票据数据失败');
            },
            complete: function() {
                console.log("Complete");
            }
    });//end ajaxpost                        
 
	
}