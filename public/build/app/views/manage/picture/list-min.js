KISSY.add("app/views/manage/picture/list",function(t,a,e,i,n,l,s,r){var d=l.all;return function(t){return t.prototype.template='<div class="wrap-hd clearfix"> <div class=title-bar> <h2 class=title>\u56fe\u7247\u5217\u8868</h2> </div> </div> <div class=table-container> <div class="toolbar clearfix"> <a href="#" class="btn btn-xsmall" mx-click=add>\u4e0a\u4f20\u56fe\u7247</a> <div class=table-settings> <a class="btn btn-xsmall" id=J_calendar href="#" bx-tmpl="calendar" bx-datakey="startTime,endTime"> {{startTime}} \u81f3 {{endTime}} </a> </div> </div> <table class="table pic-list" bx-name="tables" bx-tmpl="list" bx-datakey="list"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=120>\u56fe\u7247\u9884\u89c8</th> <th class=left>\u56fe\u7247\u5730\u5740</th> <th class=left width=100>\u56fe\u7247\u5c3a\u5bf8</th> <th class=left width=100>\u4e0a\u4f20\u65f6\u95f4</th> </tr> </thead> <tbody> {{#list}} <tr> <td class=left> <div class=pic-cnt> <a href="{{picPath}}" target=_blank><img src="{{picPath}}!120"  /></a> </div> </td> <td class=left> <textarea class=textarea onclick="select()">{{picPath}}</textarea> </td> <td class=left>{{picSize}}</td> <td class=left>{{uploadTime}}</td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=4> \u6682\u65e0\u6570\u636e </td> </tr> {{/list}} </tbody> </table> </div>',t}(a.extend({init:function(){var t=this;t.on("destroy",function(){var a=t.getManaged("calendar");a.destructor()})},locationChange:function(){this.render()},render:function(){var a=this,i=a.location,n=t.clone(i.params),l=n.startTime,r=n.endTime;l&&r?(l=s.dateParse(l),r=s.dateParse(r)):(l=s.dateRecent(-6),r=s.dateRecent(0)),a.manage("startTime",l),a.manage("endTime",r),a.manage(e.fetchAll([{name:"manage_picture_list",urlParams:{startTime:s.dateFormat(l),endTime:s.dateFormat(r)}}],function(t,e){var i=e.get("data");a.setViewPagelet({list:i,startTime:s.dateFormat(l),endTime:s.dateFormat(r)},function(){a.components()})}))},components:function(){var t=this,a=(t.getManaged("pagelet"),t.getManaged("startTime")),e=t.getManaged("endTime"),i=new r({maxDate:new Date,trigger:"#J_calendar",align:{points:["br","tr"],offset:[0,0]},pages:2,rangeSelect:!0,popup:!0,triggerType:["click"],range:{start:a,end:e},autoRender:!1});i.on("rangeSelect",function(a){i.hide();var e=r.Date.format(a.start,"yyyy-mm-dd"),n=r.Date.format(a.end,"yyyy-mm-dd");t.navigate("startTime="+e+"&endTime="+n)}),t.manage("calendar",i)},"add<click>":function(t){t.halt();var a=this,e=d("#"+t.currentId).parent(".toolbar").offset().top,i=s.getDefaultDialogConfig({width:620,top:e}),n="app/views/manage/picture/add",l={callback:function(){a.render()}};s.showDialog(i,n,l)}}))},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util","brix/gallery/calendar/index"]});