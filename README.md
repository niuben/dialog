dialog
======

### 

  插件介绍：
  
  运用场景：
  
  引用文件： _jquery.dialog.js


代码示例
---------
 **Html**
 <pre>
  &lt;input type="button" value="打开" id="open" /&gt;
&lt;input type="button" value="关闭"/&gt;

&lt;div class="dialog" id="dialog"&gt;
  &lt;div class="dialog-header clearfix"&gt;
    &lt;div class="dialog-title"&gt;新增用户&lt;/div&gt;
    &lt;div class="dialog-close" id="close"&gt;&times;&lt;/div&gt;        
  &lt;/div&gt;
  &lt;div class="dialog-content clearfix"&gt;        
      
  &lt;/div&gt;    
  &lt;div class="dialog-foot"&gt;
    &lt;input type="button" class="button-bg dialog-form-button mr30" value="提交"/&gt;
    &lt;input type="button" class="button-bg dialog-form-button" value="取消"/&gt;
  &lt;/div&gt;
&lt;/div&gt; 
	</pre>


**Javascript**
<pre>
	$("#dialog").dialog({
    closeID: "close",
    openID: "open"
  }); 
</pre>

版本历史
--------
v 0.0.1     beta    2014-8-11
