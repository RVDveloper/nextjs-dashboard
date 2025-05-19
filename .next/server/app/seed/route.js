"use strict";(()=>{var e={};e.id=130,e.ids=[130],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},7147:e=>{e.exports=require("fs")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},4218:(e,a,t)=>{t.r(a),t.d(a,{headerHooks:()=>O,originalPathname:()=>I,requestAsyncStorage:()=>N,routeModule:()=>T,serverHooks:()=>E,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>A});var s={};t.r(s),t.d(s,{GET:()=>GET}),t(6698);var i=t(8714),r=t(5609),n=t(2050),u=t(4776);let o=[{id:"410544b2-4001-4271-9855-fec4b6a6442a",name:"User",email:"user@nextmail.com",password:"123456"}],d=[{id:"d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",name:"Evil Rabbit",email:"evil@rabbit.com",image_url:"/customers/evil-rabbit.png"},{id:"3958dc9e-712f-4377-85e9-fec4b6a6442a",name:"Delba de Oliveira",email:"delba@oliveira.com",image_url:"/customers/delba-de-oliveira.png"},{id:"3958dc9e-742f-4377-85e9-fec4b6a6442a",name:"Lee Robinson",email:"lee@robinson.com",image_url:"/customers/lee-robinson.png"},{id:"76d65c26-f784-44a2-ac19-586678f7c2f2",name:"Michael Novotny",email:"michael@novotny.com",image_url:"/customers/michael-novotny.png"},{id:"CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",name:"Amy Burns",email:"amy@burns.com",image_url:"/customers/amy-burns.png"},{id:"13D07535-C59E-4157-A011-F8D2EF4E0CBB",name:"Balazs Orban",email:"balazs@orban.com",image_url:"/customers/balazs-orban.png"}],m=[{customer_id:d[0].id,amount:15795,status:"pending",date:"2022-12-06"},{customer_id:d[1].id,amount:20348,status:"pending",date:"2022-11-14"},{customer_id:d[4].id,amount:3040,status:"paid",date:"2022-10-29"},{customer_id:d[3].id,amount:44800,status:"paid",date:"2023-09-10"},{customer_id:d[5].id,amount:34577,status:"pending",date:"2023-08-05"},{customer_id:d[2].id,amount:54246,status:"pending",date:"2023-07-16"},{customer_id:d[0].id,amount:666,status:"pending",date:"2023-06-27"},{customer_id:d[3].id,amount:32545,status:"paid",date:"2023-06-09"},{customer_id:d[4].id,amount:1250,status:"paid",date:"2023-06-17"},{customer_id:d[5].id,amount:8546,status:"paid",date:"2023-06-07"},{customer_id:d[1].id,amount:500,status:"paid",date:"2023-08-19"},{customer_id:d[5].id,amount:8945,status:"paid",date:"2023-06-03"},{customer_id:d[2].id,amount:1e3,status:"paid",date:"2022-06-05"}],c=[{month:"Jan",revenue:2e3},{month:"Feb",revenue:1800},{month:"Mar",revenue:2200},{month:"Apr",revenue:2500},{month:"May",revenue:2300},{month:"Jun",revenue:3200},{month:"Jul",revenue:3500},{month:"Aug",revenue:3700},{month:"Sep",revenue:2500},{month:"Oct",revenue:2800},{month:"Nov",revenue:3e3},{month:"Dec",revenue:4800}],l=(0,u.Z)(process.env.POSTGRES_URL,{ssl:"require"});async function seedUsers(){await l`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await l`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;let e=await Promise.all(o.map(async e=>{let a=await n.ZP.hash(e.password,10);return l`
        INSERT INTO users (id, name, email, password)
        VALUES (${e.id}, ${e.name}, ${e.email}, ${a})
        ON CONFLICT (id) DO NOTHING;
      `}));return e}async function seedInvoices(){await l`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await l`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;let e=await Promise.all(m.map(e=>l`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${e.customer_id}, ${e.amount}, ${e.status}, ${e.date})
        ON CONFLICT (id) DO NOTHING;
      `));return e}async function seedCustomers(){await l`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await l`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;let e=await Promise.all(d.map(e=>l`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${e.id}, ${e.name}, ${e.email}, ${e.image_url})
        ON CONFLICT (id) DO NOTHING;
      `));return e}async function seedRevenue(){await l`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;let e=await Promise.all(c.map(e=>l`
        INSERT INTO revenue (month, revenue)
        VALUES (${e.month}, ${e.revenue})
        ON CONFLICT (month) DO NOTHING;
      `));return e}async function GET(){try{return await l.begin(e=>[seedUsers(),seedCustomers(),seedInvoices(),seedRevenue()]),Response.json({message:"Database seeded successfully"})}catch(e){return Response.json({error:e},{status:500})}}let T=new i.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/seed/route",pathname:"/seed",filename:"route",bundlePath:"app/seed/route"},resolvedPagePath:"/Users/pro/Downloads/nexgit/nextjs-dashboard/app/seed/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:N,staticGenerationAsyncStorage:p,serverHooks:E,headerHooks:O,staticGenerationBailout:A}=T,I="/seed/route"}};var a=require("../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[933,738],()=>__webpack_exec__(4218));module.exports=t})();