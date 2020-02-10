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

define({ACTIONS:"Toimet",ACTIONS_UC:"TOIMINNOT",ADDED:"Lisätty",ADD_ACCOUNT:"Lisää tili",BACK:"Takaisin",CLOSE:"Sulje",CONTINUE:"Jatka",EXTENSION:"(.<%- ext %>)",FILES:"Tiedostot",FILE_NAME:"Tiedoston nimi",FOLDER_NAME:"Kansion nimi",LOCATION:"Sijainti",MODIFIED:"Muokattu",NAME:"Nimi",OR:"tai",PROPERTIES:"Ominaisuudet",PROPERTIES_UC:"OMINAISUUDET",REMOVE:"Poista",SELECT_FILES:"Valitse tiedostot",SELECT_FILE:"Valitse tiedosto",SIZE:"Koko",SELECT_ALL:"Valitse kaikki",TOTAL_FILES:"Tiedostoja yhteensä",N_ITEMS_CLICK_TO_VIEW:"<%= num %> kohdetta. Tarkastele napsauttamalla.",CREATED_DATE:"Lisäyspäivä",MODIFIED_DATE:"Muokattu",VIEWED_DATE:"Avaamispvm",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Eilen",DATE_MM_DD_YYYY:"<%= day %>.<%= month %>.<%= year %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",YYYY:"YYYY",AM:"AM",PM:"PM",HH:"H",HH_MM_SEPARATOR:".",MM:"M",DD:"D",ANIMATION:"Animaatio",AUDIO:"Ääni",CALENDAR:"Kalenteri",CASCADING_STYLE_SHEET:"CSS-tyylisivu",CERTIFICATE:"Sertifikaatti",FONT:"Fontti",IMAGE:"Kuva",PLAIN_TEXT:"Vain teksti",PRESENTATION:"Esitys",RICH_TEXT:"Rich Text",SPREADSHEET:"Laskentataulukko",STYLE_SHEET:"Tyylisivu",TEXT:"Teksti",UNKNOWN:"Tuntematon",VIDEO:"Video",KB:"<%= num %> kt",MB:"<%= num %> Mt",GB:"<%= num %> Gt",DECIMAL_SEPARATOR:",",THOUSANDS_SEPARATOR:" ",FILE_NAME_CONTAINS:"Tiedostonimessä on",FILE_TYPE_IS:"Tiedostotyyppi on",FILE_CONTENT:"Tiedostossa on",DATE_LAST_MODIFIED:"Edellinen muokkaus",DATE_LAST_VIEWED:"Edellinen avaamiskerta",DATE_ADDED:"Lisäyspäivä on",FILE_ADDED_BY:"Tiedoston on lisännyt",MIN_SIZE:"Vähimmäiskoko",MAX_SIZE:"Enimmäiskoko",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Luo PDF",EXPORT_PDF:"Vie PDF",COMBINE_PDF:"Yhdistä PDF",FILL_SIGN:"Täytä ja allekirjoita",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Tänään",YESTERDAY:"Eilen",WITHIN_LAST_WEEK:"Viime viikolla",WITHIN_LAST_MONTH:"Viime kuussa",ONE_TO_TWO_MONTHS_AGO:"1–2 kuukautta sitten",TWO_TO_THREE_MONTHS_AGO:"2–3 kuukautta sitten",THREE_TO_FOUR_MONTHS_AGO:"3–4 kuukautta sitten",FOUR_TO_FIVE_MONTHS_AGO:"4–5 kuukautta sitten",FIVE_TO_SIX_MONTHS_AGO:"5–6 kuukautta sitten",SIX_TO_TWELVE_MONTHS_AGO:"6–12 kuukautta sitten",MORE_THAN_ONE_YEAR_AGO:"Yli vuosi sitten",OK:"OK",CANCEL:"Peruuta",CONFIRM_DELETE_TITLE:"Poista",CONFIRM_DELETE_MSG_ONE_ITEM:"Haluatko varmasti poistaa tämän kohteen?",CONFIRM_DELETE_MSG_N_ITEMS:"Haluatko varmasti poistaa nämä <%= numItems %> kohdetta?",DOWNLOAD:"Lataa",DOWNLOAD_FILE:"Lataa tiedosto",DOWNLOAD_FILES:"Lataa tiedostot",DOWNLOAD_FOLDER:"Lataa kansio",RENAME:"Nimeä uudelleen",RENAME_ELLIPSIS:"Nimeä uudelleen...",RENAME_FILE:"Nimeä tiedosto uudelleen",RENAME_FOLDER:"Nimeä kansio uudelleen",MOVE_FILE:"Siirrä tiedosto",MOVE_FILES:"Siirrä tiedostot",MOVE_FOLDER:"Siirrä kansio",MOVE_FOLDERS:"Siirrä kansioita",MOVE_FILE_AND_FOLDER:"Siirrä tiedosto ja kansio",MOVE_FILES_AND_FOLDER:"Siirrä tiedostot ja kansio",MOVE_FILE_AND_FOLDERS:"Siirrä tiedosto ja kansiot",MOVE_FILES_AND_FOLDERS:"Siirrä tiedostot ja kansiot",SHARE:"Jaa",SHARE_ELLIPSIS:"Jaa...",SHARE_FILE:"Jaa tiedosto",SHARE_FILES:"Jaa tiedostot",SEND_FILE:"Lähetä tiedosto ja seuraa sitä",SEND_FILES:"Lähetä tiedostoja ja seuraa niitä",DELETE:"Poista",HOME:"Aloitus",ENTER_KEYWORD:"Etsi",SEARCH:"Etsi",SHARED:"Jaettu",PREVIEW_NOT_AVAILABLE:"Tiedostotyyppiä ei voi esikatsella",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Lataa</a> tiedosto esikatselua varten.",RENAME_NAME_IN_USE:'Tässä sijainnissa on jo <%= existingType %> nimeltä "<%= name %>". Valitse toinen nimi (<%= renamedType %>).',RENAME_ILLEGAL_NAME:"Nimessä on liikaa tai virheellisiä merkkejä. Valitse toinen <%= renamedType %>nimi.",MOVE:"Siirrä",MOVE_FILE_TO:"Siirrä tiedosto kohteeseen...",MOVE_FILES_TO:"Siirrä tiedostot kohteeseen...",MOVE_FOLDER_TO:"Siirrä kansio kohteeseen...",MOVE_FOLDERS_TO:"Siirrä kansiot kohteeseen....",MOVE_FILE_AND_FOLDER_TO:"Siirrä tiedosto ja kansio kohteeseen...",MOVE_FILES_AND_FOLDER_TO:"Siirrä tiedostot ja kansio kohteeseen...",MOVE_FILE_AND_FOLDERS_TO:"Siirrä tiedosto ja kansiot kohteeseen...",MOVE_FILES_AND_FOLDERS_TO:"Siirrä tiedostot ja kansiot kohteeseen...",DUPLICATE_NAME_TITLE:"Sama nimi (<%= type %>)",DUPLICATE_NAME_PROMPT:'Tässä sijainnissa on jo <%= type %> nimeltä "<%- name %>"\n Mitä haluat tehdä?',DUPLICATE_NAME_REPLACE_EXISTING:"Korvaa nykyinen <%= type %>",DUPLICATE_NAME_RENAME_UPLOADED:"Nimeä ladattu <%= type %> uudelleen",DUPLICATE_NAME_DELETE_MOVED:"Poista siirretty <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"Nimeä siirretty <%= type %> uudelleen",FILE_INITIAL_CAP:"Tiedosto",FILE:"tiedosto",FOLDER_INITIAL_CAP:"Kansio",FOLDER:"kansio",REPORT_ABUSE:"Ilmoita väärinkäytöstä",REPORT_ABUSE_TITLE:"Ilmoita väärinkäytöstä",REPORT_ABUSE_CONTENT_LABEL:"Sisältö",REPORT_ABUSE_TITLE_LABEL:"Otsikko",REPORT_ABUSE_DEFAMATION_LABEL:"Herjaus",REPORT_ABUSE_OFFENSIVE_LABEL:"Loukkaava sisältö",REPORT_ABUSE_EXPLICIT_LABEL:"Seksuaalinen sisältö",REPORT_ABUSE_TRADEMARK_LABEL:"Tavaramerkkiloukkaus",REPORT_ABUSE_RACIST_LABEL:"Rasistinen tai vihasisältö",REPORT_ABUSE_OTHER_LABEL:"Muu",REPORT_ABUSE_BLURB:"Jos olet sitä mieltä, että tämä sisältö ei ole Adoben <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>käyttöehtojen</a> mukainen, voit ilmoittaa sisällöstä täyttämällä tämän pikalomakkeen.",REPORT_ABUSE_EMAIL_PROMPT:"Sähköpostiosoitteesi",REPORT_ABUSE_NAME_PROMPT:"Nimesi",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Mitä ilmoituksesi koskee?",REPORT_ABUSE_REASON_PROMPT:"Miksi teet ilmoituksen tästä sisällöstä?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Kirjoita kuvaus asiasta.",REPORT_ABUSE_COPYRIGHT_REPORT:"Jos haluat ilmoittaa tekijänoikeuksien loukkauksesta, toimi <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>käyttöehtojen</a> kohdassa 17 kuvatulla tavalla.",REPORT_ABUSE_REPORT_BUTTON:"Ilmoita väärinkäytöstä",REPORT_ABUSE_EMAIL_ERROR:"Sinun on annettava kelvollinen sähköpostiosoite.",LANGUAGE_CHANGE:"<%= lang %> (muuta)",CHOOSE_LANGUAGE:"Valitse kieli",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Tiedostojen tallennustila on loppumassa",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Käytössäsi on <%= using %> sinulle varatusta tilasta (<%= allotment %>), joten  tallennustilasi loppuu pian.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Tiedostojen tallennustila ylitettiin",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Koko tallennustilasi <%= using %> on suurempi kuin uuden tilauksesi sallima enimmäismäärä <%= allotment %>.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"Palveluun ladattua tiedostoa ei voitu tallentaa, koska se ylittäisi sinulle varatun tilan (<%= allotment %>).",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Voit tarkastella ja ladata palvelusta kaikkia aiempia tiedostoja, mutta jos haluat tallentaa lisätiedostoja, sinun täytyy päivittää tilisi.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Sinun täytyy vapauttaa tilaa poistamalla joitakin tiedostoja.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Päivitä tilillesi enemmän tilaa ja lisäominaisuuksia.",LEARN_MORE:"Lisätietoja",UPGRADE:"Päivitä",ERROR:"Virhe",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Tiedostoja on avattu enimmäismäärä",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Voit avata enintään 50 tiedostoa kerralla.",HTTP_STATUS_DEFAULT_TITLE:"Pyyntöäsi ei voitu toteuttaa",HTTP_STATUS_DEFAULT_MSG:"Yritettäessä toteuttaa pyyntöäsi ilmeni virhe. Pyyntöäsi ei voitu toteuttaa.",HTTP_STATUS_DEFAULT_MSG_CEF:"Yhdistettäessä palveluun tapahtui virhe. Yritä myöhemmin uudelleen.",HTTP_STATUS_400_TITLE:"Pyyntöäsi ei voitu toteuttaa (400)",HTTP_STATUS_400_TITLE_CEF:"Pyyntöäsi ei voitu toteuttaa",HTTP_STATUS_400_MSG:"Yritettäessä toteuttaa pyyntöäsi ilmeni virhe. Pyyntöäsi ei voitu toteuttaa.",HTTP_STATUS_401_TITLE:"Sinut on kirjattu ulos (401)",HTTP_STATUS_401_TITLE_CEF:"Sinut on kirjattu ulos",HTTP_STATUS_401_MSG:"Istuntosi on vanhentunut ja sinut on kirjattu ulos toimettomuuden vuoksi. Voit kirjautua takaisin sisään valitsemalla alla Kirjaudu sisään.",HTTP_STATUS_401_MSG_CEF:"Tapahtui virhe. Yritä kirjautua ulos ja sitten takaisin sisään",HTTP_STATUS_403_QUOTA_TITLE:"Tallennustilakiintiö ylitettiin (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Tallennuskiintiö ylitettiin",HTTP_STATUS_403_QUOTA_MSG:"Tiedostoa ei voitu ladata, koska se ylittäisi tallennustilakiintiön. Voit vapauttaa tilaa poistamalla aiempia tiedostoja.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Kansiota, jossa on sisältöä, ei voi poistaa (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Kansiota, jossa on sisältöä, ei voi poistaa",HTTP_STATUS_403_DEL_FOLDER_MSG:"Voit poistaa vain tyhjiä kansioita. Poista kaikki sisältö, ennen kuin poistat kansion.",HTTP_STATUS_403_NO_SHARING_TITLE:"Jakaminen on estetty (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Jakamista ei sallita",HTTP_STATUS_403_NO_SHARING_MSG:"Tiedostoasi ei voitu jakaa, koska kyseessä on ääni- tai videotiedosto.",HTTP_STATUS_403_VIRUS_TITLE:"Havaittiin virus (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Virus havaittu",HTTP_STATUS_403_VIRUS_MSG:"Tiedostoa ei voitu ladata, koska siinä on virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"Salauksen purkaminen epäonnistui. (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"Salauksen purkaminen epäonnistui",HTTP_STATUS_403_ENCRYPTION_MSG:"Sisältöä avattaessa tapahtui virhe. Salauksen purkaminen epäonnistui. Ota yhteyttä järjestelmänvalvojaan.",HTTP_STATUS_403_TITLE:"Kielletty (403)",HTTP_STATUS_403_TITLE_CEF:"Estetty",HTTP_STATUS_403_MSG:"Toimintoa ei voitu suorittaa. Yritä myöhemmin uudelleen.",HTTP_STATUS_404_TITLE:"Tiedostoa ei löydy (404)",HTTP_STATUS_404_TITLE_CEF:"Tiedostoa ei löytynyt",HTTP_STATUS_404_MSG:"Tiedostoa, jota yrität käyttää, ei löydy. Tiedosto on ehkä poistettu tai siirretty toisessa istunnossa.",HTTP_STATUS_405_TITLE:"Menetelmää ei sallita (405)",HTTP_STATUS_405_TITLE_CEF:"Menetelmää ei sallita",HTTP_STATUS_405_MSG:"Pyyntöäsi ei voitu toteuttaa, sillä menetelmää ei sallita.",HTTP_STATUS_406_TITLE:"Selaimen yhteensopimattomuus",HTTP_STATUS_406_TITLE_CEF:"Tyyppiä ei tueta",HTTP_STATUS_406_MSG:"Selaimesi ei voi olla yhteydessä tähän sivustoon. Kokeile toista selainta. (Virhe 406: Tyyppiä ei tueta).",HTTP_STATUS_415_TITLE:"Mediatyyppiä ei tueta (415)",HTTP_STATUS_415_TITLE_CEF:"Mediatyyppiä ei tueta",HTTP_STATUS_415_MSG:"Pyyntöäsi ei voitu toteuttaa, sillä määritettyä mediatyyppiä ei tueta.",HTTP_STATUS_500_TITLE:"Sisäinen palvelinvirhe (500)",HTTP_STATUS_500_TITLE_CEF:"Sisäinen palvelinvirhe",HTTP_STATUS_500_MSG:"Pyyntöäsi ei voitu toteuttaa sisäisen palvelinvirheen vuoksi.",HTTP_STATUS_501_TITLE:"Pyyntö ei ole vielä käytettävissä (501)",HTTP_STATUS_501_TITLE_CEF:"Pyyntöä ei ole käytettävissä",HTTP_STATUS_501_MSG:"Pyyntö, jota yrität tehdä, ei ole vielä käytettävissä palvelimessa.",HTTP_STATUS_503_TITLE:"Palvelin ei ole nyt käytettävissä (503)",HTTP_STATUS_503_TITLE_CEF:"Palvelin ei ole nyt tavoitettavissa",HTTP_STATUS_503_MSG:"Palvelimeen ei saatu yhteyttä, joten se voi olla pois käytöstä. Yritä myöhemmin uudelleen.",DOWNLOAD_FORM_TITLE:"Lomaketiedosto",DOWNLOAD_FORM_MESSAGE:"Lomaketiedosto täytyy muuntaa PDF-muotoon lataamista varten.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Valintaasi kuuluu lomaketiedostoja, joita ei voi ladata. Nämä tiedostot poistetaan valinnasta. Voit ladata niiden PDF-versiot valitsemalla yksittäisen lomaketiedoston ladattavaksi.",DOWNLOAD_FORMS_MESSAGE:"Lomaketiedostoja ei voi ladata. Voit ladata niiden PDF-versiot valitsemalla yksittäisen lomaketiedoston ladattavaksi.",SETTINGS:"Asetukset",DONE:"Valmis",FILE_LISTS:"Tiedostoluettelot",STORAGE:"Tallennussijainti",EDIT_ACCOUNTS:"Muokkaa tilejä",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Poista tili",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"Lataa kaikki",NOTIFICATION_UPLOADING:"Ladataan...",NOTIFICATION_CONVERTING:"Muunnetaan...",NOTIFICATION_CONVERSION_FAILURE:"Muuntovirhe",NOTIFICATION_DOWNLOAD_FAILURE:"Latausvirhe",READY:"Valmis",NOTIFICATION_WAITING:"Odottaa...",NOTIFICATION_DOWNLOADING:"Ladataan...",NOTIFICATION_PROCESSING:"Käsitellään...",NOTIFICATION_DOWNLOAD_ERROR:"Tiedostoa ladattaessa tapahtui virhe",NOTIFICATION_RETRY:"Yritä uudelleen",YES:"Kyllä",NO:"Ei",REPLACE_EXISTING_FILE_TITLE:"Korvaa olemassa oleva tiedosto",REPLACE_EXISTING_FILE_MSG:"Tämänniminen tiedosto on jo olemassa. Haluatko korvata sen?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Korvaa nykyinen tiedosto. Kyllä",OPEN:"Avaa",OPEN_FILE:"Avaa tiedosto",OPEN_FILES:"Avaa tiedostot",OPEN_FOLDER:"Avaa kansio",SAVE_AS:"Tallenna nimellä",SAVE_AS_FILE:"Tallenna tiedostona",SAVE_AS_FILES:"Tallenna ZIP-tiedostona",SAVED:"Tallennettu",SHOW_IN_FOLDER:"Näytä kansiossa",SEND:"Lähetä",CONVERT_TO_PDF:"Muunna PDF-muotoon",COMBINE:"Yhdistä",BROWSE_FOLDER:"Selaa...",CHOOSE_DIFFERENT_FOLDER:"Valitse toinen kansio...",ATTACH_TO_EMAIL:"Liitä sähköpostiin",SEND_AND_TRACK:"Lähetä ja seuraa",PRINT:"Tulosta",PUBLIC_ICON_TOOLTIP:"Tiedosto jaettu Adobe Send & Trackilla",RNA_VERSION_DIALOG_TITLE:"Tapahtui virhe",RNA_VERSION_DIALOG_CONTENT:"Tässä alueessa olevat ominaisuudet muodostavat yhteyden Adobe Document Cloud -palveluun, ja ne täytyy päivittää, jotta ne pysyvät yhteensopivana palvelun kanssa. Päivitä uusimpaan versioon valitsemalla Ohje-valikosta Etsi päivityksiä tai napsauta alla olevaa linkkiä, niin voit jatkaa työskentelyä web-selaimessa.",RNA_VERSION_DIALOG_LINK_TITLE:"Siirry Document Cloudiin",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_fi",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_fi",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_fi",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_fi",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_fi",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_fi",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_fi",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_fi",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_fi",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_fi",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_fi",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_fi",SERVER_OUTAGE_DIALOG_TITLE:"Tapahtui virhe",SERVER_OUTAGE_DIALOG_CONTENT:"Palvelu, johon yrität muodostaa yhteyttä, on tilapäisesti poissa käytöstä. Yritä myöhemmin uudelleen. "});