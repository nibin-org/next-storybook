import{j as e}from"./jsx-runtime-8wje-MXu.js";import{r as u}from"./iframe-BXPpobAM.js";import"./preload-helper-PPVm8Dsz.js";function s({label:k="Label",size:t="sm",checked:p,defaultChecked:h,disabled:l=!1,onChange:v,className:y="",id:z,...j}){const T=u.useId(),g=z||T,f=typeof p=="boolean",[w,S]=u.useState(!!h),m=f?p:w,a=u.useMemo(()=>{const r=`var(--toggle-${t}-height)`,b=`var(--toggle-${t}-width)`,C=`var(--toggle-${t}-font-size)`,I=`var(--toggle-${t}-line-height)`,V=`var(--toggle-${t}-gap)`,x=`calc(${r} - 6px)`,N=`calc(${b} - ${x} - 6px)`;return{height:r,width:b,fontSize:C,lineHeight:I,gap:V,knobSize:x,knobTranslate:N}},[t]),O=l?m?"var(--toggle-active-disabled)":"var(--toggle-disabled)":m?"var(--toggle-active)":"var(--toggle-fill)",$=l?"var(--toggle-text-disabled)":"var(--toggle-text)";return e.jsxs("label",{htmlFor:g,className:`inline-flex items-center ${y}`,style:{gap:a.gap,color:$,fontSize:a.fontSize,lineHeight:a.lineHeight,cursor:l?"not-allowed":"pointer"},children:[e.jsx("input",{id:g,type:"checkbox",checked:p,defaultChecked:h,disabled:l,onChange:r=>{f||S(r.target.checked),v?.(r)},className:"sr-only",...j}),e.jsx("style",{children:`
                #${g} { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
            `}),e.jsx("span",{"aria-hidden":"true",style:{position:"relative",width:a.width,height:a.height,borderRadius:"9999px",backgroundColor:O,transition:"background-color 150ms ease",display:"inline-block",flexShrink:0},children:e.jsx("span",{style:{position:"absolute",top:"3px",left:"3px",width:a.knobSize,height:a.knobSize,borderRadius:"9999px",backgroundColor:"#ffffff",boxShadow:"0 1px 2px rgba(16, 24, 40, 0.15)",transform:m?`translateX(${a.knobTranslate})`:"translateX(0)",transition:"transform 150ms ease"}})}),e.jsx("span",{children:k})]})}s.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const W={title:"Components/Toggle",component:s,parameters:{layout:"centered",docs:{description:{component:"Toggle component styled with design tokens."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"],description:"Toggle size",table:{defaultValue:{summary:"sm"}}},checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Disable the toggle"},label:{control:"text",description:"Toggle label"},className:{table:{disable:!0}},style:{table:{disable:!0}},onChange:{table:{disable:!0}}},args:{label:"Label"}},o={args:{checked:!1}},i={args:{checked:!0}},d={args:{checked:!1,disabled:!0}},n={args:{checked:!0,disabled:!0}},c={render:()=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(s,{size:"sm",checked:!1}),e.jsx(s,{size:"sm",checked:!1,disabled:!0}),e.jsx(s,{size:"sm",checked:!0}),e.jsx(s,{size:"sm",checked:!0,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(s,{size:"md",checked:!1}),e.jsx(s,{size:"md",checked:!1,disabled:!0}),e.jsx(s,{size:"md",checked:!0}),e.jsx(s,{size:"md",checked:!0,disabled:!0})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>
            <div style={{
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
                <Toggle size="sm" checked={false} />
                <Toggle size="sm" checked={false} disabled />
                <Toggle size="sm" checked />
                <Toggle size="sm" checked disabled />
            </div>
            <div style={{
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
                <Toggle size="md" checked={false} />
                <Toggle size="md" checked={false} disabled />
                <Toggle size="md" checked />
                <Toggle size="md" checked disabled />
            </div>
        </div>
}`,...c.parameters?.docs?.source}}};const _=["Off","On","DisabledOff","DisabledOn","AllVariants"];export{c as AllVariants,d as DisabledOff,n as DisabledOn,o as Off,i as On,_ as __namedExportsOrder,W as default};
