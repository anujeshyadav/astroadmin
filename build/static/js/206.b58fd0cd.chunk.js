(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[206],{2092:function(e,t,a){"use strict";a.r(t);var n=a(51),o=a(13),r=a(14),i=a(16),c=a(15),s=a(0),l=a.n(s),d=a(1095),m=a(1093),p=a(1094),u=a(173),h=a(1098),g=a(808),f=a(807),E=(a(798),a(825)),b=a(824),v=a(804),C=a.n(v),w=(a(818),a(803),a(117)),S=a(27),k=(a(806),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var o=new FormData;o.append("image",e),n.send(o),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},r.onEditorStateChange=function(e){r.setState({editorState:e,desc:C()(Object(E.convertToRaw)(e.getCurrentContent()))})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=r.props.match.params.id;w.a.post("/admin/edit_term_cond/".concat(t),r.state).then((function(e){console.log(e),r.props.history.push("/app/pagesetup/termscondition/termConditionList")})).catch((function(e){console.log(e.response)}))},r.state={desc:"",editorState:E.EditorState.createEmpty()},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;w.a.get("/admin/getone_term_cond/".concat(t)).then((function(t){console.log(t.data.data.desc),e.setState({desc:t.data.data.desc})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(m.a,{className:"m-2"},l.a.createElement(p.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Term And Condition")),l.a.createElement(p.a,null,l.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return S.a.push("/app/pagesetup/termscondition/termConditionList")}},"Back"))),l.a.createElement(h.a,null,l.a.createElement(g.a,{onSubmit:this.submitHandler},l.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},l.a.createElement(f.a,null," Description"),l.a.createElement("br",null),l.a.createElement(b.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}})),l.a.createElement(u.a,{color:"primary"}," Submit"))))}}]),a}(l.a.Component));t.default=k},803:function(e,t,a){}}]);
//# sourceMappingURL=206.b58fd0cd.chunk.js.map