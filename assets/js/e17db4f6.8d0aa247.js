(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(124)),c={icon:"./images/2021-03-07-syntax-08-functions-icon-0.png",slug:"syntax-08-functions",title:"Syntax-08-functions",main_category:"Frontend",category:"6. Sass",status:"\u2705 Completed",author:"younho9",created_time:new Date("2021-03-07T00:00:00.000Z"),updated_time:new Date("2021-03-28T00:00:00.000Z")},i={unversionedId:"frontend/6-sass/2021-03-07-syntax-08-functions",id:"frontend/6-sass/2021-03-07-syntax-08-functions",isDocsHomePage:!1,title:"Syntax-08-functions",description:"Sass(SCSS) Syntax - 8. \ud568\uc218(Functions)",source:"@site/docs/frontend/6-sass/2021-03-07-syntax-08-functions.md",slug:"/frontend/6-sass/syntax-08-functions",permalink:"/docs/frontend/6-sass/syntax-08-functions",editUrl:"https://github.com/younho9/til/edit/main/docs/frontend/6-sass/2021-03-07-syntax-08-functions.md",version:"current",lastUpdatedBy:"wooodhead",lastUpdatedAt:1617587623,formattedLastUpdatedAt:"4/5/2021",sidebar:"frontend",previous:{title:"Syntax-05-operations",permalink:"/docs/frontend/6-sass/syntax-05-operations"},next:{title:"[Step by Step Tutorial] 03. Front matter",permalink:"/docs/frontend/7-jekyll/step-by-step-tutorial-03-front-matter"}},s=[{value:"Sass(SCSS) Syntax - 8. \ud568\uc218(Functions)",id:"sassscss-syntax---8-\ud568\uc218functions",children:[{value:"\ud568\uc218(Functions)",id:"\ud568\uc218functions",children:[]},{value:"Reference",id:"reference",children:[]}]}],u={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"sassscss-syntax---8-\ud568\uc218functions"},"Sass(SCSS) Syntax - 8. \ud568\uc218(Functions)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2757\ufe0f \ud574\ub2f9 \uae00\uc740 \ud328\uc2a4\ud2b8\ucea0\ud37c\uc2a4 - \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \uac15\uc758\uc5d0\uc11c HTML & CSS, SASS(SCSS) Part\uc758 \ubc15\uc601\uc6c5 \uac15\uc0ac\ub2d8\uc758 \uac15\uc758\uc790\ub8cc(Sass(SCSS) \uc644\uc804 \uc815\ubcf5!)\ub97c \ubcf4\uba70 \uc815\ub9ac\ud55c \uac83\uc785\ub2c8\ub2e4.")),Object(o.b)("h3",{id:"\ud568\uc218functions"},"\ud568\uc218(Functions)"),Object(o.b)("p",null,"\ud568\uc218\uc640 ",Object(o.b)("inlineCode",{parentName:"p"},"@mixins")," \uc740 \uac70\uc758 \uc720\uc0ac\ud558\uc9c0\ub9cc \ubc18\ud658\ub418\ub294 \ub0b4\uc6a9\uc774 \ub2e4\ub974\ub2e4"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@mixin")," \uc740 \uc9c0\uc815\ud55c \uc2a4\ud0c0\uc77c(Style)\uc744 \ubc18\ud658\ud558\ub294 \ubc18\uba74,"),Object(o.b)("p",null,"\ud568\uc218\ub294 \ubcf4\ud1b5 \uc5f0\uc0b0\ub41c(Computed) \uac12\uc744 ",Object(o.b)("inlineCode",{parentName:"p"},"@return")," \uc9c0\uc2dc\uc5b4\ub97c \ud1b5\ud574 \ubc18\ud658\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"// Mixins\n@mixin \ubbf9\uc2a4\uc778\uc774\ub984($\ub9e4\uac1c\ubcc0\uc218) {\n  \uc2a4\ud0c0\uc77c;\n}\n\n// Functions\n@function \ud568\uc218\uc774\ub984($\ub9e4\uac1c\ubcc0\uc218) {\n  @return \uac12\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@mixin")," \uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"@include")," \uc9c0\uc2dc\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc18\uba74,"),Object(o.b)("p",null,"\ud568\uc218\ub294 \ud568\uc218\uc774\ub984\uc73c\ub85c \ubc14\ub85c \uc0ac\uc6a9\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"// Mixin\n@include \ubbf9\uc2a4\uc778\uc774\ub984(\uc778\uc218);\n\n// Functions\n\ud568\uc218\uc774\ub984(\uc778\uc218)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"$max-width: 980px;\n\n@function columns($number: 1, $columns: 12) {\n  @return $max-width * ($number / $columns)\n}\n\n.box_group {\n  width: $max-width;\n\n  .box1 {\n    width: columns();\n  }\n  .box2 {\n    width: columns(8);\n  }\n  .box3 {\n    width: columns(3);\n  }\n}\n")),Object(o.b)("p",null,"\ucef4\ud30c\uc77c\ud558\uba74"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},".box_group {/* \ucd1d \ub108\ube44 */width: 980px;}.box_group .box1 {/* \ucd1d \ub108\ube44\uc758 \uc57d 8.3% */width: 81.66667px;}.box_group .box2 {/* \ucd1d \ub108\ube44\uc758 \uc57d 66.7% */width: 653.33333px;}.box_group .box3 {/* \ucd1d \ub108\ube44\uc758 25% */width: 245px;}\n")),Object(o.b)("p",null,"\ud568\uc218\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"@include")," \uac19\uc740 \ubcc4\ub3c4\uc758 \uc9c0\uc2dc\uc5b4 \uc5c6\uc774 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ub0b4\uc7a5 \ud568\uc218(Built-in Functions)\uc758 \uc774\ub984\uc774 \ucda9\ub3cc\ud560 \uac00\ub2a5\uc131\uc774 \uc788\ub2e4."),Object(o.b)("p",null,"\ub530\ub77c\uc11c \uc9c0\uc815\ud55c \ud568\uc218\uc5d0\ub294 \ubcc4\ub3c4\uc758 \uc811\ub450\uc5b4\ub97c \ubd99\uc5ec \ucda9\ub3cc\uc744 \ubc29\uc9c0\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),Object(o.b)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",Object(o.b)("inlineCode",{parentName:"p"},"red()")," \ub77c\ub294 \ub0b4\uc7a5 \ud568\uc218\uac00 \uc788\ub2e4."),Object(o.b)("p",null,"\uac19\uc740 \uc774\ub984\uc744 \uc0ac\uc6a9\ud558\uba74 \uc774\ub984\uc774 \ucda9\ub3cc\ud558\uae30 \ub54c\ubb38\uc5d0 \ubcc4\ub3c4\uc758 \uc811\ub450\uc5b4\ub97c \ubd99\uc5ec ",Object(o.b)("inlineCode",{parentName:"p"},"extract-red()")," \uac19\uc740 \uc774\ub984\uc744 \ub9cc\ub4e0\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"// \ub0b4\uac00 \uc815\uc758\ud55c \ud568\uc218\n@function extract-red($color) {\n  // \ub0b4\uc7a5 \ud568\uc218\n  @return rgb(red($color), 0, 0);\n}\n\ndiv {\n  color: extract-red(#D55A93);\n}\n")),Object(o.b)("p",null,"\ud639\uc740 \ud2b9\ubcc4\ud55c \uc774\ub984\uc744 \uc811\ub450\uc5b4\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"my-custom-func-red()")),Object(o.b)("h3",{id:"reference"},"Reference"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.fastcampus.co.kr/dev_online_react/"},"\ud328\uc2a4\ud2b8\ucea0\ud37c\uc2a4 - \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \uac15\uc758")," - HTML & CSS, SASS(SCSS) Part by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ParkYoungWoong"},"ParkYoungWoong")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://heropy.blog/2018/01/31/sass/"},"Sass(SCSS) \uc644\uc804 \uc815\ubcf5!")))}l.isMDXComponent=!0},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},u),{},{components:t})):a.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);