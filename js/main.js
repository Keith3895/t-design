var $type="tee",$color="black",$y_pos="front",$nos_icons=0,$nos_text=0,$custom_img=0,custom_img_val=0;no_custom_img=0;
$(function(){
	$(".play-area").addClass($color);
	$("#color-pick").click(function(){
		$(".c-pick").toggleClass('hid');
	});
		$("#picture").click(function(){
		$(".pic-select").toggleClass('hid');
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
	for(var i=1;i<52;i++){
		document.querySelector(".custom-img-container").innerHTML+="<div class=\"custom-img custom-img"+i+"\"></div>";
		$(".custom-img"+i).css({'background':'url(\"../t-design/images/t-images/'+i+'.png\")','background-size':'contain'});
	}
	$(".custom-img").click(function(){
		$(".pic-select").addClass('hid');
		var str2=(($(this).attr('class').split(/\s+/))[1]).split("g");
		custom_img_val=Number(str2[1]);
		document.querySelector(".play-area").innerHTML+="<div id=\"selected-image"+no_custom_img+"\" style=\"background:none\"> <div class=\"image-back"+no_custom_img+"\" style=\"border:.5px red solid;width:50px;height:50px; \"> </div> </div>";
		$(".image-back"+no_custom_img).css({'background':'url(\"../t-design/images/t-images/'+custom_img_val+'.png\")','background-size':'contain','background-repeat':'no-repeat'});
		no_custom_img++;
		for(i=0;i<=no_custom_img;i++){
			$("#selected-image"+i).draggable({
				cursor: "move",
		    	containment: [20,20,400,500],
		    	opacity: 0.35
			});
			$(".image-back"+i).resizable({
		 		maxHeight: 300,
		 		maxWidth:300,
		 		minHeight:50,
		 		minWidth:50,
		 		// helper: "resizable-helper"
			});
		}
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
