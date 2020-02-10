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

define("pdmplugins/send-for-sign/js/ac-send-for-sign",["plugins-common/ac-plugins"],function(e){var _=e.SendForSign;return _||(_=e.SendForSign={}),_.PLUGIN_ID||(_.PLUGIN_ID="send_for_sign"),_}),define("pdmplugins/send-for-sign/js/nls/ui-strings",{root:!0,"xx-xx":!0,"ar-ae":!0,"ca-es":!0,"cs-cz":!0,"da-dk":!0,"de-de":!0,"en-ae":!0,"en-gb":!0,"en-il":!0,"es-es":!0,"eu-es":!0,"fi-fi":!0,"fr-fr":!0,"fr-ma":!0,"he-il":!0,"hr-hr":!0,"hu-hu":!0,"it-it":!0,"ja-jp":!0,"ko-kr":!0,"nb-no":!0,"nl-nl":!0,"pl-pl":!0,"pt-br":!0,"ro-ro":!0,"ru-ru":!0,"sk-sk":!0,"sl-si":!0,"sl-sl":!0,"sv-se":!0,"tr-tr":!0,"uk-ua":!0,"zh-cn":!0,"zh-tw":!0,"bg-bg":!0}),define("pdmplugins/send-for-sign/js/nls/root/ui-strings",{SEND_FOR_SIGN:"Send For Sign",LP_TITLE:"Send for Signature",LP_SUBTITLE:"Send documents for signature in a few simple steps.",LP_SELECT_FILE_BTN_LABEL:"Select Files",LP_TITLE_NEW:"Send for Signature",LP_SUBTITLE_NEW:"Get documents signed instantly. Recipients will receive a link to view and sign online. No purchase or sign-up required.",LP_SUBTITLE2_NEW:"Track progress online to know when the file is viewed and signed. ",LP_SUBTITLE3_NEW:"Learn More",LP_TO:"To",LP_ADD_CC:"Add CC",LP_MESSAGE:"Message",LP_FILES:"File(s)",LP_ACTION_BTN1_LABEL_NEW:"Next",LP_INVALID_EMAIL_ERROR:" is an invalid email address.",LP_NO_EMAIL_ERROR:"Please add at least one recipient.",LP_TO_EMAIL_PLACEHOLDER:"Enter recipient email",LP_CC_EMAIL_PLACEHOLDER:"Enter CC’s emails",LP_ONLY_SENDER_EMAIL_ERROR:"You cannot send a document only to yourself to sign.",LP_NEXT_GUIDE_TEXT:"Click Next to specify where recipients need to fill and sign.",LP_SUBJECT_PLACEHOLDER:"Agreement Name",LP_MESSAGE_TEXT:"Please review and complete this document.",LP_CC_LIMITS_ERROR:"Agreements can have at most 11 CCs.",LP_RECIPIENTS_LIMITS_ERROR:"Maximum number of recipients entered.",LP_AGREEMENT_CHARLIMITS_ERROR:"The Agreement Name must be 255 characters or less.",LP_SIGNER:"Signer",LP_APPROVER:"Approver",LP_SENDER_IN_CC_ERROR:"You cannot CC the same email address that you are sending from.",LP_HELP_ICON_TEXT:"Add recipients in the order you wish the document to be signed.",LP_OUTVITES_ERROR:"Please accept the Adobe Sign invitation that we just emailed you to be able to start using Adobe Sign subscription given by your administrator.",LP_CC:"CC",LP_HIDE:"Hide",LP_LEARN_MORE_GOURL:"http://www.adobe.com/go/DCSFS",LP_DOCUMENT_LIBRARY_:"Document Library",LP_DOCUMENT_LIBRARY_TITLE:"Add File from Document Library",LP_NAME:"Name",LP_LAST_MODIFIED:"Last Modified",LP_ATTACH:"Attach",LP_SHARED_DOCUMENTS:"Shared Documents",LP_ADOBE_SIGN_DOCUMENTS:"Adobe Sign Documents",LP_RDR_ACTION_BTN1_LABEL:"Start",LP_RDR_APP_INFO_TXT_1:"Click Start to complete steps to send for signature:",LP_RDR_APP_INFO_TXT_2:"Step 1: Add recipients",LP_RDR_APP_INFO_TXT_3:"Step 2: Add fields and send",LP_ACR_ACTION_BTN1_LABEL:"Prepare Form",LP_ACR_ACTION_BTN2_LABEL:"Ready to Send",LP_ACR_ACTION_BTN_SEPARATOR:"or",LP_ACR_ACTION_BTN1_INFO:"Add fields before sending",LP_ACR_ACTION_BTN2_INFO:"Upload and add recipients",SFS_SUBSCRIBE_SIGN_IN:"Sign In",SFS_SUBSCRIBE_UPGRADE_NOW:"Upgrade",SFS_SUBSCRIBE_START_NOW:"Start Now",SFS_SUBSCRIBE_TITLE:"Send for Signature",SFS_SUBSCRIBE_MSG_CONTENT_1:"Send documents for signature in a few simple steps.",SFS_SUBSCRIBE_MSG_CONTENT_2:"Track results in real time.",SFS_SUBSCRIBE_MSG_CONTENT_3:"Create a professional customer experience",SFS_SUBSCRIBE_MSG_CONTENT_4:"Manage user preferences and settings",SFS_SUBSCRIBE_UPGRADE_NOT_SUBCRIBED:"Not Subscribed?",SFS_SUBSCRIBE_UPGRADE:"Upgrade",SFS_SUBSCRIBE_UPGRADE_ALREADY_SUBSCRIBED_EXPERIMENT:"Already Subscribed?",SFS_SUBSCRIBE_LEARN_MORE_EXPERIMENT:"Learn More",SFS_OFFLINE_ACCEPT_LABEL:"Close",GENERIC_ARIA_LABEL_STRING:"<%= prefix %>. <%= suffix %>",SFS_ADD_FILES:"Add Files",SELECTED_FILES:"Selected Files",FILE_SELECT_TITLE:"Select Files",FILE_SELECT_ACTION_BTN:"Continue",FILE_SELECT_FILTER_DESCR:"Adobe PDF files",SFS_PROGRESS_CANCEL_LABEL:"Cancel",DOC_PROGRESS_LABEL:"Uploading...",SFS_ERR_GENERIC_TITLE:"Could not Send",SFS_ERR_TITLE_FAILED_TO_SEND:'"<%= name %>" failed to send.',SFS_ERR_CLOSE_BTN:"Close",SFS_ERR_TIMEOUT_TITLE:"Timed out ",SFS_ERR_CONTENT_TIMEOUT_TITLE:"There has been no activity in the Send for Signature tool for a while.",SFS_ERR_CONTENT_TIMEOUT_BODY:"Any recent changes have been lost.",SFS_ACRO_UPDGRADE_GO_URL:"http://www.adobe.com/go/collectsigacro_12_0_0",SFS_RDR_UPGRADE_GO_URL:"http://www.adobe.com/go/collectsigrdr_12_0_0",SFS_RDR_UPGRADE_GO_URL_RDREXP:"http://www.adobe.com/go/rdr_sfs_tc_lm_dc112017",SFS_ERR_CONTENT_TITLE_UNSUPPORTED:'Unsupported file: "<%= name %>"',SFS_ERR_CONTENT_TITLE_UNSUPPORTED_N:'Unsupported files: "<%= name %>"',SFS_ERR_CONTENT_BODY_UNSUPPORTED:"Select another file and try again",SFS_ERR_GENERAL_WORKFLOW_FAILURE:"An error has occurred. Please try again.",SFS_ERR_LARGE_FILE_SIZE:"Your document exceeds the maximum size of file supported for your subscription level. Please try a different document or contact your account administrator.",SFS_ERR_ENTERPRISE_SERVICE_ACCS_DENIED:"You do not have access to this service. Please contact your IT Administrator to gain access, or try to sign in with an Adobe ID",SFS_ERR_PREPARE_FORM_MUL_FILES_SEL:"You have selected more than one file. To send multiple files for signature they must be combined into a single file.",SFS_ERR_ES_AUTO_LOGIN_DENIED:"Cannot login to the service to complete the send for signature process. Please contact support.",SFS_FILE_NOT_SENT:"File not sent",SFS_MULTIPLE_WORKFLOWS_DENIED:"Another file is being sent in a different window. Finish sending the other file then try again.",SFS_ERR_OK_BUTTON:"OK",NO:"NO",YES:"YES",SFS_COMBINE_MESSAGE_TITLE:"Files will be combined",SFS_COMBINE_MESSAGE_TEXT:"You have selected more than one file. All files will be combined into one PDF for preparing form. Do you want to continue and combine all files?",SFS_FILES_NOT_COMBINED_ERROR_TITLE:"Error",SFS_FILES_NOT_COMBINED_ERROR:"An error was encountered while combining files. Please check the selected files and try again",SEND_REMOVE:"Remove"}),define("pdmplugins/send-for-sign/js/views/selector-view",["core/ac-core","pdmplugins/send-for-sign/js/ac-send-for-sign","i18n!pdmplugins/send-for-sign/js/nls/ui-strings","core/views/plugin-selector-view"],function(e,_,n){return _.SelectorView=e.PluginSelectorView.extend({getSelectorLabel:function(){return n.SEND_FOR_SIGN}}),_.SelectorView}),define("pdmplugins/send-for-sign/js/selector",["pdmplugins/send-for-sign/js/ac-send-for-sign","pdmplugins/send-for-sign/js/views/selector-view"],function(){return void 0});