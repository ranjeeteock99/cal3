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

define({SEND_FOR_SIGN:"Send til underskrivelse",LP_TITLE:"Send til underskrivelse",LP_SUBTITLE:"Send dokumenter til underskrivelse med få enkle trin.",LP_SELECT_FILE_BTN_LABEL:"Vælg filer",LP_TITLE_NEW:"Send til underskrivelse",LP_SUBTITLE_NEW:"Få dokumenter underskrevet med det samme. Modtagerne får et link, de kan bruge til at vise og underskrive online. Der kræves hverken køb eller tilmelding.",LP_SUBTITLE2_NEW:"Spor status online for at se, hvornår filen vises og underskrives. ",LP_SUBTITLE3_NEW:"Få mere at vide",LP_TO:"Til",LP_ADD_CC:"Tilføj CC",LP_MESSAGE:"Meddelelse",LP_FILES:"Fil(er)",LP_ACTION_BTN1_LABEL_NEW:"Næste",LP_INVALID_EMAIL_ERROR:" er en ugyldig mailadresse.",LP_NO_EMAIL_ERROR:"Vælg mindst én modtager.",LP_TO_EMAIL_PLACEHOLDER:"Angiv modtagerens mail",LP_CC_EMAIL_PLACEHOLDER:"Angiv CC-mails",LP_ONLY_SENDER_EMAIL_ERROR:"Du kan ikke sende et dokument, hvor du er den eneste, der skal underskrive.",LP_NEXT_GUIDE_TEXT:"Klik på Næste for at angive, hvor modtagerne skal udfylde og underskrive.",LP_SUBJECT_PLACEHOLDER:"Navn på aftale",LP_MESSAGE_TEXT:"Gennemgå og fuldfør dette dokument.",LP_CC_LIMITS_ERROR:"Aftaler kan maksimalt have 11 CC'er.",LP_RECIPIENTS_LIMITS_ERROR:"Det maksimale antal modtagere er angivet",LP_AGREEMENT_CHARLIMITS_ERROR:"Navnet på aftalen må højst være på 255 tegn.",LP_SIGNER:"Underskriver",LP_APPROVER:"Godkender",LP_SENDER_IN_CC_ERROR:"Du kan ikke CC den samme mailadresse, som du sender fra.",LP_HELP_ICON_TEXT:"Tilføj modtagere i den rækkefølge, som du ønsker dokumentet underskrevet i.",LP_OUTVITES_ERROR:"Acceptér Adobe Sign-invitationen, som vi lige har sendt til din mail, for at starte med at bruge Adobe Sign-abonnementet fra din administrator..",LP_CC:"Cc",LP_HIDE:"Skjul",LP_LEARN_MORE_GOURL:"http://www.adobe.com/go/DCSFS_dk",LP_DOCUMENT_LIBRARY_:"Dokumentbibliotek",LP_DOCUMENT_LIBRARY_TITLE:"Tilføj filer fra dokumentbibliotek",LP_NAME:"Navn",LP_LAST_MODIFIED:"Senest ændret",LP_ATTACH:"Vedhæft",LP_SHARED_DOCUMENTS:"Delte dokumenter",LP_ADOBE_SIGN_DOCUMENTS:"Adobe Sign-dokumenter",LP_RDR_ACTION_BTN1_LABEL:"Start",LP_RDR_APP_INFO_TXT_1:"Klik på Start for at fuldføre trin til at sende til underskrivelse:",LP_RDR_APP_INFO_TXT_2:"Trin 1: Tilføj modtagere",LP_RDR_APP_INFO_TXT_3:"Trin 2: Tilføj felter, og send",LP_ACR_ACTION_BTN1_LABEL:"Forbered formular",LP_ACR_ACTION_BTN2_LABEL:"Klar til at sende",LP_ACR_ACTION_BTN_SEPARATOR:"eller",LP_ACR_ACTION_BTN1_INFO:"Tilføj filer før afsendelse",LP_ACR_ACTION_BTN2_INFO:"Upload og tilføj modtagere",SFS_SUBSCRIBE_SIGN_IN:"Log på",SFS_SUBSCRIBE_UPGRADE_NOW:"Opgrader",SFS_SUBSCRIBE_START_NOW:"Start nu",SFS_SUBSCRIBE_TITLE:"Send til underskrivelse",SFS_SUBSCRIBE_MSG_CONTENT_1:"Send dokumenter til underskrivelse med få enkle trin.",SFS_SUBSCRIBE_MSG_CONTENT_2:"Spor resultater i realtid.",SFS_SUBSCRIBE_MSG_CONTENT_3:"Skab en professionel kundeoplevelse",SFS_SUBSCRIBE_MSG_CONTENT_4:"Administrer brugerpræferencer og -indstillinger",SFS_SUBSCRIBE_UPGRADE_NOT_SUBCRIBED:"Abonnerer du ikke?",SFS_SUBSCRIBE_UPGRADE:"Opgrader",SFS_SUBSCRIBE_UPGRADE_ALREADY_SUBSCRIBED_EXPERIMENT:"Abonnerer du allerede?",SFS_SUBSCRIBE_LEARN_MORE_EXPERIMENT:"Læs mere",SFS_OFFLINE_ACCEPT_LABEL:"Luk",GENERIC_ARIA_LABEL_STRING:"<%= prefix %>. <%= suffix %>",SFS_ADD_FILES:"Tilføj filer",SELECTED_FILES:"Valgte filer",FILE_SELECT_TITLE:"Vælg filer",FILE_SELECT_ACTION_BTN:"Fortsæt",FILE_SELECT_FILTER_DESCR:"Adobe PDF-filer",SFS_PROGRESS_CANCEL_LABEL:"Annuller",DOC_PROGRESS_LABEL:"Overfører...",SFS_ERR_GENERIC_TITLE:"Kunne ikke sende",SFS_ERR_TITLE_FAILED_TO_SEND:'"<%= name %>" kunne ikke sendes.',SFS_ERR_CLOSE_BTN:"Luk",SFS_ERR_TIMEOUT_TITLE:"Fik timeout ",SFS_ERR_CONTENT_TIMEOUT_TITLE:"Der er ingen aktivitet i Send til underskrivelse-værktøjet i et stykke tid.",SFS_ERR_CONTENT_TIMEOUT_BODY:"Eventuelle ændringer er gået tabt.",SFS_ACRO_UPDGRADE_GO_URL:"http://www.adobe.com/go/collectsigacro_12_0_0_dk",SFS_RDR_UPGRADE_GO_URL:"http://www.adobe.com/go/collectsigrdr_12_0_0_dk",SFS_RDR_UPGRADE_GO_URL_RDREXP:"http://www.adobe.com/go/rdr_sfs_tc_lm_dc112017_dk",SFS_ERR_CONTENT_TITLE_UNSUPPORTED:'Ikke-understøttet fil: "<%= name %>"',SFS_ERR_CONTENT_TITLE_UNSUPPORTED_N:'Ikke-understøttede filer: "<%= name %>"',SFS_ERR_CONTENT_BODY_UNSUPPORTED:"Vælg en anden fil, og prøv igen",SFS_ERR_GENERAL_WORKFLOW_FAILURE:"Der opstod en fejl. Prøv igen.",SFS_ERR_LARGE_FILE_SIZE:"Dit dokument overskrider den maksimale størrelse af filer, der understøttes for dit abonnementniveau. Prøv et andet dokument, eller kontakt din systemadministrator.",SFS_ERR_ENTERPRISE_SERVICE_ACCS_DENIED:"Du har ikke adgang til denne tjeneste. Kontakt din IT-administrator for at få adgang, eller prøv at logge på med et Adobe ID.",SFS_ERR_PREPARE_FORM_MUL_FILES_SEL:"Du har valgt mere end én fil. Hvis du vil sende flere filer til underskrivelse, skal de kombineres til én fil.",SFS_ERR_ES_AUTO_LOGIN_DENIED:"Kan ikke logge på tjenesten for at sende til underskrivelse. Du bedes kontakte kundeservice.",SFS_FILE_NOT_SENT:"Filen er ikke sendt",SFS_MULTIPLE_WORKFLOWS_DENIED:"En anden fil sendes i et andet vindue. Afslut afsendelsen af den anden fil, og prøv igen.",SFS_ERR_OK_BUTTON:"OK",NO:"NEJ",YES:"JA",SFS_COMBINE_MESSAGE_TITLE:"Filerne kombineres",SFS_COMBINE_MESSAGE_TEXT:"Du har valgt mere end én fil. Alle filer kombineres til én enkelt PDF til klargøring af formular. Vil du fortsætte og kombinere alle filer?",SFS_FILES_NOT_COMBINED_ERROR_TITLE:"Fejl",SFS_FILES_NOT_COMBINED_ERROR:"Der opstod en fejl under filkombination. Kontrollér de valgte filer, og prøv igen.",SEND_REMOVE:"Fjern"});