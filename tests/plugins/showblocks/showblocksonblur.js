/* bender-tags: editor,unit */
/* bender-ckeditor-plugins: showblocks */

CKEDITOR.focusManager._.blurDelay = 0;

bender.editors = {
	editor: {
		creator: 'inline',
			config: {
				showBlocksOnBlur: true
			}
		},
	editorShowBlocksFalse: {
		creator: 'inline',
		config: {
			showBlocksOnBlur: false
		}
	}
};

bender.test(
	{
		'test config to keep showblocks on blur': function() {
			var bot = this.editorBots.editor,
				editor = bot.editor;

			editor.focus();

			assert.isTrue(editor.editable().hasFocus);

			bot.execCommand( 'showblocks' );

			assert.isTrue( editor.editable().hasClass('cke_show_blocks') );

			editor.focusManager.blur( true );

			assert.isTrue( editor.editable().hasClass('cke_show_blocks') );
		},
		'test config to not keep showblocks on blur': function() {
			var bot = this.editorBots.editorShowBlocksFalse,
				editor = bot.editor;

			editor.focus();

			assert.isTrue(editor.editable().hasFocus);

			bot.execCommand( 'showblocks' );

			assert.isTrue( editor.editable().hasClass('cke_show_blocks') );

			editor.focusManager.blur( true );

			assert.isFalse( editor.editable().hasClass('cke_show_blocks') );
		}
	}
);
