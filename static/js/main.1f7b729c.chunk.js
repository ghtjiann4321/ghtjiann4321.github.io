(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,n,t){e.exports=t(360)},226:function(e,n,t){},227:function(e,n,t){},228:function(e,n,t){},231:function(e,n,t){},360:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),o=t.n(c),i=t(69),l=t(140),u=t.n(l),s=t(141),p=t(33),h=t(68),d=t(28),f="[HOME] LOAD DATA ",m="[HOME] LOAD DATA SUCCESS",g="[HOME] LOAD DATA FAILED",b="[HOME] LOAD DATA VEHICLES ",E="[HOME] LOAD DATA VEHICLES SUCCESS",v="[HOME] LOAD DATA VEHICLES FAILED",O="[HOME] REMOVE DATA",j="[HOME] SET SEARCH",C="[HOME] SET SELECTED_PERSON",D={totalPeopleCount:0,people:[],personVehicles:[],isLoading:!1,isLoadingDialog:!1,page:0,searchString:"",selectedPerson:null},x=function(){return{type:f,isLoading:!0}},y=function(e,n){return{type:m,isLoading:!1,data:e,page:n}},L=function(e){return{type:g,isLoading:!1,error:e}},w=function(){return{type:b}},S=function(e){return{type:E,isLoading:!1,data:e}},k=function(e){return{type:v,isLoading:!1,error:e}},P={loadData:x,loadDataSuccess:y,loadDataFailed:L,loadDataVehicles:w,loadDataVehiclesSuccess:S,loadDataVehiclesFailed:k,removeData:function(e){return{type:O,entity:e}},fetchData:function(e,n){return function(t){return t(x()),fetch(e).then(function(e){return e.json()},function(e){return t(L(e))}).then(function(e){return t(y(e,n))})}},fetchDataVehicles:function(e){return function(n){n(w());try{var t=Promise.all(e.map(function(e){return fetch(e).then(function(e){return e.json()})}));t.then(function(e){n(S(e))})}catch(a){n(k(a))}}},setSearch:function(e){return{type:j,searchString:e}},setSelectedPerson:function(e){return{type:C,selectedPerson:e}}};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return Object(d.a)({},e,{isLoading:!0});case m:return Object(d.a)({},e,{people:n.data.results,totalPeopleCount:n.data.count,page:n.page,isLoading:!1});case b:return Object(d.a)({},e,{isLoadingDialog:!0});case E:return Object(d.a)({},e,{personVehicles:n.data,isLoadingDialog:!1});case v:case g:return Object(d.a)({},e,{isLoading:!1});case O:return Object(d.a)({},e,Object(h.a)({},n.entity,[]));case j:return Object(d.a)({},e,{searchString:n.searchString});case C:return Object(d.a)({},e,{selectedPerson:n.selectedPerson});default:return e}},V=Object(p.c)({home:A}),M=(t(226),t(19)),H=t(20),z=t(22),T=t(21),I=t(23),N=t(15),W=(t(227),t(25)),R=t(65),B=t.n(R),F=t(16),Y=(t(228),t(18)),_=t(142);function J(){var e=Object(N.a)(["\n  height: 46px;\n  border: none;\n  width: 300px;\n  padding: 0 20px;\n  font-size: 16px;\n  outline: none;\n  margin-top: -3px;\n  border-radius: 30px;\n  box-shadow: none !important;\n"]);return J=function(){return e},e}var U=F.a.input(J());U.displayName="SearchInput";var G=function(e){function n(){var e,t;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(z.a)(this,(e=Object(T.a)(n)).call.apply(e,[this].concat(r)))).handleChange=function(){return function(e){t.throttleInput(e.target.value)}},t.throttleInput=Object(_.debounce)(function(e){t.props.onChange(e)},300),t}return Object(I.a)(n,e),Object(H.a)(n,[{key:"render",value:function(){return r.a.createElement(U,{type:"text",onChange:this.handleChange(),placeholder:"Search a character..."})}}]),n}(a.Component),$=t(40),q=t.n($),K=t(14),Q=t.n(K),X=t(39),Z=t.n(X),ee=t(27),ne=t.n(ee),te=t(61),ae=t.n(te),re=t(62),ce=t.n(re),oe=t(145),ie=t.n(oe);t(231);function le(){var e=Object(N.a)(["\n  margin-left: 12px !important;\n  text-transform: uppercase;\n  font-weight: bold !important;\n"]);return le=function(){return e},e}function ue(){var e=Object(N.a)(["\n  background: #fcb414;\n"]);return ue=function(){return e},e}var se=F.a.div(ue()),pe=Object(F.a)(Y.j)(le());function he(){var e=Object(N.a)(["\n  opacity: ",";\n  visibility: ",";\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n  transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n"]);return he=function(){return e},e}var de=F.a.div(he(),function(e){return e.isLoading?1:0},function(e){return e.isLoading?"visibile":"hidden"}),fe=function(e){function n(){return Object(M.a)(this,n),Object(z.a)(this,Object(T.a)(n).apply(this,arguments))}return Object(I.a)(n,e),Object(H.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(de,{isLoading:this.props.isLoading},r.a.createElement("div",null,r.a.createElement(se,{className:"spinner"})),r.a.createElement(pe,{variant:"body1"},"Loading...")))}}]),n}(a.PureComponent);function me(){var e=Object(N.a)(["\n  width: 100%;\n  min-width: 1000px;\n\n  thead tr th {\n    background: #efefef;\n    color: #222;\n    text-transform: uppercase;\n    font-size: 11px;\n\n    &:first-child {\n      border-radius: 6px 0 0 0;\n    }\n\n    &:last-child {\n      border-radius: 0 6px 0 0;\n    }\n  }\n\n  tr:last-child {\n    th,\n    td {\n      border: none;\n    }\n  }\n\n  th,\n  td {\n    bordercolor: '#efefef !important';\n    padding: 4px 24px;\n  }\n"]);return me=function(){return e},e}function ge(){var e=Object(N.a)(["\n  margin-left: 4px;\n  font-size: 16px !important;\n"]);return ge=function(){return e},e}function be(){var e=Object(N.a)(["\n  overflow: auto;\n"]);return be=function(){return e},e}function Ee(){var e=Object(N.a)(["\n  background: #333 !important;\n  color: #fff !important;\n  text-transform: uppercase;\n  font-size: 10px !important;\n  box-shadow: none !important;\n  padding: 7px 14px !important;\n\n  &:hover {\n    background: #fcb414 !important;\n  }\n"]);return Ee=function(){return e},e}function ve(){var e=Object(N.a)(["\n  font-weight: bold !important;\n"]);return ve=function(){return e},e}function Oe(){var e=Object(N.a)(["\n  border: 1px solid #efefef;\n  border-radius: 6px;\n  overflow: auto;\n"]);return Oe=function(){return e},e}var je=F.a.div(Oe()),Ce=Object(F.a)(Y.i)(ve()),De=Object(F.a)(Y.a)(Ee()),xe=F.a.div(be()),ye=Object(F.a)(Y.f)(ge()),Le=Object(F.a)(Y.h)(me()),we=function(e){function n(){var e,t;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(z.a)(this,(e=Object(T.a)(n)).call.apply(e,[this].concat(r)))).handleChangePage=function(e,n){t.props.onChangePage(n)},t.handleClickOpenDialog=function(e){t.props.onClickButton(e)},t}return Object(I.a)(n,e),Object(H.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.data,a=n.dataCount,c=n.page,o=n.isLoading;return r.a.createElement(xe,null,r.a.createElement(fe,{isLoading:o}),r.a.createElement(Le,null,r.a.createElement(Z.a,null,r.a.createElement(ne.a,null,r.a.createElement(Q.a,null,"Name"),r.a.createElement(Q.a,null,"Height"),r.a.createElement(Q.a,null,"Mass"),r.a.createElement(Q.a,null,"Gender"),r.a.createElement(Q.a,null,"Edited"),r.a.createElement(Q.a,null))),r.a.createElement(q.a,null,t.map(function(n){return r.a.createElement(ne.a,{key:n.name},r.a.createElement(Ce,null,n.name),r.a.createElement(Q.a,null,n.height),r.a.createElement(Q.a,null,n.mass),r.a.createElement(Q.a,null,n.gender),r.a.createElement(Q.a,null,r.a.createElement(ie.a,{format:"DD/MM/YYYY hh:mm:ss A"},n.edited)),r.a.createElement(Q.a,{align:"right"},r.a.createElement(De,{variant:"contained",size:"small",color:"inherit",onClick:function(){return e.handleClickOpenDialog(n)}},"Show vehicles",r.a.createElement(ye,null,"open_in_new"))))}),!o&&t.length<=0?r.a.createElement(ne.a,null,r.a.createElement(Q.a,{colSpan:4},"No characters found...")):null),r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(ce.a,{labelRowsPerPage:"",rowsPerPageOptions:[],colSpan:12,rowsPerPage:10,count:a,page:c-1,SelectProps:{native:!0},onChangePage:this.handleChangePage})))))}}]),n}(a.Component);we.defaultProps={data:[]};var Se=t(146),ke=t(64),Pe=t.n(ke),Ae=t(63),Ve=t.n(Ae),Me=function(e){function n(){return Object(M.a)(this,n),Object(z.a)(this,Object(T.a)(n).apply(this,arguments))}return Object(I.a)(n,e),Object(H.a)(n,[{key:"render",value:function(){var e=this.props,n=e.data,t=e.isLoading;return r.a.createElement(xe,null,r.a.createElement(fe,{isLoading:t}),r.a.createElement(je,null,r.a.createElement(Le,null,r.a.createElement(Z.a,null,r.a.createElement(ne.a,null,r.a.createElement(Q.a,null,"Name"),r.a.createElement(Q.a,null,"Model"),r.a.createElement(Q.a,null,"Manufacturer"),r.a.createElement(Q.a,null,"Vehicle Class"))),r.a.createElement(q.a,null,n.map(function(e){return r.a.createElement(ne.a,{key:e.name},r.a.createElement(Ce,null,e.name),r.a.createElement(Q.a,null,e.model),r.a.createElement(Q.a,null,e.manufacturer),r.a.createElement(Q.a,null,e.vehicle_class))}),!t&&n.length<=0?r.a.createElement(ne.a,null,r.a.createElement(Q.a,{colSpan:4},"No vehicles found...")):null))))}}]),n}(a.Component);function He(){var e=Object(N.a)(["\n      position: absolute;\n      top: 20px;\n      right: 20px;\n\n      button {\n        box-shadow: none !important;\n      }\n    "]);return He=function(){return e},e}Me.defaultProps={data:[]};var ze=function(e){function n(){var e,t;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(z.a)(this,(e=Object(T.a)(n)).call.apply(e,[this].concat(r)))).handleClose=function(){t.props.onClose()},t}return Object(I.a)(n,e),Object(H.a)(n,[{key:"render",value:function(){var e=this.props,n=e.person,t=e.personVehicles,a=e.isLoading,c=Object(Se.a)(e,["person","personVehicles","isLoading"]),o=F.a.div(He());return r.a.createElement("div",null,r.a.createElement(Ve.a,Object.assign({onClose:this.handleClose,fullWidth:!0,maxWidth:"xs"},c),r.a.createElement(Pe.a,null,n?"".concat(n,"'s Vehicles"):""),r.a.createElement(o,{onClick:this.handleClose},r.a.createElement(Y.c,{size:"small"},r.a.createElement(Y.f,null,"close"))),r.a.createElement(Y.b,null,r.a.createElement(Me,{data:t,isLoading:a}))))}}]),n}(a.Component),Te=t(49),Ie=t.n(Te);function Ne(){var e=Object(N.a)(["\n  position: relative;\n"]);return Ne=function(){return e},e}function We(){var e=Object(N.a)(["\n  height: 60px;\n  fill: #fff;\n"]);return We=function(){return e},e}function Re(){var e=Object(N.a)(["\n  display: flex;\n  align-items: center;\n\n  .title {\n    color: #fff;\n    margin-left: 24px;\n    font-weight: 200;\n  }\n"]);return Re=function(){return e},e}function Be(){var e=Object(N.a)(["\n  text-align: left;\n  padding: 12px 20px;\n  display: flex !important;\n  align-items: center;\n  justify-content: space-between;\n  color: #fff !important;\n  font-weight: 200 !important;\n  border-radius: 4px 4px 0 0;\n  background: #f26924;\n  background: -moz-linear-gradient(45deg, #f26924 0%, #fcb414 100%);\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #f26924), color-stop(100%, #fcb414));\n  background: -webkit-linear-gradient(45deg, #f26924 0%, #fcb414 100%);\n  background: -o-linear-gradient(45deg, #f26924 0%, #fcb414 100%);\n  background: -ms-linear-gradient(45deg, #f26924 0%, #fcb414 100%);\n  background: linear-gradient(45deg, #f26924 0%, #fcb414 100%);\n"]);return Be=function(){return e},e}function Fe(){var e=Object(N.a)(["\n  margin: 60px 0;\n  position: relative;\n"]);return Fe=function(){return e},e}var Ye=Object(F.a)(Y.g)(Fe()),_e=Object(F.a)(Y.j)(Be()),Je=F.a.div(Re()),Ue=F.a.svg(We()),Ge=F.a.div(Ne()),$e="https://swapi.co/api",qe=function(e){function n(){var e,t;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(z.a)(this,(e=Object(T.a)(n)).call.apply(e,[this].concat(r)))).state={open:!1},t.handleChangeInput=function(e){t.props.setSearch(e),t.props.fetchData("".concat($e,"/people/?search=").concat(e,"&page=1"),1,"people")},t.handleChangePage=function(e){var n=e+1,a=t.props.searchString;t.props.fetchData("".concat($e,"/people/?search=").concat(a,"&page=").concat(n),n,"people")},t.handleClickOpenDialog=function(e){t.props.setSelectedPerson(e),t.setState({open:!0}),t.loadVehicles(e)},t.handleCloseDialog=function(){t.setState({open:!1})},t.handleExited=function(){t.props.removeData("personVehicles")},t.loadVehicles=function(e){if(e.vehicles.length>0){for(var n=[],a=0;a<e.vehicles.length;a++){var r=e.vehicles[a];n.push(r)}t.props.fetchDataVehicles(n)}},t}return Object(I.a)(n,e),Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchData("".concat($e,"/people/?page=1"),1,"people")}},{key:"render",value:function(){var e=this.props,n=e.people,t=e.totalPeopleCount,a=e.page,c=e.isLoading,o=e.selectedPerson,i=e.isLoadingDialog,l=e.personVehicles,u=e.width;return r.a.createElement("div",null,r.a.createElement(Y.d,{container:!0,justify:"center"},r.a.createElement(Y.d,{item:!0,xs:11},r.a.createElement(Ye,{elevation:1},r.a.createElement(_e,{variant:"h4",className:"logo-wrapper-".concat(u)},r.a.createElement(Je,null,r.a.createElement(Ue,{viewBox:"0 0 189.333 107.333"},r.a.createElement("path",{d:"M148.175,66.501c0.182,3.29,0.787,7.427,6.254,12.398 c4.987,4.533-2.469,3.289-3.218,3.289c0,0-11.689-0.012-14.726-0.012c-3.036, 0-4.847-1.822-4.847-1.822c4.119,0,7.772-6.001, 7.772-12.145s-6.001-11.378-10.809-11.378s-26.891,0-26.891, 0v24.791h-3.235l-7.001-25H53.642l-3.795,12.651l-3.795-12.651H31.377l-3.289, 12.651l-3.542-12.651H10.567l11.196,37.952h11.386l5.495-17.964l4.878, 17.964h11.133l7.422-25.302h5.676l-7.468,25.294h12.469l2.024-5.313h13.156l1.953, 5.313l25.488-0.024V82.125c0,0,5.819,6.832,8.855,9.615c3.036,2.783,3.29,3.036,7.409, 3.036l29.895-0.202c4.301,0,10.808-3.977,10.808-10.555c0-2.647, 0.052-4.107-3.058-7.607l-4.734-5.609c-2.712-2.53-0.233-2.795, 2.044-2.795h16.391V56.622h-25.57C150.836,56.622,147.994,63.212,148.175,66.501zM77.561, 80.145l4.301-13.916l4.047,13.916H77.561z M124.048,73.27c-3.471,0-8.673,0-8.673,0v-6.832c0,0, 5.89,0,8.673,0C128.024,66.438,128.711,73.27,124.048,73.27z"}),r.a.createElement("path",{d:"M166.341,39.947c-4.807,0-4.807-1.771-4.807-1.771c4.119,0,7.772-6.001, 7.772-12.145c0-6.143-6.001-11.377-10.808-11.377s-26.891,0-26.891, 0v25.293h-3.279l-7.083-25.293h-77.47c-6.579,0-9.796,6.317-9.615,9.607c0.182,3.289,0.787,7.427, 6.254,12.397c4.987,4.533-2.469,3.289-3.218,3.289c-3.795,0-26.629,0-26.629,0v12.65c0,0,32.702, 0,37.003,0c4.301,0,9.796-3.977,9.796-10.556c0-2.646, 1.012-4.372-2.098-7.872l-4.734-5.609c-2.712-2.53,0.324-2.53,2.602-2.53c1.265,0,15.624,0, 15.624,0v26.566h12.39V26.031h16.748l-7.845,26.566h12.469l2.024-5.313h13.157l1.953, 5.313h25.614v-12.65c0,0,5.819,6.831,8.855,9.614s3.289,3.036,7.409,3.036c4.119,0,21.451,0, 21.451,0v-12.65C182.984,39.947,171.148,39.947,166.341,39.947z M107.329, 38.176l4.301-13.916l4.048,13.916H107.329z M153.943,31.092c-3.471,0-8.674,0-8.674,0v-6.831c0,0, 5.89,0,8.674,0C157.919,24.261,158.606,31.092,153.943,31.092z"})),r.a.createElement(Y.e,{smDown:!0},r.a.createElement(Y.j,{className:"title",variant:"h4"},"Character List"))),r.a.createElement(G,{onChange:this.handleChangeInput})),r.a.createElement(Ge,null,r.a.createElement(we,{data:n,dataCount:t,page:a,onChangePage:this.handleChangePage,onClickButton:this.handleClickOpenDialog,isLoading:c}))))),r.a.createElement(ze,{fullWidth:!0,maxWidth:"lg",open:this.state.open,person:o?o.name:null,personVehicles:l,isLoading:i,onExited:this.handleExited,onClose:this.handleCloseDialog}))}}]),n}(a.Component),Ke=Ie()()(qe),Qe=Object(i.b)(function(e){var n=e.home;return{totalPeopleCount:n.totalPeopleCount,people:n.people,personVehicles:n.personVehicles,isLoadingDialog:n.isLoadingDialog,isLoading:n.isLoading,page:n.page,searchString:n.searchString,selectedPerson:n.selectedPerson}},function(e){return{removeData:function(n){return e(P.removeData(n))},fetchData:function(n,t){e(P.fetchData(n,t))},setSearch:function(n){return e(P.setSearch(n))},setSelectedPerson:function(n){return e(P.setSelectedPerson(n))},fetchDataVehicle:function(n){e(P.fetchDataVehicle(n))},fetchDataVehicles:function(n){e(P.fetchDataVehicles(n))}}})(Ke);function Xe(){var e=Object(N.a)([""]);return Xe=function(){return e},e}var Ze=F.a.div(Xe()),en=Object(W.createMuiTheme)({typography:{useNextVariants:!0,fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),nn=function(e){function n(){return Object(M.a)(this,n),Object(z.a)(this,Object(T.a)(n).apply(this,arguments))}return Object(I.a)(n,e),Object(H.a)(n,[{key:"render",value:function(){return r.a.createElement(W.MuiThemeProvider,{theme:en},r.a.createElement(Ze,{className:"App"},r.a.createElement(B.a,null),r.a.createElement(Qe,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tn=Object(p.a)(s.a,u.a),an=Object(p.d)(V,tn);o.a.render(r.a.createElement(i.a,{store:an},r.a.createElement(nn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.1f7b729c.chunk.js.map