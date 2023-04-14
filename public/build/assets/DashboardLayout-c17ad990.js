import{u as h,a as e,j as l,L as r}from"./app-1954d829.js";import{G as u,U as d,C as p}from"./CommonLayout-8bf6eb1f.js";import{r as s}from"./index-54598967.js";import{a as i,c as n}from"./index.esm-40633e48.js";function o(a){return u({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"}}]})(a)}function x(){const{component:a}=h();return e("nav",{className:"",children:l("ul",{className:"flex flex-col items-baseline bg-base-300 rounded-lg rounded-r-none min-h-max py-5 w-full",children:[e("li",{className:"w-full pl-2",children:l(r,{className:`${a==="Profile/Index"?"bg-slate-900 border-l-4 border-primary":""} flex px-4 py-3 hover:bg-slate-800 transition-all rounded-md rounded-r-none`,href:s("profile.view"),children:[e(d,{className:"w-6 h-6 max-sm:block hidden text-white"}),l("div",{className:"hidden sm:flex gap-2",children:[e(d,{className:"w-6 h-6 text-white"}),"Profile"]})]})}),e("li",{className:"w-full pl-2",children:l(r,{className:`${a==="Product/Favorites"?"bg-slate-900 border-l-4 border-primary":""} flex px-4 py-3 hover:bg-slate-800 transition-all rounded-md rounded-r-none`,href:s("favorite.all"),children:[e(i,{className:"w-6 h-6 max-sm:block hidden text-white"}),l("div",{className:"hidden sm:flex gap-2",children:[e(i,{className:"w-6 h-6 text-white"}),"Favorites"]})]})}),e("li",{className:"w-full pl-2",children:l(r,{className:`${a==="Product/Cart"?"bg-slate-900 border-l-4 border-primary":""} flex px-4 py-3 hover:bg-slate-800 transition-all rounded-md rounded-r-none`,href:s("cart.all"),children:[e(n,{className:"w-6 h-6 max-sm:block hidden text-white"}),l("div",{className:"hidden sm:flex gap-2",children:[e(n,{className:"w-6 h-6 text-white"}),"Carts"]})]})}),e("li",{className:"w-full pl-2",children:l(r,{className:`${a==="Product/Orders"?"bg-slate-900 border-l-4 border-primary":""} flex px-4 py-3 hover:bg-slate-800 transition-all rounded-md rounded-r-none`,href:s("orders.view"),children:[e(o,{className:"w-6 h-6 max-sm:block hidden text-white"}),l("div",{className:"hidden sm:flex gap-2",children:[e(o,{className:"w-6 h-6 text-white"}),"Orders"]})," "]})})]})})}function w({categories:a,auth:t,pageTitle:c,children:m}){return e(p,{categories:a,pageTitle:c,auth:t,children:l("div",{className:"grid grid-cols-12 mt-10 mx-10",children:[e("aside",{className:"col-span-2",children:e(x,{})}),e("main",{className:"col-span-10 bg-slate-900 rounded-lg rounded-l-none p-10",children:m})]})})}export{w as D};