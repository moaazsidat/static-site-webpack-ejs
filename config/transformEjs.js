var fs = require('fs');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

function getFilesFromDir(startPath, filter, callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
  
    for(var i=0; i<files.length; i++){
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
    
        if (stat.isDirectory()){
            getFilesFromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

var ejsPluggedIn = [];

getFilesFromDir('./src', /\.ejs$/, function(templatePath) {
  var filePath = templatePath.split('/');
  var fileName = filePath[filePath.length - 1];
  var fileHtml = fileName.split('.')[0] + '.html';
  var fileHtmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: fileHtml,
    template: templatePath,
  });

  ejsPluggedIn.push(fileHtmlWebpackPlugin);
});

//console.log(ejsPluggedIn);
module.exports = ejsPluggedIn;
