(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,t){e.exports=t(143)},113:function(e,a,t){},114:function(e,a,t){},131:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(12),o=t.n(i),s=(t(113),t(93)),l=t(37),c=(t(114),t(98)),u=t(202),d=t(72),h=t(83),m=t.n(h),p=t(178),g=t(180),f=t(39),v=t(181),w=t(145),b=t(182),E=t(144),y=t(183),k=t(184),S=t(210),B=t(185),N=t(206),D=t(46),C=t(52);function O(){var e=Object(D.b)(),a=e.t,t=e.i18n,n=r.a.useState("en"),i=Object(d.a)(n,2),o=i[0],s=i[1],l=r.a.useState(null),c=Object(d.a)(l,2),u=c[0],h=c[1],O=function(e){var a=e.target.value;t.changeLanguage(a),h(null)},I=Boolean(u),W=I?"simple-popper":void 0;return r.a.createElement(p.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(f.a,{edge:"start",variant:"h6"},a("OpenWrt Firmware Selector Wizard")),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement(v.a,{"aria-describedby":W,color:"secondary",variant:"contained",onClick:function(e){s(C.a.language.substring(0,2)),h(u?null:e.currentTarget)},href:"#"},a("Change Language")," \xa0",r.a.createElement(m.a,null)),r.a.createElement(w.a,{id:W,open:I,anchorEl:u,transition:!0,disablePortal:!0},function(e){var t=e.TransitionProps;return r.a.createElement(b.a,Object.assign({},t,{timeout:350}),r.a.createElement(E.a,{className:"language-selector-popper"},r.a.createElement(y.a,{component:"fieldset"},r.a.createElement(k.a,{component:"legend"},"Change Language"),r.a.createElement("br",null),r.a.createElement(S.a,{"aria-label":"Language",name:"language",value:o,onChange:O},r.a.createElement(B.a,{value:"en",control:r.a.createElement(N.a,null),label:a("English")}),r.a.createElement(B.a,{value:"de",control:r.a.createElement(N.a,null),label:a("German")})))))})))}var I=t(85),W=t(86),j=t(99),A=t(87),z=t(100),P=t(204),M=t(189),R=t(208),x=t(190),F=t(191),L=t(192),V=t(193),q=t(194),G=t(195),_=t(196),K=t(188),T=t(197),J=t(198),U=t(205),$=t(199),Z=t(209),H=t(200),Q=t(187),X=t(201),Y=t(186),ee=t(8),ae=t(89),te=t.n(ae),ne=t(92),re=t.n(ne),ie=t(90),oe=t.n(ie),se=t(69),le=t.n(se),ce=(t(131),t(88)),ue=t.n(ce),de=Object(Y.a)(function(e){return{root:{borderColor:"#e2e2e1",overflow:"hidden",margin:0,borderRadius:4,transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{borderColor:Object(ee.c)(e.palette.primary.main,.25)},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat(Object(ee.c)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},focused:{}}});function he(e){var a=de();return r.a.createElement(P.a,Object.assign({variant:"outlined",label:r.a.createElement("div",{className:"search-label"},e.labeltext),InputProps:{classes:a,endAdornment:r.a.createElement(M.a,{position:"start"},r.a.createElement(te.a,{className:a.label}))}},e))}function me(e){var a=e.children,t=e.dir;return r.a.createElement(f.a,{component:"div",dir:t,style:{padding:"20px 0 0"}},a)}function pe(e){var a=e.open,t=e.handleClose,n=e.text,i=e.title,o=e.t;return r.a.createElement(R.a,{open:a,onClose:function(){return t(-1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(x.a,{id:"alert-dialog-title"},o(i)),r.a.createElement(F.a,null,r.a.createElement(L.a,{id:"alert-dialog-description"},o(n))),r.a.createElement(V.a,null,r.a.createElement(v.a,{onClick:function(){return t(1)},color:"primary"},o("Build")," \xa0 ",r.a.createElement(le.a,null)),r.a.createElement(v.a,{onClick:function(){return t(0)},color:"secondary",variant:"contained",autoFocus:!0},o("Cancel"))))}var ge=function(e){function a(){var e,t;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(j.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).packages=["opkg","ip6tables","odhcp6c","base-files","mtd","fstools","kmod-leds-gpio","busybox","wpad-mini","kmod-gpio-button-hotplug","kmod-mt76","logd","swconfig","dnsmasq","dropbear","ppp","netifd","ppp-mod-pppoe","uci","libc","uclient-fetch","kmod-ipt-offload","libgcc","odhcpd-ipv6only","iptables","firewall","luci"],t.deviceNames=[],t.deviceNamesID={},t.state={showDeviceData:!1,device:{},deviceLoaded:!1,devices:[],devicesLoaded:!1,searchResults:[],showSearch:!1,selectedSearchIndex:0,query:"",downloading:!1,packages:t.packages,release_version_number:"",packageName:""},t.basicInterface=0,t.confirmingBuild=!1,t.getDevicesData=function(){return fetch("https://chef.libremesh.org/download/json/devices.json").then(function(e){return e.json()})},t.getDeviceData=function(e){return fetch("https://chef.libremesh.org/download/json/"+e+".json").then(function(e){return e.json()})},t.selectDevice=function(e){if(null!=e){var a=t.deviceNamesID[e];t.setState({showDeviceData:!0,showSearch:!1,query:e,deviceLoaded:!1}),t.getDeviceData(a).then(function(e){t.setState({device:e,deviceLoaded:!0})})}},t.search=function(e){var a=e.target.value;t.setState({query:a,searchResults:[],showSearch:!1});var n=t.fuzzySet.get(a,void 0,0),r=[];if(null!=n)for(var i=0;i<n.length&&i<6;i++)r.push(n[i][1]);t.setState({searchResults:r,showSearch:a.length>0})},t.hideSearchResults=function(){t.setState({showSearch:!1})},t.changeInterface=function(e,a){t.basicInterface=a},t.downloadingImageIndicatorShow=function(e){t.setState({downloading:!0}),setTimeout(function(){t.setState({downloading:!1})},1e3)},t.changeAddPackageInput=function(e){t.setState({packageName:e.target.value})},t.deletePackage=function(e){var a=t.state.packages;a.splice(e,1),t.setState({packages:a})},t.addPackage=function(e){if(13===(e.which||e.keyCode)&&!e.shiftKey){var a=t.state.packages;t.state.packageName.split(/[,\n]+/).forEach(function(e){""!==(e=e.replace(" ",""))&&a.push(e)}),t.setState({packages:a,packageName:""})}},t.closeConfirmBuildDialog=function(e){t.confirmingBuild=!1,console.log(e)},t.openConfirmBuildDialog=function(){t.confirmingBuild=!0},t}return Object(z.a)(a,e),Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getDevicesData().then(function(a){Object.keys(a.devices).forEach(function(t){var n=a.devices[t];e.deviceNames.push(n),e.deviceNamesID[n]=t}),e.fuzzySet=ue()(e.deviceNames),e.setState({devices:a.devices,devicesLoaded:!0,release_version_number:a.version_number})})}},{key:"render",value:function(){var e=this,a=this.state.showDeviceData&&parseInt((this.state.device.image_size||"").slice(0,-1))<=4e3&&r.a.createElement(E.a,{className:"warning-432",elevation:0},r.a.createElement(q.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(q.a,{item:!0},r.a.createElement(oe.a,{className:"icon"})),r.a.createElement(q.a,{item:!0,xs:!0},this.props.t("Devices with \u22644MB flash and/or \u226432MB ram will work but they will be very limited (usually they can't install or run additional packages) because they have low RAM and flash space. Consider this when choosing a device to buy, or when deciding to flash OpenWrt on your device because it is listed as supported.")))),t=r.a.createElement(G.a,null),n=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h5"},this.props.t("Download OpenWrt firmware for your device!")),r.a.createElement(f.a,null,this.props.t("Please use the input below to download firmware for your device!")),r.a.createElement("br",null),r.a.createElement(_.a,{onClickAway:this.hideSearchResults},r.a.createElement("div",{className:"search-container"},r.a.createElement(y.a,{fullWidth:!0},r.a.createElement(he,{id:"outlined-adornment-search-devices",labeltext:this.props.t("Search your device"),value:this.state.query,onChange:this.search,onClick:this.search})),this.state.showSearch&&r.a.createElement(E.a,{elevation:4,className:"search-results"},r.a.createElement(K.a,null,this.state.searchResults.map(function(a,t){return r.a.createElement(T.a,{key:a,button:!0,onClick:function(){return e.selectDevice(a)}},r.a.createElement(J.a,{primary:r.a.createElement("div",null,a)}))}))),0===this.state.searchResults.length&&this.state.showSearch&&r.a.createElement(E.a,{elevation:4,className:"search-results"},r.a.createElement(T.a,null,r.a.createElement(J.a,{primary:this.props.t("No results")}))))),this.state.showDeviceData&&!this.state.deviceLoaded&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),t),this.state.showDeviceData&&this.state.deviceLoaded&&r.a.createElement(r.a.Fragment,null,a,r.a.createElement("br",null),r.a.createElement(q.a,{container:!0,className:"device-info"},r.a.createElement(q.a,{item:!0,xs:!0},r.a.createElement("b",null,this.props.t("Name"),": ")," ",this.state.device.title,"(",this.state.device.target,"/",this.state.device.subtarget,")"),r.a.createElement(q.a,{item:!0,xs:!0},r.a.createElement("b",null,this.props.t("Release Version"),": ")," ",this.state.release_version_number)),r.a.createElement(p.a,{className:"interface-switch-bar",position:"relative",elevation:0},r.a.createElement(U.a,{value:this.basicInterface,onChange:this.changeInterface},r.a.createElement($.a,{className:"interface-switch",label:this.props.t("Basic")}),r.a.createElement($.a,{className:"interface-switch",label:this.props.t("Advanced")}))),0===this.basicInterface?r.a.createElement(me,null,this.state.device.images.map(function(a,t){return r.a.createElement(v.a,{key:t,className:"download-button",href:"http://downloads.openwrt.org/snapshots/targets/"+e.state.device.target+"/"+e.state.device.subtarget+"/"+a.name,color:"primary",variant:"contained",onClick:function(){return e.downloadingImageIndicatorShow()}},r.a.createElement(re.a,{className:"download-icon"}),a.type)}),"\xa0",this.state.downloading&&r.a.createElement(G.a,{size:20})):r.a.createElement(me,null,r.a.createElement(E.a,{elevation:0,className:"package-list-input"},r.a.createElement("div",null,this.state.packages.map(function(a,t){return r.a.createElement(Z.a,{className:"package",key:a+t,onDelete:function(){return e.deletePackage(t)},label:a})}),r.a.createElement(H.a,{title:r.a.createElement("span",null,"Use comma or new line separated array.  ",r.a.createElement("br",null),"Press enter to apply.")},r.a.createElement(Q.a,{multiline:!0,value:this.state.packageName,onKeyUp:this.addPackage,onChange:this.changeAddPackageInput,placeholder:this.props.t("Add package(s)")}))),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"outlined",color:"primary",onClick:this.openConfirmBuildDialog},r.a.createElement(le.a,null),"\xa0",this.props.t("Build"))))));return r.a.createElement(X.a,{className:"home-container"},r.a.createElement(E.a,{className:"home-container-paper"},r.a.createElement(pe,{handleClose:this.closeConfirmBuildDialog,open:this.confirmingBuild,text:"Building image requires computation resources, so we would request you to check if this selection is what you want",title:"Please confirm that you want to perform this action",t:this.props.t}),this.state.devicesLoaded?n:t))}}]),a}(r.a.Component),fe=Object(D.c)()(ge),ve=Object(Y.a)(function(e){return{root:{padding:e.spacing(3,2)}}});function we(){var e=ve();return r.a.createElement(X.a,{style:{marginTop:"50px"}},r.a.createElement(E.a,{className:e.root,elevation:3},r.a.createElement(f.a,{variant:"h5",component:"h3"},"404 Page Not Found"),r.a.createElement(f.a,{component:"p"},"Please head to the home.")))}var be=t(203),Ee=Object(c.a)({palette:{primary:{main:"#3F51B5"},secondary:{main:"#009688"}}});var ye=function(){return r.a.createElement(u.a,{theme:Ee},r.a.createElement(n.Suspense,{fallback:r.a.createElement(be.a,null)},r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"",component:fe}),r.a.createElement(l.a,{default:!0,component:we}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=t(95),Se=t.n(ke),Be={en:{translation:t(96)},de:{translation:t(97)}};C.a.use(Se.a).use(D.a).init({resources:Be,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});C.a;o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e){e.exports={English:"English",German:"German",Submit:"Submit","Change Language":"Change Language","Search your device":"Search your device","No results":"No results",Model:"Model",Vendor:"Vendor",Variant:"Variant",Name:"Name","Release Version":"Release Version",Basic:"Basic",Advanced:"Advanced",Build:"Build",Cancel:"Cancel","Add package(s)":"Add package(s)","Please confirm that you want to perform this action":"Please confirm that you want to perform this action","Building image requires computation resources, so we would request you to check if this selection is what you want":"Building image requires computation resources, so we would request you to check if this selection is what you want","Devices with \u22644MB flash and/or \u226432MB ram will work but they will be very limited (usually they can't install or run additional packages) because they have low RAM and flash space. Consider this when choosing a device to buy, or when deciding to flash OpenWrt on your device because it is listed as supported.":"Devices with \u22644MB flash and/or \u226432MB ram will work but they will be very limited (usually they can't install or run additional packages) because they have low RAM and flash space. Consider this when choosing a device to buy, or when deciding to flash OpenWrt on your device because it is listed as supported.","OpenWrt Firmware Selector Wizard":"OpenWrt Firmware Selector Wizard","Download OpenWrt firmware for your device!":"Download OpenWrt firmware for your device!","Please use the input below to download firmware for your device!":"Please use the input below to download firmware for your device!"}},97:function(e){e.exports={English:"Englisch",German:"Deutsche",Submit:"Einreichen","Change Language":"Sprache \xe4ndern","Search your device":"Suchen Sie Ihr Ger\xe4t","No results":"Keine Ergebnisse",Model:"Modell",Vendor:"Verk\xe4ufer",Variant:"Variante",Name:"Name","Release Version":"Ver\xf6ffentlichungsversion",Basic:"Basic",Advanced:"Fortgeschritten",Build:"Bauen",Cancel:"Abbrechen","Add package(s)":"Paket (e) hinzuf\xfcgen","Please confirm that you want to perform this action":"Bitte best\xe4tigen Sie, dass Sie diese Aktion ausf\xfchren m\xf6chten","Building image requires computation resources, so we would request you to check if this selection is what you want":"Das Erstellen eines Image erfordert Rechenressourcen. Wir bitten Sie daher, zu pr\xfcfen, ob diese Auswahl Ihren W\xfcnschen entspricht","Devices with \u22644MB flash and/or \u226432MB ram will work but they will be very limited (usually they can't install or run additional packages) because they have low RAM and flash space. Consider this when choosing a device to buy, or when deciding to flash OpenWrt on your device because it is listed as supported.":"Ger\xe4te mit \u22644MB Flash und / oder \u226432MB RAM funktionieren, sind jedoch sehr eingeschr\xe4nkt (normalerweise k\xf6nnen sie keine zus\xe4tzlichen Pakete installieren oder ausf\xfchren), da sie \xfcber wenig RAM und Flash-Speicher verf\xfcgen. Ber\xfccksichtigen Sie dies, wenn Sie ein Ger\xe4t zum Kaufen ausw\xe4hlen oder wenn Sie OpenWrt auf Ihrem Ger\xe4t flashen, da es als unterst\xfctzt aufgef\xfchrt ist Zus\xe4tzliche Pakete k\xf6nnen nicht installiert oder ausgef\xfchrt werden, da sie \xfcber wenig RAM und wenig Flash-Speicher verf\xfcgen. Ber\xfccksichtigen Sie dies, wenn Sie ein Ger\xe4t zum Kaufen ausw\xe4hlen oder wenn Sie sich entscheiden, OpenWrt auf Ihrem Ger\xe4t zu flashen, da es als unterst\xfctzt aufgef\xfchrt ist.","OpenWrt Firmware Selector Wizard":"OpenWrt Firmware Selector Wizard","Download OpenWrt firmware for your device!":"Laden Sie die OpenWrt-Firmware f\xfcr Ihr Ger\xe4t herunter!","Please use the input below to download firmware for your device!":"Bitte benutzen Sie den unten stehenden Eingang, um die Firmware f\xfcr Ihr Ger\xe4t herunterzuladen!"}}},[[108,1,2]]]);
//# sourceMappingURL=main.795b42c0.chunk.js.map