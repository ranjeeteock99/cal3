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

define({ACTIONS:"动作",ACTIONS_UC:"动作",ADDED:"已添加",ADD_ACCOUNT:"添加帐户",BACK:"上一步",CLOSE:"关闭",CONTINUE:"继续",EXTENSION:"(.<%- ext %>)",FILES:"文件",FILE_NAME:"文件名",FOLDER_NAME:"文件夹名称",LOCATION:"位置",MODIFIED:"已修改",NAME:"名称",OR:"或",PROPERTIES:"属性",PROPERTIES_UC:"属性",REMOVE:"删除",SELECT_FILES:"选择文件",SELECT_FILE:"选择文件",SIZE:"大小",SELECT_ALL:"全部选定",TOTAL_FILES:"文件总数",N_ITEMS_CLICK_TO_VIEW:"<%= num %> 个项目。单击可查看。",CREATED_DATE:"添加日期",MODIFIED_DATE:"修改日期",VIEWED_DATE:"查看日期",DATE_HH_MM_AMPM:"<%= amPm %> <%= hour %><%= sep %><%= minute %>",DATE_YESTERDAY:"昨天",DATE_MM_DD_YYYY:"<%= year %>/<%= month %>/<%= day %>",DATE_AND_TIME:"<%= dateStr %>，<%= timeStr %>",YYYY:"YYYY",AM:"AM",PM:"PM",HH:"H",HH_MM_SEPARATOR:":",MM:"M",DD:"D",ANIMATION:"动画",AUDIO:"音频",CALENDAR:"日历",CASCADING_STYLE_SHEET:"级联样式表",CERTIFICATE:"证书",FONT:"字体",IMAGE:"图像",PLAIN_TEXT:"纯文本",PRESENTATION:"演示文稿",RICH_TEXT:"富文本",SPREADSHEET:"电子表格",STYLE_SHEET:"样式表",TEXT:"文本",UNKNOWN:"未知",VIDEO:"视频",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:".",THOUSANDS_SEPARATOR:",",FILE_NAME_CONTAINS:"文件名包含",FILE_TYPE_IS:"文件类型是",FILE_CONTENT:"文件包含",DATE_LAST_MODIFIED:"上次修改日期为",DATE_LAST_VIEWED:"上次查看日期为",DATE_ADDED:"添加日期为",FILE_ADDED_BY:"文件添加者",MIN_SIZE:"最小大小",MAX_SIZE:"最大大小",FILTER_DISPLAY_VALUE:"<%= field %>：<%= value %>",CREATE_PDF:"创建 PDF",EXPORT_PDF:"导出 PDF",COMBINE_PDF:"合并 PDF",FILL_SIGN:"填写并签名",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"今天",YESTERDAY:"昨天",WITHIN_LAST_WEEK:"上周内",WITHIN_LAST_MONTH:"上月内",ONE_TO_TWO_MONTHS_AGO:"1-2 个月前",TWO_TO_THREE_MONTHS_AGO:"2-3 个月前",THREE_TO_FOUR_MONTHS_AGO:"3-4 个月前",FOUR_TO_FIVE_MONTHS_AGO:"4-5 个月前",FIVE_TO_SIX_MONTHS_AGO:"5-6 个月前",SIX_TO_TWELVE_MONTHS_AGO:"6-12 个月前",MORE_THAN_ONE_YEAR_AGO:"1 年多之前",OK:"确定",CANCEL:"取消",CONFIRM_DELETE_TITLE:"删除",CONFIRM_DELETE_MSG_ONE_ITEM:"是否确实要删除此项目？",CONFIRM_DELETE_MSG_N_ITEMS:"是否确实要删除这 <%= numItems %> 个项目？",DOWNLOAD:"下载",DOWNLOAD_FILE:"下载文件",DOWNLOAD_FILES:"下载文件",DOWNLOAD_FOLDER:"下载文件夹",RENAME:"重命名",RENAME_ELLIPSIS:"重命名...",RENAME_FILE:"重命名文件",RENAME_FOLDER:"重命名文件夹",MOVE_FILE:"移动文件",MOVE_FILES:"移动文件",MOVE_FOLDER:"移动文件夹",MOVE_FOLDERS:"移动文件夹",MOVE_FILE_AND_FOLDER:"移动文件和文件夹",MOVE_FILES_AND_FOLDER:"移动文件和文件夹",MOVE_FILE_AND_FOLDERS:"移动文件和文件夹",MOVE_FILES_AND_FOLDERS:"移动文件和文件夹",SHARE:"共享",SHARE_ELLIPSIS:"共享...",SHARE_FILE:"共享文件",SHARE_FILES:"共享文件",SEND_FILE:"发送并追踪文件",SEND_FILES:"发送并追踪文件",DELETE:"删除",HOME:"主页",ENTER_KEYWORD:"搜索",SEARCH:"搜索",SHARED:"已共享",PREVIEW_NOT_AVAILABLE:"无法预览文件类型",PREVIEW_NOT_AVAILABLE_DESC:"请<a class='preview-download' href='javascript:void(0)'>下载</a>文件进行查看。",RENAME_NAME_IN_USE:"此位置已存在名为“<%= name %>”的 <%= existingType %>。请选择其他 <%= renamedType %> 名称。",RENAME_ILLEGAL_NAME:"该名称包含非法字符或字符过多。请选择其他 <%= renamedType %> 名称。",MOVE:"移动",MOVE_FILE_TO:"将文件移动到...",MOVE_FILES_TO:"将文件移动到...",MOVE_FOLDER_TO:"将文件夹移动到...",MOVE_FOLDERS_TO:"将文件夹移动到...",MOVE_FILE_AND_FOLDER_TO:"将文件和文件夹移动到...",MOVE_FILES_AND_FOLDER_TO:"将文件和文件夹移动到...",MOVE_FILE_AND_FOLDERS_TO:"将文件和文件夹移动到...",MOVE_FILES_AND_FOLDERS_TO:"将文件和文件夹移动到...",DUPLICATE_NAME_TITLE:"复制 <%= type %> 名称",DUPLICATE_NAME_PROMPT:"此位置已存在名为“<%- name %>”的 <%= type %>。您希望如何操作？",DUPLICATE_NAME_REPLACE_EXISTING:"替换现有的 <%= type %>",DUPLICATE_NAME_RENAME_UPLOADED:"重命名上载的 <%= type %>",DUPLICATE_NAME_DELETE_MOVED:"删除移动的 <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"重命名移动的 <%= type %>",FILE_INITIAL_CAP:"文件",FILE:"文件",FOLDER_INITIAL_CAP:"文件夹",FOLDER:"文件夹",REPORT_ABUSE:"举报滥用",REPORT_ABUSE_TITLE:"举报滥用",REPORT_ABUSE_CONTENT_LABEL:"内容",REPORT_ABUSE_TITLE_LABEL:"标题",REPORT_ABUSE_DEFAMATION_LABEL:"诽谤",REPORT_ABUSE_OFFENSIVE_LABEL:"冒犯性内容",REPORT_ABUSE_EXPLICIT_LABEL:"色情内容",REPORT_ABUSE_TRADEMARK_LABEL:"商标侵权",REPORT_ABUSE_RACIST_LABEL:"带有种族主义或仇恨色彩的内容",REPORT_ABUSE_OTHER_LABEL:"其他",REPORT_ABUSE_BLURB:"如果您感觉该内容违反了 Adobe <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_cn' target='_blank'>使用条款</a>，则可以通过填写此快速表单来举报该内容。",REPORT_ABUSE_EMAIL_PROMPT:"您的电子邮件地址",REPORT_ABUSE_NAME_PROMPT:"您的姓名",REPORT_ABUSE_TARGET_TYPE_PROMPT:"您要举报什么？",REPORT_ABUSE_REASON_PROMPT:"为什么举报此内容？",REPORT_ABUSE_DESCRIPTION_PROMPT:"请提供有关您的顾虑的描述。",REPORT_ABUSE_COPYRIGHT_REPORT:"要举报版权侵权情况，请遵循<a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_cn' target='_blank'>使用条款</a>中的第 17 项。",REPORT_ABUSE_REPORT_BUTTON:"举报滥用",REPORT_ABUSE_EMAIL_ERROR:"您必须输入有效的电子邮件地址。",LANGUAGE_CHANGE:"<%= lang %>（更改）",CHOOSE_LANGUAGE:"选择您的语言",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"文件存储空间用光",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"您当前占用了 <%= using %>，您的配额为 <%= allotment %>，存储空间很快将会用完。",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"超出文件存储配额",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"您 <%= using %> 的总存储容量超出了新订阅所允许的最大 <%= allotment %> 配额。",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"无法保存上载的文件，因为它会超出 <%= allotment %> 的配额。",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"您可以查看和下载所有现有文件，但要保存额外的文件，您必须升级帐户。",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"您将需要删除部分文件以释放一些额外的空间。",QUOTA_WARNING_DLG_MSG_UPGRADE:"请升级您的帐户以获得更多存储空间及其他功能。",LEARN_MORE:"了解更多信息",UPGRADE:"升级",ERROR:"错误",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"超出最大的文件打开数量",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"您一次最多可打开 50 个文件。",HTTP_STATUS_DEFAULT_TITLE:"无法完成您的请求",HTTP_STATUS_DEFAULT_MSG:"尝试完成您的请求时出现错误，无法完成该请求。",HTTP_STATUS_DEFAULT_MSG_CEF:"连接到该服务时出现错误。请稍后重试。",HTTP_STATUS_400_TITLE:"无法完成您的请求 (400)",HTTP_STATUS_400_TITLE_CEF:"无法完成您的请求",HTTP_STATUS_400_MSG:"尝试完成您的请求时出现错误，无法完成该请求。",HTTP_STATUS_401_TITLE:"您已被注销 (401)",HTTP_STATUS_401_TITLE_CEF:"您已被注销",HTTP_STATUS_401_MSG:"您的会话已过期，并且由于处于非活动状态，您已被注销。单击下面的“登录”可重新登录。",HTTP_STATUS_401_MSG_CEF:"出现错误。请尝试注销，然后重新登录",HTTP_STATUS_403_QUOTA_TITLE:"超出存储配额 (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"超出存储配额",HTTP_STATUS_403_QUOTA_MSG:"无法上载您的文件，因为它会超出您的存储配额。您可能需要删除一些现有文件来释放更多空间。",HTTP_STATUS_403_DEL_FOLDER_TITLE:"无法删除包含内容的文件夹 (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"无法删除包含内容的文件夹",HTTP_STATUS_403_DEL_FOLDER_MSG:"您只能删除空文件夹。请在删除文件夹之前先删除其中的所有内容。",HTTP_STATUS_403_NO_SHARING_TITLE:"不允许共享 (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"不允许共享",HTTP_STATUS_403_NO_SHARING_MSG:"无法共享您的文件，因为它是音频或视频文件。",HTTP_STATUS_403_VIRUS_TITLE:"检测到病毒 (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"检测到病毒",HTTP_STATUS_403_VIRUS_MSG:"无法上载您的文件，因为它含有病毒。",HTTP_STATUS_403_ENCRYPTION_TITLE:"解密失败 (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"解密失败",HTTP_STATUS_403_ENCRYPTION_MSG:"访问您的内容时出现错误。解密失败。请联系您的 IT 管理员。",HTTP_STATUS_403_TITLE:"禁止 (403)",HTTP_STATUS_403_TITLE_CEF:"禁止",HTTP_STATUS_403_MSG:"无法完成该操作。请稍后重试。",HTTP_STATUS_404_TITLE:"找不到文件 (404)",HTTP_STATUS_404_TITLE_CEF:"找不到文件",HTTP_STATUS_404_MSG:"找不到您尝试访问的文件。该文件可能已被删除或移动到其他会话中。",HTTP_STATUS_405_TITLE:"不允许使用该方法 (405)",HTTP_STATUS_405_TITLE_CEF:"不允许使用该方法",HTTP_STATUS_405_MSG:"无法完成您的请求，因为不允许使用该方法。",HTTP_STATUS_406_TITLE:"浏览器不兼容",HTTP_STATUS_406_TITLE_CEF:"类型不受支持",HTTP_STATUS_406_MSG:"您的浏览器无法与这个网站通信。请尝试其他的浏览器（错误 406：类型不受支持）。",HTTP_STATUS_415_TITLE:"不支持的媒体类型 (415)",HTTP_STATUS_415_TITLE_CEF:"不支持的媒体类型",HTTP_STATUS_415_MSG:"无法完成您的请求，因为指定的媒体类型不受支持。",HTTP_STATUS_500_TITLE:"内部服务器错误 (500)",HTTP_STATUS_500_TITLE_CEF:"内部服务器错误",HTTP_STATUS_500_MSG:"由于出现内部服务器错误，无法完成您的请求。",HTTP_STATUS_501_TITLE:"请求未实施 (501)",HTTP_STATUS_501_TITLE_CEF:"请求未实施",HTTP_STATUS_501_MSG:"您尝试进行的请求尚未在服务器中实施。",HTTP_STATUS_503_TITLE:"服务器当前不可用 (503)",HTTP_STATUS_503_TITLE_CEF:"服务器当前不可用",HTTP_STATUS_503_MSG:"服务器无法访问，可能已停机。请稍后重试。",DOWNLOAD_FORM_TITLE:"表单文件",DOWNLOAD_FORM_MESSAGE:"您的表单文件必须转换为 PDF 才能下载。",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"您选择的项目包含不可下载的表单文件。这些文件将被排除。您可以通过选择可供下载的单个表单文件来下载 PDF 版本。",DOWNLOAD_FORMS_MESSAGE:"表单文件不可下载。您可以通过选择可供下载的单个表单文件来下载 PDF 版本。",SETTINGS:"设置",DONE:"完成",FILE_LISTS:"文件列表",STORAGE:"存储",EDIT_ACCOUNTS:"编辑帐户",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"删除帐户",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"全部下载",NOTIFICATION_UPLOADING:"正在上载...",NOTIFICATION_CONVERTING:"正在转换...",NOTIFICATION_CONVERSION_FAILURE:"转换失败",NOTIFICATION_DOWNLOAD_FAILURE:"下载失败",READY:"就绪",NOTIFICATION_WAITING:"待处理...",NOTIFICATION_DOWNLOADING:"正在下载...",NOTIFICATION_PROCESSING:"正在处理...",NOTIFICATION_DOWNLOAD_ERROR:"下载此文件时出现错误",NOTIFICATION_RETRY:"重试",YES:"是",NO:"否",REPLACE_EXISTING_FILE_TITLE:"替换现有文件",REPLACE_EXISTING_FILE_MSG:"具有此名称的文件已存在。要替换它吗？",REPLACE_EXISTING_FILE_ARIA_LABEL:"替换现有文件。是",OPEN:"打开",OPEN_FILE:"打开文件",OPEN_FILES:"打开文件",OPEN_FOLDER:"打开文件夹",SAVE_AS:"另存为",SAVE_AS_FILE:"另存为文件",SAVE_AS_FILES:"另存为 Zip",SAVED:"已保存",SHOW_IN_FOLDER:"在文件夹中显示",SEND:"发送",CONVERT_TO_PDF:"转换为 PDF",COMBINE:"合并",BROWSE_FOLDER:"浏览...",CHOOSE_DIFFERENT_FOLDER:"选择其他文件夹...",ATTACH_TO_EMAIL:"附加到电子邮件",SEND_AND_TRACK:"发送并追踪",PRINT:"打印",PUBLIC_ICON_TOOLTIP:"与 Adobe Send & Track 共享的文件",RNA_VERSION_DIALOG_TITLE:"出现错误",RNA_VERSION_DIALOG_CONTENT:"此区域中的功能连接到 Adobe Document Cloud，这些功能必须进行更新才能保持与该服务兼容。要更新至最新版本，请从“帮助”菜单中选择“检查更新”，或者单击下面的链接以继续在 Web 浏览器中工作。",RNA_VERSION_DIALOG_LINK_TITLE:"转到 Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_cn",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_cn",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_cn",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_cn",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_cn",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_cn",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_cn",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_cn",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_cn",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_cn",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_cn",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_cn",SERVER_OUTAGE_DIALOG_TITLE:"出现错误",SERVER_OUTAGE_DIALOG_CONTENT:"您尝试连接的服务暂时不可用。请稍后重试。"});