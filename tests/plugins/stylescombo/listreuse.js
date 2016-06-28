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
			name: 'ol-a',
			element: 'ol',
			attributes: {'class': 'ol-a'}
		},
		{
			name: 'ul-a',
			element: 'ul',
			attributes: {'class': 'ul-a'}
		}
	];

	// Set prepared stylesSet.
	CKEDITOR.stylesSet.add( 'listtester', testStyles );

	bender.test( {
		'test list style value is selected': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
			    bot = this.editorBot;

			bot.setHtmlWithSelection( '<ol class="ol-a"><li>^</li></ol>' );

			stylesCombo.createPanel( editor );

			assert.areEqual( 'ol-a', stylesCombo._.value );
		},
		'test list style value is not selected from parent list item': function() {
		var editor = this.editor,
			stylesCombo = editor.ui.get( 'Styles'),
			bot = this.editorBot;

		bot.setHtmlWithSelection( '<ol class="ol-a"><li><ol><li>^</li></ol></li></ol>' );

		stylesCombo.createPanel( editor );

		assert.areEqual( '', stylesCombo._.value );
		},
		'test list style value is not selected from parent list item when in non-list child': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
				bot = this.editorBot;

			bot.setHtmlWithSelection( '<ol class="ol-a"><li><ol><li><strong>^</strong></li></ol></li></ol>' );

			stylesCombo.createPanel( editor );

			assert.areEqual( '', stylesCombo._.value );
		},
		'test list style value from unordered list': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
				bot = this.editorBot;

			bot.setHtmlWithSelection( '<ul class="ul-a"><li><ul><li>^</li></ul></li></ul>' );

			stylesCombo.createPanel( editor );

			assert.areEqual( '', stylesCombo._.value );
		}
	} );
} )();
