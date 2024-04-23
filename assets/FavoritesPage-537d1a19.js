import{u as r,j as o,L as t}from"./index-b5c19650.js";const e=r.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--white-color); 

`,a=r.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: var(--white-color); 

`,n=r.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.5); 
  color: #fff;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  padding: 10px 20px; 
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); 
  }
`,i=()=>o.jsx("div",{className:"background",children:o.jsxs("div",{className:"container",children:[o.jsx(e,{children:"No Favorites Yet"}),o.jsx(a,{children:"It looks like you haven't added any favorites yet. Start exploring and add some items to your favorites list!"}),o.jsx(t,{to:"/catalog",children:o.jsx(n,{children:"Explore Catalog"})})]})});export{i as default};
