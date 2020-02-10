/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2017 Adobe Systems Incorporated
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

define("pdmplugins/sample-files/js/ac-sample-files",["plugins-common/ac-plugins"],function(e){var s=e.SampleFiles;return s||(s=e.SampleFiles={}),s.PLUGIN_ID||(s.PLUGIN_ID="sample_files"),s}),define("pdmplugins/sample-files/js/nls/ui-strings",{root:!0,"xx-xx":!0,"ar-ae":!0,"ca-es":!0,"cs-cz":!0,"da-dk":!0,"de-de":!0,"en-ae":!0,"en-gb":!0,"en-il":!0,"es-es":!0,"eu-es":!0,"fi-fi":!0,"fr-fr":!0,"fr-ma":!0,"he-il":!0,"hr-hr":!0,"hu-hu":!0,"it-it":!0,"ja-jp":!0,"ko-kr":!0,"nb-no":!0,"nl-nl":!0,"pl-pl":!0,"pt-br":!0,"ro-ro":!0,"ru-ru":!0,"sk-sk":!0,"sl-si":!0,"sl-sl":!0,"sv-se":!0,"tr-tr":!0,"uk-ua":!0,"zh-cn":!0,"zh-tw":!0,"bg-bg":!0}),define("pdmplugins/sample-files/js/nls/root/ui-strings",{SELECTOR_LABEL:"SAMPLE_FILES",HEADING_SAMPLE_FILES:"Sample next-generation PDFs"}),define("pdmplugins/sample-files/js/views/selector-view",["core/ac-core-init","pdmplugins/sample-files/js/ac-sample-files","i18n!pdmplugins/sample-files/js/nls/ui-strings","core/views/plugin-selector-view"],function(e,s,l){return s.SelectorView=e.PluginSelectorView.extend({getSelectorLabel:function(){return l.SELECTOR_LABEL}}),s.SelectorView}),define("pdmplugins/sample-files/js/selector",["pdmplugins/sample-files/js/ac-sample-files","pdmplugins/sample-files/js/views/selector-view"],function(){});