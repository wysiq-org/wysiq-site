/* WysiQ — page Vidéos construite automatiquement à partir du dossier /videos/.
 *
 * Convention (dans /videos/) :
 *   01-ma-video.mp4      la vidéo (.mp4 ou .webm)
 *   01-ma-video.txt      1re ligne = titre, lignes suivantes = texte d'explication (page FR)
 *   01-ma-video.en.txt   facultatif : même chose en anglais (sinon le .txt est utilisé)
 *   01-ma-video.jpg      facultatif : vignette (.jpg/.png/.webp) ; sinon une image de la vidéo
 * L'ordre d'affichage suit le nom de fichier (d'où le préfixe 01-, 02-…).
 *
 * Liste des fichiers : API GitHub du dépôt indiqué dans site-config.json (site_repo / site_branch),
 * sinon videos/index.json (généré par .github/workflows/videos-index.yml) — utile si le dépôt est privé
 * ou si la limite de l'API (60 requêtes/heure par visiteur) est atteinte.
 */
(function(){
  var lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  var L = {
    fr:{close:'Fermer ✕', play:'Lire', empty:'Les premières vidéos arrivent très bientôt.', err:'Impossible de charger la liste des vidéos pour le moment.'},
    en:{close:'Close ✕', play:'Play', empty:'The first videos are coming very soon.', err:'The video list cannot be loaded right now.'}
  }[lang];
  var root = document.getElementById('videos'); if (!root) return;
  var DIR = 'videos/';
  var VID = /\.(mp4|webm)$/i, IMG = /\.(jpe?g|png|webp)$/i;

  function esc(s){ return String(s||'').replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function getJSON(u){ return fetch(u,{cache:'no-cache'}).then(function(r){ if(!r.ok) throw r.status; return r.json(); }); }
  function getText(u){ return fetch(u,{cache:'no-cache'}).then(function(r){ return r.ok ? r.text() : null; }).catch(function(){ return null; }); }

  function listFiles(){
    var fromIndex = function(){ return getJSON(DIR+'index.json').then(function(j){ return j.files || j; }); };
    return getJSON('site-config.json').then(function(c){
      var repo = c.site_repo || 'wysiq-org/wysiq-site', br = c.site_branch || 'main';
      return getJSON('https://api.github.com/repos/'+repo+'/contents/videos?ref='+encodeURIComponent(br));
    }).then(function(a){
      return a.filter(function(x){ return x.type === 'file'; }).map(function(x){ return x.name; });
    }).catch(fromIndex);
  }

  function parseTxt(t, fallback){
    if (!t) return {t:fallback, d:''};
    var lines = t.replace(/^﻿/,'').replace(/\r\n?/g,'\n').split('\n');
    while (lines.length && !lines[0].trim()) lines.shift();
    var title = (lines.shift()||fallback).trim();
    var body = lines.join('\n').trim();
    return {t:title, d:body};
  }
  function prettyName(base){ return base.replace(/^\d+[-_ .]*/,'').replace(/[-_]+/g,' ').replace(/^./,function(c){return c.toUpperCase();}); }
  function fmt(sec){ if(!isFinite(sec)) return ''; sec=Math.round(sec); return Math.floor(sec/60)+':'+('0'+sec%60).slice(-2); }
  function paras(d){ return d ? d.split(/\n\s*\n/).map(function(p){ return '<p>'+esc(p).replace(/\n/g,'<br>')+'</p>'; }).join('') : ''; }

  listFiles().then(function(files){
    var set = {}; files.forEach(function(f){ set[f] = true; });
    var vids = files.filter(function(f){ return VID.test(f); }).sort(function(a,b){ return a.localeCompare(b,undefined,{numeric:true}); });
    if (!vids.length){ root.innerHTML = '<p class="vempty">'+L.empty+'</p>'; return; }
    return Promise.all(vids.map(function(f){
      var base = f.replace(VID,'');
      var txtName = (lang==='en' && set[base+'.en.txt']) ? base+'.en.txt' : (set[base+'.txt'] ? base+'.txt' : null);
      var poster = ['jpg','jpeg','png','webp'].map(function(e){ return base+'.'+e; }).filter(function(n){ return set[n]; })[0];
      return (txtName ? getText(DIR+encodeURIComponent(txtName)) : Promise.resolve(null)).then(function(t){
        var info = parseTxt(t, prettyName(base));
        return {id:base, src:DIR+encodeURIComponent(f), poster:poster?DIR+encodeURIComponent(poster):'', t:info.t, d:info.d};
      });
    })).then(render);
  }).catch(function(){ root.innerHTML = '<p class="vempty">'+L.err+'</p>'; });

  var items = [];
  function render(list){
    items = list;
    root.innerHTML = '<div class="vgrid">' + list.map(function(v,i){
      return '<article class="vcard">'
        + '<button type="button" class="vthumb" data-i="'+i+'" aria-label="'+esc(L.play+' : '+v.t)+'">'
        + (v.poster ? '<img src="'+esc(v.poster)+'" alt="" loading="lazy">'
                    : '<video src="'+esc(v.src)+'#t=1" muted playsinline preload="metadata" tabindex="-1"></video>')
        + '<span class="vplay"><span><svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg></span></span>'
        + '<span class="vbadge" hidden></span></button>'
        + '<div class="vbody"><h3>'+esc(v.t)+'</h3>'+paras(v.d)+'</div></article>';
    }).join('') + '</div>';
    // Durée lue dans les métadonnées de chaque vidéo
    list.forEach(function(v,i){
      var probe = document.createElement('video'); probe.preload = 'metadata'; probe.muted = true; probe.src = v.src;
      probe.addEventListener('loadedmetadata', function(){
        var b = root.querySelector('.vthumb[data-i="'+i+'"] .vbadge'); var d = fmt(probe.duration);
        if (b && d){ b.textContent = d; b.hidden = false; } probe.removeAttribute('src'); probe.load();
      });
    });
  }

  // Lecteur plein écran
  var modal = document.createElement('div'); modal.className = 'vmodal'; modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true');
  modal.innerHTML = '<div class="vmodal-box"><div class="vmodal-head"><h3></h3><button type="button" class="vclose">'+L.close+'</button></div><div class="vframe"></div><div class="vmodal-desc"></div></div>';
  document.body.appendChild(modal);
  var frame = modal.querySelector('.vframe'), lastFocus = null;
  function close(){ modal.classList.remove('open'); frame.innerHTML = ''; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  function open(v){
    lastFocus = document.activeElement;
    modal.querySelector('h3').textContent = v.t;
    modal.querySelector('.vmodal-desc').innerHTML = paras(v.d);
    frame.innerHTML = '<video controls autoplay playsinline preload="auto"'+(v.poster?' poster="'+esc(v.poster)+'"':'')+' src="'+esc(v.src)+'"></video>';
    modal.classList.add('open'); document.body.style.overflow = 'hidden'; modal.querySelector('.vclose').focus();
  }
  root.addEventListener('click', function(e){ var b = e.target.closest('.vthumb'); if (b && items[b.dataset.i]) open(items[b.dataset.i]); });
  modal.addEventListener('click', function(e){ if (e.target === modal || e.target.classList.contains('vclose')) close(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
})();
