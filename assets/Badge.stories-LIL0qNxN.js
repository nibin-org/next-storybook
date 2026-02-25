import{j as e}from"./jsx-runtime-BhDPapyO.js";import"./iframe-DkB-wGBA.js";import"./preload-helper-PPVm8Dsz.js";function r({variant:a="gray",appearance:c="primary",size:m="md",children:u,className:g="",style:y,...f}){const d=o=>`var(--badge-${c}-${a}-${o})`,n=o=>`var(--badge-${o}-${m})`,v={backgroundColor:d("fill"),borderColor:d("stroke"),color:d("text"),fontSize:n("font-size"),lineHeight:n("line-height"),borderRadius:n("radius"),padding:`${n("padding-y")} ${n("padding-x")}`},x=["inline-flex items-center font-medium border",g].join(" ");return e.jsx("span",{className:x,style:{...v,...y},...f,children:u})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'gray' | 'warning' | 'success' | 'danger' | 'purple'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'purple'"}]},description:"",defaultValue:{value:"'gray'",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const p=["info","gray","warning","success","danger","purple"],w={title:"Components/Badge",component:r,parameters:{layout:"centered",docs:{description:{component:"Badge component styled with Figma badge tokens."}}},tags:["autodocs"],argTypes:{appearance:{control:"select",options:["primary","secondary"],description:"Primary (filled) or secondary (outlined) badge",table:{defaultValue:{summary:"primary"}}},variant:{control:"select",options:[...p],description:"Color variant",table:{defaultValue:{summary:"gray"}}},size:{control:"select",options:["sm","md"],description:"Badge size",table:{defaultValue:{summary:"md"}}},children:{control:"text",description:"Badge content"},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{children:"Label"}},s={args:{appearance:"primary",variant:"info",children:"Label"}},i={args:{appearance:"secondary",variant:"info",children:"Label"}},l={render:()=>e.jsxs("div",{style:{display:"grid",gap:"12px"},children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:p.map(a=>e.jsx(r,{appearance:"primary",variant:a,children:"Label"},`p-${a}`))}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:p.map(a=>e.jsx(r,{appearance:"secondary",variant:a,children:"Label"},`s-${a}`))})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'primary',
    variant: 'info',
    children: 'Label'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'secondary',
    variant: 'info',
    children: 'Label'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '12px'
  }}>
            <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
                {variants.map(variant => <Badge key={\`p-\${variant}\`} appearance="primary" variant={variant}>
                        Label
                    </Badge>)}
            </div>
            <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
                {variants.map(variant => <Badge key={\`s-\${variant}\`} appearance="secondary" variant={variant}>
                        Label
                    </Badge>)}
            </div>
        </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  }}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
        </div>
}`,...t.parameters?.docs?.source}}};const j=["Primary","Secondary","AllVariants","Sizes"];export{l as AllVariants,s as Primary,i as Secondary,t as Sizes,j as __namedExportsOrder,w as default};
