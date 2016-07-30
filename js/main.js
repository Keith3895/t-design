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

			});
		}
	});
	for(i=0;i<100;i++)
	document.querySelector('#font_size').innerHTML+="<option value=\""+Number(i)+"\"> "+i+"px</option>";
	
	$('#apply_text').click(function(){
		
		var text_val = jQuery("textarea#custom_text").val();
		if(!text_val)
			return false;
		
			$(".play-area").append("<div id=text"+($nos_text)+" class='new_text' style=\"background:none;\"></span><textarea id='text_style' >"+text_val+"</textarea></div>");
			$( "#text"+($nos_text)+"" ).draggable({
				cursor: "move",
		    	containment: [20,20,400,600],
			});
			$( "#text"+($nos_text)+"" ).resizable({
				maxHeight: 480,
				maxWidth: 450,
				minHeight: 60,
				minWidth: 60
			});

		var $font_ = $('#custom_text').css("font-family");
		var $font_size= $('#custom_text').css("font-size");
		var $font_weight= $('#custom_text').css("font-weight");
		var $font_style	= $('#custom_text').css("font-style");
		var $font_color = $('#custom_text').css("color");
		//alert($font_u);
		
		
		$("#text"+($nos_text)+" textarea" ).css("font-family", $font_);
		$("#text"+($nos_text)+" textarea" ).css("font-size", $font_size);
		$("#text"+($nos_text)+" textarea" ).css("font-weight", $font_weight);
		$("#text"+($nos_text)+" textarea" ).css("font-style", $font_style);
		$("#text"+($nos_text)+" textarea" ).css("color", $font_color);
		$("#text"+($nos_text)).css({'top':'100px','left':'150px'});
		$("#text"+($nos_text)+" textarea" ).css({'background':'none','width':'50px'});
		//document.getElementById("text"+($nos_text)+" textarea").style.textDecoration=(""+$font_u+"");
		++$nos_text;
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
