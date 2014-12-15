vso_grunt
=========
组织结构
-------------------------------------------------------------------
vso_grunt

<pre><code>
vso_grunt
<<<<<<< HEAD
|-- gruntfile.js
|-- package.json
|-- dist        # 构建目录
|-- docs        # 文档
|-- fonts       # Icon font，目前使用了 http://staticfile.org/
|-- gulpfile.js # 构建配置文件
|-- js          # JS 文件
|-- less        # LESS 文件
|-- tools       # 相关工具
|-- vendor
`-- widget      # Web 组件
</code></pre>
=======
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
>>>>>>> 94a3193f4a2cc1a8393228d3f49b42a0ac4efef3
