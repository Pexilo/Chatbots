(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();class i{constructor(t,o){this.name=t,this.avatar=o,this.commands={}}addCommand(t,o){this.commands[t]=o}async respondToCommand(t,o=[]){return this.commands[t]?await this.commands[t](...o):"Je ne comprends pas cette commande."}}const m=async(e="all")=>{const t="https://date.nager.at/api/v3/publicholidays/2024/FR";try{const o=await fetch(t);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const a=await o.json(),s=new Date;let n=a;return e==="next"?n=a.filter(r=>new Date(r.date)>=s):e==="past"&&(n=a.filter(r=>new Date(r.date)<s)),n.map(r=>`${r.date}: ${r.localName} (${r.name})`).join("<br>")}catch{return"Erreur lors de la récupération des données."}},u=async(e,t)=>{if(!e||!t)return"Veuillez saisir un launcher (minecraft, steam, xbox) et un identifiant de joueur.";const o=`https://playerdb.co/api/player/${e}/${t}`;try{const a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const n=(await a.json()).data.player;return e==="steam"?v(n):e==="minecraft"?x(n):e==="xbox"?w(n):"Aucun filtre appliqué. Veuillez saisir un launcher (minecraft, steam, xbox)."}catch{return"Erreur lors de la récupération des données."}},v=e=>{const{meta:t,avatar:o,username:a}=e;return`
    Voici les statistiques de ${a} sur Steam :<br>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 10px; background-color: #68ab57; padding: 10px; border-radius: 15px;">
      <img src="${o}" alt="avatar" width="50" height="50" style="border-radius: 50%;">
      <b>${a}</b> ${t.loccountrycode}<br>
      <b>SteamID</b> ${t.steamid}<br>
      <b>Steam2ID</b> ${t.steam2id}<br>
      <b>Steam3ID</b> ${t.steam3id}<br>
      <a href="${t.profileurl}" target="_blank">${t.profileurl}</a>
    </div>
  `},x=e=>{const{id:t,avatar:o,username:a,skin_texture:s,raw_id:n}=e;return`
    Voici les statistiques de ${a} sur Minecraft :<br>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 10px; background-color: #68ab57; padding: 10px; border-radius: 15px;">
      <img src="${o}" alt="avatar" width="50" height="50" style="border-radius: 50%;">
      <b>${a}</b><br>
      <b>ID</b> ${t}<br>
      <b>Raw ID</b> ${n}<br>
      <b>Skin</b> <a href="${s}" target="_blank">Voir le skin</a>
    </div>
  `},w=e=>{const{meta:t,avatar:o,username:a}=e;return`
      Voici les statistiques de ${a} sur Xbox Live :<br>
      <div style="display: flex; flex-direction: column; align-items: center; margin-top: 10px; background-color: #68ab57; padding: 10px; border-radius: 15px;">
        <img src="${o}" alt="avatar" width="50" height="50" style="border-radius: 50%;">
        <b>${a}</b><br>
        <b>Gamerscore</b> ${t.gamerscore}<br>
        <b>Account Tier</b> ${t.accountTier}<br>
        <b>Reputation</b> ${t.xboxOneRep}
      </div>
    `},p=async(e,t="")=>{const o="https://yesno.wtf/api";try{const a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const s=await a.json();return s.answer=s.answer.replace("yes","oui").replace("no","non"),e==="ask"?`
      <p>${s.answer}</p>
      <img src="${s.image}" alt="YesNo" height="100">
      `:e==="random"?`
      <img src="${s.image}" alt="YesNo" height="100">
      `:e==="guess"?t===s.answer?`
        <p>Bonne réponse !</p>
        <img src="${s.image}" alt="YesNo" height="100">
        `:`
      <p>Raté !</p>
      `:"Veuillez saisir une commande valide (ask, random, guess)."}catch{return"Erreur lors de la récupération des données."}},$="/Chatbots/assets/umbrella-c95QCS5f.png",B="/Chatbots/assets/gamepad-Bl2quR-G.png",C="/Chatbots/assets/yes-no-CSbhPkaa.png",c=[new i("Vacances Bot",$),new i("Player Stats Bot",B),new i("YesNo Bot",C)];c[0].addCommand("hello",()=>"👋 Bonjour, je suis Vacances Bot !<br>🌴 Vous voulez savoir quand sont les prochains jours fériés ? Je suis là pour vous aider !<br>🗓️ Essayez les commandes suivantes <code>next</code> <code>past</code> <code>all</code>");c[0].addCommand("help",()=>"Commandes disponibles <code>hello</code> <code>help</code> <code>next</code> <code>past</code> <code>all</code>");c[0].addCommand("next",async()=>await m("next"));c[0].addCommand("past",async()=>await m("past"));c[0].addCommand("all",async()=>await m("all"));c[1].addCommand("hello",()=>"🎮 Bonjour, je suis Player Stats Bot !<br>📊 Je peux vous aider à obtenir des statistiques de jeu à partir de votre identifiant de joueur.<br>🕹️ Essayez les commandes suivantes  <code>steam 'playerId'</code> <code>minecraft 'playerId'</code> <code>xbox 'playerId'</code><br>📋 Exemple <code>steam pexilo</code>");c[1].addCommand("help",()=>"Commandes disponibles <code>hello</code> <code>help</code> <code>steam 'playerId'</code> <code>minecraft 'playerId'</code> <code>xbox 'playerId'</code>");c[1].addCommand("steam",async e=>await u("steam",e));c[1].addCommand("minecraft",async e=>await u("minecraft",e));c[1].addCommand("xbox",async e=>await u("xbox",e));c[2].addCommand("hello",()=>"❓ Bonjour, je suis YesNo Bot !<br>🔮 Je peux répondre à vos questions par oui ou non.<br>🗣️Essayez la commande suivante <code>ask 'votre phrase'</code> <code>random</code> <code>guess 'oui'/'non'</code>");c[2].addCommand("help",()=>"Commandes disponibles <code>hello</code> <code>help</code> <code>ask 'votre phrase'</code> <code>random</code> <code>guess 'oui' ou 'non'</code>");c[2].addCommand("ask",async()=>await p("ask"));c[2].addCommand("random",async()=>await p("random"));c[2].addCommand("guess",async e=>await p("guess",e));const E=()=>{const e=document.createElement("div");return e.id="chatBox",e.innerHTML=`
    <input id="chatInput" type="text" placeholder="Tapez un message"/>
    <button id="sendButton">Envoyer</button>
  `,e},I=e=>{const t=document.createElement("div");return t.id="selector",e.forEach(o=>{const a=document.createElement("button"),s=document.createElement("img");s.src=o.avatar,s.alt=`${o.name} avatar`,s.classList.add("bot-avatar"),a.appendChild(s),a.innerHTML+=o.name,a.classList.add("bot-button"),a.addEventListener("click",()=>S(o)),t.appendChild(a)}),t},S=e=>{document.querySelector("#selectedBot").innerText=e.name,document.querySelector("#selectedBotAvatar").src=e.avatar;const t=document.getElementById("messages");t.innerHTML="",h(e.name).forEach(({sender:a,text:s,timestamp:n})=>{const r=a!==e.name,d=f(a,s,n,r);r?d.classList.add("user"):d.classList.add("bot"),t.appendChild(d)}),t.scrollTop=t.scrollHeight,L(e)},L=async e=>{const t=document.getElementById("messages");if(!h(e.name).some(s=>s.text.includes("Bonjour")&&s.sender===e.name)){const s=await e.respondToCommand("hello");l(t,e.name,s,!1)}},b="/Chatbots/assets/robot-G1xbJUVu.png",T=()=>{const e=document.createElement("div");e.appendChild(I(c)),e.appendChild(k()),e.appendChild(E());const t=document.createElement("div");return t.id="selectedBotInfo",t.innerHTML=`
      <img id="selectedBotAvatar" src="${b}" alt="Bot Avatar" width="25" height="25"/>
      <span id="selectedBot">Sélectionnez un bot</span>
    `,e.appendChild(t),e},M=()=>{const e=document.getElementById("selectedBotAvatar");return e?e.src:b},f=(e,t,o,a)=>{const s=document.createElement("div");return s.classList.add("message"),s.innerHTML=`
  <div class="message-container">
      <div class="message-content">
        <div class="sender">  ${a?"":`<img class="avatar" src="${M()}" alt="${e} Avatar" width="25" height="25"/>`} ${e} <span class="timestamp">${o}</span></div>
        <span class="text">${t}</span>
      </div>
  </div>
  `,s},k=()=>{const e=document.createElement("div");return e.id="messages",e.style.overflowY="scroll",e.style.height="60vh",setTimeout(()=>{e.scrollTop=e.scrollHeight},0),e},l=(e,t,o,a)=>{const s=new Date().toLocaleTimeString().toString().slice(0,-3),n=f(t,o,s,a),r=document.querySelector("#selectedBot").innerText;a?n.classList.add("user"):n.classList.add("bot"),e.appendChild(n),e.scrollTop=e.scrollHeight;const d=h(r);d.push({sender:t,text:o,timestamp:s}),N(r,d)},N=(e,t)=>{localStorage.setItem(`chat_${e}`,JSON.stringify(t))},h=e=>{const t=localStorage.getItem(`chat_${e}`);return t?JSON.parse(t):[]};document.querySelector("#app").appendChild(T());const g=document.getElementById("messages"),j=()=>c.map(e=>e.name),y=async()=>{const e=document.getElementById("chatInput"),t=e.value,o=document.querySelector("#selectedBot").innerText;if(t&&j().includes(o)){l(g,"Moi",t,!0);const a=c.find(s=>s.name===o);if(a){const[s,...n]=t.split(" "),r=await a.respondToCommand(s,n);l(g,a.name,r,!1)}}e.value=""};document.getElementById("sendButton").addEventListener("click",y);document.getElementById("chatInput").addEventListener("keypress",e=>{e.key==="Enter"&&y()});
