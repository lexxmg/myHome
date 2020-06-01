$(function(){
	const ip = '192.168.0.101',
				btnContainer = $('.container-btn__container'),
				btnPopup = $('.heading-container__button'),
				btnSet = $('.container-settings__btn'),
				setForm = $('.container-settings__form'),
				temp = $('.js-temp'),
				formSet = $('.container-settings__form'),
				popup = $('.container-hiding');


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

	let timerId,
			refresh = 1000;

	function btnStat(){
		$.get('/lexx/myHome/php/laurent.php', {'ip': ip}, function(res){
			let outStatus = JSON.parse(res).out_table0;
			let outTemp = JSON.parse(res).temper0;

			temp.text(outTemp);
		
			for(let i = 0; i < btn.length; i++){
				if(outStatus.charAt(i) == 1) {
					btn[i].find('button').css({'color': 'white', 'border-color': 'white'});
				} else {
					btn[i].find('button').css({'color': 'gray', 'border-color': 'black'});
				}
			}
		});			
	}

	function getSet(){
		$.get('/lexx/myHome/php/set.php', function(response){
			const res = JSON.parse(response);
			console.log(res.ip);
			$('.js-timer').val(res.timer);
			$('.js-ip').val(res.ip);

			if(res.check == 'on') {
				$('.js-check').prop('checked', true);
			} else {
				$('.js-check').prop('checked', false);
			}
		});
	};

	getSet();


	//$.get('/xmlJson.php', {'ip': ip}, function(res){
	//	console.log(JSON.parse(res).out_table0);
	//});			

	btnStat();

	timerId = setInterval(btnStat, refresh);


	function btnOut(out, stat){  
		if(stat == 'toggle'){
			$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'toggle'}, function(res){
			}).done(btnStat);
	  }

	  if(stat == 'on'){
	  	$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'on'}, function(res){
			}).done(btnStat);
	  }	

	  if(stat == 'off'){
	  	$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'off'}, function(res){
			}).done(btnStat);
	  }

	  if(stat == 'auto'){
	  	clearTimeout(timerId);

	  	refresh = 50;
	  	timerId = setInterval(btnStat, refresh);
	  	console.log(refresh + ' ' + timerId);
	  	$.get('/lexx/myHome/php/laurent.php', {'ip': ip, 'out': out, 'st': 'auto'}, function(res){	
			}).done(function(){
				clearTimeout(timerId);
				refresh = 1000;
				timerId = setInterval(btnStat, refresh);
				btnStat();
				console.log(refresh + ' ' + timerId);
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
		btnOut(9, 'toggle');
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

	btnSet.on('click', function(){
		if($(this).attr('aria-expanded') == 'false'){
			formSet.slideDown(function(){
				btnSet.attr('aria-expanded', 'true');
			});
		} else {
			formSet.slideUp(function(){
				btnSet.attr('aria-expanded', 'false');
			});
		}
	});

	setForm.on('submit', function(event){
		event.preventDefault();
		$.get($(this).attr('action'),
					$(this).serialize())
					.done(alert('данные записаны'));
	});

	btnPopup.on('click', function(){
		if(btnPopup.attr('aria-expanded') == 'false') {
			btnPopup.addClass('js-heading-container__button-rotate');
			popup.slideDown(function(){
				btnPopup.attr('aria-expanded', 'true');
			});
		}	else {
			btnPopup.removeClass('js-heading-container__button-rotate');
			popup.slideUp(function(){
				btnPopup.attr('aria-expanded', 'false');
			});
		}
	});			
});