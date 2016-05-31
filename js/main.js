
$(function(){
	$(".dr").draggable({
		cursor: "move",
    	containment: [20,20,400,500],
	});
	$(".test").resizable();
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
