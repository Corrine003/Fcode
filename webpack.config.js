const path=require('path');
const webpack=require('webpack');
module.exports={
	entry:__dirname+'/src/main.js',
	
	output:{
		path:__dirname+'/build',
		filename:'bundle1.js'
	},
};