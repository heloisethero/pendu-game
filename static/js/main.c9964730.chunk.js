(this.webpackJsonppendu=this.webpackJsonppendu||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),l=n(2),o=n(5),u=n(6),d=n(8),E=n(7),i=n(1),m=(n(14),["BALLAST","BRETZEL","DJEMBE","JOUXTER","RENEGAT","STROPHE","UKELELE","ZOZOTER","CITHARE","QUETSCHE","PASTICHE","CAPELINE","PASTICHE","SYMPTOME","ZEPPELIN","TOMAHAWK","BALALAIKA","ASEPTISER","KLAXONNER","PRINTEMPS","XYLOPHONE","QUEMANDER","FLIBUSTIER","APOCALYPSE","CONTROVERSE","LABYRINTHE","SOLILOQUER","COQUELICOT","ACROSTICHE","MAHARADJAH"]),O=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),A={numberOfWrongGuesses:0,lettersAlreadyUsed:[]},T=function(e){var t=e.wordToGuess,n=e.lettersAlreadyUsed;return r.a.createElement("div",{className:"wordToGuess"},Object(i.a)(t).map((function(e,t){return r.a.createElement("span",{key:t},n.includes(e)?e:"_"," ")})))},f=function(e){var t=e.numberOfWrongGuesses;return r.a.createElement("div",{className:"guesses"},"Number of wrong guesses left: ",10-t)},C=function(e){var t=e.letter,n=e.alreadyClicked,a=e.onClick;return r.a.createElement("div",{className:"letterButton ".concat(n),onClick:function(){return a(t)}},r.a.createElement("span",{className:"letter"},t))},G=function(e){var t=e.text,n=e.onClick;return r.a.createElement("div",null,r.a.createElement("div",{className:"endMessage"},"You have ",t,"!"),r.a.createElement("div",{className:"resetButton",onClick:n}," Click here to reset the game... "))},b=function(e){var t=e.wordToGuess;return r.a.createElement("div",{className:"endMessage"},"The word was: ",Object(i.a)(t).map((function(e,t){return r.a.createElement("span",{key:t},e)})))},v=function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state=Object(l.a)(Object(l.a)({},A),{},{wordToGuess:e.generateWordToGuess()}),e.handleLetterClick=function(t){!e.state.lettersAlreadyUsed.includes(t)&&e.setState({lettersAlreadyUsed:[].concat(Object(i.a)(e.state.lettersAlreadyUsed),[t])}),!e.state.lettersAlreadyUsed.includes(t)&&!e.state.wordToGuess.includes(t)&&e.setState({numberOfWrongGuesses:e.state.numberOfWrongGuesses+1})},e.resetGame=function(){e.setState(Object(l.a)(Object(l.a)({},A),{},{wordToGuess:e.generateWordToGuess()}))},e}return Object(u.a)(n,[{key:"generateWordToGuess",value:function(){return m[Math.floor(Math.random()*m.length)]}},{key:"render",value:function(){var e=this,t=this.state,n=t.wordToGuess,a=t.numberOfWrongGuesses,s=t.lettersAlreadyUsed,c=Object(i.a)(n).every((function(e){return s.includes(e)})),l=a>=10;return r.a.createElement("div",{className:"pendu"},r.a.createElement(T,{wordToGuess:n,lettersAlreadyUsed:s}),O.map((function(t){return r.a.createElement(C,{letter:t,onClick:e.handleLetterClick,alreadyClicked:s.includes(t),key:t})})),r.a.createElement(f,{numberOfWrongGuesses:a}),c&&r.a.createElement(G,{text:"won",onClick:this.resetGame}),l&&r.a.createElement(G,{text:"lost",onClick:this.resetGame}),l&&r.a.createElement(b,{wordToGuess:n}))}}]),n}(a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c9964730.chunk.js.map