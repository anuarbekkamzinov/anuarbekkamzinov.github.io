new Swiper ('.swiper' , {
    slidesPerView: 3,
    loop: true, 
}); 

$(".subscribe").on("click", function() {
    console.log($(".inputEmail").val());
    $.ajax({
        type: "POST",
        url: "some.php",
        data: {email:$(".inputEmail").val()},
    }); 
  });
 

  function demoClick() {
      console.log('demoClick');
  }
 
 document.querySelector(".link-home").addEventListener("click" , demoClick);