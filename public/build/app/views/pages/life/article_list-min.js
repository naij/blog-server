KISSY.add("app/views/pages/life/article_list",function(a,t,e,i,l,s){s.all;return function(a){return a.prototype.template='<ul class=article-list> {{#list}} <li class=list-item> <div class=hd> <h3 class=title> <a href="#!/pages/life/article_detail?id={{_id}}">{{title}}</a> </h3> <div class=meta> <span class=date>{{publishDate}}</span> <span class=divide></span> <a class=tag href="#!/pages/tags/tags?tag={{tag}}">{{tag}}</a> </div> </div> <div class="bd markdown-body"> {{{content}}} </div> <div class=ft> <a href="#!/pages/life/article_detail?id={{_id}}" class=continue-reading>Read more \u2192</a> </div> </li> {{/list}} {{^list}} <li class=no-data> \u55ef\uff0c\u4ec0\u4e48\u90fd\u8fd8\u6ca1\u5199~ </li> {{/list}} </ul>',a}(t.extend({locationChange:function(){this.render()},render:function(){var a=this;a.manage(e.fetchAll([{name:"article_list",urlParams:{type:"life"}}],function(t,e){for(var i=e.get("data"),l=0;l<i.length;l++)i[l].content=i[l].content.replace(/<[^>]+>/g,""),i[l].content=i[l].content.substring(0,300)+" ... ...";a.setViewPagelet({list:i})}))}}))},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util"]});