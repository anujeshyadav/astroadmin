(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[220],{2035:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(14),r=t(15),s=t(17),l=t(16),c=t(1),o=t.n(c),i=t(1098),m=t(1099),u=t(1096),d=t(1097),f=t(1100),p=t(175),b=t(1103),h=t(804),g=t(803),E=t(118),v=t(811),O=t.n(v),j=t(57),y=t(799),N=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState({status:e.target.value})},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;E.a.post("/admin/editOrder/".concat(a),r.state).then((function(e){console.log(e),r.props.history.push("/app/ordermanage/allorderlist"),O()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e.response)}))},r.state={status:"Pending"},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(y.a,{breadCrumbTitle:"Edit Order",breadCrumbParent:"Home",breadCrumbActive:" Edit Order "}),o.a.createElement(i.a,null,o.a.createElement(m.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(u.a,{listTag:"div"},o.a.createElement(d.a,{href:"/",tag:"a"},"Home"),o.a.createElement(d.a,{active:!0},"Edit Order"))))),o.a.createElement(f.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Order")),o.a.createElement(m.a,null,o.a.createElement(j.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/ordermanage/allorderlist")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(i.a,null,o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:""},o.a.createElement(g.a,{className:"mb-1"},"Status"),o.a.createElement("select",{className:"form-control mb-2",onChange:function(a){return e.changeHandler(a)},id:"availability"},o.a.createElement("option",{value:"Pending"},"Pending"),o.a.createElement("option",{value:"Complete"},"Complete"),o.a.createElement("option",{value:"Refund"},"Refund"),o.a.createElement("option",{value:"Reject"},"Reject")))),o.a.createElement(i.a,null,o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(c.Component)},803:function(e,a,t){"use strict";var n=t(6),r=t(10),s=t(1),l=t.n(s),c=t(2),o=t.n(c),i=t(5),m=t.n(i),u=t(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,f=e.size,p=e.for,b=Object(r.a)(e,d),h=[];c.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var s,l=!n;if(Object(u.isObject)(r)){var c,o=l?"-":"-"+a+"-";s=g(l,a,r.size),h.push(Object(u.mapToCssModules)(m()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else s=g(l,a,r),h.push(s)}}));var E=Object(u.mapToCssModules)(m()(a,!!s&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:E}))};E.propTypes=b,E.defaultProps=h,a.a=E},804:function(e,a,t){"use strict";var n=t(6),r=t(10),s=t(12),l=t(13),c=t(1),o=t.n(c),i=t(2),m=t.n(i),u=t(5),d=t.n(u),f=t(4),p=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,p),m=Object(f.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:m}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=220.a5b5d661.chunk.js.map