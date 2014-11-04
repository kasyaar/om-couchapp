// Compiled by ClojureScript 0.0-2311
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
cljs.core.enable_console_print_BANG_.call(null);
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"D",new cljs.core.Keyword(null,"last","last",1105735132),"Effect",new cljs.core.Keyword(null,"email","email",1415816706),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null)], null)], null));
/**
* doc-string
*/
om_tut.core.parse_contact = (function parse_contact(contact_str){var vec__9707 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__9707,(0),null);var middle = cljs.core.nth.call(null,vec__9707,(1),null);var last = cljs.core.nth.call(null,vec__9707,(2),null);var parts = vec__9707;var vec__9708 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__9708,(0),null);var last__$1 = cljs.core.nth.call(null,vec__9708,(1),null);var middle__$1 = cljs.core.nth.call(null,vec__9708,(2),null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):(0));if((cljs.core.count.call(null,parts) >= (2)))
{var G__9709 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),first__$1,new cljs.core.Keyword(null,"last","last",1105735132),last__$1], null);var G__9709__$1 = (((c === (1)))?cljs.core.assoc.call(null,G__9709,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),middle__$2):G__9709);var G__9709__$2 = (((c >= (2)))?cljs.core.assoc.call(null,G__9709__$1,new cljs.core.Keyword(null,"middle","middle",-701029031),middle__$2):G__9709__$1);return G__9709__$2;
} else
{return null;
}
});
/**
* doc-string
*/
om_tut.core.middle_name = (function middle_name(p__9710){var map__9712 = p__9710;var map__9712__$1 = ((cljs.core.seq_QMARK_.call(null,map__9712))?cljs.core.apply.call(null,cljs.core.hash_map,map__9712):map__9712);var middle_initial = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));var middle = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));if(cljs.core.truth_(middle))
{return (" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle));
} else
{if(cljs.core.truth_(middle_initial))
{return (" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle_initial)+".");
} else
{return null;
}
}
});
/**
* doc-string
*/
om_tut.core.display_name = (function display_name(p__9713){var map__9715 = p__9713;var map__9715__$1 = ((cljs.core.seq_QMARK_.call(null,map__9715))?cljs.core.apply.call(null,cljs.core.hash_map,map__9715):map__9715);var contact = map__9715__$1;var last = cljs.core.get.call(null,map__9715__$1,new cljs.core.Keyword(null,"last","last",1105735132));var first = cljs.core.get.call(null,map__9715__$1,new cljs.core.Keyword(null,"first","first",-644103046));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(last)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_tut.core.middle_name.call(null,contact)));
});
/**
* doc-string
*/
om_tut.core.contact_view = (function contact_view(contact,owner){if(typeof om_tut.core.t9721 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tut.core.t9721 = (function (owner,contact,contact_view,meta9722){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta9722 = meta9722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t9721.cljs$lang$type = true;
om_tut.core.t9721.cljs$lang$ctorStr = "om-tut.core/t9721";
om_tut.core.t9721.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"om-tut.core/t9721");
});
om_tut.core.t9721.prototype.om$core$IRenderState$ = true;
om_tut.core.t9721.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9724){var self__ = this;
var map__9725 = p__9724;var map__9725__$1 = ((cljs.core.seq_QMARK_.call(null,map__9725))?cljs.core.apply.call(null,cljs.core.hash_map,map__9725):map__9725);var delete$ = cljs.core.get.call(null,map__9725__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,om_tut.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": ((function (this$__$1,map__9725,map__9725__$1,delete$){
return (function (e){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
});})(this$__$1,map__9725,map__9725__$1,delete$))
},"Delete"));
});
om_tut.core.t9721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9723){var self__ = this;
var _9723__$1 = this;return self__.meta9722;
});
om_tut.core.t9721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9723,meta9722__$1){var self__ = this;
var _9723__$1 = this;return (new om_tut.core.t9721(self__.owner,self__.contact,self__.contact_view,meta9722__$1));
});
om_tut.core.__GT_t9721 = (function __GT_t9721(owner__$1,contact__$1,contact_view__$1,meta9722){return (new om_tut.core.t9721(owner__$1,contact__$1,contact_view__$1,meta9722));
});
}
return (new om_tut.core.t9721(owner,contact,contact_view,null));
});
/**
* doc-string
*/
om_tut.core.add_contact = (function add_contact(app,owner){var input = om.core.get_node.call(null,owner,"new-contact");var new_contact = om_tut.core.parse_contact.call(null,input.value);if(cljs.core.truth_(new_contact))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",333503174),((function (input,new_contact){
return (function (p1__9726_SHARP_){return cljs.core.conj.call(null,p1__9726_SHARP_,new_contact);
});})(input,new_contact))
);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),"");
} else
{return null;
}
});
/**
* doc-string
*/
om_tut.core.handle_change = (function handle_change(e,owner,p__9727){var map__9729 = p__9727;var map__9729__$1 = ((cljs.core.seq_QMARK_.call(null,map__9729))?cljs.core.apply.call(null,cljs.core.hash_map,map__9729):map__9729);var text = cljs.core.get.call(null,map__9729__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var value = e.target.value;var id = cljs.core.keyword.call(null,e.target.id);if(cljs.core.not.call(null,cljs.core.re_find.call(null,/[0-9]/,value)))
{return om.core.set_state_BANG_.call(null,owner,id,value);
} else
{return om.core.set_state_BANG_.call(null,owner,id,text);
}
});
/**
* doc-string
*/
om_tut.core.signin = (function signin(app,owner){var username = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"username","username",1605666410));var pswd_inpt = document.getElementById("pswd");var pswd = pswd_inpt.value;pswd_inpt.value = "";
return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pswd)));
});
/**
* doc-string
*/
om_tut.core.contacts_view = (function contacts_view(app,owner){if(typeof om_tut.core.t9756 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tut.core.t9756 = (function (owner,app,contacts_view,meta9757){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta9757 = meta9757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t9756.cljs$lang$type = true;
om_tut.core.t9756.cljs$lang$ctorStr = "om-tut.core/t9756";
om_tut.core.t9756.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"om-tut.core/t9756");
});
om_tut.core.t9756.prototype.om$core$IRenderState$ = true;
om_tut.core.t9756.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.span(null,"Sign in"),React.DOM.div(null,om.dom.input.call(null,{"placeholder": "username", "onChange": ((function (this$__$1){
return (function (p1__9731_SHARP_){return om_tut.core.handle_change.call(null,p1__9731_SHARP_,self__.owner,state);
});})(this$__$1))
, "id": "username", "type": "text"}),om.dom.input.call(null,{"placeholder": "password", "id": "pswd", "type": "text"}),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){return om_tut.core.signin.call(null,self__.app,self__.owner);
});})(this$__$1))
},"Sign in"))));
});
om_tut.core.t9756.prototype.om$core$IWillMount$ = true;
om_tut.core.t9756.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__,delete$,___$1){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__,delete$,___$1){
return (function (state_9768){var state_val_9769 = (state_9768[(1)]);if((state_val_9769 === (4)))
{var inst_9761 = (state_9768[(2)]);var inst_9762 = (function (){var contact = inst_9761;return ((function (contact,inst_9761,state_val_9769,c__6439__auto__,delete$,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_9761,state_val_9769,c__6439__auto__,delete$,___$1){
return (function (p1__9730_SHARP_){return cljs.core._EQ_.call(null,contact,p1__9730_SHARP_);
});})(contact,inst_9761,state_val_9769,c__6439__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_9761,state_val_9769,c__6439__auto__,delete$,___$1))
})();var inst_9763 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_9762);var state_9768__$1 = (function (){var statearr_9770 = state_9768;(statearr_9770[(7)] = inst_9763);
return statearr_9770;
})();var statearr_9771_9780 = state_9768__$1;(statearr_9771_9780[(2)] = null);
(statearr_9771_9780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9769 === (3)))
{var inst_9766 = (state_9768[(2)]);var state_9768__$1 = state_9768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9768__$1,inst_9766);
} else
{if((state_val_9769 === (2)))
{var state_9768__$1 = state_9768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9768__$1,(4),delete$);
} else
{if((state_val_9769 === (1)))
{var state_9768__$1 = state_9768;var statearr_9772_9781 = state_9768__$1;(statearr_9772_9781[(2)] = null);
(statearr_9772_9781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6439__auto__,delete$,___$1))
;return ((function (switch__6424__auto__,c__6439__auto__,delete$,___$1){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_9776 = [null,null,null,null,null,null,null,null];(statearr_9776[(0)] = state_machine__6425__auto__);
(statearr_9776[(1)] = (1));
return statearr_9776;
});
var state_machine__6425__auto____1 = (function (state_9768){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_9768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e9777){if((e9777 instanceof Object))
{var ex__6428__auto__ = e9777;var statearr_9778_9782 = state_9768;(statearr_9778_9782[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9783 = state_9768;
state_9768 = G__9783;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_9768){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_9768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__,delete$,___$1))
})();var state__6441__auto__ = (function (){var statearr_9779 = f__6440__auto__.call(null);(statearr_9779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_9779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__,delete$,___$1))
);
return c__6439__auto__;
});
om_tut.core.t9756.prototype.om$core$IInitState$ = true;
om_tut.core.t9756.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"token","token",-1211463215),""], null);
});
om_tut.core.t9756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9758){var self__ = this;
var _9758__$1 = this;return self__.meta9757;
});
om_tut.core.t9756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9758,meta9757__$1){var self__ = this;
var _9758__$1 = this;return (new om_tut.core.t9756(self__.owner,self__.app,self__.contacts_view,meta9757__$1));
});
om_tut.core.__GT_t9756 = (function __GT_t9756(owner__$1,app__$1,contacts_view__$1,meta9757){return (new om_tut.core.t9756(owner__$1,app__$1,contacts_view__$1,meta9757));
});
}
return (new om_tut.core.t9756(owner,app,contacts_view,null));
});
om.core.root.call(null,om_tut.core.contacts_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contacts")], null));
