const HTMLWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');


module.exports =(env={})=> {
  const { mode='development' }=env; 

  const isProd=mode==='production';
  const isDev=mode==='development';
  
  return {
    mode:isProd?'production':isDev && 'development',
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options:{
                  outputPath:'images',
                  name:'[name]-[sha1:hash:7].[ext]'
              },
            },
          ],
        },
        {
            test: /\.(ttf|ptf|eot|woff|woff2)$/i,
            use: [
              {
                loader: 'file-loader',
                options:{
                    outputPath:'fonts',
                    name:'[name].[ext]'
                },
              },
            ],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"public/index.html",
        }),
        new MiniCssExtractPlugin({
          filename: 'main-[hash.8].css'
        })
    ],
    devServer:{
      open:true
    }
  }
    
  };