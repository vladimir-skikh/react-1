(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[6],{235:function(e,r,a){e.exports={formControl:"FormControls_formControl__20Vm3",error:"FormControls_error__PGvtL",errorMessageBlock:"FormControls_errorMessageBlock__6UYSD",rightSignError:"FormControls_rightSignError__1ozix",leftSignError:"FormControls_leftSignError__3LVnT",right:"FormControls_right__24pmc",left:"FormControls_left__22KrQ",errorMessage:"FormControls_errorMessage__1dqQA",summaryFormError:"FormControls_summaryFormError__2Y5V-"}},236:function(e,r,a){"use strict";a.d(r,"c",(function(){return t})),a.d(r,"b",(function(){return o})),a.d(r,"a",(function(){return i}));var t=function(e){return e?void 0:"Field is required"},n=function(e){return function(r){return r&&r.length>e?"Must be ".concat(e," characters or less"):void 0}},o=(n(10),n(300),n(3e3)),i=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},237:function(e,r,a){"use strict";a.d(r,"b",(function(){return m})),a.d(r,"a",(function(){return c}));var t=a(244),n=a(0),o=a.n(n),i=a(235),s=a.n(i),l=function(e){e.input;var r=e.meta,a=Object(t.a)(e,["input","meta"]),n=a.checkSubmit?r.touched&&r.error&&r.submitFailed:r.touched&&r.error,i=a.side&&"right"===a.side?s.a.right:s.a.left,l=a.errorSignSide&&"right"===a.errorSignSide?s.a.rightSignError:s.a.leftSignError;return o.a.createElement("div",{className:s.a.formControl+" "+l+" "+a.wrapperClassName+" "+(n?s.a.error:"")},a.children,n?o.a.createElement("div",{className:s.a.errorMessageBlock+" "+i},o.a.createElement("span",{className:s.a.errorMessage},r.error)):"")},m=function(e){var r=e.input,a=(e.meta,Object(t.a)(e,["input","meta"])),n=e.inputClassName?e.inputClassName:"",i=e.wrapperClassName?e.wrapperClassName:"";return o.a.createElement(l,Object.assign({},e,{side:e.side,errorSignSide:e.errorSignSide,wrapperClassName:i}),o.a.createElement("textarea",Object.assign({},r,a,{className:n})))},c=function(e){var r=e.input,a=(e.meta,Object(t.a)(e,["input","meta"])),n=e.inputClassName?e.inputClassName:"",i=e.wrapperClassName?e.wrapperClassName:"";return o.a.createElement(l,Object.assign({},e,{side:e.side,errorSignSide:e.errorSignSide,wrapperClassName:i}),o.a.createElement("input",Object.assign({},r,a,{className:n})))}},308:function(e,r,a){e.exports={login:"Login_login____9XR",formTitle:"Login_formTitle__sqK0p",formDescription:"Login_formDescription__3_fyp",loginInputBlock:"Login_loginInputBlock__3qIdN",loginFormInput:"Login_loginFormInput__1xw4L",loginFormCheckbox:"Login_loginFormCheckbox___N2ih",loginLabel:"Login_loginLabel__2cW9U",loginSubmitButton:"Login_loginSubmitButton__1hZOp"}},313:function(e,r,a){"use strict";a.r(r);var t=a(10),n=a(34),o=a(0),i=a.n(o),s=a(4),l=a(117),m=a(118),c=a(236),u=a(237),g=a(235),p=a.n(g),_=a(308),d=a.n(_),f=Object(m.a)({form:"login"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},e.error?i.a.createElement("div",{className:p.a.summaryFormError},e.error):"",i.a.createElement("div",{className:d.a.loginInputBlock},i.a.createElement(l.a,{inputClassName:d.a.loginFormInput,wrapperClassName:d.a.loginFormWrapper,component:u.a,type:"email",placeholder:"Email",name:"email",validate:[c.c,c.a],side:"right",errorSignSide:"right"})),i.a.createElement("div",{className:d.a.loginInputBlock},i.a.createElement(l.a,{inputClassName:d.a.loginFormInput,wrapperClassName:d.a.loginFormWrapper,component:u.a,type:"password",placeholder:"Password",name:"password",validate:[c.c],side:"right",errorSignSide:"right"})),i.a.createElement("div",{className:d.a.loginInputBlock},i.a.createElement("label",{className:d.a.loginLabel,htmlFor:"rememberMe"},"Remember Me"),i.a.createElement(l.a,{inputClassName:d.a.loginFormCheckbox,component:u.a,type:"checkbox",name:"rememberMe",errorSignSide:"right"})),i.a.createElement("div",{className:d.a.loginInputBlock},i.a.createElement("button",{className:d.a.loginSubmitButton,type:"submit"},"Sign in")))})),b=function(e){return e.isAuth?i.a.createElement(s.a,{to:"/profile"}):i.a.createElement("div",{className:d.a.login},i.a.createElement("h1",{className:d.a.formTitle},"Login"),i.a.createElement("div",{className:d.a.formDescription},"Log into your account"),i.a.createElement(f,{onSubmit:function(r){e.submitLogin(r)}}))},h={submitLogin:n.c},E=Object(t.b)((function(e){return{isAuth:e.authReducer.isAuth}}),h)(b);r.default=E}}]);
//# sourceMappingURL=6.fd7e5cf8.chunk.js.map