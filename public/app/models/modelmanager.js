KISSY.add("app/models/modelmanager", function (S, BaseManager, BaseModel) {
  var Manager = BaseManager.create(BaseModel);
  Manager.registerModels([
    // 获取文章列表
    {
      name: 'article_list',
      url: '/api/article'
    },
    // 获取文章列表
    {
      name: 'article_detail',
      url: '/api/article/{id}'
    },
    // 根据标签获取文章列表
    {
      name: 'article_list_by_tag',
      url: '/api/article/tag/{tag}'
    },
    // 归档
    {
      name: 'archive',
      url: '/api/archive'
    },
    // 标签
    {
      name: 'tag_list',
      url: '/api/tag'
    },
    // 获取登录信息
    {
      name: 'login_msg',
      url: '/api/loginMsg'
    },
    // 登录
    {
      name: 'login',
      url: '/api/login',
      options: {
        type: 'post'
      }
    },
    // 登出
    {
      name: 'logout',
      url: '/api/logout'
    },
    // 获取文章列表
    {
      name: 'manage_article_list',
      url: '/manage/article'
    },
    // 获取文章列表
    {
      name: 'manage_article_detail',
      url: '/manage/article/{id}'
    },
    // 文章添加
    {
      name: 'manage_article_add',
      url: '/manage/article',
      options: {
        type: 'post'
      }
    },
    // 文章编辑
    {
      name: 'manage_article_edit',
      url: '/manage/article/{id}',
      options: {
        type: 'post',
        restfulType: 'put'
      }
    },
    // 文章删除
    {
      name: 'manage_article_del',
      url: '/manage/article/{id}',
      options: {
        type: 'post',
        restfulType: 'delete'
      }
    },
    // 标签列表
    {
      name: 'manage_tag_list',
      url: '/manage/tag'
    },
    // 图片列表
    {
      name: 'manage_picture_list',
      url: '/manage/pic'
    },
    // 二维码
    {
      name: 'manage_tool_qr',
      url: '/manage/tool/qr',
      options: {
        type: 'post'
      }
    }
  ]);
  return Manager;
}, {
  requires: ["mxext/mmanager", "app/models/basemodel"]
});