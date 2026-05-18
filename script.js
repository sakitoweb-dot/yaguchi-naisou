jQuery(".drawer-icon").on('click', function(){
    jQuery(this).toggleClass("is-checked"),
    jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery(".drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
  // 背景固定などをしている場合は、ここで解除する処理を入れる
  // jQuery("body").removeClass("is-fixed"); 
});

// ふわっと表示させる
const intersectionObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view"); //何度もフワっとさせる
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem) {
  intersectionObserver.observe(inViewItem);
});

