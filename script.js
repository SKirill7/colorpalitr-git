function fun1 () {
	let rtl=document.getElementById('rtl');
	let rtr=document.getElementById('rtr');
	let rbr=document.getElementById('rbr');
	let rbl=document.getElementById('rbl');
	let ttl=document.getElementById('ttl');
	let ttr=document.getElementById('ttr');
	let tbr=document.getElementById('tbr');
	let tbl=document.getElementById('tbl');

	let block=document.getElementById('block');

	ttl.value=rtl.value;
	ttr.value=rtr.value;
	tbr.value=rbr.value;
	tbl.value=rbl.value;

	block.style.borderRadius=rtl.value+'px ' +rtr.value +'px ' +rbr.value +'px '+rbl.value+'px ';
}
let input=document.querySelectorAll("input");

for (var i = 0; i < input.length; i++){
		input[i].addEventListener('input',function(){
			let red = document.getElementById('rr').value,
					green = document.getElementById('rg').value,
					blue = document.getElementById('rb').value;
					let display = document.getElementById('block');

					tr.value=rr.value;
					tg.value=rg.value;
					tb.value=rb.value;			

					display.style.background="rgb(" + red + "," + green	+ "," + blue + ")";
		})
}


