'use strict';
/* Октави · Brio Music Studio
   Октава тут — це відрізок клавіатури від ДО до СІ. */

/* ---------- Переклади ---------- */
const LG={
uk:{ap:"Октави",skip:"До змісту",nl:"Розділи",mute:"Звук",vl:"Гучність",foot:"Автор: Мар'яна Вихрист",
n:["Знайомство","Перевір себе","Межі октави","Знайди октаву","Запам'ятай","Гра на швидкість"],
nt:["ДО","РЕ","МІ","ФА","СОЛЬ","ЛЯ","СІ"],
on:["Контроктава","Велика","Мала","Перша","Друга","Третя","Четверта"],
og:["контроктави","Великої октави","Малої октави","Першої октави","Другої октави","Третьої октави","Четвертої октави"],
oa:["контроктаву","велику октаву","малу октаву","першу октаву","другу октаву","третю октаву","четверту октаву"],
h0:"Знайомство з октавами",hh:"Наведи курсор на октаву — вона підсвітиться й зазвучить. Клікни, щоб почути ще раз.",ht:"Торкнись октави — вона підсвітиться й зазвучить. Гортай клавіатуру вбік, щоб побачити всі октави.",
dw:"ОКТАВА",dd:"це частина клавіатури від ноти ДО до ноти СІ: сім білих клавіш і п'ять чорних. На цій клавіатурі їх сім — від Контроктави до Четвертої.",
go:"Обери розділ і вирушай далі:",oct:"Октава",qn:"Питання {a} з {b}",ok:"Правильно!",no:"Не зовсім.",nxt:"Далі",fin:"Результат",
cs:"Вісім запитань про клавіатуру й октави. Впораєшся?",
qw:"Скільки білих клавіш в одній октаві?",qb:"Скільки чорних клавіш в одній октаві?",qg:"Скільки груп чорних клавіш в одній октаві?",ql:"Скільки чорних клавіш у лівій групі?",qr:"Скільки чорних клавіш у правій групі?",
qs:"З якої ноти починається октава?",qe:"Якою нотою закінчується октава?",q2:"Яка біла клавіша стоїть ліворуч від групи з двох чорних?",q3:"Яка біла клавіша стоїть ліворуч від групи з трьох чорних?",
qq:"Яка послідовність нот в октаві правильна?",qy:"Чи є октавою частина клавіатури від {x} до {y}?",qo:"Яка октава йде одразу після {x}?",qk:"Яка це нота? Подивись на виділену клавішу.",
yes:"Так, це октава",nop:"Ні, це лише частина октави",
bs:"Знайди клавіатуру, де виділено рівно одну октаву — від ДО до СІ.",bq:"Де октаву виділено правильно?",var:"Варіант {x}",
fs:"Назви сховані — орієнтуйся на межі. Назва з'явиться після відповіді.",f1:"Знайди {o}",hint:"Підказка",nr:"Правильну октаву підсвічено зеленим.",
ms:"Назви октав ідуть зліва направо: від найнижчих звуків до найвищих. Прочитай і запам'ятай порядок.",mt:"Чим правіше — тим вищий звук.",mb:"Тренуватись",mp:"Постав назви по порядку — від найнижчої октави до найвищої.",mr:"Переглянути ще раз",
gs:"Знаходь названі ноти на клавіатурі, поки не скінчився час.",gtm:"Час гри",min:"хв",sec:"с",gmo:"Режим",
gm1:"На екрані",gm1d:"Онлайн-клавіатура. Підходить, коли інструмента немає поруч.",gm2:"На інструменті",gm2d:"Учень грає на своєму інструменті, а вчитель зараховує бали кнопками ✓ та ✕.",
gd:"Складність",gh:"Дієзи та бемолі",ghb:"Складніше",ghd:"Серед нот часто траплятимуться чорні клавіші: дієзи (♯) та бемолі (♭).",
go2:"Почати гру",stop:"Завершити",sharp:"дієз",flat:"бемоль",tg:"{n} {o}",yy:"Правильно",no2:"Помилка",swipe:"Гортай клавіатуру вбік. Найзручніше повернути телефон горизонтально.",
rt1:"Блискуче!",rt2:"Чудова робота!",rt3:"Гарний початок!",
rm1:"Ти справжній музикант — октави для тебе вже не секрет! 🎉",rm2:"Ще трохи тренування — і буде ідеально. Ти на правильному шляху! 🌟",rm3:"Кожна помилка — крок до майстерності. Зазирни в розділ «Знайомство» й спробуй ще раз — у тебе вийде! 💪",
rc:"Правильних відповідей",sOk:"Правильно",sBad:"Помилки",sTime:"Час",sAcc:"Точність",again:"Грати ще",nextL:"Далі: {s}",close:"Закрити",set:"Налаштування",
gf:"Знайдено нот:",gr1:"Неймовірно!",gr2:"Чудовий результат!",gr3:"Гарний старт!",
gp1:"Ти справжній швидкісний піаніст! Так тримати!",gp2:"Ти впевнено орієнтуєшся на клавіатурі. Спробуй побити свій рекорд!",gp3:"З кожною грою ти знаходиш ноти швидше. Спробуй ще раз!",rec:"Новий рекорд!"},
ru:{ap:"Октавы",skip:"К содержанию",nl:"Разделы",mute:"Звук",vl:"Громкость",foot:"Автор: Марьяна Вихрист",
n:["Знакомство","Проверь себя","Границы октавы","Найди октаву","Запомни","Игра на скорость"],
nt:["ДО","РЕ","МИ","ФА","СОЛЬ","ЛЯ","СИ"],
on:["Контроктава","Большая","Малая","Первая","Вторая","Третья","Четвёртая"],
og:["контроктавы","Большой октавы","Малой октавы","Первой октавы","Второй октавы","Третьей октавы","Четвёртой октавы"],
oa:["контроктаву","большую октаву","малую октаву","первую октаву","вторую октаву","третью октаву","четвёртую октаву"],
h0:"Знакомство с октавами",hh:"Наведи курсор на октаву — она подсветится и зазвучит. Кликни, чтобы услышать ещё раз.",ht:"Коснись октавы — она подсветится и зазвучит. Листай клавиатуру вбок, чтобы увидеть все октавы.",
dw:"ОКТАВА",dd:"это часть клавиатуры от ноты ДО до ноты СИ: семь белых клавиш и пять чёрных. На этой клавиатуре их семь — от Контроктавы до Четвёртой.",
go:"Выбери раздел и отправляйся дальше:",oct:"Октава",qn:"Вопрос {a} из {b}",ok:"Верно!",no:"Не совсем.",nxt:"Дальше",fin:"Результат",
cs:"Восемь вопросов о клавиатуре и октавах. Справишься?",
qw:"Сколько белых клавиш в одной октаве?",qb:"Сколько чёрных клавиш в одной октаве?",qg:"Сколько групп чёрных клавиш в одной октаве?",ql:"Сколько чёрных клавиш в левой группе?",qr:"Сколько чёрных клавиш в правой группе?",
qs:"С какой ноты начинается октава?",qe:"Какой нотой заканчивается октава?",q2:"Какая белая клавиша стоит слева от группы из двух чёрных?",q3:"Какая белая клавиша стоит слева от группы из трёх чёрных?",
qq:"Какая последовательность нот в октаве правильная?",qy:"Является ли октавой часть клавиатуры от {x} до {y}?",qo:"Какая октава идёт сразу после {x}?",qk:"Какая это нота? Посмотри на выделенную клавишу.",
yes:"Да, это октава",nop:"Нет, это только часть октавы",
bs:"Найди клавиатуру, где выделена ровно одна октава — от ДО до СИ.",bq:"Где октава выделена правильно?",var:"Вариант {x}",
fs:"Названия спрятаны — ориентируйся по границам. Название появится после ответа.",f1:"Найди {o}",hint:"Подсказка",nr:"Правильная октава подсвечена зелёным.",
ms:"Названия октав идут слева направо: от самых низких звуков к самым высоким. Прочитай и запомни порядок.",mt:"Чем правее — тем выше звук.",mb:"Тренироваться",mp:"Поставь названия по порядку — от самой низкой октавы к самой высокой.",mr:"Посмотреть ещё раз",
gs:"Находи названные ноты на клавиатуре, пока не закончилось время.",gtm:"Время игры",min:"мин",sec:"с",gmo:"Режим",
gm1:"На экране",gm1d:"Онлайн-клавиатура. Подходит, когда инструмента нет рядом.",gm2:"На инструменте",gm2d:"Ученик играет на своём инструменте, а учитель засчитывает баллы кнопками ✓ и ✕.",
gd:"Сложность",gh:"Диезы и бемоли",ghb:"Сложнее",ghd:"Среди нот часто будут чёрные клавиши: диезы (♯) и бемоли (♭).",
go2:"Начать игру",stop:"Завершить",sharp:"диез",flat:"бемоль",tg:"{n} {o}",yy:"Верно",no2:"Ошибка",swipe:"Листай клавиатуру вбок. Удобнее повернуть телефон горизонтально.",
rt1:"Блестяще!",rt2:"Отличная работа!",rt3:"Хорошее начало!",
rm1:"Ты настоящий музыкант — октавы для тебя больше не секрет! 🎉",rm2:"Ещё немного тренировки — и будет идеально. Ты на верном пути! 🌟",rm3:"Каждая ошибка — шаг к мастерству. Загляни в «Знакомство» и попробуй снова — у тебя получится! 💪",
rc:"Правильных ответов",sOk:"Верно",sBad:"Ошибки",sTime:"Время",sAcc:"Точность",again:"Играть ещё",nextL:"Дальше: {s}",close:"Закрыть",set:"Настройки",
gf:"Найдено нот:",gr1:"Невероятно!",gr2:"Отличный результат!",gr3:"Хороший старт!",
gp1:"Ты настоящий скоростной пианист! Так держать!",gp2:"Ты уверенно ориентируешься на клавиатуре. Попробуй побить свой рекорд!",gp3:"С каждой игрой ты находишь ноты быстрее. Попробуй ещё раз!",rec:"Новый рекорд!"},
en:{ap:"Octaves",skip:"Skip to content",nl:"Sections",mute:"Sound",vl:"Volume",foot:"Author: Mariana Vykhryst",
n:["Intro","Test yourself","Octave limits","Find the octave","Memorize","Speed game"],
nt:["C","D","E","F","G","A","B"],
on:["Contra","Great","Small","1st","2nd","3rd","4th"],
og:["the Contra octave","the Great octave","the Small octave","the 1st octave","the 2nd octave","the 3rd octave","the 4th octave"],
oa:["the Contra octave","the Great octave","the Small octave","the 1st octave","the 2nd octave","the 3rd octave","the 4th octave"],
h0:"Meet the octaves",hh:"Hover over an octave — it lights up and plays. Click to hear it again.",ht:"Tap an octave — it lights up and plays. Swipe the keyboard sideways to see all octaves.",
dw:"OCTAVE",dd:"is a part of the keyboard from the note C to the note B: seven white keys and five black keys. This keyboard has seven of them — from Contra to the 4th.",
go:"Pick a section and keep going:",oct:"Octave",qn:"Question {a} of {b}",ok:"Correct!",no:"Not quite.",nxt:"Next",fin:"Result",
cs:"Eight questions about the keyboard and octaves. Ready?",
qw:"How many white keys are in one octave?",qb:"How many black keys are in one octave?",qg:"How many groups of black keys are in one octave?",ql:"How many black keys are in the left group?",qr:"How many black keys are in the right group?",
qs:"Which note does an octave start with?",qe:"Which note does an octave end with?",q2:"Which white key is to the left of the group of two black keys?",q3:"Which white key is to the left of the group of three black keys?",
qq:"Which note order in an octave is correct?",qy:"Is the part of the keyboard from {x} to {y} an octave?",qo:"Which octave comes right after {x}?",qk:"Which note is this? Look at the highlighted key.",
yes:"Yes, it is an octave",nop:"No, it is only part of an octave",
bs:"Find the keyboard where exactly one octave is highlighted — from C to B.",bq:"Where is the octave highlighted correctly?",var:"Option {x}",
fs:"The names are hidden — use the borders. The name appears after you answer.",f1:"Find {o}",hint:"Hint",nr:"The correct octave is highlighted in green.",
ms:"Octave names go from left to right: from the lowest sounds to the highest. Read and remember the order.",mt:"The further right, the higher the sound.",mb:"Practice",mp:"Put the names in order — from the lowest octave to the highest.",mr:"Look again",
gs:"Find the named notes on the keyboard before time runs out.",gtm:"Game time",min:"min",sec:"s",gmo:"Mode",
gm1:"On screen",gm1d:"Online keyboard. Great when there is no instrument nearby.",gm2:"On an instrument",gm2d:"The student plays their own instrument and the teacher awards points with the ✓ and ✕ buttons.",
gd:"Difficulty",gh:"Sharps and flats",ghb:"Harder",ghd:"Black keys will often appear: sharps (♯) and flats (♭).",
go2:"Start game",stop:"Finish",sharp:"sharp",flat:"flat",tg:"{n} in {o}",yy:"Correct",no2:"Mistake",swipe:"Swipe the keyboard sideways. Landscape mode works best on a phone.",
rt1:"Brilliant!",rt2:"Great job!",rt3:"Good start!",
rm1:"You are a real musician — octaves hold no secrets for you! 🎉",rm2:"A little more practice and it will be perfect. You are on the right track! 🌟",rm3:"Every mistake is a step toward mastery. Revisit the Intro and try again — you can do it! 💪",
rc:"Correct answers",sOk:"Correct",sBad:"Mistakes",sTime:"Time",sAcc:"Accuracy",again:"Play again",nextL:"Next: {s}",close:"Close",set:"Settings",
gf:"Notes found:",gr1:"Incredible!",gr2:"Great result!",gr3:"Good start!",
gp1:"You are a true speed pianist! Keep it up!",gp2:"You know your way around the keyboard. Try to beat your record!",gp3:"You find notes faster with every game. Try again!",rec:"New record!"}};

let L='uk',cur=0,run=null;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const t=(k,o)=>String(LG[L][k]??LG.uk[k]).replace(/\{(\w+)\}/g,(m,x)=>o&&o[x]!=null?o[x]:m);
const NT=()=>LG[L].nt,ON=()=>LG[L].on,OG=()=>LG[L].og,OA=()=>LG[L].oa,NV=i=>LG[L].n[i];
const WS=[0,2,4,5,7,9,11],BLK=[[0,1],[1,3],[3,6],[4,8],[5,10]],HUE=[265,320,150,35,190,285,10];
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>sh(a).slice(0,n);
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const tf=s=>s%60?mmss(s):s<60?s+' '+t('sec'):s/60+' '+t('min');

/* ---------- Звук: м'який «піаніно»-синтез ---------- */
let ac,mg,vol=.7,muted=false;
function audio(){
  if(ac){if(ac.state==='suspended')ac.resume();return}
  ac=new(window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();setVol();
  const lp=ac.createBiquadFilter(),cp=ac.createDynamicsCompressor(),d=ac.createDelay(),fb=ac.createGain(),w=ac.createGain();
  lp.type='lowpass';lp.frequency.value=2800;d.delayTime.value=.085;fb.gain.value=.3;w.gain.value=.16;
  mg.connect(lp);lp.connect(cp);cp.connect(ac.destination);lp.connect(d);d.connect(fb);fb.connect(d);d.connect(w);w.connect(cp);
}
const setVol=()=>{if(mg)mg.gain.setTargetAtTime(muted?0:vol*vol*.9,ac.currentTime,.02)};
function note(o,s,at=0,v=.3){
  audio();
  const m=24+12*o+s,f=440*2**((m-69)/12),t0=ac.currentTime+at+.01,dur=Math.max(.9,3-(m-24)/36),g=ac.createGain();
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(v,t0+.018);
  g.gain.exponentialRampToValueAtTime(v*.35,t0+.25);g.gain.exponentialRampToValueAtTime(.0005,t0+dur);g.connect(mg);
  [[1,1],[1.003,.5],[2,.4],[3,.16],[4,.08],[5,.04]].forEach(([k,a])=>{
    const x=ac.createOscillator(),y=ac.createGain();
    x.type='sine';x.frequency.value=f*k*(k>2?1+.0003*k*k:1);y.gain.value=a/(1+f*k/9000);
    x.connect(y);y.connect(g);x.start(t0);x.stop(t0+dur+.1);
  });
}
const arp=o=>[0,4,7].forEach((s,i)=>note(o,s,i*.15,.28));
const sfx=g=>g?[0,4,7].forEach((s,i)=>note(4,s,i*.1,.2)):(note(3,0,0,.13),note(2,9,.16,.11));
const ico=()=>{$('#mute').innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/>${muted||!vol?'<path d="m16 9 5 6m0-6-5 6"/>':'<path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'}</svg>`};
$('#vol').oninput=e=>{vol=e.target.value/100;muted=false;setVol();ico()};
$('#mute').onclick=()=>{muted=!muted;setVol();ico()};
document.addEventListener('pointerdown',audio,{once:true});

/* ---------- Клавіатура ---------- */
/* o: hl:[a,b] виділені білі клавіші, key: одна біла клавіша, lbl: підписи ДО,
   ov: оверлеї октав, ovn: імена в aria-label, names: імена видно завжди,
   play: клавіші-кнопки, mini: компактна клавіатура */
function kb(n,o={}){
  const N=n*7,p=o.play,tg=p?'button':'span',ty=p?' type="button"':'',W=o.mini?'span':'div',nt=NT();
  let w='',b='',v='';
  for(let i=0;i<N;i++){
    const oc=i/7|0,k=i%7,on=(o.hl&&i>=o.hl[0]&&i<=o.hl[1])||i===o.key;
    w+=`<${tg}${ty} class="wk${on?' in':''}" data-o="${oc}" data-n="${k}"${p?` aria-label="${nt[k]}, ${ON()[oc]}"`:''}>${o.lbl&&!k?`<i class="lb">${nt[0]}</i>`:''}</${tg}>`;
    if(k!=2&&k!=6){
      const s=BLK.find(x=>x[0]==k)[1],bo=o.hl&&i>=o.hl[0]&&i<o.hl[1];
      b+=`<${tg}${ty} class="bk${bo?' in':''}" data-o="${oc}" data-s="${s}" style="left:${((i+.69)/N*100).toFixed(3)}%;width:${(.62/N*100).toFixed(3)}%"${p?` aria-label="${nt[k]}♯, ${ON()[oc]}"`:''}></${tg}>`;
    }
  }
  if(o.ov)for(let i=0;i<n;i++)v+=`<button type="button" class="ov" data-o="${i}" style="left:${i/n*100}%;width:${100/n}%;--h:${HUE[i]}" aria-label="${o.ovn?ON()[i]:t('oct')+' '+(i+1)}"><span class="ot">${ON()[i]}</span></button>`;
  return `<${W} class="kbw${o.mini?' mini':''}"><${W} class="kbs${o.names?' names':''}${p?' play':''}"><${W} class="kb"${p?'':' aria-hidden="true"'}>${w}${b}</${W}>${v}</${W}></${W}>`;
}
function bindOv(el){
  let last=0;const hit=o=>{if(Date.now()-last<400)return;last=Date.now();arp(o)};
  $$('.ov',el).forEach(v=>{
    v.onpointerenter=e=>{if(e.pointerType==='mouse')hit(+v.dataset.o)};
    v.onclick=()=>{$$('.ov',el).forEach(x=>x.classList.toggle('hl',x===v));hit(+v.dataset.o)};
  });
}
const shell=(app,title,sub)=>{
  app.innerHTML=`<section class="card"><header class="ph"><h1>${title}</h1><p class="sub">${sub}</p></header><div id="box"></div></section>`;
  return $('#box',app);
};

/* ---------- Вікно результатів ---------- */
function result(o){
  const d=$('#dlg'),star='<path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.4 6 20.9l1.3-6.7-5-4.7 6.8-.8z"/>';
  d.innerHTML=`<div class="res"><button class="x" type="button" aria-label="${t('close')}">×</button>
    <div class="stars" aria-hidden="true">${[1,2,3].map(i=>`<svg class="st${i<=o.stars?' on':''}" style="--i:${i}" viewBox="0 0 24 24">${star}</svg>`).join('')}</div>
    <h2 id="dlgT">${o.title}</h2><p class="cap">${o.cap}</p><p class="num">${o.num}</p><p class="msg">${o.msg}</p>
    ${o.badge?`<p class="rec">★ ${o.badge}</p>`:''}
    <dl class="stats">${o.stats.map(([a,c])=>`<div><dt>${a}</dt><dd>${c}</dd></div>`).join('')}</dl>
    <div class="acts">${o.acts.map(([l,,c],i)=>`<button class="btn ${c||''}" type="button" data-i="${i}"${i?'':' autofocus'}>${l}</button>`).join('')}</div></div>`;
  $$('.acts .btn',d).forEach(b=>b.onclick=()=>{d.close();o.acts[+b.dataset.i][1]()});
  $('.x',d).onclick=()=>d.close();
  d.showModal();if(o.stars>1)arp(4);
}
$('#dlg').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
const nextSec=()=>(cur+1)%R.length;
function finish(ok,tot,bad,secs,again){
  const r=ok/tot,k=r>=.9?1:r>=.6?2:3,nx=nextSec();
  result({stars:4-k,title:t('rt'+k),cap:t('rc'),num:`${ok}<i>/${tot}</i>`,msg:t('rm'+k),
    stats:[[t('sOk'),ok],[t('sBad'),bad],...(secs!=null?[[t('sTime'),mmss(secs)]]:[])],
    acts:[[t('again'),again],[t('nextL',{s:NV(nx)}),()=>{location.hash='#/'+R[nx][0]},'sec']]});
}

/* ---------- Універсальна сесія запитань (без таймерів-гонок: перехід лише кнопкою «Далі») ---------- */
function session(box,n,step,done){
  let i=0,ok=0,bad=0,lock=0;const t0=Date.now();
  const sc=()=>`<span class="score"><b class="g">✓ ${ok}</b><b class="r">✕ ${bad}</b></span>`;
  (function draw(){
    lock=0;const s=step(i);
    box.innerHTML=`<div class="qtop"><span>${t('qn',{a:i+1,b:n})}</span><span id="sc">${sc()}</span></div><div class="bar"><i style="width:${i/n*100}%"></i></div>${s.html}<div class="fbk" role="status" aria-live="polite"></div>`;
    s.bind(box,(g,after,extra='')=>{
      if(lock)return;lock=1;g?ok++:bad++;if(after)after();$('#sc',box).innerHTML=sc();sfx(g);
      const f=$('.fbk',box);
      f.innerHTML=`<p class="${g?'g':'r'}">${g?'✓ '+t('ok'):'✕ '+t('no')+' '+extra}</p><button class="btn" type="button">${i+1<n?t('nxt'):t('fin')}</button>`;
      const b=$('button',f);b.focus({preventScroll:true});
      b.onclick=()=>{i++;i<n?draw():done(ok,bad,Math.round((Date.now()-t0)/1000))};
    });
  })();
}
const optStep=q=>({
  html:`<h2 class="qt">${q.q}</h2>${q.pre||''}<div class="opts ${q.cls||''}">${q.o.map((x,k)=>q.cls=='k4'?`<button class="opt" type="button" aria-label="${t('var',{x:'ABCD'[k]})}"><span class="lt">${'ABCD'[k]}</span>${x}</button>`:`<button class="opt" type="button">${x}</button>`).join('')}</div>`,
  bind:(el,ans)=>{const bs=$$('.opt',el);bs.forEach((b,k)=>b.onclick=()=>{const g=k==q.a;ans(g,()=>{b.classList.add(g?'good':'bad');bs[q.a].classList.add('good');bs.forEach(x=>x.disabled=true)})})}
});

/* ---------- Розділ 1: Знайомство ---------- */
function homePage(app){
  const hov=matchMedia('(hover:hover) and (pointer:fine)').matches;
  app.innerHTML=`<section class="card"><header class="ph"><h1>${t('h0')}</h1><p class="sub">${hov?t('hh'):t('ht')}</p></header>
    ${kb(7,{ov:1,ovn:1,names:1,lbl:1})}
    <div class="def"><b>${t('dw')}</b><p>${t('dd')}</p></div></section>
    <section class="card nxt"><h2>${t('go')}</h2><div class="gl">${R.slice(1).map(([id],i)=>`<a class="btn${i==4?' sec':''}" href="#/${id}">${NV(i+1)}</a>`).join('')}</div></section>`;
  bindOv(app);
}

/* ---------- Розділ 2: Перевір себе ---------- */
function checkItems(){
  const n=NT(),S=a=>a.map(i=>n[i]).join(' '),
  mkq=(q,c,w,x={})=>{const o=sh([c,...w]);return{q,o,a:o.indexOf(c),cls:o.some(s=>s.length>14)?'wide':'',...x}},
  YN=[[0,6,1],[0,4,0],[1,6,0],[3,6,0],[0,5,0],[2,6,0]],
  pool=[
    ()=>mkq(t('qw'),'7',['5','8','12']),
    ()=>mkq(t('qb'),'5',['2','7','12']),
    ()=>mkq(t('qg'),'2',['1','3','5']),
    ()=>mkq(t('ql'),'2',['1','3','5']),
    ()=>mkq(t('qr'),'3',['2','4','5']),
    ()=>mkq(t('qs'),n[0],[n[1],n[5],n[6]]),
    ()=>mkq(t('qe'),n[6],[n[0],n[4],n[1]]),
    ()=>mkq(t('q2'),n[0],[n[1],n[2],n[4]]),
    ()=>mkq(t('q3'),n[3],[n[2],n[4],n[6]]),
    ()=>mkq(t('qq'),S([0,1,2,3,4,5,6]),[S([0,2,1,3,4,6,5]),S([1,2,3,4,5,6,0]),S([0,1,2,4,3,5,6])]),
    ()=>{const[x,y,yes]=pick(YN,1)[0];return mkq(t('qy',{x:n[x],y:n[y]}),t(yes?'yes':'nop'),[t(yes?'nop':'yes')])},
    ()=>{const i=Math.random()*6|0;return mkq(t('qo',{x:OG()[i]}),ON()[i+1],pick(ON().filter((_,j)=>j!=i+1),3))}
  ],
  keyQ=()=>{const k=Math.random()*7|0;return mkq(t('qk'),n[k],pick(n.filter((_,j)=>j!=k),3),{pre:kb(1,{key:k,mini:1})})};
  return sh([...pick(pool,5).map(f=>f()),keyQ(),keyQ(),keyQ()]);
}
function checkPage(app){
  const box=shell(app,NV(1),t('cs')),go=()=>{const it=checkItems();session(box,it.length,i=>optStep(it[i]),(ok,bad,s)=>finish(ok,it.length,bad,s,go))};
  go();
}

/* ---------- Розділ 3: Межі октави ---------- */
function boundsPage(app){
  const box=shell(app,NV(2),t('bs')),
  go=()=>{
    const it=Array.from({length:5},()=>{
      const c=Math.random()<.5?0:7,all=sh([c,...pick([1,2,3,4,5,6],3)]);
      return{q:t('bq'),cls:'k4',o:all.map(s=>kb(2,{hl:[s,s+6],mini:1})),a:all.indexOf(c)};
    });
    session(box,5,i=>optStep(it[i]),(ok,bad,s)=>finish(ok,5,bad,s,go));
  };
  go();
}

/* ---------- Розділ 4: Знайди октаву ---------- */
function findPage(app){
  const box=shell(app,NV(3),t('fs')),
  go=()=>{
    const ord=sh([0,1,2,3,4,5,6]);
    session(box,7,i=>{
      const a=ord[i];
      return{
        html:`<h2 class="qt">${t('f1',{o:OA()[a]})}</h2><div class="tools2"><button class="btn ghost sm" id="hint" type="button">${t('hint')}</button></div>${kb(7,{ov:1})}`,
        bind:(el,ans)=>{
          let tm;
          $('#hint',el).onclick=()=>{const k=$('.kbs',el);k.classList.add('flash');clearTimeout(tm);tm=setTimeout(()=>k.classList.remove('flash'),1600)};
          const ovs=$$('.ov',el);
          ovs.forEach(v=>v.onclick=()=>{
            const o=+v.dataset.o,g=o===a;
            ans(g,()=>{v.classList.add('named',g?'good':'bad');ovs[a].classList.add('named','good');$('#hint',el).disabled=true;$('.kbs',el).classList.remove('flash');if(g)arp(o)},t('nr'));
          });
        }
      };
    },(ok,bad,s)=>finish(ok,7,bad,s,go));
  };
  go();
}

/* ---------- Розділ 5: Запам'ятай ---------- */
function memoPage(app){
  const box=shell(app,NV(4),t('ms'));
  const study=()=>{
    box.innerHTML=`${kb(7,{ov:1,ovn:1,names:1,lbl:1})}<ol class="order">${ON().map(n=>`<li>${n}</li>`).join('')}</ol><p class="tip">${t('mt')}</p><div class="ctr"><button class="btn" type="button" id="tr">${t('mb')}</button></div>`;
    bindOv(box);$('#tr',box).onclick=train;
  },
  train=()=>{
    let nx=0,bad=0;
    box.innerHTML=`<p class="sub">${t('mp')}</p><ol class="slots">${ON().map((_,i)=>`<li><span>${i+1}</span></li>`).join('')}</ol><div class="chips big">${sh([0,1,2,3,4,5,6]).map(i=>`<button class="chip" type="button" data-i="${i}">${ON()[i]}</button>`).join('')}</div><div class="ctr"><button class="btn ghost sm" type="button" id="rv">${t('mr')}</button></div>`;
    $('#rv',box).onclick=study;
    $$('.chip',box).forEach(c=>c.onclick=()=>{
      const i=+c.dataset.i;
      if(i==nx){
        const li=$$('.slots li',box)[nx];li.classList.add('on');li.innerHTML=`<span>${nx+1}</span><b>${ON()[i]}</b>`;
        c.disabled=true;arp(i);nx++;
        if(nx==7)setTimeout(()=>finish(Math.max(0,7-bad),7,bad,null,train),500);
      }else{bad++;c.classList.add('shake');setTimeout(()=>c.classList.remove('shake'),400);note(2,9,0,.12)}
    });
  };
  study();
}

/* ---------- Розділ 6: Гра на швидкість ---------- */
const G={sec:60,mode:'screen',acc:false};
function stopGame(){if(run){clearInterval(run);run=null}}
const nm=(k,a)=>a?NT()[k]+'-'+t(a>0?'sharp':'flat'):NT()[k];
function gamePage(app){shell(app,NV(5),t('gs'));setup()}

function setup(){
  stopGame();const box=$('#box');
  box.innerHTML=`<div class="cfg">
  <fieldset><legend>${t('gtm')}</legend><div class="time">${[['m',60],['s',5]].map(([u,d])=>`<div class="stp"><button class="sq" type="button" data-d="${-d}" aria-label="−${d==60?1:d} ${t(u=='m'?'min':'sec')}">−</button><output id="o${u}"></output><small>${t(u=='m'?'min':'sec')}</small><button class="sq" type="button" data-d="${d}" aria-label="+${d==60?1:d} ${t(u=='m'?'min':'sec')}">+</button></div>`).join('')}</div>
  <div class="chips">${[30,60,120,180].map(s=>`<button class="chip" type="button" data-s="${s}">${tf(s)}</button>`).join('')}</div></fieldset>
  <fieldset><legend>${t('gmo')}</legend><div class="rcs">${[['screen','gm1'],['inst','gm2']].map(([v,k])=>`<label class="rc"><input type="radio" name="mode" value="${v}"${G.mode==v?' checked':''}><span class="rc-b"><b>${t(k)}</b><small>${t(k+'d')}</small></span></label>`).join('')}</div></fieldset>
  <fieldset><legend>${t('gd')}</legend><label class="rc hard"><input type="checkbox" id="acc"${G.acc?' checked':''}><span class="rc-b"><b>★ ${t('gh')} <em>${t('ghb')}</em></b><small>${t('ghd')}</small></span></label></fieldset>
  <button class="btn lg" id="go" type="button">${t('go2')}</button></div>`;
  const upd=()=>{
    $('#om',box).textContent=Math.floor(G.sec/60);$('#os',box).textContent=String(G.sec%60).padStart(2,'0');
    $$('.chip',box).forEach(c=>c.classList.toggle('on',+c.dataset.s==G.sec));
  };
  $$('.sq',box).forEach(b=>b.onclick=()=>{G.sec=Math.max(10,Math.min(900,G.sec+ +b.dataset.d));upd()});
  $$('.chip',box).forEach(c=>c.onclick=()=>{G.sec=+c.dataset.s;upd()});
  $$('input[name=mode]',box).forEach(r=>r.onchange=()=>{G.mode=r.value});
  $('#acc',box).onchange=e=>{G.acc=e.target.checked};
  $('#go',box).onclick=play;upd();
}

function gen(prev){
  let n;
  do{
    const o=Math.random()*7|0;
    if(G.acc&&Math.random()<.6){ /* зі знаками — частіше, ніж чисті ноти */
      const[k,s]=BLK[Math.random()*5|0],flat=Math.random()<.5;
      n={o,s,k:flat?k+1:k,a:flat?-1:1};
    }else{const k=Math.random()*7|0;n={o,s:WS[k],k,a:0}}
  }while(prev&&n.o==prev.o&&n.s==prev.s);
  return n;
}

function play(){
  const box=$('#box'),screen=G.mode=='screen',end=Date.now()+G.sec*1000;
  let ok=0,bad=0,T=null,done=0;
  box.innerHTML=`<div class="hud"><div class="timer" id="tmr" role="timer">0:00</div><div class="score" id="sc"></div><button class="btn ghost sm" id="stop" type="button">${t('stop')}</button></div>
  <div class="target" id="tg" aria-live="polite"></div>
  ${screen?`${kb(7,{play:1,lbl:1})}<p class="touch">${t('swipe')}</p>`:`<div class="jg"><button class="jb no" id="no" type="button" aria-label="${t('no2')}">✕</button><button class="jb yes" id="yes" type="button" aria-label="${t('yy')}">✓</button></div>`}`;
  const score=()=>{$('#sc',box).innerHTML=`<b class="g">✓ ${ok}</b> <b class="r">✕ ${bad}</b>`},
  next=()=>{
    T=gen(T);
    $('#tg',box).innerHTML=t('tg',{n:'<em>'+nm(T.k,T.a)+'</em>',o:OG()[T.o]});score();
    const kw=$('.kbw',box);
    if(kw&&kw.scrollWidth>kw.clientWidth){const el=$(`.wk[data-o="${T.o}"][data-n="0"]`,kw);kw.scrollTo({left:Math.max(0,el.offsetLeft-12),behavior:'smooth'})}
  },
  ans=g=>{if(done)return;g?ok++:bad++;next()},
  fin=()=>{if(done)return;done=1;stopGame();gameEnd(ok,bad)};
  next();
  if(screen){
    $('.kb',box).onclick=e=>{
      const el=e.target.closest('.wk,.bk');if(!el||done)return;
      const o=+el.dataset.o,s=el.classList.contains('bk')?+el.dataset.s:WS[+el.dataset.n],g=o==T.o&&s==T.s;
      note(o,s);el.classList.add(g?'ok':'no');setTimeout(()=>el.classList.remove('ok','no'),350);ans(g);
    };
  }else{$('#yes',box).onclick=()=>{sfx(1);ans(1)};$('#no',box).onclick=()=>{sfx(0);ans(0)}}
  const tick=()=>{
    const l=Math.max(0,Math.ceil((end-Date.now())/1e3)),e=$('#tmr',box);
    if(!e){stopGame();return}
    e.textContent=mmss(l);e.classList.toggle('low',l<=10);if(l<=0)fin();
  };
  stopGame();run=setInterval(tick,250);tick();
  $('#stop',box).onclick=()=>{done=1;stopGame();setup()};
}

function gameEnd(ok,bad){
  const n=ok+bad,ac=n?Math.round(ok/n*100):0,k=ok>=15&&ac>=90?1:ok>=6?2:3,key=`octaves-best-${G.sec}-${+G.acc}`,nx=nextSec();
  let best=0;
  try{best=+localStorage.getItem(key)||0;if(ok>best)localStorage.setItem(key,ok)}catch(e){}
  result({stars:4-k,title:t('gr'+k),cap:t('gf'),num:ok,msg:t('gp'+k),badge:ok>best&&ok>0?t('rec'):'',
    stats:[[t('sTime'),mmss(G.sec)],[t('sBad'),bad],[t('sAcc'),ac+'%']],
    acts:[[t('again'),play],[t('set'),setup,'ghost'],[t('nextL',{s:NV(nx)}),()=>{location.hash='#/'+R[nx][0]},'sec']]});
}

/* ---------- Маршрутизація (hash) і мова ---------- */
const R=[['home',homePage],['check',checkPage],['bounds',boundsPage],['find',findPage],['memo',memoPage],['game',gamePage]];
const mark=()=>$$('#nav a').forEach((a,i)=>i==cur?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
function route(){
  stopGame();const d=$('#dlg');if(d.open)d.close();
  const id=(location.hash.match(/^#\/(\w+)/)||[])[1];
  cur=Math.max(0,R.findIndex(r=>r[0]==id));mark();
  document.title=`${NV(cur)} · ${t('ap')} · Brio Music Studio`;
  const a=$('#app');a.innerHTML='';R[cur][1](a);
}
function setLang(l){
  L=l;try{localStorage.setItem('octaves-lang',l)}catch(e){}
  document.documentElement.lang=l;$('#lang').value=l;
  $('#appName').textContent=t('ap');$('.skip').textContent=t('skip');
  $('#nav').setAttribute('aria-label',t('nl'));
  $('#nav').innerHTML=R.map(([id],i)=>`<a href="#/${id}">${NV(i)}</a>`).join('');
  $('#mute').setAttribute('aria-label',t('mute'));$('#vol').setAttribute('aria-label',t('vl'));
  $('#copy').textContent=`© ${new Date().getFullYear()} Brio Music Studio · ${t('foot')}`;
  ico();mark();
  if(!run)route(); /* під час гри не скидаємо її при зміні мови */
}
$('#lang').onchange=e=>setLang(e.target.value);
addEventListener('hashchange',()=>{route();scrollTo({top:0})});
let saved='uk';try{saved=localStorage.getItem('octaves-lang')||'uk'}catch(e){}
setLang(LG[saved]?saved:'uk');
