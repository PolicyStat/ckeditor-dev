/* bender-tags: editor,unit */
/* bender-ckeditor-plugins: toolbar,clipboard,pastetext,remove_enter_blocks_during_list_paste */
/* bender-include: ../clipboard/_helpers/pasting.js */
/* global assertPasteEvent */

/**
 * This test suite checks that installing the remove_enter_blocks_during_list_paste
 * plugin doesn't break the no-selection paste case.  (Items should be pasted as is)
 */
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
		// be inside a table cell
		bender.tools.setHtmlWithSelection( this.editor, '<ol><li><table><tr><td>^></td></tr></table></li></ol>' );
	};

	tests[ 'test_single_p_does_not_get_removed_in_list_item' ] = function() {
		var editor = this.editor,
			pasteContent = '<p>asdf</p>',
			expectedContent = pasteContent;

		assertPasteEvent( editor, { dataValue: pasteContent },
			{ dataValue: expectedContent }, 'did not remove p tag' );
	};

	tests[ 'test_multiple_p_does_not_become_break_in_list_item' ] = function() {
		var editor = this.editor,
			pasteContent = '<p>asdf</p><p>jkl</p>',
			expectedContent = pasteContent;

		assertPasteEvent( editor, { dataValue: pasteContent },
			{ dataValue: expectedContent }, 'did not remove p tag' );
	};

	bender.test( tests );
}() );
