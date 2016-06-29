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

			// items are not marked until the combo is opened
			stylesCombo.createPanel( editor );
			stylesCombo.onOpen();

			assert.areEqual( 'ol-a', stylesCombo._.value );
			assert.isTrue(stylesCombo._.list.isMarked('ol-a'));
		},
		'test list style value is not selected from parent list item': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
				bot = this.editorBot;

			bot.setHtmlWithSelection( '<ol class="ol-a"><li><ol><li>^</li></ol></li></ol>' );

			stylesCombo.createPanel( editor );
			stylesCombo.onOpen();

			assert.areEqual( '', stylesCombo._.value );
			assert.isFalse(stylesCombo._.list.isMarked('ol-a'));

			stylesCombo.onClick( 'ol-a' );
			assert.areSame( '<ol class="ol-a"><li><ol class="ol-a"><li>&nbsp;</li></ol></li></ol>', bot.getData( true ) );

			stylesCombo.onOpen();
			assert.isTrue(stylesCombo._.list.isMarked('ol-a'));
		},
		'test list style value is not selected from parent list item when in non-list child': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
				bot = this.editorBot;

			bot.setHtmlWithSelection( '<ol class="ol-a"><li><ol><li><strong>asd^</strong></li></ol></li></ol>' );

			stylesCombo.createPanel( editor );
			stylesCombo.onOpen();

			assert.areEqual( '', stylesCombo._.value );
			assert.isFalse(stylesCombo._.list.isMarked('ol-a'));

			// add the ol-a style to the inner list
			stylesCombo.onClick( 'ol-a' );
			assert.areSame( '<ol class="ol-a"><li><ol class="ol-a"><li><strong>asd</strong></li></ol></li></ol>', bot.getData( true ) );

			stylesCombo.onOpen();
			assert.isTrue(stylesCombo._.list.isMarked('ol-a'));

			// unmark it, class should stay applied on the outside

			stylesCombo.onClick( 'ol-a' );
			assert.areSame( '<ol class="ol-a"><li><ol><li><strong>asd</strong></li></ol></li></ol>', bot.getData( true ) );

			stylesCombo.onOpen();
			assert.isFalse(stylesCombo._.list.isMarked('ol-a'));

		},
		'test list style value from unordered list': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles'),
				bot = this.editorBot;

			bot.setHtmlWithSelection( '<ul class="ul-a"><li><ul><li>^</li></ul></li></ul>' );

			stylesCombo.createPanel( editor );
			stylesCombo.onOpen();

			assert.areEqual( '', stylesCombo._.value );
			assert.isFalse(stylesCombo._.list.isMarked('ul-a'));

			stylesCombo.onClick( 'ul-a' );
			assert.areSame( '<ul class="ul-a"><li><ul class="ul-a"><li>&nbsp;</li></ul></li></ul>', bot.getData( true ) );

			stylesCombo.onOpen();
			assert.isTrue(stylesCombo._.list.isMarked('ul-a'));

		}
	} );
} )();
