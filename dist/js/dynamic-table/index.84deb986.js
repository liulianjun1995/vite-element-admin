import{e as c,f as O,a7 as o,o as a,c as v,a as x,a1 as t,W as e,V as _,M as $,a9 as w,$ as n,a0 as B,u as T,b8 as j,b7 as E}from"../@vue/@vue.080f2ebe.js";import{L as F}from"../index/index.502e64c7.js";import{_ as L}from"../../assets/index.60fadb92.js";import"../@amap/@amap.58aba9ee.js";import"../element-plus/element-plus.b5a7575a.js";import"../lodash-es/lodash-es.dd34ae20.js";import"../@vueuse/@vueuse.f0b33c52.js";import"../@popperjs/@popperjs.1e3895c9.js";import"../@ctrl/@ctrl.08d0615d.js";import"../dayjs/dayjs.51a47833.js";import"../async-validator/async-validator.233a0906.js";import"../memoize-one/memoize-one.7f51d3ef.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.190fc729.js";import"../@floating-ui/@floating-ui.835c30f5.js";import"../vue/vue.1414c1c1.js";import"../lodash-unified/lodash-unified.418bdfd8.js";import"../pinia/pinia.ecf2080f.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.21f17a99.js";import"../geotiff/geotiff.09715990.js";import"../vue-router/vue-router.377509c1.js";import"../path-to-regexp/path-to-regexp.ecb763cd.js";import"../fuse.js/fuse.js.8cd4e865.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../screenfull/screenfull.468e47d2.js";import"../vue-i18n/vue-i18n.98c23e45.js";import"../@intlify/@intlify.391e75eb.js";import"../mitt/mitt.fcf4f812.js";import"../qs/qs.71f2d2b1.js";import"../side-channel/side-channel.147ab9b8.js";import"../get-intrinsic/get-intrinsic.c9f38a1e.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.45258027.js";import"../object-inspect/object-inspect.ddd6d7bd.js";import"../nprogress/nprogress.558663b1.js";/* empty css                                 */import"../clipboard/clipboard.a3dfcb76.js";import"../@element-plus/@element-plus.5ea2a7b5.js";import"../xe-utils/xe-utils.d9e2cfb8.js";import"../vxe-table/vxe-table.1efe9f30.js";import"../vite-plugin-mock/vite-plugin-mock.65169573.js";import"../mockjs/mockjs.57e773d8.js";const U={class:"app-container"},C={class:"filter-container"},P=n(" apple "),M=n(" banana "),W=n(" orange "),q=n("Element Plus Table"),z=n("Vxe Table"),A={name:"FixedThead"},G=Object.assign(A,{setup(m){const u=["apple","banana"],p=c([{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}]),r=c(1),N=c(["apple","banana","orange"]),b=c(u),s=c(u);return O(b,g=>{s.value=N.value.filter(d=>g.indexOf(d)>=0),r.value=r.value+1}),(g,d)=>{const f=o("el-checkbox"),V=o("el-checkbox-group"),h=o("el-divider"),k=o("el-table-column"),l=o("el-table"),y=o("vxe-column"),I=o("vxe-table");return a(),v("div",U,[x("div",C,[t(V,{modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=i=>b.value=i)},{default:e(()=>[t(f,{label:"apple"},{default:e(()=>[P]),_:1}),t(f,{label:"banana"},{default:e(()=>[M]),_:1}),t(f,{label:"orange"},{default:e(()=>[W]),_:1})]),_:1},8,["modelValue"])]),t(h,{"content-position":"left"},{default:e(()=>[q]),_:1}),(a(),_(l,{key:r.value,data:p.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[t(k,{prop:"name",label:"fruitName",width:"180"}),(a(!0),v($,null,w(s.value,i=>(a(),_(k,{key:i,label:i},{default:e(S=>[n(B(S.row[i]),1)]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),t(h,{"content-position":"left"},{default:e(()=>[z]),_:1}),(a(),_(I,{key:r.value,round:"",border:"",data:p.value},{default:e(()=>[t(y,{field:"name",title:"fruitName",width:"180"}),(a(!0),v($,null,w(s.value,i=>(a(),_(y,{key:i,field:i,title:i},null,8,["field","title"]))),128))]),_:1},8,["data"]))])}}}),H={class:"app-container"},J={class:"filter-container"},K=n(" apple "),Q=n(" banana "),R=n(" orange "),X=n("Element Plus Table"),Y=n("Vxe Table"),Z={name:"UnfixedThead"},ee=Object.assign(Z,{setup(m){const u=c([{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}]),p=c(1),r=c(["apple","banana"]);return O(r,()=>{p.value=p.value+1}),(N,b)=>{const s=o("el-checkbox"),g=o("el-checkbox-group"),d=o("el-divider"),f=o("el-table-column"),V=o("el-table"),h=o("vxe-column"),k=o("vxe-table");return a(),v("div",H,[x("div",J,[t(g,{modelValue:r.value,"onUpdate:modelValue":b[0]||(b[0]=l=>r.value=l)},{default:e(()=>[t(s,{label:"apple"},{default:e(()=>[K]),_:1}),t(s,{label:"banana"},{default:e(()=>[Q]),_:1}),t(s,{label:"orange"},{default:e(()=>[R]),_:1})]),_:1},8,["modelValue"])]),t(d,{"content-position":"left"},{default:e(()=>[X]),_:1}),(a(),_(V,{key:p.value,data:u.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[t(f,{prop:"name",label:"fruitName",width:"180"}),(a(!0),v($,null,w(r.value,l=>(a(),_(f,{key:l,label:l},{default:e(y=>[n(B(y.row[l]),1)]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),t(d,{"content-position":"left"},{default:e(()=>[Y]),_:1}),(a(),_(k,{key:p.value,round:"",border:"",data:u.value},{default:e(()=>[t(h,{field:"name",title:"fruitName",width:"180"}),(a(!0),v($,null,w(r.value,l=>(a(),_(h,{key:l,field:l,title:l},null,8,["field","title"]))),128))]),_:1},8,["data"]))])}}});const D=m=>(j("data-v-4884db21"),m=m(),E(),m),te={class:"section-container"},ae=D(()=>x("div",{style:{margin:"0 0 5px 20px"}},"\u56FA\u5B9A\u8868\u5934, \u6309\u7167\u8868\u5934\u987A\u5E8F\u6392\u5E8F",-1)),oe=D(()=>x("div",{style:{margin:"30px 0 5px 20px"}},"\u4E0D\u56FA\u5B9A\u8868\u5934, \u6309\u7167\u70B9\u51FB\u987A\u5E8F\u6392\u5E8F",-1)),ne={name:"DynamicTable"},le=Object.assign(ne,{setup(m){return(u,p)=>(a(),_(T(F),{title:"\u52A8\u6001\u8868\u683C"},{body:e(()=>[x("div",te,[ae,t(T(G)),oe,t(T(ee))])]),_:1}))}});var Ye=L(le,[["__scopeId","data-v-4884db21"]]);export{Ye as default};