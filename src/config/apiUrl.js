let ipUrl = "http://localhost:7001/admin/"

let servicePath = {
    checkLogin: ipUrl + 'checkLogin',
    getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获得文章类别信息
    addArticle:ipUrl + 'addArticle' ,  //  添加文章
    updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
}

export default servicePath