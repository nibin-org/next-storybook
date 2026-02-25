import{j as e}from"./jsx-runtime-BhDPapyO.js";import"./iframe-DkB-wGBA.js";import"./preload-helper-PPVm8Dsz.js";const w={info:{fill:"bg-alert-info-fill",icon:"icon-alert-info-icon"},success:{fill:"bg-alert-success-fill",icon:"icon-alert-success-icon"},warning:{fill:"bg-alert-warning-fill",icon:"icon-alert-warning-icon"},danger:{fill:"bg-alert-danger-fill",icon:"icon-alert-danger-icon"}},y={sm:{radius:"var(--alert-radius-sm)",paddingX:"var(--alert-padding-x-sm)",paddingY:"var(--alert-padding-y-sm)",fontSize:"var(--alert-font-size-sm)",lineHeight:"var(--alert-line-height-sm)",iconSize:"w-4 h-4"},md:{radius:"var(--alert-radius-md)",paddingX:"var(--alert-padding-x-md)",paddingY:"var(--alert-padding-y-md)",fontSize:"var(--alert-font-size-md)",lineHeight:"var(--alert-line-height-md)",iconSize:"w-5 h-5"},lg:{radius:"var(--alert-radius-lg)",paddingX:"var(--alert-padding-x-lg)",paddingY:"var(--alert-padding-y-lg)",fontSize:"var(--alert-font-size-lg)",lineHeight:"var(--alert-line-height-lg)",iconSize:"w-6 h-6"}},j=({className:s})=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,"aria-hidden":"true",children:[e.jsx("path",{d:"M9.99999 13.3334V10M9.99999 6.66669H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"6.66669",r:"0.6",fill:"currentColor"})]}),W=({className:s})=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,"aria-hidden":"true",children:e.jsx("path",{d:"M6.24999 10L8.74999 12.5L13.75 7.50002M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),C=({className:s})=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,"aria-hidden":"true",children:[e.jsx("path",{d:"M9.99999 6.66669V10M9.99999 13.3334H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"13.3334",r:"0.6",fill:"currentColor"})]}),A=({className:s})=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,"aria-hidden":"true",children:e.jsx("path",{d:"M12.5 7.50002L7.49999 12.5M7.49999 7.50002L12.5 12.5M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),z=({className:s})=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,"aria-hidden":"true",children:e.jsx("path",{d:"M14.1667 5.83331L5.83333 14.1666M5.83333 5.83331L14.1667 14.1666",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})});function S({variant:s,className:t}){switch(s){case"success":return e.jsx(W,{className:t});case"warning":return e.jsx(C,{className:t});case"danger":return e.jsx(A,{className:t});default:return e.jsx(j,{className:t})}}function i({variant:s="info",size:t="md",children:m,showIcon:g=!0,showClose:u=!1,onClose:h,icon:v,className:f="",...p}){const c=w[s],a=y[t],x={borderRadius:a.radius,padding:`${a.paddingY} ${a.paddingX}`,fontSize:a.fontSize,lineHeight:a.lineHeight};return e.jsxs("div",{className:`inline-flex items-center gap-2 text-default ${c.fill} ${f}`,style:x,role:"alert",...p,children:[g&&e.jsx("span",{className:`inline-flex shrink-0 ${c.icon}`,children:v||e.jsx(S,{variant:s,className:a.iconSize})}),e.jsx("span",{className:"min-w-0",children:m}),u&&e.jsx("button",{type:"button",onClick:h,"aria-label":"Close alert",className:"ml-1 inline-flex shrink-0 text-default-light hover:text-default",children:e.jsx(z,{className:a.iconSize})})]})}i.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const L={title:"Components/Alert",component:i,parameters:{layout:"centered",docs:{description:{component:"Alert component styled with Figma design tokens via TailwindCSS."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"],description:"The visual style variant of the alert",table:{defaultValue:{summary:"info"}}},size:{control:"select",options:["sm","md","lg"],description:"The size of the alert",table:{defaultValue:{summary:"md"}}},showIcon:{control:"boolean",description:"Show the leading status icon",table:{defaultValue:{summary:"true"}}},showClose:{control:"boolean",description:"Show the close button",table:{defaultValue:{summary:"false"}}},children:{control:"text",description:"The alert message"},className:{table:{disable:!0}},onClose:{table:{disable:!0}},icon:{table:{disable:!0}},style:{table:{disable:!0}}},args:{children:"This is an alert message",showIcon:!0,showClose:!0}},r={args:{variant:"info"}},l={args:{variant:"success"}},n={args:{variant:"warning"}},d={args:{variant:"danger"}},o={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",gap:"12px",alignItems:"start",width:"100%",maxWidth:"960px"},children:[e.jsx("div",{}),e.jsx("div",{style:{fontWeight:600,textAlign:"center"},children:"sm"}),e.jsx("div",{style:{fontWeight:600,textAlign:"center"},children:"md"}),e.jsx("div",{style:{fontWeight:600,textAlign:"center"},children:"lg"}),e.jsx("div",{style:{fontWeight:600},children:"Info"}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"info",size:"sm",children:"Small alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"info",children:"This is an info alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"info",size:"lg",children:"Large alert message"})}),e.jsx("div",{style:{fontWeight:600},children:"Success"}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"success",size:"sm",children:"Small alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"success",children:"This is a success alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"success",size:"lg",children:"Large alert message"})}),e.jsx("div",{style:{fontWeight:600},children:"Warning"}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"warning",size:"sm",children:"Small alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"warning",children:"This is a warning alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"warning",size:"lg",children:"Large alert message"})}),e.jsx("div",{style:{fontWeight:600},children:"Danger"}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"danger",size:"sm",children:"Small alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"danger",children:"This is a danger alert message"})}),e.jsx("div",{style:{minWidth:0},children:e.jsx(i,{className:"w-full",variant:"danger",size:"lg",children:"Large alert message"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
    gap: '12px',
    alignItems: 'start',
    width: '100%',
    maxWidth: '960px'
  }}>
            <div />
            <div style={{
      fontWeight: 600,
      textAlign: 'center'
    }}>sm</div>
            <div style={{
      fontWeight: 600,
      textAlign: 'center'
    }}>md</div>
            <div style={{
      fontWeight: 600,
      textAlign: 'center'
    }}>lg</div>

            <div style={{
      fontWeight: 600
    }}>Info</div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="info" size="sm">Small alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="info">This is an info alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="info" size="lg">Large alert message</Alert></div>

            <div style={{
      fontWeight: 600
    }}>Success</div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="success" size="sm">Small alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="success">This is a success alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="success" size="lg">Large alert message</Alert></div>

            <div style={{
      fontWeight: 600
    }}>Warning</div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="warning" size="sm">Small alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="warning">This is a warning alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="warning" size="lg">Large alert message</Alert></div>

            <div style={{
      fontWeight: 600
    }}>Danger</div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="danger" size="sm">Small alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="danger">This is a danger alert message</Alert></div>
            <div style={{
      minWidth: 0
    }}><Alert className="w-full" variant="danger" size="lg">Large alert message</Alert></div>
        </div>
}`,...o.parameters?.docs?.source}}};const T=["Info","Success","Warning","Danger","AllVariants"];export{o as AllVariants,d as Danger,r as Info,l as Success,n as Warning,T as __namedExportsOrder,L as default};
