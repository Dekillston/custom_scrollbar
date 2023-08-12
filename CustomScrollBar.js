function CustomScrollbar(scroll) {
	var block = document.querySelector('body');
	//
	var CreateScroll = document.createElement('div');
	//
	CreateScroll.classList.add(scroll);
	scroll = CreateScroll;
	//
	block.appendChild(CreateScroll);
	//
	var Top = 0; Top = [Top, Top];
	//
	var MaxH = 30;
	//
	block.style.position = 'relative';
	document.documentElement.style.height = "100%";
	//
	var MassBlock = [0, 0];
	function NewBlock() {MassBlock = [block.scrollHeight, block.clientHeight];};
	//
	var SC = MassBlock;
	//
	var ScrollH = 0;
	//
	scroll.style = 'position: fixed; right: 0px; top: '+Top[0]+'px; height: '+ScrollH+'px; cursor: pointer;';
	//
	setInterval(() => {
		NewBlock();
		for(n in SC) {
			if(SC[n] !== MassBlock[n]) {
				if(!(block.clientHeight >= block.scrollHeight)) {
					scroll.style.display = 'block';
					//
					ScrollH = block.clientHeight * block.clientHeight / block.scrollHeight;
					//
					if(ScrollH <= MaxH) {
						ScrollH = MaxH;
					}
					scroll.style.top = Top[0]+'px';
					scroll.style.height = ScrollH+'px';	
				} else {
					scroll.style.display = 'none';
				}
				SC[n] = MassBlock[n];
			}
		}
	});
	//
	var Y = 0;
	//
	var bool = false;
	scroll.addEventListener("mousedown", (d) => {
		Y = d.clientY;
		//
		bool = true;
		//
		d.preventDefault();
	});
	window.addEventListener("mouseup", (d) => {
		bool = false;
		//
		Top[0] = Top[1];
		//
		d.preventDefault();
	});
	window.addEventListener('mouseleave', (d) => {
		bool = false;
		//
		d.preventDefault();
	});
	window.addEventListener('mousemove', (d) => {
		d.preventDefault();
		if(bool) {
			var T = (Top[0]+(Y-d.clientY)*(-1));
			if(T >= 0) {
				if(!(T+ScrollH >= block.clientHeight)) {
					scroll.style.top = T+'px';
					//
					Top[1] = T;
					//
					Shift(T);
				} else {
					scroll.style.top = (block.clientHeight-ScrollH)+'px';
					//
					Top[1] = (block.clientHeight-ScrollH);
					//
					Shift((block.clientHeight-ScrollH));
				}
			} else {
				scroll.style.top = '0px';
				//
				Top[1] = 0;
				//
				Shift(0);
			}
		}
	});
	//
	function Shift(p) {
		var F = ((p*100)/ (block.clientHeight-ScrollH));
		F = (((block.scrollHeight - block.clientHeight)*F)/100);
		//
		window.scrollTo(0, F);
	}
	//
	block.onscroll = function (e) {
		if(!bool) {
			var PerForm_1 = ((window.scrollY*block.clientHeight)/(block.scrollHeight - block.clientHeight));
	    	var PerForm_2 = ((100*ScrollH)/block.clientHeight);
	    	//
	    	var Form = (PerForm_1-((PerForm_1*PerForm_2)/100));
	    	//
	    	scroll.style.top = Form+'px';
	    	//
	    	Top[0] = Form; Top[1] = Form;
		}
	};
}