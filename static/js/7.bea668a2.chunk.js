(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[7],{238:function(e,t,r){e.exports={formControl:"FormControls_formControl__20Vm3",error:"FormControls_error__PGvtL",errorMessageBlock:"FormControls_errorMessageBlock__6UYSD",rightSignError:"FormControls_rightSignError__1ozix",leftSignError:"FormControls_leftSignError__3LVnT",right:"FormControls_right__24pmc",left:"FormControls_left__22KrQ",errorMessage:"FormControls_errorMessage__1dqQA",summaryFormError:"FormControls_summaryFormError__2Y5V-"}},239:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));var n=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},s=(a(10),a(300),a(3e3)),i=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},240:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return p}));var n=r(243),a=r(0),s=r.n(a),i=r(238),o=r.n(i),l=r(66),m=r.n(l),c=function(e){e.input;var t=e.meta,r=Object(n.a)(e,["input","meta"]),a=r.checkSubmit?t.touched&&t.error&&t.submitFailed:t.touched&&t.error,i=r.side&&"right"===r.side?o.a.right:o.a.left,l=r.errorSignSide&&"right"===r.errorSignSide?o.a.rightSignError:o.a.leftSignError;return s.a.createElement("div",{className:o.a.formControl+" "+l+" "+r.wrapperClassName+" "+(a?o.a.error:"")},r.children,a?s.a.createElement("div",{className:m()(o.a.errorMessageBlock,i)},s.a.createElement("span",{className:o.a.errorMessage},t.error)):"")},u=function(e){var t=e.input,r=(e.meta,Object(n.a)(e,["input","meta"])),a=e.inputClassName?e.inputClassName:"",i=e.wrapperClassName?e.wrapperClassName:"";return s.a.createElement(c,Object.assign({},e,{side:e.side,errorSignSide:e.errorSignSide,wrapperClassName:i}),s.a.createElement("textarea",Object.assign({},t,r,{className:a})))},p=function(e){var t=e.input,r=(e.meta,Object(n.a)(e,["input","meta"])),a=e.inputClassName?e.inputClassName:"",i=e.wrapperClassName?e.wrapperClassName:"";return s.a.createElement(c,Object.assign({},e,{side:e.side,errorSignSide:e.errorSignSide,wrapperClassName:i}),s.a.createElement("input",Object.assign({},t,r,{className:a})))}},312:function(e,t,r){e.exports={settingsForm:"MyProfileSettings_settingsForm__2vhDT",settingsSectionTitle:"MyProfileSettings_settingsSectionTitle__YNPAA",settingsSectionInputs:"MyProfileSettings_settingsSectionInputs__2HFg2",settingsLabel:"MyProfileSettings_settingsLabel__184Ld",settingsInputBlock:"MyProfileSettings_settingsInputBlock__2ejYp",settingsFormTextarea:"MyProfileSettings_settingsFormTextarea__39G2r",settingsContactsInputBlock:"MyProfileSettings_settingsContactsInputBlock__3PilL",settingsContactsLabel:"MyProfileSettings_settingsContactsLabel__1cI8r",settingsButtonInputBlock:"MyProfileSettings_settingsButtonInputBlock__39aeH",settingsSubmitButton:"MyProfileSettings_settingsSubmitButton__1TBV4",settingsFormError:"MyProfileSettings_settingsFormError__Kmbzp"}},317:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(15),i=r(5),o=r(12),l=r(19),m=r(20),c=r(22),u=r(21),p=r(10),g=r(26),b=r(34),f=r(39),_=r(120),d=r(121),S=r(238),E=r.n(S),F=r(240),N=r(312),C=r.n(N),h=r(239),v=r(66),k=r.n(v),y=Object(d.a)({form:"myprofileSettings"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit,className:C.a.settingsForm},e.error?a.a.createElement("div",{className:E.a.summaryFormError+" "+C.a.settingsFormError},e.error):"",a.a.createElement("div",{className:C.a.settingsSectionInputs},a.a.createElement("div",{className:C.a.settingsSectionTitle},"Main information"),a.a.createElement("div",{className:C.a.settingsInputBlock},a.a.createElement("label",{className:C.a.settingsLabel,htmlFor:"rememberMe"},"Full name"),a.a.createElement(_.a,{inputClassName:C.a.settingsFormInput,wrapperClassName:C.a.settingsFormWrapper,component:F.a,name:"fullName",validate:[h.c],side:"right",errorSignSide:"rigth"})),a.a.createElement("div",{className:C.a.settingsInputBlock},a.a.createElement("label",{className:C.a.settingsLabel,htmlFor:"rememberMe"},"About me"),a.a.createElement(_.a,{inputClassName:C.a.settingsFormTextarea,wrapperClassName:C.a.settingsFormWrapper,component:F.b,name:"aboutMe"})),a.a.createElement("div",{className:C.a.settingsInputBlock},a.a.createElement("label",{className:C.a.settingsLabel,htmlFor:"lookingForAJob"},"Looking For A Job?"),a.a.createElement(_.a,{inputClassName:C.a.settingsFormCheckbox,wrapperClassName:C.a.settingsFormWrapper,component:F.a,type:"checkbox",name:"lookingForAJob"})),a.a.createElement("div",{className:C.a.settingsInputBlock},a.a.createElement("label",{className:C.a.settingsLabel,htmlFor:"rememberMe"},"Looking for a job description"),a.a.createElement(_.a,{inputClassName:C.a.settingsFormTextarea,wrapperClassName:C.a.settingsFormWrapper,component:F.b,name:"lookingForAJobDescription"}))),a.a.createElement("div",{className:C.a.settingsSectionInputs},a.a.createElement("div",{className:C.a.settingsSectionTitle},"Contacts"),Object.keys(e.profile.contacts).map((function(e){return a.a.createElement("div",{className:k()(C.a.settingsInputBlock,C.a.settingsContactsInputBlock)},a.a.createElement("label",{className:C.a.settingsLabel+" "+C.a.settingsContactsLabel+" "+e,htmlFor:"rememberMe"},e),a.a.createElement(_.a,{inputClassName:C.a.settingsFormInput,wrapperClassName:C.a.settingsFormWrapper,component:F.a,type:"text",name:"contacts."+e}))}))),a.a.createElement("div",{className:C.a.settingsButtonInputBlock},a.a.createElement("button",{className:C.a.settingsSubmitButton,type:"submit"},"Submit")))})),M=function(e){return a.a.createElement(y,Object.assign({onSubmit:function(t){e.onSubmitForm(t)}},e,{initialValues:e.profile}))},B=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onSubmitForm=function(t){e.props.saveProfile(t)},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.props.initProfile(this.props.id)}},{key:"componentWillUnmount",value:function(){this.props.unsetUserProfile()}},{key:"render",value:function(){return this.props.init?a.a.createElement(M,Object.assign({},this.props,{profile:this.props.profile,onSubmitForm:this.onSubmitForm})):a.a.createElement(b.a,null)}}]),r}(a.a.Component),j={unsetUserProfile:g.d,initProfile:g.b,saveProfile:g.c},I=Object(o.d)(Object(p.b)((function(e){return{id:Object(f.a)(e),profile:Object(f.b)(e),init:e.userProfileReducer.init}}),j))(B),O=function(e){return a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement(s.b,{to:"/settings/myprofile"},a.a.createElement("li",null,"My profile info"))))};t.default=Object(o.d)(i.g)((function(e){return-1!==e.location.pathname.indexOf("myprofile",e.location.pathname)?a.a.createElement(I,null):a.a.createElement(O,null)}))}}]);
//# sourceMappingURL=7.bea668a2.chunk.js.map