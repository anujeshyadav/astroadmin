(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[142],{2041:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),l=t(16),r=t(15),m=t(0),s=t.n(m),i=t(1093),o=t(1094),h=t(1091),u=t(1092),d=t(1095),E=t(173),f=t(1098),p=(t(827),t(56)),g=t(117),b=t(831),v=t.n(b),N=(t(41),function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;g.a.get("/admin/viewonePackage/".concat(a)).then((function(a){console.log("viewOne",a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(o.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(h.a,{listTag:"div"},s.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),s.a.createElement(u.a,{href:"/app/horoscopecategory/horoscopeCategoryList",tag:"a"},"PackageOffer Category List"),s.a.createElement(u.a,{active:!0},"View PackageOffer"))))),s.a.createElement(d.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(o.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View PackageOffer")),s.a.createElement(o.a,null,s.a.createElement(p.b,{render:function(e){var a=e.history;return s.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/horoscopecategory/horoscopeCategoryList")}},"Back")}}))),s.a.createElement(f.a,{className:"pb-0"},s.a.createElement(i.a,{className:"mb-5 mt-2"},s.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"Title"),s.a.createElement("h6",{className:""}," ",this.state.data.title)),s.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"MRP Price"),s.a.createElement("h6",{className:""},v()(this.state.data.mrp_price))),s.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"Offer Price"),s.a.createElement("h6",{className:""}," ",this.state.data.offer_price)),s.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"Thumnail Image"),s.a.createElement("img",{src:this.state.data.image,alt:"Thumnnail_Image_missing",width:120,height:120})))))))}}]),t}(s.a.Component));a.default=N},827:function(e,a,t){},832:function(e,a){}}]);
//# sourceMappingURL=142.175eecfd.chunk.js.map