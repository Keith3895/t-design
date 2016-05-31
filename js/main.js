var $type="tee",$color="black",$y_pos="front",$nos_icons=0,$nos_text=0,$custom_img=0;
$(function(){
	$(".play-area").addClass($color);
	$(".dr").draggable({
		cursor: "move",
    	containment: [20,20,400,500],
	});
	$(".test").resizable();
	$("#color-pick").click(function(){
		$(".c-pick").toggleClass('hid');
	});
	$('#red').click(function(){
				$(".play-area").removeClass($color);
				$color="red";
				$(".play-area").addClass($color);
	});
	$('#black').click(function(){
				$(".play-area").removeClass($color);
				$color="black";
				$(".play-area").addClass($color);
	});
	$('#white').click(function(){
				$(".play-area").removeClass($color);
				$color="white";
				$(".play-area").addClass($color);
	});
	$('#green').click(function(){
				$(".play-area").removeClass($color);
				$color="green";
				$(".play-area").addClass($color);
	});
	$('#navy').click(function(){
				$(".play-area").removeClass($color);
				$color="navy";
				$(".play-area").addClass($color);
	});	

	

	

});

// $(function() { 
//     $("#btnProceed").click(function() { 
//         html2canvas($(".play-area"), {
//             onrendered: function(canvas) {
//                 theCanvas = canvas;
//                 // Canvas2Image.saveAsPNG(canvas); 			//to download
//                 $("#img-out").append(canvas);              
//             }
//         });
//     });
// }); 
