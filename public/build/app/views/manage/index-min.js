KISSY.add("app/views/manage/index",function(a,e,i,l,t,r){r.all;return e.extend({template:'<div class="wrap-hd clearfix"> <div class=title-bar> <h2 class=title>\u7ba1\u7406\u5165\u53e3</h2> </div> </div> <div class=manage-guide> <ul class=clearfix> <li> <a href="#!/manage/article/list">\u6587\u7ae0</a> </li> <li> <a href="#!/manage/picture/list">\u56fe\u7247</a> </li> <li> <a href="#!/manage/tool/list">\u5de5\u5177</a> </li> </ul> </div>',locationChange:function(){this.render()},render:function(){var a=this;a.setViewPagelet()}})},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util"]});