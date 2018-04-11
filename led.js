function checkInt(o){	return (isNaN(parseFloat(o)))? 0 : parseFloat(o);}function highlight_error(o,msg){	msg = (typeof msg === "undefined") ? false : msg;	o.addClass('error');	if(msg != '')	o.after('<span class="err">' + msg + '</span>');	if(typeof  window.error !== "undefined") window.error = true;}var room_option = new Array(18);room_option[0] = ['Bedroom',	100,150,250];room_option[1] = ['Drawing room',	100,150,200];room_option[2] = ['Kitchen',	150,200,300];room_option[3] = ['Passage/lobby',	50,100,150];room_option[4] = ['Balcony/Stairs',	50,100,150];room_option[5] = ['Conference',	200,300,500];room_option[6] = ['Pantry',	100,150,200];room_option[7] = ['Office',	150,250,350];room_option[8] = ['Party hall',	400,500,700];room_option[9] = ['Waiting',	50,75,100];room_option[10] = ['Warehouse',	100,150,200];room_option[11] = ['Classroom',	150,250,350];room_option[12] = ['Supermarket',	600,750,1000];room_option[13] = ['Shops',	200,300,400];room_option[14] = ['Showroom',	400,700,1500];room_option[15] = ['Restaurant',	100,200,500];room_option[16] = ['Hospital',	200,400,800];room_option[17] = ['Library',	200,300,400];var led_lights = new Array(7);led_lights[0] = ['Cubie/Halo  5W',	5, 'http://www.electricalbasicwork.tk/'];led_lights[1] = ['Cubie/Halo 10W',	10, 'http://www.electricalbasicwork.tk/'];led_lights[2] = ['Cubie/Halo 12W',	12, 'http://www.electricalbasicwork.tk/'];led_lights[3] = ['Cubie/Halo 18W',	18, 'http://www.electricalbasicwork.tk/'];led_lights[4] = ['Cubical 9W',	7,'http://www.electricalbasicwork.tk/'];led_lights[5] = ['Cubical 12W',9,'http://www.electricalbasicwork.tk/'];led_lights[6] = ['Eclipse 12W',10, 'http://www.electricalbasicwork.tk/'];$(function() {	jQuery('#roomType').empty();	var product_list='';	var select = document.getElementById("roomType");	jQuery.each(room_option, function(val, text) {			var opt = new Option(text[0], val);			select.options[select.options.length] = opt;	});		$('form#calcForm').on('submit', function(e) {		 e.preventDefault(); 		var error = false;		$('input').removeClass('error');		$('span.err').remove();				$("#width").val(checkInt($("#width").val()));		$("#length").val(checkInt($("#length").val()));		$("#height").val(checkInt($("#height").val()));		if( $("#width").val() <=0){highlight_error($('#width'),"Invalid Width");error=true;}		if( $("#length").val() <=0){ highlight_error($('#length'),"Invalid Length");error=true;}		if( $("#height").val() <=0){ highlight_error($('#height'),"Invalid Height");error=true;}				if(!error){						lux_intensity = room_option[$('#roomType').val()][$("input:radio[name=intensity]:checked").val()];						area = $("#width").val() * $("#length").val();			area = area * $( "input:radio[name=unit]:checked" ).val();			lumens = area * lux_intensity * 1.2;						lumens = lumens * $( "input:radio[name=wallcolor]:checked" ).val();			lumens = lumens * $( "input:radio[name=placement]:checked" ).val();						watts = lumens/130;			watts = parseInt(watts);			lumens = Math.ceil(lumens);			printArea = area * 10.7639;			printArea = Math.ceil(printArea);			result = '<div class="luxResult">'+lumens+' Lumens OR '+watts+' Watts</div>';			result = result + '<span>are required to illuminate your '+ room_option[$('#roomType').val()][0] +' of <b>Area '+ printArea +' m&sup2;</b> (sq.m)<br>(Check different LED lighting options for your room below)</span><table width="50%" border="0" cellspacing="0" cellpadding="0"><tr class="first"><td>Options</td><td>LED Light</td><td>Nos</td></tr>';			option=1;			jQuery.each(led_lights, function(val, text) {				nos = watts/text[1];				nos = Math.ceil(nos);				result = result +'<tr><td>'+option+'</td><td>'+ '<a target="_blank" href="'+ text[2] +'">'+ text[0] +'</a></td><td>'+ nos +'</td></tr>';				option++;			});			result = result + '</table><img class="wp-image-286 size-full" src="http://www.charlstonlights.com/wp-content/uploads/2014/05/led-preferred-layout.png" alt="Preferred LED Lighting Layout" width="463" height="281" />';			$("#result").html(result);		}	});});jQuery(document).ready(function() {	$('form#calcForm').submit();});
