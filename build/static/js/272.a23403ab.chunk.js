(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[272],{2033:function(e,t,a){"use strict";a.r(t),a.d(t,"EditPrediction",(function(){return S}));var n=a(51),l=a(13),r=a(14),c=a(16),i=a(15),s=a(0),m=a.n(s),o=a(1095),u=a(1093),d=a(1094),p=a(173),h=a(1098),E=a(808),g=a(807),b=a(797),v=a(117),y=(a(798),a(56)),f=a(794),N=(a(894),a(806)),C=a.n(N),S=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=r.props.match.params.id;v.a.post("admin/editPridiction/".concat(t),r.state).then((function(e){console.log(e),C()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/prediction/predictionList")})).catch((function(e){console.log(e)}))},r.state={title:"",rashiName:"",pre_type:"",desc:"",status:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("admin/getonePridiction/".concat(t)).then((function(t){console.log(t),e.setState({title:t.data.data.title,rashiName:t.data.data.rashiName,pre_type:t.data.data.pre_type,desc:t.data.data.desc,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(f.a,{breadCrumbTitle:"Predictoin",breadCrumbParent:"Home",breadCrumbActive:"Edit Predictoin "}),m.a.createElement(o.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Prediction")),m.a.createElement(d.a,null,m.a.createElement(y.b,{render:function(e){var t=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/prediction/predictionList")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,null,"Title"),m.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,null,"Prediction Type"),m.a.createElement(b.a,{required:!0,type:"select",name:"pre_type",value:this.state.pre_type,onChange:this.changeHandler},m.a.createElement("option",{selected:!0},"---Select---"),m.a.createElement("option",null,"Daily"),m.a.createElement("option",null,"Weekly"),m.a.createElement("option",null,"Monthly"))),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,null,"Rashi name"),m.a.createElement(b.a,{required:!0,type:"select",name:"rashiName",value:this.state.rashiName,onChange:this.changeHandler},m.a.createElement("option",null,"---Select Rashi---"),m.a.createElement("option",null,"Aries"),m.a.createElement("option",null,"Taurus"),m.a.createElement("option",null,"Gemini"),m.a.createElement("option",null,"Cancer"),m.a.createElement("option",null,"Leo"),m.a.createElement("option",null,"Virgo"),m.a.createElement("option",null,"Libra"),m.a.createElement("option",null,"Scorpio"),m.a.createElement("option",null,"Saggitarius"),m.a.createElement("option",null,"Capricorn"),m.a.createElement("option",null,"Aquarius"),m.a.createElement("option",null,"Pisces"))),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,null,"Description"),m.a.createElement(b.a,{required:!0,type:"textarea",name:"desc",placeholder:"Enter desc",value:this.state.desc,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(s.Component);t.default=S}}]);
//# sourceMappingURL=272.a23403ab.chunk.js.map