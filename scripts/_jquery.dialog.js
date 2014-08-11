/*
	version 0.0.1
	author: niuben
	date: 2014-08-07
*/
(function($){

	$.fn.dialog=function(option){
		  
		var defaults={
			//关闭样式
			closeID:".close",
			//打开样式
			openID:".open",
			//遮罩层
			isShadow:1,
			//层级数目
			zIndex:100	 
		};
		  
		//绑定对象		 
		var listObj=this;	
		
		$.extend(defaults, option);

		$.extend(this, {
			init: function(){
				if(defaults.isShadow){
				  	this.shadowCreate();
				}  

				var _this = this;
				$("#" + defaults.closeID).click(function(){
					_this.close();
				});	  
				$("#" + defaults.openID).click(function(){
					_this.open();
				});	  		  
				$(window).resize(function(){
					_this.setCenter(listObj);
				});
			},
			//设置弹出框为中心位置
			setCenter: function(){
			    $(this).css('position','absolute')
				.css('top', ( $(window).height() - $(this).height() ) /2 +$(window).scrollTop() + 'px')
				.css('left', ( $(window).width() - $(this).width() ) / 2+$(window).scrollLeft() + 'px')
				.css("z-index",defaults.zIndex);	
				return this;
			},
			
			//打开弹出框
			open: function(){				
				if(defaults.isShadow){
				   $(".shadow").show();   	
				}
				this.setCenter()
				$(this).show();		
			},
			
			//关闭弹出框
			close: function(){
				if(defaults.isShadow){
					$(".shadow").hide()
				}
				this.setCenter()
				$(this).hide();
			},
			
			shadowCreate: function(){
				var pageHeight = $(document).height(),
				pageWidth = $(document).width();

				if(!this.$shadow){
					this.$shadow = $('<div class="shadow"></div>');
					this.$shadow.css({
						position: "absolute",
						top: "0px",
						left: "0px",
						height: pageHeight + 'px',
						"z-index": defaults.zIndex - 1,
						width:  pageWidth +'px',
						opacity:  0.7,
						filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
						background: "#000",
						display: "none"
					})
					$("body").append(this.$shadow);
				}

				var _this = this;
				this.$shadow.click(function(){
				 	_this.close();
				});
								
			}
				
		});
		
		this.init();
	}				  
})(jQuery)