(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Xj6D:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return T});var n=a("ln6h"),s=a.n(n),r=a("O40h"),i=a("0iUn"),o=a("sLSF"),c=a("MI3g"),l=a("a7VT"),m=a("AT/M"),d=a("Tit0"),p=a("vYYK"),x=a("MX0m"),u=a.n(x),f=a("q1tI"),b=a.n(f),g=a("CafY"),h=a("QAIS"),j=a("wd/R"),w=a.n(j),v=a("00EI"),y=a("27Ns"),E=a.n(y),N=a("vDqi"),k=a.n(N),O=a("Xcx1"),T=function(e){function t(){var e,a;Object(i.default)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return a=Object(c.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(s))),Object(p.a)(Object(m.default)(a),"state",{blogDtail:"",detailData:{},commentsList:[],commentTotal:0,saytext:"",submitDisb:!1,submitTxt:"提交"}),a}return Object(d.default)(t,e),Object(o.default)(t,[{key:"getComments",value:function(){var e=Object(r.default)(s.a.mark(function e(){var t,a,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.query.id,e.next=3,k.a.get("".concat(v.a,"/v1/blog/messageboard/list?blog_id=").concat(t),{responseType:"blob"});case 3:return a=e.sent,e.next=6,Object(O.a)(a.data);case 6:n=e.sent,r=(r=E.a.blogComments.deserializeBinary(n)).toObject(),this.setState({commentsList:r.listList,commentTotal:r.total});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(r.default)(s.a.mark(function e(){var t,a,n,r,i,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.query.id,e.next=3,k.a.get("".concat(v.a,"/v1/blog/detail?id=").concat(t),{responseType:"blob"});case 3:return a=e.sent,e.next=6,Object(O.a)(a.data);case 6:return n=e.sent,r=E.a.detailRes.deserializeBinary(n),n=r.toObject(),e.next=11,k.a.get("".concat(v.a,"/tool/file/read?key=").concat(n.htmlTxtUrl),{responseType:"blob"});case 11:return i=e.sent,e.next=14,Object(O.a)(i.data);case 14:return o=e.sent,c=E.a.fileReadRes.deserializeBinary(o),o=c.toObject(),e.next=19,this.getComments();case 19:this.setState({blogDtail:o.txt,detailData:n}),setTimeout(function(){document.getElementById("t").setAttribute("class","shadownone"),document.getElementById("loading").style.display="none"},500);case 21:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"subMitComment",value:function(){var e=Object(r.default)(s.a.mark(function e(t){var a,n,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t||window.event)||13!=a.keyCode){e.next=24;break}if(n=this.props.query.id,""!=(r=(r=this.state.saytext).replace(/\n/g,""))){e.next=8;break}return alert("评论内容不能为空"),e.abrupt("return");case 8:return(i=new E.a.blogComment).setContent(r),i.setBlogId(n),o=i.serializeBinary(),e.prev=12,e.next=15,k.a.post("".concat(v.a,"/v1/blog/messageboard/submit"),o,{headers:{"Content-Type":"application/octet-stream"}});case 15:return e.sent,e.next=18,this.getComments();case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(12),"Error: Request failed with status code 400"==e.t0?alert("评论内容不能为空"):"Error: Request failed with status code 500"==e.t0?alert("内部出现错误"):"Error: Request failed with status code 403"==e.t0&&alert("今天您对改博客的评论已达到上限");case 23:this.setState({saytext:""});case 24:case"end":return e.stop()}},e,this,[[12,20]])}));return function(t){return e.apply(this,arguments)}}()},{key:"makeGood",value:function(){var e=Object(r.default)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.detailData,a=this.props.query.id,e.next=4,k.a.post("".concat(v.a,"/v1/blog/good/make?blog_id=").concat(a));case 4:e.sent,t.goodNum++,this.setState({detailData:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.blogDtail,n=t.detailData,s=t.commentsList,r=(t.submitDisb,t.submitTxt,t.saytext),i=t.commentTotal;return b.a.createElement(g.a,{title:n.name},b.a.createElement("div",{style:{background:"#fff",padding:"0 12px"},className:"jsx-1676129087"},b.a.createElement("h3",{className:"jsx-1676129087 news_title"},n.name),b.a.createElement("div",{className:"jsx-1676129087 bloginfo"},b.a.createElement("ul",{className:"jsx-1676129087"},b.a.createElement("li",{className:"jsx-1676129087 author"}),b.a.createElement("li",{className:"jsx-1676129087 lmname"},Object(h.a)(n.type)),b.a.createElement("li",{className:"jsx-1676129087 timer"},w()(n.createTime).format("YYYY-MM-DD")),b.a.createElement("li",{className:"jsx-1676129087 view"},n.view," 人已阅读"))),b.a.createElement("div",{style:{clear:"both"},className:"jsx-1676129087"}),b.a.createElement("div",{className:"jsx-1676129087 news_about"},b.a.createElement("strong",{className:"jsx-1676129087"},"简介")," ",n.preface),b.a.createElement("div",{dangerouslySetInnerHTML:{__html:a},previewcontainer:"true",style:{width:"auto",padding:0},className:"jsx-1676129087 markdown-body editormd-preview-container"}),b.a.createElement("div",{style:{padding:"20px"},className:"jsx-1676129087 share"},b.a.createElement("button",{onClick:this.makeGood.bind(this),className:"jsx-1676129087 diggit"},b.a.createElement("a",{className:"jsx-1676129087"},"很赞哦！"),"(",b.a.createElement("b",{className:"jsx-1676129087"},n.goodNum),")")),b.a.createElement("div",{className:"jsx-1676129087 nextinfo"},n.prev?b.a.createElement("p",{className:"jsx-1676129087"},"上一篇：",b.a.createElement("a",{href:"/detail?id=".concat(n.prev.id),className:"jsx-1676129087"},n.prev.name)):b.a.createElement("p",{className:"jsx-1676129087"},"上一篇：",b.a.createElement("a",{href:"/article",className:"jsx-1676129087"},"回到列表")),n.next?b.a.createElement("p",{className:"jsx-1676129087"},"下一篇：",b.a.createElement("a",{href:"/detail?id=".concat(n.next.id),className:"jsx-1676129087"},n.next.name)):b.a.createElement("p",{className:"jsx-1676129087"},"下一篇：",b.a.createElement("a",{href:"/article",className:"jsx-1676129087"},"回到列表"))),b.a.createElement("div",{id:"news_pl",className:"jsx-1676129087 news_pl"},b.a.createElement("h2",{className:"jsx-1676129087"},"文章评论"),b.a.createElement("div",{className:"jsx-1676129087 gbko"},s.map(function(e,t){return b.a.createElement("div",{key:t,className:"jsx-1676129087 fb"},b.a.createElement("ul",{style:{background:"url(".concat(v.b[e.id%v.b.length],") no-repeat top 14px left 10px")},className:"jsx-1676129087"},b.a.createElement("span",{style:{color:"#000"},className:"jsx-1676129087"},e.name),b.a.createElement("p",{className:"jsx-1676129087 fbtime"},b.a.createElement("span",{className:"jsx-1676129087"},w()(e.createTime).format("YYYY-MM-DD"))),b.a.createElement("p",{className:"jsx-1676129087 fbinfo"},e.content)))}),b.a.createElement("div",{id:"plpost",className:"jsx-1676129087"},b.a.createElement("p",{style:0==s.length?{marginTop:8}:{},className:"jsx-1676129087 saying"},b.a.createElement("span",{className:"jsx-1676129087"},b.a.createElement("a",{href:"javascript:void(0)",style:{textDecoration:"none",color:"#de1513"},className:"jsx-1676129087"},"共有",i,"条评论")),"来说两句吧..."),b.a.createElement("textarea",{name:"saytext",value:r,onChange:function(t){e.setState({saytext:t.target.value})},rows:"6",id:"saytext",onKeyUp:this.subMitComment.bind(this),className:"jsx-1676129087"}))))),b.a.createElement(u.a,{id:"1676129087"},[".nextinfo.jsx-1676129087 a.jsx-1676129087{-webkit-text-decoration:none;text-decoration:none;color:#555;}",".nextinfo.jsx-1676129087 a.jsx-1676129087:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}",".yzm.jsx-1676129087{margin:10px 10px 10px 0;}",'#plpost.jsx-1676129087 input[type="submit"].jsx-1676129087{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}',"#saytext.jsx-1676129087{width:99%;outline:none;resize:none;border:solid 1px #ccc;margin-bottom:20px;}",".saying.jsx-1676129087 span.jsx-1676129087{float:right;}",".saying.jsx-1676129087{line-height:30px;color:#a9a6a6;margin-bottom:8px;}",".news_pl.jsx-1676129087 h2.jsx-1676129087{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}",".fbtime.jsx-1676129087{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}",".fbtime.jsx-1676129087 span.jsx-1676129087{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}","p.fbtime.jsx-1676129087{color:#000;}","p.fbinfo.jsx-1676129087{margin:10px 0;word-wrap:break-word;}",".fb.jsx-1676129087 ul.jsx-1676129087{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background-size:47px 47px;}",".news_pl.jsx-1676129087{margin:10px 0 20px 0;width:100%;overflow:hidden;}",".nextinfo.jsx-1676129087{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}",".nextinfo.jsx-1676129087>p.jsx-1676129087{padding:4px 10px;border-radius:5px;}",".diggit.jsx-1676129087{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}",".news_about.jsx-1676129087{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}",".bloginfo.jsx-1676129087{width:100%;overflow:hidden;}",".news_title.jsx-1676129087{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}",".bloginfo.jsx-1676129087 li.jsx-1676129087{float:left;margin-right:20px;list-style:none;}"]))}}],[{key:"getInitialProps",value:function(){var e=Object(r.default)(s.a.mark(function e(t){var a,n,r,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=t.query,r=t.jsonPageRes,i=a?a.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:i,query:n,jsonPageRes:r});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(b.a.Component)},vUjY:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail",function(){var e=a("Xj6D");return{page:e.default||e}}])}},[["vUjY",1,0]]]);