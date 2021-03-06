// Copyright 2001-2006 Adobe Macromedia Software LLC and its licensors. All rights reserved.
/* strings.js
*
* strings.js and loc_strings.js contain arrays for populating select lists 
* in tag dialogs. Both files use the naming convention arrayNameCap for the
* option labels (i.e., text that will be shown to the user) and arrayNameVal
* for the option values(i.e., the code that will be inserted into the document).
* 
* for obvious reasons, loc_strings.js mainly contains the Cap arrays, and
* strings.js mainly contains the Val arrays. only loc_strings.js should be
* localized.  
*
* note: where the labels should not be localized, select lists are intialized
* using the Val array for both the labels and the values.
* 
*/

var theLookAndFeelVal = new Array("motif","windows","metal");

// cfapplication.htm
var theLoginStorageVal = new Array("","session");

// cfapplet.htm
var theVericalAlignmentsVal = new Array("absbottom", "absmiddle", "baseline","bottom","left","middle", "right","texttop","top"); 

var theProtocolsVal = new Array("http://", "https://"); 

// cfcatch.htm 
var theAlignmentsCatchVal = new Array("Application", "Database", "Template","Object", "Synchronization","MissingInclude", "Expression","Lock","Any"); 

// cfcol.htm
var theAlignmentsColVar = new Array("left", "right", "center"); 


var theCFFTPTransferModeVal = new Array("AUTO","ASCII", "BINARY"); 

var theEncTypesVal = new Array("application/x-www-form-urlencoded", "multipart/form-data"); 
var theErrorTypesVal = new Array("exception", "monitor", "request", "validation"); 
var theExitMethodsVal = new Array("exittag", "exittemplate", "loop"); 
// cfcookie.htm 
var theExpiresVar = new Array("now", "never");       

var theFileNameConflictVal = new Array("error", "skip", "overwrite", "makeunique"); 

var theGridColTypeVal = new Array("image", "numeric", "string_nocase", "boolean", "currency"); 
var theGridDataAlignVal = new Array("left","center","right"); 

var theHTTPMethodVal = new Array("","post","head","put","delete","options","trace"); 
var theHTTPPARAMTypeVal = new Array("formfield", "url", "cookie", "file", "cgi", "header", "body", "xml"); 

var theImpersonateTypeVal = new Array("CF","OS"); 
var theIndexTypeVal = new Array("file", "path", "custom"); 
var theTextInputValidateVal = new Array("creditcard","date","eurodate","float","integer","social_security_number","telephone","time","zipcode"); 
var theInputValidateVal = new Array("boolean","creditcard","date","email","eurodate","float","guid","integer","maxlength","noblanks","range","regular_expression","social_security_number","submitonce","telephone","time","url","usdate","uuid","zipcode"); 
var theInsertDBTypeVal = new Array("ODBC","OLEDB","Oracle73","Oracle80","Sybase11","DB2","Informix73");

var theLanCollectionVal = new Array("English", "Arabic", "Bokmal", "Bulgarian", "Chinese", "Czech", "Danish", "Dutch", "Finnish", "French", "German", "Greek", "Hebrew", "Hungaria", "Korean", "Italian", "Japanese", "Nynorsk", "Norwegian", "Polish", "Portuguese", "Russian", "Russian2", "Spanish", "Swedish", "Traditional Chinese", "Turkish", "Unicode"); 
var theLockScopeVal = new Array("session","application","server"); 
var theLockTypeVal = new Array("exclusive","readonly"); 

var theMailTypeVal = new Array("","html"); 

var theMailPartTypeVal = new Array("html","plain","text");
var theCharSetVal = new Array("big5","euc-cn","euc-jp","euc-kr","hz-gb-2312","iso-2022-jp","iso-2022-kr","iso-8859-1","iso-8859-2","iso-8859-3","iso-8859-4","iso-8859-5","iso-8859-6","iso-8859-7","iso-8859-8","iso-8859-9","shift_jis","us-ascii","utf-16","utf-8","windows-1252"); 

var theObjectActionVal = new Array("create","connect"); 
var theObjectCOMContextVal = new Array("inproc","local","remote"); 
var theObjectCORBAContextVal = new Array("ior","nameservice"); 

var theParamTypeVal = new Array("any","array","boolean","binary","creditcard","date","email","eurodate","float","GUID","integer","numeric","query","range","regex","string","struct","SSN","telephone","time","URL","UUID","variableName","xml","zipcode"); 
var theProcparamCFSQLTypeVal = new Array("CF_SQL_BIGINT","CF_SQL_BIT","CF_SQL_BLOB","CF_SQL_CHAR","CF_SQL_CLOB","CF_SQL_DATE","CF_SQL_DECIMAL",
                                         "CF_SQL_DOUBLE","CF_SQL_FLOAT","CF_SQL_IDSTAMP","CF_SQL_INTEGER","CF_SQL_LONGVARCHAR",
                                         "CF_SQL_MONEY","CF_SQL_MONEY4","CF_SQL_NUMERIC","CF_SQL_REAL","CF_SQL_REFCURSOR","CF_SQL_SMALLINT","CF_SQL_TIME",
                                         "CF_SQL_TIMESTAMP","CF_SQL_TINYINT","CF_SQL_VARCHAR");                                          
var theProcparamTypeVal = new Array("In", "Out", "InOut"); 

var theQueryDBTypeVal = new Array("dynamic","query","ODBC","OLEDB","Oracle73","Oracle80","Sybase11","DB2","Informix73"); 
var theQueryParamTypeVal = theProcparamCFSQLTypeVal;                   
                    

var theRegistryGetSetTypeVal = new Array("string","dWord","key"); 
var theRegistryGetAllTypeVal = new Array("string","any","dWord","key");

var theSearchTypeVal = new Array("simple", "explicit", "natural", "internet", "internet_basic");
var theSelCacheVal = new Array("cache", "flush", "clientcache", "optimal");
var theSelCFFTPVal = new Array ("listdir", "getfile", "putfile", "open", "close", "changedir", "createdir", "rename", "remove", "getcurrentdir", "getcurrenturl", "exists", "existsdir", "existsfile","removedir"); 
var theSelCFLDAPVal = new Array("query", "add", "modify", "modifydn", "delete"); 
var theSelCfwddxVal = new Array("cfml2wddx", "wddx2cfml", "cfml2js", "wddx2js"); 
var theSelCollectionVal = new Array("list", "create", "delete",  "map", "optimize", "repair", "categorylist");
var theSelDirectoryVal = new Array("list", "create", "delete", "rename"); 
var theSelFileVal = new Array("upload", "copy", "move", "rename", "delete", "append", "write", "read", "readbinary"); 
var theSelCalendarVal = new Array("general", "events"); 
var theSelHeaderVal = new Array("header", "status"); 
var theSelInvokeVal = new Array("component","webservice"); 
var theSelIndexVal = new Array("update", "refresh", "delete", "purge"); 
var theSelInputVal = new Array("text", "radio", "checkbox", "password"); 
var theSelLoopVal = new Array("indexloop", "conditionalloop", "queryloop", "listloop", "collectionloop"); 
var theSelMailparamVal = new Array("header","file");                                                                                   
var theSelectModeVal = new Array("browse","column","edit","row","single"); 
var theSelObjectVal = new Array("component","com", "corba", "java"); 
var theSelRegistryVal = new Array("getall", "get", "set", "delete");                    
var theServletparamTypeVal = new Array("Bool", "Date", "Double", "Int", "String"); 
var theSelPopVal = new Array("getall", "getheaderonly", "delete"); 
var theSubmissionMethodsVal = new Array("post", "get");

var theTransactionActionVal = new Array("begin", "commit", "rollback"); 
var theTransactionIsolationVal = new Array("READ_UNCOMMITTED", "READ_COMMITTED", "REPEATABLE_READ", "SERIALIZABLE"); 
var theTypesContentVar = new Array("text/html", "text/plain", "text/xml", "application/msword", "application/msexcel", 
               "application/poscript", "application/x-zip-compressed", "application/pdf", 
               "application/rtf", "video/x-msvideo", "video/quicktime", "video/x-mpeg2", "audio/x-pn/realaudio", 
               "audio/x-mpeg", "audio/x-waw", "audio/x-aiff", "audio/basic", "image/tiff", 
               "image/jpeg", "image/gif", "image/png", "image/x-png", "image/x-photo-cd", "image/x-MS-bmp", 
               "mage/x-rgb", "image/x-portable-pixmap", "image/x-portable-greymap", "image/x-portablebitmap");               
              
var theScopeCfldapVal = new Array("onelevel","base","subtree"); 
var theModifyTypeCfldapVal = new Array("add","delete","replace"); 
var theOperationCfscheduleVal = new Array("HTTPRequest"); 
var theSelCfscheduleVal = new Array("update","delete","run");
var theLogLogVal = new Array("Application","Scheduler"); 
var theTypeLogVal = new Array("Information", "Warning", "Error", "Fatal Information"); 

var theSelGraphVal = new Array("bar","line","pie");
var theFileFormatGraphVal = new Array("Flash","jpg","png"); 
var theShowValueLabelGraphVal = new Array("Yes","No","Rollover"); 
var theValueLabelFontGraphVal = new Array("Arial","Courier","Times"); 
var theItemLabelFontGraphVal = new Array("Arial","Courier","Times"); 
var theTitleFontGraphVal = new Array("Arial","Courier","Times"); 
var theShowLegendGraphVal = new Array("above","below","left","right","none"); 
var theValueLocationGraphVal = new Array("onBar","overBar");
var theValueLocationPieVal = new Array("inside","outside");
var theItemLabelOrientationGraphVal = new Array("horizontal","vertical"); 
var theShowLegendGraphVal = new Array("above", "below", "left", "right", "none"); 
var theLegendFontGraphVal = new Array("Arial","Courier","Times"); 
var theGetAsBinaryVal = new Array("","yes","auto","never");
var theReportTypeVal = new Array("","netscape","microsoft");
var theReportFormatVal = new Array("flashpaper","pdf","excel","rtf");
var theFormFormatVal = new Array("html","flash", "xml");
var theGridFormatVal = new Array("applet", "flash","xml");
var theTreeFormatVal = new Array("applet" , "flash" , "xml" , "object" );
var theSkinListVal = new Array("haloblue", "halogreen", "haloorange", "halosilver");
var theXMLSkinListVal = new Array("None","Basic","BasicCSS","Beige","Blue","Bluegray","Default","Lightgray","Red","Silver");
// CFC strings 
var theTypesVal  = new Array("any","array","binary","boolean","date","numeric","query","string","struct","UUID","variableName","void","XML");
var theAccessVal = new Array("private","package","public","remote"); 
var theTraceTypeVal = new Array("information","warning","error","fatal information"); 
var theObjectcacheActionVal = new Array("clear"); 
var theChartSeriesTypeVal = new Array("area","bar","horizontalbar","cone","curve","cylinder","line","pie","pyramid","scatter","step"); 
var theChartSeriesPaintStyleVal = new Array("plain","raise","shade","light"); 
var theChartSeriesMarkerStyleVal = new Array("rectangle","triangle","diamond","circle","letterx","mcross","snow","rcross"); 
var theChartFormatVal = new Array("flash","jpg","png"); 
var theChartSeriesplacementVal = new Array("","cluster","stacked","percent"); 
var theChartLabelformatVal = new Array("number","currency","percent","date"); 
var theChartTipstyleVal = new Array("MouseDown","MouseOver","Off"); 
var theChartPieSliceStyleVal = new Array("solid","sliced"); 
var theDataLabelStyleVal = new Array("none", "value", "rowlabel", "columnlabel", "pattern");
var theSelTimerVal = new Array("debug", "inline", "outline", "comment");
var theSelDocumentItemVal = new Array("pagebreak","header","footer");
var theSelFormItemVal = new Array("hrule" , "vrule" , "spacer" , "html" , "text", "scrpit");
var theSelFormGroupVal = new Array("fieldset","accordion","hbox","hdividedbox","horizontal", "page", "panel", "repeated", "tabnavigator", "tile", "vbox", "vdividedbox", "vertical");
var theTextAreaVal = new Array("OnSubmit", "OnServer", "OnBlur");
var theDocumentFormatVal = new Array("FlashPaper", "PDF");
var theDocumentPageTypeVal = new Array("legal", "letter", "A4", "A5", "B4" , "B4-JIIS" , "B5", "B5-JIIS", "custom");
var theDocumentUnitsVal = new Array("in", "cm");
var theDocumentEncryptionVal = new Array("none", "128-bit", "48-bit");
var theDocumentPermissionsVal = new Array("allowprinting", "allowmodifycontents", "allowcopy", "allowmodifications", "allowfillin", "allowscreenreaders", "allowassembly", "allowdegradedprinting");
var theDocumentOrientationVal = new Array("portrait", "landscape");
var theComponentStyleVal = new Array("","RPC","document");
var theMailparamTypeVal = new Array("Plain","Text","HTML");
var theReportPDFEncryptionVal = new Array("none","128-bit","40-bit");
var theReportPDFPermissionsVal = new Array("allowprinting", "allowmodifycontents", "allowcopy", "allowmodifications", "allowfillin", "allowscreenreaders", "allowassembly", "allowdegradedprinting");
var theDelimeterVal = new Array(",","#chr(9)#","#chr(32)#","#chr(10)#");
