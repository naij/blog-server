KISSY.add("app/models/modelmanager",function(a,e,l){var t=e.create(l);return t.registerModels([{name:"article_list",url:"/api/article"},{name:"article_detail",url:"/api/article/{id}"},{name:"article_list_by_tag",url:"/api/article/{tag}"},{name:"archive",url:"/api/archive"},{name:"tag_list",url:"/api/tag"},{name:"login_msg",url:"/api/loginMsg"},{name:"login",url:"/api/login",options:{type:"post"}},{name:"logout",url:"/api/logout"},{name:"manage_article_list",url:"/manage/article"},{name:"manage_article_detail",url:"/manage/article/{id}"},{name:"manage_article_add",url:"/manage/article",options:{type:"post"}},{name:"manage_article_edit",url:"/manage/article/{id}",options:{type:"post",restfulType:"put"}},{name:"manage_article_del",url:"/manage/article/{id}",options:{type:"post",restfulType:"delete"}},{name:"manage_tag_list",url:"/manage/tag"},{name:"manage_picture_list",url:"/manage/pic"},{name:"manage_tool_qr",url:"/manage/tool/qr"}]),t},{requires:["mxext/mmanager","app/models/basemodel"]});