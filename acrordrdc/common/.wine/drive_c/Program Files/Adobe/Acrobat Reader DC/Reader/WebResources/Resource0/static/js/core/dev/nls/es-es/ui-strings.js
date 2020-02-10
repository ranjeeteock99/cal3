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

define({ACTIONS:"Acciones",ACTIONS_UC:"ACCIONES",ADDED:"Añadido",ADD_ACCOUNT:"Agregar cuenta",BACK:"Atrás",CLOSE:"Cerrar",CONTINUE:"Continuar",EXTENSION:"(.<%- ext %>)",FILES:"Archivos",FILE_NAME:"Nombre de archivo",FOLDER_NAME:"Nombre de carpeta",LOCATION:"Ubicación",MODIFIED:"Modificado",NAME:"Nombre",OR:"o",PROPERTIES:"Propiedades",PROPERTIES_UC:"PROPIEDADES",REMOVE:"Quitar",SELECT_FILES:"Seleccionar archivos",SELECT_FILE:"Seleccionar archivo",SIZE:"Tamaño",SELECT_ALL:"Seleccionar todo",TOTAL_FILES:"Archivos totales",N_ITEMS_CLICK_TO_VIEW:"<%= num %> elementos. Haga clic para ver.",CREATED_DATE:"Fecha de adición",MODIFIED_DATE:"Fecha de Mod.",VIEWED_DATE:"Visualización",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Ayer",DATE_MM_DD_YYYY:"<%= day %>/<%= month %>/<%= year %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",YYYY:"YYYY",AM:"AM",PM:"PM",HH:"H",HH_MM_SEPARATOR:":",MM:"M",DD:"D",ANIMATION:"Animación",AUDIO:"Audio",CALENDAR:"Calendario",CASCADING_STYLE_SHEET:"Hojas de estilos en cascada",CERTIFICATE:"Certificado",FONT:"Fuente",IMAGE:"Imagen",PLAIN_TEXT:"Texto sin formato",PRESENTATION:"Presentación",RICH_TEXT:"Texto enriquecido",SPREADSHEET:"Hoja de cálculo",STYLE_SHEET:"Hoja de estilos",TEXT:"Texto",UNKNOWN:"Desconocido",VIDEO:"Vídeo",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:",",THOUSANDS_SEPARATOR:".",FILE_NAME_CONTAINS:"El nombre del archivo contiene",FILE_TYPE_IS:"El tipo de archivo es",FILE_CONTENT:"El archivo contiene",DATE_LAST_MODIFIED:"Fecha de última modificación",DATE_LAST_VIEWED:"Fecha de última visualización es",DATE_ADDED:"Fecha de adición es",FILE_ADDED_BY:"Archivo añadido por",MIN_SIZE:"Tamaño mín.",MAX_SIZE:"Tamaño máx.",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Crear PDF",EXPORT_PDF:"Exportar PDF",COMBINE_PDF:"Combinar PDF",FILL_SIGN:"Rellenar y firmar",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Hoy",YESTERDAY:"Ayer",WITHIN_LAST_WEEK:"La semana pasada",WITHIN_LAST_MONTH:"En el último mes",ONE_TO_TWO_MONTHS_AGO:"Hace 1-2 meses",TWO_TO_THREE_MONTHS_AGO:"Hace 2-3 meses",THREE_TO_FOUR_MONTHS_AGO:"Hace 3-4 meses",FOUR_TO_FIVE_MONTHS_AGO:"Hace 4-5 meses",FIVE_TO_SIX_MONTHS_AGO:"Hace 5-6 meses",SIX_TO_TWELVE_MONTHS_AGO:"Hace 6-12 meses",MORE_THAN_ONE_YEAR_AGO:"Hace más de 1 año",OK:"Aceptar",CANCEL:"Cancelar",CONFIRM_DELETE_TITLE:"Eliminar",CONFIRM_DELETE_MSG_ONE_ITEM:"¿Seguro que desea eliminar este elemento?",CONFIRM_DELETE_MSG_N_ITEMS:"¿Seguro que desea eliminar estos <%= numItems %> elementos?",DOWNLOAD:"Descargar",DOWNLOAD_FILE:"Descargar archivo",DOWNLOAD_FILES:"Descargar archivos",DOWNLOAD_FOLDER:"Descargar carpeta",RENAME:"Cambiar nombre",RENAME_ELLIPSIS:"Cambiar nombre...",RENAME_FILE:"Cambiar nombre de archivo",RENAME_FOLDER:"Cambiar nombre de carpeta",MOVE_FILE:"Mover archivo",MOVE_FILES:"Mover archivos",MOVE_FOLDER:"Mover carpeta",MOVE_FOLDERS:"Mover carpetas",MOVE_FILE_AND_FOLDER:"Mover archivo y carpeta",MOVE_FILES_AND_FOLDER:"Mover archivos y carpeta",MOVE_FILE_AND_FOLDERS:"Mover archivo y carpetas",MOVE_FILES_AND_FOLDERS:"Mover archivos y carpetas",SHARE:"Compartir",SHARE_ELLIPSIS:"Compartir...",SHARE_FILE:"Compartir archivo",SHARE_FILES:"Compartir archivos",SEND_FILE:"Enviar el archivo y realizar un seguimiento",SEND_FILES:"Enviar archivos y realizar un seguimiento",DELETE:"Eliminar",HOME:"Inicio",ENTER_KEYWORD:"Buscar",SEARCH:"Buscar",SHARED:"Compartido",PREVIEW_NOT_AVAILABLE:"No se puede previsualizar el tipo de archivo",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Descargue</a> el archivo para visualizarlo.",RENAME_NAME_IN_USE:'El archivo <%= existingType %> denominado "<%= name %>" ya existe en esta ubicación. Seleccione otro nombre para el <%= renamedType %>.',RENAME_ILLEGAL_NAME:"El nombre contiene caracteres no válidos o contiene demasiados caracteres. Elija otro nombre <%= renamedType %>.",MOVE:"Mover",MOVE_FILE_TO:"Mover archivo a...",MOVE_FILES_TO:"Mover archivos a...",MOVE_FOLDER_TO:"Mover carpeta a...",MOVE_FOLDERS_TO:"Mover carpetas a...",MOVE_FILE_AND_FOLDER_TO:"Mover archivos y carpeta a...",MOVE_FILES_AND_FOLDER_TO:"Mover archivos y carpeta a...",MOVE_FILE_AND_FOLDERS_TO:"Mover archivo y carpetas a...",MOVE_FILES_AND_FOLDERS_TO:"Mover archivos y carpetas a...",DUPLICATE_NAME_TITLE:"Nombre de <%= type %> duplicado",DUPLICATE_NAME_PROMPT:'Un <%= type %> denominado "<%- name %>" ya existe en esta ubicación. ¿Qué desea hacer?',DUPLICATE_NAME_REPLACE_EXISTING:"Sustituir el archivo <%= type %> existente",DUPLICATE_NAME_RENAME_UPLOADED:"Cambiar nombre del <%= type %> cargado",DUPLICATE_NAME_DELETE_MOVED:"El eliminar el <%= type %> movido",DUPLICATE_NAME_RENAME_MOVED:"Cambiar nombre del <%= type %> movido",FILE_INITIAL_CAP:"Archivo",FILE:"archivo",FOLDER_INITIAL_CAP:"Carpeta",FOLDER:"carpeta",REPORT_ABUSE:"Informar de irregularidad grave",REPORT_ABUSE_TITLE:"Informar de irregularidad grave",REPORT_ABUSE_CONTENT_LABEL:"Contenido",REPORT_ABUSE_TITLE_LABEL:"Título",REPORT_ABUSE_DEFAMATION_LABEL:"Difamación",REPORT_ABUSE_OFFENSIVE_LABEL:"Contenido ofensivo",REPORT_ABUSE_EXPLICIT_LABEL:"Contenido de sexo explícito",REPORT_ABUSE_TRADEMARK_LABEL:"Infracción de marca comercial",REPORT_ABUSE_RACIST_LABEL:"Contenido racista o violento",REPORT_ABUSE_OTHER_LABEL:"Otro",REPORT_ABUSE_BLURB:"Si cree que el contenido infringe las <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Condiciones de uso</a> de Adobe, puede informar sobre este contenido rellenando este formulario rápido.",REPORT_ABUSE_EMAIL_PROMPT:"Su correo electrónico",REPORT_ABUSE_NAME_PROMPT:"Su nombre",REPORT_ABUSE_TARGET_TYPE_PROMPT:"¿De qué está informando?",REPORT_ABUSE_REASON_PROMPT:"¿Por qué informa de este contenido?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Proporcione una descripción detallada de su problema.",REPORT_ABUSE_COPYRIGHT_REPORT:"Para informar sobre una Infracción de Copyright, siga la Sección 17 de las <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use' target='_blank'>Condiciones de uso</a>.",REPORT_ABUSE_REPORT_BUTTON:"Informar de irregularidad grave",REPORT_ABUSE_EMAIL_ERROR:"Debe indicar una dirección válida de correo electrónico.",LANGUAGE_CHANGE:"<%= lang %> (Cambiar)",CHOOSE_LANGUAGE:"Seleccione su idioma",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Sin espacio para almacenamiento de archivos",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Actualmente está utilizando <%= using %> de su <%= allotment %> asignación y pronto se quedará sin espacio.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Almacenamiento de archivos sobrepasado",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"El almacenamiento total de <%= using %> sobrepasa el máximo <%= allotment %> permitido con su nueva suscripción.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"El archivo cargado no se puede guardar porque podría sobrepasar su asignación de cuota de <%= allotment %>.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Puede ver y descargar todos los archivos existentes, pero para guardar archivos adicionales debe actualizar su cuenta.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Debe eliminar algunos archivos para liberar espacio adicional.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Actualice su cuenta para obtener más almacenamiento y funciones adicionales.",LEARN_MORE:"Más información",UPGRADE:"Actualizar",ERROR:"Error",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Se ha sobrepasado el máximo de apertura de archivos",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Puede abrir 50 archivos como máximo cada vez.",HTTP_STATUS_DEFAULT_TITLE:"No se ha podido completar su solicitud",HTTP_STATUS_DEFAULT_MSG:"Se ha producido un error al intentar completar la solicitud.",HTTP_STATUS_DEFAULT_MSG_CEF:"Se ha producido un error al conectar con el servicio. Inténtelo de nuevo más tarde.",HTTP_STATUS_400_TITLE:"No se ha podido completar su solicitud (400)",HTTP_STATUS_400_TITLE_CEF:"No se ha podido completar su solicitud",HTTP_STATUS_400_MSG:"Se ha producido un error al intentar completar la solicitud.",HTTP_STATUS_401_TITLE:"Se ha cerrado la sesión (401)",HTTP_STATUS_401_TITLE_CEF:"Se ha cerrado la sesión",HTTP_STATUS_401_MSG:'La sesión ha caducado y se ha cerrado la sesión debido a la inactividad. Haga clic en la opción "Iniciar sesión" que aparece a continuación para volver a iniciar sesión.',HTTP_STATUS_401_MSG_CEF:"Se ha producido un error. Cierre sesión y vuelva a iniciarla",HTTP_STATUS_403_QUOTA_TITLE:"Capacidad de almacenamiento sobrepasado (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Cuota de almacenamiento superada",HTTP_STATUS_403_QUOTA_MSG:"El archivo no se ha podido cargar, ya que se sobrepasaría la cuota de almacenamiento. Puede que desee eliminar algunos archivos existentes para obtener más espacio.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"No se puede eliminar la carpeta con contenido (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"No se pueden eliminar carpetas con contenido",HTTP_STATUS_403_DEL_FOLDER_MSG:"Solo se pueden eliminar carpetas vacías. Elimine todos los contenidos antes de eliminar la carpeta.",HTTP_STATUS_403_NO_SHARING_TITLE:"Uso compartido no permitido (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Uso compartido no permitido",HTTP_STATUS_403_NO_SHARING_MSG:"Su archivo no se ha podido compartir, ya que es un archivo de audio o vídeo.",HTTP_STATUS_403_VIRUS_TITLE:"Se ha detectado un virus (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Virus detectado",HTTP_STATUS_403_VIRUS_MSG:"El archivo no se ha podido cargar porque contiene un virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"No se pudo descodificar (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"No se pudo descodificar",HTTP_STATUS_403_ENCRYPTION_MSG:"Se produjo un error al acceder al contenido. No se pudo descodificar. Póngase en contacto con su administrador de TI.",HTTP_STATUS_403_TITLE:"Prohibido (403)",HTTP_STATUS_403_TITLE_CEF:"No permitido",HTTP_STATUS_403_MSG:"No se ha podido completar la operación. Vuelva a intentarlo más tarde.",HTTP_STATUS_404_TITLE:"No se ha encontrado el archivo (404)",HTTP_STATUS_404_TITLE_CEF:"No se ha encontrado el archivo",HTTP_STATUS_404_MSG:"El archivo al que está intentando acceder no se encuentra. Puede que el archivo se haya movido o eliminado en otra sesión.",HTTP_STATUS_405_TITLE:"Método no permitido (405)",HTTP_STATUS_405_TITLE_CEF:"Método no permitido",HTTP_STATUS_405_MSG:"No se pudo completar la solicitud, ya que el método no se permite.",HTTP_STATUS_406_TITLE:"Incompatibilidad del navegador",HTTP_STATUS_406_TITLE_CEF:"Tipo no compatible",HTTP_STATUS_406_MSG:"El navegador no puede comunicarse con este sitio web. Pruebe con otro navegador. (Error 406: tipo no admitido).",HTTP_STATUS_415_TITLE:"Tipo de medio no admitido (415)",HTTP_STATUS_415_TITLE_CEF:"Tipo de medio no compatible",HTTP_STATUS_415_MSG:"No se pudo completar la solicitud, ya que el tipo de medios especificado no es compatible.",HTTP_STATUS_500_TITLE:"Error interno del servidor (500)",HTTP_STATUS_500_TITLE_CEF:"Error de servidor interno",HTTP_STATUS_500_MSG:"No se pudo completar la solicitud debido a un error interno del servidor.",HTTP_STATUS_501_TITLE:"Solicitud no implementada (501)",HTTP_STATUS_501_TITLE_CEF:"Solicitud no implementada",HTTP_STATUS_501_MSG:"La solicitud que está intentando realizar aún no se ha implementado en el servidor.",HTTP_STATUS_503_TITLE:"Servidor no disponible en este momento (503)",HTTP_STATUS_503_TITLE_CEF:"Servidor no disponible en este momento",HTTP_STATUS_503_MSG:"El servidor no se ha podido alcanzar y puede estar fuera de servicio. Vuelva a intentarlo más tarde.",DOWNLOAD_FORM_TITLE:"Archivo de formulario",DOWNLOAD_FORM_MESSAGE:"El archivo de formulario se debe convertir a PDF para poder descargarlo.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Su selección incluye archivos de formulario, que no están disponibles para la descarga. Estos archivos se excluirán. Puede descargar versiones en PDF seleccionando un solo archivo de formulario para su descarga.",DOWNLOAD_FORMS_MESSAGE:"Los archivos de formulario no están disponibles para la descarga. Puede descargar versiones en PDF seleccionando un solo archivo de formulario para su descarga.",SETTINGS:"Configuración",DONE:"Listo",FILE_LISTS:"Listas de archivos",STORAGE:"Almacenamiento",EDIT_ACCOUNTS:"Editar cuentas",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Quitar cuenta",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"Descargar todo",NOTIFICATION_UPLOADING:"Cargando...",NOTIFICATION_CONVERTING:"Convirtiendo...",NOTIFICATION_CONVERSION_FAILURE:"Error de conversión",NOTIFICATION_DOWNLOAD_FAILURE:"Error de descarga",READY:"Listo",NOTIFICATION_WAITING:"Pendiente...",NOTIFICATION_DOWNLOADING:"Descargando...",NOTIFICATION_PROCESSING:"Procesando...",NOTIFICATION_DOWNLOAD_ERROR:"Se ha producido un error al descargar el archivo.",NOTIFICATION_RETRY:"Reintentar",YES:"Sí",NO:"No",REPLACE_EXISTING_FILE_TITLE:"Reemplazar el archivo existente",REPLACE_EXISTING_FILE_MSG:"Ya existe un archivo con este nombre. ¿Desea reemplazarlo?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Reemplazar el archivo existente. Sí",OPEN:"Abrir",OPEN_FILE:"Abrir archivo",OPEN_FILES:"Abrir archivos",OPEN_FOLDER:"Abrir carpeta",SAVE_AS:"Guardar como",SAVE_AS_FILE:"Guardar como archivo",SAVE_AS_FILES:"Guardar como Zip",SAVED:"Guardado",SHOW_IN_FOLDER:"Mostrar en carpeta",SEND:"Enviar",CONVERT_TO_PDF:"Convertir en PDF",COMBINE:"Combinar",BROWSE_FOLDER:"Examinar...",CHOOSE_DIFFERENT_FOLDER:"Elegir otra carpeta...",ATTACH_TO_EMAIL:"Adjuntar a correo electrónico",SEND_AND_TRACK:"Enviar y realizar un seguimiento",PRINT:"Imprimir",PUBLIC_ICON_TOOLTIP:"Archivo compartido con Adobe Send & Track",RNA_VERSION_DIALOG_TITLE:"Se ha producido un error",RNA_VERSION_DIALOG_CONTENT:"Las funciones de esta área se conectan con Adobe Document Cloud y deben actualizarse para seguir siendo compatibles con el servicio. Para actualizarlas a la versión más reciente, elija Buscar actualizaciones en el menú Ayuda o haga clic en el siguiente vínculo para continuar trabajando en un navegador web.",RNA_VERSION_DIALOG_LINK_TITLE:"Ir a Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_es",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_es",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_es",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_es",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_es",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_es",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_es",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_es",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_es",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_es",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_es",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_es",SERVER_OUTAGE_DIALOG_TITLE:"Se ha producido un error",SERVER_OUTAGE_DIALOG_CONTENT:"El servicio al que está intentando acceder no está disponible temporalmente. Inténtelo de nuevo más tarde."});