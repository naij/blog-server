KISSY.add("app/views/manage/article/edit",function(e,a,t){return function(e){return e.prototype.template='<div class=article-edit> <div class=hd> <h3 class=title>\u6587\u7ae0\u7f16\u8f91</h3> </div> <div class=bd> {{#list}} <form id=editForm> <input type=hidden value="{{_id}}" name=id> <ul class=union-form> <li class=field> <p class=field-label2>\u6807\u9898</p> <input type=text class=input name=title value="{{title}}"> </li> <li class=field> <p class=field-label2>\u5185\u5bb9</p> <textarea class=textarea name=content>{{{markdown}}}</textarea> </li> <li class=field> <a href="#" class=button-m mx-click=submit>\u4fdd \u5b58</a> </li> </ul> </form> {{/list}} </div> </div>',e}(a.extend({locationChange:function(){this.render()},render:function(){var e=this,a=e.location,i=a.params,l=i.id;e.manage(t.fetchAll([{name:"manage_article_detail",urlParams:{id:l}}],function(a,t){var i=t.get("data");e.setViewPagelet({list:i},function(){e.components()})}))},components:function(){var e=new Editor;e.render(),this.manage("editor",e)},"submit<click>":function(a){a.halt();var i=this,l=i.getManaged("editor");l.codemirror.save();var n=e.unparam(e.IO.serialize("#editForm"));i.manage(t.fetchAll([{name:"manage_article_edit",postParams:n}],function(){i.navigate("/manage/article/list")}))}}))},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util"]});