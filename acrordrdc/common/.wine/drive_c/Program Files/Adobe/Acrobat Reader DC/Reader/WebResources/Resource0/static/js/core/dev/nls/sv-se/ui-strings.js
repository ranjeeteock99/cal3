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

define({ACTIONS:"Åtgärder",ACTIONS_UC:"ÅTGÄRDER",ADDED:"Tillagd",ADD_ACCOUNT:"Lägg till konto",BACK:"Bakåt",CLOSE:"Stäng",CONTINUE:"Fortsätt",EXTENSION:"(.<%- ext %>)",FILES:"Filer",FILE_NAME:"Filnamn",FOLDER_NAME:"Mappnamn",LOCATION:"Plats",MODIFIED:"Ändrad",NAME:"Namn",OR:"eller",PROPERTIES:"Egenskaper",PROPERTIES_UC:"EGENSKAPER",REMOVE:"Ta bort",SELECT_FILES:"Välj filer",SELECT_FILE:"Välj fil",SIZE:"Storlek",SELECT_ALL:"Markera allt",TOTAL_FILES:"Totalt antal filer",N_ITEMS_CLICK_TO_VIEW:"<%= num %> objekt. Klicka för att visa.",CREATED_DATE:"Tillagd",MODIFIED_DATE:"Ändrad",VIEWED_DATE:"Visat den",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Igår",DATE_MM_DD_YYYY:"<%= year %>-<%= month %>-<%= day %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",YYYY:"YYYY",AM:"AM",PM:"PM",HH:"HH",HH_MM_SEPARATOR:":",MM:"MM",DD:"D",ANIMATION:"Animering",AUDIO:"Ljud",CALENDAR:"Kalender",CASCADING_STYLE_SHEET:"Stilmall",CERTIFICATE:"Certifikat",FONT:"Teckensnitt",IMAGE:"Bild",PLAIN_TEXT:"Oformaterad text",PRESENTATION:"Presentation",RICH_TEXT:"Rich Text",SPREADSHEET:"Kalkylblad",STYLE_SHEET:"Formatmall",TEXT:"Text",UNKNOWN:"Okänd",VIDEO:"Video",KB:"<%= num %> kB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:",",THOUSANDS_SEPARATOR:" ",FILE_NAME_CONTAINS:"Filnamn innehåller",FILE_TYPE_IS:"Filtyp är",FILE_CONTENT:"Filen innehåller",DATE_LAST_MODIFIED:"Datum för senaste ändring är",DATE_LAST_VIEWED:"Datum för senaste visning är",DATE_ADDED:"Datum då filen lagts till är",FILE_ADDED_BY:"Fil tillagd av",MIN_SIZE:"Min storlek",MAX_SIZE:"Max storlek",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Skapa PDF",EXPORT_PDF:"Exportera PDF",COMBINE_PDF:"Slå samman PDF",FILL_SIGN:"Fyll i och signera",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Idag",YESTERDAY:"Igår",WITHIN_LAST_WEEK:"Senaste veckan",WITHIN_LAST_MONTH:"Senaste månaden",ONE_TO_TWO_MONTHS_AGO:"1-2 månader sedan",TWO_TO_THREE_MONTHS_AGO:"2-3 månader sedan",THREE_TO_FOUR_MONTHS_AGO:"3-4 månader sedan",FOUR_TO_FIVE_MONTHS_AGO:"4-5 månader sedan",FIVE_TO_SIX_MONTHS_AGO:"5-6 månader sedan",SIX_TO_TWELVE_MONTHS_AGO:"6-12 månader sedan",MORE_THAN_ONE_YEAR_AGO:"1+ år sedan",OK:"OK",CANCEL:"Avbryt",CONFIRM_DELETE_TITLE:"Ta bort",CONFIRM_DELETE_MSG_ONE_ITEM:"Vill du ta bort det här objektet?",CONFIRM_DELETE_MSG_N_ITEMS:"Vill du ta bort dessa <%= numItems %> objekt?",DOWNLOAD:"Hämta",DOWNLOAD_FILE:"Hämta fil",DOWNLOAD_FILES:"Hämta filer",DOWNLOAD_FOLDER:"Hämta mapp",RENAME:"Ändra namn",RENAME_ELLIPSIS:"Ändra namn...",RENAME_FILE:"Ändra namn på fil",RENAME_FOLDER:"Ändra namn på mapp",MOVE_FILE:"Flytta fil",MOVE_FILES:"Flytta filer",MOVE_FOLDER:"Flytta mapp",MOVE_FOLDERS:"Flytta mappar",MOVE_FILE_AND_FOLDER:"Flytta fil och mapp",MOVE_FILES_AND_FOLDER:"Flytta filer och mapp",MOVE_FILE_AND_FOLDERS:"Flytta fil och mappar",MOVE_FILES_AND_FOLDERS:"Flytta filer och mappar",SHARE:"Dela",SHARE_ELLIPSIS:"Dela...",SHARE_FILE:"Dela fil",SHARE_FILES:"Dela filer",SEND_FILE:"Skicka och spåra fil",SEND_FILES:"Skicka och spåra filer",DELETE:"Ta bort",HOME:"Hem",ENTER_KEYWORD:"Sök",SEARCH:"Sök",SHARED:"Delad",PREVIEW_NOT_AVAILABLE:"Det går inte att förhandsvisa filtypen",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Hämta</a> filen när du vill visa den.",RENAME_NAME_IN_USE:'En <%= existingType %> med namnet "<%= name %>" finns redan på denna plats. Välj ett annat <%= renamedType %>namn.',RENAME_ILLEGAL_NAME:"Namnet innehåller ogiltiga tecken eller består av för många tecken. Välj ett annat <%= renamedType %>namn.",MOVE:"Flytta",MOVE_FILE_TO:"Flytta fil till...",MOVE_FILES_TO:"Flytta filer till...",MOVE_FOLDER_TO:"Flytta mapp till...",MOVE_FOLDERS_TO:"Flytta mappar till...",MOVE_FILE_AND_FOLDER_TO:"Flytta fil och mapp till...",MOVE_FILES_AND_FOLDER_TO:"Flytta filer och mapp till...",MOVE_FILE_AND_FOLDERS_TO:"Flytta fil och mappar till...",MOVE_FILES_AND_FOLDERS_TO:"Flytta filer och mappar till...",DUPLICATE_NAME_TITLE:"Duplicerat <%= type %>namn",DUPLICATE_NAME_PROMPT:'En <%= type %> med namnet "<%- name %>" finns redan på denna plats. Vad vill du göra?',DUPLICATE_NAME_REPLACE_EXISTING:"Ersätt befintlig <%= type %>",DUPLICATE_NAME_RENAME_UPLOADED:"Byt namn på överförd <%= type %>",DUPLICATE_NAME_DELETE_MOVED:"Ta bort flyttad <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"Byt namn på flyttad <%= type %>",FILE_INITIAL_CAP:"Fil",FILE:"fil",FOLDER_INITIAL_CAP:"Mapp",FOLDER:"mapp",REPORT_ABUSE:"Rapportera missbruk",REPORT_ABUSE_TITLE:"Rapportera missbruk",REPORT_ABUSE_CONTENT_LABEL:"Innehåll",REPORT_ABUSE_TITLE_LABEL:"Titel",REPORT_ABUSE_DEFAMATION_LABEL:"Förtal",REPORT_ABUSE_OFFENSIVE_LABEL:"Anstötligt innehåll",REPORT_ABUSE_EXPLICIT_LABEL:"Sexistiskt innehåll",REPORT_ABUSE_TRADEMARK_LABEL:"Varumärkesintrång",REPORT_ABUSE_RACIST_LABEL:"Rasistiskt eller hatfullt innehåll",REPORT_ABUSE_OTHER_LABEL:"Annat",REPORT_ABUSE_BLURB:"Om du tycker att innehållet bryter mot Adobes <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>användningsvillkor</a> kan du rapportera det genom att fylla i detta snabbformulär.",REPORT_ABUSE_EMAIL_PROMPT:"Din e-postadress",REPORT_ABUSE_NAME_PROMPT:"Ditt namn",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Vad vill du rapportera?",REPORT_ABUSE_REASON_PROMPT:"Varför rapporterar du detta innehåll?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Beskriv problemet så detaljerat som möjligt.",REPORT_ABUSE_COPYRIGHT_REPORT:"Om du vill anmäla upphovsrättsbrott ska du följa anvisningarna i avsnitt 17 i <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>användningsvillkoren</a>.",REPORT_ABUSE_REPORT_BUTTON:"Rapportera missbruk",REPORT_ABUSE_EMAIL_ERROR:"Du måste ange en giltig e-postadress.",LANGUAGE_CHANGE:"<%= lang %> (Ändra)",CHOOSE_LANGUAGE:"Välj ett språk",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Lagringsutrymmet börjar ta slut",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Du använder för närvarande <%= using %> av dina tilldelade <%= allotment %> och lagringsutrymmet kommer snart att ta slut.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Lagringsutrymmet har överskridits",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Din totala lagringsmängd är <%= using %> vilket är större än maximalt tillåten mängd på <%= allotment %> enligt din nya prenumeration.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"Den överförda filen kunde inte sparas eftersom detta skulle innebära att tilldelningen på <%= allotment %> skulle överskridas.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Du kan visa och hämta alla befintliga filer, men för att spara fler filer måste du uppgradera ditt konto.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Du kommer att behöva ta bort några filer för att frigöra ytterligare utrymme.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Uppgradera ditt konto för att få mer lagringsutrymme och ytterligare funktioner.",LEARN_MORE:"Mer information",UPGRADE:"Uppgradera",ERROR:"Fel",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"För många filer har öppnats",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Du kan som mest öppna 50 filer samtidigt.",HTTP_STATUS_DEFAULT_TITLE:"Det gick inte att slutföra din begäran",HTTP_STATUS_DEFAULT_MSG:"Det inträffade ett fel när din begäran skulle slutföras och det gick inte att slutföra den.",HTTP_STATUS_DEFAULT_MSG_CEF:"Ett fel inträffade vid anslutning till tjänsten. Försök igen senare.",HTTP_STATUS_400_TITLE:"Det gick inte att slutföra din begäran (400)",HTTP_STATUS_400_TITLE_CEF:"Det gick inte att slutföra din begäran",HTTP_STATUS_400_MSG:"Det inträffade ett fel när din begäran skulle slutföras och det gick inte att slutföra den.",HTTP_STATUS_401_TITLE:"Du har loggats ut (401)",HTTP_STATUS_401_TITLE_CEF:"Du har loggats ut",HTTP_STATUS_401_MSG:'Din session har upphört att gälla och du har loggats ut på grund av inaktivitet. Klicka på "Logga in" för att logga in på nytt.',HTTP_STATUS_401_MSG_CEF:"Ett fel inträffade. Prova med att logga ut och logga in igen",HTTP_STATUS_403_QUOTA_TITLE:"Lagringskvot har överskridits (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Lagringskvoten har överskridits",HTTP_STATUS_403_QUOTA_MSG:"Filen kunde inte överföras eftersom din lagringskvot då skulle överskridas. Du kan ta bort befintliga filer för att få mer utrymme.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Det går inte att ta bort en mapp med innehåll (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Det går inte att ta bort en mapp med innehåll",HTTP_STATUS_403_DEL_FOLDER_MSG:"Du kan bara ta bort tomma mappar. Ta bort allt innehåll innan du tar bort mappen.",HTTP_STATUS_403_NO_SHARING_TITLE:"Delning tillåts inte (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Delning tillåts inte",HTTP_STATUS_403_NO_SHARING_MSG:"Din fil kan inte delas eftersom det är en ljud - eller videofil.",HTTP_STATUS_403_VIRUS_TITLE:"Virus har upptäckts (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Virus har identifierats",HTTP_STATUS_403_VIRUS_MSG:"Det gick inte att överföra filen eftersom den innehåller ett virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"Dekrypteringen misslyckades (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"Dekrypteringen misslyckades",HTTP_STATUS_403_ENCRYPTION_MSG:"Det går inte att komma åt innehållet. Dekrypteringen misslyckades. Kontakta IT-administratören.",HTTP_STATUS_403_TITLE:"Förbjuden (403)",HTTP_STATUS_403_TITLE_CEF:"Förbjudet",HTTP_STATUS_403_MSG:"Operationen kunde inte slutföras. Försök igen senare.",HTTP_STATUS_404_TITLE:"Filen hittades inte (404)",HTTP_STATUS_404_TITLE_CEF:"Filen hittades inte",HTTP_STATUS_404_MSG:"Det går inte att hitta den fil som du letar efter. Filen kan ha tagits bort eller flyttats i en annan session.",HTTP_STATUS_405_TITLE:"Otillåten metod (405)",HTTP_STATUS_405_TITLE_CEF:"Otillåten metod",HTTP_STATUS_405_MSG:"Din begäran kan inte slutföras eftersom metoden inte är tillåten.",HTTP_STATUS_406_TITLE:"Inkompatibel webbläsare",HTTP_STATUS_406_TITLE_CEF:"Typen stöds inte",HTTP_STATUS_406_MSG:"Webbläsaren kan inte kommunicera med webbplatsen. Prova en annan webbläsare. (Fel 406: Typen stöds inte).",HTTP_STATUS_415_TITLE:"Medietyp stöd inte (415)",HTTP_STATUS_415_TITLE_CEF:"Medietypen stöds inte",HTTP_STATUS_415_MSG:"Din begäran kan inte slutföras eftersom den angivna medietypen inte stöds.",HTTP_STATUS_500_TITLE:"Internt serverfel (500)",HTTP_STATUS_500_TITLE_CEF:"Internt serverfel",HTTP_STATUS_500_MSG:"Din begäran kan inte slutföras på grund av ett internt serverfel.",HTTP_STATUS_501_TITLE:"Begäran har ej implementerats (501)",HTTP_STATUS_501_TITLE_CEF:"Begäran ej implementerad",HTTP_STATUS_501_MSG:"Den begäran som du försöker göra har ännu inte implementerats på servern.",HTTP_STATUS_503_TITLE:"Servern är för tillfället inte tillgänglig (503)",HTTP_STATUS_503_TITLE_CEF:"Servern är inte tillgänglig just nu",HTTP_STATUS_503_MSG:"Servern kunde inte hittas och den kan vara avstängd. Försök igen senare.",DOWNLOAD_FORM_TITLE:"Formulärfil",DOWNLOAD_FORM_MESSAGE:"Din formulärfil måste konverteras till PDF för att kunna hämtas.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Markeringen innehåller formulärfiler, som inte är tillgängliga för nedladdning. Dessa filer kommer att exkluderas. Du kan ladda ned PDF-versioner genom att markera en enskild formulärfil för nedladdning.",DOWNLOAD_FORMS_MESSAGE:"Formulärfiler är inte tillgängliga för nedladdning. Du kan ladda ned PDF-versioner genom att markera en enskild formulärfil för nedladdning.",SETTINGS:"Inställningar",DONE:"Klart",FILE_LISTS:"Fillistor",STORAGE:"Lagring",EDIT_ACCOUNTS:"Redigera konton",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Ta bort konto",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"Hämta alla",NOTIFICATION_UPLOADING:"Skickar...",NOTIFICATION_CONVERTING:"Konverterar…",NOTIFICATION_CONVERSION_FAILURE:"Konverteringsfel",NOTIFICATION_DOWNLOAD_FAILURE:"Nedladdningsfel",READY:"Klar",NOTIFICATION_WAITING:"Väntar...",NOTIFICATION_DOWNLOADING:"Hämtar...",NOTIFICATION_PROCESSING:"Bearbetar...",NOTIFICATION_DOWNLOAD_ERROR:"Ett fel uppstod när filen hämtades",NOTIFICATION_RETRY:"Försök igen",YES:"Ja",NO:"Nej",REPLACE_EXISTING_FILE_TITLE:"Ersätt befintlig fil",REPLACE_EXISTING_FILE_MSG:"Det finns redan en fil med det här namnet. Vill du ersätta den?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Ersätt befintlig fil. Ja",OPEN:"Öppna",OPEN_FILE:"Öppna fil",OPEN_FILES:"Öppna filer",OPEN_FOLDER:"Öppna mapp",SAVE_AS:"Spara som",SAVE_AS_FILE:"Spara som fil",SAVE_AS_FILES:"Spara som ZIP-fil",SAVED:"Sparad",SHOW_IN_FOLDER:"Visa i mapp",SEND:"Skicka",CONVERT_TO_PDF:"Konvertera till PDF",COMBINE:"Kombinera",BROWSE_FOLDER:"Bläddra...",CHOOSE_DIFFERENT_FOLDER:"Välj en annan mapp...",ATTACH_TO_EMAIL:"Bifoga till e-postmeddelande",SEND_AND_TRACK:"Skicka och spåra",PRINT:"Skriv ut",PUBLIC_ICON_TOOLTIP:"Filen delas med Adobe Send & Track",RNA_VERSION_DIALOG_TITLE:"Ett fel inträffade ",RNA_VERSION_DIALOG_CONTENT:"Funktioner i det här området ansluter till Adobe Document Cloud och måste uppdateras för att vara kompatibla med tjänsten. Om du vill uppdatera till den senaste versionen, väljer du Sök efter uppdateringar på Hjälp-menyn eller klickar på länken nedan för att fortsätta att arbeta i webbläsaren.",RNA_VERSION_DIALOG_LINK_TITLE:"Gå till Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_se",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_se",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_se",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_se",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_se",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_se",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_se",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_se",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_se",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_se",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_se",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_se",SERVER_OUTAGE_DIALOG_TITLE:"Ett fel inträffade ",SERVER_OUTAGE_DIALOG_CONTENT:"Tjänsten som du försöker nå är för tillfället inte tillgänglig. Försök igen senare."});