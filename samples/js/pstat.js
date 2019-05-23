/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById( 'editor' );

		var basicStylesButtons = ['Bold', 'Italic', 'Underline', 'highlightButton', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'];
		var paragraphToolbarItems = ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyCenter'];

		var structuredHeadingsToolbarItems = [
			'NumFormats',
			'NumStyles'
		];

		// generate this with ( new Date() ).valueOf(); on source changes
		var timestamp = "1512607750674";
		timestamp += '-toc';
		CKEDITOR.timestamp = timestamp;

		var extraPluginsString = 'pstatenterkey,remove_enter_blocks_during_list_paste,removenbsp';

		// extraPluginsString += ',nanospell';
		extraPluginsString += ',autoid';
		extraPluginsString += ',structuredheadings,highlightbutton';

		var config = {
			contentsCss: 'css/main.css',
			extraPlugins: extraPluginsString,

			disableNativeSpellChecker: true,

			removePlugins: 'showblocks',
			numberedElements: ["h2","h3","h4","h5"],
			autonumberDefaultScheme: "1.1.1.1.",
			autonumberStyles: {
				"1.1.1.1.": null,
				"1. a. i. a.": [
					"autonumber-N",
					"autonumber-a",
					"autonumber-r",
					"autonumber-a",
				],
				"A. 1. a. i.": [
					"autonumber-A",
					"autonumber-N",
					"autonumber-a",
					"autonumber-r",
				],
				"I. A. 1. a.": [
					"autonumber-R",
					"autonumber-A",
					"autonumber-N",
					"autonumber-a",
				]
			},
			styleNames: {
				"h2": "Heading",
				"h3": "Subheading",
				"h4": "Section Heading",
				"h5": "Section Subheading",
			},
			toolbar: [
				{name: 'structuredHeadings', items: structuredHeadingsToolbarItems},
				{name: 'links', items: ['Link', 'Unlink', 'Anchor']},
				{name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak']},
				{name: 'clipboard', items: ['Undo', 'Redo']},
				'/',
				{
					name: 'basicstyles',
					items: basicStylesButtons
				},
				{
					name: 'paragraph',
					items: paragraphToolbarItems
				},
				{name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll']},
				{name: 'document', items: ['Sourcedialog']}
			],
			customConfig: 'configs/editor_config.js'
		};

		// :(((
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=http://ckeditor.com]CKEditor[/url].'
			);
		}

		// Depending on the wysiwygare plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
			CKEDITOR.replace( 'editor', config );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor', config );

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}

		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
} )();

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
