CKEDITOR.editorConfig = function ( config ) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	var basePlugins = [
		'dialogui',
		'dialog',
		'a11yhelp',
		'autolink',
		'autogrow',
		'basicstyles',
		'blockquote',
		'clipboard',
		'panel',
		'floatpanel',
		'menu',
		'contextmenu',
		'dialogadvtab',
		'elementspath',
		'entities',
		'find',
		'floatingspace',
		'listblock',
		'button',
		'richcombo',
		'format',
		'horizontalrule',
		'htmlwriter',
		'image2',
		'indent',
		'indentblock',
		'indentlist',
		'insertpre',
		'justify',
		'fakeobjects',
		'link',
		'list',
		'magicline',
		'pagebreak',
		'pastefromword',
		'pastetext',
		'preview',
		'print',
		'removeformat',
		'save',
		'menubutton',
		'selectall',
		'sharedspace',
		'showblocks',
		'sourcedialog',
		'specialchar',
		'stylescombo',
		'tab',
		'table',
		'tableresize',
		'tabletools',
		'toolbar',
		'undo',
		'wysiwygarea'
	];
	config.plugins = basePlugins.join();

	config.extraPlugins = [
		'pstatenterkey',
		'remove_enter_blocks_during_list_paste',
		'removenbsp'
	].join();

	config.skin = 'pstat';
	// %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.toolbar = [
		{ name: 'styles', items: ['Format', 'Styles'] },
		{ name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
		{ name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak'] },
		{ name: 'clipboard', items: ['Undo', 'Redo'] },
		'/',
		{
			name: 'basicstyles',
			items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat']
		},
		{
			name: 'paragraph',
			items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyCenter']
		},
		{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
		{ name: 'document', items: ['Sourcedialog'] }
	];

	config.justifyClasses = [null, 'center', null, null];

	config.coreStyles_underline = {
		element: 'span',
		attributes: { 'class': 'wym_style underline' }
	};

	config.extraAllowedContent = {
		code: true,
		pre: true,
		div: {
			styles: '!page-break-after'  // a div is only allowed if it has the page-break-after style
		},
		iframe: {
			attributes: 'align,longdesc,frameborder,height,name,scrolling,src,title,width'
		},
		img: {
			attributes: 'src,alt,width,height'
		},
		'address div h1 h2 h3 h4 h5 h6 p pre sub sup em strong': {
			classes: 'highlight',
			propertiesOnly: true // this means the elements must also be allowed by some other rule
		},
		'sub sup em strong': {
			classes: 'center'
		},
		table: true,
		td: {
			attributes: 'colspan,rowspan'
		},
		th: {
			attributes: 'colspan,rowspan'
		}
	};

	config.disallowedContent = {
		table: {
			styles: 'width,height',
			attributes: 'border,cellspacing,cellpadding,align'
		}
	};

	// removes div from the default formatting items, or divs will be allowed everywhere
	config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre';

	config.linkShowAdvancedTab = false;

	config.specialChars = [
		['&nbsp;', 'no-break space'],
		['&amp;', 'ampersand'],
		['&quot;', 'quotation mark'],
		// finance
		['&cent;', 'cent sign'],
		['&euro;', 'euro sign'],
		['&pound;', 'pound sign'],
		['&yen;', 'yen sign'],
		// signs
		['&copy;', 'copyright sign'],
		['&reg;', 'registered sign'],
		['&trade;', 'trade mark sign'],
		['&permil;', 'per mille sign'],
		['&micro;', 'micro sign'],
		['&middot;', 'middle dot'],
		['&bull;', 'bullet'],
		['&hellip;', 'three dot leader'],
		['&prime;', 'minutes / feet'],
		['&Prime;', 'seconds / inches'],
		['&sect;', 'section sign'],
		['&para;', 'paragraph sign'],
		['&szlig;', 'sharp s / ess-zed'],
		['&#9633;', 'white square'],
		['&#9744;', 'ballot box'],
		['&#9745;', 'ballot box with check'],
		['&#10003;', 'check mark'],
		// quotations
		['&lsaquo;', 'single left-pointing angle quotation mark'],
		['&rsaquo;', 'single right-pointing angle quotation mark'],
		['&laquo;', 'left pointing guillemet'],
		['&raquo;', 'right pointing guillemet'],
		['&lsquo;', 'left single quotation mark'],
		['&rsquo;', 'right single quotation mark'],
		['&ldquo;', 'left double quotation mark'],
		['&rdquo;', 'right double quotation mark'],
		['&sbquo;', 'single low-9 quotation mark'],
		['&bdquo;', 'double low-9 quotation mark'],
		['&lt;', 'less-than sign'],
		['&gt;', 'greater-than sign'],
		['&le;', 'less-than or equal to'],
		['&ge;', 'greater-than or equal to'],
		['&ndash;', 'en dash'],
		['&mdash;', 'em dash'],
		['&macr;', 'macron'],
		['&oline;', 'overline'],
		['&curren;', 'currency sign'],
		['&brvbar;', 'broken bar'],
		['&uml;', 'diaeresis'],
		['&iexcl;', 'inverted exclamation mark'],
		['&iquest;', 'turned question mark'],
		['&circ;', 'circumflex accent'],
		['&tilde;', 'small tilde'],
		['&deg;', 'degree sign'],
		['&minus;', 'minus sign'],
		['&plusmn;', 'plus-minus sign'],
		['&divide;', 'division sign'],
		['&frasl;', 'fraction slash'],
		['&times;', 'multiplication sign'],
		['&sup1;', 'superscript one'],
		['&sup2;', 'superscript two'],
		['&sup3;', 'superscript three'],
		['&frac14;', 'fraction one quarter'],
		['&frac12;', 'fraction one half'],
		['&frac34;', 'fraction three quarters'],
		// math / logical
		['&fnof;', 'function / florin'],
		['&int;', 'integral'],
		['&sum;', 'n-ary sumation'],
		['&infin;', 'infinity'],
		['&radic;', 'square root'],
		['&sim;', 'similar to'],
		['&cong;', 'approximately equal to'],
		['&asymp;', 'almost equal to'],
		['&ne;', 'not equal to'],
		['&equiv;', 'identical to'],
		['&prod;', 'n-ary product'],
		['&not;', 'not sign'],
		['&cap;', 'intersection'],
		['&part;', 'partial differential'],
		// undefined
		['&acute;', 'acute accent'],
		['&cedil;', 'cedilla'],
		['&ordf;', 'feminine ordinal indicator'],
		['&ordm;', 'masculine ordinal indicator'],
		['&dagger;', 'dagger'],
		['&Dagger;', 'double dagger'],
		// alphabetical special chars
		['&Agrave;', 'A - grave'],
		['&Aacute;', 'A - acute'],
		['&Acirc;', 'A - circumflex'],
		['&Atilde;', 'A - tilde'],
		['&Auml;', 'A - diaeresis'],
		['&Aring;', 'A - ring above'],
		['&AElig;', 'ligature AE'],
		['&Ccedil;', 'C - cedilla'],
		['&Egrave;', 'E - grave'],
		['&Eacute;', 'E - acute'],
		['&Ecirc;', 'E - circumflex'],
		['&Euml;', 'E - diaeresis'],
		['&Igrave;', 'I - grave'],
		['&Iacute;', 'I - acute'],
		['&Icirc;', 'I - circumflex'],
		['&Iuml;', 'I - diaeresis'],
		['&ETH;', 'ETH'],
		['&Ntilde;', 'N - tilde'],
		['&Ograve;', 'O - grave'],
		['&Oacute;', 'O - acute'],
		['&Ocirc;', 'O - circumflex'],
		['&Otilde;', 'O - tilde'],
		['&Ouml;', 'O - diaeresis'],
		['&Oslash;', 'O - slash'],
		['&OElig;', 'ligature OE'],
		['&Scaron;', 'S - caron'],
		['&Ugrave;', 'U - grave'],
		['&Uacute;', 'U - acute'],
		['&Ucirc;', 'U - circumflex'],
		['&Uuml;', 'U - diaeresis'],
		['&Yacute;', 'Y - acute'],
		['&Yuml;', 'Y - diaeresis'],
		['&THORN;', 'THORN'],
		['&agrave;', 'a - grave'],
		['&aacute;', 'a - acute'],
		['&acirc;', 'a - circumflex'],
		['&atilde;', 'a - tilde'],
		['&auml;', 'a - diaeresis'],
		['&aring;', 'a - ring above'],
		['&aelig;', 'ligature ae'],
		['&ccedil;', 'c - cedilla'],
		['&egrave;', 'e - grave'],
		['&eacute;', 'e - acute'],
		['&ecirc;', 'e - circumflex'],
		['&euml;', 'e - diaeresis'],
		['&igrave;', 'i - grave'],
		['&iacute;', 'i - acute'],
		['&icirc;', 'i - circumflex'],
		['&iuml;', 'i - diaeresis'],
		['&eth;', 'eth'],
		['&ntilde;', 'n - tilde'],
		['&ograve;', 'o - grave'],
		['&oacute;', 'o - acute'],
		['&ocirc;', 'o - circumflex'],
		['&otilde;', 'o - tilde'],
		['&ouml;', 'o - diaeresis'],
		['&oslash;', 'o slash'],
		['&oelig;', 'ligature oe'],
		['&scaron;', 's - caron'],
		['&ugrave;', 'u - grave'],
		['&uacute;', 'u - acute'],
		['&ucirc;', 'u - circumflex'],
		['&uuml;', 'u - diaeresis'],
		['&yacute;', 'y - acute'],
		['&thorn;', 'thorn'],
		['&yuml;', 'y - diaeresis'],
		['&Alpha;', 'Alpha'],
		['&Beta;', 'Beta'],
		['&Gamma;', 'Gamma'],
		['&Delta;', 'Delta'],
		['&Epsilon;', 'Epsilon'],
		['&Zeta;', 'Zeta'],
		['&Eta;', 'Eta'],
		['&Theta;', 'Theta'],
		['&Iota;', 'Iota'],
		['&Kappa;', 'Kappa'],
		['&Lambda;', 'Lambda'],
		['&Mu;', 'Mu'],
		['&Nu;', 'Nu'],
		['&Xi;', 'Xi'],
		['&Omicron;', 'Omicron'],
		['&Pi;', 'Pi'],
		['&Rho;', 'Rho'],
		['&Sigma;', 'Sigma'],
		['&Tau;', 'Tau'],
		['&Upsilon;', 'Upsilon'],
		['&Phi;', 'Phi'],
		['&Chi;', 'Chi'],
		['&Psi;', 'Psi'],
		['&Omega;', 'Omega'],
		['&alpha;', 'alpha'],
		['&beta;', 'beta'],
		['&gamma;', 'gamma'],
		['&delta;', 'delta'],
		['&epsilon;', 'epsilon'],
		['&zeta;', 'zeta'],
		['&eta;', 'eta'],
		['&theta;', 'theta'],
		['&iota;', 'iota'],
		['&kappa;', 'kappa'],
		['&lambda;', 'lambda'],
		['&mu;', 'mu'],
		['&nu;', 'nu'],
		['&xi;', 'xi'],
		['&omicron;', 'omicron'],
		['&pi;', 'pi'],
		['&rho;', 'rho'],
		['&sigmaf;', 'final sigma'],
		['&sigma;', 'sigma'],
		['&tau;', 'tau'],
		['&upsilon;', 'upsilon'],
		['&phi;', 'phi'],
		['&chi;', 'chi'],
		['&psi;', 'psi'],
		['&omega;', 'omega'],
		// arrows
		['&larr;', 'leftwards arrow'],
		['&uarr;', 'upwards arrow'],
		['&rarr;', 'rightwards arrow'],
		['&darr;', 'downwards arrow'],
		['&harr;', 'left right arrow'],

		['&clubs;', 'black club suit'],
		['&hearts;', 'black heart suit'],
		['&diams;', 'black diamond suit']
	];

	config.showBlocksTags = ['p', 'div', 'pre', 'address', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul'];

	config.floatSpaceAlwaysShow = true;

	config.showBlocksOnBlur = true;

	config.startupOutlineBlocks = true;

	config.stylesSet = 'default:../ckeditor-common/styles.js';

	config.sharedSpaces = {
		top: 'editor-toolbar'
	};

	config.title = false; // removes the annoying tooltip, might have accessibility concerns.

	config.nanospell = {
		blockRequestLimit: 50, // the number of blocks to batch in a spellcheck call
		wordLimitPerRequest: 1000,
	};

	config.disableNativeSpellChecker = false;
};


