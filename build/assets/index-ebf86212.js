import{r as l,u,j as e,L as i,l as N,k as g,m as v}from"./index-c43d25d1.js";import{N as y,b as o,d as _,e as S,a as P}from"./index-61f77665.js";import{T as k,a as C,b as D,c as z}from"./TabPanel-89f64e3e.js";import{B as h}from"./index-75ae6465.js";import{A as p}from"./api-273c7fe6.js";import{A as f}from"./index-5af015b0.js";import{f as j}from"./toRupiah-23cacd66.js";import{h as R,g as B}from"./randomCharacters-1d0a823e.js";import{u as I}from"./useDispatch-e360369d.js";import"./sweetalert2-react-content.es-a297bc4b.js";const L=({shop_id:s})=>{const[r,x]=l.useState([]),n=u();return l.useEffect(()=>{(async()=>{try{if(s){const a=await p.getProductByShopId(s);x(a.data.data)}else n("/")}catch(a){console.log(a),f({title:"Error",text:a,icon:"error",showCancelButton:!1})}finally{}})()},[]),e.jsx(e.Fragment,{children:r&&r.slice(0,3).map((t,a)=>e.jsx(i,{to:`/detail-product/${t&&(t==null?void 0:t.product_id)}`,children:e.jsxs("div",{className:"w-[90%] border-b-2 border-slate-200 mx-auto min-h-[100px] max-h-[150px] items-center hover:brightness-[96%] cursor-pointer bg-white mb-4 px-2 flex overflow-hidden",children:[e.jsx("div",{className:"w-[20%] h-[63px] flex items-center justify-center border border-slate-300 rounded-full relative overflow-hidden",children:e.jsx("img",{src:`https://huda.descode.id/uploads/${t&&(t==null?void 0:t.product_image)}`,alt:"fotoProduct",className:"w-full h-auto"})}),e.jsxs("div",{className:"w-[80%] h-full p-4",children:[e.jsx("h3",{className:"font-bold text-black mb-3",children:t&&(t==null?void 0:t.product_name)}),e.jsx("p",{className:"text-slate-500 text-[14px]",children:j(t&&(t==null?void 0:t.product_price))})]})]})},a))})},J=()=>{const[s,r]=l.useState({}),[x,n]=l.useState(!0),[t,a]=l.useState(!1),{product_id:d}=N(),m=I(),b=g.getState().cartReducer.dataOrders;if(l.useEffect(()=>{(async()=>{try{if(d){const c=await p.getProductById(d);r(c.data.data[0])}}catch(c){f({title:"Error",text:c,icon:"error",showCancelButton:!1})}finally{n(!1)}})()},[d,b,m]),x)return e.jsx("div",{className:"flex items-center w-screen h-screen justify-center",children:e.jsx(v.RotateSpinner,{size:70,color:"#36D7B7",loading:!0})});const w=()=>{a(!t)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:()=>w(),active:t}),e.jsx("section",{className:"w-screen px-[20px] md:px-[60px] py-[20px] h-max flex",children:e.jsx("div",{className:"w-full flex items-center py-[10px]",children:e.jsxs("p",{className:"flex items-center",children:[e.jsx(i,{to:"/",className:"text-blue-500",children:"Home"})," ",e.jsx(o,{size:13,style:{fontSize:"10px",marginLeft:"6px",marginRight:"6px"}}),"Detail-product ",e.jsx(o,{size:13,style:{fontSize:"10px",marginLeft:"6px",marginRight:"6px"}}),"  ",e.jsx("p",{className:"text-slate-500 bg-blue-500 text-white rounded-full px-3 w-max text-center shadow-md font-normal text-[14px] py-1",children:s&&(s==null?void 0:s.product_name)})]})})}),e.jsx("section",{className:"w-screen h-max px-[20px] md:px-[50px] py-[0px]",children:e.jsxs("div",{className:"w-full md:flex md:px-[20px] py-[20px] md:py-[40px] bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300",children:[e.jsx("div",{className:"w-full md:w-[30%] md:border-r border-r-slate-300 min-h-[300px] flex items-center justify-center",children:e.jsx("img",{src:`https://huda.descode.id/uploads/${s&&(s==null?void 0:s.product_image)}`,alt:"fotoProduct",className:"w-[90%] h-auto rounded-lg"})}),e.jsxs("div",{className:"w-full md:w-[60%] h-max px-[20px] md:px-[30px] md:pt-0 pt-4 pb-[20px]",children:[e.jsx("h4",{className:"text-green-500 w-max mb-5 font-bold text-[16px]",children:"In Stock"}),e.jsx("h2",{className:"text-black font-bold text-[22px] mb-5 w-[80%]",children:s&&(s==null?void 0:s.product_name)}),e.jsx("div",{className:"w-max flex items-center",children:e.jsx(i,{to:`/profileShop/${s==null?void 0:s.shop_id}`,children:e.jsx("div",{className:"rounded-full border border-green-500 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[35px] h-[35px] flex items-center justify-center text-green-500 shadow-lg",children:e.jsx(_,{size:14})})})}),e.jsx("div",{className:"w-max p-[10px] text-red-500 mt-5 bg-red-100 rounded-lg",children:e.jsx("h3",{children:j(s==null?void 0:s.product_price)})}),e.jsxs("div",{className:"w-full w-full md:w-[60%] mt-5",children:[e.jsxs("div",{className:"flex mb-4 h-max items-center",children:[e.jsx("p",{className:"w-[40%] text-[14px]",children:"Color product"}),e.jsx("span",{className:"mx-4",children:":"}),e.jsx("p",{className:"text-slate-400 text-[14px] pl-2",children:s&&(s==null?void 0:s.product_color)})]}),e.jsxs("div",{className:"flex mb-4 h-max items-center",children:[e.jsx("p",{className:"w-[40%] text-[14px]",children:"Brand productr"}),e.jsx("span",{className:"mx-4",children:":"}),e.jsx("p",{className:"text-slate-400 text-[14px] pl-2",children:s&&(s==null?void 0:s.product_brand)})]}),e.jsxs("div",{className:"flex mb-4 h-max items-center",children:[e.jsx("p",{className:"w-[40%] text-[14px]",children:"Size product"}),e.jsx("span",{className:"mx-4",children:":"}),e.jsx("p",{className:"text-slate-400 text-[14px] pl-2",children:s&&(s==null?void 0:s.product_size)})]}),e.jsxs("div",{className:"flex mb-4 h-max items-center",children:[e.jsx("p",{className:"w-[40%] text-[14px]",children:"Condition"}),e.jsx("span",{className:"mx-4",children:":"}),e.jsx("p",{className:"text-slate-400 text-[14px] pl-2",children:s&&(s==null?void 0:s.product_type)})]})]})]}),e.jsx("div",{className:"w-full md:w-[30%] border-l border-l-slate-300 md:px-[30px] pb-[20px]",children:e.jsxs("div",{className:"w-full md:border border-slate-300 p-4 h-max rounded-lg overflow-hidden",children:[e.jsx("div",{className:"w-full border-b border-slate-300 h-max w-full mb-4 pb-4 flex items-center",children:e.jsxs("div",{className:"overflow-hidden max-w-[90%] whitespace-nowrap overflow-ellipsis text-slate-500 leading-[1.6em]",children:[e.jsx("h3",{className:"text-black font-bold",children:s&&(s==null?void 0:s.shop_name)||"-"}),e.jsxs("small",{className:"text-slate-500 text-[12px]",children:["ID Toko: ",s&&(s==null?void 0:s.shop_id)]})]})}),e.jsx("div",{className:"flex items-center mb-5",children:e.jsx("p",{children:"Indonesia"})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(S,{size:18,style:{marginRight:"19px"}}),e.jsx("p",{children:"Verified Seller"})]}),e.jsx(h,{handleClick:()=>R(B(5),s,m),status:"primary",text:"Add to cart +",style:"mt-8 mb-4 w-full"}),e.jsx(i,{to:`/profileShop/${s==null?void 0:s.shop_id}`,children:e.jsx(h,{type:"outline",text:"Shop detail",style:"w-full"})})]})})]})}),e.jsx("section",{className:"w-screen h-max px-[0px] md:px-[30px] mt-[20px] md:mt-[30px]",children:e.jsxs("div",{className:"md:flex h-max p-[20px] overflow-hidden",children:[e.jsx("div",{className:"relative w-full md:w-[70%] md:mr-[30px] h-max rounded-lg bg-white border border-slate-300 shadow-lg",children:e.jsxs(k,{children:[e.jsx(C,{className:"flex items-center justify-between",children:e.jsx(D,{className:"w-full h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6 border-b-2 text-blue-500 border-b-blue-500 border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center",children:"Description"})}),e.jsxs("div",{className:"w-full min-h-[400px] h-max overflow-hidden relative",children:[e.jsx(z,{className:"w-full h-max p-[20px] relative top-0 left-0",children:e.jsx("p",{className:"text-slate-500 text-[15px] w-[96%]",children:s&&(s==null?void 0:s.product_description)})}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-max py-3 px-5 bg-slate-100",children:e.jsxs("small",{className:"text-slate-500 text-[14px]",children:[e.jsx("b",{children:"Note :"})," The system has not been able to return purchases!"]})})]})]})}),e.jsxs("div",{className:"w-full md:w-[30%] h-[452px] md:mt-0 mt-6 overflow-y-auto bg-white rounded-lg overflow-hidden shadow-lg border border-slate-300",children:[e.jsx("h3",{className:"ml-5 mt-4 mb-4 font-bold text-[18px]",children:"You may like"}),e.jsx(L,{shop_id:s&&(s==null?void 0:s.shop_id)})]})]})}),e.jsx(P,{})]})};export{J as default};
