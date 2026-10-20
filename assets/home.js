/* WysiQ home — oscilloscope trace + scroll reveal. No tracking, no storage. */
(function(){
  document.documentElement.classList.remove('no-js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }

  // Oscilloscope traces behind the hero
  var c = document.getElementById('scope');
  if (!c || !c.getContext) return;
  var ctx = c.getContext('2d'), W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), t = 0, raf = null;
  var traces = [
    {col:'84,212,200', a:.55, amp:.22, f:[1.3,3.1,7.0], w:[1,.35,.12], sp:.35, y:.50, lw:2},
    {col:'138,92,246', a:.35, amp:.16, f:[.8,2.2,5.3], w:[1,.45,.2], sp:-.22, y:.56, lw:1.6},
    {col:'245,184,75', a:.22, amp:.10, f:[2.4,6.1,13], w:[1,.3,.15], sp:.5, y:.44, lw:1.2}
  ];
  function size(){
    var r = c.getBoundingClientRect(); W = r.width; H = r.height;
    c.width = Math.round(W*dpr); c.height = Math.round(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    traces.forEach(function(tr){
      ctx.beginPath();
      for (var x = 0; x <= W; x += 3){
        var u = x / W * Math.PI * 2, v = 0;
        for (var k = 0; k < tr.f.length; k++) v += tr.w[k] * Math.sin(u*tr.f[k] + t*tr.sp*(k+1) + k*1.7);
        var env = Math.sin(Math.PI * x / W); // fade at edges
        var y = H*tr.y + v * H * tr.amp * env;
        if (x === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = 'rgba('+tr.col+','+tr.a+')'; ctx.lineWidth = tr.lw;
      ctx.shadowColor = 'rgba('+tr.col+',.8)'; ctx.shadowBlur = 10;
      ctx.stroke();
    });
    ctx.shadowBlur = 0;
  }
  function loop(){ t += 0.016; draw(); raf = requestAnimationFrame(loop); }
  size(); draw();
  window.addEventListener('resize', function(){ size(); draw(); });
  if (!reduce) {
    loop();
    document.addEventListener('visibilitychange', function(){
      if (document.hidden){ cancelAnimationFrame(raf); raf = null; } else if (!raf){ loop(); }
    });
  }
})();
