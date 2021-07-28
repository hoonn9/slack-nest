(self.webpackChunklecture=self.webpackChunklecture||[]).push([[817],{8678:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(7294);const o=e=>{const[t,a]=(0,r.useState)(e);return[t,(0,r.useCallback)((e=>{a(e.target.value)}),[]),a]}},6817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(8678),o=a(1670),n=a(3564),i=a(9669),l=a.n(i),s=a(7294),d=a(5977),p=a(3727),c=a(5723);const u=()=>{const{data:e,error:t,revalidate:a,mutate:i}=(0,c.ZP)("/api/users",n.Z);console.log(e,t);const[u,g]=(0,s.useState)(!1),[m,x]=(0,r.Z)(""),[h,b]=(0,r.Z)(""),f=(0,s.useCallback)((async e=>{e.preventDefault(),g(!1);try{await l().post("/api/users/login",{email:m,password:h},{withCredentials:!0}),a()}catch(e){var t;console.log(e.response),g(401===(null===(t=e.response)||void 0===t?void 0:t.status))}}),[m,h]);return void 0===e?s.createElement("div",null,"로딩중..."):e?s.createElement(d.l_,{to:"/workspace/slack/channel/일반"}):s.createElement("div",{id:"container"},s.createElement(o.h4,null,"Slack"),s.createElement(o.l0,{onSubmit:f},s.createElement(o.__,{id:"email-label"},s.createElement("span",null,"이메일 주소"),s.createElement("div",null,s.createElement(o.II,{type:"email",id:"email",name:"email",value:m,onChange:x}))),s.createElement(o.__,{id:"password-label"},s.createElement("span",null,"비밀번호"),s.createElement("div",null,s.createElement(o.II,{type:"password",id:"password",name:"password",value:h,onChange:b})),u&&s.createElement(o.jj,null,"이메일과 비밀번호 조합이 일치하지 않습니다.")),s.createElement(o.zx,{type:"submit"},"로그인")),s.createElement(o.Ji,null,"아직 회원이 아니신가요? ",s.createElement(p.rU,{to:"/signup"},"회원가입 하러가기")))}},1670:(e,t,a)=>{"use strict";a.d(t,{h4:()=>o,l0:()=>n,__:()=>i,II:()=>l,zx:()=>s,jj:()=>d,fB:()=>p,Ji:()=>c});var r=a(5558);const o=r.Z.header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`,n=r.Z.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`,i=r.Z.label`
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
`,l=r.Z.input`
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
`,s=r.Z.button`
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
`,d=r.Z.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`,p=r.Z.div`
  color: #2eb67d;
  font-weight: bold;
`,c=r.Z.p`
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
`},3564:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(9669),o=a.n(r);const n=async e=>{const{data:t}=await o().get(e,{withCredentials:!0});return t}}}]);