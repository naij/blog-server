KISSY.add("app/views/manage/article/list",function(t,e,a,i,l,s,d){var n=s.all;return function(t){return t.prototype.template='<div class="wrap-hd clearfix"> <div class=title-bar> <h2 class=title>\u6587\u7ae0\u5217\u8868</h2> </div> </div> <div class=table-container> <div class="toolbar clearfix"> <div bx-name="dropdown" style="width:150px;" class=dropdown hidefocus=true id=J_type_dropdown> {{#typeList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value="{{typeId}}">{{typeName}}</span> <i class="iconfont icon-arrow-down">&#459</i> </span> {{/selected}} {{/typeList}} <ul class=dropdown-list> {{#typeList}} <li class="dropdown-item {{#selected}}dropdown-itemselected{{/selected}}"><span value="{{typeId}}">{{typeName}}</span><i class="iconfont icon-ok">&#126</i></li> {{/typeList}} </ul> </div> <a href="#!/manage/article/add" class="btn btn-xsmall">\u65b0\u589e\u6587\u7ae0</a> </div> <table class=table bx-name="tables" bx-tmpl="list" bx-datakey="list"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>\u6587\u7ae0\u540d\u79f0</th> <th class=left width=120>\u53d1\u5e03\u65f6\u95f4</th> <th class=left width=100>\u70b9\u51fb\u6570</th> <th class=center width=100>\u64cd\u4f5c</th> </tr> </thead> <tbody> {{#list}} <tr> <td class=left><a href="#!/pages/{{type}}/article_detail?id={{_id}}">{{title}}</a></td> <td class=left>{{publishDate}}</td> <td class=left>{{pv}}</td> <td class=center> <a href="#/manage/article/edit?id={{_id}}" class=color-blue>\u7f16\u8f91</a> <a href="#" mx-click="del{id:{{_id}}}" class=color-blue>\u5220\u9664</a> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=4> \u6682\u65e0\u6570\u636e </td> </tr> {{/list}} </tbody> </table> </div>',t}(e.extend({locationChange:function(){this.render()},render:function(){var e=this,i=e.location,l=i.params,s=l.typeId||"f2e",d=[{typeId:"f2e",typeName:"f2e"},{typeId:"discovery",typeName:"discovery"},{typeId:"life",typeName:"life"}];t.each(d,function(t){return t.typeId==s?(t.selected=!0,!1):void 0}),e.manage(a.fetchAll([{name:"manage_article_list",urlParams:{type:s}}],function(t,a){var i=a.get("data");e.setViewPagelet({list:i,typeList:d},function(){e.components()})}))},components:function(){var t=this,e=t.getManaged("pagelet"),a=e.getBrick("J_type_dropdown");a.on("selected",function(e){t.navigate("typeId="+e.value)})},"del<click>":function(t){t.halt();var e=this,i=n("#"+t.currentId).parent("tr").offset().top,l=d.getDefaultDialogConfig({width:400,top:i}),s="app/views/util/confirm",o={confirmFn:function(){e.manage(a.fetchAll([{name:"manage_article_del",postParams:{id:t.params.id}}],function(){d.hideDialog(),e.render()}))},cancelFn:function(){d.hideDialog()},confirmTitle:"\u5220\u9664\u6587\u7ae0",confirmContent:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u7bc7\u6587\u7ae0\uff1f"};d.showDialog(l,s,o)}}))},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util"]});