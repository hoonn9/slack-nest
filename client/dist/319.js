(self.webpackChunklecture=self.webpackChunklecture||[]).push([[319],{8678:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var n=t(7294);const r=e=>{const[a,t]=(0,n.useState)(e);return[a,(0,n.useCallback)((e=>{t(e.target.value)}),[]),t]}},6319:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var n=t(7294),r=t(1670),o=t(3727),l=t(8678),i=t(9669),s=t.n(i);const c=()=>{const[e,a]=(0,l.Z)(""),[t,i]=(0,l.Z)(""),[c,,d]=(0,l.Z)(""),[p,,u]=(0,l.Z)(""),[m,g]=(0,n.useState)(),[h,x]=(0,n.useState)(""),[b,f]=(0,n.useState)(!1),v=(0,n.useCallback)((e=>{d(e.target.value),g(e.target.value===p)}),[p]),w=(0,n.useCallback)((e=>{u(e.target.value)}),[]),k=(0,n.useCallback)((async a=>{if(a.preventDefault(),console.log(e,c,p),!m&&t){x(""),f(!1);try{const a=await s().post("/api/users",{email:e,nickname:t,password:c});console.log(a),f(!0)}catch(e){console.log(e.response),e.response.data.data?x(e.response.data.data):x(e.response.data)}}}),[e,c,p,m,t]);return n.createElement("div",{id:"container"},n.createElement(r.h4,null,"Sleact"),n.createElement(r.l0,{onSubmit:k},n.createElement(r.__,{id:"email-label"},n.createElement("span",null,"이메일 주소"),n.createElement("div",null,n.createElement(r.II,{type:"email",id:"email",name:"email",value:e,onChange:a}))),n.createElement(r.__,{id:"nickname-label"},n.createElement("span",null,"닉네임"),n.createElement("div",null,n.createElement(r.II,{type:"text",id:"nickname",name:"nickname",value:t,onChange:i}))),n.createElement(r.__,{id:"password-label"},n.createElement("span",null,"비밀번호"),n.createElement("div",null,n.createElement(r.II,{type:"password",id:"password",name:"password",value:c,onChange:v}))),n.createElement(r.__,{id:"password-check-label"},n.createElement("span",null,"비밀번호 확인"),n.createElement("div",null,n.createElement(r.II,{type:"password",id:"password-check",name:"password-check",value:p,onChange:w})),m&&n.createElement(r.jj,null,"비밀번호가 일치하지 않습니다."),!t&&n.createElement(r.jj,null,"닉네임을 입력해주세요."),h&&n.createElement(r.jj,null,h),b&&n.createElement(r.fB,null,"회원가입되었습니다! 로그인해주세요.")),n.createElement(r.zx,{type:"submit"},"회원가입")),n.createElement(r.Ji,null,"이미 회원이신가요? ",n.createElement(o.rU,{to:"/login"},"로그인 하러가기")))}},1670:(e,a,t)=>{"use strict";t.d(a,{h4:()=>r,l0:()=>o,__:()=>l,II:()=>i,zx:()=>s,jj:()=>c,fB:()=>d,Ji:()=>p});var n=t(5558);const r=n.Z.header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`,o=n.Z.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`,l=n.Z.label`
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
`,i=n.Z.input`
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
`,s=n.Z.button`
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
`,c=n.Z.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`,d=n.Z.div`
  color: #2eb67d;
  font-weight: bold;
`,p=n.Z.p`
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
`}}]);