const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName:function(rpath) {
        let filenames = [];
        let fileTypes = /\.md$/; //只匹配以md结尾的文件
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0 ) {
                fullpath = rpath+"/"+file
                var fileinfo = fs.statSync(fullpath)
                if(fileinfo.isFile()){
                    if(fileTypes.test(file) > 0) {
                        if (file === 'index.md') {
                            file = '';
                        } else {
                            file = file.replace('.md', '');
                        }
                        const path = rpath.replace(/./, '');
                        filenames.push(path + '/' + file);
                    }
                }
            }
        });
        filenames.sort(); // 排序
        return filenames;
    }
}
module.exports = filehelper;