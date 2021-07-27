const path = require('path');

module.exports = {
  outputDir:path.resolve(__dirname,'../server/public'),
  devServer: {
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy:{
      '/api':{
        target:'http://localhost:3000'
      }
    }
  },
}