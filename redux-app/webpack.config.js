var path = require("path");
  
module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, "./public"), // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js" // название создаваемого файла
    },
    devServer: {
     historyApiFallback: true,
     port: 8081,
     open: true
   },
    module:{
        rules:[ //загрузчик для jsx
            {
                test: /\.jsx?$/, // определить тип файлов
                exclude: /(node_modules)/, // исключить из обработки папку node_modules
                loader: "babel-loader", // определить загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"] // используемые плагины
                }
            }
        ]
    }
}