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
