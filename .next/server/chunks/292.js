exports.id=292,exports.ids=[292],exports.modules={9770:(e,t,r)=>{Promise.resolve().then(r.bind(r,565))},5687:(e,t,r)=>{Promise.resolve().then(r.bind(r,4372)),Promise.resolve().then(r.t.bind(r,3772,23))},9814:()=>{},1531:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1614,23)),Promise.resolve().then(r.t.bind(r,1075,23)),Promise.resolve().then(r.t.bind(r,5153,23)),Promise.resolve().then(r.t.bind(r,2289,23)),Promise.resolve().then(r.t.bind(r,7842,23)),Promise.resolve().then(r.t.bind(r,8850,23))},1759:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3772,23))},565:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(3803);function a({error:e,reset:t}){return(0,s.jsxs)("main",{className:"flex h-full flex-col items-center justify-center",children:[s.jsx("h2",{className:"text-center",children:"Something went wrong!"}),s.jsx("button",{className:"mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400",onClick:()=>t(),children:"Try again"})]})}r(6308)},4372:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(3803),a=r(9849),o=r(6688),n=r(1351),i=r(4057),c=r(8832),d=r(3511);let l=[{name:"Home",href:"/dashboard",icon:a.Z},{name:"Invoices",href:"/dashboard/invoices",icon:o.Z},{name:"Customers",href:"/dashboard/customers",icon:n.Z}];function u(){let e=(0,c.usePathname)();return s.jsx(s.Fragment,{children:l.map(t=>{let r=t.icon;return(0,s.jsxs)(i.default,{href:t.href,className:(0,d.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[s.jsx(r,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},902:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var s=r(2067);let a=(0,s.createProxy)(String.raw`/Users/pro/Downloads/nexgit/nextjs-dashboard/app/dashboard/invoices/error.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,s.createProxy)(String.raw`/Users/pro/Downloads/nexgit/nextjs-dashboard/app/dashboard/invoices/error.tsx#default`)},2281:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(7684),a=r(4436);function o({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[s.jsx("div",{className:"w-full flex-none md:w-64",children:s.jsx(a.default,{})}),s.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},2373:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var s=r(7684);r(4582);var a=r(9468),o=r.n(a);let n={title:{template:"%s | Acme Dashboard",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${o().className} antialiased`,children:e})})}},7585:(e,t,r)=>{"use strict";r.d(t,{BX:()=>m,D1:()=>u,NI:()=>i,V_:()=>l,qu:()=>c,t2:()=>n,x4:()=>d});var s=r(4370),a=r(1998);let o=(0,s.Z)(process.env.POSTGRES_URL,{ssl:"require"});async function n(){try{return await o`SELECT * FROM revenue`}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){try{return(await o`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(e=>({...e,amount:(0,a.xG)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=o`SELECT COUNT(*) FROM invoices`,t=o`SELECT COUNT(*) FROM customers`,r=o`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,s=await Promise.all([e,t,r]),n=Number(s[0][0].count??"0"),i=Number(s[1][0].count??"0"),c=(0,a.xG)(s[2][0].paid??"0"),d=(0,a.xG)(s[2][0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:n,totalPaidInvoices:c,totalPendingInvoices:d}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function d(e,t){try{return await o`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function l(e){try{let t=await o`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function u(e){try{return(await o`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).map(e=>({...e,amount:e.amount/100}))[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function m(){try{return await o`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},1998:(e,t,r)=>{"use strict";r.d(t,{p9:()=>a,tk:()=>o,xG:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),a=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},o=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},3614:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(7684),a=r(5778),o=r(6213);function n(){return(0,s.jsxs)("main",{className:"flex h-full flex-col items-center justify-center gap-2",children:[s.jsx(o.Z,{className:"w-10 text-gray-400"}),s.jsx("h2",{className:"text-xl font-semibold",children:"404 Not Found"}),s.jsx("p",{children:"Could not find the requested page."}),s.jsx(a.default,{href:"/",className:"mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400",children:"Go Home"})]})}},7421:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(7684),a=r(4880),o=r(9855),n=r.n(o);function i(){return(0,s.jsxs)("div",{className:`${n().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(a.Z,{className:"h-12 w-12 rotate-[15deg]"}),s.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},4436:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>f,default:()=>h});var s=r(7684),a=r(1825);r(1559);var o=r(5778),n=r(2067);let i=(0,n.createProxy)(String.raw`/Users/pro/Downloads/nexgit/nextjs-dashboard/app/ui/dashboard/nav-links.tsx`),{__esModule:c,$$typeof:d}=i;i.default;let l=(0,n.createProxy)(String.raw`/Users/pro/Downloads/nexgit/nextjs-dashboard/app/ui/dashboard/nav-links.tsx#default`);var u=r(7421),m=r(3880);function h(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[s.jsx(o.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:s.jsx("div",{className:"w-32 text-white md:w-40",children:s.jsx(u.Z,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[s.jsx(l,{}),s.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),s.jsx("form",{action:(0,a.j)("d102f96db8c391216a9e62ac8621ad716b8bc9dc",f),children:(0,s.jsxs)("button",{className:"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[s.jsx(m.Z,{className:"w-6"}),s.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}async function f(){await Object(function(){var e=Error("Cannot find module '@/auth'");throw e.code="MODULE_NOT_FOUND",e}())({redirectTo:"/"})}!function(){var e=Error("Cannot find module '@/auth'");throw e.code="MODULE_NOT_FOUND",e}()},5014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(3002);let a=e=>[{type:"image/jpeg",width:1686,height:882,url:(0,s.fillMetadataSegment)(".",e.params,"opengraph-image.jpg")+"?886e7c13529660db"}]},4582:()=>{},1369:(e,t,r)=>{"use strict";function s(){for(var e,t,r=0,s="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=function e(t){var r,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(s=e(t[r]))&&(a&&(a+=" "),a+=s)}else for(s in t)t[s]&&(a&&(a+=" "),a+=s)}return a}(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{W:()=>s,Z:()=>a});let a=s}};