(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{310:function(t,e,r){"use strict";var n=r(167),i=r(170),s=r(6),o=r(24),a=r(96),c=r(168),l=r(14),u=r(169),f=r(70),h=r(171),v=r(2),d=h.UNSUPPORTED_Y,m=[].push,p=Math.min;n("split",(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(o(this)),s=void 0===r?4294967295:r>>>0;if(0===s)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,s);for(var a,c,l,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,d=new RegExp(t.source,h+"g");(a=f.call(d,n))&&!((c=d.lastIndex)>v&&(u.push(n.slice(v,a.index)),a.length>1&&a.index<n.length&&m.apply(u,a.slice(1)),l=a[0].length,v=c,u.length>=s));)d.lastIndex===a.index&&d.lastIndex++;return v===n.length?!l&&d.test("")||u.push(""):u.push(n.slice(v)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,i,r):n.call(String(i),e,r)},function(t,i){var o=r(n,this,t,i,n!==e);if(o.done)return o.value;var f=s(this),h=String(t),v=a(f,RegExp),m=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"g":"y"),g=new v(d?"^(?:"+f.source+")":f,b),y=void 0===i?4294967295:i>>>0;if(0===y)return[];if(0===h.length)return null===u(g,h)?[h]:[];for(var w=0,x=0,N=[];x<h.length;){g.lastIndex=d?0:x;var I,z=u(g,d?h.slice(x):h);if(null===z||(I=p(l(g.lastIndex+(d?x:0)),h.length))===w)x=c(h,x,m);else{if(N.push(h.slice(w,x)),N.length===y)return N;for(var E=1;E<=z.length-1;E++)if(N.push(z[E]),N.length===y)return N;x=w=I}}return N.push(h.slice(w)),N}]}),!!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),d)},311:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},313:function(t,e,r){var n=r(24),i="["+r(311)+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),a=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:a(1),end:a(2),trim:a(3)}},314:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"f",(function(){return a})),r.d(e,"e",(function(){return c})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return h}));r(32),r(33),r(10),r(48),r(12),r(15),r(95);var n=r(51);r(166),r(47),r(310),r(68);var i=r(0).a.prototype.$isServer;function s(t,e){return!(!t||!e)&&(t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1)}function o(t,e){if(t&&e){for(var r=t.className,n=e.split(/\s+/),i=0;i<n.length;i++){var o=n[i];t.classList?t.classList.add(o):s(t,o)||(r+=" "+o)}t.classList||t.setAttribute("class",r)}}function a(t,e){if(t&&e){for(var r=e.split(/\s+/),n=" "+t.className+" ",i=0;i<r.length;i++){var o=r[i];t.classList?t.classList.remove(o):s(t,o)&&(n=n.replace(" "+o+" "," "))}t.classList||t.setAttribute("class",trim(n))}}function c(t,e,r){!i&&t&&e&&r&&(document.addEventListener?t.addEventListener(e,r,!1):t.attachEvent("on"+e,r))}function l(t,e,r){!i&&t&&e&&r&&(document.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent("on"+e,r))}var u=void 0;function f(){if(void 0!==u||i)return u;var t=document.createElement("div");return t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",t.style.overflow="scroll",document.body.appendChild(t),u=t.offsetWidth-t.clientWidth,t.parentNode.removeChild(t),u}function h(t,e){var r=new MutationObserver((function(t){var r,i=!1,s=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=Object(n.a)(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}(t);try{for(s.s();!(r=s.n()).done;){"attributes"===r.value.type&&(i=!0)}}catch(t){s.e(t)}finally{s.f()}i&&e()}));return r.observe(t,{attributes:!0,subtree:!0}),r}},315:function(t,e,r){var n=r(5),i=r(72);t.exports=function(t,e,r){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==r&&n(o=s.prototype)&&o!==r.prototype&&i(t,o),t}},316:function(t,e,r){"use strict";var n=r(7),i=r(4),s=r(98),o=r(19),a=r(9),c=r(25),l=r(315),u=r(49),f=r(2),h=r(27),v=r(71).f,d=r(26).f,m=r(8).f,p=r(313).trim,b=i.Number,g=b.prototype,y="Number"==c(h(g)),w=function(t){var e,r,n,i,s,o,a,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=p(l)).charCodeAt(0))||45===e){if(88===(r=l.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(o=(s=l.slice(2)).length,a=0;a<o;a++)if((c=s.charCodeAt(a))<48||c>i)return NaN;return parseInt(s,n)}return+l};if(s("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(y?f((function(){g.valueOf.call(r)})):"Number"!=c(r))?l(new b(w(e)),r,N):w(e)},I=n?v(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),z=0;I.length>z;z++)a(b,x=I[z])&&!a(N,x)&&m(N,x,d(b,x));N.prototype=g,g.constructor=N,o(i,"Number",N)}},337:function(t,e,r){},370:function(t,e,r){"use strict";r(337)},384:function(t,e,r){"use strict";r.r(e);var n=r(314),i=(r(172),r(316),{vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}});function s(t){var e=t.move,r=t.size,n=t.bar,i={},s="translate".concat(n.axis,"(").concat(e,"%)");return i[n.size]=r,i.transform=s,i.msTransform=s,i.webkitTransform=s,i}var o={name:"scrollbar",components:{"va-scrollbar":{name:"va-scrollbar",components:{bar:{name:"bar",props:{vertical:Boolean,size:String,move:Number},data:function(){return{prevPage:0}},computed:{bar:function(){return i[this.vertical?"vertical":"horizontal"]}},render:function(t){var e=this,r=t("div",{ref:"thumb",class:"va-scrollbar-thumb",on:{mousedown:function(t){return e.clickThumbHandler(t)}},style:s({size:this.size,move:this.move,bar:this.bar})});return t("div",{class:"va-scrollbar-bar va-is-"+this.bar.key,on:{mousedown:function(t){return e.mouseDownDocumentHandler(t)}}},[r])},methods:{clickThumbHandler:function(t){t.ctrlKey||2===t.button||(this.startDrag(t),this.prevPage=t.currentTarget[this.bar.offset]-(t[this.bar.client]-t.currentTarget.getBoundingClientRect()[this.bar.direction]))},startDrag:function(t){t.stopImmediatePropagation(),Object(n.e)(document,"mousemove",this.mouseMoveDocumentHandler),Object(n.e)(document,"mouseup",this.mouseUpDocumentHandler),document.onselectstart=function(){return!1}},mouseDownDocumentHandler:function(t){var e=100*(Math.abs(t.target.getBoundingClientRect()[this.bar.direction]-t[this.bar.client])-this.$refs.thumb[this.bar.offset]/2)/this.$el[this.bar.offset];this.$emit("thumbPosition",{thumbPositionPercentage:e,bar:this.bar})},mouseMoveDocumentHandler:function(t){if(this.prevPage){var e=100*(-1*(this.$el.getBoundingClientRect()[this.bar.direction]-t[this.bar.client])-(this.$refs.thumb[this.bar.offset]-this.prevPage))/this.$el[this.bar.offset];this.$emit("thumbPosition",{thumbPositionPercentage:e,bar:this.bar})}},mouseUpDocumentHandler:function(t){this.cursorDown=!1,this.prevPage=0,Object(n.d)(document,"mousemove",this.mouseMoveDocumentHandler),Object(n.d)(document,"mouseup",this.mouseUpDocumentHandler),document.onselectstart=null}}}},data:function(){return{resize:!1,observer:null,sizeWidth:"0",sizeHeight:"0",moveX:0,moveY:0}},render:function(t){var e=this,r=Object(n.c)(),i=t("div",{ref:"wrap",style:"width: calc(100% + "+r+"px); height: calc(100% + "+r+"px); overflow: scroll;",on:{scroll:function(){return e.wrapScroll()}}},[t("div",{ref:"resize",class:"aaaaaaaa"},[this.$slots.default])]);return t("div",{class:"va-scrollbar"},[i,t("bar",{props:{move:this.moveX,size:this.sizeWidth},on:{thumbPosition:function(t){return e.thumbPosition(t)}}}),t("bar",{props:{vertical:!0,move:this.moveY,size:this.sizeHeight},on:{thumbPosition:function(t){return e.thumbPosition(t)}}})])},mounted:function(){var t=this;this.$nextTick((function(){t.update(),t.$refs.resize&&t.resize&&(t.observer=Object(n.b)(t.$refs.resize,(function(){return t.update()})))}))},methods:{wrapScroll:function(){var t=this.$refs.wrap;this.moveY=100*t.scrollTop/t.clientHeight,this.moveX=100*t.scrollLeft/t.clientWidth},update:function(){if(this.$refs.wrap){var t,e,r=this.$refs.wrap;t=100*r.clientHeight/r.scrollHeight,e=100*r.clientWidth/r.scrollWidth,this.sizeHeight=t<100?t+"%":"",this.sizeWidth=e<100?e+"%":""}},thumbPosition:function(t){var e=t.thumbPositionPercentage,r=t.bar;this.$refs.wrap[r.scroll]=e*this.$refs.wrap[r.scrollSize]/100}},beforeDestroy:function(){this.observer&&this.observer.disconnect()}}}},a=(r(370),r(46)),c=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-scrollbar-main"},[r("va-scrollbar",[r("div",{staticClass:"ui-scrollbar-child"},[t._v("\n            报任安书\n            "),r("p",[t._v("太史公牛马走司马迁1，再拜言，少卿足下：")]),t._v(" "),r("p",[t._v("曩者辱赐书2，教以慎于接物，推贤进士为务，意气勤勤恳恳。若望仆不相师3，而用流俗人之言4，仆非敢如此也。仆虽罢驽5，亦尝侧闻长者之遗风矣6。顾自以为身残处秽7，动而见尤，欲益反损，是以独郁悒而无谁语。谚曰：“谁为为之？孰令听之？”盖钟子期死，伯牙终身不复鼓琴8。何则？士为知己者用，女为悦己者容。若仆大质已亏缺矣，虽材怀随和9，行若由夷10，终不可以为荣，适足以见笑而自点耳11。书辞宜答，会东从上来12，又迫贱事，相见日浅，卒卒无须臾之间13，得竭指意。今少卿抱不测之罪，涉旬月，迫季冬14，仆又薄从上上雍15，恐卒然不可为讳16，是仆终已不得舒愤懑以晓左右，则长逝者魂魄私恨无穷。请略陈固陋。阙然久不报，幸勿为过。")]),t._v(" "),r("p",[t._v("仆闻之：修身者，智之符也；爱施者，仁之端也；取予者，义之表也；耻辱者，勇之决也；立名者，行之极也。士有此五者，然后可以托于世，列于君子之林矣。故祸莫憯于欲利，悲莫痛于伤心，行莫丑于辱先，诟莫大于宫刑17。刑余之人，无所比数，非一世也，所从来远矣。昔卫灵公与雍渠同载，孔子适陈18；商鞅因景监见，赵良寒心19；同子参乘，袁丝变色：自古而耻之20！夫中材之人，事有关于宦竖21，莫不伤气，而况于慷慨之士乎22！如今朝廷虽乏人，奈何令刀锯之余，荐天下之豪俊哉！仆赖先人绪业，得待罪辇毂下23，二十余年矣。所以自惟24：上之，不能纳忠效信，有奇策材力之誉，自结明主；次之，又不能拾遗补阙，招贤进能，显岩穴之士；外之，不能备行伍，攻城野战，有斩将搴旗之功25；下之，不能积日累劳，取尊官厚禄，以为宗族交游光宠。四者无一遂，苟合取容，无所短长之效，可见于此矣。乡者26，仆亦尝厕下大夫之列，陪外廷末议27。不以此时引维纲28，尽思虑，今已亏形为扫除之隶，在阘茸之中29，乃欲卬首伸眉30，论列是非，不亦轻朝廷、羞当世之士邪？嗟乎！嗟乎！如仆尚何言哉！尚何言哉！")]),t._v(" "),r("p",[t._v("且事本末未易明也。仆少负不羁之才，长无乡曲之誉31，主上幸以先人之故，使得奉薄伎，出入周卫之中32。仆以为戴盆何以望天33，故绝宾客之知，忘室家之业，日夜思竭其不肖之材力，务一心营职，以求亲媚于主上。而事乃有大谬不然者！夫仆与李陵俱居门下34，素非能相善也。趣舍异路35，未尝衔杯酒36，接殷勤之余欢。然仆观其为人，自守奇士，事亲孝，与士信，临财廉，取予义，分别有让，恭俭下人，常思奋不顾身，以殉国家之急。其素所蓄积也，仆以为有国士之风。夫人臣出万死不顾一生之计，赴公家之难，斯已奇矣。今举事一不当，而全躯保妻子之臣随而媒孽其短37，仆诚私心痛之。且李陵提步卒不满五千，深践戎马之地，足历王庭38，垂饵虎口，横挑强胡39，仰亿万之师40，与单于连战十有余日，所杀过当。虏救死扶伤不给，旃裘之君长咸震怖41，乃悉征其左、右贤王42，举引弓之民，一国共攻而围之。转斗千里，矢尽道穷，救兵不至，士卒死伤如积。然陵一呼劳军，士无不起，躬自流涕，沬自饮泣43，更张空弮44，冒白刃，北首争死敌者。陵未没时，使有来报，汉公卿王侯皆奉觞上寿45。后数日，陵败书闻，主上为之食不甘味，听朝不怡。大臣忧惧，不知所出。仆窃不自料其卑贱，见主上惨凄怛悼46，诚欲效其款款之愚，以为李陵素与士大夫绝甘分少47，能得人之死力，虽古之名将，不能过也。身虽陷败，彼观其意，且欲得其当而报于汉。事已无可奈何，其所摧败，功亦足以暴于天下矣。仆怀欲陈之，而未有路，适会召问，即以此指，推言陵之功，欲以广主上之意，塞睚眦之辞48。未能尽明，明主不晓，以为仆沮贰师49，而为李陵游说，遂下于理50。拳拳之忠，终不能自列。因为诬上，卒从吏议。家贫，货赂不足以自赎，交游莫救，左右亲近不为一言。身非木石，独与法吏为伍，深幽囹圄之中51，谁可告愬者！此真少卿所亲见，仆行事岂不然乎？李陵既生降，隤其家声52，而仆又佴之蚕室53，重为天下观笑。悲夫！悲夫！事未易一二为俗人言也。")]),t._v(" "),r("p",[t._v("仆之先人，非有剖符丹书之功54，文史星历55，近乎卜祝之间，固主上所戏弄，倡优畜之，流俗之所轻也。假令仆伏法受诛，若九牛亡一毛，与蝼螘何以异56？而世又不与能死节者比，特以为智穷罪极，不为自免，卒就死耳。何也？素所自树立使然也。人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。太上，不辱先，其次不辱身，其次不辱理色，其次不辱辞令，其次诎体受辱，其次易服受辱57，其次关木索、被箠楚受辱58，其次剔毛发、婴金铁受辱59，其次毁肌肤、断肢体受辱，最下腐刑极矣60！传曰“刑不上大夫61”。此言士节不可不勉厉也。猛虎在深山，百兽震恐，及在槛阱之中62，摇尾而求食，积威约之渐也。故士有画地为牢，势不入；削木为吏，议不对，定计于鲜也63。今交手足，受木索，暴肌肤，受榜箠64，幽于圜墙之中。当此之时，见狱吏则头枪地65，视徒隶则心惕息66。何者？积威约之势也。及以至是，言不辱者，所谓强颜耳，曷足贵乎！且西伯67，伯也，拘于羑里68；李斯69，相也，具于五刑70；淮阴71，王也，受械于陈72；彭越73、张敖74，南面称孤，系狱抵罪；绛侯诛诸吕75，权倾五伯76，囚于请室77；魏其78，大将也，衣赭衣，关三木；季布为朱家钳奴79；灌夫受辱于居室80。此人皆身至王侯将相，声闻邻国，及罪至罔加81，不能引决自裁，在尘埃之中。古今一体，安在其不辱也？由此言之，勇怯，势也；强弱，形也。审矣，何足怪乎？夫人不能早自裁绳墨之外，以稍陵迟，至于鞭箠之间，乃欲引节，斯不亦远乎！古人所以重施刑于大夫者，殆为此也。夫人情莫不贪生恶死，念父母，顾妻子，至激于义理者不然，乃有所不得已也。今仆不幸，早失父母，无兄弟之亲，独身孤立，少卿视仆于妻子何如哉？且勇者不必死节，怯夫慕义，何处不勉焉！仆虽怯懦，欲苟活，亦颇识去就之分矣，何至自湛溺累绁之辱哉82！且夫臧获婢妾83，犹能引决，况仆之不得已乎？所以隐忍苟活，幽于粪土之中而不辞者，恨私心有所不尽，鄙陋没世，而文采不表于后世也。")]),t._v(" "),r("p",[t._v("古者富贵而名摩灭，不可胜记，唯倜傥非常之人称焉84。盖文王拘而演《周易》85；仲尼厄而作《春秋》86；屈原放逐，乃赋《离骚》87；左丘失明，厥有《国语》88；孙子膑脚，《兵法》修列89；不韦迁蜀，世传《吕览》90；韩非囚秦，《说难》《孤愤》91；《诗》三百篇92，大底圣贤发愤之所为作也。此人皆意有所郁结，不得通其道，故述往事、思来者。乃如左丘无目，孙子断足，终不可用，退而论书策，以舒其愤，思垂空文以自见。仆窃不逊，近自托于无能之辞，网罗天下放失旧闻93，略考其行事，综其终始，稽其成败兴坏之纪，上计轩辕，下至于兹，为十表，本纪十二，书八章，世家三十，列传七十，凡百三十篇。亦欲以究天人之际，通古今之变，成一家之言。草创未就，会遭此祸，惜其不成，是以就极刑而无愠色94。仆诚以著此书，藏之名山，传之其人，通邑大都，则仆偿前辱之责，虽万被戮，岂有悔哉！然此可为智者道，难为俗人言也！")]),t._v(" "),r("p",[t._v("且负下未易居，下流多谤议。仆以口语遇遭此祸，重为乡党戮笑95，以污辱先人，亦何面目复上父母之丘墓乎？虽累百世，垢弥甚耳！是以肠一日而九回96，居则忽忽若有所亡，出则不知其所往。每念斯耻，汗未尝不发背沾衣也！身直为闺閤之臣97，宁得自引深藏于岩穴邪？故且从俗浮沉，与时俯仰，以通其狂惑。今少卿乃教以推贤进士，无乃与仆私心剌谬乎？今虽欲自雕琢98，曼辞以自饰99，无益，于俗不信，适足取辱耳。要之，死日然后是非乃定。书不能悉意，故略陈固陋。谨再拜。")])])])],1)}),[],!1,null,null,null);e.default=c.exports}}]);