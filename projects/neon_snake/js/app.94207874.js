(function(){var e={7536:function(e,t,i){"use strict";var n=i(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("FirstScreenGame"),t("HeaderComponent",{attrs:{score:e.totalPoints}}),t("SnakeGameComponent",{on:{currentScore:e.setScore}}),t("FooterComponent")],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",{style:{"background-image":"url("+i(7173)("./"+e.backgroundMain)+")"},attrs:{id:"snake-container"}},[t("SideMenuComponent",{on:{speed:e.setSpeed,"bg-image":e.setBackgroundImage,"hide-game":e.hideGameScreen}}),t("div",{directives:[{name:"show",rawName:"v-show",value:!1===e.hideGame,expression:"hideGame === false"}],attrs:{id:"game-container"}},[t("div",{attrs:{id:"score-counter"}},[t("h3",[e._v("Score:")]),t("div",[e._v(e._s(e.score))])]),t("canvas",{ref:"snakegame",attrs:{id:"snake-game",width:e.boardSize.width*e.boardSize.cellSize,height:e.boardSize.height*e.boardSize.cellSize}})]),e.pauseIndex?e._e():t("div",{attrs:{id:"pause-screen"}},[e._v("GAME PAUSED")])],1)},r=[];i(541);const l={width:50,height:20,cellSize:20},c=[{name:"left",keyCode:37,move:{x:-1,y:0}},{name:"top",keyCode:38,move:{x:0,y:-1}},{name:"right",keyCode:39,move:{x:1,y:0}},{name:"down",keyCode:40,move:{x:0,y:1}}];var h=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"side-menus-container"}},[t("div",{staticClass:"menu",class:!0===e.toggleLeft?"left-menu-active":"left-hide"},[t("div",{attrs:{id:"speed-select"}},[t("h3",[e._v("Snake Speed:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.speedValue,expression:"speedValue"}],staticClass:"decorated",attrs:{name:"speed",id:"speed"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.speedValue=t.target.multiple?i:i[0]},function(t){e.$emit("speed",e.speedValue),e.removeBlur()}]}},[t("option",{attrs:{value:"400"}},[e._v("Very Slow")]),t("option",{attrs:{value:"300"}},[e._v("Slow")]),t("option",{attrs:{value:"200"}},[e._v("Normal")]),t("option",{attrs:{value:"100"}},[e._v("Fast")]),t("option",{attrs:{value:"50"}},[e._v("Very Fast")]),t("option",{attrs:{value:"20"}},[e._v("Impossible")])])]),t("div",{attrs:{id:"bg-select"}},[t("h3",[e._v("Background:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.bgImage,expression:"bgImage"}],staticClass:"decorated",attrs:{name:"bgImage",id:"bg-images"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.bgImage=t.target.multiple?i:i[0]},function(t){e.$emit("bg-image",e.bgImage),e.removeBlur()}]}},[t("option",{attrs:{value:"neoncity1.gif"}},[e._v("Neon City")]),t("option",{attrs:{value:"neoncity2.gif"}},[e._v("Space Bridge")]),t("option",{attrs:{value:"neoncity3.gif"}},[e._v("Rainy Day")]),t("option",{attrs:{value:"neoncity4.gif"}},[e._v("Gamer Room")]),t("option",{attrs:{value:"neoncity5.gif"}},[e._v("Bird City")]),t("option",{attrs:{value:"neoncity6.gif"}},[e._v("Future Sky")]),t("option",{attrs:{value:"neoncity7.gif"}},[e._v("Hacking Hub")]),t("option",{attrs:{value:"blackbg.jpg"}},[e._v("Total Black")])])]),t("div",{attrs:{id:"hide-game-select"}},[t("h3",[e._v("Hide Game:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.hideGame,expression:"hideGame"}],staticClass:"decorated",attrs:{name:"hideGame",id:"hide-game"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.hideGame=t.target.multiple?i:i[0]},function(t){e.$emit("hide-game",e.hideGame),e.removeBlur()}]}},[t("option",{attrs:{value:"no"}},[e._v("No")]),t("option",{attrs:{value:"yes"}},[e._v("Yes")])])]),t("div",{staticClass:"toggle-button left-button",on:{click:e.toggleLeftMenu}},[e._v(" OPTIONS ")])]),t("div",{staticClass:"menu",class:!0===e.toggleRight?"right-menu-active":"right-hide"},[t("div",{staticClass:"toggle-button right-button",on:{click:e.toggleRightMenu}},[e._v(" BOOSTS ")])])])},d=[],u={name:"SideMenuComponent",data(){return{toggleLeft:!1,toggleRight:!1,speedValue:"50",bgImage:"neoncity1.gif",hideGame:"no"}},methods:{toggleLeftMenu(){this.toggleLeft=!this.toggleLeft},toggleRightMenu(){this.toggleRight=!this.toggleRight},removeBlur(){console.log("remove blur"),document.activeElement.blur()}}},g=u,m=i(1001),v=(0,m.Z)(g,h,d,!1,null,"774481b6",null),p=v.exports,f={name:"SnakeGameComponent",components:{SideMenuComponent:p},props:{},data(){return{boardSize:l,directions:c,snake:[{x:0,y:0}],snakeNewDirection:null,snakeColor:"#01c4ff",nextFoodPosition:{x:0,y:0},nextGhostPosition:{x:0,y:0},pauseIndex:!0,score:0,ghostCounter:0,backgroundMain:"neoncity1.gif",snakeSpeed:"50",hideGame:!1}},mounted(){this.context=this.$refs.snakegame.getContext("2d"),this.resetGame(),window.addEventListener("keyup",(e=>{32===e.keyCode&&this.pauseGame()})),window.addEventListener("keydown",this.onArrowKeyboardPressed),this.interval=setInterval(this.moveNext,this.snakeSpeed)},methods:{resetGame(){this.snake=[{x:Math.floor(this.boardSize.width/2),y:Math.floor(this.boardSize.height/2)}],this.snakeNewDirection=null,this.generateNewFoodPosition(),this.generateNewGhostPosition(),this.score=0,this.createGame()},createGame(){this.context.clearRect(0,0,this.boardSize.width*this.boardSize.cellSize,this.boardSize.height*this.boardSize.cellSize),this.context.beginPath(),this.snake.forEach((e=>{this.context.rect(e.x*this.boardSize.cellSize,e.y*this.boardSize.cellSize,this.boardSize.cellSize,this.boardSize.cellSize),this.context.fillStyle=this.snakeColor,this.context.fill()})),this.context.closePath(),this.context.beginPath(),this.context.rect(this.nextFoodPosition.x*this.boardSize.cellSize,this.nextFoodPosition.y*this.boardSize.cellSize,this.boardSize.cellSize,this.boardSize.cellSize),this.context.fillStyle="#7aff01",this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.rect(this.nextGhostPosition.x*this.boardSize.cellSize,this.nextGhostPosition.y*this.boardSize.cellSize,this.boardSize.cellSize,this.boardSize.cellSize),this.context.fillStyle="purple",this.context.fill(),this.context.closePath()},pauseGame(){console.log("Pause game triggered"),!0===this.pauseIndex?(clearInterval(this.interval),clearInterval(this.ghostInterval),this.pauseIndex=!this.pauseIndex):(this.interval=setInterval(this.moveNext,this.snakeSpeed),this.ghostCounter>0&&(this.ghostInterval=setInterval(this.generateNewGhostPosition,2e3)),this.pauseIndex=!this.pauseIndex)},moveSpeed(){clearInterval(this.interval),this.interval=setInterval(this.moveNext,this.snakeSpeed)},setSpeed(e){this.snakeSpeed=e,console.log("selected speed is:",e),console.log("speed is:",this.speed),this.pauseIndex=!0,this.resetGame(),clearInterval(this.ghostInterval),this.ghostCounter=0,this.moveSpeed(),console.log("snakeSpeed:",this.snakeSpeed)},moveNext(){if(null!=this.snakeNewDirection){0===this.ghostCounter&&(this.ghostInterval=setInterval(this.generateNewGhostPosition,2e3),this.ghostCounter++),this.snake.unshift({x:this.snake[0].x+this.snakeNewDirection.move.x,y:this.snake[0].y+this.snakeNewDirection.move.y}),this.snake[0].x===this.nextFoodPosition.x&&this.snake[0].y===this.nextFoodPosition.y?(this.increaseScore(),this.generateNewFoodPosition()):this.snake.pop();for(let e=1;e<this.snake.length;e++)if(this.snake[0].x===this.snake[e].x&&this.snake[0].y===this.snake[e].y)return this.$emit("currentScore",this.score),this.resetGame(),clearInterval(this.ghostInterval),this.ghostCounter=0,void window.alert("You lost! The snake crashed on its body :(");return this.snake[0].x<0||this.snake[0].x>=this.boardSize.width||this.snake[0].y<0||this.snake[0].y>=this.boardSize.height?(this.$emit("currentScore",this.score),this.resetGame(),clearInterval(this.ghostInterval),this.ghostCounter=0,void window.alert("You lost! The snake crashed on a wall :(")):this.snake[0].x===this.nextGhostPosition.x&&this.snake[0].y===this.nextGhostPosition.y?(this.$emit("currentScore",this.score),this.resetGame(),clearInterval(this.ghostInterval),this.ghostCounter=0,void window.alert("You lost! You have been caught by a ghost :(")):void this.createGame()}},onArrowKeyboardPressed(e){let t=this.directions.find((t=>t.keyCode==e.keyCode));t&&(null!=this.snakeNewDirection&&2==Math.abs(this.snakeNewDirection.keyCode-t.keyCode)||(this.snakeNewDirection=t))},generateNewFoodPosition(){let e=!1;while(!e){const t={x:Math.floor(Math.random()*this.boardSize.width),y:Math.floor(Math.random()*this.boardSize.height)},i=this.snake.find((e=>e.x===t.x&&e.y===t.y));i||(this.nextFoodPosition=t,e=!0)}},generateNewGhostPosition(){let e=!1;while(!e){const t={x:Math.floor(Math.random()*this.boardSize.width),y:Math.floor(Math.random()*this.boardSize.height)},i=this.snake.find((e=>e.x===t.x&&e.y===t.y));i||(this.nextGhostPosition=t,e=!0)}this.createGame()},getMultiplier(e){let t=0;switch(e){case"400":t=1;break;case"300":t=2;break;case"200":t=3;break;case"100":t=4;break;case"50":t=5;break;case"20":t=6;break}return t},increaseScore(){let e=this.getMultiplier(this.snakeSpeed);this.score+=e,console.log("Current Score:",this.score)},setBackgroundImage(e){this.backgroundMain=e},hideGameScreen(e){"no"===e?(window.addEventListener("keydown",this.onArrowKeyboardPressed),this.hideGame=!1):(window.removeEventListener("keydown",this.onArrowKeyboardPressed),this.hideGame=!0)}}},b=f,k=(0,m.Z)(b,a,r,!1,null,"e5146a40",null),y=k.exports,S=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"header-container"}},[e._m(0),t("div",{attrs:{id:"score-counter"}},[t("h3",[e._v("Total Points:")]),t("div",[e._v(e._s(e.score))])])])},x=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"speed-select"}},[t("h3",[e._v("Failah")])])}],I={name:"HeaderComponent",data(){return{speedValue:"400"}},props:{score:Number},methods:{removeBlur(){console.log("remove blur"),document.activeElement.blur()}}},w=I,C=(0,m.Z)(w,S,x,!1,null,"5489716c",null),G=C.exports,z=function(){var e=this;e._self._c;return e._m(0)},P=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"footer-container"}},[t("audio",{attrs:{controls:"",loop:""}},[t("source",{attrs:{src:i(9826),type:"audio/ogg"}}),t("source",{attrs:{src:i(5043),type:"audio/mpeg"}}),t("source",{attrs:{src:i(9897),type:"audio/mpeg"}}),e._v(" Your browser does not support the audio element. ")]),t("div",[t("h3",[e._v("Press SPACE to trigger Pause Game")]),t("h3",[e._v("Don't get caught by the "),t("span",[e._v("Ghost")]),e._v("!")])]),t("div",{attrs:{id:"credits"}},[t("h5",[e._v("Developed by Valerio Schiarizza")]),t("h5",[e._v(" Aka Failah: "),t("a",{staticClass:"developer",attrs:{target:"_blank",href:"https://github.com/Failah/vs-snake-game"}},[e._v("GitHub")])])])])}],N={name:"FooterComponent"},R=N,E=(0,m.Z)(R,z,P,!1,null,"ac3530fc",null),Z=E.exports,A=function(){var e=this,t=e._self._c;return e.toggleStartScreen?t("div",{class:{"disappear-animation":!e.toggleAnimation},attrs:{id:"start-screen"}},[t("div",[e._v("NEON SNAKE")]),t("div",[e._v("Developed by Failah")]),t("button",{on:{click:e.disappearScreen}},[t("span"),t("span"),t("span"),t("span"),e._v(" START GAME ")]),e._m(0)]):e._e()},B=[function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("Instagram: valerio_skya")]),t("p",[e._v("GitHub: Failah")])])}],W={name:"FirstScreenGame",data(){return{toggleStartScreen:!0,toggleAnimation:!0}},methods:{toggleScreen(){this.toggleStartScreen=!this.toggleStartScreen},disappearScreen(){console.log("START GAME button clicked"),this.toggleAnimation=!this.toggleAnimation,this.timer=setTimeout(this.toggleScreen,1300)}}},M=W,V=(0,m.Z)(M,A,B,!1,null,"70d69aa5",null),Q=V.exports,O={name:"App",components:{SnakeGameComponent:y,HeaderComponent:G,FooterComponent:Z,FirstScreenGame:Q},data(){return{totalPoints:0}},methods:{setScore(e){this.totalPoints+=e}}},U=O,Y=(0,m.Z)(U,o,s,!1,null,null,null),J=Y.exports;n.ZP.config.productionTip=!1,new n.ZP({render:e=>e(J)}).$mount("#app")},7173:function(e,t,i){var n={"./audio/PaulKalkbrenner-Jestrupp.mp3":9826,"./audio/PaulKalkbrenner-aron.mp3":5043,"./audio/PaulKalkbrenner-wirWerden.mp3":9897,"./blackbg.jpg":1616,"./logo.png":6949,"./neonbg1.gif":9306,"./neonbg2.gif":1006,"./neoncity1.gif":7590,"./neoncity2.gif":2142,"./neoncity3.gif":7625,"./neoncity4.gif":2710,"./neoncity5.gif":3114,"./neoncity6.gif":2294,"./neoncity7.gif":7361};function o(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=7173},9826:function(e,t,i){"use strict";e.exports=i.p+"media/PaulKalkbrenner-Jestrupp.0bbafb63.mp3"},5043:function(e,t,i){"use strict";e.exports=i.p+"media/PaulKalkbrenner-aron.5a3c9cc3.mp3"},9897:function(e,t,i){"use strict";e.exports=i.p+"media/PaulKalkbrenner-wirWerden.32980e44.mp3"},1616:function(e,t,i){"use strict";e.exports=i.p+"img/blackbg.2ec78929.jpg"},6949:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},9306:function(e,t,i){"use strict";e.exports=i.p+"img/neonbg1.89bf42c8.gif"},1006:function(e,t,i){"use strict";e.exports=i.p+"img/neonbg2.df1d046e.gif"},7590:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity1.7cea2de4.gif"},2142:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity2.f148c2d0.gif"},7625:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity3.91063fad.gif"},2710:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity4.95113586.gif"},3114:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity5.e2eab62b.gif"},2294:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity6.030f704b.gif"},7361:function(e,t,i){"use strict";e.exports=i.p+"img/neoncity7.e6b0f760.gif"}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,s){if(!n){var a=1/0;for(h=0;h<e.length;h++){n=e[h][0],o=e[h][1],s=e[h][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<a&&(a=s));if(r){e.splice(h--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[n,o,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p=""}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,a=n[0],r=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(l)var h=l(i)}for(t&&t(n);c<a.length;c++)s=a[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(h)},n=self["webpackChunkvs_snake_game"]=self["webpackChunkvs_snake_game"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7536)}));n=i.O(n)})();
//# sourceMappingURL=app.94207874.js.map