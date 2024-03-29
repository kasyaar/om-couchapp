// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11109 = (function (f,fn_handler,meta11110){
this.f = f;
this.fn_handler = fn_handler;
this.meta11110 = meta11110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11109.cljs$lang$type = true;
cljs.core.async.t11109.cljs$lang$ctorStr = "cljs.core.async/t11109";
cljs.core.async.t11109.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11109");
});
cljs.core.async.t11109.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11111){var self__ = this;
var _11111__$1 = this;return self__.meta11110;
});
cljs.core.async.t11109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11111,meta11110__$1){var self__ = this;
var _11111__$1 = this;return (new cljs.core.async.t11109(self__.f,self__.fn_handler,meta11110__$1));
});
cljs.core.async.__GT_t11109 = (function __GT_t11109(f__$1,fn_handler__$1,meta11110){return (new cljs.core.async.t11109(f__$1,fn_handler__$1,meta11110));
});
}
return (new cljs.core.async.t11109(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11113 = buff;if(G__11113)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__11113.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11113.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11113);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11114 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11114);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11114,ret){
return (function (){return fn1.call(null,val_11114);
});})(val_11114,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3541__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___11115 = n;var x_11116 = (0);while(true){
if((x_11116 < n__4409__auto___11115))
{(a[x_11116] = (0));
{
var G__11117 = (x_11116 + (1));
x_11116 = G__11117;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11118 = (i + (1));
i = G__11118;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11122 = (function (flag,alt_flag,meta11123){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11123 = meta11123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11122.cljs$lang$type = true;
cljs.core.async.t11122.cljs$lang$ctorStr = "cljs.core.async/t11122";
cljs.core.async.t11122.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11122");
});})(flag))
;
cljs.core.async.t11122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11124){var self__ = this;
var _11124__$1 = this;return self__.meta11123;
});})(flag))
;
cljs.core.async.t11122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11124,meta11123__$1){var self__ = this;
var _11124__$1 = this;return (new cljs.core.async.t11122(self__.flag,self__.alt_flag,meta11123__$1));
});})(flag))
;
cljs.core.async.__GT_t11122 = ((function (flag){
return (function __GT_t11122(flag__$1,alt_flag__$1,meta11123){return (new cljs.core.async.t11122(flag__$1,alt_flag__$1,meta11123));
});})(flag))
;
}
return (new cljs.core.async.t11122(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11128 = (function (cb,flag,alt_handler,meta11129){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11129 = meta11129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11128.cljs$lang$type = true;
cljs.core.async.t11128.cljs$lang$ctorStr = "cljs.core.async/t11128";
cljs.core.async.t11128.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11128");
});
cljs.core.async.t11128.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11130){var self__ = this;
var _11130__$1 = this;return self__.meta11129;
});
cljs.core.async.t11128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11130,meta11129__$1){var self__ = this;
var _11130__$1 = this;return (new cljs.core.async.t11128(self__.cb,self__.flag,self__.alt_handler,meta11129__$1));
});
cljs.core.async.__GT_t11128 = (function __GT_t11128(cb__$1,flag__$1,alt_handler__$1,meta11129){return (new cljs.core.async.t11128(cb__$1,flag__$1,alt_handler__$1,meta11129));
});
}
return (new cljs.core.async.t11128(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11131_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11131_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11132 = (i + (1));
i = G__11132;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11133){var map__11135 = p__11133;var map__11135__$1 = ((cljs.core.seq_QMARK_.call(null,map__11135))?cljs.core.apply.call(null,cljs.core.hash_map,map__11135):map__11135);var opts = map__11135__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11133 = null;if (arguments.length > 1) {
  p__11133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11133);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11136){
var ports = cljs.core.first(arglist__11136);
var p__11133 = cljs.core.rest(arglist__11136);
return alts_BANG___delegate(ports,p__11133);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11144 = (function (ch,f,map_LT_,meta11145){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11145 = meta11145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11144.cljs$lang$type = true;
cljs.core.async.t11144.cljs$lang$ctorStr = "cljs.core.async/t11144";
cljs.core.async.t11144.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11144");
});
cljs.core.async.t11144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11147 = (function (fn1,_,meta11145,ch,f,map_LT_,meta11148){
this.fn1 = fn1;
this._ = _;
this.meta11145 = meta11145;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11148 = meta11148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11147.cljs$lang$type = true;
cljs.core.async.t11147.cljs$lang$ctorStr = "cljs.core.async/t11147";
cljs.core.async.t11147.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11147");
});})(___$1))
;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11137_SHARP_){return f1.call(null,(((p1__11137_SHARP_ == null))?null:self__.f.call(null,p1__11137_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11149){var self__ = this;
var _11149__$1 = this;return self__.meta11148;
});})(___$1))
;
cljs.core.async.t11147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11149,meta11148__$1){var self__ = this;
var _11149__$1 = this;return (new cljs.core.async.t11147(self__.fn1,self__._,self__.meta11145,self__.ch,self__.f,self__.map_LT_,meta11148__$1));
});})(___$1))
;
cljs.core.async.__GT_t11147 = ((function (___$1){
return (function __GT_t11147(fn1__$1,___$2,meta11145__$1,ch__$2,f__$2,map_LT___$2,meta11148){return (new cljs.core.async.t11147(fn1__$1,___$2,meta11145__$1,ch__$2,f__$2,map_LT___$2,meta11148));
});})(___$1))
;
}
return (new cljs.core.async.t11147(fn1,___$1,self__.meta11145,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11144.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11146){var self__ = this;
var _11146__$1 = this;return self__.meta11145;
});
cljs.core.async.t11144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11146,meta11145__$1){var self__ = this;
var _11146__$1 = this;return (new cljs.core.async.t11144(self__.ch,self__.f,self__.map_LT_,meta11145__$1));
});
cljs.core.async.__GT_t11144 = (function __GT_t11144(ch__$1,f__$1,map_LT___$1,meta11145){return (new cljs.core.async.t11144(ch__$1,f__$1,map_LT___$1,meta11145));
});
}
return (new cljs.core.async.t11144(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11153 = (function (ch,f,map_GT_,meta11154){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11154 = meta11154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11153.cljs$lang$type = true;
cljs.core.async.t11153.cljs$lang$ctorStr = "cljs.core.async/t11153";
cljs.core.async.t11153.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11153");
});
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11155){var self__ = this;
var _11155__$1 = this;return self__.meta11154;
});
cljs.core.async.t11153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11155,meta11154__$1){var self__ = this;
var _11155__$1 = this;return (new cljs.core.async.t11153(self__.ch,self__.f,self__.map_GT_,meta11154__$1));
});
cljs.core.async.__GT_t11153 = (function __GT_t11153(ch__$1,f__$1,map_GT___$1,meta11154){return (new cljs.core.async.t11153(ch__$1,f__$1,map_GT___$1,meta11154));
});
}
return (new cljs.core.async.t11153(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11159 = (function (ch,p,filter_GT_,meta11160){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11160 = meta11160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11159.cljs$lang$type = true;
cljs.core.async.t11159.cljs$lang$ctorStr = "cljs.core.async/t11159";
cljs.core.async.t11159.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11159");
});
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11161){var self__ = this;
var _11161__$1 = this;return self__.meta11160;
});
cljs.core.async.t11159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11161,meta11160__$1){var self__ = this;
var _11161__$1 = this;return (new cljs.core.async.t11159(self__.ch,self__.p,self__.filter_GT_,meta11160__$1));
});
cljs.core.async.__GT_t11159 = (function __GT_t11159(ch__$1,p__$1,filter_GT___$1,meta11160){return (new cljs.core.async.t11159(ch__$1,p__$1,filter_GT___$1,meta11160));
});
}
return (new cljs.core.async.t11159(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___11244 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___11244,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___11244,out){
return (function (state_11223){var state_val_11224 = (state_11223[(1)]);if((state_val_11224 === (7)))
{var inst_11219 = (state_11223[(2)]);var state_11223__$1 = state_11223;var statearr_11225_11245 = state_11223__$1;(statearr_11225_11245[(2)] = inst_11219);
(statearr_11225_11245[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (1)))
{var state_11223__$1 = state_11223;var statearr_11226_11246 = state_11223__$1;(statearr_11226_11246[(2)] = null);
(statearr_11226_11246[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (4)))
{var inst_11205 = (state_11223[(7)]);var inst_11205__$1 = (state_11223[(2)]);var inst_11206 = (inst_11205__$1 == null);var state_11223__$1 = (function (){var statearr_11227 = state_11223;(statearr_11227[(7)] = inst_11205__$1);
return statearr_11227;
})();if(cljs.core.truth_(inst_11206))
{var statearr_11228_11247 = state_11223__$1;(statearr_11228_11247[(1)] = (5));
} else
{var statearr_11229_11248 = state_11223__$1;(statearr_11229_11248[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (6)))
{var inst_11205 = (state_11223[(7)]);var inst_11210 = p.call(null,inst_11205);var state_11223__$1 = state_11223;if(cljs.core.truth_(inst_11210))
{var statearr_11230_11249 = state_11223__$1;(statearr_11230_11249[(1)] = (8));
} else
{var statearr_11231_11250 = state_11223__$1;(statearr_11231_11250[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (3)))
{var inst_11221 = (state_11223[(2)]);var state_11223__$1 = state_11223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11223__$1,inst_11221);
} else
{if((state_val_11224 === (2)))
{var state_11223__$1 = state_11223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11223__$1,(4),ch);
} else
{if((state_val_11224 === (11)))
{var inst_11213 = (state_11223[(2)]);var state_11223__$1 = state_11223;var statearr_11232_11251 = state_11223__$1;(statearr_11232_11251[(2)] = inst_11213);
(statearr_11232_11251[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (9)))
{var state_11223__$1 = state_11223;var statearr_11233_11252 = state_11223__$1;(statearr_11233_11252[(2)] = null);
(statearr_11233_11252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (5)))
{var inst_11208 = cljs.core.async.close_BANG_.call(null,out);var state_11223__$1 = state_11223;var statearr_11234_11253 = state_11223__$1;(statearr_11234_11253[(2)] = inst_11208);
(statearr_11234_11253[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (10)))
{var inst_11216 = (state_11223[(2)]);var state_11223__$1 = (function (){var statearr_11235 = state_11223;(statearr_11235[(8)] = inst_11216);
return statearr_11235;
})();var statearr_11236_11254 = state_11223__$1;(statearr_11236_11254[(2)] = null);
(statearr_11236_11254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11224 === (8)))
{var inst_11205 = (state_11223[(7)]);var state_11223__$1 = state_11223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11223__$1,(11),out,inst_11205);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___11244,out))
;return ((function (switch__6424__auto__,c__6439__auto___11244,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_11240 = [null,null,null,null,null,null,null,null,null];(statearr_11240[(0)] = state_machine__6425__auto__);
(statearr_11240[(1)] = (1));
return statearr_11240;
});
var state_machine__6425__auto____1 = (function (state_11223){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_11223);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e11241){if((e11241 instanceof Object))
{var ex__6428__auto__ = e11241;var statearr_11242_11255 = state_11223;(statearr_11242_11255[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11256 = state_11223;
state_11223 = G__11256;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_11223){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_11223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___11244,out))
})();var state__6441__auto__ = (function (){var statearr_11243 = f__6440__auto__.call(null);(statearr_11243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___11244);
return statearr_11243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___11244,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_11408){var state_val_11409 = (state_11408[(1)]);if((state_val_11409 === (7)))
{var inst_11404 = (state_11408[(2)]);var state_11408__$1 = state_11408;var statearr_11410_11447 = state_11408__$1;(statearr_11410_11447[(2)] = inst_11404);
(statearr_11410_11447[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (20)))
{var inst_11379 = (state_11408[(7)]);var inst_11390 = (state_11408[(2)]);var inst_11391 = cljs.core.next.call(null,inst_11379);var inst_11365 = inst_11391;var inst_11366 = null;var inst_11367 = (0);var inst_11368 = (0);var state_11408__$1 = (function (){var statearr_11411 = state_11408;(statearr_11411[(8)] = inst_11368);
(statearr_11411[(9)] = inst_11390);
(statearr_11411[(10)] = inst_11366);
(statearr_11411[(11)] = inst_11365);
(statearr_11411[(12)] = inst_11367);
return statearr_11411;
})();var statearr_11412_11448 = state_11408__$1;(statearr_11412_11448[(2)] = null);
(statearr_11412_11448[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (1)))
{var state_11408__$1 = state_11408;var statearr_11413_11449 = state_11408__$1;(statearr_11413_11449[(2)] = null);
(statearr_11413_11449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (4)))
{var inst_11354 = (state_11408[(13)]);var inst_11354__$1 = (state_11408[(2)]);var inst_11355 = (inst_11354__$1 == null);var state_11408__$1 = (function (){var statearr_11417 = state_11408;(statearr_11417[(13)] = inst_11354__$1);
return statearr_11417;
})();if(cljs.core.truth_(inst_11355))
{var statearr_11418_11450 = state_11408__$1;(statearr_11418_11450[(1)] = (5));
} else
{var statearr_11419_11451 = state_11408__$1;(statearr_11419_11451[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (15)))
{var state_11408__$1 = state_11408;var statearr_11420_11452 = state_11408__$1;(statearr_11420_11452[(2)] = null);
(statearr_11420_11452[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (13)))
{var inst_11368 = (state_11408[(8)]);var inst_11366 = (state_11408[(10)]);var inst_11365 = (state_11408[(11)]);var inst_11367 = (state_11408[(12)]);var inst_11375 = (state_11408[(2)]);var inst_11376 = (inst_11368 + (1));var tmp11414 = inst_11366;var tmp11415 = inst_11365;var tmp11416 = inst_11367;var inst_11365__$1 = tmp11415;var inst_11366__$1 = tmp11414;var inst_11367__$1 = tmp11416;var inst_11368__$1 = inst_11376;var state_11408__$1 = (function (){var statearr_11421 = state_11408;(statearr_11421[(8)] = inst_11368__$1);
(statearr_11421[(10)] = inst_11366__$1);
(statearr_11421[(11)] = inst_11365__$1);
(statearr_11421[(14)] = inst_11375);
(statearr_11421[(12)] = inst_11367__$1);
return statearr_11421;
})();var statearr_11422_11453 = state_11408__$1;(statearr_11422_11453[(2)] = null);
(statearr_11422_11453[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (6)))
{var inst_11354 = (state_11408[(13)]);var inst_11359 = f.call(null,inst_11354);var inst_11364 = cljs.core.seq.call(null,inst_11359);var inst_11365 = inst_11364;var inst_11366 = null;var inst_11367 = (0);var inst_11368 = (0);var state_11408__$1 = (function (){var statearr_11423 = state_11408;(statearr_11423[(8)] = inst_11368);
(statearr_11423[(10)] = inst_11366);
(statearr_11423[(11)] = inst_11365);
(statearr_11423[(12)] = inst_11367);
return statearr_11423;
})();var statearr_11424_11454 = state_11408__$1;(statearr_11424_11454[(2)] = null);
(statearr_11424_11454[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (17)))
{var inst_11379 = (state_11408[(7)]);var inst_11383 = cljs.core.chunk_first.call(null,inst_11379);var inst_11384 = cljs.core.chunk_rest.call(null,inst_11379);var inst_11385 = cljs.core.count.call(null,inst_11383);var inst_11365 = inst_11384;var inst_11366 = inst_11383;var inst_11367 = inst_11385;var inst_11368 = (0);var state_11408__$1 = (function (){var statearr_11425 = state_11408;(statearr_11425[(8)] = inst_11368);
(statearr_11425[(10)] = inst_11366);
(statearr_11425[(11)] = inst_11365);
(statearr_11425[(12)] = inst_11367);
return statearr_11425;
})();var statearr_11426_11455 = state_11408__$1;(statearr_11426_11455[(2)] = null);
(statearr_11426_11455[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (3)))
{var inst_11406 = (state_11408[(2)]);var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11408__$1,inst_11406);
} else
{if((state_val_11409 === (12)))
{var inst_11399 = (state_11408[(2)]);var state_11408__$1 = state_11408;var statearr_11427_11456 = state_11408__$1;(statearr_11427_11456[(2)] = inst_11399);
(statearr_11427_11456[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (2)))
{var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11408__$1,(4),in$);
} else
{if((state_val_11409 === (19)))
{var inst_11394 = (state_11408[(2)]);var state_11408__$1 = state_11408;var statearr_11428_11457 = state_11408__$1;(statearr_11428_11457[(2)] = inst_11394);
(statearr_11428_11457[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (11)))
{var inst_11379 = (state_11408[(7)]);var inst_11365 = (state_11408[(11)]);var inst_11379__$1 = cljs.core.seq.call(null,inst_11365);var state_11408__$1 = (function (){var statearr_11429 = state_11408;(statearr_11429[(7)] = inst_11379__$1);
return statearr_11429;
})();if(inst_11379__$1)
{var statearr_11430_11458 = state_11408__$1;(statearr_11430_11458[(1)] = (14));
} else
{var statearr_11431_11459 = state_11408__$1;(statearr_11431_11459[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (9)))
{var inst_11401 = (state_11408[(2)]);var state_11408__$1 = (function (){var statearr_11432 = state_11408;(statearr_11432[(15)] = inst_11401);
return statearr_11432;
})();var statearr_11433_11460 = state_11408__$1;(statearr_11433_11460[(2)] = null);
(statearr_11433_11460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (5)))
{var inst_11357 = cljs.core.async.close_BANG_.call(null,out);var state_11408__$1 = state_11408;var statearr_11434_11461 = state_11408__$1;(statearr_11434_11461[(2)] = inst_11357);
(statearr_11434_11461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (14)))
{var inst_11379 = (state_11408[(7)]);var inst_11381 = cljs.core.chunked_seq_QMARK_.call(null,inst_11379);var state_11408__$1 = state_11408;if(inst_11381)
{var statearr_11435_11462 = state_11408__$1;(statearr_11435_11462[(1)] = (17));
} else
{var statearr_11436_11463 = state_11408__$1;(statearr_11436_11463[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (16)))
{var inst_11397 = (state_11408[(2)]);var state_11408__$1 = state_11408;var statearr_11437_11464 = state_11408__$1;(statearr_11437_11464[(2)] = inst_11397);
(statearr_11437_11464[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11409 === (10)))
{var inst_11368 = (state_11408[(8)]);var inst_11366 = (state_11408[(10)]);var inst_11373 = cljs.core._nth.call(null,inst_11366,inst_11368);var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11408__$1,(13),out,inst_11373);
} else
{if((state_val_11409 === (18)))
{var inst_11379 = (state_11408[(7)]);var inst_11388 = cljs.core.first.call(null,inst_11379);var state_11408__$1 = state_11408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11408__$1,(20),out,inst_11388);
} else
{if((state_val_11409 === (8)))
{var inst_11368 = (state_11408[(8)]);var inst_11367 = (state_11408[(12)]);var inst_11370 = (inst_11368 < inst_11367);var inst_11371 = inst_11370;var state_11408__$1 = state_11408;if(cljs.core.truth_(inst_11371))
{var statearr_11438_11465 = state_11408__$1;(statearr_11438_11465[(1)] = (10));
} else
{var statearr_11439_11466 = state_11408__$1;(statearr_11439_11466[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_11443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11443[(0)] = state_machine__6425__auto__);
(statearr_11443[(1)] = (1));
return statearr_11443;
});
var state_machine__6425__auto____1 = (function (state_11408){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_11408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e11444){if((e11444 instanceof Object))
{var ex__6428__auto__ = e11444;var statearr_11445_11467 = state_11408;(statearr_11445_11467[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11444;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11468 = state_11408;
state_11408 = G__11468;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_11408){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_11408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_11446 = f__6440__auto__.call(null);(statearr_11446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_11446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6439__auto___11549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___11549){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___11549){
return (function (state_11528){var state_val_11529 = (state_11528[(1)]);if((state_val_11529 === (7)))
{var inst_11524 = (state_11528[(2)]);var state_11528__$1 = state_11528;var statearr_11530_11550 = state_11528__$1;(statearr_11530_11550[(2)] = inst_11524);
(statearr_11530_11550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (1)))
{var state_11528__$1 = state_11528;var statearr_11531_11551 = state_11528__$1;(statearr_11531_11551[(2)] = null);
(statearr_11531_11551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (4)))
{var inst_11511 = (state_11528[(7)]);var inst_11511__$1 = (state_11528[(2)]);var inst_11512 = (inst_11511__$1 == null);var state_11528__$1 = (function (){var statearr_11532 = state_11528;(statearr_11532[(7)] = inst_11511__$1);
return statearr_11532;
})();if(cljs.core.truth_(inst_11512))
{var statearr_11533_11552 = state_11528__$1;(statearr_11533_11552[(1)] = (5));
} else
{var statearr_11534_11553 = state_11528__$1;(statearr_11534_11553[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (6)))
{var inst_11511 = (state_11528[(7)]);var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11528__$1,(11),to,inst_11511);
} else
{if((state_val_11529 === (3)))
{var inst_11526 = (state_11528[(2)]);var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11528__$1,inst_11526);
} else
{if((state_val_11529 === (2)))
{var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11528__$1,(4),from);
} else
{if((state_val_11529 === (11)))
{var inst_11521 = (state_11528[(2)]);var state_11528__$1 = (function (){var statearr_11535 = state_11528;(statearr_11535[(8)] = inst_11521);
return statearr_11535;
})();var statearr_11536_11554 = state_11528__$1;(statearr_11536_11554[(2)] = null);
(statearr_11536_11554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (9)))
{var state_11528__$1 = state_11528;var statearr_11537_11555 = state_11528__$1;(statearr_11537_11555[(2)] = null);
(statearr_11537_11555[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (5)))
{var state_11528__$1 = state_11528;if(cljs.core.truth_(close_QMARK_))
{var statearr_11538_11556 = state_11528__$1;(statearr_11538_11556[(1)] = (8));
} else
{var statearr_11539_11557 = state_11528__$1;(statearr_11539_11557[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (10)))
{var inst_11518 = (state_11528[(2)]);var state_11528__$1 = state_11528;var statearr_11540_11558 = state_11528__$1;(statearr_11540_11558[(2)] = inst_11518);
(statearr_11540_11558[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11529 === (8)))
{var inst_11515 = cljs.core.async.close_BANG_.call(null,to);var state_11528__$1 = state_11528;var statearr_11541_11559 = state_11528__$1;(statearr_11541_11559[(2)] = inst_11515);
(statearr_11541_11559[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___11549))
;return ((function (switch__6424__auto__,c__6439__auto___11549){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_11545 = [null,null,null,null,null,null,null,null,null];(statearr_11545[(0)] = state_machine__6425__auto__);
(statearr_11545[(1)] = (1));
return statearr_11545;
});
var state_machine__6425__auto____1 = (function (state_11528){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_11528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e11546){if((e11546 instanceof Object))
{var ex__6428__auto__ = e11546;var statearr_11547_11560 = state_11528;(statearr_11547_11560[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11561 = state_11528;
state_11528 = G__11561;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_11528){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_11528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___11549))
})();var state__6441__auto__ = (function (){var statearr_11548 = f__6440__auto__.call(null);(statearr_11548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___11549);
return statearr_11548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___11549))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6439__auto___11648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___11648,tc,fc){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___11648,tc,fc){
return (function (state_11626){var state_val_11627 = (state_11626[(1)]);if((state_val_11627 === (7)))
{var inst_11622 = (state_11626[(2)]);var state_11626__$1 = state_11626;var statearr_11628_11649 = state_11626__$1;(statearr_11628_11649[(2)] = inst_11622);
(statearr_11628_11649[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (1)))
{var state_11626__$1 = state_11626;var statearr_11629_11650 = state_11626__$1;(statearr_11629_11650[(2)] = null);
(statearr_11629_11650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (4)))
{var inst_11607 = (state_11626[(7)]);var inst_11607__$1 = (state_11626[(2)]);var inst_11608 = (inst_11607__$1 == null);var state_11626__$1 = (function (){var statearr_11630 = state_11626;(statearr_11630[(7)] = inst_11607__$1);
return statearr_11630;
})();if(cljs.core.truth_(inst_11608))
{var statearr_11631_11651 = state_11626__$1;(statearr_11631_11651[(1)] = (5));
} else
{var statearr_11632_11652 = state_11626__$1;(statearr_11632_11652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (6)))
{var inst_11607 = (state_11626[(7)]);var inst_11613 = p.call(null,inst_11607);var state_11626__$1 = state_11626;if(cljs.core.truth_(inst_11613))
{var statearr_11633_11653 = state_11626__$1;(statearr_11633_11653[(1)] = (9));
} else
{var statearr_11634_11654 = state_11626__$1;(statearr_11634_11654[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (3)))
{var inst_11624 = (state_11626[(2)]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11626__$1,inst_11624);
} else
{if((state_val_11627 === (2)))
{var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11626__$1,(4),ch);
} else
{if((state_val_11627 === (11)))
{var inst_11607 = (state_11626[(7)]);var inst_11617 = (state_11626[(2)]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11626__$1,(8),inst_11617,inst_11607);
} else
{if((state_val_11627 === (9)))
{var state_11626__$1 = state_11626;var statearr_11635_11655 = state_11626__$1;(statearr_11635_11655[(2)] = tc);
(statearr_11635_11655[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (5)))
{var inst_11610 = cljs.core.async.close_BANG_.call(null,tc);var inst_11611 = cljs.core.async.close_BANG_.call(null,fc);var state_11626__$1 = (function (){var statearr_11636 = state_11626;(statearr_11636[(8)] = inst_11610);
return statearr_11636;
})();var statearr_11637_11656 = state_11626__$1;(statearr_11637_11656[(2)] = inst_11611);
(statearr_11637_11656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (10)))
{var state_11626__$1 = state_11626;var statearr_11638_11657 = state_11626__$1;(statearr_11638_11657[(2)] = fc);
(statearr_11638_11657[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11627 === (8)))
{var inst_11619 = (state_11626[(2)]);var state_11626__$1 = (function (){var statearr_11639 = state_11626;(statearr_11639[(9)] = inst_11619);
return statearr_11639;
})();var statearr_11640_11658 = state_11626__$1;(statearr_11640_11658[(2)] = null);
(statearr_11640_11658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___11648,tc,fc))
;return ((function (switch__6424__auto__,c__6439__auto___11648,tc,fc){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_11644 = [null,null,null,null,null,null,null,null,null,null];(statearr_11644[(0)] = state_machine__6425__auto__);
(statearr_11644[(1)] = (1));
return statearr_11644;
});
var state_machine__6425__auto____1 = (function (state_11626){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_11626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e11645){if((e11645 instanceof Object))
{var ex__6428__auto__ = e11645;var statearr_11646_11659 = state_11626;(statearr_11646_11659[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11660 = state_11626;
state_11626 = G__11660;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___11648,tc,fc))
})();var state__6441__auto__ = (function (){var statearr_11647 = f__6440__auto__.call(null);(statearr_11647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___11648);
return statearr_11647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___11648,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_11707){var state_val_11708 = (state_11707[(1)]);if((state_val_11708 === (7)))
{var inst_11703 = (state_11707[(2)]);var state_11707__$1 = state_11707;var statearr_11709_11725 = state_11707__$1;(statearr_11709_11725[(2)] = inst_11703);
(statearr_11709_11725[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11708 === (6)))
{var inst_11693 = (state_11707[(7)]);var inst_11696 = (state_11707[(8)]);var inst_11700 = f.call(null,inst_11693,inst_11696);var inst_11693__$1 = inst_11700;var state_11707__$1 = (function (){var statearr_11710 = state_11707;(statearr_11710[(7)] = inst_11693__$1);
return statearr_11710;
})();var statearr_11711_11726 = state_11707__$1;(statearr_11711_11726[(2)] = null);
(statearr_11711_11726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11708 === (5)))
{var inst_11693 = (state_11707[(7)]);var state_11707__$1 = state_11707;var statearr_11712_11727 = state_11707__$1;(statearr_11712_11727[(2)] = inst_11693);
(statearr_11712_11727[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11708 === (4)))
{var inst_11696 = (state_11707[(8)]);var inst_11696__$1 = (state_11707[(2)]);var inst_11697 = (inst_11696__$1 == null);var state_11707__$1 = (function (){var statearr_11713 = state_11707;(statearr_11713[(8)] = inst_11696__$1);
return statearr_11713;
})();if(cljs.core.truth_(inst_11697))
{var statearr_11714_11728 = state_11707__$1;(statearr_11714_11728[(1)] = (5));
} else
{var statearr_11715_11729 = state_11707__$1;(statearr_11715_11729[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11708 === (3)))
{var inst_11705 = (state_11707[(2)]);var state_11707__$1 = state_11707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11707__$1,inst_11705);
} else
{if((state_val_11708 === (2)))
{var state_11707__$1 = state_11707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11707__$1,(4),ch);
} else
{if((state_val_11708 === (1)))
{var inst_11693 = init;var state_11707__$1 = (function (){var statearr_11716 = state_11707;(statearr_11716[(7)] = inst_11693);
return statearr_11716;
})();var statearr_11717_11730 = state_11707__$1;(statearr_11717_11730[(2)] = null);
(statearr_11717_11730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_11721 = [null,null,null,null,null,null,null,null,null];(statearr_11721[(0)] = state_machine__6425__auto__);
(statearr_11721[(1)] = (1));
return statearr_11721;
});
var state_machine__6425__auto____1 = (function (state_11707){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_11707);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e11722){if((e11722 instanceof Object))
{var ex__6428__auto__ = e11722;var statearr_11723_11731 = state_11707;(statearr_11723_11731[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11722;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11732 = state_11707;
state_11707 = G__11732;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_11707){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_11707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_11724 = f__6440__auto__.call(null);(statearr_11724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_11724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_11794){var state_val_11795 = (state_11794[(1)]);if((state_val_11795 === (7)))
{var inst_11775 = (state_11794[(7)]);var inst_11780 = (state_11794[(2)]);var inst_11781 = cljs.core.next.call(null,inst_11775);var inst_11775__$1 = inst_11781;var state_11794__$1 = (function (){var statearr_11796 = state_11794;(statearr_11796[(7)] = inst_11775__$1);
(statearr_11796[(8)] = inst_11780);
return statearr_11796;
})();var statearr_11797_11815 = state_11794__$1;(statearr_11797_11815[(2)] = null);
(statearr_11797_11815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (1)))
{var inst_11774 = cljs.core.seq.call(null,coll);var inst_11775 = inst_11774;var state_11794__$1 = (function (){var statearr_11798 = state_11794;(statearr_11798[(7)] = inst_11775);
return statearr_11798;
})();var statearr_11799_11816 = state_11794__$1;(statearr_11799_11816[(2)] = null);
(statearr_11799_11816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (4)))
{var inst_11775 = (state_11794[(7)]);var inst_11778 = cljs.core.first.call(null,inst_11775);var state_11794__$1 = state_11794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11794__$1,(7),ch,inst_11778);
} else
{if((state_val_11795 === (6)))
{var inst_11790 = (state_11794[(2)]);var state_11794__$1 = state_11794;var statearr_11800_11817 = state_11794__$1;(statearr_11800_11817[(2)] = inst_11790);
(statearr_11800_11817[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (3)))
{var inst_11792 = (state_11794[(2)]);var state_11794__$1 = state_11794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11794__$1,inst_11792);
} else
{if((state_val_11795 === (2)))
{var inst_11775 = (state_11794[(7)]);var state_11794__$1 = state_11794;if(cljs.core.truth_(inst_11775))
{var statearr_11801_11818 = state_11794__$1;(statearr_11801_11818[(1)] = (4));
} else
{var statearr_11802_11819 = state_11794__$1;(statearr_11802_11819[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (9)))
{var state_11794__$1 = state_11794;var statearr_11803_11820 = state_11794__$1;(statearr_11803_11820[(2)] = null);
(statearr_11803_11820[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (5)))
{var state_11794__$1 = state_11794;if(cljs.core.truth_(close_QMARK_))
{var statearr_11804_11821 = state_11794__$1;(statearr_11804_11821[(1)] = (8));
} else
{var statearr_11805_11822 = state_11794__$1;(statearr_11805_11822[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (10)))
{var inst_11788 = (state_11794[(2)]);var state_11794__$1 = state_11794;var statearr_11806_11823 = state_11794__$1;(statearr_11806_11823[(2)] = inst_11788);
(statearr_11806_11823[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11795 === (8)))
{var inst_11785 = cljs.core.async.close_BANG_.call(null,ch);var state_11794__$1 = state_11794;var statearr_11807_11824 = state_11794__$1;(statearr_11807_11824[(2)] = inst_11785);
(statearr_11807_11824[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_11811 = [null,null,null,null,null,null,null,null,null];(statearr_11811[(0)] = state_machine__6425__auto__);
(statearr_11811[(1)] = (1));
return statearr_11811;
});
var state_machine__6425__auto____1 = (function (state_11794){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_11794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e11812){if((e11812 instanceof Object))
{var ex__6428__auto__ = e11812;var statearr_11813_11825 = state_11794;(statearr_11813_11825[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11812;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11826 = state_11794;
state_11794 = G__11826;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_11794){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_11794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_11814 = f__6440__auto__.call(null);(statearr_11814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_11814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11828 = {};return obj11828;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11830 = {};return obj11830;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12054 = (function (cs,ch,mult,meta12055){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12055 = meta12055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12054.cljs$lang$type = true;
cljs.core.async.t12054.cljs$lang$ctorStr = "cljs.core.async/t12054";
cljs.core.async.t12054.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12054");
});})(cs))
;
cljs.core.async.t12054.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12054.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12054.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12054.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12056){var self__ = this;
var _12056__$1 = this;return self__.meta12055;
});})(cs))
;
cljs.core.async.t12054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12056,meta12055__$1){var self__ = this;
var _12056__$1 = this;return (new cljs.core.async.t12054(self__.cs,self__.ch,self__.mult,meta12055__$1));
});})(cs))
;
cljs.core.async.__GT_t12054 = ((function (cs){
return (function __GT_t12054(cs__$1,ch__$1,mult__$1,meta12055){return (new cljs.core.async.t12054(cs__$1,ch__$1,mult__$1,meta12055));
});})(cs))
;
}
return (new cljs.core.async.t12054(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6439__auto___12277 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12277,cs,m,dchan,dctr,done){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12277,cs,m,dchan,dctr,done){
return (function (state_12191){var state_val_12192 = (state_12191[(1)]);if((state_val_12192 === (7)))
{var inst_12187 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12193_12278 = state_12191__$1;(statearr_12193_12278[(2)] = inst_12187);
(statearr_12193_12278[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (20)))
{var inst_12088 = (state_12191[(7)]);var inst_12098 = cljs.core.first.call(null,inst_12088);var inst_12099 = cljs.core.nth.call(null,inst_12098,(0),null);var inst_12100 = cljs.core.nth.call(null,inst_12098,(1),null);var state_12191__$1 = (function (){var statearr_12194 = state_12191;(statearr_12194[(8)] = inst_12099);
return statearr_12194;
})();if(cljs.core.truth_(inst_12100))
{var statearr_12195_12279 = state_12191__$1;(statearr_12195_12279[(1)] = (22));
} else
{var statearr_12196_12280 = state_12191__$1;(statearr_12196_12280[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (27)))
{var inst_12128 = (state_12191[(9)]);var inst_12130 = (state_12191[(10)]);var inst_12135 = cljs.core._nth.call(null,inst_12128,inst_12130);var state_12191__$1 = (function (){var statearr_12197 = state_12191;(statearr_12197[(11)] = inst_12135);
return statearr_12197;
})();var statearr_12198_12281 = state_12191__$1;(statearr_12198_12281[(2)] = null);
(statearr_12198_12281[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (1)))
{var state_12191__$1 = state_12191;var statearr_12199_12282 = state_12191__$1;(statearr_12199_12282[(2)] = null);
(statearr_12199_12282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (24)))
{var inst_12088 = (state_12191[(7)]);var inst_12105 = (state_12191[(2)]);var inst_12106 = cljs.core.next.call(null,inst_12088);var inst_12068 = inst_12106;var inst_12069 = null;var inst_12070 = (0);var inst_12071 = (0);var state_12191__$1 = (function (){var statearr_12200 = state_12191;(statearr_12200[(12)] = inst_12105);
(statearr_12200[(13)] = inst_12068);
(statearr_12200[(14)] = inst_12070);
(statearr_12200[(15)] = inst_12071);
(statearr_12200[(16)] = inst_12069);
return statearr_12200;
})();var statearr_12201_12283 = state_12191__$1;(statearr_12201_12283[(2)] = null);
(statearr_12201_12283[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (39)))
{var inst_12148 = (state_12191[(17)]);var inst_12166 = (state_12191[(2)]);var inst_12167 = cljs.core.next.call(null,inst_12148);var inst_12127 = inst_12167;var inst_12128 = null;var inst_12129 = (0);var inst_12130 = (0);var state_12191__$1 = (function (){var statearr_12205 = state_12191;(statearr_12205[(9)] = inst_12128);
(statearr_12205[(18)] = inst_12129);
(statearr_12205[(10)] = inst_12130);
(statearr_12205[(19)] = inst_12166);
(statearr_12205[(20)] = inst_12127);
return statearr_12205;
})();var statearr_12206_12284 = state_12191__$1;(statearr_12206_12284[(2)] = null);
(statearr_12206_12284[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (4)))
{var inst_12059 = (state_12191[(21)]);var inst_12059__$1 = (state_12191[(2)]);var inst_12060 = (inst_12059__$1 == null);var state_12191__$1 = (function (){var statearr_12207 = state_12191;(statearr_12207[(21)] = inst_12059__$1);
return statearr_12207;
})();if(cljs.core.truth_(inst_12060))
{var statearr_12208_12285 = state_12191__$1;(statearr_12208_12285[(1)] = (5));
} else
{var statearr_12209_12286 = state_12191__$1;(statearr_12209_12286[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (15)))
{var inst_12068 = (state_12191[(13)]);var inst_12070 = (state_12191[(14)]);var inst_12071 = (state_12191[(15)]);var inst_12069 = (state_12191[(16)]);var inst_12084 = (state_12191[(2)]);var inst_12085 = (inst_12071 + (1));var tmp12202 = inst_12068;var tmp12203 = inst_12070;var tmp12204 = inst_12069;var inst_12068__$1 = tmp12202;var inst_12069__$1 = tmp12204;var inst_12070__$1 = tmp12203;var inst_12071__$1 = inst_12085;var state_12191__$1 = (function (){var statearr_12210 = state_12191;(statearr_12210[(22)] = inst_12084);
(statearr_12210[(13)] = inst_12068__$1);
(statearr_12210[(14)] = inst_12070__$1);
(statearr_12210[(15)] = inst_12071__$1);
(statearr_12210[(16)] = inst_12069__$1);
return statearr_12210;
})();var statearr_12211_12287 = state_12191__$1;(statearr_12211_12287[(2)] = null);
(statearr_12211_12287[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (21)))
{var inst_12109 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12212_12288 = state_12191__$1;(statearr_12212_12288[(2)] = inst_12109);
(statearr_12212_12288[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (31)))
{var inst_12135 = (state_12191[(11)]);var inst_12136 = (state_12191[(2)]);var inst_12137 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12138 = cljs.core.async.untap_STAR_.call(null,m,inst_12135);var state_12191__$1 = (function (){var statearr_12213 = state_12191;(statearr_12213[(23)] = inst_12136);
(statearr_12213[(24)] = inst_12137);
return statearr_12213;
})();var statearr_12214_12289 = state_12191__$1;(statearr_12214_12289[(2)] = inst_12138);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (32)))
{var inst_12135 = (state_12191[(11)]);var inst_12059 = (state_12191[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12191,(31),Object,null,(30));var inst_12142 = cljs.core.async.put_BANG_.call(null,inst_12135,inst_12059,done);var state_12191__$1 = state_12191;var statearr_12215_12290 = state_12191__$1;(statearr_12215_12290[(2)] = inst_12142);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (40)))
{var inst_12157 = (state_12191[(25)]);var inst_12158 = (state_12191[(2)]);var inst_12159 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12160 = cljs.core.async.untap_STAR_.call(null,m,inst_12157);var state_12191__$1 = (function (){var statearr_12216 = state_12191;(statearr_12216[(26)] = inst_12158);
(statearr_12216[(27)] = inst_12159);
return statearr_12216;
})();var statearr_12217_12291 = state_12191__$1;(statearr_12217_12291[(2)] = inst_12160);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (33)))
{var inst_12148 = (state_12191[(17)]);var inst_12150 = cljs.core.chunked_seq_QMARK_.call(null,inst_12148);var state_12191__$1 = state_12191;if(inst_12150)
{var statearr_12218_12292 = state_12191__$1;(statearr_12218_12292[(1)] = (36));
} else
{var statearr_12219_12293 = state_12191__$1;(statearr_12219_12293[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (13)))
{var inst_12078 = (state_12191[(28)]);var inst_12081 = cljs.core.async.close_BANG_.call(null,inst_12078);var state_12191__$1 = state_12191;var statearr_12220_12294 = state_12191__$1;(statearr_12220_12294[(2)] = inst_12081);
(statearr_12220_12294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (22)))
{var inst_12099 = (state_12191[(8)]);var inst_12102 = cljs.core.async.close_BANG_.call(null,inst_12099);var state_12191__$1 = state_12191;var statearr_12221_12295 = state_12191__$1;(statearr_12221_12295[(2)] = inst_12102);
(statearr_12221_12295[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (36)))
{var inst_12148 = (state_12191[(17)]);var inst_12152 = cljs.core.chunk_first.call(null,inst_12148);var inst_12153 = cljs.core.chunk_rest.call(null,inst_12148);var inst_12154 = cljs.core.count.call(null,inst_12152);var inst_12127 = inst_12153;var inst_12128 = inst_12152;var inst_12129 = inst_12154;var inst_12130 = (0);var state_12191__$1 = (function (){var statearr_12222 = state_12191;(statearr_12222[(9)] = inst_12128);
(statearr_12222[(18)] = inst_12129);
(statearr_12222[(10)] = inst_12130);
(statearr_12222[(20)] = inst_12127);
return statearr_12222;
})();var statearr_12223_12296 = state_12191__$1;(statearr_12223_12296[(2)] = null);
(statearr_12223_12296[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (41)))
{var inst_12157 = (state_12191[(25)]);var inst_12059 = (state_12191[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12191,(40),Object,null,(39));var inst_12164 = cljs.core.async.put_BANG_.call(null,inst_12157,inst_12059,done);var state_12191__$1 = state_12191;var statearr_12224_12297 = state_12191__$1;(statearr_12224_12297[(2)] = inst_12164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (43)))
{var state_12191__$1 = state_12191;var statearr_12225_12298 = state_12191__$1;(statearr_12225_12298[(2)] = null);
(statearr_12225_12298[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (29)))
{var inst_12175 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12226_12299 = state_12191__$1;(statearr_12226_12299[(2)] = inst_12175);
(statearr_12226_12299[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (44)))
{var inst_12184 = (state_12191[(2)]);var state_12191__$1 = (function (){var statearr_12227 = state_12191;(statearr_12227[(29)] = inst_12184);
return statearr_12227;
})();var statearr_12228_12300 = state_12191__$1;(statearr_12228_12300[(2)] = null);
(statearr_12228_12300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (6)))
{var inst_12119 = (state_12191[(30)]);var inst_12118 = cljs.core.deref.call(null,cs);var inst_12119__$1 = cljs.core.keys.call(null,inst_12118);var inst_12120 = cljs.core.count.call(null,inst_12119__$1);var inst_12121 = cljs.core.reset_BANG_.call(null,dctr,inst_12120);var inst_12126 = cljs.core.seq.call(null,inst_12119__$1);var inst_12127 = inst_12126;var inst_12128 = null;var inst_12129 = (0);var inst_12130 = (0);var state_12191__$1 = (function (){var statearr_12229 = state_12191;(statearr_12229[(9)] = inst_12128);
(statearr_12229[(18)] = inst_12129);
(statearr_12229[(31)] = inst_12121);
(statearr_12229[(10)] = inst_12130);
(statearr_12229[(20)] = inst_12127);
(statearr_12229[(30)] = inst_12119__$1);
return statearr_12229;
})();var statearr_12230_12301 = state_12191__$1;(statearr_12230_12301[(2)] = null);
(statearr_12230_12301[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (28)))
{var inst_12148 = (state_12191[(17)]);var inst_12127 = (state_12191[(20)]);var inst_12148__$1 = cljs.core.seq.call(null,inst_12127);var state_12191__$1 = (function (){var statearr_12231 = state_12191;(statearr_12231[(17)] = inst_12148__$1);
return statearr_12231;
})();if(inst_12148__$1)
{var statearr_12232_12302 = state_12191__$1;(statearr_12232_12302[(1)] = (33));
} else
{var statearr_12233_12303 = state_12191__$1;(statearr_12233_12303[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (25)))
{var inst_12129 = (state_12191[(18)]);var inst_12130 = (state_12191[(10)]);var inst_12132 = (inst_12130 < inst_12129);var inst_12133 = inst_12132;var state_12191__$1 = state_12191;if(cljs.core.truth_(inst_12133))
{var statearr_12234_12304 = state_12191__$1;(statearr_12234_12304[(1)] = (27));
} else
{var statearr_12235_12305 = state_12191__$1;(statearr_12235_12305[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (34)))
{var state_12191__$1 = state_12191;var statearr_12236_12306 = state_12191__$1;(statearr_12236_12306[(2)] = null);
(statearr_12236_12306[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (17)))
{var state_12191__$1 = state_12191;var statearr_12237_12307 = state_12191__$1;(statearr_12237_12307[(2)] = null);
(statearr_12237_12307[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (3)))
{var inst_12189 = (state_12191[(2)]);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12191__$1,inst_12189);
} else
{if((state_val_12192 === (12)))
{var inst_12114 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12238_12308 = state_12191__$1;(statearr_12238_12308[(2)] = inst_12114);
(statearr_12238_12308[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (2)))
{var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12191__$1,(4),ch);
} else
{if((state_val_12192 === (23)))
{var state_12191__$1 = state_12191;var statearr_12239_12309 = state_12191__$1;(statearr_12239_12309[(2)] = null);
(statearr_12239_12309[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (35)))
{var inst_12173 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12240_12310 = state_12191__$1;(statearr_12240_12310[(2)] = inst_12173);
(statearr_12240_12310[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (19)))
{var inst_12088 = (state_12191[(7)]);var inst_12092 = cljs.core.chunk_first.call(null,inst_12088);var inst_12093 = cljs.core.chunk_rest.call(null,inst_12088);var inst_12094 = cljs.core.count.call(null,inst_12092);var inst_12068 = inst_12093;var inst_12069 = inst_12092;var inst_12070 = inst_12094;var inst_12071 = (0);var state_12191__$1 = (function (){var statearr_12241 = state_12191;(statearr_12241[(13)] = inst_12068);
(statearr_12241[(14)] = inst_12070);
(statearr_12241[(15)] = inst_12071);
(statearr_12241[(16)] = inst_12069);
return statearr_12241;
})();var statearr_12242_12311 = state_12191__$1;(statearr_12242_12311[(2)] = null);
(statearr_12242_12311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (11)))
{var inst_12068 = (state_12191[(13)]);var inst_12088 = (state_12191[(7)]);var inst_12088__$1 = cljs.core.seq.call(null,inst_12068);var state_12191__$1 = (function (){var statearr_12243 = state_12191;(statearr_12243[(7)] = inst_12088__$1);
return statearr_12243;
})();if(inst_12088__$1)
{var statearr_12244_12312 = state_12191__$1;(statearr_12244_12312[(1)] = (16));
} else
{var statearr_12245_12313 = state_12191__$1;(statearr_12245_12313[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (9)))
{var inst_12116 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12246_12314 = state_12191__$1;(statearr_12246_12314[(2)] = inst_12116);
(statearr_12246_12314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (5)))
{var inst_12066 = cljs.core.deref.call(null,cs);var inst_12067 = cljs.core.seq.call(null,inst_12066);var inst_12068 = inst_12067;var inst_12069 = null;var inst_12070 = (0);var inst_12071 = (0);var state_12191__$1 = (function (){var statearr_12247 = state_12191;(statearr_12247[(13)] = inst_12068);
(statearr_12247[(14)] = inst_12070);
(statearr_12247[(15)] = inst_12071);
(statearr_12247[(16)] = inst_12069);
return statearr_12247;
})();var statearr_12248_12315 = state_12191__$1;(statearr_12248_12315[(2)] = null);
(statearr_12248_12315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (14)))
{var state_12191__$1 = state_12191;var statearr_12249_12316 = state_12191__$1;(statearr_12249_12316[(2)] = null);
(statearr_12249_12316[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (45)))
{var inst_12181 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12250_12317 = state_12191__$1;(statearr_12250_12317[(2)] = inst_12181);
(statearr_12250_12317[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (26)))
{var inst_12119 = (state_12191[(30)]);var inst_12177 = (state_12191[(2)]);var inst_12178 = cljs.core.seq.call(null,inst_12119);var state_12191__$1 = (function (){var statearr_12251 = state_12191;(statearr_12251[(32)] = inst_12177);
return statearr_12251;
})();if(inst_12178)
{var statearr_12252_12318 = state_12191__$1;(statearr_12252_12318[(1)] = (42));
} else
{var statearr_12253_12319 = state_12191__$1;(statearr_12253_12319[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (16)))
{var inst_12088 = (state_12191[(7)]);var inst_12090 = cljs.core.chunked_seq_QMARK_.call(null,inst_12088);var state_12191__$1 = state_12191;if(inst_12090)
{var statearr_12257_12320 = state_12191__$1;(statearr_12257_12320[(1)] = (19));
} else
{var statearr_12258_12321 = state_12191__$1;(statearr_12258_12321[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (38)))
{var inst_12170 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12259_12322 = state_12191__$1;(statearr_12259_12322[(2)] = inst_12170);
(statearr_12259_12322[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (30)))
{var inst_12128 = (state_12191[(9)]);var inst_12129 = (state_12191[(18)]);var inst_12130 = (state_12191[(10)]);var inst_12127 = (state_12191[(20)]);var inst_12144 = (state_12191[(2)]);var inst_12145 = (inst_12130 + (1));var tmp12254 = inst_12128;var tmp12255 = inst_12129;var tmp12256 = inst_12127;var inst_12127__$1 = tmp12256;var inst_12128__$1 = tmp12254;var inst_12129__$1 = tmp12255;var inst_12130__$1 = inst_12145;var state_12191__$1 = (function (){var statearr_12260 = state_12191;(statearr_12260[(9)] = inst_12128__$1);
(statearr_12260[(18)] = inst_12129__$1);
(statearr_12260[(10)] = inst_12130__$1);
(statearr_12260[(33)] = inst_12144);
(statearr_12260[(20)] = inst_12127__$1);
return statearr_12260;
})();var statearr_12261_12323 = state_12191__$1;(statearr_12261_12323[(2)] = null);
(statearr_12261_12323[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (10)))
{var inst_12071 = (state_12191[(15)]);var inst_12069 = (state_12191[(16)]);var inst_12077 = cljs.core._nth.call(null,inst_12069,inst_12071);var inst_12078 = cljs.core.nth.call(null,inst_12077,(0),null);var inst_12079 = cljs.core.nth.call(null,inst_12077,(1),null);var state_12191__$1 = (function (){var statearr_12262 = state_12191;(statearr_12262[(28)] = inst_12078);
return statearr_12262;
})();if(cljs.core.truth_(inst_12079))
{var statearr_12263_12324 = state_12191__$1;(statearr_12263_12324[(1)] = (13));
} else
{var statearr_12264_12325 = state_12191__$1;(statearr_12264_12325[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (18)))
{var inst_12112 = (state_12191[(2)]);var state_12191__$1 = state_12191;var statearr_12265_12326 = state_12191__$1;(statearr_12265_12326[(2)] = inst_12112);
(statearr_12265_12326[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (42)))
{var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12191__$1,(45),dchan);
} else
{if((state_val_12192 === (37)))
{var inst_12148 = (state_12191[(17)]);var inst_12157 = cljs.core.first.call(null,inst_12148);var state_12191__$1 = (function (){var statearr_12266 = state_12191;(statearr_12266[(25)] = inst_12157);
return statearr_12266;
})();var statearr_12267_12327 = state_12191__$1;(statearr_12267_12327[(2)] = null);
(statearr_12267_12327[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12192 === (8)))
{var inst_12070 = (state_12191[(14)]);var inst_12071 = (state_12191[(15)]);var inst_12073 = (inst_12071 < inst_12070);var inst_12074 = inst_12073;var state_12191__$1 = state_12191;if(cljs.core.truth_(inst_12074))
{var statearr_12268_12328 = state_12191__$1;(statearr_12268_12328[(1)] = (10));
} else
{var statearr_12269_12329 = state_12191__$1;(statearr_12269_12329[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12277,cs,m,dchan,dctr,done))
;return ((function (switch__6424__auto__,c__6439__auto___12277,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12273[(0)] = state_machine__6425__auto__);
(statearr_12273[(1)] = (1));
return statearr_12273;
});
var state_machine__6425__auto____1 = (function (state_12191){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12191);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12274){if((e12274 instanceof Object))
{var ex__6428__auto__ = e12274;var statearr_12275_12330 = state_12191;(statearr_12275_12330[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12274;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12331 = state_12191;
state_12191 = G__12331;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12191){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12277,cs,m,dchan,dctr,done))
})();var state__6441__auto__ = (function (){var statearr_12276 = f__6440__auto__.call(null);(statearr_12276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12277);
return statearr_12276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12277,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12333 = {};return obj12333;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12443 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12444){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12444 = meta12444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12443.cljs$lang$type = true;
cljs.core.async.t12443.cljs$lang$ctorStr = "cljs.core.async/t12443";
cljs.core.async.t12443.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12443");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12443.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12445){var self__ = this;
var _12445__$1 = this;return self__.meta12444;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12445,meta12444__$1){var self__ = this;
var _12445__$1 = this;return (new cljs.core.async.t12443(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12444__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12443 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12443(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12444){return (new cljs.core.async.t12443(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12444));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12443(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6439__auto___12552 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12510){var state_val_12511 = (state_12510[(1)]);if((state_val_12511 === (7)))
{var inst_12459 = (state_12510[(7)]);var inst_12464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12459);var state_12510__$1 = state_12510;var statearr_12512_12553 = state_12510__$1;(statearr_12512_12553[(2)] = inst_12464);
(statearr_12512_12553[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (20)))
{var inst_12474 = (state_12510[(8)]);var state_12510__$1 = state_12510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12510__$1,(23),out,inst_12474);
} else
{if((state_val_12511 === (1)))
{var inst_12449 = (state_12510[(9)]);var inst_12449__$1 = calc_state.call(null);var inst_12450 = cljs.core.seq_QMARK_.call(null,inst_12449__$1);var state_12510__$1 = (function (){var statearr_12513 = state_12510;(statearr_12513[(9)] = inst_12449__$1);
return statearr_12513;
})();if(inst_12450)
{var statearr_12514_12554 = state_12510__$1;(statearr_12514_12554[(1)] = (2));
} else
{var statearr_12515_12555 = state_12510__$1;(statearr_12515_12555[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (4)))
{var inst_12449 = (state_12510[(9)]);var inst_12455 = (state_12510[(2)]);var inst_12456 = cljs.core.get.call(null,inst_12455,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12457 = cljs.core.get.call(null,inst_12455,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12458 = cljs.core.get.call(null,inst_12455,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12459 = inst_12449;var state_12510__$1 = (function (){var statearr_12516 = state_12510;(statearr_12516[(10)] = inst_12456);
(statearr_12516[(7)] = inst_12459);
(statearr_12516[(11)] = inst_12457);
(statearr_12516[(12)] = inst_12458);
return statearr_12516;
})();var statearr_12517_12556 = state_12510__$1;(statearr_12517_12556[(2)] = null);
(statearr_12517_12556[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (15)))
{var state_12510__$1 = state_12510;var statearr_12518_12557 = state_12510__$1;(statearr_12518_12557[(2)] = null);
(statearr_12518_12557[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (21)))
{var state_12510__$1 = state_12510;var statearr_12519_12558 = state_12510__$1;(statearr_12519_12558[(2)] = null);
(statearr_12519_12558[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (13)))
{var inst_12506 = (state_12510[(2)]);var state_12510__$1 = state_12510;var statearr_12520_12559 = state_12510__$1;(statearr_12520_12559[(2)] = inst_12506);
(statearr_12520_12559[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (22)))
{var inst_12467 = (state_12510[(13)]);var inst_12503 = (state_12510[(2)]);var inst_12459 = inst_12467;var state_12510__$1 = (function (){var statearr_12521 = state_12510;(statearr_12521[(7)] = inst_12459);
(statearr_12521[(14)] = inst_12503);
return statearr_12521;
})();var statearr_12522_12560 = state_12510__$1;(statearr_12522_12560[(2)] = null);
(statearr_12522_12560[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (6)))
{var inst_12508 = (state_12510[(2)]);var state_12510__$1 = state_12510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12510__$1,inst_12508);
} else
{if((state_val_12511 === (17)))
{var inst_12489 = (state_12510[(15)]);var state_12510__$1 = state_12510;var statearr_12523_12561 = state_12510__$1;(statearr_12523_12561[(2)] = inst_12489);
(statearr_12523_12561[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (3)))
{var inst_12449 = (state_12510[(9)]);var state_12510__$1 = state_12510;var statearr_12524_12562 = state_12510__$1;(statearr_12524_12562[(2)] = inst_12449);
(statearr_12524_12562[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (12)))
{var inst_12475 = (state_12510[(16)]);var inst_12489 = (state_12510[(15)]);var inst_12470 = (state_12510[(17)]);var inst_12489__$1 = inst_12470.call(null,inst_12475);var state_12510__$1 = (function (){var statearr_12525 = state_12510;(statearr_12525[(15)] = inst_12489__$1);
return statearr_12525;
})();if(cljs.core.truth_(inst_12489__$1))
{var statearr_12526_12563 = state_12510__$1;(statearr_12526_12563[(1)] = (17));
} else
{var statearr_12527_12564 = state_12510__$1;(statearr_12527_12564[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (2)))
{var inst_12449 = (state_12510[(9)]);var inst_12452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12449);var state_12510__$1 = state_12510;var statearr_12528_12565 = state_12510__$1;(statearr_12528_12565[(2)] = inst_12452);
(statearr_12528_12565[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (23)))
{var inst_12500 = (state_12510[(2)]);var state_12510__$1 = state_12510;var statearr_12529_12566 = state_12510__$1;(statearr_12529_12566[(2)] = inst_12500);
(statearr_12529_12566[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (19)))
{var inst_12497 = (state_12510[(2)]);var state_12510__$1 = state_12510;if(cljs.core.truth_(inst_12497))
{var statearr_12530_12567 = state_12510__$1;(statearr_12530_12567[(1)] = (20));
} else
{var statearr_12531_12568 = state_12510__$1;(statearr_12531_12568[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (11)))
{var inst_12474 = (state_12510[(8)]);var inst_12480 = (inst_12474 == null);var state_12510__$1 = state_12510;if(cljs.core.truth_(inst_12480))
{var statearr_12532_12569 = state_12510__$1;(statearr_12532_12569[(1)] = (14));
} else
{var statearr_12533_12570 = state_12510__$1;(statearr_12533_12570[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (9)))
{var inst_12467 = (state_12510[(13)]);var inst_12467__$1 = (state_12510[(2)]);var inst_12468 = cljs.core.get.call(null,inst_12467__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12469 = cljs.core.get.call(null,inst_12467__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12470 = cljs.core.get.call(null,inst_12467__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12510__$1 = (function (){var statearr_12534 = state_12510;(statearr_12534[(13)] = inst_12467__$1);
(statearr_12534[(18)] = inst_12469);
(statearr_12534[(17)] = inst_12470);
return statearr_12534;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12510__$1,(10),inst_12468);
} else
{if((state_val_12511 === (5)))
{var inst_12459 = (state_12510[(7)]);var inst_12462 = cljs.core.seq_QMARK_.call(null,inst_12459);var state_12510__$1 = state_12510;if(inst_12462)
{var statearr_12535_12571 = state_12510__$1;(statearr_12535_12571[(1)] = (7));
} else
{var statearr_12536_12572 = state_12510__$1;(statearr_12536_12572[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (14)))
{var inst_12475 = (state_12510[(16)]);var inst_12482 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12475);var state_12510__$1 = state_12510;var statearr_12537_12573 = state_12510__$1;(statearr_12537_12573[(2)] = inst_12482);
(statearr_12537_12573[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (16)))
{var inst_12485 = (state_12510[(2)]);var inst_12486 = calc_state.call(null);var inst_12459 = inst_12486;var state_12510__$1 = (function (){var statearr_12538 = state_12510;(statearr_12538[(19)] = inst_12485);
(statearr_12538[(7)] = inst_12459);
return statearr_12538;
})();var statearr_12539_12574 = state_12510__$1;(statearr_12539_12574[(2)] = null);
(statearr_12539_12574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (10)))
{var inst_12475 = (state_12510[(16)]);var inst_12474 = (state_12510[(8)]);var inst_12473 = (state_12510[(2)]);var inst_12474__$1 = cljs.core.nth.call(null,inst_12473,(0),null);var inst_12475__$1 = cljs.core.nth.call(null,inst_12473,(1),null);var inst_12476 = (inst_12474__$1 == null);var inst_12477 = cljs.core._EQ_.call(null,inst_12475__$1,change);var inst_12478 = (inst_12476) || (inst_12477);var state_12510__$1 = (function (){var statearr_12540 = state_12510;(statearr_12540[(16)] = inst_12475__$1);
(statearr_12540[(8)] = inst_12474__$1);
return statearr_12540;
})();if(cljs.core.truth_(inst_12478))
{var statearr_12541_12575 = state_12510__$1;(statearr_12541_12575[(1)] = (11));
} else
{var statearr_12542_12576 = state_12510__$1;(statearr_12542_12576[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (18)))
{var inst_12475 = (state_12510[(16)]);var inst_12469 = (state_12510[(18)]);var inst_12470 = (state_12510[(17)]);var inst_12492 = cljs.core.empty_QMARK_.call(null,inst_12470);var inst_12493 = inst_12469.call(null,inst_12475);var inst_12494 = cljs.core.not.call(null,inst_12493);var inst_12495 = (inst_12492) && (inst_12494);var state_12510__$1 = state_12510;var statearr_12543_12577 = state_12510__$1;(statearr_12543_12577[(2)] = inst_12495);
(statearr_12543_12577[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12511 === (8)))
{var inst_12459 = (state_12510[(7)]);var state_12510__$1 = state_12510;var statearr_12544_12578 = state_12510__$1;(statearr_12544_12578[(2)] = inst_12459);
(statearr_12544_12578[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6424__auto__,c__6439__auto___12552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12548[(0)] = state_machine__6425__auto__);
(statearr_12548[(1)] = (1));
return statearr_12548;
});
var state_machine__6425__auto____1 = (function (state_12510){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12549){if((e12549 instanceof Object))
{var ex__6428__auto__ = e12549;var statearr_12550_12579 = state_12510;(statearr_12550_12579[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12549;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12580 = state_12510;
state_12510 = G__12580;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12510){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6441__auto__ = (function (){var statearr_12551 = f__6440__auto__.call(null);(statearr_12551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12552);
return statearr_12551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12582 = {};return obj12582;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__12583_SHARP_){if(cljs.core.truth_(p1__12583_SHARP_.call(null,topic)))
{return p1__12583_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12583_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12708 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12709){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12709 = meta12709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12708.cljs$lang$type = true;
cljs.core.async.t12708.cljs$lang$ctorStr = "cljs.core.async/t12708";
cljs.core.async.t12708.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12708");
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12710){var self__ = this;
var _12710__$1 = this;return self__.meta12709;
});})(mults,ensure_mult))
;
cljs.core.async.t12708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12710,meta12709__$1){var self__ = this;
var _12710__$1 = this;return (new cljs.core.async.t12708(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12709__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12708 = ((function (mults,ensure_mult){
return (function __GT_t12708(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12709){return (new cljs.core.async.t12708(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12709));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12708(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6439__auto___12832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12832,mults,ensure_mult,p){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12832,mults,ensure_mult,p){
return (function (state_12784){var state_val_12785 = (state_12784[(1)]);if((state_val_12785 === (7)))
{var inst_12780 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12786_12833 = state_12784__$1;(statearr_12786_12833[(2)] = inst_12780);
(statearr_12786_12833[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (20)))
{var state_12784__$1 = state_12784;var statearr_12787_12834 = state_12784__$1;(statearr_12787_12834[(2)] = null);
(statearr_12787_12834[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (1)))
{var state_12784__$1 = state_12784;var statearr_12788_12835 = state_12784__$1;(statearr_12788_12835[(2)] = null);
(statearr_12788_12835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (24)))
{var inst_12763 = (state_12784[(7)]);var inst_12713 = (state_12784[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12784,(23),Object,null,(22));var inst_12770 = cljs.core.async.muxch_STAR_.call(null,inst_12763);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12784__$1,(25),inst_12770,inst_12713);
} else
{if((state_val_12785 === (4)))
{var inst_12713 = (state_12784[(8)]);var inst_12713__$1 = (state_12784[(2)]);var inst_12714 = (inst_12713__$1 == null);var state_12784__$1 = (function (){var statearr_12789 = state_12784;(statearr_12789[(8)] = inst_12713__$1);
return statearr_12789;
})();if(cljs.core.truth_(inst_12714))
{var statearr_12790_12836 = state_12784__$1;(statearr_12790_12836[(1)] = (5));
} else
{var statearr_12791_12837 = state_12784__$1;(statearr_12791_12837[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (15)))
{var inst_12755 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12792_12838 = state_12784__$1;(statearr_12792_12838[(2)] = inst_12755);
(statearr_12792_12838[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (21)))
{var inst_12777 = (state_12784[(2)]);var state_12784__$1 = (function (){var statearr_12793 = state_12784;(statearr_12793[(9)] = inst_12777);
return statearr_12793;
})();var statearr_12794_12839 = state_12784__$1;(statearr_12794_12839[(2)] = null);
(statearr_12794_12839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (13)))
{var inst_12737 = (state_12784[(10)]);var inst_12739 = cljs.core.chunked_seq_QMARK_.call(null,inst_12737);var state_12784__$1 = state_12784;if(inst_12739)
{var statearr_12795_12840 = state_12784__$1;(statearr_12795_12840[(1)] = (16));
} else
{var statearr_12796_12841 = state_12784__$1;(statearr_12796_12841[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (22)))
{var inst_12774 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12797_12842 = state_12784__$1;(statearr_12797_12842[(2)] = inst_12774);
(statearr_12797_12842[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (6)))
{var inst_12763 = (state_12784[(7)]);var inst_12761 = (state_12784[(11)]);var inst_12713 = (state_12784[(8)]);var inst_12761__$1 = topic_fn.call(null,inst_12713);var inst_12762 = cljs.core.deref.call(null,mults);var inst_12763__$1 = cljs.core.get.call(null,inst_12762,inst_12761__$1);var state_12784__$1 = (function (){var statearr_12798 = state_12784;(statearr_12798[(7)] = inst_12763__$1);
(statearr_12798[(11)] = inst_12761__$1);
return statearr_12798;
})();if(cljs.core.truth_(inst_12763__$1))
{var statearr_12799_12843 = state_12784__$1;(statearr_12799_12843[(1)] = (19));
} else
{var statearr_12800_12844 = state_12784__$1;(statearr_12800_12844[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (25)))
{var inst_12772 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12801_12845 = state_12784__$1;(statearr_12801_12845[(2)] = inst_12772);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (17)))
{var inst_12737 = (state_12784[(10)]);var inst_12746 = cljs.core.first.call(null,inst_12737);var inst_12747 = cljs.core.async.muxch_STAR_.call(null,inst_12746);var inst_12748 = cljs.core.async.close_BANG_.call(null,inst_12747);var inst_12749 = cljs.core.next.call(null,inst_12737);var inst_12723 = inst_12749;var inst_12724 = null;var inst_12725 = (0);var inst_12726 = (0);var state_12784__$1 = (function (){var statearr_12802 = state_12784;(statearr_12802[(12)] = inst_12725);
(statearr_12802[(13)] = inst_12748);
(statearr_12802[(14)] = inst_12726);
(statearr_12802[(15)] = inst_12723);
(statearr_12802[(16)] = inst_12724);
return statearr_12802;
})();var statearr_12803_12846 = state_12784__$1;(statearr_12803_12846[(2)] = null);
(statearr_12803_12846[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (3)))
{var inst_12782 = (state_12784[(2)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else
{if((state_val_12785 === (12)))
{var inst_12757 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12804_12847 = state_12784__$1;(statearr_12804_12847[(2)] = inst_12757);
(statearr_12804_12847[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (2)))
{var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12784__$1,(4),ch);
} else
{if((state_val_12785 === (23)))
{var inst_12761 = (state_12784[(11)]);var inst_12765 = (state_12784[(2)]);var inst_12766 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12761);var state_12784__$1 = (function (){var statearr_12805 = state_12784;(statearr_12805[(17)] = inst_12765);
return statearr_12805;
})();var statearr_12806_12848 = state_12784__$1;(statearr_12806_12848[(2)] = inst_12766);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (19)))
{var state_12784__$1 = state_12784;var statearr_12807_12849 = state_12784__$1;(statearr_12807_12849[(2)] = null);
(statearr_12807_12849[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (11)))
{var inst_12737 = (state_12784[(10)]);var inst_12723 = (state_12784[(15)]);var inst_12737__$1 = cljs.core.seq.call(null,inst_12723);var state_12784__$1 = (function (){var statearr_12808 = state_12784;(statearr_12808[(10)] = inst_12737__$1);
return statearr_12808;
})();if(inst_12737__$1)
{var statearr_12809_12850 = state_12784__$1;(statearr_12809_12850[(1)] = (13));
} else
{var statearr_12810_12851 = state_12784__$1;(statearr_12810_12851[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (9)))
{var inst_12759 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12811_12852 = state_12784__$1;(statearr_12811_12852[(2)] = inst_12759);
(statearr_12811_12852[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (5)))
{var inst_12720 = cljs.core.deref.call(null,mults);var inst_12721 = cljs.core.vals.call(null,inst_12720);var inst_12722 = cljs.core.seq.call(null,inst_12721);var inst_12723 = inst_12722;var inst_12724 = null;var inst_12725 = (0);var inst_12726 = (0);var state_12784__$1 = (function (){var statearr_12812 = state_12784;(statearr_12812[(12)] = inst_12725);
(statearr_12812[(14)] = inst_12726);
(statearr_12812[(15)] = inst_12723);
(statearr_12812[(16)] = inst_12724);
return statearr_12812;
})();var statearr_12813_12853 = state_12784__$1;(statearr_12813_12853[(2)] = null);
(statearr_12813_12853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (14)))
{var state_12784__$1 = state_12784;var statearr_12817_12854 = state_12784__$1;(statearr_12817_12854[(2)] = null);
(statearr_12817_12854[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (16)))
{var inst_12737 = (state_12784[(10)]);var inst_12741 = cljs.core.chunk_first.call(null,inst_12737);var inst_12742 = cljs.core.chunk_rest.call(null,inst_12737);var inst_12743 = cljs.core.count.call(null,inst_12741);var inst_12723 = inst_12742;var inst_12724 = inst_12741;var inst_12725 = inst_12743;var inst_12726 = (0);var state_12784__$1 = (function (){var statearr_12818 = state_12784;(statearr_12818[(12)] = inst_12725);
(statearr_12818[(14)] = inst_12726);
(statearr_12818[(15)] = inst_12723);
(statearr_12818[(16)] = inst_12724);
return statearr_12818;
})();var statearr_12819_12855 = state_12784__$1;(statearr_12819_12855[(2)] = null);
(statearr_12819_12855[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (10)))
{var inst_12725 = (state_12784[(12)]);var inst_12726 = (state_12784[(14)]);var inst_12723 = (state_12784[(15)]);var inst_12724 = (state_12784[(16)]);var inst_12731 = cljs.core._nth.call(null,inst_12724,inst_12726);var inst_12732 = cljs.core.async.muxch_STAR_.call(null,inst_12731);var inst_12733 = cljs.core.async.close_BANG_.call(null,inst_12732);var inst_12734 = (inst_12726 + (1));var tmp12814 = inst_12725;var tmp12815 = inst_12723;var tmp12816 = inst_12724;var inst_12723__$1 = tmp12815;var inst_12724__$1 = tmp12816;var inst_12725__$1 = tmp12814;var inst_12726__$1 = inst_12734;var state_12784__$1 = (function (){var statearr_12820 = state_12784;(statearr_12820[(12)] = inst_12725__$1);
(statearr_12820[(14)] = inst_12726__$1);
(statearr_12820[(18)] = inst_12733);
(statearr_12820[(15)] = inst_12723__$1);
(statearr_12820[(16)] = inst_12724__$1);
return statearr_12820;
})();var statearr_12821_12856 = state_12784__$1;(statearr_12821_12856[(2)] = null);
(statearr_12821_12856[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (18)))
{var inst_12752 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12822_12857 = state_12784__$1;(statearr_12822_12857[(2)] = inst_12752);
(statearr_12822_12857[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (8)))
{var inst_12725 = (state_12784[(12)]);var inst_12726 = (state_12784[(14)]);var inst_12728 = (inst_12726 < inst_12725);var inst_12729 = inst_12728;var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12729))
{var statearr_12823_12858 = state_12784__$1;(statearr_12823_12858[(1)] = (10));
} else
{var statearr_12824_12859 = state_12784__$1;(statearr_12824_12859[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12832,mults,ensure_mult,p))
;return ((function (switch__6424__auto__,c__6439__auto___12832,mults,ensure_mult,p){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12828[(0)] = state_machine__6425__auto__);
(statearr_12828[(1)] = (1));
return statearr_12828;
});
var state_machine__6425__auto____1 = (function (state_12784){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12829){if((e12829 instanceof Object))
{var ex__6428__auto__ = e12829;var statearr_12830_12860 = state_12784;(statearr_12830_12860[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12861 = state_12784;
state_12784 = G__12861;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12832,mults,ensure_mult,p))
})();var state__6441__auto__ = (function (){var statearr_12831 = f__6440__auto__.call(null);(statearr_12831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12832);
return statearr_12831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12832,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6439__auto___12998 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12968){var state_val_12969 = (state_12968[(1)]);if((state_val_12969 === (7)))
{var state_12968__$1 = state_12968;var statearr_12970_12999 = state_12968__$1;(statearr_12970_12999[(2)] = null);
(statearr_12970_12999[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (1)))
{var state_12968__$1 = state_12968;var statearr_12971_13000 = state_12968__$1;(statearr_12971_13000[(2)] = null);
(statearr_12971_13000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (4)))
{var inst_12932 = (state_12968[(7)]);var inst_12934 = (inst_12932 < cnt);var state_12968__$1 = state_12968;if(cljs.core.truth_(inst_12934))
{var statearr_12972_13001 = state_12968__$1;(statearr_12972_13001[(1)] = (6));
} else
{var statearr_12973_13002 = state_12968__$1;(statearr_12973_13002[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (15)))
{var inst_12964 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12974_13003 = state_12968__$1;(statearr_12974_13003[(2)] = inst_12964);
(statearr_12974_13003[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (13)))
{var inst_12957 = cljs.core.async.close_BANG_.call(null,out);var state_12968__$1 = state_12968;var statearr_12975_13004 = state_12968__$1;(statearr_12975_13004[(2)] = inst_12957);
(statearr_12975_13004[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (6)))
{var state_12968__$1 = state_12968;var statearr_12976_13005 = state_12968__$1;(statearr_12976_13005[(2)] = null);
(statearr_12976_13005[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (3)))
{var inst_12966 = (state_12968[(2)]);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12968__$1,inst_12966);
} else
{if((state_val_12969 === (12)))
{var inst_12954 = (state_12968[(8)]);var inst_12954__$1 = (state_12968[(2)]);var inst_12955 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12954__$1);var state_12968__$1 = (function (){var statearr_12977 = state_12968;(statearr_12977[(8)] = inst_12954__$1);
return statearr_12977;
})();if(cljs.core.truth_(inst_12955))
{var statearr_12978_13006 = state_12968__$1;(statearr_12978_13006[(1)] = (13));
} else
{var statearr_12979_13007 = state_12968__$1;(statearr_12979_13007[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (2)))
{var inst_12931 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12932 = (0);var state_12968__$1 = (function (){var statearr_12980 = state_12968;(statearr_12980[(9)] = inst_12931);
(statearr_12980[(7)] = inst_12932);
return statearr_12980;
})();var statearr_12981_13008 = state_12968__$1;(statearr_12981_13008[(2)] = null);
(statearr_12981_13008[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (11)))
{var inst_12932 = (state_12968[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12968,(10),Object,null,(9));var inst_12941 = chs__$1.call(null,inst_12932);var inst_12942 = done.call(null,inst_12932);var inst_12943 = cljs.core.async.take_BANG_.call(null,inst_12941,inst_12942);var state_12968__$1 = state_12968;var statearr_12982_13009 = state_12968__$1;(statearr_12982_13009[(2)] = inst_12943);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (9)))
{var inst_12932 = (state_12968[(7)]);var inst_12945 = (state_12968[(2)]);var inst_12946 = (inst_12932 + (1));var inst_12932__$1 = inst_12946;var state_12968__$1 = (function (){var statearr_12983 = state_12968;(statearr_12983[(10)] = inst_12945);
(statearr_12983[(7)] = inst_12932__$1);
return statearr_12983;
})();var statearr_12984_13010 = state_12968__$1;(statearr_12984_13010[(2)] = null);
(statearr_12984_13010[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (5)))
{var inst_12952 = (state_12968[(2)]);var state_12968__$1 = (function (){var statearr_12985 = state_12968;(statearr_12985[(11)] = inst_12952);
return statearr_12985;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12968__$1,(12),dchan);
} else
{if((state_val_12969 === (14)))
{var inst_12954 = (state_12968[(8)]);var inst_12959 = cljs.core.apply.call(null,f,inst_12954);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12968__$1,(16),out,inst_12959);
} else
{if((state_val_12969 === (16)))
{var inst_12961 = (state_12968[(2)]);var state_12968__$1 = (function (){var statearr_12986 = state_12968;(statearr_12986[(12)] = inst_12961);
return statearr_12986;
})();var statearr_12987_13011 = state_12968__$1;(statearr_12987_13011[(2)] = null);
(statearr_12987_13011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (10)))
{var inst_12936 = (state_12968[(2)]);var inst_12937 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12968__$1 = (function (){var statearr_12988 = state_12968;(statearr_12988[(13)] = inst_12936);
return statearr_12988;
})();var statearr_12989_13012 = state_12968__$1;(statearr_12989_13012[(2)] = inst_12937);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (8)))
{var inst_12950 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12990_13013 = state_12968__$1;(statearr_12990_13013[(2)] = inst_12950);
(statearr_12990_13013[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___12998,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6424__auto__,c__6439__auto___12998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12994[(0)] = state_machine__6425__auto__);
(statearr_12994[(1)] = (1));
return statearr_12994;
});
var state_machine__6425__auto____1 = (function (state_12968){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12995){if((e12995 instanceof Object))
{var ex__6428__auto__ = e12995;var statearr_12996_13014 = state_12968;(statearr_12996_13014[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12995;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13015 = state_12968;
state_12968 = G__13015;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12968){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12998,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6441__auto__ = (function (){var statearr_12997 = f__6440__auto__.call(null);(statearr_12997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12998);
return statearr_12997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12998,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___13123 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13123,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13123,out){
return (function (state_13099){var state_val_13100 = (state_13099[(1)]);if((state_val_13100 === (7)))
{var inst_13079 = (state_13099[(7)]);var inst_13078 = (state_13099[(8)]);var inst_13078__$1 = (state_13099[(2)]);var inst_13079__$1 = cljs.core.nth.call(null,inst_13078__$1,(0),null);var inst_13080 = cljs.core.nth.call(null,inst_13078__$1,(1),null);var inst_13081 = (inst_13079__$1 == null);var state_13099__$1 = (function (){var statearr_13101 = state_13099;(statearr_13101[(7)] = inst_13079__$1);
(statearr_13101[(8)] = inst_13078__$1);
(statearr_13101[(9)] = inst_13080);
return statearr_13101;
})();if(cljs.core.truth_(inst_13081))
{var statearr_13102_13124 = state_13099__$1;(statearr_13102_13124[(1)] = (8));
} else
{var statearr_13103_13125 = state_13099__$1;(statearr_13103_13125[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (1)))
{var inst_13070 = cljs.core.vec.call(null,chs);var inst_13071 = inst_13070;var state_13099__$1 = (function (){var statearr_13104 = state_13099;(statearr_13104[(10)] = inst_13071);
return statearr_13104;
})();var statearr_13105_13126 = state_13099__$1;(statearr_13105_13126[(2)] = null);
(statearr_13105_13126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (4)))
{var inst_13071 = (state_13099[(10)]);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13099__$1,(7),inst_13071);
} else
{if((state_val_13100 === (6)))
{var inst_13095 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13106_13127 = state_13099__$1;(statearr_13106_13127[(2)] = inst_13095);
(statearr_13106_13127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (3)))
{var inst_13097 = (state_13099[(2)]);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else
{if((state_val_13100 === (2)))
{var inst_13071 = (state_13099[(10)]);var inst_13073 = cljs.core.count.call(null,inst_13071);var inst_13074 = (inst_13073 > (0));var state_13099__$1 = state_13099;if(cljs.core.truth_(inst_13074))
{var statearr_13108_13128 = state_13099__$1;(statearr_13108_13128[(1)] = (4));
} else
{var statearr_13109_13129 = state_13099__$1;(statearr_13109_13129[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (11)))
{var inst_13071 = (state_13099[(10)]);var inst_13088 = (state_13099[(2)]);var tmp13107 = inst_13071;var inst_13071__$1 = tmp13107;var state_13099__$1 = (function (){var statearr_13110 = state_13099;(statearr_13110[(10)] = inst_13071__$1);
(statearr_13110[(11)] = inst_13088);
return statearr_13110;
})();var statearr_13111_13130 = state_13099__$1;(statearr_13111_13130[(2)] = null);
(statearr_13111_13130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (9)))
{var inst_13079 = (state_13099[(7)]);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13099__$1,(11),out,inst_13079);
} else
{if((state_val_13100 === (5)))
{var inst_13093 = cljs.core.async.close_BANG_.call(null,out);var state_13099__$1 = state_13099;var statearr_13112_13131 = state_13099__$1;(statearr_13112_13131[(2)] = inst_13093);
(statearr_13112_13131[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (10)))
{var inst_13091 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13113_13132 = state_13099__$1;(statearr_13113_13132[(2)] = inst_13091);
(statearr_13113_13132[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (8)))
{var inst_13079 = (state_13099[(7)]);var inst_13078 = (state_13099[(8)]);var inst_13080 = (state_13099[(9)]);var inst_13071 = (state_13099[(10)]);var inst_13083 = (function (){var c = inst_13080;var v = inst_13079;var vec__13076 = inst_13078;var cs = inst_13071;return ((function (c,v,vec__13076,cs,inst_13079,inst_13078,inst_13080,inst_13071,state_val_13100,c__6439__auto___13123,out){
return (function (p1__13016_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13016_SHARP_);
});
;})(c,v,vec__13076,cs,inst_13079,inst_13078,inst_13080,inst_13071,state_val_13100,c__6439__auto___13123,out))
})();var inst_13084 = cljs.core.filterv.call(null,inst_13083,inst_13071);var inst_13071__$1 = inst_13084;var state_13099__$1 = (function (){var statearr_13114 = state_13099;(statearr_13114[(10)] = inst_13071__$1);
return statearr_13114;
})();var statearr_13115_13133 = state_13099__$1;(statearr_13115_13133[(2)] = null);
(statearr_13115_13133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13123,out))
;return ((function (switch__6424__auto__,c__6439__auto___13123,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13119 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13119[(0)] = state_machine__6425__auto__);
(statearr_13119[(1)] = (1));
return statearr_13119;
});
var state_machine__6425__auto____1 = (function (state_13099){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13120){if((e13120 instanceof Object))
{var ex__6428__auto__ = e13120;var statearr_13121_13134 = state_13099;(statearr_13121_13134[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13120;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13135 = state_13099;
state_13099 = G__13135;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13123,out))
})();var state__6441__auto__ = (function (){var statearr_13122 = f__6440__auto__.call(null);(statearr_13122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13123);
return statearr_13122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13123,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___13228 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13228,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13228,out){
return (function (state_13205){var state_val_13206 = (state_13205[(1)]);if((state_val_13206 === (7)))
{var inst_13187 = (state_13205[(7)]);var inst_13187__$1 = (state_13205[(2)]);var inst_13188 = (inst_13187__$1 == null);var inst_13189 = cljs.core.not.call(null,inst_13188);var state_13205__$1 = (function (){var statearr_13207 = state_13205;(statearr_13207[(7)] = inst_13187__$1);
return statearr_13207;
})();if(inst_13189)
{var statearr_13208_13229 = state_13205__$1;(statearr_13208_13229[(1)] = (8));
} else
{var statearr_13209_13230 = state_13205__$1;(statearr_13209_13230[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (1)))
{var inst_13182 = (0);var state_13205__$1 = (function (){var statearr_13210 = state_13205;(statearr_13210[(8)] = inst_13182);
return statearr_13210;
})();var statearr_13211_13231 = state_13205__$1;(statearr_13211_13231[(2)] = null);
(statearr_13211_13231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (4)))
{var state_13205__$1 = state_13205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13205__$1,(7),ch);
} else
{if((state_val_13206 === (6)))
{var inst_13200 = (state_13205[(2)]);var state_13205__$1 = state_13205;var statearr_13212_13232 = state_13205__$1;(statearr_13212_13232[(2)] = inst_13200);
(statearr_13212_13232[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (3)))
{var inst_13202 = (state_13205[(2)]);var inst_13203 = cljs.core.async.close_BANG_.call(null,out);var state_13205__$1 = (function (){var statearr_13213 = state_13205;(statearr_13213[(9)] = inst_13202);
return statearr_13213;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13205__$1,inst_13203);
} else
{if((state_val_13206 === (2)))
{var inst_13182 = (state_13205[(8)]);var inst_13184 = (inst_13182 < n);var state_13205__$1 = state_13205;if(cljs.core.truth_(inst_13184))
{var statearr_13214_13233 = state_13205__$1;(statearr_13214_13233[(1)] = (4));
} else
{var statearr_13215_13234 = state_13205__$1;(statearr_13215_13234[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (11)))
{var inst_13182 = (state_13205[(8)]);var inst_13192 = (state_13205[(2)]);var inst_13193 = (inst_13182 + (1));var inst_13182__$1 = inst_13193;var state_13205__$1 = (function (){var statearr_13216 = state_13205;(statearr_13216[(8)] = inst_13182__$1);
(statearr_13216[(10)] = inst_13192);
return statearr_13216;
})();var statearr_13217_13235 = state_13205__$1;(statearr_13217_13235[(2)] = null);
(statearr_13217_13235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (9)))
{var state_13205__$1 = state_13205;var statearr_13218_13236 = state_13205__$1;(statearr_13218_13236[(2)] = null);
(statearr_13218_13236[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (5)))
{var state_13205__$1 = state_13205;var statearr_13219_13237 = state_13205__$1;(statearr_13219_13237[(2)] = null);
(statearr_13219_13237[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (10)))
{var inst_13197 = (state_13205[(2)]);var state_13205__$1 = state_13205;var statearr_13220_13238 = state_13205__$1;(statearr_13220_13238[(2)] = inst_13197);
(statearr_13220_13238[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13206 === (8)))
{var inst_13187 = (state_13205[(7)]);var state_13205__$1 = state_13205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13205__$1,(11),out,inst_13187);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13228,out))
;return ((function (switch__6424__auto__,c__6439__auto___13228,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13224 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13224[(0)] = state_machine__6425__auto__);
(statearr_13224[(1)] = (1));
return statearr_13224;
});
var state_machine__6425__auto____1 = (function (state_13205){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13205);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13225){if((e13225 instanceof Object))
{var ex__6428__auto__ = e13225;var statearr_13226_13239 = state_13205;(statearr_13226_13239[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13225;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13240 = state_13205;
state_13205 = G__13240;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13205){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13228,out))
})();var state__6441__auto__ = (function (){var statearr_13227 = f__6440__auto__.call(null);(statearr_13227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13228);
return statearr_13227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13228,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___13337 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13337,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13337,out){
return (function (state_13312){var state_val_13313 = (state_13312[(1)]);if((state_val_13313 === (7)))
{var inst_13307 = (state_13312[(2)]);var state_13312__$1 = state_13312;var statearr_13314_13338 = state_13312__$1;(statearr_13314_13338[(2)] = inst_13307);
(statearr_13314_13338[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (1)))
{var inst_13289 = null;var state_13312__$1 = (function (){var statearr_13315 = state_13312;(statearr_13315[(7)] = inst_13289);
return statearr_13315;
})();var statearr_13316_13339 = state_13312__$1;(statearr_13316_13339[(2)] = null);
(statearr_13316_13339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (4)))
{var inst_13292 = (state_13312[(8)]);var inst_13292__$1 = (state_13312[(2)]);var inst_13293 = (inst_13292__$1 == null);var inst_13294 = cljs.core.not.call(null,inst_13293);var state_13312__$1 = (function (){var statearr_13317 = state_13312;(statearr_13317[(8)] = inst_13292__$1);
return statearr_13317;
})();if(inst_13294)
{var statearr_13318_13340 = state_13312__$1;(statearr_13318_13340[(1)] = (5));
} else
{var statearr_13319_13341 = state_13312__$1;(statearr_13319_13341[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (6)))
{var state_13312__$1 = state_13312;var statearr_13320_13342 = state_13312__$1;(statearr_13320_13342[(2)] = null);
(statearr_13320_13342[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (3)))
{var inst_13309 = (state_13312[(2)]);var inst_13310 = cljs.core.async.close_BANG_.call(null,out);var state_13312__$1 = (function (){var statearr_13321 = state_13312;(statearr_13321[(9)] = inst_13309);
return statearr_13321;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13312__$1,inst_13310);
} else
{if((state_val_13313 === (2)))
{var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(4),ch);
} else
{if((state_val_13313 === (11)))
{var inst_13292 = (state_13312[(8)]);var inst_13301 = (state_13312[(2)]);var inst_13289 = inst_13292;var state_13312__$1 = (function (){var statearr_13322 = state_13312;(statearr_13322[(10)] = inst_13301);
(statearr_13322[(7)] = inst_13289);
return statearr_13322;
})();var statearr_13323_13343 = state_13312__$1;(statearr_13323_13343[(2)] = null);
(statearr_13323_13343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (9)))
{var inst_13292 = (state_13312[(8)]);var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13312__$1,(11),out,inst_13292);
} else
{if((state_val_13313 === (5)))
{var inst_13289 = (state_13312[(7)]);var inst_13292 = (state_13312[(8)]);var inst_13296 = cljs.core._EQ_.call(null,inst_13292,inst_13289);var state_13312__$1 = state_13312;if(inst_13296)
{var statearr_13325_13344 = state_13312__$1;(statearr_13325_13344[(1)] = (8));
} else
{var statearr_13326_13345 = state_13312__$1;(statearr_13326_13345[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (10)))
{var inst_13304 = (state_13312[(2)]);var state_13312__$1 = state_13312;var statearr_13327_13346 = state_13312__$1;(statearr_13327_13346[(2)] = inst_13304);
(statearr_13327_13346[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13313 === (8)))
{var inst_13289 = (state_13312[(7)]);var tmp13324 = inst_13289;var inst_13289__$1 = tmp13324;var state_13312__$1 = (function (){var statearr_13328 = state_13312;(statearr_13328[(7)] = inst_13289__$1);
return statearr_13328;
})();var statearr_13329_13347 = state_13312__$1;(statearr_13329_13347[(2)] = null);
(statearr_13329_13347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13337,out))
;return ((function (switch__6424__auto__,c__6439__auto___13337,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13333 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13333[(0)] = state_machine__6425__auto__);
(statearr_13333[(1)] = (1));
return statearr_13333;
});
var state_machine__6425__auto____1 = (function (state_13312){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13334){if((e13334 instanceof Object))
{var ex__6428__auto__ = e13334;var statearr_13335_13348 = state_13312;(statearr_13335_13348[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13334;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13349 = state_13312;
state_13312 = G__13349;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13312){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13337,out))
})();var state__6441__auto__ = (function (){var statearr_13336 = f__6440__auto__.call(null);(statearr_13336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13337);
return statearr_13336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13337,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___13484 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13484,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13484,out){
return (function (state_13454){var state_val_13455 = (state_13454[(1)]);if((state_val_13455 === (7)))
{var inst_13450 = (state_13454[(2)]);var state_13454__$1 = state_13454;var statearr_13456_13485 = state_13454__$1;(statearr_13456_13485[(2)] = inst_13450);
(statearr_13456_13485[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (1)))
{var inst_13417 = (new Array(n));var inst_13418 = inst_13417;var inst_13419 = (0);var state_13454__$1 = (function (){var statearr_13457 = state_13454;(statearr_13457[(7)] = inst_13419);
(statearr_13457[(8)] = inst_13418);
return statearr_13457;
})();var statearr_13458_13486 = state_13454__$1;(statearr_13458_13486[(2)] = null);
(statearr_13458_13486[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (4)))
{var inst_13422 = (state_13454[(9)]);var inst_13422__$1 = (state_13454[(2)]);var inst_13423 = (inst_13422__$1 == null);var inst_13424 = cljs.core.not.call(null,inst_13423);var state_13454__$1 = (function (){var statearr_13459 = state_13454;(statearr_13459[(9)] = inst_13422__$1);
return statearr_13459;
})();if(inst_13424)
{var statearr_13460_13487 = state_13454__$1;(statearr_13460_13487[(1)] = (5));
} else
{var statearr_13461_13488 = state_13454__$1;(statearr_13461_13488[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (15)))
{var inst_13444 = (state_13454[(2)]);var state_13454__$1 = state_13454;var statearr_13462_13489 = state_13454__$1;(statearr_13462_13489[(2)] = inst_13444);
(statearr_13462_13489[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (13)))
{var state_13454__$1 = state_13454;var statearr_13463_13490 = state_13454__$1;(statearr_13463_13490[(2)] = null);
(statearr_13463_13490[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (6)))
{var inst_13419 = (state_13454[(7)]);var inst_13440 = (inst_13419 > (0));var state_13454__$1 = state_13454;if(cljs.core.truth_(inst_13440))
{var statearr_13464_13491 = state_13454__$1;(statearr_13464_13491[(1)] = (12));
} else
{var statearr_13465_13492 = state_13454__$1;(statearr_13465_13492[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (3)))
{var inst_13452 = (state_13454[(2)]);var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13454__$1,inst_13452);
} else
{if((state_val_13455 === (12)))
{var inst_13418 = (state_13454[(8)]);var inst_13442 = cljs.core.vec.call(null,inst_13418);var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13454__$1,(15),out,inst_13442);
} else
{if((state_val_13455 === (2)))
{var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13454__$1,(4),ch);
} else
{if((state_val_13455 === (11)))
{var inst_13434 = (state_13454[(2)]);var inst_13435 = (new Array(n));var inst_13418 = inst_13435;var inst_13419 = (0);var state_13454__$1 = (function (){var statearr_13466 = state_13454;(statearr_13466[(10)] = inst_13434);
(statearr_13466[(7)] = inst_13419);
(statearr_13466[(8)] = inst_13418);
return statearr_13466;
})();var statearr_13467_13493 = state_13454__$1;(statearr_13467_13493[(2)] = null);
(statearr_13467_13493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (9)))
{var inst_13418 = (state_13454[(8)]);var inst_13432 = cljs.core.vec.call(null,inst_13418);var state_13454__$1 = state_13454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13454__$1,(11),out,inst_13432);
} else
{if((state_val_13455 === (5)))
{var inst_13419 = (state_13454[(7)]);var inst_13418 = (state_13454[(8)]);var inst_13427 = (state_13454[(11)]);var inst_13422 = (state_13454[(9)]);var inst_13426 = (inst_13418[inst_13419] = inst_13422);var inst_13427__$1 = (inst_13419 + (1));var inst_13428 = (inst_13427__$1 < n);var state_13454__$1 = (function (){var statearr_13468 = state_13454;(statearr_13468[(11)] = inst_13427__$1);
(statearr_13468[(12)] = inst_13426);
return statearr_13468;
})();if(cljs.core.truth_(inst_13428))
{var statearr_13469_13494 = state_13454__$1;(statearr_13469_13494[(1)] = (8));
} else
{var statearr_13470_13495 = state_13454__$1;(statearr_13470_13495[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (14)))
{var inst_13447 = (state_13454[(2)]);var inst_13448 = cljs.core.async.close_BANG_.call(null,out);var state_13454__$1 = (function (){var statearr_13472 = state_13454;(statearr_13472[(13)] = inst_13447);
return statearr_13472;
})();var statearr_13473_13496 = state_13454__$1;(statearr_13473_13496[(2)] = inst_13448);
(statearr_13473_13496[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (10)))
{var inst_13438 = (state_13454[(2)]);var state_13454__$1 = state_13454;var statearr_13474_13497 = state_13454__$1;(statearr_13474_13497[(2)] = inst_13438);
(statearr_13474_13497[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13455 === (8)))
{var inst_13418 = (state_13454[(8)]);var inst_13427 = (state_13454[(11)]);var tmp13471 = inst_13418;var inst_13418__$1 = tmp13471;var inst_13419 = inst_13427;var state_13454__$1 = (function (){var statearr_13475 = state_13454;(statearr_13475[(7)] = inst_13419);
(statearr_13475[(8)] = inst_13418__$1);
return statearr_13475;
})();var statearr_13476_13498 = state_13454__$1;(statearr_13476_13498[(2)] = null);
(statearr_13476_13498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13484,out))
;return ((function (switch__6424__auto__,c__6439__auto___13484,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13480[(0)] = state_machine__6425__auto__);
(statearr_13480[(1)] = (1));
return statearr_13480;
});
var state_machine__6425__auto____1 = (function (state_13454){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13454);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13481){if((e13481 instanceof Object))
{var ex__6428__auto__ = e13481;var statearr_13482_13499 = state_13454;(statearr_13482_13499[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13481;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13500 = state_13454;
state_13454 = G__13500;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13454){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13484,out))
})();var state__6441__auto__ = (function (){var statearr_13483 = f__6440__auto__.call(null);(statearr_13483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13484);
return statearr_13483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13484,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___13643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13643,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13643,out){
return (function (state_13613){var state_val_13614 = (state_13613[(1)]);if((state_val_13614 === (7)))
{var inst_13609 = (state_13613[(2)]);var state_13613__$1 = state_13613;var statearr_13615_13644 = state_13613__$1;(statearr_13615_13644[(2)] = inst_13609);
(statearr_13615_13644[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (1)))
{var inst_13572 = [];var inst_13573 = inst_13572;var inst_13574 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13613__$1 = (function (){var statearr_13616 = state_13613;(statearr_13616[(7)] = inst_13573);
(statearr_13616[(8)] = inst_13574);
return statearr_13616;
})();var statearr_13617_13645 = state_13613__$1;(statearr_13617_13645[(2)] = null);
(statearr_13617_13645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (4)))
{var inst_13577 = (state_13613[(9)]);var inst_13577__$1 = (state_13613[(2)]);var inst_13578 = (inst_13577__$1 == null);var inst_13579 = cljs.core.not.call(null,inst_13578);var state_13613__$1 = (function (){var statearr_13618 = state_13613;(statearr_13618[(9)] = inst_13577__$1);
return statearr_13618;
})();if(inst_13579)
{var statearr_13619_13646 = state_13613__$1;(statearr_13619_13646[(1)] = (5));
} else
{var statearr_13620_13647 = state_13613__$1;(statearr_13620_13647[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (15)))
{var inst_13603 = (state_13613[(2)]);var state_13613__$1 = state_13613;var statearr_13621_13648 = state_13613__$1;(statearr_13621_13648[(2)] = inst_13603);
(statearr_13621_13648[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (13)))
{var state_13613__$1 = state_13613;var statearr_13622_13649 = state_13613__$1;(statearr_13622_13649[(2)] = null);
(statearr_13622_13649[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (6)))
{var inst_13573 = (state_13613[(7)]);var inst_13598 = inst_13573.length;var inst_13599 = (inst_13598 > (0));var state_13613__$1 = state_13613;if(cljs.core.truth_(inst_13599))
{var statearr_13623_13650 = state_13613__$1;(statearr_13623_13650[(1)] = (12));
} else
{var statearr_13624_13651 = state_13613__$1;(statearr_13624_13651[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (3)))
{var inst_13611 = (state_13613[(2)]);var state_13613__$1 = state_13613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13613__$1,inst_13611);
} else
{if((state_val_13614 === (12)))
{var inst_13573 = (state_13613[(7)]);var inst_13601 = cljs.core.vec.call(null,inst_13573);var state_13613__$1 = state_13613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13613__$1,(15),out,inst_13601);
} else
{if((state_val_13614 === (2)))
{var state_13613__$1 = state_13613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13613__$1,(4),ch);
} else
{if((state_val_13614 === (11)))
{var inst_13577 = (state_13613[(9)]);var inst_13581 = (state_13613[(10)]);var inst_13591 = (state_13613[(2)]);var inst_13592 = [];var inst_13593 = inst_13592.push(inst_13577);var inst_13573 = inst_13592;var inst_13574 = inst_13581;var state_13613__$1 = (function (){var statearr_13625 = state_13613;(statearr_13625[(7)] = inst_13573);
(statearr_13625[(11)] = inst_13593);
(statearr_13625[(12)] = inst_13591);
(statearr_13625[(8)] = inst_13574);
return statearr_13625;
})();var statearr_13626_13652 = state_13613__$1;(statearr_13626_13652[(2)] = null);
(statearr_13626_13652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (9)))
{var inst_13573 = (state_13613[(7)]);var inst_13589 = cljs.core.vec.call(null,inst_13573);var state_13613__$1 = state_13613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13613__$1,(11),out,inst_13589);
} else
{if((state_val_13614 === (5)))
{var inst_13577 = (state_13613[(9)]);var inst_13581 = (state_13613[(10)]);var inst_13574 = (state_13613[(8)]);var inst_13581__$1 = f.call(null,inst_13577);var inst_13582 = cljs.core._EQ_.call(null,inst_13581__$1,inst_13574);var inst_13583 = cljs.core.keyword_identical_QMARK_.call(null,inst_13574,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13584 = (inst_13582) || (inst_13583);var state_13613__$1 = (function (){var statearr_13627 = state_13613;(statearr_13627[(10)] = inst_13581__$1);
return statearr_13627;
})();if(cljs.core.truth_(inst_13584))
{var statearr_13628_13653 = state_13613__$1;(statearr_13628_13653[(1)] = (8));
} else
{var statearr_13629_13654 = state_13613__$1;(statearr_13629_13654[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (14)))
{var inst_13606 = (state_13613[(2)]);var inst_13607 = cljs.core.async.close_BANG_.call(null,out);var state_13613__$1 = (function (){var statearr_13631 = state_13613;(statearr_13631[(13)] = inst_13606);
return statearr_13631;
})();var statearr_13632_13655 = state_13613__$1;(statearr_13632_13655[(2)] = inst_13607);
(statearr_13632_13655[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (10)))
{var inst_13596 = (state_13613[(2)]);var state_13613__$1 = state_13613;var statearr_13633_13656 = state_13613__$1;(statearr_13633_13656[(2)] = inst_13596);
(statearr_13633_13656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13614 === (8)))
{var inst_13577 = (state_13613[(9)]);var inst_13573 = (state_13613[(7)]);var inst_13581 = (state_13613[(10)]);var inst_13586 = inst_13573.push(inst_13577);var tmp13630 = inst_13573;var inst_13573__$1 = tmp13630;var inst_13574 = inst_13581;var state_13613__$1 = (function (){var statearr_13634 = state_13613;(statearr_13634[(7)] = inst_13573__$1);
(statearr_13634[(14)] = inst_13586);
(statearr_13634[(8)] = inst_13574);
return statearr_13634;
})();var statearr_13635_13657 = state_13613__$1;(statearr_13635_13657[(2)] = null);
(statearr_13635_13657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13643,out))
;return ((function (switch__6424__auto__,c__6439__auto___13643,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13639[(0)] = state_machine__6425__auto__);
(statearr_13639[(1)] = (1));
return statearr_13639;
});
var state_machine__6425__auto____1 = (function (state_13613){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13613);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13640){if((e13640 instanceof Object))
{var ex__6428__auto__ = e13640;var statearr_13641_13658 = state_13613;(statearr_13641_13658[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13640;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13659 = state_13613;
state_13613 = G__13659;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13613){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13643,out))
})();var state__6441__auto__ = (function (){var statearr_13642 = f__6440__auto__.call(null);(statearr_13642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13643);
return statearr_13642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13643,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
