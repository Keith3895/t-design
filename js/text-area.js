function changeval() {
		$total = parseInt($("#small").val()) + parseInt($("#medium").val()) + parseInt($("#large").val()) + parseInt($("#xlarge").val()) + parseInt($("#xxlarge").val());
		//alert($total);
		$('.small').val($("#small").val());
		$('.medium').val($("#medium").val());
		$('.large').val($("#large").val());
		$('.xlarge').val($("#xlarge").val());
		$('.xxlarge').val($("#xxlarge").val());
		$('.total').val($total);
	}

	function changeval2() {
		$total = parseInt($("#small2").val()) + parseInt($("#medium2").val()) + parseInt($("#large2").val()) + parseInt($("#xlarge2").val()) + parseInt($("#xxlarge2").val());
		//alert($total);
		$('.small').val($("#small2").val());
		$('.medium').val($("#medium2").val());
		$('.large').val($("#large2").val());
		$('.xlarge').val($("#xlarge2").val());
		$('.xxlarge').val($("#xxlarge2").val());
		$('.total').val($total);
	}

	function b() {
		$('#custom_text').toggleClass('bold_text');

	}

	function i() {
		$('#custom_text').toggleClass('italic_text');
	}

	function changeFont(_name) {
		$('#custom_text').css("font-family", _name);
	}

	function changeFontSize(_size) {
		console.log(_size);
		$('#custom_text').css("font-size", _size+"px");
	}

	function changeColor(_color) {
		$('#custom_text').css("color", _color);
	}