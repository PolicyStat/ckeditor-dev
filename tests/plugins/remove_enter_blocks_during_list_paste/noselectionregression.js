/* bender-tags: editor,unit */
/* bender-ckeditor-plugins: toolbar,clipboard,pastetext,remove_enter_blocks_during_list_paste */
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
		bender.tools.setHtmlWithSelection( this.editor, '<ol><li></li></ol>' );
	};

	tests[ 'test_single_p_get_removed_in_list_item' ] = function() {
		var editor = this.editor,
			pasteContent = '<p>asdf</p>',
			expectedContent = pasteContent;

		assertPasteEvent( editor, { dataValue: pasteContent },
			{ dataValue: expectedContent }, 'removed p tag' );
	};

	tests[ 'test_multiple_p_becomes_break_in_list_item' ] = function() {
		var editor = this.editor,
			pasteContent = '<p>asdf</p><p>jkl</p>',
			expectedContent = pasteContent;

		assertPasteEvent( editor, { dataValue: pasteContent },
			{ dataValue: expectedContent }, 'removed p tag' );
	};

	bender.test( tests );
}() );
