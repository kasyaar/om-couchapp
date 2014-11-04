// Compiled by ClojureScript 0.0-2311
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3553__auto__ = elem.textContent;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__14000_SHARP_){return !((p1__14000_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var style = elem.style;var seq__14007_14013 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__14008_14014 = null;var count__14009_14015 = (0);var i__14010_14016 = (0);while(true){
if((i__14010_14016 < count__14009_14015))
{var vec__14011_14017 = cljs.core._nth.call(null,chunk__14008_14014,i__14010_14016);var k_14018 = cljs.core.nth.call(null,vec__14011_14017,(0),null);var v_14019 = cljs.core.nth.call(null,vec__14011_14017,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_14018),v_14019);
{
var G__14020 = seq__14007_14013;
var G__14021 = chunk__14008_14014;
var G__14022 = count__14009_14015;
var G__14023 = (i__14010_14016 + (1));
seq__14007_14013 = G__14020;
chunk__14008_14014 = G__14021;
count__14009_14015 = G__14022;
i__14010_14016 = G__14023;
continue;
}
} else
{var temp__4126__auto___14024 = cljs.core.seq.call(null,seq__14007_14013);if(temp__4126__auto___14024)
{var seq__14007_14025__$1 = temp__4126__auto___14024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14007_14025__$1))
{var c__4309__auto___14026 = cljs.core.chunk_first.call(null,seq__14007_14025__$1);{
var G__14027 = cljs.core.chunk_rest.call(null,seq__14007_14025__$1);
var G__14028 = c__4309__auto___14026;
var G__14029 = cljs.core.count.call(null,c__4309__auto___14026);
var G__14030 = (0);
seq__14007_14013 = G__14027;
chunk__14008_14014 = G__14028;
count__14009_14015 = G__14029;
i__14010_14016 = G__14030;
continue;
}
} else
{var vec__14012_14031 = cljs.core.first.call(null,seq__14007_14025__$1);var k_14032 = cljs.core.nth.call(null,vec__14012_14031,(0),null);var v_14033 = cljs.core.nth.call(null,vec__14012_14031,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_14032),v_14033);
{
var G__14034 = cljs.core.next.call(null,seq__14007_14025__$1);
var G__14035 = null;
var G__14036 = (0);
var G__14037 = (0);
seq__14007_14013 = G__14034;
chunk__14008_14014 = G__14035;
count__14009_14015 = G__14036;
i__14010_14016 = G__14037;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14038){
var elem = cljs.core.first(arglist__14038);
var kvs = cljs.core.rest(arglist__14038);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__14045_14051 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__14046_14052 = null;var count__14047_14053 = (0);var i__14048_14054 = (0);while(true){
if((i__14048_14054 < count__14047_14053))
{var vec__14049_14055 = cljs.core._nth.call(null,chunk__14046_14052,i__14048_14054);var k_14056 = cljs.core.nth.call(null,vec__14049_14055,(0),null);var v_14057 = cljs.core.nth.call(null,vec__14049_14055,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_14056,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14057)+"px"));
{
var G__14058 = seq__14045_14051;
var G__14059 = chunk__14046_14052;
var G__14060 = count__14047_14053;
var G__14061 = (i__14048_14054 + (1));
seq__14045_14051 = G__14058;
chunk__14046_14052 = G__14059;
count__14047_14053 = G__14060;
i__14048_14054 = G__14061;
continue;
}
} else
{var temp__4126__auto___14062 = cljs.core.seq.call(null,seq__14045_14051);if(temp__4126__auto___14062)
{var seq__14045_14063__$1 = temp__4126__auto___14062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14045_14063__$1))
{var c__4309__auto___14064 = cljs.core.chunk_first.call(null,seq__14045_14063__$1);{
var G__14065 = cljs.core.chunk_rest.call(null,seq__14045_14063__$1);
var G__14066 = c__4309__auto___14064;
var G__14067 = cljs.core.count.call(null,c__4309__auto___14064);
var G__14068 = (0);
seq__14045_14051 = G__14065;
chunk__14046_14052 = G__14066;
count__14047_14053 = G__14067;
i__14048_14054 = G__14068;
continue;
}
} else
{var vec__14050_14069 = cljs.core.first.call(null,seq__14045_14063__$1);var k_14070 = cljs.core.nth.call(null,vec__14050_14069,(0),null);var v_14071 = cljs.core.nth.call(null,vec__14050_14069,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_14070,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14071)+"px"));
{
var G__14072 = cljs.core.next.call(null,seq__14045_14063__$1);
var G__14073 = null;
var G__14074 = (0);
var G__14075 = (0);
seq__14045_14051 = G__14072;
chunk__14046_14052 = G__14073;
count__14047_14053 = G__14074;
i__14048_14054 = G__14075;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14076){
var elem = cljs.core.first(arglist__14076);
var kvs = cljs.core.rest(arglist__14076);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__14085 = elem;(G__14085[k__$1] = v);
return G__14085;
} else
{var G__14086 = elem;G__14086.setAttribute(k__$1,v);
return G__14086;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14093__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__14087_14094 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__14088_14095 = null;var count__14089_14096 = (0);var i__14090_14097 = (0);while(true){
if((i__14090_14097 < count__14089_14096))
{var vec__14091_14098 = cljs.core._nth.call(null,chunk__14088_14095,i__14090_14097);var k_14099__$1 = cljs.core.nth.call(null,vec__14091_14098,(0),null);var v_14100__$1 = cljs.core.nth.call(null,vec__14091_14098,(1),null);set_attr_BANG_.call(null,elem,k_14099__$1,v_14100__$1);
{
var G__14101 = seq__14087_14094;
var G__14102 = chunk__14088_14095;
var G__14103 = count__14089_14096;
var G__14104 = (i__14090_14097 + (1));
seq__14087_14094 = G__14101;
chunk__14088_14095 = G__14102;
count__14089_14096 = G__14103;
i__14090_14097 = G__14104;
continue;
}
} else
{var temp__4126__auto___14105 = cljs.core.seq.call(null,seq__14087_14094);if(temp__4126__auto___14105)
{var seq__14087_14106__$1 = temp__4126__auto___14105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14087_14106__$1))
{var c__4309__auto___14107 = cljs.core.chunk_first.call(null,seq__14087_14106__$1);{
var G__14108 = cljs.core.chunk_rest.call(null,seq__14087_14106__$1);
var G__14109 = c__4309__auto___14107;
var G__14110 = cljs.core.count.call(null,c__4309__auto___14107);
var G__14111 = (0);
seq__14087_14094 = G__14108;
chunk__14088_14095 = G__14109;
count__14089_14096 = G__14110;
i__14090_14097 = G__14111;
continue;
}
} else
{var vec__14092_14112 = cljs.core.first.call(null,seq__14087_14106__$1);var k_14113__$1 = cljs.core.nth.call(null,vec__14092_14112,(0),null);var v_14114__$1 = cljs.core.nth.call(null,vec__14092_14112,(1),null);set_attr_BANG_.call(null,elem,k_14113__$1,v_14114__$1);
{
var G__14115 = cljs.core.next.call(null,seq__14087_14106__$1);
var G__14116 = null;
var G__14117 = (0);
var G__14118 = (0);
seq__14087_14094 = G__14115;
chunk__14088_14095 = G__14116;
count__14089_14096 = G__14117;
i__14090_14097 = G__14118;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__14093 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14093__delegate.call(this,elem,k,v,kvs);};
G__14093.cljs$lang$maxFixedArity = 3;
G__14093.cljs$lang$applyTo = (function (arglist__14119){
var elem = cljs.core.first(arglist__14119);
arglist__14119 = cljs.core.next(arglist__14119);
var k = cljs.core.first(arglist__14119);
arglist__14119 = cljs.core.next(arglist__14119);
var v = cljs.core.first(arglist__14119);
var kvs = cljs.core.rest(arglist__14119);
return G__14093__delegate(elem,k,v,kvs);
});
G__14093.cljs$core$IFn$_invoke$arity$variadic = G__14093__delegate;
return G__14093;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_14128__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_14128__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_14128__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__14129__delegate = function (elem,k,ks){var seq__14124_14130 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14125_14131 = null;var count__14126_14132 = (0);var i__14127_14133 = (0);while(true){
if((i__14127_14133 < count__14126_14132))
{var k_14134__$1 = cljs.core._nth.call(null,chunk__14125_14131,i__14127_14133);remove_attr_BANG_.call(null,elem,k_14134__$1);
{
var G__14135 = seq__14124_14130;
var G__14136 = chunk__14125_14131;
var G__14137 = count__14126_14132;
var G__14138 = (i__14127_14133 + (1));
seq__14124_14130 = G__14135;
chunk__14125_14131 = G__14136;
count__14126_14132 = G__14137;
i__14127_14133 = G__14138;
continue;
}
} else
{var temp__4126__auto___14139 = cljs.core.seq.call(null,seq__14124_14130);if(temp__4126__auto___14139)
{var seq__14124_14140__$1 = temp__4126__auto___14139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14124_14140__$1))
{var c__4309__auto___14141 = cljs.core.chunk_first.call(null,seq__14124_14140__$1);{
var G__14142 = cljs.core.chunk_rest.call(null,seq__14124_14140__$1);
var G__14143 = c__4309__auto___14141;
var G__14144 = cljs.core.count.call(null,c__4309__auto___14141);
var G__14145 = (0);
seq__14124_14130 = G__14142;
chunk__14125_14131 = G__14143;
count__14126_14132 = G__14144;
i__14127_14133 = G__14145;
continue;
}
} else
{var k_14146__$1 = cljs.core.first.call(null,seq__14124_14140__$1);remove_attr_BANG_.call(null,elem,k_14146__$1);
{
var G__14147 = cljs.core.next.call(null,seq__14124_14140__$1);
var G__14148 = null;
var G__14149 = (0);
var G__14150 = (0);
seq__14124_14130 = G__14147;
chunk__14125_14131 = G__14148;
count__14126_14132 = G__14149;
i__14127_14133 = G__14150;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__14129 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14129__delegate.call(this,elem,k,ks);};
G__14129.cljs$lang$maxFixedArity = 2;
G__14129.cljs$lang$applyTo = (function (arglist__14151){
var elem = cljs.core.first(arglist__14151);
arglist__14151 = cljs.core.next(arglist__14151);
var k = cljs.core.first(arglist__14151);
var ks = cljs.core.rest(arglist__14151);
return G__14129__delegate(elem,k,ks);
});
G__14129.cljs$core$IFn$_invoke$arity$variadic = G__14129__delegate;
return G__14129;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___14176 = elem.classList;if(cljs.core.truth_(temp__4124__auto___14176))
{var class_list_14177 = temp__4124__auto___14176;var seq__14164_14178 = cljs.core.seq.call(null,classes__$1);var chunk__14165_14179 = null;var count__14166_14180 = (0);var i__14167_14181 = (0);while(true){
if((i__14167_14181 < count__14166_14180))
{var c_14182 = cljs.core._nth.call(null,chunk__14165_14179,i__14167_14181);class_list_14177.add(c_14182);
{
var G__14183 = seq__14164_14178;
var G__14184 = chunk__14165_14179;
var G__14185 = count__14166_14180;
var G__14186 = (i__14167_14181 + (1));
seq__14164_14178 = G__14183;
chunk__14165_14179 = G__14184;
count__14166_14180 = G__14185;
i__14167_14181 = G__14186;
continue;
}
} else
{var temp__4126__auto___14187 = cljs.core.seq.call(null,seq__14164_14178);if(temp__4126__auto___14187)
{var seq__14164_14188__$1 = temp__4126__auto___14187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14164_14188__$1))
{var c__4309__auto___14189 = cljs.core.chunk_first.call(null,seq__14164_14188__$1);{
var G__14190 = cljs.core.chunk_rest.call(null,seq__14164_14188__$1);
var G__14191 = c__4309__auto___14189;
var G__14192 = cljs.core.count.call(null,c__4309__auto___14189);
var G__14193 = (0);
seq__14164_14178 = G__14190;
chunk__14165_14179 = G__14191;
count__14166_14180 = G__14192;
i__14167_14181 = G__14193;
continue;
}
} else
{var c_14194 = cljs.core.first.call(null,seq__14164_14188__$1);class_list_14177.add(c_14194);
{
var G__14195 = cljs.core.next.call(null,seq__14164_14188__$1);
var G__14196 = null;
var G__14197 = (0);
var G__14198 = (0);
seq__14164_14178 = G__14195;
chunk__14165_14179 = G__14196;
count__14166_14180 = G__14197;
i__14167_14181 = G__14198;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__14168_14199 = cljs.core.seq.call(null,classes__$1);var chunk__14169_14200 = null;var count__14170_14201 = (0);var i__14171_14202 = (0);while(true){
if((i__14171_14202 < count__14170_14201))
{var c_14203 = cljs.core._nth.call(null,chunk__14169_14200,i__14171_14202);var class_name_14204 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_14204,c_14203)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_14204 === ""))?c_14203:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14204)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_14203))));
}
{
var G__14205 = seq__14168_14199;
var G__14206 = chunk__14169_14200;
var G__14207 = count__14170_14201;
var G__14208 = (i__14171_14202 + (1));
seq__14168_14199 = G__14205;
chunk__14169_14200 = G__14206;
count__14170_14201 = G__14207;
i__14171_14202 = G__14208;
continue;
}
} else
{var temp__4126__auto___14209 = cljs.core.seq.call(null,seq__14168_14199);if(temp__4126__auto___14209)
{var seq__14168_14210__$1 = temp__4126__auto___14209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14168_14210__$1))
{var c__4309__auto___14211 = cljs.core.chunk_first.call(null,seq__14168_14210__$1);{
var G__14212 = cljs.core.chunk_rest.call(null,seq__14168_14210__$1);
var G__14213 = c__4309__auto___14211;
var G__14214 = cljs.core.count.call(null,c__4309__auto___14211);
var G__14215 = (0);
seq__14168_14199 = G__14212;
chunk__14169_14200 = G__14213;
count__14170_14201 = G__14214;
i__14171_14202 = G__14215;
continue;
}
} else
{var c_14216 = cljs.core.first.call(null,seq__14168_14210__$1);var class_name_14217 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_14217,c_14216)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_14217 === ""))?c_14216:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14217)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_14216))));
}
{
var G__14218 = cljs.core.next.call(null,seq__14168_14210__$1);
var G__14219 = null;
var G__14220 = (0);
var G__14221 = (0);
seq__14168_14199 = G__14218;
chunk__14169_14200 = G__14219;
count__14170_14201 = G__14220;
i__14171_14202 = G__14221;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__14222__delegate = function (elem,classes,more_classes){var seq__14172_14223 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14173_14224 = null;var count__14174_14225 = (0);var i__14175_14226 = (0);while(true){
if((i__14175_14226 < count__14174_14225))
{var c_14227 = cljs.core._nth.call(null,chunk__14173_14224,i__14175_14226);add_class_BANG_.call(null,elem,c_14227);
{
var G__14228 = seq__14172_14223;
var G__14229 = chunk__14173_14224;
var G__14230 = count__14174_14225;
var G__14231 = (i__14175_14226 + (1));
seq__14172_14223 = G__14228;
chunk__14173_14224 = G__14229;
count__14174_14225 = G__14230;
i__14175_14226 = G__14231;
continue;
}
} else
{var temp__4126__auto___14232 = cljs.core.seq.call(null,seq__14172_14223);if(temp__4126__auto___14232)
{var seq__14172_14233__$1 = temp__4126__auto___14232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14172_14233__$1))
{var c__4309__auto___14234 = cljs.core.chunk_first.call(null,seq__14172_14233__$1);{
var G__14235 = cljs.core.chunk_rest.call(null,seq__14172_14233__$1);
var G__14236 = c__4309__auto___14234;
var G__14237 = cljs.core.count.call(null,c__4309__auto___14234);
var G__14238 = (0);
seq__14172_14223 = G__14235;
chunk__14173_14224 = G__14236;
count__14174_14225 = G__14237;
i__14175_14226 = G__14238;
continue;
}
} else
{var c_14239 = cljs.core.first.call(null,seq__14172_14233__$1);add_class_BANG_.call(null,elem,c_14239);
{
var G__14240 = cljs.core.next.call(null,seq__14172_14233__$1);
var G__14241 = null;
var G__14242 = (0);
var G__14243 = (0);
seq__14172_14223 = G__14240;
chunk__14173_14224 = G__14241;
count__14174_14225 = G__14242;
i__14175_14226 = G__14243;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__14222 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14222__delegate.call(this,elem,classes,more_classes);};
G__14222.cljs$lang$maxFixedArity = 2;
G__14222.cljs$lang$applyTo = (function (arglist__14244){
var elem = cljs.core.first(arglist__14244);
arglist__14244 = cljs.core.next(arglist__14244);
var classes = cljs.core.first(arglist__14244);
var more_classes = cljs.core.rest(arglist__14244);
return G__14222__delegate(elem,classes,more_classes);
});
G__14222.cljs$core$IFn$_invoke$arity$variadic = G__14222__delegate;
return G__14222;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___14253 = elem.classList;if(cljs.core.truth_(temp__4124__auto___14253))
{var class_list_14254 = temp__4124__auto___14253;class_list_14254.remove(c__$1);
} else
{var class_name_14255 = dommy.core.class$.call(null,elem);var new_class_name_14256 = dommy.utils.remove_class_str.call(null,class_name_14255,c__$1);if((class_name_14255 === new_class_name_14256))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_14256);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__14257__delegate = function (elem,class$,classes){var seq__14249 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14250 = null;var count__14251 = (0);var i__14252 = (0);while(true){
if((i__14252 < count__14251))
{var c = cljs.core._nth.call(null,chunk__14250,i__14252);remove_class_BANG_.call(null,elem,c);
{
var G__14258 = seq__14249;
var G__14259 = chunk__14250;
var G__14260 = count__14251;
var G__14261 = (i__14252 + (1));
seq__14249 = G__14258;
chunk__14250 = G__14259;
count__14251 = G__14260;
i__14252 = G__14261;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14249);if(temp__4126__auto__)
{var seq__14249__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14249__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__14249__$1);{
var G__14262 = cljs.core.chunk_rest.call(null,seq__14249__$1);
var G__14263 = c__4309__auto__;
var G__14264 = cljs.core.count.call(null,c__4309__auto__);
var G__14265 = (0);
seq__14249 = G__14262;
chunk__14250 = G__14263;
count__14251 = G__14264;
i__14252 = G__14265;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14249__$1);remove_class_BANG_.call(null,elem,c);
{
var G__14266 = cljs.core.next.call(null,seq__14249__$1);
var G__14267 = null;
var G__14268 = (0);
var G__14269 = (0);
seq__14249 = G__14266;
chunk__14250 = G__14267;
count__14251 = G__14268;
i__14252 = G__14269;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__14257 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14257__delegate.call(this,elem,class$,classes);};
G__14257.cljs$lang$maxFixedArity = 2;
G__14257.cljs$lang$applyTo = (function (arglist__14270){
var elem = cljs.core.first(arglist__14270);
arglist__14270 = cljs.core.next(arglist__14270);
var class$ = cljs.core.first(arglist__14270);
var classes = cljs.core.rest(arglist__14270);
return G__14257__delegate(elem,class$,classes);
});
G__14257.cljs$core$IFn$_invoke$arity$variadic = G__14257__delegate;
return G__14257;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___14271 = elem.classList;if(cljs.core.truth_(temp__4124__auto___14271))
{var class_list_14272 = temp__4124__auto___14271;class_list_14272.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__14278 = parent;G__14278.appendChild(child);
return G__14278;
});
var append_BANG___3 = (function() { 
var G__14283__delegate = function (parent,child,more_children){var seq__14279_14284 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14280_14285 = null;var count__14281_14286 = (0);var i__14282_14287 = (0);while(true){
if((i__14282_14287 < count__14281_14286))
{var c_14288 = cljs.core._nth.call(null,chunk__14280_14285,i__14282_14287);append_BANG_.call(null,parent,c_14288);
{
var G__14289 = seq__14279_14284;
var G__14290 = chunk__14280_14285;
var G__14291 = count__14281_14286;
var G__14292 = (i__14282_14287 + (1));
seq__14279_14284 = G__14289;
chunk__14280_14285 = G__14290;
count__14281_14286 = G__14291;
i__14282_14287 = G__14292;
continue;
}
} else
{var temp__4126__auto___14293 = cljs.core.seq.call(null,seq__14279_14284);if(temp__4126__auto___14293)
{var seq__14279_14294__$1 = temp__4126__auto___14293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14279_14294__$1))
{var c__4309__auto___14295 = cljs.core.chunk_first.call(null,seq__14279_14294__$1);{
var G__14296 = cljs.core.chunk_rest.call(null,seq__14279_14294__$1);
var G__14297 = c__4309__auto___14295;
var G__14298 = cljs.core.count.call(null,c__4309__auto___14295);
var G__14299 = (0);
seq__14279_14284 = G__14296;
chunk__14280_14285 = G__14297;
count__14281_14286 = G__14298;
i__14282_14287 = G__14299;
continue;
}
} else
{var c_14300 = cljs.core.first.call(null,seq__14279_14294__$1);append_BANG_.call(null,parent,c_14300);
{
var G__14301 = cljs.core.next.call(null,seq__14279_14294__$1);
var G__14302 = null;
var G__14303 = (0);
var G__14304 = (0);
seq__14279_14284 = G__14301;
chunk__14280_14285 = G__14302;
count__14281_14286 = G__14303;
i__14282_14287 = G__14304;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__14283 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14283__delegate.call(this,parent,child,more_children);};
G__14283.cljs$lang$maxFixedArity = 2;
G__14283.cljs$lang$applyTo = (function (arglist__14305){
var parent = cljs.core.first(arglist__14305);
arglist__14305 = cljs.core.next(arglist__14305);
var child = cljs.core.first(arglist__14305);
var more_children = cljs.core.rest(arglist__14305);
return G__14283__delegate(parent,child,more_children);
});
G__14283.cljs$core$IFn$_invoke$arity$variadic = G__14283__delegate;
return G__14283;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__14311 = parent;G__14311.insertBefore(child,parent.firstChild);
return G__14311;
});
var prepend_BANG___3 = (function() { 
var G__14316__delegate = function (parent,child,more_children){var seq__14312_14317 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14313_14318 = null;var count__14314_14319 = (0);var i__14315_14320 = (0);while(true){
if((i__14315_14320 < count__14314_14319))
{var c_14321 = cljs.core._nth.call(null,chunk__14313_14318,i__14315_14320);prepend_BANG_.call(null,parent,c_14321);
{
var G__14322 = seq__14312_14317;
var G__14323 = chunk__14313_14318;
var G__14324 = count__14314_14319;
var G__14325 = (i__14315_14320 + (1));
seq__14312_14317 = G__14322;
chunk__14313_14318 = G__14323;
count__14314_14319 = G__14324;
i__14315_14320 = G__14325;
continue;
}
} else
{var temp__4126__auto___14326 = cljs.core.seq.call(null,seq__14312_14317);if(temp__4126__auto___14326)
{var seq__14312_14327__$1 = temp__4126__auto___14326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14312_14327__$1))
{var c__4309__auto___14328 = cljs.core.chunk_first.call(null,seq__14312_14327__$1);{
var G__14329 = cljs.core.chunk_rest.call(null,seq__14312_14327__$1);
var G__14330 = c__4309__auto___14328;
var G__14331 = cljs.core.count.call(null,c__4309__auto___14328);
var G__14332 = (0);
seq__14312_14317 = G__14329;
chunk__14313_14318 = G__14330;
count__14314_14319 = G__14331;
i__14315_14320 = G__14332;
continue;
}
} else
{var c_14333 = cljs.core.first.call(null,seq__14312_14327__$1);prepend_BANG_.call(null,parent,c_14333);
{
var G__14334 = cljs.core.next.call(null,seq__14312_14327__$1);
var G__14335 = null;
var G__14336 = (0);
var G__14337 = (0);
seq__14312_14317 = G__14334;
chunk__14313_14318 = G__14335;
count__14314_14319 = G__14336;
i__14315_14320 = G__14337;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__14316 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14316__delegate.call(this,parent,child,more_children);};
G__14316.cljs$lang$maxFixedArity = 2;
G__14316.cljs$lang$applyTo = (function (arglist__14338){
var parent = cljs.core.first(arglist__14338);
arglist__14338 = cljs.core.next(arglist__14338);
var child = cljs.core.first(arglist__14338);
var more_children = cljs.core.rest(arglist__14338);
return G__14316__delegate(parent,child,more_children);
});
G__14316.cljs$core$IFn$_invoke$arity$variadic = G__14316__delegate;
return G__14316;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___14339 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___14339))
{var next_14340 = temp__4124__auto___14339;dommy.core.insert_before_BANG_.call(null,elem,next_14340);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__14342 = p;G__14342.removeChild(elem);
return G__14342;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14343){var vec__14344 = p__14343;var special_mouse_event = cljs.core.nth.call(null,vec__14344,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__14344,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__14344,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__14344,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3553__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3541__auto__ = related_target;if(cljs.core.truth_(and__3541__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3541__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__14344,special_mouse_event,real_mouse_event))
});})(vec__14344,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3541__auto__ = selected_target;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3541__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3553__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14345){
var elem = cljs.core.first(arglist__14345);
arglist__14345 = cljs.core.next(arglist__14345);
var f = cljs.core.first(arglist__14345);
var args = cljs.core.rest(arglist__14345);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14369_14392 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14393 = cljs.core.nth.call(null,vec__14369_14392,(0),null);var selector_14394 = cljs.core.nth.call(null,vec__14369_14392,(1),null);var seq__14370_14395 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14377_14396 = null;var count__14378_14397 = (0);var i__14379_14398 = (0);while(true){
if((i__14379_14398 < count__14378_14397))
{var vec__14386_14399 = cljs.core._nth.call(null,chunk__14377_14396,i__14379_14398);var orig_type_14400 = cljs.core.nth.call(null,vec__14386_14399,(0),null);var f_14401 = cljs.core.nth.call(null,vec__14386_14399,(1),null);var seq__14380_14402 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14400,new cljs.core.PersistentArrayMap.fromArray([orig_type_14400,cljs.core.identity], true, false)));var chunk__14382_14403 = null;var count__14383_14404 = (0);var i__14384_14405 = (0);while(true){
if((i__14384_14405 < count__14383_14404))
{var vec__14387_14406 = cljs.core._nth.call(null,chunk__14382_14403,i__14384_14405);var actual_type_14407 = cljs.core.nth.call(null,vec__14387_14406,(0),null);var factory_14408 = cljs.core.nth.call(null,vec__14387_14406,(1),null);var canonical_f_14409 = (cljs.core.truth_(selector_14394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14393,selector_14394):cljs.core.identity).call(null,factory_14408.call(null,f_14401));dommy.core.update_event_listeners_BANG_.call(null,elem_14393,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14394,actual_type_14407,f_14401], null),canonical_f_14409);
if(cljs.core.truth_(elem_14393.addEventListener))
{elem_14393.addEventListener(cljs.core.name.call(null,actual_type_14407),canonical_f_14409);
} else
{elem_14393.attachEvent(cljs.core.name.call(null,actual_type_14407),canonical_f_14409);
}
{
var G__14410 = seq__14380_14402;
var G__14411 = chunk__14382_14403;
var G__14412 = count__14383_14404;
var G__14413 = (i__14384_14405 + (1));
seq__14380_14402 = G__14410;
chunk__14382_14403 = G__14411;
count__14383_14404 = G__14412;
i__14384_14405 = G__14413;
continue;
}
} else
{var temp__4126__auto___14414 = cljs.core.seq.call(null,seq__14380_14402);if(temp__4126__auto___14414)
{var seq__14380_14415__$1 = temp__4126__auto___14414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14380_14415__$1))
{var c__4309__auto___14416 = cljs.core.chunk_first.call(null,seq__14380_14415__$1);{
var G__14417 = cljs.core.chunk_rest.call(null,seq__14380_14415__$1);
var G__14418 = c__4309__auto___14416;
var G__14419 = cljs.core.count.call(null,c__4309__auto___14416);
var G__14420 = (0);
seq__14380_14402 = G__14417;
chunk__14382_14403 = G__14418;
count__14383_14404 = G__14419;
i__14384_14405 = G__14420;
continue;
}
} else
{var vec__14388_14421 = cljs.core.first.call(null,seq__14380_14415__$1);var actual_type_14422 = cljs.core.nth.call(null,vec__14388_14421,(0),null);var factory_14423 = cljs.core.nth.call(null,vec__14388_14421,(1),null);var canonical_f_14424 = (cljs.core.truth_(selector_14394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14393,selector_14394):cljs.core.identity).call(null,factory_14423.call(null,f_14401));dommy.core.update_event_listeners_BANG_.call(null,elem_14393,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14394,actual_type_14422,f_14401], null),canonical_f_14424);
if(cljs.core.truth_(elem_14393.addEventListener))
{elem_14393.addEventListener(cljs.core.name.call(null,actual_type_14422),canonical_f_14424);
} else
{elem_14393.attachEvent(cljs.core.name.call(null,actual_type_14422),canonical_f_14424);
}
{
var G__14425 = cljs.core.next.call(null,seq__14380_14415__$1);
var G__14426 = null;
var G__14427 = (0);
var G__14428 = (0);
seq__14380_14402 = G__14425;
chunk__14382_14403 = G__14426;
count__14383_14404 = G__14427;
i__14384_14405 = G__14428;
continue;
}
}
} else
{}
}
break;
}
{
var G__14429 = seq__14370_14395;
var G__14430 = chunk__14377_14396;
var G__14431 = count__14378_14397;
var G__14432 = (i__14379_14398 + (1));
seq__14370_14395 = G__14429;
chunk__14377_14396 = G__14430;
count__14378_14397 = G__14431;
i__14379_14398 = G__14432;
continue;
}
} else
{var temp__4126__auto___14433 = cljs.core.seq.call(null,seq__14370_14395);if(temp__4126__auto___14433)
{var seq__14370_14434__$1 = temp__4126__auto___14433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14370_14434__$1))
{var c__4309__auto___14435 = cljs.core.chunk_first.call(null,seq__14370_14434__$1);{
var G__14436 = cljs.core.chunk_rest.call(null,seq__14370_14434__$1);
var G__14437 = c__4309__auto___14435;
var G__14438 = cljs.core.count.call(null,c__4309__auto___14435);
var G__14439 = (0);
seq__14370_14395 = G__14436;
chunk__14377_14396 = G__14437;
count__14378_14397 = G__14438;
i__14379_14398 = G__14439;
continue;
}
} else
{var vec__14389_14440 = cljs.core.first.call(null,seq__14370_14434__$1);var orig_type_14441 = cljs.core.nth.call(null,vec__14389_14440,(0),null);var f_14442 = cljs.core.nth.call(null,vec__14389_14440,(1),null);var seq__14371_14443 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14441,new cljs.core.PersistentArrayMap.fromArray([orig_type_14441,cljs.core.identity], true, false)));var chunk__14373_14444 = null;var count__14374_14445 = (0);var i__14375_14446 = (0);while(true){
if((i__14375_14446 < count__14374_14445))
{var vec__14390_14447 = cljs.core._nth.call(null,chunk__14373_14444,i__14375_14446);var actual_type_14448 = cljs.core.nth.call(null,vec__14390_14447,(0),null);var factory_14449 = cljs.core.nth.call(null,vec__14390_14447,(1),null);var canonical_f_14450 = (cljs.core.truth_(selector_14394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14393,selector_14394):cljs.core.identity).call(null,factory_14449.call(null,f_14442));dommy.core.update_event_listeners_BANG_.call(null,elem_14393,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14394,actual_type_14448,f_14442], null),canonical_f_14450);
if(cljs.core.truth_(elem_14393.addEventListener))
{elem_14393.addEventListener(cljs.core.name.call(null,actual_type_14448),canonical_f_14450);
} else
{elem_14393.attachEvent(cljs.core.name.call(null,actual_type_14448),canonical_f_14450);
}
{
var G__14451 = seq__14371_14443;
var G__14452 = chunk__14373_14444;
var G__14453 = count__14374_14445;
var G__14454 = (i__14375_14446 + (1));
seq__14371_14443 = G__14451;
chunk__14373_14444 = G__14452;
count__14374_14445 = G__14453;
i__14375_14446 = G__14454;
continue;
}
} else
{var temp__4126__auto___14455__$1 = cljs.core.seq.call(null,seq__14371_14443);if(temp__4126__auto___14455__$1)
{var seq__14371_14456__$1 = temp__4126__auto___14455__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14371_14456__$1))
{var c__4309__auto___14457 = cljs.core.chunk_first.call(null,seq__14371_14456__$1);{
var G__14458 = cljs.core.chunk_rest.call(null,seq__14371_14456__$1);
var G__14459 = c__4309__auto___14457;
var G__14460 = cljs.core.count.call(null,c__4309__auto___14457);
var G__14461 = (0);
seq__14371_14443 = G__14458;
chunk__14373_14444 = G__14459;
count__14374_14445 = G__14460;
i__14375_14446 = G__14461;
continue;
}
} else
{var vec__14391_14462 = cljs.core.first.call(null,seq__14371_14456__$1);var actual_type_14463 = cljs.core.nth.call(null,vec__14391_14462,(0),null);var factory_14464 = cljs.core.nth.call(null,vec__14391_14462,(1),null);var canonical_f_14465 = (cljs.core.truth_(selector_14394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14393,selector_14394):cljs.core.identity).call(null,factory_14464.call(null,f_14442));dommy.core.update_event_listeners_BANG_.call(null,elem_14393,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14394,actual_type_14463,f_14442], null),canonical_f_14465);
if(cljs.core.truth_(elem_14393.addEventListener))
{elem_14393.addEventListener(cljs.core.name.call(null,actual_type_14463),canonical_f_14465);
} else
{elem_14393.attachEvent(cljs.core.name.call(null,actual_type_14463),canonical_f_14465);
}
{
var G__14466 = cljs.core.next.call(null,seq__14371_14456__$1);
var G__14467 = null;
var G__14468 = (0);
var G__14469 = (0);
seq__14371_14443 = G__14466;
chunk__14373_14444 = G__14467;
count__14374_14445 = G__14468;
i__14375_14446 = G__14469;
continue;
}
}
} else
{}
}
break;
}
{
var G__14470 = cljs.core.next.call(null,seq__14370_14434__$1);
var G__14471 = null;
var G__14472 = (0);
var G__14473 = (0);
seq__14370_14395 = G__14470;
chunk__14377_14396 = G__14471;
count__14378_14397 = G__14472;
i__14379_14398 = G__14473;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__14474){
var elem_sel = cljs.core.first(arglist__14474);
var type_fs = cljs.core.rest(arglist__14474);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14498_14521 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14522 = cljs.core.nth.call(null,vec__14498_14521,(0),null);var selector_14523 = cljs.core.nth.call(null,vec__14498_14521,(1),null);var seq__14499_14524 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14506_14525 = null;var count__14507_14526 = (0);var i__14508_14527 = (0);while(true){
if((i__14508_14527 < count__14507_14526))
{var vec__14515_14528 = cljs.core._nth.call(null,chunk__14506_14525,i__14508_14527);var orig_type_14529 = cljs.core.nth.call(null,vec__14515_14528,(0),null);var f_14530 = cljs.core.nth.call(null,vec__14515_14528,(1),null);var seq__14509_14531 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14529,new cljs.core.PersistentArrayMap.fromArray([orig_type_14529,cljs.core.identity], true, false)));var chunk__14511_14532 = null;var count__14512_14533 = (0);var i__14513_14534 = (0);while(true){
if((i__14513_14534 < count__14512_14533))
{var vec__14516_14535 = cljs.core._nth.call(null,chunk__14511_14532,i__14513_14534);var actual_type_14536 = cljs.core.nth.call(null,vec__14516_14535,(0),null);var __14537 = cljs.core.nth.call(null,vec__14516_14535,(1),null);var keys_14538 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14523,actual_type_14536,f_14530], null);var canonical_f_14539 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14522),keys_14538);dommy.core.update_event_listeners_BANG_.call(null,elem_14522,dommy.utils.dissoc_in,keys_14538);
if(cljs.core.truth_(elem_14522.removeEventListener))
{elem_14522.removeEventListener(cljs.core.name.call(null,actual_type_14536),canonical_f_14539);
} else
{elem_14522.detachEvent(cljs.core.name.call(null,actual_type_14536),canonical_f_14539);
}
{
var G__14540 = seq__14509_14531;
var G__14541 = chunk__14511_14532;
var G__14542 = count__14512_14533;
var G__14543 = (i__14513_14534 + (1));
seq__14509_14531 = G__14540;
chunk__14511_14532 = G__14541;
count__14512_14533 = G__14542;
i__14513_14534 = G__14543;
continue;
}
} else
{var temp__4126__auto___14544 = cljs.core.seq.call(null,seq__14509_14531);if(temp__4126__auto___14544)
{var seq__14509_14545__$1 = temp__4126__auto___14544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14509_14545__$1))
{var c__4309__auto___14546 = cljs.core.chunk_first.call(null,seq__14509_14545__$1);{
var G__14547 = cljs.core.chunk_rest.call(null,seq__14509_14545__$1);
var G__14548 = c__4309__auto___14546;
var G__14549 = cljs.core.count.call(null,c__4309__auto___14546);
var G__14550 = (0);
seq__14509_14531 = G__14547;
chunk__14511_14532 = G__14548;
count__14512_14533 = G__14549;
i__14513_14534 = G__14550;
continue;
}
} else
{var vec__14517_14551 = cljs.core.first.call(null,seq__14509_14545__$1);var actual_type_14552 = cljs.core.nth.call(null,vec__14517_14551,(0),null);var __14553 = cljs.core.nth.call(null,vec__14517_14551,(1),null);var keys_14554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14523,actual_type_14552,f_14530], null);var canonical_f_14555 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14522),keys_14554);dommy.core.update_event_listeners_BANG_.call(null,elem_14522,dommy.utils.dissoc_in,keys_14554);
if(cljs.core.truth_(elem_14522.removeEventListener))
{elem_14522.removeEventListener(cljs.core.name.call(null,actual_type_14552),canonical_f_14555);
} else
{elem_14522.detachEvent(cljs.core.name.call(null,actual_type_14552),canonical_f_14555);
}
{
var G__14556 = cljs.core.next.call(null,seq__14509_14545__$1);
var G__14557 = null;
var G__14558 = (0);
var G__14559 = (0);
seq__14509_14531 = G__14556;
chunk__14511_14532 = G__14557;
count__14512_14533 = G__14558;
i__14513_14534 = G__14559;
continue;
}
}
} else
{}
}
break;
}
{
var G__14560 = seq__14499_14524;
var G__14561 = chunk__14506_14525;
var G__14562 = count__14507_14526;
var G__14563 = (i__14508_14527 + (1));
seq__14499_14524 = G__14560;
chunk__14506_14525 = G__14561;
count__14507_14526 = G__14562;
i__14508_14527 = G__14563;
continue;
}
} else
{var temp__4126__auto___14564 = cljs.core.seq.call(null,seq__14499_14524);if(temp__4126__auto___14564)
{var seq__14499_14565__$1 = temp__4126__auto___14564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14499_14565__$1))
{var c__4309__auto___14566 = cljs.core.chunk_first.call(null,seq__14499_14565__$1);{
var G__14567 = cljs.core.chunk_rest.call(null,seq__14499_14565__$1);
var G__14568 = c__4309__auto___14566;
var G__14569 = cljs.core.count.call(null,c__4309__auto___14566);
var G__14570 = (0);
seq__14499_14524 = G__14567;
chunk__14506_14525 = G__14568;
count__14507_14526 = G__14569;
i__14508_14527 = G__14570;
continue;
}
} else
{var vec__14518_14571 = cljs.core.first.call(null,seq__14499_14565__$1);var orig_type_14572 = cljs.core.nth.call(null,vec__14518_14571,(0),null);var f_14573 = cljs.core.nth.call(null,vec__14518_14571,(1),null);var seq__14500_14574 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14572,new cljs.core.PersistentArrayMap.fromArray([orig_type_14572,cljs.core.identity], true, false)));var chunk__14502_14575 = null;var count__14503_14576 = (0);var i__14504_14577 = (0);while(true){
if((i__14504_14577 < count__14503_14576))
{var vec__14519_14578 = cljs.core._nth.call(null,chunk__14502_14575,i__14504_14577);var actual_type_14579 = cljs.core.nth.call(null,vec__14519_14578,(0),null);var __14580 = cljs.core.nth.call(null,vec__14519_14578,(1),null);var keys_14581 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14523,actual_type_14579,f_14573], null);var canonical_f_14582 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14522),keys_14581);dommy.core.update_event_listeners_BANG_.call(null,elem_14522,dommy.utils.dissoc_in,keys_14581);
if(cljs.core.truth_(elem_14522.removeEventListener))
{elem_14522.removeEventListener(cljs.core.name.call(null,actual_type_14579),canonical_f_14582);
} else
{elem_14522.detachEvent(cljs.core.name.call(null,actual_type_14579),canonical_f_14582);
}
{
var G__14583 = seq__14500_14574;
var G__14584 = chunk__14502_14575;
var G__14585 = count__14503_14576;
var G__14586 = (i__14504_14577 + (1));
seq__14500_14574 = G__14583;
chunk__14502_14575 = G__14584;
count__14503_14576 = G__14585;
i__14504_14577 = G__14586;
continue;
}
} else
{var temp__4126__auto___14587__$1 = cljs.core.seq.call(null,seq__14500_14574);if(temp__4126__auto___14587__$1)
{var seq__14500_14588__$1 = temp__4126__auto___14587__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14500_14588__$1))
{var c__4309__auto___14589 = cljs.core.chunk_first.call(null,seq__14500_14588__$1);{
var G__14590 = cljs.core.chunk_rest.call(null,seq__14500_14588__$1);
var G__14591 = c__4309__auto___14589;
var G__14592 = cljs.core.count.call(null,c__4309__auto___14589);
var G__14593 = (0);
seq__14500_14574 = G__14590;
chunk__14502_14575 = G__14591;
count__14503_14576 = G__14592;
i__14504_14577 = G__14593;
continue;
}
} else
{var vec__14520_14594 = cljs.core.first.call(null,seq__14500_14588__$1);var actual_type_14595 = cljs.core.nth.call(null,vec__14520_14594,(0),null);var __14596 = cljs.core.nth.call(null,vec__14520_14594,(1),null);var keys_14597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14523,actual_type_14595,f_14573], null);var canonical_f_14598 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14522),keys_14597);dommy.core.update_event_listeners_BANG_.call(null,elem_14522,dommy.utils.dissoc_in,keys_14597);
if(cljs.core.truth_(elem_14522.removeEventListener))
{elem_14522.removeEventListener(cljs.core.name.call(null,actual_type_14595),canonical_f_14598);
} else
{elem_14522.detachEvent(cljs.core.name.call(null,actual_type_14595),canonical_f_14598);
}
{
var G__14599 = cljs.core.next.call(null,seq__14500_14588__$1);
var G__14600 = null;
var G__14601 = (0);
var G__14602 = (0);
seq__14500_14574 = G__14599;
chunk__14502_14575 = G__14600;
count__14503_14576 = G__14601;
i__14504_14577 = G__14602;
continue;
}
}
} else
{}
}
break;
}
{
var G__14603 = cljs.core.next.call(null,seq__14499_14565__$1);
var G__14604 = null;
var G__14605 = (0);
var G__14606 = (0);
seq__14499_14524 = G__14603;
chunk__14506_14525 = G__14604;
count__14507_14526 = G__14605;
i__14508_14527 = G__14606;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14607){
var elem_sel = cljs.core.first(arglist__14607);
var type_fs = cljs.core.rest(arglist__14607);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__14615_14622 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14623 = cljs.core.nth.call(null,vec__14615_14622,(0),null);var selector_14624 = cljs.core.nth.call(null,vec__14615_14622,(1),null);var seq__14616_14625 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__14617_14626 = null;var count__14618_14627 = (0);var i__14619_14628 = (0);while(true){
if((i__14619_14628 < count__14618_14627))
{var vec__14620_14629 = cljs.core._nth.call(null,chunk__14617_14626,i__14619_14628);var type_14630 = cljs.core.nth.call(null,vec__14620_14629,(0),null);var f_14631 = cljs.core.nth.call(null,vec__14620_14629,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14630,((function (seq__14616_14625,chunk__14617_14626,count__14618_14627,i__14619_14628,vec__14620_14629,type_14630,f_14631,vec__14615_14622,elem_14623,selector_14624){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14630,this_fn);
return f_14631.call(null,e);
});})(seq__14616_14625,chunk__14617_14626,count__14618_14627,i__14619_14628,vec__14620_14629,type_14630,f_14631,vec__14615_14622,elem_14623,selector_14624))
);
{
var G__14632 = seq__14616_14625;
var G__14633 = chunk__14617_14626;
var G__14634 = count__14618_14627;
var G__14635 = (i__14619_14628 + (1));
seq__14616_14625 = G__14632;
chunk__14617_14626 = G__14633;
count__14618_14627 = G__14634;
i__14619_14628 = G__14635;
continue;
}
} else
{var temp__4126__auto___14636 = cljs.core.seq.call(null,seq__14616_14625);if(temp__4126__auto___14636)
{var seq__14616_14637__$1 = temp__4126__auto___14636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14616_14637__$1))
{var c__4309__auto___14638 = cljs.core.chunk_first.call(null,seq__14616_14637__$1);{
var G__14639 = cljs.core.chunk_rest.call(null,seq__14616_14637__$1);
var G__14640 = c__4309__auto___14638;
var G__14641 = cljs.core.count.call(null,c__4309__auto___14638);
var G__14642 = (0);
seq__14616_14625 = G__14639;
chunk__14617_14626 = G__14640;
count__14618_14627 = G__14641;
i__14619_14628 = G__14642;
continue;
}
} else
{var vec__14621_14643 = cljs.core.first.call(null,seq__14616_14637__$1);var type_14644 = cljs.core.nth.call(null,vec__14621_14643,(0),null);var f_14645 = cljs.core.nth.call(null,vec__14621_14643,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_14644,((function (seq__14616_14625,chunk__14617_14626,count__14618_14627,i__14619_14628,vec__14621_14643,type_14644,f_14645,seq__14616_14637__$1,temp__4126__auto___14636,vec__14615_14622,elem_14623,selector_14624){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14644,this_fn);
return f_14645.call(null,e);
});})(seq__14616_14625,chunk__14617_14626,count__14618_14627,i__14619_14628,vec__14621_14643,type_14644,f_14645,seq__14616_14637__$1,temp__4126__auto___14636,vec__14615_14622,elem_14623,selector_14624))
);
{
var G__14646 = cljs.core.next.call(null,seq__14616_14637__$1);
var G__14647 = null;
var G__14648 = (0);
var G__14649 = (0);
seq__14616_14625 = G__14646;
chunk__14617_14626 = G__14647;
count__14618_14627 = G__14648;
i__14619_14628 = G__14649;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14650){
var elem_sel = cljs.core.first(arglist__14650);
var type_fs = cljs.core.rest(arglist__14650);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
