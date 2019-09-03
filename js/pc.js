$(function(){
				setTimeout(function(){
					$('#mainpage').slideDown(1000);
					
				},1000);
	            /* setTimeout(function() {
	             	$.ajax({
	             		url:'http://io.oainin.com/loginOver',
	             		type:'get',
	             		async:true,
	             		success:function(msg){
	             			if(msg[0]){
	             				window.location.href='core.html';
	             			}
	             			else{
	             				console.log(msg[0]);
	             			}
	             		}
	             	});
	             },1000);*/
				
				
				setInterval(function(){
					if($('.username').val()!='' && $('.password').val()!=''){
						$('.password').blur(function(){
							$.ajax({
								url:'http://io.oainin.cn/logindb.php',
								type:'get',
								async:true,
								data:'username='+$('.username').val()+'&password='+$('.password').val(),
								success:function(msg){
									if(msg[0].username!=null){
										window.location.href='core.html';
									}
								}
							});
						});
					}
				},2000);
				
			});
