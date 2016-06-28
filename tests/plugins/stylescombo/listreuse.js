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
		'test list styles can be reused': function() {
			var editor = this.editor,
				stylesCombo = editor.ui.get( 'Styles' );

			stylesCombo.createPanel( editor );

			var items = stylesCombo._.items,
				keys = [],
				i = 0;

			// Fetch keys only.
			for ( keys[ i++ ] in items ); // jshint ignore:line

			assert.areEqual( testStyles.length, keys.length, 'A number of styles matches.' );
			arrayAssert.itemsAreSame( blockNames.concat( inlineNames ), keys, 'Styles are in ascending order, grouped.' );
		}
	} );
} )();
