(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{a8DQ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return O});var a=n("ln6h"),o=n.n(a),r=n("O40h"),i=n("0iUn"),s=n("sLSF"),p=n("MI3g"),l=n("a7VT"),d=n("AT/M"),x=n("Tit0"),c=n("vYYK"),u=n("MX0m"),f=n.n(u),g=n("q1tI"),b=n.n(g),h=n("CafY"),m=(n("QAIS"),n("wd/R"),n("00EI")),w=n("27Ns"),j=n.n(w),y=n("vDqi"),v=n.n(y),k=n("Xcx1"),O=function(e){function t(){var e,n;Object(i.default)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=Object(p.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(o))),Object(c.a)(Object(d.default)(n),"state",{blogDtail:""}),n}return Object(x.default)(t,e),Object(s.default)(t,[{key:"componentDidMount",value:function(){var e=Object(r.default)(o.a.mark(function e(){var t,n,a,r,i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(m.a,"/v1/blog/detail?id=35"),{responseType:"blob"});case 2:return t=e.sent,e.next=5,Object(k.a)(t.data);case 5:return n=e.sent,a=j.a.detailRes.deserializeBinary(n),n=a.toObject(),e.next=10,v.a.get("".concat(m.a,"/tool/file/read?key=").concat(n.htmlTxtUrl),{responseType:"blob"});case 10:return r=e.sent,e.next=13,Object(k.a)(r.data);case 13:i=e.sent,s=j.a.fileReadRes.deserializeBinary(i),i=s.toObject(),this.setState({blogDtail:i.txt}),setTimeout(function(){document.getElementById("t").setAttribute("class","shadownone"),document.getElementById("loading").style.display="none"},500);case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.blogDtail;e.detailData,e.commentsList,e.loadings,e.saytext,e.commentTotal;return b.a.createElement(h.a,{title:"关于"},b.a.createElement("div",{style:{background:"#fff",padding:"0 12px",marginBottom:20},className:"jsx-581838910"},b.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},previewcontainer:"true",style:{width:"auto"},className:"jsx-581838910 markdown-body editormd-preview-container"})),b.a.createElement(f.a,{id:"581838910"},[".nextinfo.jsx-581838910 a.jsx-581838910{-webkit-text-decoration:none;text-decoration:none;color:#555;}",".nextinfo.jsx-581838910 a.jsx-581838910:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}",".yzm.jsx-581838910{margin:10px 10px 10px 0;}",'#plpost.jsx-581838910 input[type="submit"].jsx-581838910{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}',"#saytext.jsx-581838910{width:618px;outline:none;resize:none;}",".saying.jsx-581838910 span.jsx-581838910{float:right;}",".saying.jsx-581838910{line-height:30px;color:#a9a6a6;margin-bottom:8px;}",".news_pl.jsx-581838910 h2.jsx-581838910{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}",".fbtime.jsx-581838910{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}",".fbtime.jsx-581838910 span.jsx-581838910{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}","p.fbtime.jsx-581838910{color:#000;}","p.fbinfo.jsx-581838910{margin:10px 0;word-wrap:break-word;}",".fb.jsx-581838910 ul.jsx-581838910{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}",".news_pl.jsx-581838910{margin:10px 0 20px 0;width:100%;overflow:hidden;}",".nextinfo.jsx-581838910{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}",".nextinfo.jsx-581838910>p.jsx-581838910{padding:4px 10px;border-radius:5px;}",".diggit.jsx-581838910{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}",".news_about.jsx-581838910{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}",".bloginfo.jsx-581838910{width:100%;overflow:hidden;}",".news_title.jsx-581838910{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}",".bloginfo.jsx-581838910 li.jsx-581838910{float:left;margin-right:20px;list-style:none;}"]))}}],[{key:"getInitialProps",value:function(){var e=Object(r.default)(o.a.mark(function e(t){var n,a,r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=t.query,r=t.jsonPageRes,i=n?n.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:i,query:a,jsonPageRes:r});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(b.a.Component)},kRKR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/me",function(){var e=n("a8DQ");return{page:e.default||e}}])}},[["kRKR",1,0]]]);