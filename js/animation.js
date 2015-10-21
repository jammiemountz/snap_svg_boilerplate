console.log('animate your svgs here')

var mysvg = Snap('#mysvg')

mysvg.selectAll('path').forEach(function(el){
  el.animate({
    left: (Math.random() * 5),
    top: (Math.random() * 5)
  }, 1000)
})