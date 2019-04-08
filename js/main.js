
//scroll pagination
$(function() {
  $.scrollify({
	section:".section",
    scrollbars:false,
    before:function(i,sections) {

      var ref = sections[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"></a></li>";
      });

      pagination += "</ul>";

      $(".section1").append(pagination);
      $(".pagination a").on("click",$.scrollify.move);
      $(".next").on("mouseover",$.scrollify.move);
    }
  });
});

//horisontal slider

var slider = document.getElementById("myRange");

var nextSection1 = document.getElementById("slide_1988");
var nextSection2 = document.getElementById("slide_2009");
var nextSection3 = document.getElementById("slide_2016");

function handleButtonMove(nextSection) {
   nextSection.scrollIntoView({block: "center", behavior: "smooth"});
}

slider.oninput = function() {
	if (this.value <= 25){
		handleButtonMove(nextSection3);
		//setTimeout("slider.value = 1", 2000);
		this.value = 1;
	}
	else if (this.value > 25 && this.value <= 75){
		handleButtonMove(nextSection2);
		//setTimeout("slider.value = 50", 2000);
		this.value = 50;
	}
	else if (this.value > 75){
		handleButtonMove(nextSection1);
		//setTimeout("slider.value = 100", 2000);
		this.value = 100;
	}
}

$( 'input' ).on( 'input', function() {
  $( this ).css( 'background', 'linear-gradient(to left, #455163 0%, #455163 '+ slider.value +'%, #d1eaff ' + slider.value + '%, #d1eaff 100%)');
} );
