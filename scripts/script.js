$(function(){
	const ip = '192.168.0.101',
				btnContainer = $('.container-btn__container'),
				btnPopup = $('.heading-container__button'),
				popup = $('.container-scripts__buttons');


	const btn = [ 
							$('.js-btn-1'), $('.js-btn-2'), $('.js-btn-3'), $('.js-btn-4'),
							$('.js-btn-5'), $('.js-btn-6'), $('.js-btn-7'), $('.js-btn-8'),
							$('.js-btn-9'), $('.js-btn-10'), $('.js-btn-11'), $('.js-btn-12')
						];			

	const btnSort = [ 
							$('.js-btn-1'), $('.js-btn-3'), $('.js-btn-2'), $('.js-btn-11'),
							$('.js-btn-7'), $('.js-btn-5'), $('.js-btn-4'), $('.js-btn-10'),
							$('.js-btn-6'), $('.js-btn-9'), $('.js-btn-8'), $('.js-btn-12')
						]; 

	for(let i = 0; i < btnSort.length; i++) {
		btnSort[i].css({'order': i });
	}

	let outStatus;

	function btnStat(){
		$.get('/lexx/myHome/php/laurent.php', {'ip': ip}, function(res){
			outStatus = JSON.parse(res).out_table0;
		
			for(let i = 0; i < btn.length; i++){
				if(outStatus.charAt(i) == 1) {
					btn[i].find('button').css({'color': 'white', 'border-color': 'white'});
				} else {
					btn[i].find('button').css({'color': 'gray', 'border-color': 'black'});
				}
			}
		});			
	}


	//$.get('/xmlJson.php', {'ip': ip}, function(res){
	//	console.log(JSON.parse(res).out_table0);
	//});			

	btnStat();

	setInterval(btnStat, 1000);

	function btnOut(out, stat){  
		if(stat == 'toggle'){
			$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'toggle'}, function(res){
				if(res == 'Success! DONE'){
					console.log(res);
		  	}
		  	btnStat();
			});
	  }

	  if(stat == 'on'){
	  	$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'on'}, function(res){
				if(res == 'Success! DONE'){
					console.log(res);
		  	}
		  	btnStat();
			});
	  }

	  if(stat == 'off'){
	  	$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'off'}, function(res){
				if(res == 'Success! DONE'){
					console.log(res);
		  	}
		  	btnStat();
			});
	  }

	  if(stat == 'auto'){
	  	$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'auto'}, function(res){	
			}).done(function(){
				btnStat();
				console.log('ok');
			});
		}	
	}							


	/*
	$('.container-btn__section-1').on('click', 'button', function(){
		console.log($(this));
	});
  */

	btn[0].on('click', function(){
		btnOut(1, 'toggle');
	});

	btn[1].on('click', function(){
		btnOut(2, 'toggle');
	});

	btn[2].on('click', function(){
		btnOut(3, 'toggle');
	});

	btn[3].on('click', function(){
		btnOut(4, 'toggle');
	});

	btn[4].on('click', function(){
		btnOut(5, 'auto');
	});

	btn[5].on('click', function(){
		btnOut(6, 'toggle');
	});

	btn[6].on('click', function(){
		btnOut(7, 'toggle');
	});

	btn[7].on('click', function(){
		btnOut(8, 'toggle');
	});

	btn[8].on('click', function(){
		btnOut(9, 'auto');
	});

	btn[9].on('click', function(){
		btnOut(10, 'auto');
	});

	btn[10].on('click', function(){
		btnOut(11, 'auto');
	});
 
  btn[11].on('click', function(){
		btnOut(12, 'auto');
	});
	

	btnPopup.on('click', function(){
		if(btnPopup.attr('aria-expanded') == 'false') {
			btnPopup.addClass('js-heading-container__button-rotate');
			popup.slideDown(function(){
				btnPopup.attr('aria-expanded', 'true');
				popup.css('display', 'flex');
			});
		}	else {
			btnPopup.removeClass('js-heading-container__button-rotate');
			popup.slideUp(function(){
				btnPopup.attr('aria-expanded', 'false');
			});
		}
	});			
});