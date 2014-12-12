vso_grunt
=========
组织结构
-------------------------------------------------------------------
vso_grunt

<pre><code>
vso_grunt
|-- gruntfile.js	# 构建配置文件
|-- package.json
|-- src         	# 开发用页面静态文件
	|-- pages  
		|-- test	# test页面
|-- images        	# 开发用图片
|-- common       	# 开发用公用库文件
|-- build 			# 线上引用
	|-- pages  
		|-- test	# test页面压缩文件
	|-- images      # 线上引用用图片
	|-- common      # 线上引用用公用库文件（压缩）
</code></pre>

用于模块配置，它接受一个对象作为参数。该对象的成员与使用的同名模块一一对应。

每个目标的具体设置，需要参考该模板的文档。就cssmin来讲，minify目标的参数具体含义如下：

    expand：如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
    cwd：需要处理的文件（input）所在的目录。
    src：表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符。
    dest：表示处理后的文件名或所在目录。
    ext：表示处理后的文件后缀名。

grunt常用函数说明：

grunt.initConfig：定义各种模块的参数，每一个成员项对应一个同名模块。
grunt.loadNpmTasks：加载完成任务所需的模块。
grunt.registerTask：定义具体的任务。第一个参数为任务名，第二个参数是一个数组， 表示该任务需要依次使用的模块。

grunt常用模块：

    grunt-contrib-clean：删除文件。
    grunt-contrib-compass：使用compass编译sass文件。
    grunt-contrib-concat：合并文件。
    grunt-contrib-copy：复制文件。
    grunt-contrib-cssmin：压缩以及合并CSS文件。
    grunt-contrib-imagemin：图像压缩模块。
    grunt-contrib-jshint：检查JavaScript语法。
    grunt-contrib-uglify：压缩以及合并JavaScript文件。
    grunt-contrib-watch：监视文件变动，做出相应动作。
