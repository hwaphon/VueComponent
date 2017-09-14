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

介绍：单选组件，使用场景比较常见，比如个人信息收集中的性别选择，做题系统中的单项选择题。为了适应大部分的需求，我为该组件设置了很多属性，比如可以设置组件的排列方向（水平或者垂直），文字的颜色，是否显示图标，图标的颜色大小等。下面用一张表格来详细介绍一下：

<table>
	<caption>Radio 属性</caption>
	<thead>
		<th>属性</th>
		<th>说明</th>
		<th>类型</th>
		<th>默认值</th>
	</thead>
	<tbody>
		<tr>
			<td>value</td>
			<td>此值即是选中的值，用 v-model 直接绑定即可</td>
			<td>String | Number | Array</td>
			<td>-</td>
		</tr>
		<tr>
			<td>direction</td>
			<td>决定组件的排列方向,只有两个可选的值, column 或者 row</td>
			<td>String</td>
			<td>column</td>
		</tr>
		<tr>
			<td>right</td>
			<td>决定单选按钮的位置，靠左放置或者靠右放置</td>
			<td>Boolean</td>
			<td>false</td>
		</tr>
		<tr>
			<td>size</td>
			<td>决定单选按钮的大小,此项设置后，选中时的对勾图标大小也会随之变化</td>
			<td>String | Number</td>
			<td>24</td>
		</tr>
		<tr>
			<td>color</td>
			<td>单选按钮整体的颜色，其实也就是边框+图标的颜色</td>
			<td>String</td>
			<td>#2c3e50</td>
		</tr>
		<tr>
			<td>border</td>
			<td>决定单选按钮是否有圆形边框，如果去除则选中时只有一个对勾图标</td>
			<td>Boolean</td>
			<td>false</td>
		</tr>
		<tr>
			<td>hrcolor</td>
			<td>实际上此组件是一个单选按钮组，此属性的作用就是每个单选按钮框之间的分割线的颜色，如果不想要该分割线，直接指定为 transparent 即可</td>
			<td>String</td>
			<td>#ccc</td>
		</tr>
		<tr>
			<td>items</td>
			<td>指定每一个单选按钮所需要的数据，最基本的就是 title 和 value 两个属性, 具体属性下面会列一个表来解释。</td>
			<td>Array</td>
			<td>[]</td>
		</tr>
	</tbody>
</table>

<table>
	<caption>item 的属性</caption>
	<thead>
		<th>属性</th>
		<th>说明</th>
		<th>类型</th>
		<th>默认值</th>
	</thead>
	<tbody>
		<tr>
			<td>title</td>
			<td>说明性文字，可以设置也可以不设置</td>
			<td>String</td>
			<td>-</td>
		</tr>
		<tr>
			<td>value</td>
			<td>当前按钮所代表的值</td>
			<td>String</td>
			<td>-</td>
		</tr>
		<tr>
			<td>icon</td>
			<td>当前按钮是否需要额外的图标，如需要，则指定其 type,如不需要，则不设置</td>
			<td>String</td>
			<td>-</td>
		</tr>
		<tr>
			<td>iconsize</td>
			<td>图标的大小</td>
			<td>String</td>
			<td>-</td>
		</tr>
		<tr>
			<td>iconcolor</td>
			<td>图标的颜色</td>
			<td>String</td>
			<td>-</td>
		</tr>
	</tbody>
</table>

![image](./demosrc/h-radio/h-radio-basic.png)
