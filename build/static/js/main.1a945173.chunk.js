(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a.n(n),i=a(34),c=a.n(i),r=a(15),o=a(3),s=a(35),m=a.n(s);a(49);function u(e){return Object(n.useEffect)(function(){document.querySelector(".iconMenuBox").addEventListener("click",function(){document.querySelector(".icon-1").classList.toggle("a"),document.querySelector(".icon-2").classList.toggle("c"),document.querySelector(".icon-3").classList.toggle("b"),document.querySelector(".burgerMenuBox").classList.contains("appearing")||document.querySelector(".burgerMenuBox").classList.contains("disappearing")?(document.querySelector(".burgerMenuBox").classList.toggle("disappearing"),document.querySelector(".burgerMenuBox").classList.toggle("appearing")):document.querySelector(".burgerMenuBox").classList.toggle("appearing")})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"background"}),l.a.createElement("div",{className:"Header"},l.a.createElement(r.b,{className:"leftBox",to:"/"},l.a.createElement("img",{className:"itemLeftBox imageHeader",src:m.a}),l.a.createElement("span",{className:"itemLeftBox titleHeader"},l.a.createElement("div",{className:"titleHeader-top"},"Richard PERRET"),l.a.createElement("div",{className:"hiding-titleHeader-bot"},"Richard PERRET"),l.a.createElement("div",{className:"titleHeader-bot"},"Richard PERRET"))),l.a.createElement("div",{className:"iconMenuBox"},l.a.createElement("div",{className:"icon-1"}),l.a.createElement("div",{className:"icon-2"}),l.a.createElement("div",{className:"icon-3"})),l.a.createElement("div",{className:"burgerMenuBox"},l.a.createElement(r.b,{className:"itemBugerMenuBox",to:"/Projects"},"PROJETS"),l.a.createElement(r.b,{className:"itemBugerMenuBox",to:"/Contact"},"CONTACT")),l.a.createElement("div",{className:"linksBox"},l.a.createElement(r.b,{className:"itemLinksBox blue",to:"/Contact"},"CONTACT"),l.a.createElement(r.b,{className:"itemLinksBox",to:"/Projects"},"PROJETS"))))}function d(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null))}var p=a(5),j=a.n(p),f=a(6),_=a(36),g=a.n(_),b=a(40);function v(e){var t=Object(n.useCallback)(function(){var e=Object(f.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),i=a(63);return l.a.createElement(g.a,{options:i,init:t})}function E(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(u,null),l.a.createElement("div",{className:"wrapper-form"},l.a.createElement("div",{className:"box-form"},l.a.createElement("div",{className:"item-form"},l.a.createElement("div",{className:"label-form"},"Email"),l.a.createElement("input",{type:"text",className:"textFields-form small",placeholder:"johndoe@mail.com"})),l.a.createElement("div",{className:"item-form"},l.a.createElement("div",{className:"label-form"},"Message"),l.a.createElement("textarea",{className:"textArea-form",placeholder:"Hello Mr.PERRET,"})),l.a.createElement("input",{type:"submit",className:"item-form button-form",value:"Send"}))))}var h=a(10),O=a(0),N=a(1),V=a(37),P=a.n(V).a.create({baseURL:"http://localhost:3006/api",headers:{"Content-type":"multipart/form-data"}}),C=new(function(){function e(){Object(O.a)(this,e)}return Object(N.a)(e,[{key:"getAll",value:function(){return P.get("/Projects")}},{key:"get",value:function(e){return P.get("/Projects/".concat(e))}},{key:"create",value:function(e){return P.post("/Projects",e)}},{key:"update",value:function(e,t){return P.put("/Projects/".concat(e),t)}},{key:"delete",value:function(e){return P.delete("/Projects/".concat(e))}},{key:"getUploadsFiles",get:function(){return"http://localhost:3006/uploads/"}}]),e}());function y(e){var t=this,a=Object(n.useState)([]),i=Object(h.a)(a,2),c=i[0],s=i[1],m=Object(o.f)();Object(n.useEffect)(function(){d()},[]);var d=function(){C.getAll().then(function(e){s(e.data),console.log(e.data)}).catch(function(e){console.log(e)})};function p(e){C.delete(e).then(function(t){console.log(t.data),s(c.filter(function(t){return t.project_id!==e}))}).catch(function(e){console.log(e)})}function j(e){m("/Project/update/"+e)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"wrapper-project"},c&&c.map(function(e){return l.a.createElement("div",{className:"item-project",key:e.project_id},l.a.createElement("div",{className:"buttons-project"}," ",l.a.createElement("button",{className:"deleteProjectButton-project alertDisplayerDelete_JS",onClick:p.bind(t,e.project_id)},"Delete project"),"  ",l.a.createElement("button",{className:"updateProjectButton-project",onClick:j.bind(t,e.project_id)},"Update project"),"  "),l.a.createElement("span",{className:"title-project"},e.project_name),l.a.createElement("span",{className:"tag-project"},e.project_technologies),l.a.createElement("img",{className:"image-project",src:C.getUploadsFiles+e.project_thumbnail_filename}),l.a.createElement(r.b,{className:"link-project",to:"/Project/"+e.project_id},"See More"))}),l.a.createElement(r.b,{className:"buttonAdd-project",to:"/Project/create"},"Add new project")))}var S=a(38),k=a.n(S);a(96),a(98);function F(e){var t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return l.a.createElement("div",{className:"item-discover caroussel-discover"},l.a.createElement(k.a,t,e.loaded&&e.project.project_images.map(function(e){return l.a.createElement("img",{src:C.getUploadsFiles+e.project_image_filename,key:e.project_image_id})})))}function x(e){var t=Object(o.f)();Object(n.useEffect)(function(){!0===E&&t("/Projects"),!0===c&&t("/NotFound")});var a=Object(n.useState)(!1),i=Object(h.a)(a,2),c=i[0],r=i[1],s=Object(n.useState)(!1),m=Object(h.a)(s,2),d=m[0],p=m[1],j=Object(n.useState)({project_id:null,project_name:"",project_technologies:"",project_description:"",project_thumbnail_filename:"",project_images:null,project_is_file_format:!0,project_release_filename:"",project_release_url:""}),f=Object(h.a)(j,2),_=f[0],g=f[1],b=Object(n.useState)(!1),v=Object(h.a)(b,2),E=v[0],O=v[1],N=Object(o.g)().id;Object(n.useEffect)(function(){V()},[]);var V=function(){C.get(N).then(function(e){g(e.data),console.log(e.data),p(!0)}).catch(function(e){r(!0),console.log(e)})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"wrapper-discover"},l.a.createElement("div",{className:"box-discover"},l.a.createElement("div",{className:"buttons-project"}," ",l.a.createElement("button",{className:"deleteProjectButton-project alertDisplayerDelete_JS",onClick:function(e){C.delete(e).then(function(e){console.log(e.data),O(!0)}).catch(function(e){console.log(e)})}.bind(this,_.project_id)},"Delete project"),"  ",l.a.createElement("button",{className:"updateProjectButton-project",onClick:function(e){t("/Project/update/"+e)}.bind(this,_.project_id)},"Update project"),"  "),l.a.createElement("span",{className:"item-discover title-discover"},_.project_name),l.a.createElement("span",{className:"item-discover tag-discover"},_.project_technologies),l.a.createElement("span",{className:"item-discover description-discover"},_.project_description),l.a.createElement(F,{loaded:d,project:_}),!0===_.project_is_file_format?l.a.createElement("a",{className:"item-discover link-project",href:C.getUploadsFiles+_.project_release_filename,download:!0},"T\xe9l\xe9charger"):l.a.createElement("a",{className:"item-discover link-project",href:_.project_release_url,target:"_blank"},"Lien"))))}var R=a(12);function M(e){var t=Object(n.useState)(e.isValid),a=Object(h.a)(t,2);a[0],a[1];return l.a.createElement("div",{className:"item-form"},l.a.createElement("div",{className:"label-form"},e.labelName),!0===e.multiline?l.a.createElement("textarea",{className:"textArea-form",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName}):l.a.createElement(l.a.Fragment,null,!0===e.small?l.a.createElement("input",{type:"text",className:"textFields-form small",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName}):l.a.createElement("input",{type:"text",className:"textFields-form",id:e.fieldName,value:e.fieldValue,onChange:e.onChangeEvent,name:e.fieldName})),!1===e.isValid?l.a.createElement("div",{className:"errorMessage"},e.validationMessage):null)}var w=a(22),B=a.n(w);function T(e){var t=Object(n.useState)(e.isValid),a=Object(h.a)(t,2),i=(a[0],a[1],Object(n.useState)(e.isRemovable)),c=Object(h.a)(i,2);c[0],c[1];return l.a.createElement(l.a.Fragment,null,!1===e.isRemovable?l.a.createElement("div",{className:"item-form"},l.a.createElement("div",{className:"label-form"},e.labelName),!0===e.isMultiFile?l.a.createElement("input",{type:"file",multiple:!0,name:e.fieldName,className:"files-form",onChange:e.onChangeEvent}):l.a.createElement("input",{type:"file",name:e.fieldName,className:"files-form",onChange:e.onChangeEvent}),!1===e.isValid?l.a.createElement("div",{className:"errorMessage"},e.validationMessage):null):l.a.createElement("div",{className:"item-form"},l.a.createElement("div",{className:"label-form"},e.labelName),l.a.createElement("div",{className:"file-box"},l.a.createElement("img",{src:B.a,className:"icon-delete",onClick:e.onResetEvent}),!0===e.isMultiFile?l.a.createElement("div",{className:"file-name"},e.fieldValue.map(function(e){return l.a.createElement("div",{key:e.project_image_id},e.project_image_filename)})):l.a.createElement("div",{className:"file-name"},e.fieldValue))))}function L(e){var t=Object(n.useState)(e.project),a=Object(h.a)(t,2),i=(a[0],a[1],Object(n.useState)(e.removeThumbnailPossibility)),c=Object(h.a)(i,2),r=(c[0],c[1],Object(n.useState)(e.removeImagesPossibility)),o=Object(h.a)(r,2),s=(o[0],o[1],Object(n.useState)(e.removeReleaseFilePossibility)),m=Object(h.a)(s,2);m[0],m[1];return l.a.createElement("div",{className:"wrapper-form"},l.a.createElement("div",{className:"box-form"},l.a.createElement(M,{multiline:!1,small:!0,labelName:"Project Name",fieldName:"project_name",fieldValue:e.project.project_name,onChangeEvent:e.onChangeProject_name,isValid:e.nameValidation.isValid,validationMessage:e.nameValidation.message}),l.a.createElement(M,{multiline:!1,small:!1,labelName:"Source and target technologies",fieldName:"project_technologies",fieldValue:e.project.project_technologies,onChangeEvent:e.onChangeProject_technologies,isValid:e.technologiesValidation.isValid,validationMessage:e.technologiesValidation.message}),l.a.createElement(M,{multiline:!0,small:!1,labelName:"Description",fieldName:"project_description",fieldValue:e.project.project_description,onChangeEvent:e.onChangeProject_description,isValid:e.descriptionValidation.isValid,validationMessage:e.descriptionValidation.message}),l.a.createElement(T,{isMultiFile:!1,labelName:"Thumbnail",fieldName:"project_thumbnail_filename",onChangeEvent:e.onChangeProject_thumbnail_filename,isValid:e.thumbnailValidation.isValid,validationMessage:e.thumbnailValidation.message,isRemovable:e.removeThumbnailPossibility,onResetEvent:e.onResetProject_thumbnail_filename,fieldValue:e.project.project_thumbnail_filename}),l.a.createElement(T,{isMultiFile:!0,labelName:"Images",fieldName:"project_images",onChangeEvent:e.onChangeProject_images,isValid:e.imagesValidation.isValid,validationMessage:e.imagesValidation.message,isRemovable:e.removeImagesPossibility,onResetEvent:e.onResetProject_images,fieldValue:e.project.project_images}),l.a.createElement("div",{className:"item-form"},l.a.createElement("div",{className:"label-form"},"Format"),l.a.createElement("select",{className:"FormatChoice_JS",id:"project_is_file_format",value:e.project.project_is_file_format,onChange:e.onChangeProject_is_file_format,name:"project_is_file_format"},l.a.createElement("option",{value:"true"},"File"),l.a.createElement("option",{value:"false"},"Link"))),!0===e.project.project_is_file_format?l.a.createElement(T,{isMultiFile:!1,labelName:"Release File",fieldName:"project_release_filename",onChangeEvent:e.onChangeProject_release_filename,isValid:e.releaseFileValidation.isValid,validationMessage:e.releaseFileValidation.message,isRemovable:e.removeReleaseFilePossibility,onResetEvent:e.onResetProject_release_filename,fieldValue:e.project.project_release_filename}):l.a.createElement(M,{multiline:!1,small:!1,labelName:"Link",fieldName:"project_release_url",fieldValue:e.project.project_release_url,onChangeEvent:e.onChangeProject_release_url,isValid:e.releaseUrlValidation.isValid,validationMessage:e.releaseUrlValidation.message}),"create"===e.mode?l.a.createElement("button",{className:"item-form button-form",onClick:e.saveProject},"Create Project"):l.a.createElement("button",{className:"item-form button-form",onClick:e.saveProject},"Update Project")))}function U(e){var t=Object(o.f)();Object(n.useEffect)(function(){c.project_is_created&&t("/Projects")});var a=Object(n.useState)({project_name:"",project_technologies:"",project_description:"",project_thumbnail_filename:null,project_images:[],project_is_file_format:!0,project_release_filename:null,project_release_url:"",project_is_created:!1}),i=Object(h.a)(a,2),c=i[0],r=i[1],s=Object(n.useState)({isValid:!0,message:""}),m=Object(h.a)(s,2),d=m[0],p=m[1],j=Object(n.useState)({isValid:!0,message:""}),f=Object(h.a)(j,2),_=f[0],g=f[1],b=Object(n.useState)({isValid:!0,message:""}),v=Object(h.a)(b,2),E=v[0],O=v[1],N=Object(n.useState)({isValid:!0,message:""}),V=Object(h.a)(N,2),P=V[0],y=V[1],S=Object(n.useState)({isValid:!0,message:""}),k=Object(h.a)(S,2),F=k[0],x=k[1],M=Object(n.useState)({isValid:!0,message:""}),w=Object(h.a)(M,2),B=w[0],T=w[1],U=Object(n.useState)({isValid:!0,message:""}),D=Object(h.a)(U,2),A=D[0],q=D[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(L,{mode:"create",project:c,onChangeProject_name:function(e){r(function(t){return Object(R.a)({},t,{project_name:e.target.value})})},onChangeProject_technologies:function(e){r(function(t){return Object(R.a)({},t,{project_technologies:e.target.value})})},onChangeProject_description:function(e){r(function(t){return Object(R.a)({},t,{project_description:e.target.value})})},onChangeProject_thumbnail_filename:function(e){r(function(t){return Object(R.a)({},t,{project_thumbnail_filename:e.target.files[0]})})},onChangeProject_images:function(e){r(function(t){return Object(R.a)({},t,{project_images:e.target.files})})},onChangeProject_is_file_format:function(e){var t=!0;t="true"===e.target.value,r(function(e){return Object(R.a)({},e,{project_is_file_format:t})})},onChangeProject_release_filename:function(e){r(function(t){return Object(R.a)({},t,{project_release_filename:e.target.files[0]})})},onChangeProject_release_url:function(e){r(function(t){return Object(R.a)({},t,{project_release_url:e.target.value})})},removeThumbnailPossibility:!1,removeImagesPossibility:!1,removeReleaseFilePossibility:!1,onResetProject_images:null,onResetProject_thumbnail_filename:null,onResetProject_release_filename:null,nameValidation:d,technologiesValidation:_,descriptionValidation:E,thumbnailValidation:P,imagesValidation:F,releaseFileValidation:B,releaseUrlValidation:A,saveProject:function(e){var t=new FormData;t.append("project_name",c.project_name),t.append("project_technologies",c.project_technologies),t.append("project_description",c.project_description),t.append("project_thumbnail_filename",c.project_thumbnail_filename);for(var a=0;a<c.project_images.length;a++)t.append("project_images",c.project_images[a]);t.append("project_is_file_format",c.project_is_file_format),t.append("project_release_filename",c.project_release_filename),t.append("project_release_url",c.project_release_url),C.create(t).then(function(e){200===e.status&&(console.log(e.data),r(function(e){return Object(R.a)({},e,{project_is_created:!0})}))}).catch(function(e){422===e.response.status&&(p({isValid:!0,message:""}),g({isValid:!0,message:""}),O({isValid:!0,message:""}),y({isValid:!0,message:""}),x({isValid:!0,message:""}),T({isValid:!0,message:""}),q({isValid:!0,message:""}),e.response.data.errors.forEach(function(e){switch(e.param){case"project_name":p({isValid:!1,message:e.msg});break;case"project_technologies":g({isValid:!1,message:e.msg});break;case"project_description":O({isValid:!1,message:e.msg});break;case"project_thumbnail_filename":y({isValid:!1,message:e.msg});break;case"project_images":x({isValid:!1,message:e.msg});break;case"project_release_filename":T({isValid:!1,message:e.msg});break;case"project_release_url":q({isValid:!1,message:e.msg})}}))})}}))}function D(e){var t=Object(o.f)();Object(n.useEffect)(function(){d.project_is_updated&&t("/Projects"),!0===c&&t("/NotFound"),!0===_&&me()});var a=Object(n.useState)(!1),i=Object(h.a)(a,2),c=i[0],r=i[1],s=Object(n.useState)({project_name:"",project_technologies:"",project_description:"",project_thumbnail_filename:null,project_images:[],project_is_file_format:!0,project_release_filename:null,project_release_url:"",project_is_updated:!1}),m=Object(h.a)(s,2),d=m[0],p=m[1],j=Object(n.useState)(!1),f=Object(h.a)(j,2),_=f[0],g=f[1],b=Object(n.useState)(!1),v=Object(h.a)(b,2),E=v[0],O=v[1],N=Object(n.useState)(!1),V=Object(h.a)(N,2),P=V[0],y=V[1],S=Object(n.useState)(!1),k=Object(h.a)(S,2),F=k[0],x=k[1],M=Object(n.useState)({isValid:!0,message:""}),w=Object(h.a)(M,2),B=w[0],T=w[1],U=Object(n.useState)({isValid:!0,message:""}),D=Object(h.a)(U,2),A=D[0],q=D[1],H=Object(n.useState)({isValid:!0,message:""}),J=Object(h.a)(H,2),I=J[0],z=J[1],X=Object(n.useState)({isValid:!0,message:""}),Y=Object(h.a)(X,2),G=Y[0],K=Y[1],Q=Object(n.useState)({isValid:!0,message:""}),W=Object(h.a)(Q,2),Z=W[0],$=W[1],ee=Object(n.useState)({isValid:!0,message:""}),te=Object(h.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)({isValid:!0,message:""}),ie=Object(h.a)(le,2),ce=ie[0],re=ie[1],oe=Object(o.g)().id;Object(n.useEffect)(function(){se(oe)},[]);var se=function(e){C.get(e).then(function(e){p(e.data),g(!0),console.log("DATA FOUND")}).catch(function(e){r(!0),console.log(e)})},me=function(){O(!0),y(!0),!0===d.project_is_file_format&&x(!0),g(void 0)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(L,{mode:"update",project:d,onChangeProject_name:function(e){p(function(t){return Object(R.a)({},t,{project_name:e.target.value})})},onChangeProject_technologies:function(e){p(function(t){return Object(R.a)({},t,{project_technologies:e.target.value})})},onChangeProject_description:function(e){p(function(t){return Object(R.a)({},t,{project_description:e.target.value})})},onChangeProject_thumbnail_filename:function(e){p(function(t){return Object(R.a)({},t,{project_thumbnail_filename:e.target.files[0]})})},onChangeProject_images:function(e){p(function(t){return Object(R.a)({},t,{project_images:e.target.files})})},onChangeProject_is_file_format:function(e){var t=!0;t="true"===e.target.value,p(function(e){return Object(R.a)({},e,{project_is_file_format:t})})},onChangeProject_release_filename:function(e){p(function(t){return Object(R.a)({},t,{project_release_filename:e.target.files[0]})})},onChangeProject_release_url:function(e){p(function(t){return Object(R.a)({},t,{project_release_url:e.target.value})})},removeThumbnailPossibility:E,removeImagesPossibility:P,removeReleaseFilePossibility:F,onResetProject_images:function(){p(function(e){return Object(R.a)({},e,{project_images_updated:!0})}),y(!1),p(function(e){return Object(R.a)({},e,{project_images_updated:!0})})},onResetProject_thumbnail_filename:function(){p(function(e){return Object(R.a)({},e,{project_thumbnail_filename:null})}),O(!1)},onResetProject_release_filename:function(){p(function(e){return Object(R.a)({},e,{project_release_filename:null})}),x(!1)},nameValidation:B,technologiesValidation:A,descriptionValidation:I,thumbnailValidation:G,imagesValidation:Z,releaseFileValidation:ae,releaseUrlValidation:ce,saveProject:function(e){var t=new FormData;if(t.append("project_name",d.project_name),t.append("project_technologies",d.project_technologies),t.append("project_description",d.project_description),t.append("project_thumbnail_filename",d.project_thumbnail_filename),t.append("project_images_updated",d.project_images_updated),!0===d.project_images_updated)for(var a=0;a<d.project_images.length;a++)t.append("project_images",d.project_images[a]);t.append("project_is_file_format",d.project_is_file_format),t.append("project_release_filename",d.project_release_filename),t.append("project_release_url",d.project_release_url),C.update(oe,t).then(function(e){p(function(e){return Object(R.a)({},e,{project_is_updated:!0})})}).catch(function(e){422===e.response.status&&(T({isValid:!0,message:""}),q({isValid:!0,message:""}),z({isValid:!0,message:""}),K({isValid:!0,message:""}),ne({isValid:!0,message:""}),re({isValid:!0,message:""}),e.response.data.errors.forEach(function(e){switch(e.param){case"project_name":T({isValid:!1,message:e.msg});break;case"project_technologies":q({isValid:!1,message:e.msg});break;case"project_description":z({isValid:!1,message:e.msg});break;case"project_thumbnail_filename":K({isValid:!1,message:e.msg});break;case"project_images":$({isValid:!1,message:e.msg});break;case"project_release_filename":ne({isValid:!1,message:e.msg});break;case"project_release_url":re({isValid:!1,message:e.msg})}}))})}}))}var A=a(39),q=a.n(A);function H(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"wrapper-form"},l.a.createElement("img",{className:"not-found-image",src:q.a})))}c.a.createRoot(document.getElementById("root")).render(l.a.createElement(r.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",element:l.a.createElement(d,null)}),l.a.createElement(o.a,{path:"/Contact",element:l.a.createElement(E,null)}),l.a.createElement(o.a,{path:"/Projects",element:l.a.createElement(y,null)}),l.a.createElement(o.a,{path:"/Project/:id",element:l.a.createElement(x,null)}),l.a.createElement(o.a,{path:"/Project/create",element:l.a.createElement(U,null)}),l.a.createElement(o.a,{path:"/Project/update/:id",element:l.a.createElement(D,null)}),l.a.createElement(o.a,{path:"/404",element:l.a.createElement(H,null)}),l.a.createElement(o.a,{path:"*",element:l.a.createElement(H,null)}))))},22:function(e,t,a){e.exports=a.p+"static/media/delete.bf2628e4.png"},35:function(e,t,a){e.exports=a.p+"static/media/thunderParticle.5d153796.png"},39:function(e,t,a){e.exports=a.p+"static/media/404.9e40b6a3.png"},41:function(e,t,a){e.exports=a(100)},49:function(e,t,a){},63:function(e){e.exports={particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:409.6100827097281,color:"#ffffff",opacity:.17329657345411573,width:.6301693580149663},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}},[[41,3,1]]]);
//# sourceMappingURL=main.1a945173.chunk.js.map