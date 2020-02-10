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

define({ACTIONS:"Akcije",ACTIONS_UC:"AKCIJE",ADDED:"Dodano",ADD_ACCOUNT:"Dodaj račun",BACK:"Natrag",CLOSE:"Zatvori",CONTINUE:"Nastavi",EXTENSION:"(.<%- ext %>)",FILES:"Datoteke",FILE_NAME:"Naziv datoteke",FOLDER_NAME:"Naziv mape",LOCATION:"Lokaciji",MODIFIED:"Izmijenjeno",NAME:"Naziv",OR:"ili",PROPERTIES:"Svojstva",PROPERTIES_UC:"SVOJSTVA",REMOVE:"Ukloni",SELECT_FILES:"Odaberi datoteke",SELECT_FILE:"Odaberi datoteku",SIZE:"Veličina",SELECT_ALL:"Odaberi sve",TOTAL_FILES:"Ukupni broj datoteka",N_ITEMS_CLICK_TO_VIEW:"Broj stavki: <%= num %>. Pritisnite za prikaz.",CREATED_DATE:"Datum dodavanja",MODIFIED_DATE:"Datum izmjene",VIEWED_DATE:"Datum prikaza",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Jučer",DATE_MM_DD_YYYY:"<%= month %>/<%= day %>/<%= year %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",YYYY:"GGGG",AM:"AM",PM:"PM",HH:"H",HH_MM_SEPARATOR:":",MM:"M",DD:"D",ANIMATION:"Animacija",AUDIO:"Audio",CALENDAR:"Kalendar",CASCADING_STYLE_SHEET:"Kaskadni list stila",CERTIFICATE:"Certifikat",FONT:"Font",IMAGE:"Slika",PLAIN_TEXT:"Običan tekst",PRESENTATION:"Prezentacija",RICH_TEXT:"Obogaćeni tekst",SPREADSHEET:"Proračunska tablica",STYLE_SHEET:"List stila",TEXT:"Tekst",UNKNOWN:"Nepoznato",VIDEO:"Videozapis",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:".",THOUSANDS_SEPARATOR:",",FILE_NAME_CONTAINS:"Naziv datoteke sadrži",FILE_TYPE_IS:"Vrsta datoteke je",FILE_CONTENT:"Datoteka sadrži",DATE_LAST_MODIFIED:"Datum zadnje izmjene je",DATE_LAST_VIEWED:"Datum zadnjeg pregleda",DATE_ADDED:"Datum dodavanja je",FILE_ADDED_BY:"Datoteku dodao/la",MIN_SIZE:"Min. veličina",MAX_SIZE:"Maks. veličina",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Stvori PDF",EXPORT_PDF:"Izvezi PDF",COMBINE_PDF:"Kombiniraj PDF",FILL_SIGN:"Ispuni i potpiši",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Danas",YESTERDAY:"Jučer",WITHIN_LAST_WEEK:"Iz zadnjeg tjedna",WITHIN_LAST_MONTH:"Iz zadnjeg mjeseca",ONE_TO_TWO_MONTHS_AGO:"Prije 1-2 mjeseci",TWO_TO_THREE_MONTHS_AGO:"Prije 2-3 mjeseca",THREE_TO_FOUR_MONTHS_AGO:"Prije 3-4 mjeseca",FOUR_TO_FIVE_MONTHS_AGO:"Prije 4-5 mjeseci",FIVE_TO_SIX_MONTHS_AGO:"Prije 5-6 mjeseci",SIX_TO_TWELVE_MONTHS_AGO:"Prije 6-12 mjeseci",MORE_THAN_ONE_YEAR_AGO:"Prije više od 1 godine",OK:"U redu",CANCEL:"Odustani",CONFIRM_DELETE_TITLE:"Izbriši",CONFIRM_DELETE_MSG_ONE_ITEM:"Jeste li sigurni da želite izbrisati ovu stavku?",CONFIRM_DELETE_MSG_N_ITEMS:"Jeste li sigurni da želite izbrisati ove stavke (<%= numItems %>)?",DOWNLOAD:"Preuzmi",DOWNLOAD_FILE:"Preuzmi datoteku",DOWNLOAD_FILES:"Preuzmi datoteke",DOWNLOAD_FOLDER:"Preuzmi mapu",RENAME:"Preimenuj",RENAME_ELLIPSIS:"Preimenuj...",RENAME_FILE:"Preimenuj datoteku",RENAME_FOLDER:"Preimenuj mapu",MOVE_FILE:"Premjesti datoteku",MOVE_FILES:"Premjesti datoteke",MOVE_FOLDER:"Premjesti mapu",MOVE_FOLDERS:"Premjesti mape",MOVE_FILE_AND_FOLDER:"Premjesti datoteku i mapu",MOVE_FILES_AND_FOLDER:"Premjesti datoteke i mapu",MOVE_FILE_AND_FOLDERS:"Premjesti datoteku i mape",MOVE_FILES_AND_FOLDERS:"Premjesti datoteke i mape",SHARE:"Podijeli",SHARE_ELLIPSIS:"Podijeli...",SHARE_FILE:"Podijeli datoteku",SHARE_FILES:"Podijeli datoteke",SEND_FILE:"Pošalji i prati datoteku",SEND_FILES:"Pošalji i prati datoteke",DELETE:"Izbriši",HOME:"Početna",ENTER_KEYWORD:"Traži",SEARCH:"Traži",SHARED:"Podijeljeno",PREVIEW_NOT_AVAILABLE:"Vrsta datoteke ne može se pregledati",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Preuzmite</a> datoteku za prikaz.",RENAME_NAME_IN_USE:'<%= existingType %> datoteka pod nazivom "<%= name %>" već postoji na ovoj lokaciji. Odaberite drugi naziv za <%= renamedType %> datoteku.',RENAME_ILLEGAL_NAME:"Naziv sadrži nedopuštene znakove ili sadrži previše znakova. Odaberite drugi naziv za <%= renamedType %> datoteku.",MOVE:"Premjesti",MOVE_FILE_TO:"Premještanje datoteke u...",MOVE_FILES_TO:"Premještanje datoteka u...",MOVE_FOLDER_TO:"Premještanje mape u...",MOVE_FOLDERS_TO:"Premještanje mapa u...",MOVE_FILE_AND_FOLDER_TO:"Premještanje datoteke i mape u...",MOVE_FILES_AND_FOLDER_TO:"Premještanje datoteka i mape u...",MOVE_FILE_AND_FOLDERS_TO:"Premještanje datoteka i mapa u...",MOVE_FILES_AND_FOLDERS_TO:"Premještanje datoteka i mapa u...",DUPLICATE_NAME_TITLE:"Dupliciraj naziv <%= type %> datoteke",DUPLICATE_NAME_PROMPT:'<%= type %> pod nazivom "<%- name %>" već postoji na ovoj lokaciji. Što želite učiniti?',DUPLICATE_NAME_REPLACE_EXISTING:"Zamijeni postojeću <%= type %> datoteku",DUPLICATE_NAME_RENAME_UPLOADED:"Promijeni naziv učitane <%= type %> datoteke",DUPLICATE_NAME_DELETE_MOVED:"Izbriši premješteno <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"Promijeni naziv premještene <%= type %> datoteke",FILE_INITIAL_CAP:"Datoteka",FILE:"datoteka",FOLDER_INITIAL_CAP:"Mapa",FOLDER:"mapa",REPORT_ABUSE:"Prijavi zloupotrebu",REPORT_ABUSE_TITLE:"Prijavi zloupotrebu",REPORT_ABUSE_CONTENT_LABEL:"Sadržaj",REPORT_ABUSE_TITLE_LABEL:"Naslov",REPORT_ABUSE_DEFAMATION_LABEL:"Kleveta",REPORT_ABUSE_OFFENSIVE_LABEL:"Uvredljiv sadržaj",REPORT_ABUSE_EXPLICIT_LABEL:"Seksualno eksplicitan sadržaj",REPORT_ABUSE_TRADEMARK_LABEL:"Zloupotreba trgovačkih znakova",REPORT_ABUSE_RACIST_LABEL:"Rasistički ili diskriminacijski sadržaj",REPORT_ABUSE_OTHER_LABEL:"Ostalo",REPORT_ABUSE_BLURB:"Mislite li da ovaj sadržaj krši Adobe <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Uvjete upotrebe</a>, možete ga prijaviti tako da ispunite ovaj kratak obrazac.",REPORT_ABUSE_EMAIL_PROMPT:"Vaša adresa e-pošte",REPORT_ABUSE_NAME_PROMPT:"Vaše ime",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Što prijavljujete?",REPORT_ABUSE_REASON_PROMPT:"Zbog čega prijavljujete ovaj sadržaj?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Navedite opis problema.",REPORT_ABUSE_COPYRIGHT_REPORT:"Želite li prijaviti kršenje autorskih prava, pratite Odjeljak 17 iz <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Uvjeta upotrebe</a>.",REPORT_ABUSE_REPORT_BUTTON:"Prijavi zloupotrebu",REPORT_ABUSE_EMAIL_ERROR:"Morate unijeti valjanu adresu e-pošte.",LANGUAGE_CHANGE:"<%= lang %> (promijeni)",CHOOSE_LANGUAGE:"Odaberite jezik",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Ponestaje prostora u spremištu za datoteke",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Trenutno koristite <%= using %> prostora od <%= allotment %> koji vam je dodijeljen te će vam uskoro ponestati prostora.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Prekoračeno spremište za datoteke",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Ukupno spremište od <%= using %> prekoračuje maksimalni dopušteni kapacitet za vašu pretplatu od <%= allotment %>.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"Učitana datoteka nije se mogla spremiti jer bi to prekoračilo dodijeljenu kvotu od <%= allotment %>.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Možete pregledati i preuzeti sve postojeće datoteke, no ako želite spremiti dodatne datoteke, morat ćete nadograditi svoj račun.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Morat ćete izbrisati dio datoteka kako biste oslobodili dodatni prostor.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Nadogradite račun kako biste dobili više prostora i dodatne značajke.",LEARN_MORE:"Saznajte više",UPGRADE:"Nadogradi",ERROR:"Pogreška",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Prekoračen maksimalan broj otvorenih datoteka",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Odjednom možete otvoriti najviše 50 datoteka.",HTTP_STATUS_DEFAULT_TITLE:"Zahtjev se nije mogao dovršiti",HTTP_STATUS_DEFAULT_MSG:"Prilikom dovršetka vašeg zahtjeva došlo je do pogreške i zahtjev se nije mogao dovršiti.",HTTP_STATUS_DEFAULT_MSG_CEF:"Prilikom povezivanja sa servisom došlo je do pogreške. Pokušajte ponovo kasnije.",HTTP_STATUS_400_TITLE:"Zahtjev se nije mogao dovršiti (400)",HTTP_STATUS_400_TITLE_CEF:"Zahtjev se nije mogao dovršiti",HTTP_STATUS_400_MSG:"Prilikom dovršetka vašeg zahtjeva došlo je do pogreške i zahtjev se nije mogao dovršiti.",HTTP_STATUS_401_TITLE:"Odjavljeni ste (401)",HTTP_STATUS_401_TITLE_CEF:"Odjavljeni ste",HTTP_STATUS_401_MSG:'Sesija je istekla i odjavljeni ste zbog neaktivnosti. Pritisnite "Prijava" u nastavku kako biste se ponovo prijavili.',HTTP_STATUS_401_MSG_CEF:"Došlo je do pogreške. Odjavite se te se zatim ponovo prijavite",HTTP_STATUS_403_QUOTA_TITLE:"Prekoračena kvota za spremanje (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Prekoračena kvota za spremanje",HTTP_STATUS_403_QUOTA_MSG:"Datoteka se nije mogla učitati jer bi to prekoračilo kvotu za spremanje. Možete izbrisati neke od postojećih datoteka kako biste oslobodili prostor.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Mapa u kojoj ima sadržaja ne može se izbrisati (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Mapa u kojoj ima sadržaja ne može se izbrisati",HTTP_STATUS_403_DEL_FOLDER_MSG:"Izbrisati možete samo prazne mape. Prije brisanja mape izbrišite sav sadržaj koji se u njoj nalazi.",HTTP_STATUS_403_NO_SHARING_TITLE:"Dijeljenje nije dopušteno (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Dijeljenje nije dopušteno",HTTP_STATUS_403_NO_SHARING_MSG:"Mapa se nije mogla podijeliti jer se radi o audio ili videodatoteci.",HTTP_STATUS_403_VIRUS_TITLE:"Prepoznat virus (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Prepoznat virus",HTTP_STATUS_403_VIRUS_MSG:"Datoteka se ne može učitati jer sadrži virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"Dešifriranje nije uspjelo (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"Dešifriranje nije uspjelo",HTTP_STATUS_403_ENCRYPTION_MSG:"Došlo je do pogreške kod pristupanja sadržaju. Dešifriranje nije uspjelo. Obratite se svom IT administratoru.",HTTP_STATUS_403_TITLE:"Zabranjeno (403)",HTTP_STATUS_403_TITLE_CEF:"Zabranjeno",HTTP_STATUS_403_MSG:"Operacija se nije mogla dovršiti. Pokušajte ponovo kasnije.",HTTP_STATUS_404_TITLE:"Datoteka nije pronađena (404)",HTTP_STATUS_404_TITLE_CEF:"Datoteka nije pronađena",HTTP_STATUS_404_MSG:"Datoteka kojoj pokušavate pristupiti nije pronađena. Možda je izbrisana ili premještena u drugoj sesiji.",HTTP_STATUS_405_TITLE:"Metoda nije dopuštena (405)",HTTP_STATUS_405_TITLE_CEF:"Metoda nije dopuštena",HTTP_STATUS_405_MSG:"Zahtjev se nije mogao dovršiti jer metoda nije dopuštena.",HTTP_STATUS_406_TITLE:"Preglednik nije kompatibilan",HTTP_STATUS_406_TITLE_CEF:"Vrsta nije podržana",HTTP_STATUS_406_MSG:"Vaš preglednik ne može komunicirati s ovim web-mjestom. Pokušajte s drugim preglednikom. (Pogreška 406: Vrsta nije podržana).",HTTP_STATUS_415_TITLE:"Nepodržana vrsta multimedijskog sadržaja (415)",HTTP_STATUS_415_TITLE_CEF:"Nepodržana vrsta multimedijskog sadržaja",HTTP_STATUS_415_MSG:"Zahtjev se nije mogao dovršiti jer navedena vrsta multimedijskog sadržaja nije podržana.",HTTP_STATUS_500_TITLE:"Interna pogreška poslužitelja (500)",HTTP_STATUS_500_TITLE_CEF:"Interna pogreška poslužitelja",HTTP_STATUS_500_MSG:"Zahtjev se ne može ispuniti zbog interne pogreške poslužitelja.",HTTP_STATUS_501_TITLE:"Zahtjev nije implementiran (501)",HTTP_STATUS_501_TITLE_CEF:"Zahtjev nije implementiran",HTTP_STATUS_501_MSG:"Zahtjev koji pokušavate uputiti još nije implementiran na poslužitelju.",HTTP_STATUS_503_TITLE:"Poslužitelj trenutno nije dostupan (503)",HTTP_STATUS_503_TITLE_CEF:"Poslužitelj trenutno nije dostupan",HTTP_STATUS_503_MSG:"Pristup poslužitelju nije uspio, poslužitelj možda nije dostupan. Pokušajte ponovo kasnije.",DOWNLOAD_FORM_TITLE:"Datoteka obrasca",DOWNLOAD_FORM_MESSAGE:"Vaša datoteka obrasca mora se pretvoriti u PDF kako biste je mogli preuzeti.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Odabir uključuje datoteke obrazaca koje nisu dostupne za preuzimanje. Te će se datoteke isključiti. Možete preuzeti PDF verzije tako da za preuzimanje odaberete jednu datoteku obrasca.",DOWNLOAD_FORMS_MESSAGE:"Datoteke obrazaca nisu dostupne za preuzimanje. Možete preuzeti PDF verzije tako da za preuzimanje odaberete jednu datoteku obrasca.",SETTINGS:"Postavke",DONE:"Gotovo",FILE_LISTS:"Popisi datoteka",STORAGE:"Spremište",EDIT_ACCOUNTS:"Uredi račune",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Ukloni račun",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"Preuzmi sve",NOTIFICATION_UPLOADING:"Učitavanje...",NOTIFICATION_CONVERTING:"Pretvorba...",NOTIFICATION_CONVERSION_FAILURE:"Pretvorba nije uspjela",NOTIFICATION_DOWNLOAD_FAILURE:"Neuspjelo preuzimanje",READY:"Spreman",NOTIFICATION_WAITING:"U pripremi...",NOTIFICATION_DOWNLOADING:"Preuzimanje...",NOTIFICATION_PROCESSING:"Obrada...",NOTIFICATION_DOWNLOAD_ERROR:"Prilikom preuzimanja datoteke došlo je do pogreške",NOTIFICATION_RETRY:"Pokušaj ponovo",YES:"Da",NO:"Ne",REPLACE_EXISTING_FILE_TITLE:"Zamijeni postojeću datoteku",REPLACE_EXISTING_FILE_MSG:"Već postoji datoteka pod tim nazivom. Želite li je zamijeniti?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Zamijeni postojeću datoteku. Da",OPEN:"Otvori",OPEN_FILE:"Otvori datoteku",OPEN_FILES:"Otvori datoteke",OPEN_FOLDER:"Otvori mapu",SAVE_AS:"Spremi kao",SAVE_AS_FILE:"Spremi kao datoteku",SAVE_AS_FILES:"Spremi kao zip",SAVED:"Spremljeno",SHOW_IN_FOLDER:"Prikaži u mapi",SEND:"Pošalji",CONVERT_TO_PDF:"Pretvori u PDF",COMBINE:"Kombiniraj",BROWSE_FOLDER:"Pregled...",CHOOSE_DIFFERENT_FOLDER:"Odaberite drugu mapu...",ATTACH_TO_EMAIL:"Priloži e-pošti",SEND_AND_TRACK:"Pošalji i prati",PRINT:"Ispiši",PUBLIC_ICON_TOOLTIP:"Datoteka podijeljena pomoću Adobe Pošalji i prati",RNA_VERSION_DIALOG_TITLE:"Došlo je do pogreške",RNA_VERSION_DIALOG_CONTENT:"Značajke u ovom području povezuju se sa servisom Adobe Document Cloud i moraju se ažurirati kako bi bile kompatibilne sa servisom. Želite li ažurirati na najnoviju verziju, na izborniku Pomoć odaberite Provjeri ažuriranja ili pritisnite vezu u nastavku kako biste nastavili raditi u web-pregledniku.",RNA_VERSION_DIALOG_LINK_TITLE:"Idi na Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_hr",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_hr",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_hr",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_hr",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_hr",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_hr",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_hr",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_hr",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_hr",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_hr",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_hr",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_hr",SERVER_OUTAGE_DIALOG_TITLE:"Došlo je do pogreške",SERVER_OUTAGE_DIALOG_CONTENT:"Usluga kojoj pokušavate pristupiti trenutno nije dostupna. Pokušajte ponovo kasnije."});