/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin which shows the Styles drop-down
// list containing all styles in the editor toolbar. Other plugins, like
// the "div" plugin, use a subset of the styles for their features.
//
// If you do not have plugins that depend on this file in your editor build, you can simply
// ignore it. Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.
//
// For more information refer to: https://ckeditor.com/docs/ckeditor4/latest/guide/dev_styles.html#style-rules

CKEDITOR.stylesSet.add( 'default', [
	// begin PolicyStat styles

	{
		name: 'Highlight',
		element: [
			'address',
			'div',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'p',
			'pre',
			'table',
			'td',
			'th'
		],
		attributes: { 'class': 'highlight' }
	},
	{
		name: 'Center',
		element: [
			'address',
			'div',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'p',
			'pre',
			'table',
			'td',
			'th'
		],
		attributes: { 'class': 'center' }
	},
	{
		name: 'Equally spaced table',
		element: 'table',
		attributes: { 'class': 'fixed' }
	},
	{
		name: 'List: A. B. C.',
		element: 'ol',
		attributes: { 'class': 'list-upper-alpha' }
	},
	{
		name: 'List: 1. 2. 3.',
		element: 'ol',
		attributes: { 'class': 'list-decimal' }
	},
	{
		name: 'List: 1. 1. 1.',
		element: 'ol',
		attributes: { 'class': 'list-decimal-point' }
	},
	{
		name: 'List: a. b. c.',
		element: 'ol',
		attributes: { 'class': 'list-lower-alpha' }
	},
	{
		name: 'List: i. ii. iii.',
		element: 'ol',
		attributes: { 'class': 'list-lower-roman' }
	},
	{
		name: 'List: I. II. III.',
		element: 'ol',
		attributes: { 'class': 'list-upper-roman' }
	}

] );

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
