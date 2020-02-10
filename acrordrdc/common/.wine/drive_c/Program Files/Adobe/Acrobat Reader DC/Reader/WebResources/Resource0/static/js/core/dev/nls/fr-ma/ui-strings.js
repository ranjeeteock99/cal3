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

define({ACTIONS:"Actions",ACTIONS_UC:"ACTIONS",ADDED:"Ajouté",ADD_ACCOUNT:"Ajouter un compte",BACK:"Précédent",CLOSE:"Fermer",CONTINUE:"Continuer",EXTENSION:"(.<%- ext %>)",FILES:"Fichiers",FILE_NAME:"Nom du fichier",FOLDER_NAME:"Nom de dossier",LOCATION:"Emplacement",MODIFIED:"Modifié",NAME:"Nom",OR:"ou",PROPERTIES:"Propriétés",PROPERTIES_UC:"PROPRIÉTÉS",REMOVE:"Effacer",SELECT_FILES:"Sélectionner des fichiers",SELECT_FILE:"Sélectionner un fichier",SIZE:"Taille",SELECT_ALL:"Tout sélectionner",TOTAL_FILES:"Total de fichiers",N_ITEMS_CLICK_TO_VIEW:"<%= num %> éléments. Cliquez pour les afficher.",CREATED_DATE:"Date d’ajout",MODIFIED_DATE:"Date modif.",VIEWED_DATE:"Consultation",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Hier",DATE_MM_DD_YYYY:"<%= day %>/<%= month %>/<%= year %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",YYYY:"YYYY",AM:"AM",PM:"PM",HH:"HH",HH_MM_SEPARATOR:":",MM:"MM",DD:"D",ANIMATION:"Animation",AUDIO:"Audio",CALENDAR:"Calendrier",CASCADING_STYLE_SHEET:"Feuille de style en cascade",CERTIFICATE:"Certificat",FONT:"Police",IMAGE:"Image",PLAIN_TEXT:"Texte brut",PRESENTATION:"Présentation",RICH_TEXT:"Texte enrichi",SPREADSHEET:"Feuille de calcul",STYLE_SHEET:"Feuille de style",TEXT:"Texte",UNKNOWN:"Inconnu",VIDEO:"Vidéo",KB:"<%= num %> Ko",MB:"<%= num %> Mo",GB:"<%= num %> Go",DECIMAL_SEPARATOR:",",THOUSANDS_SEPARATOR:" ",FILE_NAME_CONTAINS:"Le nom du fichier contient",FILE_TYPE_IS:"Type de fichier",FILE_CONTENT:"Le fichier contient",DATE_LAST_MODIFIED:"Dernière modification ",DATE_LAST_VIEWED:"Date de dernière consultation",DATE_ADDED:"Date d’ajout",FILE_ADDED_BY:"Fichier ajouté par",MIN_SIZE:"Taille min.",MAX_SIZE:"Taille max.",FILTER_DISPLAY_VALUE:"<%= field %> : <%= value %>",CREATE_PDF:"Créer un PDF",EXPORT_PDF:"Exporter au format PDF",COMBINE_PDF:"Combiner PDF",FILL_SIGN:"Remplir et signer",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Aujourd’hui",YESTERDAY:"Hier",WITHIN_LAST_WEEK:"Semaine passée",WITHIN_LAST_MONTH:"Mois passé",ONE_TO_TWO_MONTHS_AGO:"1-2 mois auparavant",TWO_TO_THREE_MONTHS_AGO:"2-3 mois auparavant",THREE_TO_FOUR_MONTHS_AGO:"3-4 mois auparavant",FOUR_TO_FIVE_MONTHS_AGO:"4-5 mois auparavant",FIVE_TO_SIX_MONTHS_AGO:"5-6 mois auparavant",SIX_TO_TWELVE_MONTHS_AGO:"6-12 mois auparavant",MORE_THAN_ONE_YEAR_AGO:"Plus d’1 an auparavant",OK:"OK",CANCEL:"Annuler",CONFIRM_DELETE_TITLE:"Supprimer",CONFIRM_DELETE_MSG_ONE_ITEM:"Voulez-vous vraiment supprimer cet élément ?",CONFIRM_DELETE_MSG_N_ITEMS:"Voulez-vous vraiment supprimer ces <%= numItems %> éléments ?",DOWNLOAD:"Télécharger",DOWNLOAD_FILE:"Télécharger le fichier",DOWNLOAD_FILES:"Télécharger les fichiers",DOWNLOAD_FOLDER:"Télécharger le dossier",RENAME:"Renommer",RENAME_ELLIPSIS:"Renommer...",RENAME_FILE:"Renommer le fichier",RENAME_FOLDER:"Renommer le dossier",MOVE_FILE:"Déplacer le fichier",MOVE_FILES:"Déplacer les fichiers",MOVE_FOLDER:"Déplacer le dossier",MOVE_FOLDERS:"Déplacer les dossiers",MOVE_FILE_AND_FOLDER:"Déplacer le fichier et le dossier",MOVE_FILES_AND_FOLDER:"Déplacer les fichiers et le dossier",MOVE_FILE_AND_FOLDERS:"Déplacer le fichier et les dossiers",MOVE_FILES_AND_FOLDERS:"Déplacer les fichiers et les dossiers",SHARE:"Partager",SHARE_ELLIPSIS:"Partager...",SHARE_FILE:"Partager le fichier",SHARE_FILES:"Partager les fichiers",SEND_FILE:"Envoi et suivi du fichier",SEND_FILES:"Envoi et suivi des fichiers",DELETE:"Supprimer",HOME:"Accueil",ENTER_KEYWORD:"Rechercher",SEARCH:"Rechercher",SHARED:"Partagé",PREVIEW_NOT_AVAILABLE:"Impossible de prévisualiser le type de fichier",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Téléchargez</a> le fichier pour affichage.",RENAME_NAME_IN_USE:"Le <%= existingType %> nommé <%= name %> existe déjà à cet emplacement. Choisissez un autre nom <%= renamedType %>.",RENAME_ILLEGAL_NAME:"Le nom contient des caractères non autorisés ou comporte trop de caractères. Sélectionnez un autre nom de <%= renamedType %>.",MOVE:"Déplacer",MOVE_FILE_TO:"Déplacer le fichier vers...",MOVE_FILES_TO:"Déplacer les fichiers vers...",MOVE_FOLDER_TO:"Déplacer le dossier vers...",MOVE_FOLDERS_TO:"Déplacer les dossiers vers...",MOVE_FILE_AND_FOLDER_TO:"Déplacer le fichier et le dossier vers...",MOVE_FILES_AND_FOLDER_TO:"Déplacer les fichiers et le dossier vers...",MOVE_FILE_AND_FOLDERS_TO:"Déplacer le fichier et les dossiers vers...",MOVE_FILES_AND_FOLDERS_TO:"Déplacer les fichiers et les dossiers vers...",DUPLICATE_NAME_TITLE:"Dupliquer le nom <%= type %>",DUPLICATE_NAME_PROMPT:"Un <%= type %> nommé « <%- name %> » existe déjà à cet emplacement. Que souhaitez-vous faire ?",DUPLICATE_NAME_REPLACE_EXISTING:"Remplacer le <%= type %> existant",DUPLICATE_NAME_RENAME_UPLOADED:"Renommer le <%= type %> transféré",DUPLICATE_NAME_DELETE_MOVED:"Supprimer le <%= type %> déplacé",DUPLICATE_NAME_RENAME_MOVED:"Renommer le <%= type %> déplacé",FILE_INITIAL_CAP:"Fichier",FILE:"fichier",FOLDER_INITIAL_CAP:"Dossier",FOLDER:"dossier",REPORT_ABUSE:"Signaler un abus",REPORT_ABUSE_TITLE:"Signaler un abus",REPORT_ABUSE_CONTENT_LABEL:"Contenu",REPORT_ABUSE_TITLE_LABEL:"Titre",REPORT_ABUSE_DEFAMATION_LABEL:"Diffamation",REPORT_ABUSE_OFFENSIVE_LABEL:"Contenu offensant",REPORT_ABUSE_EXPLICIT_LABEL:"Contenu explicite du point de vue sexuel",REPORT_ABUSE_TRADEMARK_LABEL:"Contrefaçon de marque de commerce",REPORT_ABUSE_RACIST_LABEL:"Contenu raciste ou incitant à la haine",REPORT_ABUSE_OTHER_LABEL:"Autre",REPORT_ABUSE_BLURB:"Si vous avez l’impression que ce contenu enfreint les <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Conditions d’utilisation</a> d’Adobe, vous pouvez signaler ce contenu en complétant ce formulaire rapide.",REPORT_ABUSE_EMAIL_PROMPT:"Votre adresse électronique",REPORT_ABUSE_NAME_PROMPT:"Votre nom",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Quel type de problème souhaitez-vous signaler ?",REPORT_ABUSE_REASON_PROMPT:"Pour quel motif signalez-vous ce contenu ?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Décrivez le problème.",REPORT_ABUSE_COPYRIGHT_REPORT:"Pour signaler une violation des droits d’auteur, reportez-vous à la Section 17 des <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Conditions d’utilisation</a>.",REPORT_ABUSE_REPORT_BUTTON:"Signaler un abus",REPORT_ABUSE_EMAIL_ERROR:"Vous devez entrer une adresse électronique valide.",LANGUAGE_CHANGE:"<%= lang %> (Changer)",CHOOSE_LANGUAGE:"Choix de la langue",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Capacité de stockage des fichiers presque épuisée",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Vous utilisez actuellement <%= using %> de la capacité de stockage qui vous est allouée (<%= allotment %>) et elle sera bientôt épuisée.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Capacité de stockage des fichiers dépassée",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Votre capacité de stockage totale (<%= using %>) dépasse la capacité maximale auquel vous avez droit avec votre nouvel abonnement (<%= allotment %>).",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"Le fichier transféré n’a pas pu être enregistré, car la capacité de stockage qui vous est allouée (<%= allotment %>) aurait été dépassée.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Vous pouvez afficher et télécharger tous les fichiers existants, mais pour enregistrer d’autres fichiers, vous devez mettre votre compte à niveau.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Vous devez supprimer des fichiers pour libérer de l’espace.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Mettez votre compte à niveau pour bénéficier d’une capacité de stockage supérieure et de fonctionnalités supplémentaires.",LEARN_MORE:"En savoir plus",UPGRADE:"Mettre à niveau",ERROR:"Erreur",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Maximum de fichiers ouverts dépassé",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Vous ne pouvez pas ouvrir plus de 50 fichiers à la fois.",HTTP_STATUS_DEFAULT_TITLE:"Impossible de mener à bien votre demande",HTTP_STATUS_DEFAULT_MSG:"Une erreur s’est produite lors du traitement de votre demande, qui n’a pas pu être exécutée.",HTTP_STATUS_DEFAULT_MSG_CEF:"Une erreur s’est produite lors de la connexion au service. Réessayez ultérieurement.",HTTP_STATUS_400_TITLE:"Impossible d’exécuter votre demande (400)",HTTP_STATUS_400_TITLE_CEF:"Impossible de mener à bien votre demande",HTTP_STATUS_400_MSG:"Une erreur s’est produite lors du traitement de votre demande, qui n’a pas pu être exécutée.",HTTP_STATUS_401_TITLE:"Vous avez été déconnecté. (401)",HTTP_STATUS_401_TITLE_CEF:"Vous avez été déconnecté.",HTTP_STATUS_401_MSG:"Votre session a expiré et vous avez été déconnecté pour inactivité. Cliquez sur Se connecter ci-dessous pour ouvrir une nouvelle session.",HTTP_STATUS_401_MSG_CEF:"Une erreur s’est produite. Déconnectez-vous, puis connectez-vous de nouveau.",HTTP_STATUS_403_QUOTA_TITLE:"Quota de stockage dépassé (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Quota de stockage dépassé",HTTP_STATUS_403_QUOTA_MSG:"Votre fichier n’a pas pu être téléchargé, car votre quota de stockage serait dépassé. Supprimez des fichiers existants pour libérer de l’espace.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Impossible de supprimer le dossier avec du contenu (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Impossible de supprimer le dossier avec du contenu",HTTP_STATUS_403_DEL_FOLDER_MSG:"Vous pouvez uniquement supprimer les dossiers vides. Supprimez tout le contenu avant de supprimer le dossier.",HTTP_STATUS_403_NO_SHARING_TITLE:"Partage non autorisé (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Partage non autorisé",HTTP_STATUS_403_NO_SHARING_MSG:"Impossible de partager votre fichier car il s’agit d’un fichier audio ou vidéo.",HTTP_STATUS_403_VIRUS_TITLE:"Virus détecté (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Virus détecté",HTTP_STATUS_403_VIRUS_MSG:"Impossible de transférer le fichier car il contient un virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"Echec du déchiffrement (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"Echec du déchiffrement",HTTP_STATUS_403_ENCRYPTION_MSG:"Erreur lors de l’accès à votre contenu. Echec du déchiffrement. Contactez votre administrateur informatique.",HTTP_STATUS_403_TITLE:"Interdit (403)",HTTP_STATUS_403_TITLE_CEF:"Interdit",HTTP_STATUS_403_MSG:"L’opération n’a pas pu être effectuée. Réessayez ultérieurement.",HTTP_STATUS_404_TITLE:"Fichier introuvable (404)",HTTP_STATUS_404_TITLE_CEF:"Fichier introuvable",HTTP_STATUS_404_MSG:"Le fichier auquel vous tentez d’accéder est introuvable. Il a peut-être été supprimé ou déplacé dans une autre session.",HTTP_STATUS_405_TITLE:"Méthode non autorisée (405)",HTTP_STATUS_405_TITLE_CEF:"Méthode non autorisée",HTTP_STATUS_405_MSG:"Impossible d’exécuter votre demande, car la méthode n’est pas autorisée.",HTTP_STATUS_406_TITLE:"Incompatibilité du navigateur",HTTP_STATUS_406_TITLE_CEF:"Type non pris en charge",HTTP_STATUS_406_MSG:"Votre navigateur ne peut pas communiquer avec ce site Web. Essayez un autre navigateur. (Erreur 406 : Type non pris en charge).",HTTP_STATUS_415_TITLE:"Type de support non pris en charge (415)",HTTP_STATUS_415_TITLE_CEF:"Type de média non pris en charge",HTTP_STATUS_415_MSG:"Impossible d’exécuter votre demande, car le type de média spécifié n’est pas pris en charge.",HTTP_STATUS_500_TITLE:"Erreur de serveur interne (500)",HTTP_STATUS_500_TITLE_CEF:"Erreur interne du serveur",HTTP_STATUS_500_MSG:"Impossible d’exécuter votre demande en raison d’une erreur de serveur interne.",HTTP_STATUS_501_TITLE:"Demande non mise en œuvre (501)",HTTP_STATUS_501_TITLE_CEF:"Demande non mise en application",HTTP_STATUS_501_MSG:"La demande que vous tentez d’effectuer n’est pas encore mise en œuvre dans le serveur.",HTTP_STATUS_503_TITLE:"Serveur actuellement indisponible (503)",HTTP_STATUS_503_TITLE_CEF:"Serveur actuellement indisponible",HTTP_STATUS_503_MSG:"Le serveur est inaccessible, il est peut-être arrêté. Réessayez ultérieurement.",DOWNLOAD_FORM_TITLE:"Fichier de formulaire",DOWNLOAD_FORM_MESSAGE:"Votre fichier de formulaire doit être converti au format PDF pour être téléchargé.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Votre sélection contient des fichiers de formulaire, qui ne peuvent pas être téléchargés. Ces fichiers seront exclus. Vous pouvez télécharger des versions PDF en sélectionnant un seul fichier de formulaire à télécharger.",DOWNLOAD_FORMS_MESSAGE:"Les fichiers de formulaire ne peuvent pas être téléchargés. Vous pouvez télécharger des versions PDF en sélectionnant un seul fichier de formulaire à télécharger.",SETTINGS:"Paramètres",DONE:"Terminé",FILE_LISTS:"Listes de fichiers",STORAGE:"Stockage",EDIT_ACCOUNTS:"Modifier les comptes",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Supprimer le compte",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"Tout télécharger",NOTIFICATION_UPLOADING:"Téléchargement...",NOTIFICATION_CONVERTING:"Conversion...",NOTIFICATION_CONVERSION_FAILURE:"Echec de la conversion",NOTIFICATION_DOWNLOAD_FAILURE:"Echec du téléchargement",READY:"Prêt",NOTIFICATION_WAITING:"En attente...",NOTIFICATION_DOWNLOADING:"Téléchargement...",NOTIFICATION_PROCESSING:"Traitement en cours...",NOTIFICATION_DOWNLOAD_ERROR:"Erreur lors du téléchargement de ce fichier",NOTIFICATION_RETRY:"Essayer de nouveau",YES:"Oui",NO:"Non",REPLACE_EXISTING_FILE_TITLE:"Remplacer le fichier existant",REPLACE_EXISTING_FILE_MSG:"Un fichier de ce nom existe déjà. Voulez-vous le remplacer ?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Remplacer le fichier existant. Oui",OPEN:"Ouvrir",OPEN_FILE:"Ouvrir le fichier",OPEN_FILES:"Ouvrir les fichiers",OPEN_FOLDER:"Ouvrir un dossier",SAVE_AS:"Enregistrer sous",SAVE_AS_FILE:"Enregistrer en tant que fichier",SAVE_AS_FILES:"Enregistrer en tant que fichier compressé",SAVED:"Enregistré",SHOW_IN_FOLDER:"Afficher dans le dossier",SEND:"Envoyer",CONVERT_TO_PDF:"Convertir en PDF",COMBINE:"Combiner",BROWSE_FOLDER:"Parcourir...",CHOOSE_DIFFERENT_FOLDER:"Sélectionner un autre dossier...",ATTACH_TO_EMAIL:"Joindre à un message électronique",SEND_AND_TRACK:"Envoi et suivi",PRINT:"Imprimer",PUBLIC_ICON_TOOLTIP:"Fichier partagé avec Adobe Send & Track",RNA_VERSION_DIALOG_TITLE:"Une erreur s’est produite.",RNA_VERSION_DIALOG_CONTENT:"Les fonctions dans cette section établissent la connexion à Adobe Document Cloud et doivent être mises à jour pour rester compatibles avec le service. Pour effectuer la mise à jour vers la dernière version, sélectionnez Rechercher les mises à jour dans le menu Aide ou cliquez sur le lien ci-dessous pour poursuivre votre travail dans un navigateur Web.",RNA_VERSION_DIALOG_LINK_TITLE:"Accéder à Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_fr",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_fr",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_fr",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_fr",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_fr",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_fr",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_fr",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_fr",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_fr",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_fr",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_fr",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_fr",SERVER_OUTAGE_DIALOG_TITLE:"Une erreur s’est produite.",SERVER_OUTAGE_DIALOG_CONTENT:"Le service auquel vous essayez d’accéder est temporairement indisponible. Réessayez ultérieurement."});