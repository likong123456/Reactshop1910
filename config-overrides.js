const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");
module.exports = override(
    //别名配置
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "./src"),
        ["@views"]: path.resolve(__dirname, "./src/views"),
        ["@api"]: path.resolve(__dirname, "./src/api"),
        ["@lib"]: path.resolve(__dirname, "./src/lib"),
        ["@utils"]: path.resolve(__dirname, "./src/utils"),
        ["@store"]: path.resolve(__dirname, "./src/store"),
        ["@static"]: path.resolve(__dirname, "./src/static"),
        ["@router"]: path.resolve(__dirname, "./src/router"),
        ["@layout"]: path.resolve(__dirname, "./src/layout"),
        ["@common"]: path.resolve(__dirname, "./src/common"),
        ["@actions"]: path.resolve(__dirname, "./src/actions"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
    })
);