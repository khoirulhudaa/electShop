import{u,r as c,j as r,L as h}from"./index-c43d25d1.js";import{c as p,a,L as x,I as n,B as g}from"./index-75ae6465.js";import{E as b}from"./index-dd454b2c.js";import{u as f}from"./formik.esm-daee778b.js";import{A as v}from"./api-273c7fe6.js";const j=({onError:s})=>{const t=new AbortController().signal,i=u();return f({initialValues:{consumer_name:"",email_consumer:"",password:"",telephone_consumer:"",gender:""},validationSchema:p({consumer_name:a().max(15,"Must be 15 characters or less").required("This field is required."),email_consumer:a().email("Invalid email address").required("This field is required."),password:a().min(6,"Must be at least 6 characters").required("This field is required."),telephone_consumer:a().max(13,"Maximum only 13 characters").required("This field is required."),gender:a().required("This field is required.").oneOf(["Male","Female"],"Invalid gender")}),onSubmit:async(l,{resetForm:m})=>{try{if(t.aborted)return;console.log(l);const o=await v.createAccountConsumer(l);o.data.status===200?(m(),i("/signin")):s(o.data.message)}catch(o){s(o.data.message)}}})},y=()=>{const[s,d]=c.useState(""),t=l=>{d(l)},i=[{label:"Select Your Gender",value:""},{label:"Male",value:"Male"},{label:"Female",value:"Female"}],e=j({onError:t});return r.jsxs("div",{className:"w-screen bg-blue-100 h-screen overflow-hidden flex items-center justify-center",children:[r.jsx("div",{className:"w-[50%] h-screen hidden md:flex items-center justify-center",children:r.jsx("img",{src:x,alt:"logo",className:"w-[70%]"})}),r.jsxs("div",{className:"w-full md:w-[50%] h-full rounded-lg border-box p-10 flex flex-col overflow-y-auto bg-white",children:[s!==""?r.jsx(r.Fragment,{children:r.jsx(b,{error:s})}):null,r.jsx("h2",{className:"font-bold text-[26px] lg:text-[32px] mt-[0px] mb-4",children:"Signup"}),r.jsxs("form",{onSubmit:e.handleSubmit,className:"w-[100%] rounded-lg h-max",children:[r.jsxs("div",{className:"w-full pr-0 md:pr-4",children:[r.jsx("div",{className:"mb-5",children:r.jsx(n,{value:e.values.consumer_name,name:"consumer_name",label:"Username",type:"text",id:"consumer_name",onError:e.errors.consumer_name,onTouched:!!e.touched.consumer_name,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:"Enter Your Name"})}),r.jsx("div",{className:"mb-5",children:r.jsx(n,{value:e.values.email_consumer,name:"email_consumer",label:"Email",type:"email",id:"emailConsumer",onError:e.errors.email_consumer,onTouched:!!e.touched.email_consumer,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:"Enter Your Email"})}),r.jsx("div",{className:"mb-5",children:r.jsx(n,{value:e.values.telephone_consumer,name:"telephone_consumer",label:"Telephone",type:"text",id:"Telephone",onError:e.errors.telephone_consumer,onTouched:!!e.touched.telephone_consumer,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:"Enter Your Number"})})]}),r.jsxs("div",{className:"w-full",children:[r.jsx("div",{className:"mb-5",children:r.jsx(n,{value:e.values.password,name:"password",label:"Password name",id:"password",type:"password",onError:e.errors.password,onTouched:!!e.touched.password,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:"Enter Your Password"})}),r.jsx("div",{className:"mb-5",children:r.jsx(n,{value:e.values.gender,name:"gender",typeInput:"select-input",options:i,label:"Gender",id:"gender",onError:e.errors.gender,onTouched:!!e.touched.gender,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:"Enter Your Password"})}),r.jsxs("div",{className:"w-max flex flex-col mt-6",children:[r.jsx(g,{status:"primary",typeButton:"submit",text:"Signup now"}),r.jsxs("div",{className:"flex mt-3 items-center font-normal text-[14px]",children:["Already have an account ?",r.jsx(h,{to:"/signin",children:r.jsx("p",{className:"ml-2 text-blue-500 cursor-pinter hover:brightness-[80%] ",children:"Here"})})]})]})]})]})]})]})};export{y as default};