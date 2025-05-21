import{j as C}from"./jsx-runtime-D_zvdyIk.js";const T="_button_4r8c5_2",R="_primary_4r8c5_17",q="_secondary_4r8c5_21",s={button:T,primary:R,secondary:q},f=({label:_,primary:h=!0,onClick:B,ariaLabel:S})=>{const k=h?s.primary:s.secondary,x=`${s.button} ${k}`;return C.jsx("button",{className:x,onClick:B,"aria-label":S,children:_})};f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Button",component:f,tags:["autodocs"],argTypes:{primary:{name:"primary / secondary",description:"Whether the button is styled as primary or secondary",defaultValue:!0,table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:{type:"boolean"}},onClick:{description:"Optional click handler",action:"clicked",table:{disable:!1}},label:{description:"Text shown inside the button",table:{type:{summary:"string"}}},ariaLabel:{description:"A value for the aria label to be used by screen readers ",table:{type:{summary:"string"}}}}},e={args:{label:"Button"}},r={args:{label:"Primary Button",primary:!0}},a={args:{label:"Secondary Button",primary:!1}},t={args:{label:"Click Me"}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    primary: true
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    primary: false
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var y,b,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Click Me'
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const P=["Default","Primary","Secondary","WithAction"];export{e as Default,r as Primary,a as Secondary,t as WithAction,P as __namedExportsOrder,N as default};
