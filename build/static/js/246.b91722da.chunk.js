(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2044:function(e,t,a){"use strict";a.r(t);var n=a(51),s=a(13),i=a(14),l=a(16),c=a(15),r=a(0),o=a.n(r),m=a(1095),u=a(1093),d=a(1094),p=a(173),g=a(1098),h=a(808),f=a(807),b=a(783),v=a(797),y=a(117),E=a(806),C=a.n(E),N=a(56),O=a(794),x=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).changeHandler1=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){e.preventDefault(),y.a.post("/admin/add_Comision",i.state).then((function(e){console.log(e),C()("Success!","Submitted SuccessFull!","success"),i.props.history.push("/app/packagemanager/commission")})).catch((function(e){console.log(e)}))},i.state={product:"",comision_name:"",comision_rate:"",status:""},i.state={categoryList:[],productList:[]},i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;y.a.get("/user/productbycategory/".concat(this.state.category)).then((function(t){console.log(t.data.data),e.setState({productList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.state.category),y.a.get("/admin/getproductcalegory").then((function(t){console.log(t.data.data),e.setState({categoryList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a=this;return o.a.createElement("div",null,o.a.createElement(O.a,{breadCrumbTitle:"Add Commission",breadCrumbParent:"Home",breadCrumbActive:"Add Commission "}),o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Commission")),o.a.createElement(d.a,null,o.a.createElement(N.b,{render:function(e){var t=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/packagemanager/commission")}},"Back")}}))),o.a.createElement(g.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},o.a.createElement(f.a,null,"Category Name"),o.a.createElement(b.a,{required:!0,type:"select",name:"category",placeholder:"Enter Title",value:this.state.category,onChange:this.changeHandler},o.a.createElement("option",null,"Select....."),null===(e=this.state.categoryList)||void 0===e?void 0:e.map((function(e){return o.a.createElement("option",{key:e._id,value:e._id},e.name)})))),o.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},o.a.createElement(f.a,null,"Product Name"),o.a.createElement(b.a,{required:!0,type:"select",name:"product",placeholder:"Enter Title",value:this.state.product,onChange:this.changeHandler},o.a.createElement("option",null,"Select....."),null===(t=this.state.productList)||void 0===t?void 0:t.map((function(e){return o.a.createElement("option",{key:e._id,value:e._id},e.productname)})))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(f.a,null,"Commission Name"),o.a.createElement(v.a,{required:!0,type:"text",name:"comision_name",placeholder:"Commission Name",value:this.state.comision_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(f.a,null,"Commission Rate"),o.a.createElement(v.a,{required:!0,type:"text",name:"comision_rate",placeholder:"Enter Commision Rate",value:this.state.comision_rate,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(f.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(e){return a.changeHandler1(e)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(o.a.Component);t.default=x},797:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(11),l=a(12),c=a(0),r=a.n(c),o=a(1),m=a.n(o),u=a(4),d=a.n(u),p=a(3),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,f=e.innerRef,b=Object(s.a)(e,g),v=["radio","checkbox"].indexOf(i)>-1,y=new RegExp("\\D","g"),E=m||("select"===i||"textarea"===i?i:"input"),C="form-control";h?(C+="-plaintext",E=m||"input"):"file"===i?C+="-file":"range"===i?C+="-range":v&&(C=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var N=Object(p.mapToCssModules)(d()(t,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,C),a);return("input"===E||m&&"function"===typeof m)&&(b.type=i),b.children&&!h&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),r.a.createElement(E,Object(n.a)({},b,{ref:f,className:N,"aria-invalid":o}))},t}(r.a.Component);f.propTypes=h,f.defaultProps={type:"text"},t.a=f}}]);
//# sourceMappingURL=246.b91722da.chunk.js.map