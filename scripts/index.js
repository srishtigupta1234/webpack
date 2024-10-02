//https://api.unsplash.com/search/photos/?query={value}&per_page=40&client_id=XPv47ZK6IgK_tmIbNzEpHFOytdMTDoxBDWvsScwikBM
const API = "XPv47ZK6IgK_tmIbNzEpHFOytdMTDoxBDWvsScwikBM"

import { navbar } from "../components/navbar.js";
let n = document.getElementById('navbar');
n.innerHTML = navbar();

import { searchImages,append } from "./fetch.js";
let debounceTimeout;
let search = (e) =>{
   clearTimeout(debounceTimeout);
   debounceTimeout = setTimeout(()=>{
    if(e.key === "Enter"){
        let value = document.getElementById("query").value;
        searchImages(API,value).then((data)=>{
            console.log(data);
            let container = document.getElementById("container")
            container.innerHTML=null;
            append(data.results, container);
        });
       }
   },300)
}

document.getElementById("query").addEventListener("keydown",search)

let categories = document.getElementById("categories").children;
for(let el of categories){
    el.addEventListener("click",cSearch)
}
function cSearch(){
    searchImages(API,this.id).then((data)=>{
        let container = document.getElementById("container")
        container.innerHTML = null;
        append(data.results,container)
    })
}
// let sorting = document.getElementById("sorting").children;
// for(let el of sorting){
//     el.addEventListener("click",cSort);
// }
// function cSort(){
//     let sortOrder = this.class; // Assuming you have IDs like 'relevant', 'latest', etc.
//     searchImages(API,this.id,sortOrder).then((data)=>{
//         let container = document.getElementById("container")
//         container.innerHTML = null;
//         append(data.results,container)
//     })
// }
// let searchImages = async()=>{
//     let value = document.getElementById("query").value;
//     try{
//         let res = await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=40&client_id=${API}`
//         );
//         let data = await res.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }