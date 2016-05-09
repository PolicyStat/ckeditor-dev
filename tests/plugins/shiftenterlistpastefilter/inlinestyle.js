/* bender-tags: editor,unit */
/* bender-ckeditor-plugins: toolbar,clipboard,pastetext,shiftenterlistpastefilter */
/* bender-include: ../clipboard/_helpers/pasting.js */
/* global assertPasteEvent */

( function() {
	'use strict';
	bender.editor = {
		config: {
			enterMode: CKEDITOR.ENTER_P,
			shiftEnterMode: CKEDITOR.ENTER_BR
		}
	};

	var tests = {};

	tests.setUp = function() {
		// be inside a list item
		bender.tools.setHtmlWithSelection( this.editor, '<ol><li><strong>^</strong></li></ol>' );
	};

	tests[ 'test_single_p_get_removed_in_list_item' ] = function() {
		var editor = this.editor,
			pasteContent = '<p>asdf</p>',
			expectedContent = 'asdf';

		assertPasteEvent( editor, { dataValue: pasteContent },
			{ dataValue: expectedContent }, 'removed p tag' );
	};

	tests[ 'test_multiple_p_becomes_break_in_list_item' ] = function() {
		var editor = this.editor,
			pasteContent = '<p>asdf</p><p>jkl</p>',
			expectedContent = 'asdf<br />jkl';

		assertPasteEvent( editor, { dataValue: pasteContent },
			{ dataValue: expectedContent }, 'removed p tag' );
	};

	bender.test( tests );
}() );
