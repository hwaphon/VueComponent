# vuecomponent

### 安装

	git clone https://github.com/hwaphon/VueComponent.git
	cd VueComponent
	npm i
	npm run dev

### Icon 组件 

介绍: 项目中引入了 [Font Awesome](http://fontawesome.io/icons/)，所以只要是 `Font Awesome` 中有的图标都可以在项目中使用，不过 `Icon` 组件又对其进行了封装，可以非常方便的使用。比如需要使用一个 `book` 图标，我们会用一下代码

	<i class="fa fa-book" aria-hidden="true"></i>

不过如果使用了 `Icon` 组件，只需要 `<Icon type="book"></Icon>` 就可以了，内部使用的是 `span` 标签。`Icon` 支持的属性如下表所示：

<table>
	<thead>
		<th>属性</th>
		<th>说明</th>
		<th>类型</th>
		<th>默认值</th>
	</thead>
	<tbody>
		<tr>
			<td>type</td>
			<td>icon 的类型</td>
			<td>String</td>
			<td>-</td>
		</tr>
		<tr>
			<td>size</td>
			<td>icon 的大小</td>
			<td>String | Number</td>
			<td>28</td>
		</tr>
		<tr>
			<td>color</td>
			<td>icon 的颜色</td>
			<td>String</td>
			<td>-</td>
		</tr>
	</tbody>
</table>

效果示意图：

![image](./demosrc/h-icon/h-icon-basic.png)

### Radio 组件

![image](./demosrc/h-radio/h-radio-basic.png)
