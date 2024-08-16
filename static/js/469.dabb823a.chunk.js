"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[469],{341:(e,t,r)=>{var n=r(579),c=r(43),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var c in t=arguments[r])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},i.apply(this,arguments)};function o(e,t){var r,n;switch(t.type){case"TYPE":return i(i({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length+1)});case"DELAY":return i(i({},e),{speed:t.payload});case"DELETE":return i(i({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case"COUNT":return i(i({},e),{count:e.count+1});default:return e}}var l=function(e){var t=e.words,r=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,n=e.loop,i=void 0===n?1:n,l=e.typeSpeed,u=void 0===l?80:l,a=e.deleteSpeed,s=void 0===a?50:a,d=e.delaySpeed,p=void 0===d?1500:d,m=e.onLoopDone,h=e.onType,v=e.onDelete,f=e.onDelay,y=c.useReducer(o,{speed:u,text:"",count:0}),g=y[0],z=g.speed,_=g.text,C=g.count,T=y[1],k=c.useRef(0),x=c.useRef(!1),b=c.useRef(!1),E=c.useRef(!1),M=c.useRef(!1),w=c.useCallback((function(){var e=C%r.length,t=r[e];b.current?(T({type:"DELETE",payload:t,speed:s}),""===_&&(b.current=!1,T({type:"COUNT"}))):(T({type:"TYPE",payload:t,speed:u}),E.current=!0,_===t&&(T({type:"DELAY",payload:p}),E.current=!1,M.current=!0,setTimeout((function(){M.current=!1,b.current=!0}),p),i>0&&(k.current+=1,k.current/r.length===i&&(M.current=!1,x.current=!0)))),E.current&&h&&h(k.current),b.current&&v&&v(),M.current&&f&&f()}),[C,p,s,i,u,r,_,h,v,f]);return c.useEffect((function(){var e=setTimeout(w,z);return x.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[w,z]),c.useEffect((function(){m&&x.current&&m()}),[m]),[_,{isType:E.current,isDelay:M.current,isDelete:b.current,isDone:x.current}]};!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===r&&n.firstChild?n.insertBefore(c,n.firstChild):n.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var u=c.memo((function(e){var t=e.cursorBlinking,r=void 0===t||t,c=e.cursorStyle,o=void 0===c?"|":c,l=e.cursorColor,u=void 0===l?"inherit":l;return n.jsx("span",i({style:{color:u},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(r?"styles-module_blinking__9VXRT":"")},{children:o}))}));t.bs=u,t.d1=l},639:(e,t,r)=>{r.d(t,{ZKb:()=>c});var n=r(441);function c(e){return(0,n.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M407 24.98v14.04h16V25zM88.99 25v14.03H105V25zM487 57H344.9v15.96H487zm-320 0H25v15.98h142zm256 33.93h-16.1v27.97l13.7.1h2.4zm-318 .1H88.97v28.07H105zm272 45.87l-.1 32.1h-78.5l-16-32h-52.8l-16 32.1-78.6-.1v-32H55.03l-12.04 48L199 214.4V208c.1-31.4 25.7-56.9 57.1-57 31.3 0 57 25.6 56.9 57 0 4.1.1 6.4.1 6.4L469 185.1 457 137zM256.1 169c-21.6 0-39 17.4-39.1 39.1.1 21.5 17.5 38.9 39.1 38.9s39-17.4 38.9-39c.1-21.5-17.3-39-38.9-39zm-.2 14c13.8 0 25 11.3 25.1 25 0 13.7-11.3 25.1-25 25-13.7 0-25.1-11.3-25-24.9 0-13.8 11.3-25 24.9-25.1zm-54.7 40.5L215 279h82l13.9-55.4c-6.8 23.9-28.8 41.4-54.8 41.4-26.1 0-48.1-17.6-54.9-41.5zm-35.8 4.2L60.35 321.1l83.85 107.7c5-5 11.3-8.8 18.2-11.1L100.2 318l87.9-73-3.4-13.4zm181.3.2l-19.4 3.8-3.3 13.4 87.8 73-62.2 99.6c7 2.3 13.2 6.2 18.3 11.3l83.8-107.8zM176 433.6c-15 0-26.9 11.9-26.9 26.7 0 14.9 11.9 26.7 27 26.8 14.9-.1 26.9-12 26.9-26.8-.1-14.8-11.9-26.7-27-26.7zm159.9 0c-14.9.1-27 11.9-26.9 26.8 0 14.7 11.9 26.6 27 26.6 15 0 27-11.8 26.9-26.7.1-14.8-11.9-26.7-27-26.7z"},child:[]}]})(e)}},355:(e,t,r)=>{r.d(t,{AeH:()=>i,GWR:()=>o,IR8:()=>l,ieP:()=>c});var n=r(441);function c(e){return(0,n.k5)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}function i(e){return(0,n.k5)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(e)}function o(e){return(0,n.k5)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(e)}function l(e){return(0,n.k5)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}}}]);
//# sourceMappingURL=469.dabb823a.chunk.js.map