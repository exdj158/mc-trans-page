(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{2597:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(5557)}])},2796:function(e,t,l){"use strict";var s=l(7294),r=l(2085);let a=(e,t,l)=>{let[a,n]=(0,s.useState)();if(!r.jU)return[t,r.ZT,r.ZT];if(!e)throw Error("useLocalStorage key may not be falsy");let i=l?l.raw?e=>e:l.deserializer:JSON.parse,o=(0,s.useRef)(e=>{try{let s=l?l.raw?String:l.serializer:JSON.stringify,r=localStorage.getItem(e);if(null!==r)return i(r);return t&&localStorage.setItem(e,s(t)),t}catch(a){return t}});(0,s.useLayoutEffect)(()=>n(o.current(e)),[e]);let c=(0,s.useCallback)(t=>{try{let s;let r="function"==typeof t?t(a):t;if(void 0===r)return;s=l?l.raw?"string"==typeof r?r:JSON.stringify(r):l.serializer?l.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,s),n(i(s))}catch(o){}},[e,n]),d=(0,s.useCallback)(()=>{try{localStorage.removeItem(e),n(void 0)}catch(t){}},[e,n]);return[a,c,d]};t.Z=a},5557:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return b}});var s=l(5893),r=l(7294),a=l(4184),n=l.n(a),i=l(1163),o=l(6726),c=l(1664),d=l.n(c);let u=r.forwardRef(function({title:e,titleId:t,...l},s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},l),e?r.createElement("title",{id:t},e):null,r.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"}))});var h=l(8344),x=l(423),f=l(1384),m=l(2796),g=l(7441),p=l(9334);let w=[{id:"website",title:"常用网站"},{id:"config",title:"配置"}];function b(){let[e,t]=(0,r.useState)(""),[l,a]=(0,r.useState)(!1),[c,b]=(0,r.useState)(!0),[y,N]=(0,m.Z)("websites",[]),[j,v]=(0,m.Z)("replaceWords",!1),[k,z]=(0,r.useState)(""),{asPath:S}=(0,i.useRouter)();return(0,r.useEffect)(()=>{a(!0),(0,h.U2)("https://exdj158.github.io/mc-trans-page/websites.json").then(e=>{N(e.data),a(!1)}).catch(()=>{a(!1)})},[]),(0,r.useEffect)(()=>{(0,x.u)().then(e=>{z(e||"")});let e=location.hash.split("#")[1]||"website";t(e)},[]),(0,r.useEffect)(()=>{let e=location.hash.split("#")[1]||"website";console.log(e),t(e)},[S]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{title:"个人中心"}),(0,s.jsxs)("div",{className:"container w-full flex flex-wrap mx-auto px-2 lg:pr-16 py-16",children:[(0,s.jsx)("div",{className:"w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal",children:(0,s.jsx)("div",{className:"sticky top-0",children:w.map(t=>{let{id:l,title:r}=t;return(0,s.jsx)("div",{className:"w-full inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none z-20",children:(0,s.jsx)("ul",{className:"list-reset py-2 md:py-0",children:(0,s.jsx)("li",{className:n()("py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent transition-all",e===l&&"font-bold border-blue-500"),children:(0,s.jsx)(d(),{href:"#".concat(l),className:"block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500",children:(0,s.jsx)("span",{className:"pb-1 md:pb-0 text-sm",children:r})})})})},l)})})}),(0,s.jsxs)("section",{className:"w-full lg:w-4/5",children:[(0,s.jsx)("h2",{id:"website",className:"font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl",children:"常用网站"}),(0,s.jsx)(f.Z,{spinning:l,children:(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4 my-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",children:null==y?void 0:y.map(e=>(0,s.jsxs)(o.zx,{color:"gray",className:"text-xs p-2 flex flex-row cursor-pointer shadow-lg hover:shadow-xl items-start text-left",onClick(){window.open(e.url)},children:[e.icon?(0,s.jsx)(o.qE,{className:"flex-shrink-0 mr-2",size:"xs",src:e.icon}):(0,s.jsx)(u,{className:"flex-shrink-0 mr-2 w-6"}),(0,s.jsxs)("div",{className:"overflow-hidden",children:[(0,s.jsx)("span",{className:"text-sm font-bold",children:e.title}),(0,s.jsx)(o.eW,{className:"whitespace-nowrap text-ellipsis overflow-hidden p-1 text-left",children:e.description||""})]})]},e.title))})}),(0,s.jsx)("hr",{className:"bg-gray-300 my-12"}),(0,s.jsx)("h2",{id:"config",className:"font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl",children:"配置"}),(0,s.jsx)("div",{className:"mt-8 lg:mt-0",children:(0,s.jsx)(o.rs,{checked:j,onChange(e){v(e.target.checked)},label:"是否开启机翻辅助模式(此功能不稳定，请先看工具页底部说明)"})}),(0,s.jsx)("hr",{className:"bg-gray-300 my-12"}),(0,s.jsxs)("div",{className:"mt-8 leading-normal rounded bg-white flex",children:[(0,s.jsx)(o.II,{variant:"static",label:"Github Token",className:"flex-grow",placeholder:"用于调用github api，只保存在浏览器本地",value:k,onChange(e){b(!1),z(e.target.value)}}),(0,s.jsx)(o.zx,{className:"flex-shrink-0 ml-4",disabled:c,async onClick(){await (0,x.e)(k),o.yw.success("保存成功!")},children:"保存"})]})]}),(0,s.jsx)(g.Z,{})]})]})}},423:function(e,t,l){"use strict";l.d(t,{e:function(){return n},u:function(){return a}});var s=l(9483),r=l.n(s);let a=()=>r().getItem("token"),n=e=>r().setItem("token",e)},1163:function(e,t,l){e.exports=l(880)}},function(e){e.O(0,[874,161,587,774,888,179],function(){return e(e.s=2597)}),_N_E=e.O()}]);