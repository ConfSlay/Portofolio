(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(35),c=a.n(i),l=a(14),o=a(7),s=a(8),m=a(4),u=a.n(m),d=a(5),p=a(18),j=a.n(p),f="http://localhost:3006/api/auth/",g={login:function(){var e=Object(d.a)(u.a.mark(function e(t,a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post(f+"login",{username:t,password:a}).catch(function(e){return!1});case 2:if(!1!==(n=e.sent)){e.next=7;break}return e.abrupt("return",!1);case 7:return localStorage.setItem("user",JSON.stringify(n.data)),e.abrupt("return",!0);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),logout:function(){return localStorage.removeItem("user"),j.a.post(f+"logout").then(function(e){return e.data})},getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))}},_=(a(68),a(36)),b=a.n(_);function v(e){return Object(n.useEffect)(function(){document.querySelector(".iconMenuBox").addEventListener("click",function(){document.querySelector(".icon-1").classList.toggle("a"),document.querySelector(".icon-2").classList.toggle("c"),document.querySelector(".icon-3").classList.toggle("b"),document.querySelector(".burgerMenuBox").classList.contains("appearing")||document.querySelector(".burgerMenuBox").classList.contains("disappearing")?(document.querySelector(".burgerMenuBox").classList.toggle("disappearing"),document.querySelector(".burgerMenuBox").classList.toggle("appearing")):document.querySelector(".burgerMenuBox").classList.toggle("appearing")})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"background"}),r.a.createElement("div",{className:"Header"},r.a.createElement(l.b,{className:"leftBox",to:"/"},r.a.createElement("img",{className:"itemLeftBox imageHeader",src:b.a}),r.a.createElement("span",{className:"itemLeftBox titleHeader"},r.a.createElement("div",{className:"titleHeader-top"},"Richard PERRET"),r.a.createElement("div",{className:"hiding-titleHeader-bot"},"Richard PERRET"),r.a.createElement("div",{className:"titleHeader-bot"},"Richard PERRET"))),r.a.createElement("div",{className:"iconMenuBox"},r.a.createElement("div",{className:"icon-1"}),r.a.createElement("div",{className:"icon-2"}),r.a.createElement("div",{className:"icon-3"})),r.a.createElement("div",{className:"burgerMenuBox"},r.a.createElement(l.b,{className:"itemBugerMenuBox",to:"/Projects"},"PROJETS"),r.a.createElement(l.b,{className:"itemBugerMenuBox",to:"/Contact"},"CONTACT")),r.a.createElement("div",{className:"linksBox"},r.a.createElement(l.b,{className:"itemLinksBox blue",to:"/Contact"},"CONTACT"),r.a.createElement(l.b,{className:"itemLinksBox",to:"/Projects"},"PROJETS"))),!0===e.isAdmin?r.a.createElement("button",{class:"logoutBubble",onClick:e.logout},"D\xe9connexion"):null)}function E(e){return r.a.createElement(r.a.Fragment,null)}function h(e){return r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},e.labelName),r.a.createElement("input",{type:"text",className:"textFields-form small",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName}))}function O(e){return r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},e.labelName),r.a.createElement("input",{type:"password",className:"textFields-form small",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName}))}function N(e){return r.a.createElement("div",{className:"wrapper-form"},r.a.createElement("div",{className:"box-form"},r.a.createElement(h,{labelName:"Username",fieldName:e.UsernameFieldName,fieldValue:e.UsernameFieldValue,onChangeEvent:e.OnChangeUsername}),r.a.createElement(O,{labelName:"Password",fieldName:e.PasswordFieldName,fieldValue:e.PasswordFieldValue,onChangeEvent:e.OnChangePassword}),!1===e.isValid?r.a.createElement("div",{className:"item-form errorMessage"},e.validationMessage):null,r.a.createElement("button",{className:"item-form button-form",onClick:e.submitAuth},"Connect")))}function V(e){var t=Object(o.f)();Object(n.useEffect)(function(){!0===V&&t("/Projects")});var a=Object(n.useState)(""),i=Object(s.a)(a,2),c=i[0],l=i[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),j=p[0],f=p[1],_=Object(n.useState)(!0),b=Object(s.a)(_,2),v=b[0],E=b[1],h=Object(n.useState)(!1),O=Object(s.a)(h,2),V=O[0],P=O[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),y=S[0],k=S[1],x=function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==y){e.next=8;break}return console.log("in"),k(!0),e.next=5,g.login(c,j);case 5:e.sent?(E(!0),P(!0)):E(!1),k(!1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(N,{UsernameFieldName:"user_username",UsernameFieldValue:c,OnChangeUsername:function(e){l(e.target.value)},PasswordFieldName:"user_password",PasswordFieldValue:j,OnChangePassword:function(e){f(e.target.value)},submitAuth:x,isValid:v,validationMessage:"Authentification failed"})}var P=a(37),C=a.n(P),S=a(40);function y(e){var t=Object(n.useCallback)(function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),i=a(80);return r.a.createElement(C.a,{options:i,init:t})}function k(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:"wrapper-form"},r.a.createElement("div",{className:"box-form"},r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},"Email"),r.a.createElement("input",{type:"text",className:"textFields-form small",placeholder:"johndoe@mail.com"})),r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},"Message"),r.a.createElement("textarea",{className:"textArea-form",placeholder:"Hello Mr.PERRET,"})),r.a.createElement("input",{type:"submit",className:"item-form button-form",value:"Send",onclick:function(){!1===i&&(c(!0),c(!1))}}))))}var x=a(0),F=a(1),w=j.a.create({baseURL:"http://localhost:3006/api",headers:{"Content-type":"multipart/form-data"}}),R=new(function(){function e(){Object(x.a)(this,e)}return Object(F.a)(e,[{key:"getAll",value:function(){return w.get("/Projects")}},{key:"get",value:function(e){return w.get("/Projects/".concat(e))}},{key:"create",value:function(e){return w.post("/Projects",e)}},{key:"update",value:function(e,t){return w.put("/Projects/".concat(e),t)}},{key:"delete",value:function(e){return w.delete("/Projects/".concat(e))}},{key:"getUploadsFiles",get:function(){return"http://localhost:3006/uploads/"}}]),e}());function M(e){var t=this,a=Object(n.useState)([]),i=Object(s.a)(a,2),c=i[0],m=i[1],u=Object(o.f)();Object(n.useEffect)(function(){d()},[]);var d=function(){R.getAll().then(function(e){m(e.data)}).catch(function(e){console.log(e)})};function p(e){R.delete(e).then(function(t){m(c.filter(function(t){return t.project_id!==e}))}).catch(function(e){console.log(e)})}function j(e){u("/Project/update/"+e)}return r.a.createElement("div",{className:"wrapper-project"},c&&c.map(function(a){return r.a.createElement("div",{className:"item-project",key:a.project_id},e.isAdmin?r.a.createElement("div",{className:"buttons-project"},r.a.createElement("button",{className:"deleteProjectButton-project alertDisplayerDelete_JS",onClick:p.bind(t,a.project_id)},"Delete project"),r.a.createElement("button",{className:"updateProjectButton-project",onClick:j.bind(t,a.project_id)},"Update project")):null,r.a.createElement("span",{className:"title-project"},a.project_name),r.a.createElement("span",{className:"tag-project"},a.project_technologies),r.a.createElement("img",{className:"image-project",src:R.getUploadsFiles+a.project_thumbnail_filename}),r.a.createElement(l.b,{className:"link-project",to:"/Project/"+a.project_id},"See More"))}),e.isAdmin?r.a.createElement(l.b,{className:"buttonAdd-project",to:"/Project/create"},"Add new project"):null)}var A=a(38),B=a.n(A);a(96),a(98);function U(e){var t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return r.a.createElement("div",{className:"item-discover caroussel-discover"},r.a.createElement(B.a,t,e.loaded&&e.project.project_images.map(function(e){return r.a.createElement("img",{src:R.getUploadsFiles+e.project_image_filename,key:e.project_image_id})})))}function L(e){var t=Object(o.f)();Object(n.useEffect)(function(){!0===E&&t("/Projects"),!0===c&&t("/NotFound")});var a=Object(n.useState)(!1),i=Object(s.a)(a,2),c=i[0],l=i[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],j=Object(n.useState)({project_id:null,project_name:"",project_technologies:"",project_description:"",project_thumbnail_filename:"",project_images:null,project_is_file_format:!0,project_release_filename:"",project_release_url:""}),f=Object(s.a)(j,2),g=f[0],_=f[1],b=Object(n.useState)(!1),v=Object(s.a)(b,2),E=v[0],h=v[1],O=Object(o.g)().id;Object(n.useEffect)(function(){N()},[]);var N=function(){R.get(O).then(function(e){_(e.data),console.log(e.data),p(!0)}).catch(function(e){l(!0),console.log(e)})};return r.a.createElement("div",{className:"wrapper-discover"},r.a.createElement("div",{className:"box-discover"},e.isAdmin?r.a.createElement("div",{className:"buttons-project"},r.a.createElement("button",{className:"deleteProjectButton-project alertDisplayerDelete_JS",onClick:function(e){R.delete(e).then(function(e){console.log(e.data),h(!0)}).catch(function(e){console.log(e)})}.bind(this,g.project_id)},"Delete project"),r.a.createElement("button",{className:"updateProjectButton-project",onClick:function(e){t("/Project/update/"+e)}.bind(this,g.project_id)},"Update project")):null,r.a.createElement("span",{className:"item-discover title-discover"},g.project_name),r.a.createElement("span",{className:"item-discover tag-discover"},g.project_technologies),r.a.createElement("span",{className:"item-discover description-discover"},g.project_description),r.a.createElement(U,{loaded:d,project:g}),!0===g.project_is_file_format?r.a.createElement("a",{className:"item-discover link-project",href:R.getUploadsFiles+g.project_release_filename,download:!0},"T\xe9l\xe9charger"):r.a.createElement("a",{className:"item-discover link-project",href:g.project_release_url,target:"_blank"},"Lien")))}var T=a(12);function D(e){var t=Object(n.useState)(e.isValid),a=Object(s.a)(t,2);a[0],a[1];return r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},e.labelName),!0===e.multiline?r.a.createElement("textarea",{className:"textArea-form",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName}):r.a.createElement(r.a.Fragment,null,!0===e.small?r.a.createElement("input",{type:"text",className:"textFields-form small",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName}):r.a.createElement("input",{type:"text",className:"textFields-form",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName})),!1===e.isValid?r.a.createElement("div",{className:"errorMessage"},e.validationMessage):null)}var q=a(23),H=a.n(q);function I(e){var t=Object(n.useState)(e.isValid),a=Object(s.a)(t,2),i=(a[0],a[1],Object(n.useState)(e.isRemovable)),c=Object(s.a)(i,2);c[0],c[1];return r.a.createElement(r.a.Fragment,null,!1===e.isRemovable?r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},e.labelName),!0===e.isMultiFile?r.a.createElement("input",{type:"file",multiple:!0,name:e.fieldName,className:"files-form",onChange:e.onChangeEvent}):r.a.createElement("input",{type:"file",name:e.fieldName,className:"files-form",onChange:e.onChangeEvent}),!1===e.isValid?r.a.createElement("div",{className:"errorMessage"},e.validationMessage):null):r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},e.labelName),r.a.createElement("div",{className:"file-box"},r.a.createElement("img",{src:H.a,className:"icon-delete",onClick:e.onResetEvent}),!0===e.isMultiFile?r.a.createElement("div",{className:"file-name"},e.fieldValue.map(function(e){return r.a.createElement("div",{key:e.project_image_id},e.project_image_filename)})):r.a.createElement("div",{className:"file-name"},e.fieldValue))))}function J(e){var t=Object(n.useState)(e.project),a=Object(s.a)(t,2),i=(a[0],a[1],Object(n.useState)(e.removeThumbnailPossibility)),c=Object(s.a)(i,2),l=(c[0],c[1],Object(n.useState)(e.removeImagesPossibility)),o=Object(s.a)(l,2),m=(o[0],o[1],Object(n.useState)(e.removeReleaseFilePossibility)),u=Object(s.a)(m,2);u[0],u[1];return r.a.createElement("div",{className:"wrapper-form"},r.a.createElement("div",{className:"box-form"},r.a.createElement(D,{multiline:!1,small:!0,labelName:"Project Name",fieldName:"project_name",fieldValue:e.project.project_name,onChangeEvent:e.onChangeProject_name,isValid:e.nameValidation.isValid,validationMessage:e.nameValidation.message}),r.a.createElement(D,{multiline:!1,small:!1,labelName:"Source and target technologies",fieldName:"project_technologies",fieldValue:e.project.project_technologies,onChangeEvent:e.onChangeProject_technologies,isValid:e.technologiesValidation.isValid,validationMessage:e.technologiesValidation.message}),r.a.createElement(D,{multiline:!0,small:!1,labelName:"Description",fieldName:"project_description",fieldValue:e.project.project_description,onChangeEvent:e.onChangeProject_description,isValid:e.descriptionValidation.isValid,validationMessage:e.descriptionValidation.message}),r.a.createElement(I,{isMultiFile:!1,labelName:"Thumbnail",fieldName:"project_thumbnail_filename",onChangeEvent:e.onChangeProject_thumbnail_filename,isValid:e.thumbnailValidation.isValid,validationMessage:e.thumbnailValidation.message,isRemovable:e.removeThumbnailPossibility,onResetEvent:e.onResetProject_thumbnail_filename,fieldValue:e.project.project_thumbnail_filename}),r.a.createElement(I,{isMultiFile:!0,labelName:"Images",fieldName:"project_images",onChangeEvent:e.onChangeProject_images,isValid:e.imagesValidation.isValid,validationMessage:e.imagesValidation.message,isRemovable:e.removeImagesPossibility,onResetEvent:e.onResetProject_images,fieldValue:e.project.project_images}),r.a.createElement("div",{className:"item-form"},r.a.createElement("div",{className:"label-form"},"Format"),r.a.createElement("select",{className:"FormatChoice_JS",id:"project_is_file_format",value:e.project.project_is_file_format,onChange:e.onChangeProject_is_file_format,name:"project_is_file_format"},r.a.createElement("option",{value:"true"},"File"),r.a.createElement("option",{value:"false"},"Link"))),!0===e.project.project_is_file_format?r.a.createElement(I,{isMultiFile:!1,labelName:"Release File",fieldName:"project_release_filename",onChangeEvent:e.onChangeProject_release_filename,isValid:e.releaseFileValidation.isValid,validationMessage:e.releaseFileValidation.message,isRemovable:e.removeReleaseFilePossibility,onResetEvent:e.onResetProject_release_filename,fieldValue:e.project.project_release_filename}):r.a.createElement(D,{multiline:!1,small:!1,labelName:"Link",fieldName:"project_release_url",fieldValue:e.project.project_release_url,onChangeEvent:e.onChangeProject_release_url,isValid:e.releaseUrlValidation.isValid,validationMessage:e.releaseUrlValidation.message}),"create"===e.mode?r.a.createElement("button",{className:"item-form button-form",onClick:e.saveProject},"Create Project"):r.a.createElement("button",{className:"item-form button-form",onClick:e.saveProject},"Update Project")))}function z(e){var t=Object(o.f)();Object(n.useEffect)(function(){d.project_is_created&&t("/Projects"),e.isAdmin||t("/Projects")});var a=Object(n.useState)(!1),i=Object(s.a)(a,2),c=i[0],l=i[1],m=Object(n.useState)({project_name:"",project_technologies:"",project_description:"",project_thumbnail_filename:null,project_images:[],project_is_file_format:!0,project_release_filename:null,project_release_url:"",project_is_created:!1}),u=Object(s.a)(m,2),d=u[0],p=u[1],j=Object(n.useState)({isValid:!0,message:""}),f=Object(s.a)(j,2),g=f[0],_=f[1],b=Object(n.useState)({isValid:!0,message:""}),v=Object(s.a)(b,2),E=v[0],h=v[1],O=Object(n.useState)({isValid:!0,message:""}),N=Object(s.a)(O,2),V=N[0],P=N[1],C=Object(n.useState)({isValid:!0,message:""}),S=Object(s.a)(C,2),y=S[0],k=S[1],x=Object(n.useState)({isValid:!0,message:""}),F=Object(s.a)(x,2),w=F[0],M=F[1],A=Object(n.useState)({isValid:!0,message:""}),B=Object(s.a)(A,2),U=B[0],L=B[1],D=Object(n.useState)({isValid:!0,message:""}),q=Object(s.a)(D,2),H=q[0],I=q[1];return r.a.createElement(J,{mode:"create",project:d,onChangeProject_name:function(e){p(function(t){return Object(T.a)({},t,{project_name:e.target.value})})},onChangeProject_technologies:function(e){p(function(t){return Object(T.a)({},t,{project_technologies:e.target.value})})},onChangeProject_description:function(e){p(function(t){return Object(T.a)({},t,{project_description:e.target.value})})},onChangeProject_thumbnail_filename:function(e){p(function(t){return Object(T.a)({},t,{project_thumbnail_filename:e.target.files[0]})})},onChangeProject_images:function(e){p(function(t){return Object(T.a)({},t,{project_images:e.target.files})})},onChangeProject_is_file_format:function(e){var t=!0;t="true"===e.target.value,p(function(e){return Object(T.a)({},e,{project_is_file_format:t})})},onChangeProject_release_filename:function(e){p(function(t){return Object(T.a)({},t,{project_release_filename:e.target.files[0]})})},onChangeProject_release_url:function(e){p(function(t){return Object(T.a)({},t,{project_release_url:e.target.value})})},removeThumbnailPossibility:!1,removeImagesPossibility:!1,removeReleaseFilePossibility:!1,onResetProject_images:null,onResetProject_thumbnail_filename:null,onResetProject_release_filename:null,nameValidation:g,technologiesValidation:E,descriptionValidation:V,thumbnailValidation:y,imagesValidation:w,releaseFileValidation:U,releaseUrlValidation:H,saveProject:function(e){if(!1===c){l(!0);var t=new FormData;t.append("project_name",d.project_name),t.append("project_technologies",d.project_technologies),t.append("project_description",d.project_description),t.append("project_thumbnail_filename",d.project_thumbnail_filename);for(var a=0;a<d.project_images.length;a++)t.append("project_images",d.project_images[a]);t.append("project_is_file_format",d.project_is_file_format),t.append("project_release_filename",d.project_release_filename),t.append("project_release_url",d.project_release_url),R.create(t).then(function(e){200===e.status&&(console.log(e.data),p(function(e){return Object(T.a)({},e,{project_is_created:!0})}))}).catch(function(e){422===e.response.status&&(_({isValid:!0,message:""}),h({isValid:!0,message:""}),P({isValid:!0,message:""}),k({isValid:!0,message:""}),M({isValid:!0,message:""}),L({isValid:!0,message:""}),I({isValid:!0,message:""}),e.response.data.errors.forEach(function(e){switch(e.param){case"project_name":_({isValid:!1,message:e.msg});break;case"project_technologies":h({isValid:!1,message:e.msg});break;case"project_description":P({isValid:!1,message:e.msg});break;case"project_thumbnail_filename":k({isValid:!1,message:e.msg});break;case"project_images":M({isValid:!1,message:e.msg});break;case"project_release_filename":L({isValid:!1,message:e.msg});break;case"project_release_url":I({isValid:!1,message:e.msg})}}))}),l(!1)}}})}function G(e){var t=Object(o.f)();Object(n.useEffect)(function(){g.project_is_updated&&t("/Projects"),!0===d&&t("/NotFound"),!0===E&&pe(),e.isAdmin||t("/Projects")});var a=Object(n.useState)(!1),i=Object(s.a)(a,2),c=i[0],l=i[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],j=Object(n.useState)({project_name:"",project_technologies:"",project_description:"",project_thumbnail_filename:null,project_images:[],project_is_file_format:!0,project_release_filename:null,project_release_url:"",project_is_updated:!1}),f=Object(s.a)(j,2),g=f[0],_=f[1],b=Object(n.useState)(!1),v=Object(s.a)(b,2),E=v[0],h=v[1],O=Object(n.useState)(!1),N=Object(s.a)(O,2),V=N[0],P=N[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),y=S[0],k=S[1],x=Object(n.useState)(!1),F=Object(s.a)(x,2),w=F[0],M=F[1],A=Object(n.useState)({isValid:!0,message:""}),B=Object(s.a)(A,2),U=B[0],L=B[1],D=Object(n.useState)({isValid:!0,message:""}),q=Object(s.a)(D,2),H=q[0],I=q[1],z=Object(n.useState)({isValid:!0,message:""}),G=Object(s.a)(z,2),X=G[0],Y=G[1],K=Object(n.useState)({isValid:!0,message:""}),Q=Object(s.a)(K,2),W=Q[0],Z=Q[1],$=Object(n.useState)({isValid:!0,message:""}),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({isValid:!0,message:""}),re=Object(s.a)(ne,2),ie=re[0],ce=re[1],le=Object(n.useState)({isValid:!0,message:""}),oe=Object(s.a)(le,2),se=oe[0],me=oe[1],ue=Object(o.g)().id;Object(n.useEffect)(function(){de(ue)},[]);var de=function(e){R.get(e).then(function(e){_(e.data),h(!0)}).catch(function(e){p(!0),console.log(e)})},pe=function(){P(!0),k(!0),!0===g.project_is_file_format&&M(!0),h(void 0)};return r.a.createElement(J,{mode:"update",project:g,onChangeProject_name:function(e){_(function(t){return Object(T.a)({},t,{project_name:e.target.value})})},onChangeProject_technologies:function(e){_(function(t){return Object(T.a)({},t,{project_technologies:e.target.value})})},onChangeProject_description:function(e){_(function(t){return Object(T.a)({},t,{project_description:e.target.value})})},onChangeProject_thumbnail_filename:function(e){_(function(t){return Object(T.a)({},t,{project_thumbnail_filename:e.target.files[0]})})},onChangeProject_images:function(e){_(function(t){return Object(T.a)({},t,{project_images:e.target.files})})},onChangeProject_is_file_format:function(e){var t=!0;t="true"===e.target.value,_(function(e){return Object(T.a)({},e,{project_is_file_format:t})})},onChangeProject_release_filename:function(e){_(function(t){return Object(T.a)({},t,{project_release_filename:e.target.files[0]})})},onChangeProject_release_url:function(e){_(function(t){return Object(T.a)({},t,{project_release_url:e.target.value})})},removeThumbnailPossibility:V,removeImagesPossibility:y,removeReleaseFilePossibility:w,onResetProject_images:function(){_(function(e){return Object(T.a)({},e,{project_images_updated:!0})}),k(!1),_(function(e){return Object(T.a)({},e,{project_images_updated:!0})})},onResetProject_thumbnail_filename:function(){_(function(e){return Object(T.a)({},e,{project_thumbnail_filename:null})}),P(!1)},onResetProject_release_filename:function(){_(function(e){return Object(T.a)({},e,{project_release_filename:null})}),M(!1)},nameValidation:U,technologiesValidation:H,descriptionValidation:X,thumbnailValidation:W,imagesValidation:te,releaseFileValidation:ie,releaseUrlValidation:se,saveProject:function(e){if(!1===c){l(!0);var t=new FormData;if(t.append("project_name",g.project_name),t.append("project_technologies",g.project_technologies),t.append("project_description",g.project_description),t.append("project_thumbnail_filename",g.project_thumbnail_filename),t.append("project_images_updated",g.project_images_updated),!0===g.project_images_updated)for(var a=0;a<g.project_images.length;a++)t.append("project_images",g.project_images[a]);t.append("project_is_file_format",g.project_is_file_format),t.append("project_release_filename",g.project_release_filename),t.append("project_release_url",g.project_release_url),R.update(ue,t).then(function(e){_(function(e){return Object(T.a)({},e,{project_is_updated:!0})})}).catch(function(e){422===e.response.status&&(L({isValid:!0,message:""}),I({isValid:!0,message:""}),Y({isValid:!0,message:""}),Z({isValid:!0,message:""}),ce({isValid:!0,message:""}),me({isValid:!0,message:""}),e.response.data.errors.forEach(function(e){switch(e.param){case"project_name":L({isValid:!1,message:e.msg});break;case"project_technologies":I({isValid:!1,message:e.msg});break;case"project_description":Y({isValid:!1,message:e.msg});break;case"project_thumbnail_filename":Z({isValid:!1,message:e.msg});break;case"project_images":ae({isValid:!1,message:e.msg});break;case"project_release_filename":ce({isValid:!1,message:e.msg});break;case"project_release_url":me({isValid:!1,message:e.msg})}}))}),l(!1)}}})}var X=a(39),Y=a.n(X);function K(e){return r.a.createElement("div",{className:"wrapper-form"},r.a.createElement("img",{className:"not-found-image",src:Y.a}))}function Q(e){var t=Object(o.f)();Object(n.useEffect)(function(){var e=g.getCurrentUser();l(!!e),!0===d&&(p(!1),t("/Projects"))});var a=Object(n.useState)(!1),i=Object(s.a)(a,2),c=i[0],l=i[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{logout:function(){g.logout(),l(!1),"CreateProject"!==e.page&&"UpdateProject"!==e.page||p(!0)},isAdmin:c}),{Home:r.a.createElement(E,null),Login:r.a.createElement(V,null),Contact:r.a.createElement(k,null),GetAllProject:r.a.createElement(M,{isAdmin:c}),GetOneProject:r.a.createElement(L,{isAdmin:c}),CreateProject:r.a.createElement(z,{isAdmin:c}),UpdateProject:r.a.createElement(G,{isAdmin:c}),NotFound:r.a.createElement(K,null)}[e.page])}c.a.createRoot(document.getElementById("root")).render(r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",element:r.a.createElement(Q,{page:"Home"})}),r.a.createElement(o.a,{path:"/Login",element:r.a.createElement(Q,{page:"Login"})}),r.a.createElement(o.a,{path:"/Contact",element:r.a.createElement(Q,{page:"Contact"})}),r.a.createElement(o.a,{path:"/Projects",element:r.a.createElement(Q,{page:"GetAllProject"})}),r.a.createElement(o.a,{path:"/Project/:id",element:r.a.createElement(Q,{page:"GetOneProject"})}),r.a.createElement(o.a,{path:"/Project/create",element:r.a.createElement(Q,{page:"CreateProject"})}),r.a.createElement(o.a,{path:"/Project/update/:id",element:r.a.createElement(Q,{page:"UpdateProject"})}),r.a.createElement(o.a,{path:"/404",element:r.a.createElement(Q,{page:"NotFound"})}),r.a.createElement(o.a,{path:"*",element:r.a.createElement(Q,{page:"NotFound"})}))))},23:function(e,t,a){e.exports=a.p+"static/media/delete.bf2628e4.png"},36:function(e,t,a){e.exports=a.p+"static/media/thunderParticle.5d153796.png"},39:function(e,t,a){e.exports=a.p+"static/media/404.9e40b6a3.png"},41:function(e,t,a){e.exports=a(100)},68:function(e,t,a){},80:function(e){e.exports={particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:409.6100827097281,color:"#ffffff",opacity:.17329657345411573,width:.6301693580149663},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}},[[41,3,1]]]);
//# sourceMappingURL=main.29661c69.chunk.js.map