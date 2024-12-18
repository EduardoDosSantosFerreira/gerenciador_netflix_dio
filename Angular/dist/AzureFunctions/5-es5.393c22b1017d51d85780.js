(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"Nps+":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var r=u("pMnS"),i=u("SVse"),s=u("iInd"),o=u("XNiG"),a=u("EY2u"),c=u("JIr8");class b{constructor(l,n,u,e,t){this.service=l,this.alertService=n,this.router=u,this.route=e,this.modalService=t,this.error$=new o.a}ngOnInit(){this.onRefresh()}handleError(){this.alertService.showAlertDanger("An error has occurred on List People")}onRefresh(){this.people$=this.service.list().pipe(Object(c.a)(l=>(this.handleError(),Object(a.b)())))}onEdit(l){this.router.navigate(["edit-person",l],{relativeTo:this.route})}onDelete(l){this.selectedPerson=l,this.deleteModalRef=this.modalService.show(this.deleteModal,{class:"modal-sm"})}onConfirmDelete(){this.service.remove(this.selectedPerson).subscribe(l=>{this.deleteModalRef.hide(),this.alertService.showAlertSuccess("The person has been removed."),setTimeout(()=>{this.onRefresh()},3e3)},l=>{this.alertService.showAlertDanger("An error has occured when you try to remove a person."),this.deleteModalRef.hide()})}onDeclineDelete(){this.deleteModalRef.hide()}}var d=u("IheW"),h=u("AytR"),p=u("IzEk");let m=(()=>{class l{constructor(l){this.http=l,this._API="".concat(h.a.API),this._KEY="".concat(h.a.KEY),this._headers=new d.g({"Ocp-Apim-Subscription-Key":this._KEY})}list(){return this.http.get(this._API+"ListPeople",{headers:this._headers})}getById(l){return this.http.get("".concat(this._API,"GetPerson?id=").concat(l),{headers:this._headers}).pipe(Object(p.a)(1))}create(l){return this.http.post(this._API+"CreatePerson",JSON.stringify(l),{headers:this._headers,responseType:"text"}).pipe(Object(p.a)(1))}update(l){return this.http.put(this._API+"EditPerson",JSON.stringify(l),{headers:this._headers,responseType:"text"}).pipe(Object(p.a)(1))}save(l){return l.rowKey?this.update(l):this.create(l)}remove(l){return this.http.delete("".concat(this._API,"DeletePerson?id=").concat(l),{headers:this._headers,responseType:"text"}).pipe(Object(p.a)(1))}}return l.ngInjectableDef=e.Hb({factory:function(){return new l(e.Lb(d.c))},token:l,providedIn:"root"}),l})();var g=u("9sI6"),f=u("LqlI"),v=function(l){return l.DANGER="danger",l.SUCCESS="success",l}({});let y=(()=>{class l{constructor(l){this.modalService=l}showAlert(l,n,u){const e=this.modalService.show(g.a);e.content.type=n,e.content.message=l,u&&setTimeout(()=>e.hide(),u)}showAlertDanger(l){this.showAlert(l,v.DANGER)}showAlertSuccess(l){this.showAlert(l,v.SUCCESS,3e3)}}return l.ngInjectableDef=e.Hb({factory:function(){return new l(e.Lb(f.b))},token:l,providedIn:"root"}),l})();var x=e.lb({encapsulation:0,styles:[[""]],data:{}});function w(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.nb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Db(2,null,["",""])),(l()(),e.nb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Db(4,null,["",""])),(l()(),e.nb(5,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.nb(6,0,null,null,1,"a",[["class","edit"],["data-toggle","modal"],["href","javascript:(0);"]],null,null,null,null,null)),(l()(),e.nb(7,0,null,null,0,"i",[["class","glyphicon glyphicon-pencil"],["data-toggle","tooltip"],["title","Edit"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onEdit(l.context.$implicit.rowKey)&&e),e}),null,null)),(l()(),e.nb(8,0,null,null,1,"a",[["class","delete"],["data-toggle","modal"],["href","javascript:(0);"]],null,null,null,null,null)),(l()(),e.nb(9,0,null,null,0,"i",[["class","glyphicon glyphicon-remove"],["data-toggle","tooltip"],["title","Delete"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDelete(l.context.$implicit.rowKey)&&e),e}),null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.name),l(n,4,0,n.context.$implicit.email)}))}function D(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,11,"table",[["class","table table-striped table-hover"]],null,null,null,null,null)),(l()(),e.nb(1,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.nb(2,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.nb(3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Name"])),(l()(),e.nb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Email"])),(l()(),e.nb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Actions"])),(l()(),e.nb(9,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.cb(16777216,null,null,1,null,w)),e.mb(11,278528,null,0,i.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.context.ngIf)}),null)}function I(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Loading..."]))],null,null)}function C(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,7,"div",[["class","modal-body text-center"]],null,null,null,null,null)),(l()(),e.nb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Do you want to confirm?"])),(l()(),e.nb(3,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onConfirmDelete()&&e),e}),null,null)),(l()(),e.Db(-1,null,["Sim"])),(l()(),e.Db(-1,null,[" \xa0 "])),(l()(),e.nb(6,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDeclineDelete()&&e),e}),null,null)),(l()(),e.Db(-1,null,["N\xe3o"]))],null,null)}function k(l){return e.Fb(0,[e.Bb(671088640,1,{deleteModal:0}),(l()(),e.nb(1,0,null,null,18,"div",[["class","table-wrapper"]],null,null,null,null,null)),(l()(),e.nb(2,0,null,null,13,"div",[["class","table-title"]],null,null,null,null,null)),(l()(),e.nb(3,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.nb(4,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e.nb(5,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Manage "])),(l()(),e.nb(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["People"])),(l()(),e.nb(9,0,null,null,6,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e.nb(10,0,null,null,5,"a",[["class","btn btn-success"],["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.xb(l,11).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.mb(11,671744,null,0,s.n,[s.k,s.a,i.h],{routerLink:[0,"routerLink"]},null),e.yb(12,1),(l()(),e.nb(13,0,null,null,0,"i",[["class","glyphicon glyphicon-plus"]],null,null,null,null,null)),(l()(),e.nb(14,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Add New Person"])),(l()(),e.cb(16777216,null,null,2,null,D)),e.mb(17,16384,null,0,i.j,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.zb(131072,i.b,[e.h]),(l()(),e.cb(0,[["loading",2]],null,0,null,I)),(l()(),e.cb(0,[[1,2],["deleteModal",2]],null,0,null,C))],(function(l,n){var u=n.component,t=l(n,12,0,"new-person");l(n,11,0,t),l(n,17,0,e.Eb(n,17,0,e.xb(n,18).transform(u.people$)),e.xb(n,19))}),(function(l,n){l(n,10,0,e.xb(n,11).target,e.xb(n,11).href)}))}var A=e.jb("app-list-people",b,(function(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"app-list-people",[],null,null,null,k,x)),e.mb(1,114688,null,0,b,[m,y,s.k,s.a,f.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),E=u("s7LF");class S{constructor(l,n,u,e,t){this.fb=l,this.service=n,this.modal=u,this.location=e,this.route=t,this.submited=!1}ngOnInit(){const l=this.route.snapshot.data.person;this.form=this.fb.group({rowKey:[l.rowKey],partitionKey:[l.partitionKey],name:[l.name,[E.m.required,E.m.minLength(3)]],email:[l.email,[E.m.required,E.m.minLength(3)]]})}hasError(l){if(1==this.submited)return this.form.get(l).errors}onSubmit(){if(this.submited=!0,this.form.valid){let l="The new person was created.",n="An error has occurred when you create a new person.";this.form.value.rowKey&&(l="The person was updated.",n="An error has occurred when you update a person."),this.service.save(this.form.value).subscribe(n=>{this.modal.showAlertSuccess(l),setTimeout(()=>{this.location.back()},3e3)},l=>this.modal.showAlertDanger(n))}}onCancel(){this.submited=!1,this.form.reset()}}var P=e.lb({encapsulation:0,styles:[[".table-wrapper[_ngcontent-%COMP%]{padding:0 25px!important;border-radius:0!important;box-shadow:0 0 0!important}"]],data:{}});function j(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" This field is required! "]))],null,null)}function _(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" This field must be at least 3 characters! "]))],null,null)}function T(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" This field is required! "]))],null,null)}function M(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" This field must be at least 3 characters! "]))],null,null)}function K(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,45,"form",[["class","needs-validation"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,2).onReset()&&t),t}),null,null)),e.mb(1,16384,null,0,E.q,[],null,null),e.mb(2,540672,null,0,E.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ab(2048,null,E.b,null,[E.f]),e.mb(4,16384,null,0,E.k,[[4,E.b]],null,null),(l()(),e.nb(5,0,null,null,7,"div",[["class","table-wrapper"]],null,null,null,null,null)),(l()(),e.nb(6,0,null,null,6,"div",[["class","table-title"]],null,null,null,null,null)),(l()(),e.nb(7,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.nb(8,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e.nb(9,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Manage "])),(l()(),e.nb(11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["People"])),(l()(),e.nb(13,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.nb(14,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["Name: "])),(l()(),e.nb(16,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.xb(l,17)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.xb(l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.xb(l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.xb(l,17)._compositionEnd(u.target.value)&&t),t}),null,null)),e.mb(17,16384,null,0,E.c,[e.B,e.k,[2,E.a]],null,null),e.Ab(1024,null,E.h,(function(l){return[l]}),[E.c]),e.mb(19,671744,null,0,E.e,[[3,E.b],[8,null],[8,null],[6,E.h],[2,E.p]],{name:[0,"name"]},null),e.Ab(2048,null,E.i,null,[E.e]),e.mb(21,16384,null,0,E.j,[[4,E.i]],null,null),(l()(),e.cb(16777216,null,null,1,null,j)),e.mb(23,16384,null,0,i.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(16777216,null,null,1,null,_)),e.mb(25,16384,null,0,i.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.nb(26,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.nb(27,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["E-mail: "])),(l()(),e.nb(29,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["id","email"],["placeholder","E-mail"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.xb(l,30)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.xb(l,30).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.xb(l,30)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.xb(l,30)._compositionEnd(u.target.value)&&t),t}),null,null)),e.mb(30,16384,null,0,E.c,[e.B,e.k,[2,E.a]],null,null),e.Ab(1024,null,E.h,(function(l){return[l]}),[E.c]),e.mb(32,671744,null,0,E.e,[[3,E.b],[8,null],[8,null],[6,E.h],[2,E.p]],{name:[0,"name"]},null),e.Ab(2048,null,E.i,null,[E.e]),e.mb(34,16384,null,0,E.j,[[4,E.i]],null,null),(l()(),e.cb(16777216,null,null,1,null,T)),e.mb(36,16384,null,0,i.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(16777216,null,null,1,null,M)),e.mb(38,16384,null,0,i.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.nb(39,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.nb(40,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),e.nb(41,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),null,null)),(l()(),e.Db(-1,null,["Save"])),(l()(),e.Db(-1,null,[" \xa0 "])),(l()(),e.nb(44,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCancel()&&e),e}),null,null)),(l()(),e.Db(-1,null,["Cancel"]))],(function(l,n){var u=n.component;l(n,2,0,u.form),l(n,19,0,"name"),l(n,23,0,u.hasError("name")&&u.hasError("name").required),l(n,25,0,u.hasError("name")&&u.hasError("name").minlength),l(n,32,0,"email"),l(n,36,0,u.hasError("email")&&u.hasError("email").required),l(n,38,0,u.hasError("email")&&u.hasError("email").minlength)}),(function(l,n){l(n,0,0,e.xb(n,4).ngClassUntouched,e.xb(n,4).ngClassTouched,e.xb(n,4).ngClassPristine,e.xb(n,4).ngClassDirty,e.xb(n,4).ngClassValid,e.xb(n,4).ngClassInvalid,e.xb(n,4).ngClassPending),l(n,16,0,e.xb(n,21).ngClassUntouched,e.xb(n,21).ngClassTouched,e.xb(n,21).ngClassPristine,e.xb(n,21).ngClassDirty,e.xb(n,21).ngClassValid,e.xb(n,21).ngClassInvalid,e.xb(n,21).ngClassPending),l(n,29,0,e.xb(n,34).ngClassUntouched,e.xb(n,34).ngClassTouched,e.xb(n,34).ngClassPristine,e.xb(n,34).ngClassDirty,e.xb(n,34).ngClassValid,e.xb(n,34).ngClassInvalid,e.xb(n,34).ngClassPending)}))}var F=e.jb("app-form-people",S,(function(l){return e.Fb(0,[(l()(),e.nb(0,0,null,null,1,"app-form-people",[],null,null,null,K,P)),e.mb(1,114688,null,0,S,[E.d,m,y,i.g,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),O=u("LRne");let N=(()=>{class l{constructor(l){this.service=l}resolve(l,n){return l.params&&l.params.id?this.service.getById(l.params.id):Object(O.a)({rowKey:null,partitionKey:null,name:null,email:null})}}return l.ngInjectableDef=e.Hb({factory:function(){return new l(e.Lb(m))},token:l,providedIn:"root"}),l})();class L{}u.d(n,"PeopleModuleNgFactory",(function(){return J}));var J=e.kb(t,[],(function(l){return e.ub([e.vb(512,e.j,e.X,[[8,[r.a,A,F]],[3,e.j],e.v]),e.vb(4608,i.l,i.k,[e.s,[2,i.r]]),e.vb(4608,E.d,E.d,[]),e.vb(4608,E.o,E.o,[]),e.vb(1073742336,i.c,i.c,[]),e.vb(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),e.vb(1073742336,L,L,[]),e.vb(1073742336,E.n,E.n,[]),e.vb(1073742336,E.l,E.l,[]),e.vb(1073742336,t,t,[]),e.vb(1024,s.i,(function(){return[[{path:"",component:b},{path:"new-person",component:S,resolve:{person:N}},{path:"edit-person/:id",component:S,resolve:{person:N}}]]}),[])])}))}}]);