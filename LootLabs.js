!function(){let t=window.fetch;window.fetch=function(e,n){return e.includes(`${INCENTIVE_SYNCER_DOMAIN}/tc`)?t(e,n).then(t=>t.ok?t.clone().json().then(e=>{let n="",s="",r="";e.forEach(t=>{n=t.urid,s=54,r=t.action_pixel_url});let a=n.substr(-5)%3,c=new WebSocket(`wss://${a}.${INCENTIVE_SERVER_DOMAIN}/c?uid=${n}&cat=${s}&key=${KEY}`);return c.onopen=()=>setInterval(()=>c.send("0"),1),c.onmessage=t=>{t.data.includes("r:")&&(PUBLISHER_LINK=t.data.replace("r:",""))},navigator.sendBeacon(`https://${a}.${INCENTIVE_SERVER_DOMAIN}/st?uid=${n}&cat=${s}`),fetch(r),fetch(`https://${INCENTIVE_SYNCER_DOMAIN}/td?ac=1&urid=${n}&&cat=${s}&tid=${TID}`),c.onclose=()=>window.location.href=decodeURIComponent(function t(e,n=5){let s="",r=atob(e),a=r.substring(0,n),c=r.substring(n);for(let o=0;o<c.length;o++){let u;s+=String.fromCharCode(c.charCodeAt(o)^a.charCodeAt(o%a.length))}return s}(PUBLISHER_LINK)),new Response(JSON.stringify(e),{status:t.status,statusText:t.statusText,headers:t.headers})}):JSON.stringify(t)):t(e,n)}}();
