(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[0],{35:function(e,t,n){},38:function(e,t,n){e.exports=n(67)},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=(n(43),n(69)),s=n(14),l=n(3),u=n.n(l),m=n(9),v=n(17),p=n(18),d=n(20),h=n(19),f=n(11),b=n(5),E=n.n(b),g=function(e,t){return{type:"GET_NEW_MOVIE",movies:e,records:t}},w=function(e,t){return{type:"GET_MOVIE",movies:e,records:t}},y=function(e,t){return{type:"FAIL_MOVIE",movies:[],records:0}},k=function(e){return{type:"SUCCESS_VIEW_MOVIE",_movie:e}},O=function(e){return{type:"SUCCESS_VIEW_MOVIE",movie:null}},M=n(8),x=Object(M.a)(),T=(n(35),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).viewMovies=function(e){x.push("/view/"+e)},a.updatemovieList=function(e,t){return a.props.getMovies(e,t)},a.newMovieList=function(e,t){return a.props.getNewMovies(e,1)},a.state={query:"man",pageNumber:1,oldData:a.props.movies},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={root:null,rootMargin:"20px"},this.observer=new IntersectionObserver(this.handleObserver.bind(this),t),this.observer.observe(this.lazy_loadingRef);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleObserver",value:function(e,t){var n=e[0].boundingClientRect.y;if(this.state.prevY>n){var a=this.state.pageNumber+1;this.props.totalRecords>this.props.fetchedRecords&&(this.updatemovieList(this.state.query,a),this.setState({pageNumber:a}))}this.setState({prevY:n})}},{key:"render",value:function(){var e,t=this,n={display:this.state.loading?"block":"none"};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"MOVIE SERACH IMDB "),r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("input",(e={type:"text",class:"form-control","aria-describedby":"button-addon2"},Object(s.a)(e,"type","text"),Object(s.a)(e,"value",this.state.query),Object(s.a)(e,"onChange",(function(e){return t.setState({query:e.target.value})})),Object(s.a)(e,"placeholder","Enter Movie Name"),e)),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-primary btn-ext",type:"button",onClick:function(){return t.newMovieList(t.state.query,1)}},"Search")))),r.a.createElement("div",{className:"row col-sm-12"},r.a.createElement("div",{class:"col-sm-4"}),r.a.createElement("div",{class:"col-sm-4"},void 0!==this.props.movies&&this.props.movies!==[]?this.props.movies.map((function(e,n){return r.a.createElement("div",null,void 0!==e?r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("br",null),r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"card-img-top",src:e.Poster,alt:e.Title}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",{class:"card-text"},e.Title),r.a.createElement("p",{class:"card-text"},e.Year),r.a.createElement("button",{type:"button",class:"btn btn-primary btn-primary-custom",onClick:function(){return t.viewMovies(e.imdbID)}},"View Big")))):"")})):""),r.a.createElement("div",{class:"col-sm-3"})),r.a.createElement("div",{ref:function(e){return t.lazy_loadingRef=e},style:{height:"100px",margin:"30px"}},r.a.createElement("span",{style:n},"Loading...")))}}]),n}(a.Component)),j=Object(f.b)((function(e){return console.log("STATE VALUE",e),{movies:e.movies.movies,fetchedRecords:e.movies.fetchedRecords,totalRecords:e.movies.totalRecords}}),{getMovies:function(e,t){return function(){var n=Object(m.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E()({method:"GET",url:"https://www.omdbapi.com/?apikey=b9bd48a6",params:{s:e,page:t},cancelToken:new E.a.CancelToken((function(e){return e}))}).then((function(e){return a(w(e.data.Search,e.data.totalResults))}),(function(e){return a(y(e))}));case 3:n.sent,n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()},getNewMovies:function(e,t){return function(){var n=Object(m.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E()({method:"GET",url:"https://www.omdbapi.com/?apikey=b9bd48a6",params:{s:e,page:t},cancelToken:new E.a.CancelToken((function(e){return e}))}).then((function(e){return a(g(e.data.Search,e.data.totalResults))}),(function(e){return a(y(e))}));case 3:n.sent,n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}})(T),C=(n(35),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).backToMovies=function(e){window.history.back()},a.state={id:null,movie:null},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"GET",url:"https://www.omdbapi.com/?apikey=b9bd48a6",params:{i:this.props.match.params.id},cancelToken:new E.a.CancelToken((function(e){return e}))}).then((function(e){return t.setState({movie:e.data},(function(){console.log(t.state.movie)}))}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{class:"col-sm-12"},r.a.createElement("button",{class:"btn btn-primary btn-lg btn-ext",onClick:this.backToMovies}," back to search"),r.a.createElement("div",{class:"col-sm-4"}),r.a.createElement("div",null,null!==this.state.movie?r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("br",null),r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"card-img-top",src:this.state.movie.Poster,alt:this.state.movie.Title}),r.a.createElement("div",{class:"card-header"},this.state.movie.Title),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item"},"Year      : ",this.state.movie.Year),r.a.createElement("li",{class:"list-group-item"}," Actors   : ",this.state.movie.Actors),r.a.createElement("li",{class:"list-group-item"},"Country   : ",this.state.movie.Country),r.a.createElement("li",{class:"list-group-item"},"Directors : ",this.state.movie.Director),r.a.createElement("li",{class:"list-group-item"},"Genre     :",this.state.movie.Genre),r.a.createElement("li",{class:"list-group-item"},"Language  : ",this.state.movie.Language)),r.a.createElement("br",null))):""),r.a.createElement("div",{class:"col-sm-4"}))}}]),n}(a.Component)),_=Object(f.b)((function(e){return{movie:e.movies._movie}}),{viewMovie:function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E()({method:"GET",url:"https://www.omdbapi.com/?apikey=b9bd48a6",params:{i:e},cancelToken:new E.a.CancelToken((function(e){return e}))}).then((function(e){return n(k(e))}),(function(e){return n(O(e))}));case 3:t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})(C);function I(){return r.a.createElement(i.b,{history:x},r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:j,exact:!0}),r.a.createElement(i.a,{path:"/view/:id",component:_}))))}var S=function(){return r.a.createElement(I,null)},R=n(10),V=n(37),N={loader:!0,movies:[],records:0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEW_MOVIE":return{loader:!1,movies:t.movies,totalRecords:t.records,fetchedRecords:void 0===t.movies.length?0:t.movies.length};case"GET_MOVIE":var n=e.movies.concat(t.movies);return{loader:!1,movies:n,totalRecords:t.records,fetchedRecords:void 0===n.length?0:n.length};case"FAIL_MOVIE":return{loader:!1,movies:e.movies.concat(t.movies),totalRecords:void 0!==e.movies.concat(t.movies).length?e.movies.concat(t.movies).length:0,fetchedRecords:void 0!==e.movies.concat(t.movies).length?e.movies.concat(t.movies).length:0};case"SUCCESS_VIEW_MOVIE":return{_movie:t._movie.data};default:return e}},L=Object(R.c)({movies:G}),A=Object(R.d)(L,Object(R.a)(V.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:A},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.17d2141c.chunk.js.map