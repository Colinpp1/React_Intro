const path =require('path');

module.exports ={
    entry:"./src/index.tsx",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    watch:true,
    resolve:{
         extensions:[".ts",".tsx",".js"]
    }
}