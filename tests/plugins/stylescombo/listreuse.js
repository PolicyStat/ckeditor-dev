/* bender-tags: editor,unit */
/* bender-ckeditor-plugins: richcombo,format,stylescombo,font,toolbar */

( function() {
	'use strict';

	bender.editor = {
		config: {
			stylesSet: 'listtester'
		}
	};

	var testStyles = [
		{
			name: 'List: A. B. C.',
			element: 'ol',
			attributes: {'class': 'list-upper-alpha'}
		},
		{
			name: 'List: 1. 2. 3.',
			element: 'ol',
			attributes: {'class': 'list-decimal'}
		},
		{
			name: 'List: a. b. c.',
			element: 'ol',
			attributes: {'class': 'list-lower-alpha'}
		},
		{
			name: 'List: i. ii. iii.',
			element: 'ol',
			attributes: {'class': 'list-lower-roman'}
		},
		{
			name: 'List: I. II. III.',
			element: 'ol',
			attributes: {'class': 'list-upper-roman'}
		}
	];

	// Set prepared stylesSet.
	CKEDITOR.stylesSet.add( 'listtester', testStyles );

	bender.test( {
		'test list style value is selected': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
			    bot = this.editorBot;

			bot.setHtmlWithSelection( '<ol class="list-upper-alpha"><li>^</li></ol>' );

			stylesCombo.createPanel( editor );

			assert.areEqual( 'List: A. B. C.', stylesCombo._.value );
		},
		'test list style value is not selected from parent list item': function() {
		var editor = this.editor,
			stylesCombo = editor.ui.get( 'Styles'),
			bot = this.editorBot;

		bot.setHtmlWithSelection( '<ol class="list-upper-alpha"><li><ol><li>^</li></ol></li></ol>' );

		stylesCombo.createPanel( editor );

		assert.areEqual( '', stylesCombo._.value );
		},
		'test list style value is not selected from parent list item when in non-list child': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
				bot = this.editorBot;

			bot.setHtmlWithSelection( '<ol class="list-upper-alpha"><li><ol><li><strong>^</strong></li></ol></li></ol>' );

			stylesCombo.createPanel( editor );

			assert.areEqual( '', stylesCombo._.value );
		}
	} );
} )();
