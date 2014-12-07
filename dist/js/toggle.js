/*! Formstone v0.0.1 [toggle.js] 2014-12-06 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},l,b.classes),b.target=this.data(k+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target);var c=this.data(k+"-group");b.group=c?"[data-"+k+'-group="'+c+'"]':!1,b.$toggles=a().add(this).add(b.$target),this.touch({tap:!0}).on(m.tap,b,i),a.mediaquery("bind","(max-width:"+(1/0===b.maxWidth?"100000px":b.maxWidth)+")",{enter:function(){g.call(b.$el,b)},leave:function(){h.call(b.$el,b)}}),this.data(k+"-active")?e.call(b.$el,b):b.collapse&&f.call(b.$el,b)}function d(a){a.$toggles.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")).off(m.namespace)}function e(b){if(b.enabled&&!b.active){var c=b.group?a(b.group).index(b.$el):null;b.$toggles.addClass(b.classes.raw.active),this.trigger(m.activate,[c]),b.active=!0}}function f(a){a.enabled&&a.active&&(a.$toggles.removeClass(a.classes.raw.active),this.trigger(m.deactivate),a.active=!1)}function g(a){a.enabled||(a.$toggles.addClass(a.classes.raw.enabled),a.enabled=!0,a.active=!0,f.call(this,a))}function h(a){a.enabled&&(a.$toggles.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")),a.enabled=!1)}function i(b){n.killEvent(b);var c=b.data;a(c.group).not(c.$el)[j.namespace]("deactivate"),c.active&&c.collapse?f.call(c.$el,c):e.call(c.$el,c)}var j=b.Plugin("toggle",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{tap:"tap",activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_destruct:d,activate:e,deactivate:f,enable:g,disable:h}}),k=j.namespace,l=j.classes,m=j.events,n=j.functions}(jQuery,Formstone);