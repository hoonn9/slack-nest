(self.webpackChunklecture=self.webpackChunklecture||[]).push([[58],{8678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294);const l=e=>{const[t,n]=(0,a.useState)(e);return[t,(0,a.useCallback)((e=>{n(e.target.value)}),[]),n]}},8058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ie});var a=n(5558);const l=a.Z.div`
  display: flex;
  flex: 1;
`,r=a.Z.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
  border-right: 1px solid rgb(82, 38, 83);
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
`,o=a.Z.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;
  & a {
    padding-left: 36px;
    color: inherit;
    text-decoration: none;
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;
    &.selected {
      color: white;
    }
  }
  & .bold {
    color: white;
    font-weight: bold;
  }
  & .count {
    margin-left: auto;
    background: #cd2553;
    border-radius: 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: white;
    margin-right: 16px;
  }
  & h2 {
    height: 36px;
    line-height: 36px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
  }
`,i=a.Z.button`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 100%;
  text-align: left;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 900;
  font-size: 23px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  padding-left: 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`,s=a.Z.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`,c=a.Z.div`
  padding: 10px 0 0;
  & h2 {
    padding-left: 20px;
  }
  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;
    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`,d=a.Z.div`
  flex: 1;
`,p=a.Z.button`
  color: white;
  font-size: 24px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`,u=a.Z.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: white;
  border: 3px solid #3f0e40;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;var m=n(3564),h=n(9669),g=n.n(h),x=n(7294),f=n(5977),b=n(5723);const v=a.Z.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
  & > div {
    margin-top: 200px;
    display: inline-block;
    width: 440px;
    background: white;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
    border-radius: 6px;
    user-select: none;
    max-width: 440px;
    padding: 30px 40px 0;
    z-index: 1012;
    position: relative;
  }
`,k=a.Z.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`,w=({show:e,children:t,onCloseModal:n})=>{const a=(0,x.useCallback)((e=>{e.stopPropagation()}),[]);return e?x.createElement(v,{onClick:n},x.createElement("div",{onClick:a},x.createElement(k,{onClick:n},"×"),t)):null};var E=n(1670),C=n(8678);const _=({show:e,onCloseModal:t,onCreateWorkspace:n})=>{const[a,l,r]=(0,C.Z)(""),[o,i,s]=(0,C.Z)(""),c=(0,x.useCallback)((async e=>{e.preventDefault(),a&&a.trim()&&o&&o.trim()&&(await n(a,o),r(""),s(""))}),[a,o]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:c},x.createElement(E.__,{id:"workspace-label"},x.createElement("span",null,"워크스페이스 이름"),x.createElement(E.II,{id:"workspace",value:a,onChange:l})),x.createElement(E.__,{id:"workspace-url-label"},x.createElement("span",null,"워크스페이스 url"),x.createElement(E.II,{id:"workspace",value:o,onChange:i})),x.createElement(E.zx,{type:"submit"},"생성하기")))};var y=n(6508),Z=n(3727),S=n(9249);const $=({list:e,revalidate:t})=>{const n=(0,f.k6)(),{setWorkspace:a}=(0,y.c)(),[l,o]=(0,x.useState)(!1),i=(0,x.useCallback)((()=>{o(!0)}),[]),s=(0,x.useCallback)((()=>{o(!1)}),[]),c=(0,x.useCallback)((async(e,n)=>{try{await g().post("/api/workspaces",{workspace:e,url:n},{withCredentials:!0}),t(),o(!1)}catch(e){var a;console.dir(e),S.Am.error(null===(a=e.response)||void 0===a?void 0:a.data,{position:"bottom-center"})}}),[]);return(0,x.useEffect)((()=>{if(n.location.pathname.split("/").length>2){const t=e.find((e=>e.url===n.location.pathname.split("/")[2]));t&&a(t)}}),[e,n.location]),x.createElement(x.Fragment,null,x.createElement(r,null,e&&e.map((e=>x.createElement(Z.rU,{key:e.id,to:`/workspace/${e.url}/channel/일반`,onClick:()=>a(e)},x.createElement(u,null,e.name.slice(0,1).toUpperCase())))),x.createElement(p,{onClick:i},"+")),x.createElement(_,{show:l,onCloseModal:s,onCreateWorkspace:c}))};var I=n(1753);const z=a.Z.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`,D=a.Z.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`,T=(0,a.Z)(I.r)`
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`,P=a.Z.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,A=a.Z.button`
  position: absolute;
  right: 5px;
  top: 5px;
`,M=a.Z.button`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    margin-right: 5px;
  }
  ${({focus:e})=>e&&"\n    background: #1264a3;\n    color: white;\n  "};
`;var U=n(3682),N=n(6182),O=n.n(N);const F=({chat:e,onSubmitForm:t,onChangeChat:n,placeholder:a})=>{const{workspace:l}=(0,f.UO)(),{data:r,error:o,revalidate:i,mutate:s}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:c}=(0,b.ZP)(r&&"slack"!==l?`/api/workspaces/${l}/members`:null,m.Z),d=(0,x.useRef)(null);(0,x.useEffect)((()=>{d.current&&(0,U.Z)(d.current)}),[]);const p=(0,x.useCallback)((e=>{"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),t(e)))}),[t]),u=(0,x.useCallback)(((e,t,n,a,l)=>{if(c)return x.createElement(M,{focus:l},x.createElement("img",{src:O().url(c[a].email,{s:"20px",d:"retro"}),alt:c[a].nickname}),x.createElement("span",null,n))}),[c]);return x.createElement(z,null,x.createElement(D,{onSubmit:t},x.createElement(T,{id:"editor-chat",value:e,onChange:n,onKeyPress:p,placeholder:a,inputRef:d,allowSuggestionsAboveCursor:!0},x.createElement(I.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==c?void 0:c.map((e=>({id:e.id,display:e.nickname}))))||[],renderSuggestion:u})),x.createElement(P,null,x.createElement(A,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=e&&e.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=e&&e.trim())},x.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))};var R=n(1298);const L=a.Z.div`
  display: flex;
  padding: 8px 20px;
  &:hover {
    background: #eee;
  }
  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
    }
  }
`;var B=n(7484),H=n.n(B),W=n(8817);const j=({data:e})=>{const{workspace:t}=(0,f.UO)(),n="Sender"in e?e.Sender:e.User,a=(0,x.useMemo)((()=>e.content.startsWith("uploads/")?x.createElement("img",{src:`http://localhost:3095/${e.content}`,style:{maxHeight:200}}):(0,W.Z)({input:e.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator(e,n){const a=e.match(/@\[(.+?)]\((\d+?)\)/);return a?x.createElement(Z.rU,{key:e+n,to:`/workspace/${t}/dm/${a[2]}`},"@",a[1]):x.createElement("br",{key:n})}})),[t,e.content]);return x.createElement(L,null,x.createElement("div",{className:"chat-img"},x.createElement("img",{src:O().url(n.email,{s:"36px",d:"retro"}),alt:n.nickname})),x.createElement("div",{className:"chat-text"},x.createElement("div",{className:"chat-user"},x.createElement("b",null,n.nickname),x.createElement("span",{style:{padding:"0px 4px"}},H()(e.createdAt).format("h:mm A"))),x.createElement("p",null,a)))},q=(0,x.memo)(j),Y=a.Z.div`
  width: 100%;
  display: flex;
  flex: 1;
`,K=a.Z.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
`,J=a.Z.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;
  & button {
    font-weight: bold;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    position: relative;
    top: -13px;
    background: white;
    border: none;
    outline: none;
  }
`,G=(0,x.forwardRef)((({chatSections:e,setSize:t,isReachingEnd:n},a)=>{const l=(0,x.useCallback)((e=>{0!==e.scrollTop||n||(console.log("가장 위"),t((e=>e+1)).then((()=>{const t=null==a?void 0:a.current;t&&t.scrollTop(t.getScrollHeight()-e.scrollHeight)})))}),[a,n,t]);return x.createElement(Y,null,x.createElement(R.$B,{autoHide:!0,ref:a,onScrollFrame:l},Object.entries(e).map((([e,t])=>x.createElement(K,{className:`section-${e}`,key:e},x.createElement(J,null,x.createElement("button",null,e)),t.map((e=>x.createElement(q,{key:e.id,data:e}))))))))})),Q=(0,x.memo)(G),V=({show:e,onCloseModal:t,setShowInviteChannelModal:n})=>{const{workspace:a,channel:l}=(0,f.UO)(),[r,o,i]=(0,C.Z)(""),{data:s}=(0,b.ZP)("/api/users",m.Z),{revalidate:c}=(0,b.ZP)(s&&"slack"!==a&&l?`/api/workspaces/${a}/channels/${l}/members`:null,m.Z),d=(0,x.useCallback)((async e=>{if(e.preventDefault(),r&&r.trim())try{await g().post(`/api/workspaces/${a}/channels/${l}/members`,{email:r}),c(),n(!1),i("")}catch(e){var t;console.dir(e),S.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}}),[r]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:d},x.createElement(E.__,{id:"member-label"},x.createElement("span",null,"채널 멤버 초대"),x.createElement(E.II,{id:"member",value:r,onChange:o})),x.createElement(E.zx,{type:"submit"},"초대하기")))};var X=n(5615);const ee={},te=e=>{const t=(0,x.useCallback)((()=>{e&&(ee[e].disconnect(),delete ee[e])}),[]);return e?(ee[e]||(ee[e]=(0,X.io)(`http://localhost:3095/ws-${e}`,{transports:["websocket"]})),[ee[e],t]):[void 0,t]},ne=a.Z.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`,ae=a.Z.header`
  height: 64px;
  display: flex;
  width: 100%;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 var(--saf-0);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;

  & .header-right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`,le=a.Z.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`,re=e=>{const t={};return e.forEach((e=>{const n=H()(e.createdAt).format("YYYY-MM-DD");Array.isArray(t[n])?t[n].push(e):t[n]=[e]})),t};var oe=n(6486);const ie=()=>{var e,t;const{workspace:n,channel:a}=(0,f.UO)(),{data:l}=(0,b.ZP)("/api/users",m.Z),[r,o,i]=(0,C.Z)(""),{data:s}=(0,b.ZP)((()=>"slack"!==n?`/api/workspaces/${n}/channels/${a}`:null),m.Z),{data:c,mutate:d,revalidate:p,setSize:u}=(0,b.g_)((e=>"slack"!==n?`/api/workspaces/${n}/channels/${a}/chats?perPage=20&page=${e+1}`:null),m.Z),{data:h}=(0,b.ZP)((()=>l&&"slack"!==n?`/api/workspaces/${n}/channels/${a}/members`:null),m.Z),[v]=te(n),k=0===(null==c||null===(e=c[0])||void 0===e?void 0:e.length)||c&&(null===(t=c[c.length-1])||void 0===t?void 0:t.length)<20||!1,w=(0,x.useRef)(null),[E,_]=(0,x.useState)(!1),[y,Z]=(0,x.useState)(!1),S=(0,x.useCallback)((async e=>{if(e.preventDefault(),null!=r&&r.trim()&&c&&s)try{var t;await d((e=>{var t;return null==e||e[0].unshift({id:((null===(t=c[0][0])||void 0===t?void 0:t.id)||0)+1,content:r,UserId:l.id,User:l,ChannelId:s.id,Channel:s,createdAt:new Date}),e}),!1),null===(t=w.current)||void 0===t||t.scrollToBottom(),i(""),await g().post(`/api/workspaces/${n}/channels/${a}/chats`,{content:r}),p()}catch(e){console.error(e)}}),[r,c,l,s,n,a]),$=(0,x.useCallback)((async e=>{e.Channel.name!==a||!e.content.startsWith("uploads")&&e.UserId===(null==l?void 0:l.id)||(await d((t=>{const n=(0,oe.cloneDeep)(t||[]);return n[0]=[{id:e.id,content:e.content,UserId:e.UserId,User:e.User,ChannelId:e.ChannelId,Channel:e.Channel,createdAt:e.createdAt},...n[0]],n}),!1),w.current&&w.current.getScrollHeight()<w.current.getClientHeight()+w.current.getScrollTop()+150&&setTimeout((()=>{var e;null===(e=w.current)||void 0===e||e.scrollToBottom()}),50))}),[a,l]);(0,x.useEffect)((()=>(null==v||v.on("message",$),()=>{null==v||v.off("message",$)})),[v,$]),(0,x.useEffect)((()=>{console.log(null==c?void 0:c.length),1===(null==c?void 0:c.length)&&setTimeout((()=>{var e;null===(e=w.current)||void 0===e||e.scrollToBottom()}),500)}),[c]);const I=(0,x.useCallback)((()=>{_(!0)}),[]),z=(0,x.useCallback)((()=>{_(!1)}),[]),D=((0,x.useCallback)((e=>{const t=new FormData;if(e.target.files)for(let n=0;n<e.target.files.length;n++){const a=e.target.files[n].getAsFile();console.log("... file["+n+"].name = "+a.name),t.append("image",a)}g().post(`/api/workspaces/${n}/channels/${a}/images`,t).then((()=>{}))}),[]),(0,x.useCallback)((e=>{e.preventDefault(),console.log(e);const t=new FormData;if(e.dataTransfer.items){for(let n=0;n<e.dataTransfer.items.length;n++)if("file"===e.dataTransfer.items[n].kind){const a=e.dataTransfer.items[n].getAsFile();console.log("... file["+n+"].name = "+a.name),t.append("image",a)}}else for(let n=0;n<e.dataTransfer.files.length;n++)console.log("... file["+n+"].name = "+e.dataTransfer.files[n].name),t.append("image",e.dataTransfer.files[n]);g().post(`/api/workspaces/${n}/channels/${a}/images`,t).then((()=>{Z(!1)}))}),[n,a])),T=(0,x.useCallback)((e=>{e.preventDefault(),console.log(e),Z(!0)}),[]);if(!l)return null;const P=re(c?c.flat().reverse():[]);return x.createElement(ne,{onDrop:D,onDragOver:T},x.createElement(ae,null,x.createElement("span",null,"#",a),x.createElement("div",{className:"header-right"},x.createElement("span",null,null==h?void 0:h.length),x.createElement("button",{onClick:I,className:"c-button-unstyled p-ia__view_header__button","aria-label":"Add people to #react-native","data-sk":"tooltip_parent",type:"button"},x.createElement("i",{className:"c-icon p-ia__view_header__button_icon c-icon--add-user","aria-hidden":"true"})))),x.createElement(Q,{chatSections:P,ref:w,setSize:u,isReachingEnd:k}),x.createElement(F,{chat:r,onChangeChat:o,onSubmitForm:S}),x.createElement(V,{show:E,onCloseModal:z,setShowInviteChannelModal:_}),y&&x.createElement(le,null,"업로드!"))},se=a.Z.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  & > div {
    position: absolute;
    display: inline-block;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
    border-radius: 6px;
    user-select: none;
    min-width: 360px;
    z-index: 512;
    max-height: calc(100vh - 20px);
    color: rgb(29, 28, 29);
  }
`,ce=a.Z.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`,de=({children:e,style:t,show:n,onCloseModal:a,closeButton:l})=>{const r=(0,x.useCallback)((e=>{e.stopPropagation()}),[]);return n?x.createElement(se,{onClick:a},x.createElement("div",{style:t,onClick:r},l&&x.createElement(ce,{onClick:a},"×"),e)):null};de.defaultProps={closeButton:!0};const pe=de,ue=a.Z.header`
  height: 38px;
  background: #350d36;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  padding: 5px;
  text-align: center;
`,me=a.Z.div`
  float: right;
`,he=a.Z.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 5px;
  right: 16px;
`,ge=a.Z.div`
  display: flex;
  padding: 20px;
  & img {
    display: flex;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }
  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`,xe=a.Z.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`,fe=({onLogout:e})=>{const{data:t}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),[n,a]=(0,x.useState)(!1),l=(0,x.useCallback)((e=>{e.stopPropagation(),a(!1)}),[]),r=(0,x.useCallback)((()=>{a((e=>!e))}),[]);return t?x.createElement(ue,null,x.createElement(me,null,x.createElement("span",{onClick:r},x.createElement(he,{src:O().url(t.email,{s:"28px",d:"retro"}),alt:t.nickname}),n&&x.createElement(pe,{style:{right:0,top:38},show:n,onCloseModal:l},x.createElement(ge,null,x.createElement("img",{src:O().url(t.nickname,{s:"36px",d:"retro"}),alt:t.nickname}),x.createElement("div",null,x.createElement("span",{id:"profile-name"},t.nickname),x.createElement("span",{id:"profile-active"},"Active"))),x.createElement(xe,{onClick:e},"로그아웃"))))):null},be=a.Z.button`
  background: transparent;
  border: none;
  width: 26px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  ${({collapse:e})=>e&&"\n    & i {\n      transform: none;\n    }\n  "};
`,ve=()=>{const{workspace:e}=(0,f.UO)(),[t]=te(e),{data:n}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:a}=(0,b.ZP)((()=>n&&"slack"!==e?`/api/workspaces/${e}/channels`:null),m.Z),[l,r]=(0,x.useState)(!1),o=(0,x.useCallback)((()=>{r((e=>!e))}),[]);return(0,x.useEffect)((()=>{a&&n&&t&&t.emit("login",{id:n.id,channels:a.map((e=>e.id))})}),[t,a,n]),x.createElement(x.Fragment,null,x.createElement("h2",null,x.createElement(be,{collapse:l,onClick:o},x.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),x.createElement("span",null,"Channels")),x.createElement("div",null,!l&&(null==a?void 0:a.map((t=>x.createElement(Z.OL,{key:t.name,activeClassName:"selected",to:`/workspace/${e}/channel/${t.name}`},x.createElement("span",null,"# ",t.name)))))))},ke=({show:e,onCloseModal:t,setShowCreateChannelModal:n})=>{const[a,l,r]=(0,C.Z)(""),{workspace:o,channel:i}=(0,f.UO)(),{data:s,error:c,revalidate:d}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{revalidate:p}=(0,b.ZP)(s&&"slack"!==o?`/api/workspaces/${o}/channels`:null,m.Z),u=(0,x.useCallback)((async e=>{e.preventDefault();try{await g().post(`/api/workspaces/${o}/channels`,{name:a},{withCredentials:!0}),n(!1),p(),r("")}catch(e){var t;console.dir(e),S.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}}),[a]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:u},x.createElement(E.__,{id:"channel-label"},x.createElement("span",null,"채널"),x.createElement(E.II,{id:"channel",value:a,onChange:l})),x.createElement(E.zx,{type:"submit"},"생성하기")))},we=()=>{const{workspace:e}=(0,f.UO)(),{data:t}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:n}=(0,b.ZP)(t&&"slack"!==e?`/api/workspaces/${e}/members`:null,m.Z),[a]=te(e),[l,r]=(0,x.useState)(!1),[o,i]=(0,x.useState)([]),s=(0,x.useCallback)((()=>{r((e=>!e))}),[]);return(0,x.useEffect)((()=>{i([])}),[e]),(0,x.useEffect)((()=>(null==a||a.on("onlineList",(e=>{console.log(e),i(e)})),()=>{null==a||a.off("onlineList")})),[a]),x.createElement(x.Fragment,null,x.createElement("h2",null,x.createElement(be,{collapse:l,onClick:s},x.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),x.createElement("span",null,"Direct Messages")),x.createElement("div",null,!l&&n&&n.length>0&&n.map((n=>{const a=o.includes(n.id);return x.createElement(Z.OL,{key:n.id,activeClassName:"selected",to:`/workspace/${e}/dm/${n.id}`},x.createElement("i",{className:"c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence "+(a?"c-presence--active c-icon--presence-online":"c-icon--presence-offline"),"aria-hidden":"true","data-qa":"presence_indicator","data-qa-presence-self":"false","data-qa-presence-active":"false","data-qa-presence-dnd":"false"}),x.createElement("span",null,n.nickname),n.id===(null==t?void 0:t.id)&&x.createElement("span",null," (나)"))}))))},Ee=({show:e,onCloseModal:t,setShowInviteWorkspaceModal:n})=>{const{workspace:a}=(0,f.UO)(),[l,r,o]=(0,C.Z)(""),{data:i}=(0,b.ZP)("/api/users",m.Z),{revalidate:s}=(0,b.ZP)(i&&"slack"!==a?`/api/workspaces/${a}/members`:null,m.Z),c=(0,x.useCallback)((async e=>{if(e.preventDefault(),l&&l.trim())try{await g().post(`/api/workspaces/${a}/members`,{email:l}),s(),n(!1),o("")}catch(e){var t;console.dir(e),S.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}}),[a,l]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:c},x.createElement(E.__,{id:"member-label"},x.createElement("span",null,"이메일"),x.createElement(E.II,{id:"member",type:"email",value:l,onChange:r})),x.createElement(E.zx,{type:"submit"},"초대하기")))},Ce=({onLogout:e})=>{const{workspace:t}=(0,y.c)(),[n,a]=(0,x.useState)(!1),[l,r]=(0,x.useState)(!1),[d,p]=(0,x.useState)(!1),u=(0,x.useCallback)((()=>{a((e=>!e))}),[]),m=(0,x.useCallback)((()=>{p(!0)}),[]),h=(0,x.useCallback)((()=>{r((e=>!e))}),[]),g=(0,x.useCallback)((()=>{r(!1),p(!1)}),[]);return x.createElement(x.Fragment,null,x.createElement(o,null,x.createElement(i,{onClick:u},(null==t?void 0:t.name)||""),x.createElement("i",null),x.createElement(s,null,t&&x.createElement(x.Fragment,null,x.createElement(pe,{show:n,onCloseModal:u,style:{top:95,left:80}},x.createElement(c,null,x.createElement("h2",null,null==t?void 0:t.name),x.createElement("button",{onClick:m},"워크스페이스에 사용자 초대"),x.createElement("button",{onClick:h},"채널 만들기"),x.createElement("button",{onClick:e},"로그아웃"))),x.createElement(ve,null),x.createElement(we,null)))),x.createElement(ke,{show:l,onCloseModal:g,setShowCreateChannelModal:r}),x.createElement(Ee,{show:d,onCloseModal:g,setShowInviteWorkspaceModal:p}))},_e=a.Z.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`,ye=a.Z.header`
  height: 64px;
  display: flex;
  width: 100%;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 var(--saf-0);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;
  & img {
    margin-right: 5px;
  }
`,Ze=a.Z.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`,Se=()=>{var e,t;const{workspace:n,id:a}=(0,f.UO)(),{data:l}=(0,b.ZP)(`/api/workspaces/${n}/users/${a}`,m.Z),{data:r}=(0,b.ZP)("/api/users",m.Z),[o,i,s]=(0,C.Z)(""),{data:c,mutate:d,revalidate:p,setSize:u}=(0,b.g_)((e=>"slack"!==n?`/api/workspaces/${n}/dms/${a}/chats?perPage=20&page=${e+1}`:null),m.Z),[h]=te(n),v=0===(null==c||null===(e=c[0])||void 0===e?void 0:e.length)||c&&(null===(t=c[c.length-1])||void 0===t?void 0:t.length)<20||!1,k=(0,x.useRef)(null),[w,E]=(0,x.useState)(!1),_=(0,x.useCallback)((async e=>{if(e.preventDefault(),null!=o&&o.trim()&&c)try{var t;await d((e=>{var t;return null==e||e[0].unshift({id:((null===(t=c[0][0])||void 0===t?void 0:t.id)||0)+1,content:o,SenderId:r.id,Sender:r,ReceiverId:l.id,Receiver:l,createdAt:new Date}),e}),!1),s(""),null===(t=k.current)||void 0===t||t.scrollToBottom(),await g().post(`/api/workspaces/${n}/dms/${a}/chats`,{content:o}),p()}catch(e){console.error(e)}}),[o,c,r,l,n,a]),y=(0,x.useCallback)((async e=>{e.SenderId===Number(a)&&r.id!==Number(a)&&(await d((t=>{const n=(0,oe.cloneDeep)(t||[]);return n[0]=[{id:e.id,content:e.content,SenderId:e.SenderId,Sender:e.Sender,ReceiverId:e.ReceiverId,Receiver:e.Receiver,createdAt:e.createdAt},...n[0]],n}),!1),k.current&&k.current.getScrollHeight()<k.current.getClientHeight()+k.current.getScrollTop()+150&&setTimeout((()=>{var e;null===(e=k.current)||void 0===e||e.scrollToBottom()}),50))}),[]);(0,x.useEffect)((()=>(null==h||h.on("dm",y),()=>{null==h||h.off("dm",y)})),[h,y]),(0,x.useEffect)((()=>{1===(null==c?void 0:c.length)&&setTimeout((()=>{var e;null===(e=k.current)||void 0===e||e.scrollToBottom()}),100)}),[c]);const Z=(0,x.useCallback)((async e=>{e.preventDefault(),console.log(e);const t=new FormData;if(e.dataTransfer.items){for(let n=0;n<e.dataTransfer.items.length;n++)if("file"===e.dataTransfer.items[n].kind){const a=e.dataTransfer.items[n].getAsFile();console.log("... file["+n+"].name = "+a.name),t.append("image",a)}}else for(let n=0;n<e.dataTransfer.files.length;n++)console.log("... file["+n+"].name = "+e.dataTransfer.files[n].name),t.append("image",e.dataTransfer.files[n]);try{await g().post(`/api/workspaces/${n}/dms/${a}/images`,t),E(!1),p()}catch(e){console.log(e)}}),[p,n,a]),S=(0,x.useCallback)((e=>{e.preventDefault(),console.log("onDragOver"),E(!0)}),[]),$=(0,x.useCallback)((e=>{e.preventDefault(),console.log("onDragLeave"),E(!1)}),[]),I=re(c?c.flat().reverse():[]);return console.log("chatSections",I),l&&r?x.createElement(_e,{onDrop:Z,onDragOver:S,onDragLeave:$},x.createElement(ye,null,x.createElement("img",{src:O().url(l.email,{s:"24px",d:"retro"}),alt:l.nickname}),x.createElement("span",null,l.nickname)),x.createElement(Q,{chatSections:I,ref:k,setSize:u,isReachingEnd:v}),x.createElement(F,{chat:o,onChangeChat:i,onSubmitForm:_}),w&&x.createElement(Ze,null,"업로드")):null},$e=(0,x.memo)(Se),Ie=()=>{const{workspace:e}=(0,f.UO)(),{data:t,mutate:n}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:a,revalidate:r}=(0,b.ZP)("/api/workspaces",m.Z,{dedupingInterval:2e3}),o=(0,x.useCallback)((async()=>{try{await g().post("/api/users/logout",null,{withCredentials:!0}),n(!1,!1)}catch(t){var e;console.dir(t),S.Am.error(null===(e=t.response)||void 0===e?void 0:e.data,{position:"bottom-center"})}}),[]);return t?x.createElement("div",null,x.createElement(fe,{onLogout:o}),x.createElement(l,null,x.createElement($,{list:a||[],revalidate:r}),x.createElement(Ce,{onLogout:o}),e&&"slack"!==e&&x.createElement(d,null,x.createElement(f.rs,null,x.createElement(f.AW,{path:"/workspace/:workspace/channel/:channel",component:ie}),x.createElement(f.AW,{path:"/workspace/:workspace/dm/:id",component:$e}))))):x.createElement(f.l_,{to:"/login"})}},1670:(e,t,n)=>{"use strict";n.d(t,{h4:()=>l,l0:()=>r,__:()=>o,II:()=>i,zx:()=>s,jj:()=>c,fB:()=>d,Ji:()=>p});var a=n(5558);const l=a.Z.header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`,r=a.Z.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`,o=a.Z.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`,i=a.Z.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`,s=a.Z.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4a154b;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(74, 21, 75, 0.9);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`,c=a.Z.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`,d=a.Z.div`
  color: #2eb67d;
  font-weight: bold;
`,p=a.Z.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`},3564:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(9669),l=n.n(a);const r=async e=>{const{data:t}=await l().get(e,{withCredentials:!0});return t}}}]);