module.exports = {
// 开发服务器设置
devServer:{
    // 自动打开浏览器
    open:true,
    // 设置npm run serve启动后的端口号
    port:8080,
    // eslint  不要遮罩，错误会在console.log打印
    overlay:false,
    // vue项目代理请求
    proxy:{
        // 规则
        // axios中相对地址开头的字符串  匹配请求uri中的前几位
        "/api":{
            // 把相对地址中的域名映射到目标地址中
            // localhost：3000  =》  https://api.iynn.cn/film/api/v1/
            target:"https://api.iynn.cn/film/api/v1",
            // target: "https://api.iynn.cn/film/api/v1",

            // 修改host请求的域名为目标域名
            // changeOrigin:false
            changeOrigin:true,
            // 请求uri和目标uri有一个对应关系
            // 请求/api/login  ==>  目标 /v1/api/login
            pathRewrite:{
                "^/api":""
            },
        }
    }
}
}