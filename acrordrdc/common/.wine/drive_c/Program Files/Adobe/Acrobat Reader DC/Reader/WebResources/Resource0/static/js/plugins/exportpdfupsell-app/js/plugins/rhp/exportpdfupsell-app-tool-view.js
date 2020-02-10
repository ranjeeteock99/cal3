/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

define("acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app",["plugins-common/ac-plugins"],function(e){var p=e.ExportpdfupsellApp;return p||(p=e.ExportpdfupsellApp={}),p}),define("acplugins/exportpdfupsell-app/js/templates/rhp/exportpdfupsell-app-tool",[],function(){return'<!-- Copyright 2016 Adobe Systems Incorporated. All Rights Reserved. --><div class="rhp exportpdfupsellapp_tool ui-theme theme-container"><div class="rhp exportpdfupsellapp-content"><div class="rhp heading theme-text"><%= heading %></div><div class="rhp icon" title= "<%= icon_tooltip %>" ></div><div class="rhp description theme-text"><%= description %></div></div><input type="button" class="rhp control-button exportpdfupsellapp-start theme-button theme-button-label site-catalyst" tabindex="-1" value="<%= start %>"/></div>'}),define("acplugins/exportpdfupsell-app/js/nls/ui-strings",{root:!0,"xx-xx":!0,"de-de":!0,"en-gb":!0,"es-es":!0,"fr-fr":!0,"it-it":!0,"ja-jp":!0,"da-dk":!0,"fi-fi":!0,"nb-no":!0,"nl-nl":!0,"pt-br":!0,"sv-se":!0,"zh-cn":!0,"zh-tw":!0,"ko-kr":!0,"cs-cz":!0,"hu-hu":!0,"pl-pl":!0,"ru-ru":!0,"uk-ua":!0,"tr-tr":!0,"sk-sk":!0,"sl-si":!0,"bg-bg":!0}),define("acplugins/exportpdfupsell-app/js/nls/root/ui-strings",{EXPORTPDFUPSELL_APP:"Export PDF",EXPORTPDFUPSELL_APP_TOOL_VIEW_TITLE_RHP:"Convert PDF Files to Word or Excel Online",EXPORTPDFUPSELL_APP_ICON_TOOLTIP:"Learn more",EXPORTPDFUPSELL_APP_START:"Learn more",EXPORTPDFUPSELL_APP_HEADING:"Adobe Acrobat Pro DC",EXPORTPDFUPSELL_APP_RHP_GO_URL:"http://www.adobe.com/go/epdfrhprdr_12_0_11"}),define("aictools/aic",["aicx/ac-aicx"],function(e){return window.AiC=_.extend(window.AiC||{},{getBaseUrl:function(){return e.getBaseAicUrl()+"createpdf/"},getBaseUriApi:function(){return this.getBaseUrl()+"api/"},appEvents:_.extend({},Backbone.Events),init:function(e){return this.initializedPromise||(this.initializedPromise=$.Deferred()),this.appApi||!e?this.initializedPromise.promise():(this.appApi=e,AiC.appApi.done(_.bind(function(){try{var e=AiC.appApi.routerApi,p=_.map(e.getQueryParams(),function(e,p){return p+":"+e+";"}).join("");1===e.getPathname().indexOf("my_plan")&&LOG("requestType=deeplink	requestPath="+e.getPathname().substr(1)+"	requestParams="+p+"	requestHash="+AiC.appApi.routerApi.getHash().substr(1)+"	requestHost="+location.host,LOG.INFO,{logConsole:!1,logServer:!0})}catch(t){}this.initializedPromise.resolve()},this)),this.initializedPromise.promise())}}),window.AiC}),define("aictools/util/localize",["aictools/aic"],function(e){return e.Localize={htmlTrim:function(e){return e.replace(/<!--(.*?)-->\s*/,"")},htmlSanitize:function(e){function p(e){return _.isString(e)||_.isNumber(e)||_.isBoolean(e)||_.isDate(e)}var t={};if(p(e))t=this.htmlSanitizeString(e.toString());else{if(!_.isObject(e))throw"localize: invalid object: "+e.toString();_.each(e,_.bind(function(e,i){if(!p(e))throw"localize: Value for key: "+i+" is missing or invalid";t[i]=this.htmlSanitizeString(e.toString())},this))}return t},htmlSanitizeString:function(e){var p=e,t=p.indexOf("<%="),i=p.indexOf("%>");if(t>=0&&i>t)throw"Unprocessed template parameter: "+p;return p=_.escape(p)}},e.Localize}),define("acplugins/exportpdfupsell-app/js/ops/plugin/starting-plugin-op",["core/ac-core","acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","core/ops/op"],function(e,p){return p.StartingPluginOp=e.Op.extend({run:function(){return this._getResolvedPromise()}}),p.StartingPluginOp}),define("acplugins/exportpdfupsell-app/js/ops/full-preview-overlay/selecting-full-preview-overlay-op",["core/ac-core","acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","core/ops/op"],function(e,p){return p.SelectingFullPreviewOverlayOp=e.Op.extend({run:function(){return e.opFactory.create("SelectingPluginOp",this.options).run("full_preview_overlay_example")}}),p.SelectingFullPreviewOverlayOp}),define("acplugins/exportpdfupsell-app/js/ops/op-factory",["core/ac-core","acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","acplugins/exportpdfupsell-app/js/ops/plugin/starting-plugin-op","acplugins/exportpdfupsell-app/js/ops/full-preview-overlay/selecting-full-preview-overlay-op"],function(e,p){p.OpFactory=e.Op.extend({create:function(e,t){var i=p[e];return i?new i(t):void LOG(0,"AcExportPdfUpsellApp.OpFactory.create: Unrecognized class: "+e)}})}),define("acplugins/exportpdfupsell-app/js/exportpdfupsell-app",["acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","acplugins/exportpdfupsell-app/js/ops/op-factory"],function(e){_.extend(e,{init:function(){e.opFactory=new e.OpFactory}})}),define("acplugins/exportpdfupsell-app/js/plugin",["acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","acplugins/exportpdfupsell-app/js/exportpdfupsell-app"],function(e){e.init()}),define("acplugins/exportpdfupsell-app/js/views/selector-view",["core/ac-core","acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","i18n!acplugins/exportpdfupsell-app/js/nls/ui-strings","core/views/plugin-selector-view"],function(e,p,t){return p.SelectorView=e.PluginSelectorView.extend({getSelectorLabel:function(){return t.EXPORTPDFUPSELL_APP},getSelectorIconClass:function(){return"exportpdfupsellapp-toolbar-icon"},getSiteCatalystName:function(){return"exportpdfupsellapp"}}),p.SelectorView}),define("acplugins/exportpdfupsell-app/js/plugins/rhp/exportpdfupsell-app-selector",["acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","acplugins/exportpdfupsell-app/js/views/selector-view","acplugins/exportpdfupsell-app/js/exportpdfupsell-app"],function(e){return e.SelectorView}),define("acplugins/exportpdfupsell-app/js/plugins/rhp/exportpdfupsell-app-tool-view",["core/ac-core","files/ac-files","acplugins/exportpdfupsell-app/js/ac-exportpdfupsell-app","acplugins/exportpdfupsell-app/js/templates/rhp/exportpdfupsell-app-tool","i18n!acplugins/exportpdfupsell-app/js/nls/ui-strings","aictools/util/localize","core/utils/sc-analytics","core/views/plugin-content-view","acplugins/exportpdfupsell-app/js/plugin","acplugins/exportpdfupsell-app/js/plugins/rhp/exportpdfupsell-app-selector"],function(e,p,t,i,n,l,s){return t.ToolView=e.PluginContentView.extend({events:{"click .exportpdfupsellapp-start":"_onStartClick","click .icon":"_onIconClick"},initialize:function(p){e.PluginContentView.prototype.initialize.call(this,p)},template:_.template(i),_onStartClick:function(){var e=[s.TOOLS,this.getSiteCatalystName(),s.START_NOW,s.CLICKED,s.RHP];this.options.appApi.siteCatalystApi.logScEvent(e),this.options.appApi.rnaApi.done(_.bind(function(e){e.rnaServicesAPI.invokeMethod({methodName:"CheckToolEntitledInInstalledAcrobat",methodArgs:"EPDFApp"}).then(_.bind(function(p){p||e.openDecoratedUrl(n.EXPORTPDFUPSELL_APP_RHP_GO_URL)},this),_.bind(function(){e.openDecoratedUrl(n.EXPORTPDFUPSELL_APP_RHP_GO_URL)},this))},this));var p=[s.TOOLS,this.getSiteCatalystName(),s.UPSELL_STARTED,s.RHP];this.options.appApi.siteCatalystApi.logScEvent(p)},_onIconClick:function(){this.options.appApi.rnaApi.done(_.bind(function(e){e.rnaServicesAPI.invokeMethod({methodName:"CheckToolEntitledInInstalledAcrobat",methodArgs:"EPDFApp"}).then(_.bind(function(p){p||e.openDecoratedUrl(n.EXPORTPDFUPSELL_APP_RHP_GO_URL)},this),_.bind(function(){e.openDecoratedUrl(n.EXPORTPDFUPSELL_APP_RHP_GO_URL)},this))},this))},setHtml:function(e){return this.$el.html(this.template(l.htmlSanitize(e))),this.$el},render:function(){this.$el;if(this.$el.addClass("exportpdfupsellapp-rhp"),e.PluginContentView.prototype.render.call(this),!($("#exportpdfupsellapp_tool").length>0)){this.setHtml({heading:n.EXPORTPDFUPSELL_APP_HEADING,description:n.EXPORTPDFUPSELL_APP_TOOL_VIEW_TITLE_RHP,icon_tooltip:n.EXPORTPDFUPSELL_APP_ICON_TOOLTIP,start:n.EXPORTPDFUPSELL_APP_START}),this._renderChildViews();var p=[s.TOOLS,this.getSiteCatalystName(),s.START_NOW,s.SHOWN,s.RHP];this.options.appApi.siteCatalystApi.logScEvent(p)}},selectPlugin:function(){this.options.appApi.displayApi.applyUIThemeStyles(this.$el).then(_.bind(function(){this.render()},this));var e=this.options;return this._startPlugin().then(_.bind(function(){return this.render(),t.opFactory.create("SelectingFullPreviewOverlayOp",_.extend({},e,{})).run()},this))},getSiteCatalystName:function(){return"exportpdfupsellapp"},_renderChildViews:function(){return void 0},_startPlugin:function(){var e=this._startingPluginPromise;return e||(e=this._startingPluginPromise=t.opFactory.create("StartingPluginOp",this.options).run()),e}}),t.ToolView});