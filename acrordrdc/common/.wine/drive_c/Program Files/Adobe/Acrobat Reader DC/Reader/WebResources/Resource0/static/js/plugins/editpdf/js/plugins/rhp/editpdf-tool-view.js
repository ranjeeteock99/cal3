/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
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

define("acplugins/editpdf/js/ac-editpdf",["plugins-common/ac-plugins"],function(t){var i=t.EditPDF;return i||(i=t.EditPDF={}),i}),define("acplugins/editpdf/js/templates/rhp/edit-pdf-tool",[],function(){return'<!-- Copyright 2012 Adobe Systems Incorporated. All Rights Reserved. --><div class="rhp editpdf_tool ui-theme theme-container">    <div class="rhp edit-pdf-content">       <div class="rhp heading theme-text"><%= heading %></div>       <div aria-labelledby="<%= icon_tooltip %>" role="button" class="rhp icon"            title= "<%= icon_tooltip %>" tabindex="0" />       <div class="rhp description theme-text"><%= description %></div>    </div>    <input type="button" class="rhp control-button editpdf-start       site-catalyst theme-button theme-button-label" role="button"       tabindex="0" aria-labelledby="<%= start %>" value="<%= start %>"/></div>'}),define("acplugins/editpdf/js/nls/ui-strings",{root:!0,"xx-xx":!0,"de-de":!0,"en-gb":!0,"es-es":!0,"fr-fr":!0,"it-it":!0,"ja-jp":!0,"da-dk":!0,"fi-fi":!0,"nb-no":!0,"nl-nl":!0,"pt-br":!0,"sv-se":!0,"zh-cn":!0,"zh-tw":!0,"ko-kr":!0,"cs-cz":!0,"hu-hu":!0,"pl-pl":!0,"ru-ru":!0,"uk-ua":!0,"tr-tr":!0,"sk-sk":!0,"sl-si":!0,"bg-bg":!0}),define("acplugins/editpdf/js/nls/root/ui-strings",{EDIT_PDF:"Edit PDF Files",EDIT_PDF_TOOL_VIEW_TITLE:"Easily edit text and images in PDF documents with Acrobat Pro DC",EDIT_PDF_TOOL_VIEW_TITLE_RHP:"Easily edit text and images in PDF documents",EDIT_PDF_ICON_TOOLTIP:"Learn more",EDIT_PDF_START:"Learn more",EDIT_PDF_HEADING:"Adobe Acrobat Pro DC",EDIT_PDF_FULL_GO_URL:"http://www.adobe.com/go/editrdr_12_0_0",EDIT_PDF_RHP_GO_URL:"http://www.adobe.com/go/editrhprdr_12_0_0"}),define("aictools/aic",["aicx/ac-aicx"],function(t){return window.AiC=_.extend(window.AiC||{},{getBaseUrl:function(){return t.getBaseAicUrl()+"createpdf/"},getBaseUriApi:function(){return this.getBaseUrl()+"api/"},appEvents:_.extend({},Backbone.Events),init:function(t){return this.initializedPromise||(this.initializedPromise=$.Deferred()),this.appApi||!t?this.initializedPromise.promise():(this.appApi=t,AiC.appApi.done(_.bind(function(){try{var t=AiC.appApi.routerApi,i=_.map(t.getQueryParams(),function(t,i){return i+":"+t+";"}).join("");1===t.getPathname().indexOf("my_plan")&&LOG("requestType=deeplink	requestPath="+t.getPathname().substr(1)+"	requestParams="+i+"	requestHash="+AiC.appApi.routerApi.getHash().substr(1)+"	requestHost="+location.host,LOG.INFO,{logConsole:!1,logServer:!0})}catch(e){}this.initializedPromise.resolve()},this)),this.initializedPromise.promise())}}),window.AiC}),define("aictools/util/localize",["aictools/aic"],function(t){return t.Localize={htmlTrim:function(t){return t.replace(/<!--(.*?)-->\s*/,"")},htmlSanitize:function(t){function i(t){return _.isString(t)||_.isNumber(t)||_.isBoolean(t)||_.isDate(t)}var e={};if(i(t))e=this.htmlSanitizeString(t.toString());else{if(!_.isObject(t))throw"localize: invalid object: "+t.toString();_.each(t,_.bind(function(t,n){if(!i(t))throw"localize: Value for key: "+n+" is missing or invalid";e[n]=this.htmlSanitizeString(t.toString())},this))}return e},htmlSanitizeString:function(t){var i=t,e=i.indexOf("<%="),n=i.indexOf("%>");if(e>=0&&n>e)throw"Unprocessed template parameter: "+i;return i=_.escape(i)}},t.Localize}),define("acplugins/editpdf/js/ops/plugin/starting-plugin-op",["core/ac-core","acplugins/editpdf/js/ac-editpdf","core/ops/op"],function(t,i){return i.StartingPluginOp=t.Op.extend({run:function(){return this._getResolvedPromise()}}),i.StartingPluginOp}),define("acplugins/editpdf/js/ops/full-preview-overlay/selecting-full-preview-overlay-op",["core/ac-core","acplugins/editpdf/js/ac-editpdf","core/ops/op"],function(t,i){return i.SelectingFullPreviewOverlayOp=t.Op.extend({run:function(){return t.opFactory.create("SelectingPluginOp",this.options).run("full_preview_overlay_example")}}),i.SelectingFullPreviewOverlayOp}),define("acplugins/editpdf/js/ops/op-factory",["core/ac-core","acplugins/editpdf/js/ac-editpdf","acplugins/editpdf/js/ops/plugin/starting-plugin-op","acplugins/editpdf/js/ops/full-preview-overlay/selecting-full-preview-overlay-op"],function(t,i){i.OpFactory=t.Op.extend({create:function(t,e){var n=i[t];return n?new n(e):void LOG(0,"AcEditPDF.OpFactory.create: Unrecognized class: "+t)}})}),define("acplugins/editpdf/js/editpdf",["acplugins/editpdf/js/ac-editpdf","acplugins/editpdf/js/ops/op-factory"],function(t){_.extend(t,{init:function(){t.opFactory=new t.OpFactory}})}),define("acplugins/editpdf/js/plugin",["acplugins/editpdf/js/ac-editpdf","acplugins/editpdf/js/editpdf"],function(t){t.init()}),define("acplugins/editpdf/js/plugins/rhp/editpdf-tool-view",["core/ac-core","files/ac-files","acplugins/editpdf/js/ac-editpdf","acplugins/editpdf/js/templates/rhp/edit-pdf-tool","i18n!acplugins/editpdf/js/nls/ui-strings","aictools/util/localize","core/utils/sc-analytics","core/views/plugin-content-view","acplugins/editpdf/js/plugin"],function(t,i,e,n,o,r,s){return e.ToolView=t.PluginContentView.extend({events:{"click .editpdf-start":"_onStartClick","click .icon":"_onIconClick","keydown .icon":"_onKeyDown"},initialize:function(i){t.PluginContentView.prototype.initialize.call(this,i)},template:_.template(n),_onStartClick:function(){this.options.appApi.rnaApi.done(_.bind(function(t){if(t.rnaServicesAPI.isSelectionExportExperimentEnabled()===!0){var i="customNotificationToQuitCoachmark";return t.rnaServicesAPI.invokeMethod({methodName:"broadcastCustomNotification",methodArgs:[i]})}},this));var t=[s.TOOLS,this.getSiteCatalystName(),s.START_NOW,s.CLICKED,s.RHP];this.options.appApi.siteCatalystApi.logScEvent(t),this.options.appApi.rnaApi.done(_.bind(function(t){t.rnaServicesAPI.invokeMethod({methodName:"CheckToolEntitledInInstalledAcrobat",methodArgs:"EditPDFApp"}).then(_.bind(function(i){i||t.rnaServicesAPI.invokeMethod({methodName:"CheckAcrobatEntitlementForUser",methodArgs:"EditPDFRdrApp"})},this),_.bind(function(){t.rnaServicesAPI.invokeMethod({methodName:"CheckAcrobatEntitlementForUser",methodArgs:"EditPDFRdrApp"})},this))},this));var i=[s.TOOLS,this.getSiteCatalystName(),s.UPSELL_STARTED,s.RHP];this.options.appApi.siteCatalystApi.logScEvent(i)},_onIconClick:function(){this.options.appApi.rnaApi.done(_.bind(function(t){t.rnaServicesAPI.invokeMethod({methodName:"CheckToolEntitledInInstalledAcrobat",methodArgs:"EditPDFApp"}).then(_.bind(function(i){i||t.openDecoratedUrl(o.EDIT_PDF_RHP_GO_URL)},this),_.bind(function(){t.openDecoratedUrl(o.EDIT_PDF_RHP_GO_URL)},this))},this))},setHtml:function(t){return this.$el.html(this.template(r.htmlSanitize(t))),this.$el},render:function(){this.$el;if(this.$el.addClass("editpdf-rhp"),t.PluginContentView.prototype.render.call(this),!($("#editpdf_tool").length>0)){this.setHtml({heading:o.EDIT_PDF_HEADING,description:o.EDIT_PDF_TOOL_VIEW_TITLE_RHP,icon_tooltip:o.EDIT_PDF_ICON_TOOLTIP,start:o.EDIT_PDF_START}),this._renderChildViews(),this.options.appApi.rnaApi.done(_.bind(function(t){if(t.rnaServicesAPI.isSelectionExportExperimentEnabled()===!0){var i={};return i.appName="EditPDFRdrApp",i.margin_bottom=1,i.margin_left=15,t.rnaServicesAPI.invokeMethod({methodName:"ExperimentDetails",methodArgs:i})}},this));var i=[s.TOOLS,this.getSiteCatalystName(),s.START_NOW,s.SHOWN,s.RHP];this.options.appApi.siteCatalystApi.logScEvent(i)}},_onKeyDown:function(t){var i=t.keyCode,e=$(t.target),n=$.Event("click");switch(i){case 13:case 32:e.trigger(n),t.preventDefault()}},selectPlugin:function(){this.options.appApi.displayApi.applyUIThemeStyles(this.$el).then(_.bind(function(){this.render()},this));var t=this.options;return this._startPlugin().then(_.bind(function(){return this.render(),e.opFactory.create("SelectingFullPreviewOverlayOp",_.extend({},t,{})).run()},this))},getSiteCatalystName:function(){return"Edit"},_renderChildViews:function(){return void 0},_startPlugin:function(){var t=this._startingPluginPromise;return t||(t=this._startingPluginPromise=e.opFactory.create("StartingPluginOp",this.options).run()),t}}),e.ToolView});