(function(){
  var btn   = document.getElementById("menuButton");
  var panel = document.getElementById("menuPanel");

  if(btn && panel){
    btn.addEventListener("click", function(e){
      e.stopPropagation();
      document.body.classList.toggle("menu-open");
    });

    document.addEventListener("click", function(){
      document.body.classList.remove("menu-open");
    });

    panel.addEventListener("click", function(e){ e.stopPropagation(); });
  }

  // swap-text — skip elements that define their own data-interval
  var swaps = Array.from(document.querySelectorAll(".swap-text:not([data-interval])"));
  if(!swaps.length) return;

  var cycleTime = 3200;
  var fadeTime  = 700;

  swaps.forEach(function(el){
    el.dataset.state = "a";
    el.textContent   = el.getAttribute("data-a") || "";
  });

  setInterval(function(){
    swaps.forEach(function(el){ el.classList.add("is-fading"); });

    setTimeout(function(){
      swaps.forEach(function(el){
        var a       = el.getAttribute("data-a") || "";
        var b       = el.getAttribute("data-b") || "";
        var showingA = el.dataset.state !== "b";
        el.textContent   = showingA ? b : a;
        el.dataset.state = showingA ? "b" : "a";
        el.classList.remove("is-fading");
      });
    }, fadeTime);
  }, cycleTime);
})();
