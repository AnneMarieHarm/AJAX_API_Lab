"use strict";
$(document).ready(() => {
   $.get("https://www.reddit.com/r/aww/.json").then((response) => {
       const sweetthangs = response.data.children
       for (let i = 0; i < sweetthangs.length; i++) {
           console.log(sweetthangs[i]);
           $("body").append(`
           <section>
           <h3 class="title">title: ${sweetthangs[i].data.title}</h3>
           <p class="author">author: ${sweetthangs[i].data.author}</p>
           <p class="ups">ups: ${sweetthangs[i].data.ups}</p>
           <img src="${sweetthangs[i].data.thumbnail}">
           <a href="http://www.reddit.com${sweetthangs[i].data.permalink}">Link it up</a>
           </section>
           `)
       }
   })
});
