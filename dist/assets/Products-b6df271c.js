import{p as g}from"./products-0bac471a.js";import{F as _,H as p,o as a,c as l,a as e,d as i,J as r,K as c,b as n,w as u,f as h,G as o,L as m}from"./index-79ad2a0d.js";const v={class:"bg-white h-full"},f={class:"w-full p-2"},w={class:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},y=m('<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"><div class="h-full w-full object-cover object-center lg:h-full lg:w-full"></div></div><div class="mt-3 flex justify-between p-4"><div class="space-y-4"><div class="p-2 bg-slate-200 rounded w-16"></div><div class="p-2 bg-slate-200 rounded w-16"></div></div><div class="h-4 bg-slate-200 rounded w-20"></div></div>',2),b=[y],x={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"},k=["src","alt"],j={class:"mt-4 flex justify-between p-4"},B={class:"text-sm text-gray-700"},L=e("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),N={class:"mt-1 text-sm text-gray-500"},V={class:"text-sm font-medium text-gray-900"},U={__name:"Products",setup(D){const t=g();return _(()=>{t.isLoader=!0,t.getProducts()}),(C,F)=>{const d=p("router-link");return a(),l("div",v,[e("div",f,[e("div",w,[i(t).isLoader?(a(),l(r,{key:0},c(12,s=>e("div",{key:s,class:"group relative shadow-lg animate-pulse"},b)),64)):(a(!0),l(r,{key:1},c(i(t).products,s=>(a(),l("div",{key:s.id,class:"group relative shadow-lg"},[e("div",x,[n(d,{to:{name:"productDetails",params:{id:s.id}}},{default:u(()=>[e("img",{src:s.imageUrl,alt:s.imageUrl,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,k)]),_:2},1032,["to"])]),e("div",j,[e("div",null,[e("h3",B,[n(d,{to:{name:"productDetails",params:{id:s.id}}},{default:u(()=>[L,h(" "+o(s.name),1)]),_:2},1032,["to"])]),e("p",N,o(s.brand),1)]),e("p",V,o(s.price),1)])]))),128))])])])}}};export{U as default};
