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
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2014 Adobe Systems Incorporated
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
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
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

define("acplugins/home/js/ac-home",["plugins-common/ac-plugins"],function(e){var i=e.Home;return i||(e.Home=i={}),i}),define("acplugins/home/js/nls/ui-strings",{root:!0,"xx-xx":!0,"de-de":!0,"en-gb":!0,"es-es":!0,"fr-fr":!0,"it-it":!0,"ja-jp":!0,"da-dk":!0,"fi-fi":!0,"nb-no":!0,"nl-nl":!0,"pt-br":!0,"sv-se":!0}),define("acplugins/home/js/nls/root/ui-strings",{REMOVE_DIALOG_TITLE:"Remove Account",REMOVE_DIALOG_MSG:"Are you sure you want to remove '<%= connector %>'?"}),define("acplugins/home/js/ops/home-views/deleting-home-view-op",["core/ac-core","acplugins/home/js/ac-home","i18n!core/nls/ui-strings","i18n!acplugins/home/js/nls/ui-strings","core/ops/op"],function(e,i,n,t){return i.DeletingHomeViewOp=e.Op.extend({run:function(){var e,i,o,s,l=this.options,c=l.appApi.connectorsApi,r=l.appApi.pluginsApi,p=l.appApi.dialogApi;return(e=l.pluginId)?(i=r.getPluginUiModel(e),o=i.get("selector_label"),s=_.template(t.REMOVE_DIALOG_MSG)({connector:o}),p.displayTextAlert(p.SEVERITY_WARNING,t.REMOVE_DIALOG_TITLE,s,n.REMOVE,n.CANCEL).then(function(){return c.removeConnectorPlugin(e)})):this._getRejectedPromise()}}),i.DeletingHomeViewOp}),define("acplugins/home/js/ops/home-views/loading-home-views-op",["core/ac-core","acplugins/home/js/ac-home","core/utils/util","core/ops/op"],function(e,i,n){i.LoadingHomeViewsOp=e.Op.extend({run:function(){var i,t=this.options,o=t.appApi.pluginsApi;return n.isCEF()&&(i={readerContextModel:t.readerContextModel}),e.opFactory.create("LoadingPluginsOp",_.extend({pluginContext:i,pluginsConfig:o.getPluginTypeConfig("home_views"),pluginsUiModel:t.homeViewsUiModel},_.pick(t,"appApi","pluginId"))).run()}})}),define("acplugins/home/js/ops/home-views/selecting-home-view-op",["core/ac-core","acplugins/home/js/ac-home","core/ops/op"],function(e,i){return i.SelectingHomeViewOp=e.Op.extend({run:function(i){var n,t=this.options,o=t.homeViewsUiModel;return n=t.pluginId,n&&o.get("plugins").get(n)||(n=o.getSelectedId()),e.opFactory.create("SelectingPluginOp",t).run(n,i).always(function(){t.appApi.selectionApi.clearSelection()})}}),i.SelectingHomeViewOp}),define("acplugins/home/js/views/view-events",["acplugins/home/js/ac-home"],function(e){e.ViewEvents={HOME_VIEW_SELECTOR_CLICK:"home:home-view-selector-click",HOME_VIEW_SELECTOR_DELETE:"home:home-view-selector-delete"}}),define("acplugins/home/js/ops/listening/listening-for-view-events-op",["core/ac-core","acplugins/home/js/ac-home","core/ops/op","core/views/view-events","acplugins/home/js/views/view-events"],function(e,i){i.ListeningForViewEventsOp=e.Op.extend({initialize:function(){e.Op.prototype.initialize.call(this),this._initEventMap()},run:function(){var e=$.Deferred();return this.options.rootView.on("all",this._onViewEvent),this._deferred=e,e.promise()},_onViewEvent:function(e,i){var n,t;return n=this._eventMap[e],n&&(t=n[0].create(n[1],i)),t?void t.run().then(function(){return void 0},function(){return void 0}):void LOG(0,"AcHome.ListeningForViewEventsOp._onViewEvent ignoring "+e)},_mapEvent:function(e,i,n,t,o){e[i]=[n,t,o]},_initEventMap:function(){var e,n,t,o;e=this._eventMap={},n=this._mapEvent,t=i.opFactory,o=i.ViewEvents,n(e,o.HOME_VIEW_SELECTOR_CLICK,t,"SelectingHomeViewOp"),n(e,o.HOME_VIEW_SELECTOR_DELETE,t,"DeletingHomeViewOp")}})}),define("acplugins/home/js/ops/plugin/initializing-plugin-op",["core/ac-core","acplugins/home/js/ac-home","core/ops/op"],function(e,i){return i.InitializingPluginOp=e.Op.extend({run:function(){var n,t=this.options;return n=e.uiModelFactory.create("PluginsUiModel"),t=_.extend(this.options,{homeViewsUiModel:n,pluginsUiModel:n,leftRailUiModel:e.uiModelFactory.create("LeftRailUiModel")}),i.opFactory.create("LoadingHomeViewsOp",t).run()}}),i.InitializingPluginOp}),define("acplugins/home/js/ops/plugin/running-plugin-op",["core/ac-core","acplugins/home/js/ac-home","core/ops/op"],function(e,i){return i.RunningPluginOp=e.Op.extend({run:function(){var e,n=this.options;return e=i.opFactory,e.create("ListeningForViewEventsOp",n).run(),this._getUnresolvedPromise()}}),i.RunningPluginOp}),define("acplugins/home/js/ops/plugin/starting-plugin-op",["core/ac-core","acplugins/home/js/ac-home","core/ops/op"],function(e,i){return i.StartingPluginOp=e.Op.extend({run:function(){var n,t=this.options;return n=e.opFactory.create("InstantiatingConnectorsByCohortOp",t).run({pluginsUiModel:t.homeViewsUiModel,inFileSelectionDlg:!1}),i.opFactory.create("RunningPluginOp",t).run(),n}}),i.StartingPluginOp}),define("acplugins/home/js/ops/op-factory",["core/ac-core","acplugins/home/js/ac-home","acplugins/home/js/ops/home-views/deleting-home-view-op","acplugins/home/js/ops/home-views/loading-home-views-op","acplugins/home/js/ops/home-views/selecting-home-view-op","acplugins/home/js/ops/listening/listening-for-view-events-op","acplugins/home/js/ops/plugin/initializing-plugin-op","acplugins/home/js/ops/plugin/running-plugin-op","acplugins/home/js/ops/plugin/starting-plugin-op"],function(e,i){i.OpFactory=e.Op.extend({create:function(e,n){var t=i[e];return t?new t(n):void LOG(0,"AcHome.OpFactory.create: Unrecognized class: "+e)}})}),define("acplugins/ac-bh",[],function(){var e=Ac.Bh;return e||(e=Ac.Bh={}),e}),define("acplugins/home/js/templates/plugin-template",[],function(){return'<div class="home-tool">    <div role="navigation"    <% if (pluginSelectorId.length > 0) { %>          aria-labelledby="<%= pluginSelectorId %>"    <% } %>>        <div class="home-views-selector" role="menubar"             aria-controls="home-views-content-<%= viewId %>"         <% if (pluginSelectorId.length > 0) { %>              aria-labelledby="<%= pluginSelectorId %>"         <% } %>></div>    </div>    <div id="home-views-content-<%= viewId %>"         class="home-views-content" role="main"></div></div>'}),define("acplugins/build-num",{pluginBuildNumber:"000001"}),define("acplugins/bh-plugin-view",["core/ac-core","acplugins/ac-bh","core/views/plugin-content-view"],function(e,i){return i.PluginView=e.PluginContentView.extend({getAppApiVersion:function(){return Ac.Plugins.groups.blue_heron.FRAMEWORK_VERSION}}),i.PluginView}),define("acplugins/home/js/views/home-views-selector-view",["core/ac-core","acplugins/home/js/ac-home","core/utils/sc-analytics","core/views/left-rail-view","acplugins/home/js/views/view-events"],function(e,i,n){return i.HomeViewsSelectorView=e.LeftRailView.extend({_getSelectorClickEvent:function(){return i.ViewEvents.HOME_VIEW_SELECTOR_CLICK},_getSelectorDeleteEvent:function(){return i.ViewEvents.HOME_VIEW_SELECTOR_DELETE},_getSiteCatalystContext:function(){return n.FILE_LIST},_enableEditing:function(){return!0}}),i.HomeViewsSelectorView}),define("acplugins/home/js/templates/home-view-selector-template",[],function(){return'<div class="home-view-selector plugin-selector"        role="menuitemradio"        aria-checked="false" tabindex="0">    <div class="home-view-selector-label unselectable"><%= label %>    </div></div>'}),define("acplugins/home/js/views/home-views-old-selector-view",["core/ac-core","acplugins/home/js/ac-home","acplugins/home/js/templates/home-view-selector-template","core/utils/sc-analytics","core/views/plugins-selector-view","acplugins/home/js/views/view-events"],function(e,i,n,t){i.HomeViewsOldSelectorView=e.PluginsSelectorView.extend({initialize:function(){e.PluginsSelectorView.prototype.initialize.call(this)},_getSelectorTemplate:function(){return n},_getSelectorViewEvent:function(){return i.ViewEvents.HOME_VIEW_SELECTOR_CLICK},_getSiteCatalystContext:function(){return t.FILE_LIST}})}),define("acplugins/home/js/templates/home-view-content-template",[],function(){return'<div class="home-view-content plugin-content ui-theme theme-container"        role="application"></div>'}),define("acplugins/home/js/views/home-views-content-view",["core/ac-core","acplugins/home/js/ac-home","acplugins/home/js/templates/home-view-content-template","core/views/plugins-content-view"],function(e,i,n){i.HomeViewsContentView=e.PluginsContentView.extend({_getContentTemplate:function(){return n}})}),define("acplugins/home/js/views/plugin-view",["core/ac-core","acplugins/ac-bh","acplugins/home/js/ac-home","acplugins/home/js/templates/plugin-template","acplugins/build-num","core/utils/util","acplugins/bh-plugin-view","acplugins/home/js/ops/op-factory","acplugins/home/js/views/home-views-selector-view","acplugins/home/js/views/home-views-old-selector-view","acplugins/home/js/views/home-views-content-view"],function(e,i,n,t,o,s){return n.PluginView=i.PluginView.extend({initialize:function(){i.PluginView.prototype.initialize.call(this)},template:function(){return _.template(t)},render:function(){var e=this.$el,n=this.options,o=n.appApi.pluginsApi,s=n.pluginId;i.PluginView.prototype.render.call(this),0===e.children().length&&(e.html(_.template(t)({pluginSelectorId:o.getPluginSelectorId(s),viewId:_.uniqueId()})),this._initWrappers()),this._renderChildViews()},initPlugin:function(){return this._initPlugin()},selectPlugin:function(e){var i,t=this.options;return this._startPlugin().then(_.bind(function(){return i=t.homeViewsUiModel.getSelectedId(),e&&e.noChildSelection?void 0:s.isCEF()?this._getResolvedPromise():n.opFactory.create("SelectingHomeViewOp",_.extend({},t,{pluginId:i})).run(e)},this))},getPluginVersionList:function(){var e=[o.pluginBuildNumber],i=this.options.appApi.baseFilesUrisApi.getServerVersion();return i&&e.push(i),this._getResolvedPromise(e)},getSiteCatalystName:function(){return"Files"},_initWrappers:function(){this.$selector=this.$(".home-views-selector"),this.$content=this.$(".home-views-content")},_renderChildViews:function(){var e=this.options,i=this.$content,t=this.$selector;this._renderChildView("_homeViewsContent",n.HomeViewsContentView,i,e),this._renderChildView("_homeViewsSelector",n.HomeViewsSelectorView,t,e),(s.isCEF()||1===e.homeViewsUiModel.getShownPluginCount())&&(t.hide(),i.addClass("no-selector unselectable"))},_initPlugin:function(){var e=this._initingPluginPromise;return e||(e=this._initingPluginPromise=n.opFactory.create("InitializingPluginOp",this.options).run()),e},_startPlugin:function(){var e=this._startingPluginPromise;return e||(e=this._startingPluginPromise=n.opFactory.create("StartingPluginOp",this.options).run().then(_.bind(function(){this._addAppApiCallbacks(),this.render(),this._addUiModelEventListeners()},this))),e},_addAppApiCallbacks:function(){var e=this.options.appApi;s.isCEF()&&(e.sessionApi.addSignedInChangeCallback(this._onSignedInChange),e.connectorsApi.addConnectorsChangeCallback(this._onConnectorsChange),e.connectorsApi.addConnectorsUiHelpersChangeCallback(this._onConnectorsChange)),e.statusMenuApi.addStatusChangeCallback(this.options.pluginId,this._onHomeStatusChange)},_onSignedInChange:function(e,i){var n=this.options.appApi.connectorsApi;i?this._onConnectorsChange():n.removeConnectorPlugins()},_onConnectorsChange:function(){var i=this.options;i.appApi.selectionApi.isRunningInFull()&&e.opFactory.create("InstantiatingConnectorsOp",i).run({pluginsUiModel:i.homeViewsUiModel}).then(this.render)},_onHomeStatusChange:function(e){var i=this.options.appApi.statusMenuApi;e===i.STATUS_IDLE&&i.showMenu(!1)},_addUiModelEventListeners:function(){var e=this.options.homeViewsUiModel;this.listenTo(e,"change:selected_plugin_id",this._onSelectedPluginIdChange),this.listenTo(e.get("plugins"),"add remove",this.render)},_onSelectedPluginIdChange:function(){this.render()}}),n.PluginView}),define("acplugins/home/js/home",["acplugins/home/js/ac-home","acplugins/home/js/ops/op-factory","acplugins/home/js/views/plugin-view"],function(e){_.extend(e,{init:function(){e.opFactory=new e.OpFactory}})}),define("acplugins/home/js/plugin",["acplugins/home/js/ac-home","acplugins/home/js/home"],function(e){e.init()});