(function () {
	CKEDITOR.plugins.add('shiftenterlistpastefilter', {
		init: function (editor) {
			function filterWithShiftEnterMode( editor, data ) {
				var fragment = CKEDITOR.htmlParser.fragment.fromHtml( data ),
					writer = new CKEDITOR.htmlParser.basicWriter(),
					filter = new CKEDITOR.filter( editor );

				if ( editor.activeEnterMode === CKEDITOR.ENTER_P ) {
					filter.disallow( 'p' );
				}
				else if ( editor.activeEnterMode === CKEDITOR.ENTER_BR ) {
					filter.disallow( 'br' );
				}
				else if ( editor.activeEnterMode === CKEDITOR.ENTER_DIV ) {
					filter.disallow( 'div' );
				}

				filter.applyTo( fragment, true, false, editor.activeShiftEnterMode );
				fragment.writeHtml( writer );

				return writer.getHtml();
			}

			editor.on('paste', function(ev) {
				var editor = ev.editor;
				var block = editor.elementPath().block;

				if (block && block.getName() === 'li') {
					ev.data.dataValue = filterWithShiftEnterMode(editor, ev.data.dataValue);
				}

			}, null, null, 9);
		}
	});

})();
