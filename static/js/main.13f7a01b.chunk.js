(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(t,e,n){t.exports=n.p+"static/media/logo.5857ad01.png"},185:function(t,e,n){t.exports=n(378)},190:function(t,e,n){},241:function(t,e){},242:function(t,e){},243:function(t,e){},261:function(t,e){},363:function(t,e){},377:function(t,e,n){},378:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=(n(190),n(380)),l=n(174),s=n.n(l),u=function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{alt:"",src:s.a,width:100})," Convert css style to flutter style"),r.a.createElement("div",null,"Source code is here",r.a.createElement("a",{style:{padding:6},href:"https://github.com/flutterkit/c2f",rel:"noopener noreferrer",target:"_blank"},"https://github.com/flutterkit/c2f")))},d=n(17),h=n.n(d),f=n(42),p=n(6),g=n(7),v=n(39),m=n(38),b=n(41),k=n(382),y=n(383),x=n(379),w=n(175);n(192),n(193),n(194),n(195),n(196);var C=function(t){function e(){return Object(p.a)(this,e),Object(v.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(g.a)(e,[{key:"onChange",value:function(t,e,n){this.props.onChange&&this.props.onChange(n)}},{key:"render",value:function(){return r.a.createElement(w.UnControlled,{className:"code-mirror",value:this.props.value||"",options:Object.assign({theme:"monokai",tabSize:2,lineNumbers:!0},this.props.options),onChange:this.onChange.bind(this)})}}]),e}(r.a.Component),E=function(t){function e(){return Object(p.a)(this,e),Object(v.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,null)}}]),e}(r.a.Component),O=n(381);O.a.config({duration:1,maxCount:3});var S=!0,V=function(t,e){S?S=!1:"success"===t?O.a.success(e):O.a.error(e)},j={success:function(t){V("success",t)},error:function(t){V("error",t)}},T=n(67),_=n.n(T),R=n(68),B=n.n(R),N=function(){function t(){Object(p.a)(this,t),this.decls=[]}return Object(g.a)(t,[{key:"add",value:function(t){var e=t.key,n=t.val,a=t.valueList,r=void 0===a?null:a,o=t.data,i=void 0===o?null:o;this.decls.push({data:i,valueList:r,key:e,val:n})}},{key:"isNull",value:function(){return 0===this.decls.length}},{key:"forEach",value:function(t){this.decls.forEach(function(e,n){return t(e,n)})}},{key:"merge",value:function(t){for(var e in t)this.add({key:e,val:t[e]})}},{key:"remove",value:function(t){for(var e=this.decls.length-1;e>=0;e--)this.decls[e].key===t&&this.decls.splice(e,1)}},{key:"getVal",value:function(t,e){var n=null;return this.decls.forEach(function(e){e.key===t&&(n=e.val)}),n||e}},{key:"clone",value:function(){var e=new t;return e.decls=B()(this.decls),e}}]),t}(),A=n(115),D=n.n(A),F=function(t){if(!t)return!0;if("string"===typeof t){if(""===t.trim())return!0;if("null"===t)return!0;if("none"===t)return!0;if("inhert"===t)return!0}return!1},z={background:["background-color","background-image","background-position","background-size","background-repeat"],"border-radius":["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],"text-decoration":["text-decoration-line","text-decoration-style","text-decoration-color"],border:["border-width","border-style","border-color"],padding:["padding-top","padding-right","padding-bottom","padding-left"],margin:["margin-top","margin-right","margin-bottom","margin-left"],font:["font-style","font-weight","font-size","font-family"]},H=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=t.getVal(e);return a&&(D()("#avator").removeClass().removeAttr("style").css(e,a),n.forEach(function(e){return $(t,e)}),t.remove(e)),t},$=function(t,e){var n=P(t,e);F(n)||t.add({key:e,val:n})},P=function(t,e){var n=D()("#avator").css(e);return F(n)&&(n=t.getVal(e)),n},I=function(t){if(!t)return null;var e=t.clone();for(var n in z)e=H(e,n,z[n]);return e},L=function(t){return t?new Promise(function(e,n){var a=new N;t.walkDecls(function(t){var e=_.a.list.space(t.value);a.add({key:t.prop,val:t.value,data:t,valueList:e})}),setTimeout(function(t){t=I(t),e(t)},80,a)}):null},W=n(69),U=n.n(W),Z="<-prop->",M="<-children->",J="<-decoration->",G="\nnew Container( \n  ".concat(M,"\n  ").concat(Z,"\n  ").concat(J,"\n),\n").trim(),Q='\nnew Text(\n  "Hello World",\n  style: new TextStyle(\n    '.concat(Z,"\n  ),\n),\n").trim(),q=("\nnew Center(\n  ".concat(M,"\n  ").concat(Z,"\n),\n").trim(),"\nnew Positioned(\n  ".concat(M,"\n  ").concat(Z,"\n),")),K="\nnew Opacity(\n  ".concat(M,"\n  ").concat(Z,"\n),"),X=function(){function t(e){Object(p.a)(this,t),this.lines=e||[]}return Object(g.a)(t,[{key:"add",value:function(t,e){var n=this.getIndexOf(t);n>-1?this.lines[n]=e:this.lines.push(e),this.enabled=!0}},{key:"isNull",value:function(){return 0===this.lines.length}},{key:"getIndexOf",value:function(t){for(var e=0;e<this.lines.length;e++)if(this.lines[e].indexOf("".concat(t,":"))>-1)return e;return-1}},{key:"getTabs",value:function(t){for(var e="",n=0;n<t;n++)e+="<-tab->";return e}},{key:"replaceTag",value:function(t,e){for(var n=B()(this.lines),a=0;a<this.lines.length;a++){this.lines[a].indexOf(t)>-1&&n.splice(a,0,e)}this.lines=n}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t)return this.lines.join("\n");var e=this.getTabs(t),n=this.lines.join("\n").split(/\n/g);return n.forEach(function(t,a){return n[a]=e+t}),n.join("\n")}}]),t}(),Y=n(180),tt=n.n(Y),et=n(49),nt=n.n(et),at=n(112),rt=n.n(at),ot=function(t){if(nt()(t))return t;var e=/([0-9]+)[a-zA-Z%]/gi.exec("".concat(t,"c"));return e&&e.length>=2?(t=e[1],t=nt()(t)?t:parseFloat(t)):rt()(t)},it=function(t){return nt()(t)?t:/^([0-9]+)$/gi.test(t+="")?ot(t):/([0-9]+)%$/gi.test(t)?(t=ot(t)/100,"_parent_ * ".concat(t," // percentage of parent width. like 'MediaQuery.of(context).size.width * 0.2'")):/([0-9]+)(px|dpx)$/gi.test(t)?(t=ot(t),t=tt()(t)?"".concat(t,".0"):"".concat(t)):/([0-9]+)em$/gi.test(t)?(t=ot(t),"_parent_font_width_ * ".concat(t," // https://www.w3.org/Style/Examples/007/units")):/([0-9]+)rem$/gi.test(t)?(t=ot(t),"_root_font_width_ * ".concat(t," // https://www.w3.org/Style/Examples/007/units")):/([0-9]+)pt$/gi.test(t)?(t=ot(t),"".concat(t," * 72 / _dpi_ // pt = px * dpi / 72")):0},ct=function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},lt=n(181),st=n.n(lt),ut=function(t){try{var e=st()(t).hex().replace(/^#/,"0x");return"Color(".concat(e,"00)")}catch(a){var n=(t+"").replace(/^#/,"0x");return"Color(".concat(n,"00)")}},dt=function(t,e){var n=e.getVal("border-width","1px"),a=e.getVal("border-color","blue"),r=e.getVal("border-style","solid");return n=it(n),a=ut(a),"\nnew Border.all(\n  color: ".concat(a,",\n  width: ").concat(n,",\n  style: BorderStyle.").concat(r,"\n)").trim()},ht=function(t){var e=t.trim().split(" ");if(e.length>4){for(var n="",a=3;a<e.length;a++)n+=e[a];(e=e.slice(0,4))[3]=n}return e},ft=function(t){t=ht(t);var e=it(t[0]),n=it(t[0]),a="Offset(".concat(e,", ").concat(n,")"),r=ut(t[3]||"#000"),o=it(t[2]||10),i="\n  BoxShadow (\n    color: ".concat(r,",\n    offset: ").concat(a,",\n    blurRadius: ").concat(o,",\n  ),");return"\n<BoxShadow>[\n".concat(i,"\n]").trim()},pt=function(t){return 3.1415927*t/180},gt=function(t,e){for(var n=0;n<e.length;n++)if(e[n].indexOf(t)>-1)return e[n];return null},vt=function(t,e){var n=/[a-zA-Z]+\((.*)\)/.exec(e);if(n&&n.length>=2){var a=n[1],r=a.split(","),o=[];if("rotate"===t){var i=a.toString().replace(/deg$/g,"");i=pt(i),i=U.a.floor(i,3),e=e.replace(a,i)}else{r.forEach(function(t){t=ot(t),o.push(t)});var c=o.join(",");e=e.replace("3d","").replace(a,c)}}return e},mt=function(t){t=t.split(" ");var e=gt("skew",t),n=gt("scale",t),a=gt("rotate",t),r=gt("translate",t),o="";return e=vt("skew",e),n=vt("scale",n),a=vt("rotate",a),r=vt("translate",r),e&&(o+="".concat(e,"..")),n&&(o+="".concat(n,"..")),a&&(o+="".concat(a,"..")),r&&(o+="".concat(r,"..")),o=o.replace(/\.\.$/g,""),"Matrix4.".concat(o)},bt=function(t){return"bold"===t||"normal"===t?"FontWeight.".concat(t):/^[1-9]00/.test(t+"")?"FontWeight.w".concat(t):"FontWeight.normal"},kt=function(t,e){var n="",a=e.getVal("max-width"),r=e.getVal("min-width"),o=e.getVal("max-height"),i=e.getVal("min-height");return a&&(n+="maxWidth: ".concat(it(a))),r&&(n+=", minWidth: ".concat(it(r))),o&&(n+=", maxHeight: ".concat(it(o))),i&&(n+=", minHeight: ".concat(it(i))),"BoxConstraints(".concat(n,")")},yt=function(t,e){var n=e.getVal("border-top-left-radius",0),a=e.getVal("border-top-right-radius",0),r=e.getVal("border-bottom-right-radius",0),o=e.getVal("border-bottom-left-radius",0);if(n===a&&a===r&&r===o)return"50%"===n?"BoxShape.circle":"BorderRadius.all(const Radius.circular(".concat(it(n),"),)");var i=it(t[0]),c=it(t[1]),l=it(t[2]),s=it(t[3]);return i="topLeft: Radius.circular(".concat(i,")"),c="topRight: Radius.circular(".concat(c,")"),l="bottomRight: Radius.circular(".concat(l,")"),s="bottomLeft: Radius.circular(".concat(s,")"),"BorderRadius.only(".concat(i,", ").concat(c,", ").concat(l,", ").concat(s,")")},xt=function(t,e,n){var a=n.getVal("".concat(t,"-top"),0),r=n.getVal("".concat(t,"-right"),0),o=n.getVal("".concat(t,"-bottom"),0),i=n.getVal("".concat(t,"-left"),0);return a===r&&r===o&&o===i?(a=it(a),"const EdgeInsets.all(".concat(a,")")):(a=it(a),r=it(r),o=it(o),i=it(i),"const EdgeInsets.only(top: ".concat(a,", right: ").concat(r,", bottom: ").concat(o,", left: ").concat(i,")"))},wt=function(t,e){t=(t+="").replace(/^url\(/g,"").replace(/\)$/g,"");var n=e.getVal("background-size","cover"),a=e.getVal("background-repeat","no-repeat");return"\nnew DecorationImage(\n  image: new ExactAssetImage('".concat(t,"'),\n  fit: BoxFit.").concat(n,",\n  repeat: ImageRepeat.").concat(a,",\n)").trim()},Ct=function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){if(t===(e+1<1||arguments.length<=e+1?void 0:arguments[e+1]))return!0;if(Et(t,e+1<1||arguments.length<=e+1?void 0:arguments[e+1]))return!0}return!1},Et=function(t,e){var n=z[e];if(!n)return null;for(var a=0;a<n.length;a++)if(t===n[a])return e;return null},Ot=function(t){return"letter-spacing"===t?ct(t):/^font-[a-zA-Z]+/gi.test(t)||/^text-[a-zA-Z]+/gi.test(t)?ct(t):/^text-decoration.*/gi.test(t)?ct(t.replace(/^text-/gi,"")):null},St=function(t,e,n){var a={key:null,val:e};switch(!0){case Ct(t,"background-image"):a.key="image",a.val=wt(e,n);break;case Ct(t,"background-color","color"):a.val=ut(e),a.key="rgba(0, 0, 0, 0)"===e?null:"color";break;case Ct(t,"width","height"):case Ct(t,"top","right","left","bottom"):a.key=t,a.val=it(e);break;case Ct(t,"max-width","min-width"):case Ct(t,"max-height","min-height"):a.key="constraints",a.val=kt(e,n);break;case Ct(t,"text-decoration-line"):a.val="TextDecoration.".concat(ct(e));break;case Ct(t,"text-decoration-color"):a.val=ut(e);break;case Ct(t,"text-decoration-style"):a.val="TextDecorationStyle.".concat(e);break;case Ct(t,"text-align"):a.val="TextAlign.".concat(e);break;case Ct(t,"font-style"):a.val="FontStyle.".concat(e);break;case Ct(t,"font-weight"):a.val=bt(e);break;case Ct(t,"font-size"):case Ct(t,"letter-spacing"):a.val=it(e);break;case Ct(t,"padding","margin"):var r=t.replace(/-[a-zA-Z]+$/,"");a.key=r,a.val=xt(r,e,n);break;case Ct(t,"align-items"):a.key="alignment",a.val="Alignment.".concat(e);break;case Ct(t,"transform"):a.key="transform",a.val=mt(e);break;case Ct(t,"border-radius"):a.val=yt(e,n),a.key="BoxShape.circle"===a.val?"shape":"borderRadius";break;case Ct(t,"border"):a.key="border",a.val=dt(e,n);break;case Ct(t,"box-shadow"):a.key="boxShadow",a.val=ft(e);break;case Ct(t,"opacity"):a.key=t,a.val=e}var o=Ot(t);return o&&(a.key=o),a},Vt=function(){function t(e){switch(Object(p.a)(this,t),this.children=[],this.type=e,this.decls=null,this.parent=null,this.id=U.a.uuid(),e){case"container":this.template=G;break;case"position":this.template=q;break;case"opacity":this.template=K;break;case"text":this.template=Q;break;default:this.template=G}this.codeString="",this.prop=new X,this.decoration=new X,this.codelines=new X(this.template.split(/\n/g))}return Object(g.a)(t,[{key:"addChild",value:function(t){this.children.indexOf(t)<0&&(this.children.push(t),t.parent=this)}},{key:"addChildTo",value:function(t){this.root=t,function e(n){n.parent?e(n.parent):t.addChild(n)}(this)}},{key:"getRoot",value:function(){return this.root||this}},{key:"getDepth",value:function(){var t=0;return function e(n){n.parent&&(t++,e(n.parent))}(this),t}},{key:"setProp",value:function(t,e){var n=St(t,e,this.decls),a=n.key,r=n.val;if(a){var o="text"===this.type?"    ".concat(a,": ").concat(r,","):"".concat(a,": ").concat(r,",");this.prop.add(a,o)}}},{key:"setDecoration",value:function(t,e){var n=St(t,e,this.decls),a=n.key,r=n.val;if(a){var o="".concat(a,": ").concat(r,",");this.decoration.add(a,o)}}},{key:"clearAllPseudoTags",value:function(){this.codeString=this.codeString.replace(new RegExp(M,"g"),"").replace(new RegExp("<-class->","g"),"").replace(new RegExp(Z,"g"),"").replace(new RegExp(J,"g"),"").replace(new RegExp("<-tab->","g"),"  ")}},{key:"clearBlankLines",value:function(){for(var t=this.codeString.split(/\n/g),e=t.length-1;e>=0;e--){t[e].trim()||t.splice(e,1)}this.codeString=t.join("\n")}},{key:"selfToCodeString",value:function(){var t=this.getDepth();this.codeString=this.codelines.toString(t)}},{key:"childToCodeString",value:function(t){var e=t.toString().trim();this.replaceTag(M,"  child: ".concat(e))}},{key:"propToCodeString",value:function(){this.prop.isNull()||this.replaceTag(Z,this.prop.toString(1))}},{key:"decorationToCodeString",value:function(){if(!this.decoration.isNull()){var t=this.decoration.toString(2);t="  decoration: BoxDecoration(\n".concat(t,"\n  )"),this.replaceTag(J,t)}}},{key:"replaceTag",value:function(t,e){this.codelines.replaceTag(t,e)}},{key:"toString",value:function(){if(this.children.length>0)if(1===this.children.length){var t=this.children[0];this.childToCodeString(t)}else for(var e=0;e<this.children;e++);return this.propToCodeString(),this.decorationToCodeString(),this.selfToCodeString(),this.clearAllPseudoTags(),this.clearBlankLines(),this.codeString||""}}]),t}(),jt=function(t){return 0===t.indexOf("font")||(0===t.indexOf("text-")||("color"===t||"letter-spacing"===t))},Tt=function(t){return"background-image"===t||"background-color"===t||"border"===t||"box-shadow"===t||t.indexOf("border")>=0},_t=function(t,e,n){var a=n.getVal("position");return!(("absolute"!==a&&"fixed"!==a||"top"!==t&&"left"!==t&&"right"!==t&&"bottom"!==t)&&("position"!==t||"absolute"!==e&&"fixed"!==e))},Rt=function(t,e,n){return"opacity"===t},Bt=function(t){if(!t||t.isNull())return"";var e,n={};return(e=new Vt("container")).decls=t,t.forEach(function(a,r){var o=a.key,i=a.val;if(_t(o,i,t)){n["_parent.position"]||(n["_parent.position"]=new Vt("position"));var c=n["_parent.position"];c.setProp(o,i),e.addChildTo(c)}else if(Rt(o,i,t)){n["_parent.opacity"]||(n["_parent.opacity"]=new Vt("opacity"));var l=n["_parent.opacity"];l.setProp(o,i),e.addChildTo(l)}else if(jt(o)){n["_child.text"]||(n["_child.text"]=new Vt("text"));var s=n["_child.text"];s.setProp(o,i),e.addChild(s)}else Tt(o)?e.setDecoration(o,i):e.setProp(o,i)}),e.getRoot().toString()},Nt=function(){var t=Object(f.a)(h.a.mark(function t(e){var a,r,o,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_()([n(343)({})]).process(e);case 3:return a=t.sent,t.next=6,L(a.root);case 6:return r=t.sent,""!==(o=Bt(r))&&j.success("Has been converted successfully!"),t.abrupt("return",o);case 12:return t.prev=12,t.t0=t.catch(0),i=At(t.t0),j.error(i),t.abrupt("return","");case 17:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e){return t.apply(this,arguments)}}(),At=function(t){var e;return"object"===typeof t?(t.message&&(e="C2F - Message: "+t.message,console.log("\n ".concat(e))),t.stack&&(e=e||"C2F - Convert css 2 flutter error !",console.log("\nC2F - Stacktrace:"),console.log("===================="),console.log(t.stack))):(e="C2F - Convert css 2 flutter error !",console.log("C2F - dumpError :: argument is not an object")),e},Dt=Nt,Ft=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(v.a)(this,Object(m.a)(e).call(this,t))).cssOptions={mode:"css"},n.dartOptions={mode:"dart"},n.cssVal="",n.dartVal="",n}return Object(b.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){var t=Object(f.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.cssVal="\nbackground-color: #e0e0e0;\nwidth: 320px;\nheight: 240px;\nborder:5px solid red;\nfont: 900 24px Georgia;\npadding: 2px 10px;\nmargin: 3px;\nborder-radius: 10px;\ntext-decoration: underline wavy red;\n    ".trim(),t.next=3,this.convertAndUpdateDartCoder();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"clearBtnClickHandler",value:function(t){this.updateCoder({cssVal:"",dartVal:""}),j.success("Cleared successfully")}},{key:"convertBtnClickHandler",value:function(){var t=Object(f.a)(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.convertAndUpdateDartCoder();case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"codeChangeHadler",value:function(t){this.cssVal=t}},{key:"convertAndUpdateDartCoder",value:function(){var t=Object(f.a)(h.a.mark(function t(){var e;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Dt(this.cssVal);case 2:e=t.sent,this.updateCoder({dartVal:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"updateCoder",value:function(t){var e=t.cssVal,n=t.dartVal;void 0!==n&&null!==n&&(this.dartVal=n),void 0!==e&&null!==e&&(this.cssVal=e),this.setState({})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(k.a,null,r.a.createElement(y.a,{span:12,className:"coder-con"},r.a.createElement("div",{className:"coder-title"},"Css"),r.a.createElement(C,{options:this.cssOptions,value:this.cssVal,onChange:this.codeChangeHadler.bind(this)})),r.a.createElement(y.a,{span:12,className:"coder-con"},r.a.createElement("div",{className:"coder-title"},"Flutter"),r.a.createElement(C,{options:this.dartOptions,value:this.dartVal}))),r.a.createElement(k.a,{className:"btns"},r.a.createElement(x.a,{type:"danger",onClick:this.clearBtnClickHandler.bind(this)},"Clear"),r.a.createElement(x.a,{type:"primary",onClick:this.convertBtnClickHandler.bind(this)},"Convert")))}}]),e}(r.a.Component),zt=(n(377),c.a.Content);var Ht=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(zt,null,r.a.createElement(u,null),r.a.createElement(Ft,null),r.a.createElement("div",{id:"avator"}))))};i.a.render(r.a.createElement(Ht,null),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.13f7a01b.chunk.js.map