"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([["vendor-formik"],{73246:(e,t,r)=>{r.d(t,{$j:()=>K,F2:()=>X,J9:()=>j,TA:()=>w,U$:()=>H,gN:()=>G,j0:()=>Z,l0:()=>W,tP:()=>I,u6:()=>V,u9:()=>C});var n=r(70846),a=r(69670),i=r.n(a),u=r(45488),o=r(77862),l=r.n(o),c=r(30297),s=r.n(c),d=r(82325),f=r.n(d),p=r(60521),v=r(59679),h=r.n(v),m=r(69389),y=r.n(m);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function T(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function b(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){return Array.isArray(e)&&0===e.length},_=function(e){return"function"==typeof e},F=function(e){return null!==e&&"object"==typeof e},A=function(e){return"[object String]"===Object.prototype.toString.call(e)},R=function(e){return 0===n.Children.count(e)},O=function(e){return F(e)&&_(e.then)};function C(e,t,r,n){void 0===n&&(n=0);for(var a=f()(t);e&&n<a.length;)e=e[a[n++]];return void 0===e?r:e}function I(e,t,r){for(var n=s()(e),a=n,i=0,u=f()(t);i<u.length-1;i++){var o=u[i],l=C(e,u.slice(0,i+1));if(l&&(F(l)||Array.isArray(l)))a=a[o]=s()(l);else{var c=u[i+1];a=a[o]=String(Math.floor(Number(c)))===c&&Number(c)>=0?[]:{}}}return(0===i?e:a)[u[i]]===r?e:(void 0===r?delete a[u[i]]:a[u[i]]=r,0===i&&void 0===r&&delete n[u[i]],n)}var k=(0,n.createContext)(void 0),P=k.Provider,M=k.Consumer;function V(){var e=(0,n.useContext)(k);return e||(0,p.Z)(!1),e}function D(e,t){switch(t.type){case"SET_VALUES":return S({},e,{values:t.payload});case"SET_TOUCHED":return S({},e,{touched:t.payload});case"SET_ERRORS":if(i()(e.errors,t.payload))return e;return S({},e,{errors:t.payload});case"SET_STATUS":return S({},e,{status:t.payload});case"SET_ISSUBMITTING":return S({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return S({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return S({},e,{values:I(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return S({},e,{touched:I(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return S({},e,{errors:I(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return S({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return S({},e,{touched:function e(t,r,n,a){void 0===n&&(n=new WeakMap),void 0===a&&(a={});for(var i=0,u=Object.keys(t);i<u.length;i++){var o=u[i],l=t[o];F(l)?n.get(l)||(n.set(l,!0),a[o]=Array.isArray(l)?[]:{},e(l,r,n,a[o])):a[o]=r}return a}(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return S({},e,{isSubmitting:!1});default:return e}}var U={},L={};function w(e){var t=e.validateOnChange,r=void 0===t||t,a=e.validateOnBlur,o=void 0===a||a,c=e.validateOnMount,s=void 0!==c&&c,d=e.isInitialValid,f=e.enableReinitialize,p=void 0!==f&&f,v=e.onSubmit,h=T(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),m=S({validateOnChange:r,validateOnBlur:o,validateOnMount:s,onSubmit:v},h),y=(0,n.useRef)(m.initialValues),E=(0,n.useRef)(m.initialErrors||U),b=(0,n.useRef)(m.initialTouched||L),g=(0,n.useRef)(m.initialStatus),R=(0,n.useRef)(!1),k=(0,n.useRef)({});(0,n.useEffect)(function(){return R.current=!0,function(){R.current=!1}},[]);var P=(0,n.useReducer)(D,{values:m.initialValues,errors:m.initialErrors||U,touched:m.initialTouched||L,status:m.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),M=P[0],V=P[1],w=(0,n.useCallback)(function(e,t){return new Promise(function(r,n){var a=m.validate(e,t);null==a?r(U):O(a)?a.then(function(e){r(e||U)},function(e){n(e)}):r(a)})},[m.validate]),j=(0,n.useCallback)(function(e,t){var r,n,a,i=m.validationSchema,u=_(i)?i(t):i,o=t&&u.validateAt?u.validateAt(t,e):(void 0===r&&(r=!1),void 0===n&&(n={}),a=function e(t){var r=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=String(n);!0===Array.isArray(t[a])?r[a]=t[a].map(function(t){return!0===Array.isArray(t)||l()(t)?e(t):""!==t?t:void 0}):l()(t[a])?r[a]=e(t[a]):r[a]=""!==t[a]?t[a]:void 0}return r}(e),u[r?"validateSync":"validate"](a,{abortEarly:!1,context:n}));return new Promise(function(e,t){o.then(function(){e(U)},function(r){"ValidationError"===r.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return I(t,e.path,e.message);for(var r=e.inner,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var i,u=i;C(t,u.path)||(t=I(t,u.path,u.message))}}return t}(r)):t(r)})})},[m.validationSchema]),B=(0,n.useCallback)(function(e,t){return new Promise(function(r){return r(k.current[e].validate(t))})},[]),H=(0,n.useCallback)(function(e){var t=Object.keys(k.current).filter(function(e){return _(k.current[e].validate)});return Promise.all(t.length>0?t.map(function(t){return B(t,C(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(e){return e.reduce(function(e,r,n){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===r||r&&(e=I(e,t[n],r)),e},{})})},[B]),G=(0,n.useCallback)(function(e){return Promise.all([H(e),m.validationSchema?j(e):{},m.validate?w(e):{}]).then(function(e){var t=e[0],r=e[1],n=e[2];return u.Z.all([t,r,n],{arrayMerge:N})})},[m.validate,m.validationSchema,H,w,j]),W=x(function(e){return void 0===e&&(e=M.values),V({type:"SET_ISVALIDATING",payload:!0}),G(e).then(function(e){return R.current&&(V({type:"SET_ISVALIDATING",payload:!1}),i()(M.errors,e)||V({type:"SET_ERRORS",payload:e})),e})});(0,n.useEffect)(function(){s&&!0===R.current&&i()(y.current,m.initialValues)&&W(y.current)},[s,W]);var Z=(0,n.useCallback)(function(e){var t=e&&e.values?e.values:y.current,r=e&&e.errors?e.errors:E.current?E.current:m.initialErrors||{},n=e&&e.touched?e.touched:b.current?b.current:m.initialTouched||{},a=e&&e.status?e.status:g.current?g.current:m.initialStatus;y.current=t,E.current=r,b.current=n,g.current=a;var i=function(){V({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:r,touched:n,status:a,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(m.onReset){var u=m.onReset(M.values,es);O(u)?u.then(i):i()}else i()},[m.initialErrors,m.initialStatus,m.initialTouched]);(0,n.useEffect)(function(){!0===R.current&&!i()(y.current,m.initialValues)&&(p&&(y.current=m.initialValues,Z()),s&&W(y.current))},[p,m.initialValues,Z,s,W]),(0,n.useEffect)(function(){p&&!0===R.current&&!i()(E.current,m.initialErrors)&&(E.current=m.initialErrors||U,V({type:"SET_ERRORS",payload:m.initialErrors||U}))},[p,m.initialErrors]),(0,n.useEffect)(function(){p&&!0===R.current&&!i()(b.current,m.initialTouched)&&(b.current=m.initialTouched||L,V({type:"SET_TOUCHED",payload:m.initialTouched||L}))},[p,m.initialTouched]),(0,n.useEffect)(function(){p&&!0===R.current&&!i()(g.current,m.initialStatus)&&(g.current=m.initialStatus,V({type:"SET_STATUS",payload:m.initialStatus}))},[p,m.initialStatus,m.initialTouched]);var K=x(function(e){if(k.current[e]&&_(k.current[e].validate)){var t=C(M.values,e),r=k.current[e].validate(t);return O(r)?(V({type:"SET_ISVALIDATING",payload:!0}),r.then(function(e){return e}).then(function(t){V({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),V({type:"SET_ISVALIDATING",payload:!1})})):(V({type:"SET_FIELD_ERROR",payload:{field:e,value:r}}),Promise.resolve(r))}return m.validationSchema?(V({type:"SET_ISVALIDATING",payload:!0}),j(M.values,e).then(function(e){return e}).then(function(t){V({type:"SET_FIELD_ERROR",payload:{field:e,value:t[e]}}),V({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),z=(0,n.useCallback)(function(e,t){var r=t.validate;k.current[e]={validate:r}},[]),Y=(0,n.useCallback)(function(e){delete k.current[e]},[]),$=x(function(e,t){return V({type:"SET_TOUCHED",payload:e}),(void 0===t?o:t)?W(M.values):Promise.resolve()}),J=(0,n.useCallback)(function(e){V({type:"SET_ERRORS",payload:e})},[]),q=x(function(e,t){var n=_(e)?e(M.values):e;return V({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?W(n):Promise.resolve()}),Q=(0,n.useCallback)(function(e,t){V({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),X=x(function(e,t,n){return V({type:"SET_FIELD_VALUE",payload:{field:e,value:t}}),(void 0===n?r:n)?W(I(M.values,e,t)):Promise.resolve()}),ee=(0,n.useCallback)(function(e,t){var r,n=t,a=e;if(!A(e)){e.persist&&e.persist();var i=e.target?e.target:e.currentTarget,u=i.type,o=i.name,l=i.id,c=i.value,s=i.checked,d=(i.outerHTML,i.options),f=i.multiple;n=t||o||l,a=/number|range/.test(u)?isNaN(r=parseFloat(c))?"":r:/checkbox/.test(u)?function(e,t,r){if("boolean"==typeof e)return!!t;var n=[],a=!1,i=-1;if(Array.isArray(e))n=e,a=(i=e.indexOf(r))>=0;else if(!r||"true"==r||"false"==r)return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,i).concat(n.slice(i+1)):n}(C(M.values,n),s,c):f?Array.from(d).filter(function(e){return e.selected}).map(function(e){return e.value}):c}n&&X(n,a)},[X,M.values]),et=x(function(e){if(A(e))return function(t){return ee(t,e)};ee(e)}),er=x(function(e,t,r){return void 0===t&&(t=!0),V({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===r?o:r)?W(M.values):Promise.resolve()}),en=(0,n.useCallback)(function(e,t){e.persist&&e.persist();var r=e.target,n=r.name,a=r.id;r.outerHTML,er(t||n||a,!0)},[er]),ea=x(function(e){if(A(e))return function(t){return en(t,e)};en(e)}),ei=(0,n.useCallback)(function(e){_(e)?V({type:"SET_FORMIK_STATE",payload:e}):V({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),eu=(0,n.useCallback)(function(e){V({type:"SET_STATUS",payload:e})},[]),eo=(0,n.useCallback)(function(e){V({type:"SET_ISSUBMITTING",payload:e})},[]),el=x(function(){return V({type:"SUBMIT_ATTEMPT"}),W().then(function(e){var t,r=e instanceof Error;if(!r&&0===Object.keys(e).length){try{if(t=ed(),void 0===t)return}catch(e){throw e}return Promise.resolve(t).then(function(e){return R.current&&V({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(R.current)throw V({type:"SUBMIT_FAILURE"}),e})}if(R.current&&(V({type:"SUBMIT_FAILURE"}),r))throw e})}),ec=x(function(e){e&&e.preventDefault&&_(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&_(e.stopPropagation)&&e.stopPropagation(),el().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),es={resetForm:Z,validateForm:W,validateField:K,setErrors:J,setFieldError:Q,setFieldTouched:er,setFieldValue:X,setStatus:eu,setSubmitting:eo,setTouched:$,setValues:q,setFormikState:ei,submitForm:el},ed=x(function(){return v(M.values,es)}),ef=x(function(e){e&&e.preventDefault&&_(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&_(e.stopPropagation)&&e.stopPropagation(),Z()}),ep=(0,n.useCallback)(function(e){return{value:C(M.values,e),error:C(M.errors,e),touched:!!C(M.touched,e),initialValue:C(y.current,e),initialTouched:!!C(b.current,e),initialError:C(E.current,e)}},[M.errors,M.touched,M.values]),ev=(0,n.useCallback)(function(e){return{setValue:function(t,r){return X(e,t,r)},setTouched:function(t,r){return er(e,t,r)},setError:function(t){return Q(e,t)}}},[X,er,Q]),eh=(0,n.useCallback)(function(e){var t=F(e),r=t?e.name:e,n=C(M.values,r),a={name:r,value:n,onChange:et,onBlur:ea};if(t){var i=e.type,u=e.value,o=e.as,l=e.multiple;"checkbox"===i?void 0===u?a.checked=!!n:(a.checked=!!(Array.isArray(n)&&~n.indexOf(u)),a.value=u):"radio"===i?(a.checked=n===u,a.value=u):"select"===o&&l&&(a.value=a.value||[],a.multiple=!0)}return a},[ea,et,M.values]),em=(0,n.useMemo)(function(){return!i()(y.current,M.values)},[y.current,M.values]),ey=(0,n.useMemo)(function(){return void 0!==d?em?M.errors&&0===Object.keys(M.errors).length:!1!==d&&_(d)?d(m):d:M.errors&&0===Object.keys(M.errors).length},[d,em,M.errors,m]);return S({},M,{initialValues:y.current,initialErrors:E.current,initialTouched:b.current,initialStatus:g.current,handleBlur:ea,handleChange:et,handleReset:ef,handleSubmit:ec,resetForm:Z,setErrors:J,setFormikState:ei,setFieldTouched:er,setFieldValue:X,setFieldError:Q,setStatus:eu,setSubmitting:eo,setTouched:$,setValues:q,submitForm:el,validateForm:W,validateField:K,isValid:ey,dirty:em,unregisterField:Y,registerField:z,getFieldProps:eh,getFieldMeta:ep,getFieldHelpers:ev,validateOnBlur:o,validateOnChange:r,validateOnMount:s})}function j(e){var t=w(e),r=e.component,a=e.children,i=e.render,u=e.innerRef;return(0,n.useImperativeHandle)(u,function(){return t}),(0,n.createElement)(P,{value:t},r?(0,n.createElement)(r,t):i?i(t):a?_(a)?a(t):R(a)?null:n.Children.only(a):null)}function N(e,t,r){var n=e.slice();return t.forEach(function(t,a){if(void 0===n[a]){var i=!1!==r.clone&&r.isMergeableObject(t);n[a]=i?(0,u.Z)(Array.isArray(t)?[]:{},t,r):t}else r.isMergeableObject(t)?n[a]=(0,u.Z)(e[a],t,r):-1===e.indexOf(t)&&n.push(t)}),n}var B="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function x(e){var t=(0,n.useRef)(e);return B(function(){t.current=e}),(0,n.useCallback)(function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(void 0,r)},[])}function H(e){var t=V(),r=t.getFieldProps,a=t.getFieldMeta,i=t.getFieldHelpers,u=t.registerField,o=t.unregisterField,l=F(e)?e:{name:e},c=l.name,s=l.validate;return(0,n.useEffect)(function(){return c&&u(c,{validate:s}),function(){c&&o(c)}},[u,o,c,s]),c||(0,p.Z)(!1),[r(l),a(c),i(c)]}function G(e){var t=e.validate,r=e.name,a=e.render,i=e.children,u=e.as,o=e.component,l=T(e,["validate","name","render","children","as","component"]),c=T(V(),["validate","validationSchema"]),s=c.registerField,d=c.unregisterField;(0,n.useEffect)(function(){return s(r,{validate:t}),function(){d(r)}},[s,d,r,t]);var f=c.getFieldProps(S({name:r},l)),p=c.getFieldMeta(r),v={field:f,form:c};if(a)return a(S({},v,{meta:p}));if(_(i))return i(S({},v,{meta:p}));if(o){if("string"==typeof o){var h=l.innerRef,m=T(l,["innerRef"]);return(0,n.createElement)(o,S({ref:h},f,m),i)}return(0,n.createElement)(o,S({field:f,form:c},l),i)}var y=u||"input";if("string"==typeof y){var E=l.innerRef,b=T(l,["innerRef"]);return(0,n.createElement)(y,S({ref:E},f,b),i)}return(0,n.createElement)(y,S({},f,l),i)}var W=(0,n.forwardRef)(function(e,t){var r=e.action,a=T(e,["action"]),i=V(),u=i.handleReset,o=i.handleSubmit;return(0,n.createElement)("form",Object.assign({onSubmit:o,ref:t,onReset:u,action:r||"#"},a))});function Z(e){var t=e.mapPropsToValues,r=void 0===t?function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&"function"!=typeof e[r]&&(t[r]=e[r]);return t}:t,a=T(e,["mapPropsToValues"]);return function(e){var t=e.displayName||e.name||e.constructor&&e.constructor.name||"Component",i=function(t){function i(){var r;return r=t.apply(this,arguments)||this,r.validate=function(e){return a.validate(e,r.props)},r.validationSchema=function(){return _(a.validationSchema)?a.validationSchema(r.props):a.validationSchema},r.handleSubmit=function(e,t){return a.handleSubmit(e,S({},t,{props:r.props}))},r.renderFormComponent=function(t){return(0,n.createElement)(e,Object.assign({},r.props,t))},r}return E(i,t),i.prototype.render=function(){var e=T(this.props,["children"]);return(0,n.createElement)(j,Object.assign({},e,a,{validate:a.validate&&this.validate,validationSchema:a.validationSchema&&this.validationSchema,initialValues:r(this.props),initialStatus:a.mapPropsToStatus&&a.mapPropsToStatus(this.props),initialErrors:a.mapPropsToErrors&&a.mapPropsToErrors(this.props),initialTouched:a.mapPropsToTouched&&a.mapPropsToTouched(this.props),onSubmit:this.handleSubmit,children:this.renderFormComponent}))},i}(n.Component);return i.displayName="WithFormik("+t+")",h()(i,e)}}function K(e){var t=function(t){return(0,n.createElement)(M,null,function(r){return r||(0,p.Z)(!1),(0,n.createElement)(e,Object.assign({},t,{formik:r}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",h()(t,e)}W.displayName="Form";var z=function(e,t,r){var n=q(e),a=n[t];return n.splice(t,1),n.splice(r,0,a),n},Y=function(e,t,r){var n=q(e),a=n[t];return n[t]=n[r],n[r]=a,n},$=function(e,t,r){var n=q(e);return n.splice(t,0,r),n},J=function(e,t,r){var n=q(e);return n[t]=r,n},q=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(S({},e,{length:t+1}))},Q=function(e){function t(t){var r;return(r=e.call(this,t)||this).updateArrayField=function(e,t,n){var a=r.props,i=a.name;(0,a.formik.setFormikState)(function(r){var a=I(r.values,i,e(C(r.values,i))),u=n?("function"==typeof n?n:e)(C(r.errors,i)):void 0,o=t?("function"==typeof t?t:e)(C(r.touched,i)):void 0;return g(u)&&(u=void 0),g(o)&&(o=void 0),S({},r,{values:a,errors:n?I(r.errors,i,u):r.errors,touched:t?I(r.touched,i,o):r.touched})})},r.push=function(e){return r.updateArrayField(function(t){return[].concat(q(t),[y()(e)])},!1,!1)},r.handlePush=function(e){return function(){return r.push(e)}},r.swap=function(e,t){return r.updateArrayField(function(r){return Y(r,e,t)},!0,!0)},r.handleSwap=function(e,t){return function(){return r.swap(e,t)}},r.move=function(e,t){return r.updateArrayField(function(r){return z(r,e,t)},!0,!0)},r.handleMove=function(e,t){return function(){return r.move(e,t)}},r.insert=function(e,t){return r.updateArrayField(function(r){return $(r,e,t)},function(t){return $(t,e,null)},function(t){return $(t,e,null)})},r.handleInsert=function(e,t){return function(){return r.insert(e,t)}},r.replace=function(e,t){return r.updateArrayField(function(r){return J(r,e,t)},!1,!1)},r.handleReplace=function(e,t){return function(){return r.replace(e,t)}},r.unshift=function(e){var t=-1;return r.updateArrayField(function(r){var n=r?[e].concat(r):[e];return t<0&&(t=n.length),n},function(e){var r=e?[null].concat(e):[null];return t<0&&(t=r.length),r},function(e){var r=e?[null].concat(e):[null];return t<0&&(t=r.length),r}),t},r.handleUnshift=function(e){return function(){return r.unshift(e)}},r.handleRemove=function(e){return function(){return r.remove(e)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(b(r)),r.pop=r.pop.bind(b(r)),r}E(t,e);var r=t.prototype;return r.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!i()(C(e.formik.values,e.name),C(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(e){var t;return this.updateArrayField(function(r){var n=r?q(r):[];return t||(t=n[e]),_(n.splice)&&n.splice(e,1),n},!0,!0),t},r.pop=function(){var e;return this.updateArrayField(function(t){return e||(e=t&&t.pop&&t.pop()),t},!0,!0),e},r.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,r=t.component,a=t.render,i=t.children,u=t.name,o=T(t.formik,["validate","validationSchema"]),l=S({},e,{form:o,name:u});return r?(0,n.createElement)(r,l):a?a(l):i?"function"==typeof i?i(l):R(i)?null:n.Children.only(i):null},t}(n.Component);Q.defaultProps={validateOnChange:!0};var X=K(Q)}}]);