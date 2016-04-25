/* bender-tags: editor,unit */
/* bender-ckeditor-plugins: floatingspace,toolbar,undo */

'use strict';

CKEDITOR.focusManager._.blurDelay = 0;

bender.editor = {
	creator: 'inline',
	config: {
		extraplugins: 'floatingspace,undo',
		floatSpaceAlwaysShow: true
	}
};

bender.test( {
	'test floatingSpaceLayout event': function() {
		var editor = this.editor;
		var floatingSpace = editor.document.getById('cke_' + editor.name);

		editor.focus();

		assert.areSame(floatingSpace.getStyle('display'), "");

		editor.fire( 'blur' );
		assert.areSame(floatingSpace.getStyle('display'), "");
	}
} );
