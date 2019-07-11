(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(63)},45:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),c=a.n(o),l=(a(45),a(9)),i=a(10),s=a(12),u=a(11),d=a(5),h=a(13),p=a(19),b=a(17),m=a(22),k=a.n(m),f=a(16),E=a.n(f),v=a(28),O=a.n(v),j=a(25),w=a.n(j),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showInput:!1,value:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleAddClick=a.handleAddClick.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleInput",value:function(e){this.setState({value:e.target.value})}},{key:"handleAddClick",value:function(){this.state.showInput?(this.props.add(this.state.value),this.setState({showInput:!1,value:""})):this.setState({showInput:!0})}},{key:"render",value:function(){return r.a.createElement(O.a.Row,null,this.state.showInput&&r.a.createElement(E.a,{xs:9},r.a.createElement(O.a.Control,{size:"sm",placeholder:this.props.placeholder,onChange:this.handleInput})),r.a.createElement(E.a,{xs:3},r.a.createElement(w.a,{size:"sm",onClick:this.handleAddClick},"Add")))}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("h1",null,"Books"),r.a.createElement("ul",null,this.props.books.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p.b,{to:"/books/"+e.id},e.title))}),r.a.createElement("li",null,r.a.createElement(g,{placeholder:"Book title",add:this.props.addNew}))))}}]),t}(n.Component),y=a(24),C=a.n(y),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).goBack=a.goBack.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return r.a.createElement(w.a,{variant:"success",size:"sm",onClick:this.goBack},"Back")}}]),t}(n.Component),B=Object(b.f)(A),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleAdd=a.handleAdd.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleAdd",value:function(e){this.props.add(this.props.id,e)}},{key:"render",value:function(){var e=this,t=this.props.books.find(function(t){return t.id===e.props.id});return r.a.createElement(k.a,null,r.a.createElement(C.a,null,r.a.createElement(E.a,null,r.a.createElement("h1",null,t.title),r.a.createElement("ul",null,t.chapters.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p.b,{to:"/books/".concat(t.id,"/chapters/").concat(e.id)},e.title))}),r.a.createElement("li",null,r.a.createElement(g,{placeholder:"Chapter title",add:this.handleAdd}))))),r.a.createElement(C.a,null,r.a.createElement(E.a,null,r.a.createElement(B,null))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleAdd=a.handleAdd.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleAdd",value:function(e){this.props.add(this.props.bookId,this.props.chapterId,e)}},{key:"render",value:function(){var e=this.chapter;return r.a.createElement(k.a,null,r.a.createElement(C.a,null,r.a.createElement(E.a,null,r.a.createElement("h1",null,e.title),r.a.createElement("ul",null,e.arguments.map(function(e,t){return r.a.createElement("li",{key:t},e)}),r.a.createElement("li",null,r.a.createElement(g,{placeholder:"Argument",add:this.handleAdd}))))),r.a.createElement(C.a,null,r.a.createElement(E.a,null,r.a.createElement(B,null))))}},{key:"chapter",get:function(){var e=this;return this.props.books.find(function(t){return t.id===e.props.bookId}).chapters.find(function(t){return t.id===e.props.chapterId})}}]),t}(n.Component),x=a(39);function J(e){var t=-1;return e.length>0&&(t=e[e.length-1].id),t}var z={withNewBook:function(e,t){return[].concat(Object(x.a)(e),[{id:J(e)+1,title:t,chapters:[]}])},withNewChapter:function(e,t,a){var n=e.find(function(e){return e.id===t});return n.chapters.push({id:J(n.chapters)+1,title:a,arguments:[]}),e},withNewArgument:function(e,t,a,n){return e.find(function(e){return e.id===t}).chapters.find(function(e){return e.id===a}).arguments.push(n),e}};var W={fetch:function(){var e=localStorage.getItem("books");return e=null===e?[]:JSON.parse(e)},store:function(e){localStorage.setItem("books",JSON.stringify(e))}},R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={books:a.props.books},a.addBook=a.addBook.bind(Object(d.a)(a)),a.addChapter=a.addChapter.bind(Object(d.a)(a)),a.addArgument=a.addArgument.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"addBook",value:function(e){var t=z.withNewBook(this.state.books,e);this.setState({books:t}),W.store(t)}},{key:"addChapter",value:function(e,t){var a=z.withNewChapter(this.state.books,e,t);this.setState({books:a}),W.store(a)}},{key:"addArgument",value:function(e,t,a){var n=z.withNewArgument(this.state.books,e,t,a);this.setState({books:n}),W.store(n)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,render:function(){return r.a.createElement(I,{books:e.state.books,addNew:e.addBook})}}),r.a.createElement(b.a,{path:"/books/:bookId/chapters/:chapterId",render:function(t){return r.a.createElement(S,{chapter:"Chapter",books:e.state.books,bookId:parseInt(t.match.params.bookId),chapterId:parseInt(t.match.params.chapterId),add:e.addArgument})}}),r.a.createElement(b.a,{path:"/books/:id",render:function(t){return r.a.createElement(N,{books:e.state.books,id:parseInt(t.match.params.id),add:e.addChapter})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,{books:W.fetch()}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.f6a3ad4b.chunk.js.map