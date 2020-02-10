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

define({ACTIONS:"Actions",ADDED:"Added",BACK:"Back",CLOSE:"Close",CONTINUE:"Continue",EXTENSION:"(.<%- ext %>)",MODIFIED:"Modified",NAME:"Name",OR:"or",SELECT_FILES:"Select Files",SELECT_FILE:"Select File",SIZE:"Size",N_ITEMS_CLICK_TO_VIEW:"<%= num %> items. Click to view.",JANUARY:"January",FEBRUARY:"February",MARCH:"March",APRIL:"April",MAY:"May",JUNE:"June",JULY:"July",AUGUST:"August",SEPTEMBER:"September",OCTOBER:"October",NOVEMBER:"November",DECEMBER:"December",CREATED_DATE:"Date Added",MODIFIED_DATE:"Date Modified",VIEWED_DATE:"Date Viewed",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Yesterday",DATE_MM_DD_YYYY:"<%= day %>/<%= month %>/<%= year %>",YYYY:"YYYY",AM:"",PM:"",HH:"HH",HH_MM_SEPARATOR:":",MM:"MM",DD:"DD",ANIMATION:"Animation",AUDIO:"Audio",CALENDAR:"Calendar",CASCADING_STYLE_SHEET:"Cascading Style Sheet",CERTIFICATE:"Certificate",FONT:"Font",IMAGE:"Image",PLAIN_TEXT:"Plain Text",PRESENTATION:"Presentation",RICH_TEXT:"Rich Text",SPREADSHEET:"Spreadsheet",STYLE_SHEET:"Style Sheet",TEXT:"Text",UNKNOWN:"Unknown",VIDEO:"Video",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:".",THOUSANDS_SEPARATOR:",",FILE_NAME:"File Name contains word",FILE_TYPE:"File Type is",FILE_CONTENT:"File contains",DATE_LAST_MODIFIED:"Date Last Modified is",DATE_LAST_VIEWED:"Date Last Viewed is",DATE_ADDED:"Date Added is",FILE_ADDED_BY:"File Added by",MIN_SIZE:"Min Size",MAX_SIZE:"Max Size",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Create PDF",EXPORT_PDF:"Export PDF",COMBINE_PDF:"Combine PDF",FILL_SIGN:"Fill & Sign",TODAY:"Today",YESTERDAY:"Yesterday",WITHIN_LAST_WEEK:"Within Last Week",WITHIN_LAST_MONTH:"Within Last Month",ONE_TO_TWO_MONTHS_AGO:"1-2 Months Ago",TWO_TO_THREE_MONTHS_AGO:"2-3 Months Ago",THREE_TO_FOUR_MONTHS_AGO:"3-4 Months Ago",FOUR_TO_FIVE_MONTHS_AGO:"4-5 Months Ago",FIVE_TO_SIX_MONTHS_AGO:"5-6 Months Ago",SIX_TO_TWELVE_MONTHS_AGO:"6-12 Months Ago",MORE_THAN_ONE_YEAR_AGO:"1+ Year Ago",OK:"OK",CANCEL:"Cancel",CONFIRM_DELETE_TITLE:"Delete",CONFIRM_DELETE_MSG_ONE_ITEM:"Are you sure you want to delete this item?",CONFIRM_DELETE_MSG_N_ITEMS:"Are you sure you want to delete these <%= numItems %> items?",DOWNLOAD:"Download",DOWNLOAD_FILE:"Download File",DOWNLOAD_FILES:"Download Files",DOWNLOAD_FOLDER:"Download Folder",RENAME:"Rename",RENAME_ELLIPSIS:"Rename...",RENAME_FILE:"Rename File",RENAME_FOLDER:"Rename Folder",MOVE_FILE:"Move",MOVE_FILES:"Move",MOVE_FOLDER:"Move",MOVE_FOLDERS:"Move",MOVE_FILE_AND_FOLDER:"Move",MOVE_FILES_AND_FOLDER:"Move",MOVE_FILE_AND_FOLDERS:"Move",MOVE_FILES_AND_FOLDERS:"Move",SHARE:"Share",SHARE_ELLIPSIS:"Share...",SHARE_FILE:"Share File",SHARE_FILES:"Share Files",SEND_FILE:"Send File",SEND_FILES:"Send Files",DELETE:"Delete",SEND:"Send",CONVERT_TO_PDF:"Convert to PDF",COMBINE:"Combine",HOME:"Home",ENTER_KEYWORD:"Search",SEARCH:"Search",SHARED:"Shared",PREVIEW_NOT_AVAILABLE:"Cannot Preview Filetype",PREVIEW_NOT_AVAILABLE_DESC:"Please <a class='preview-download'>download</a> the file for viewing.",RENAME_NAME_IN_USE:'The <%= existingType %> named "<%= name %>" already exists in this location. Please choose another <%= renamedType %> name.',MOVE:"Move",MOVE_FILE_TO:"Move File To...",MOVE_FILES_TO:"Move Files To...",MOVE_FOLDER_TO:"Move Folder To...",MOVE_FOLDERS_TO:"Move Folders To...",MOVE_FILE_AND_FOLDER_TO:"Move File and Folder To...",MOVE_FILES_AND_FOLDER_TO:"Move Files and Folder To...",MOVE_FILE_AND_FOLDERS_TO:"Move File and Folders To...",MOVE_FILES_AND_FOLDERS_TO:"Move Files and Folders To...",DUPLICATE_NAME_TITLE:"Duplicate <%= type %> Name",DUPLICATE_NAME_PROMPT:'A <%= type %> named "<%- name %>" already exists at this location. What would you like to do?',DUPLICATE_NAME_DELETE_EXISTING:"Delete the existing <%= type %>",DUPLICATE_NAME_DELETE_UPLOADED:"Delete the uploaded <%= type %>",DUPLICATE_NAME_RENAME_UPLOADED:"Rename the uploaded <%= type %>",DUPLICATE_NAME_DELETE_MOVED:"Delete the moved <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"Rename the moved <%= type %>",FILE_INITIAL_CAP:"File",FILE:"file",FOLDER_INITIAL_CAP:"Folder",FOLDER:"folder",REPORT_ABUSE:"Report Abuse",REPORT_ABUSE_TITLE:"Report Abuse",REPORT_ABUSE_CONTENT_LABEL:"Content",REPORT_ABUSE_TITLE_LABEL:"Title",REPORT_ABUSE_DEFAMATION_LABEL:"Defamation",REPORT_ABUSE_OFFENSIVE_LABEL:"Offensive Content",REPORT_ABUSE_EXPLICIT_LABEL:"Sexually Explicit Content",REPORT_ABUSE_TRADEMARK_LABEL:"Trademark Infringement",REPORT_ABUSE_RACIST_LABEL:"Racist or Hate Content",REPORT_ABUSE_OTHER_LABEL:"Other",REPORT_ABUSE_BLURB:"If you feel that this content violates the Adobe <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Terms of Use</a>, you may report this content by filling in this quick form.",REPORT_ABUSE_EMAIL_PROMPT:"Your Email",REPORT_ABUSE_NAME_PROMPT:"Your Name",REPORT_ABUSE_TARGET_TYPE_PROMPT:"What are you reporting?",REPORT_ABUSE_REASON_PROMPT:"Why are you reporting this content?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Please provide a description of your concern.",REPORT_ABUSE_COPYRIGHT_REPORT:"To report a Copyright Violation, please follow Section 17 in the <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Terms of Use</a>.",REPORT_ABUSE_REPORT_BUTTON:"Report Abuse",REPORT_ABUSE_EMAIL_ERROR:"You must enter a valid email address.",LANGUAGE_CHANGE:"<%= lang %> (Change)",CHOOSE_LANGUAGE:"Choose Your Language",CHAT_POD_WELCOME_TITLE:"Chat with us!",CHAT_POD_CHATTING_TITLE:"Now chatting",CHAT_POD_UNAVAILABLE_TITLE:"Live Help: Offline",CHAT_POD_BUSY_TITLE:"Live Help: Busy",CHAT_POD_AWAY_MESSAGE:"Our live support feature is currently offline. Please try again later.",CHAT_POD_LOADING_TITLE:"Loading Olark...",CHAT_POD_WELCOME_MESSAGE:"Questions? We'd love to chat! Please don't enter your password or any other confidential information here. Only English-speaking operators are available to chat.",CHAT_POD_BUSY_MESSAGE:"All of our representatives are with other customers at this time. We will be with you shortly.",CHAT_POD_CHAT_INPUT_TEXT:"Type here and hit <enter> to chat",CHAT_POD_NAME_INPUT_TEXT:" and type your Name",CHAT_POD_EMAIL_INPUT_TEXT:" and type your Email",CHAT_POD_OFFLINE_NOTE_MESSAGE:"We are offline. Send us a message.",CHAT_POD_SEND_BUTTON_TEXT:"Send",CHAT_POD_OFFLINE_NOTE_THANKYOU_TEXT:"Thank you for your message. We will get back to you as soon as we can.",CHAT_POD_OFFLINE_NOTE_ERROR_TEXT:"You must complete all fields and specify a valid email address",CHAT_POD_OFFLINE_NOTE_SENDING_TEXT:"Sending...",CHAT_POD_OPERATOR_IS_TYPING_TEXT:"is typing...",CHAT_POD_OPERATOR_HAS_STOPPED_TYPING_TEXT:"has stopped typing",CHAT_POD_INTRODUCTION_ERROR_TEXT:"Please leave a name and email address so we can contact you in case we get disconnected.",CHAT_POD_INTRODUCTION_MESSAGES:"Welcome! Just provide us with some basic information and click 'Start chat' to talk to us.",CHAT_POD_INTRODUCTION_SUBMIT_BUTTON_TEXT:"Start chat",CHAT_POD_DISABLED_INPUT_TEXT_WHEN_CONVO_HAS_ENDED:"chat ended, refresh for new chat",CHAT_POD_DISABLED_PANEL_TEXT_WHEN_CONVO_HAS_ENDED:"This conversation has ended, but all you need to do to start a new one is refresh the page!",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"File Storage Running Out",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"You are currently using <%= using %> of your <%= allotment %> allotment and will soon run out of storage.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"File Storage Exceeded",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Your total storage of <%= using %> exceeds the maximum <%= allotment %> allowed with your new subscription.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"The uploaded file could not be saved because it would exceed your quota allotment of <%= allotment %>.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"You may view and download all existing files, but to save additional files you must upgrade your account.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"You will need to delete some files to free up some additional space.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Upgrade your account for more storage and additional features.",LEARN_MORE:"Learn More",UPGRADE:"Upgrade",ERROR:"Error",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"File Open Maximum Exceeded",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"You can open a maximum of 50 files at a time.",HTTP_STATUS_DEFAULT_TITLE:"Could not complete your request",HTTP_STATUS_DEFAULT_MSG:"An error occurred while trying to complete your request, and it could not be completed.",HTTP_STATUS_400_TITLE:"Could not complete your request (400)",HTTP_STATUS_400_MSG:"An error occurred while trying to complete your request, and it could not be completed.",HTTP_STATUS_401_TITLE:"You have been logged out (401)",HTTP_STATUS_401_MSG:'Your session has expired and you have been logged out due to inactivity. Click "Sign In" below to log back in.',HTTP_STATUS_403_QUOTA_TITLE:"Storage Quota Exceeded (403)",HTTP_STATUS_403_QUOTA_MSG:"Your file could not be uploaded, as it would exceed your storage quota. You may want to delete some existing files to provide more space.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Cannot Delete Folder With Content (403)",HTTP_STATUS_403_DEL_FOLDER_MSG:"You may only delete empty folders. Please delete all contents before deleting the folder.",HTTP_STATUS_403_NO_SHARING_TITLE:"Sharing Disallowed (403)",HTTP_STATUS_403_NO_SHARING_MSG:"Your file could not be shared because it is an audio or video file.",HTTP_STATUS_403_VIRUS_TITLE:"Virus Detected (403)",HTTP_STATUS_403_VIRUS_MSG:"Your file could not be uploaded because it contains a virus.",HTTP_STATUS_403_TITLE:"Forbidden (403)",HTTP_STATUS_403_MSG:"The operation could not be completed. Please try again later.",HTTP_STATUS_404_TITLE:"File Not Found (404)",HTTP_STATUS_404_MSG:"The file you are trying to access could not be found. The file may have been deleted or moved in another session.",HTTP_STATUS_405_TITLE:"Method Not Allowed (405)",HTTP_STATUS_405_MSG:"Your request could not be completed, as the method is not allowed.",HTTP_STATUS_406_TITLE:"Type Not Supported (406)",HTTP_STATUS_406_MSG:"The type requested in the accept header is not supported.",HTTP_STATUS_415_TITLE:"Unsupported Media Type (415)",HTTP_STATUS_415_MSG:"Your request could not be completed, as the media type specified is not supported.",HTTP_STATUS_500_TITLE:"Internal Server Error (500)",HTTP_STATUS_500_MSG:"Your request could not be completed due to an internal server error.",HTTP_STATUS_501_TITLE:"Request not Implemented (501)",HTTP_STATUS_501_MSG:"The request you are trying to make is not yet implemented in the server.",HTTP_STATUS_503_TITLE:"Server Currently Unavailable (503)",HTTP_STATUS_503_MSG:"The server could not reached, and may be down. Please try again later.",DOWNLOAD_FORM_TITLE:"Form File",DOWNLOAD_FORM_MESSAGE:"Your form file must be converted to PDF to be downloaded.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Your selection includes form files, which are not available for download. These files will be excluded. You can download PDF versions by selecting a single form file for download.",DOWNLOAD_FORMS_MESSAGE:"Form files are not available for download. You can download PDF versions by selecting a single form file for download.",SETTINGS:"Settings",DONE:"Done",FILE_LISTS:"File Lists",STORAGE:"Storage",ACROBAT_DOT_COM_FILES:"Acrobat Cloud",ES_SIGN_IN:"Sign In",ES_UPGRADE_NOW:"Upgrade Now",ES_START_NOW:"Start Now",DOWNLOAD_ALL:"Download All",NOTIFICATION_UPLOADING:"Uploading...",NOTIFICATION_CONVERTING:"Converting...",NOTIFICATION_CONVERSION_FAILURE:"Conversion Failed",NOTIFICATION_READY:"Ready",NOTIFICATION_WAITING:"Pending...",YES:"Yes",NO:"No",REPLACE_EXISTING_FILE_TITLE:"Replace existing file",REPLACE_EXISTING_FILE_MSG:"A file with this name already exists. Do you want to replace it?"});