(function () {
    function fixFirefox() {
            document.designMode = 'on';
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
            document.execCommand('enableObjectResizing', false, false);
            document.execCommand('enableInlineTableEditing', false, false);
            document.designMode = 'off';
    }

    CKEDITOR.plugins.add('firefoxfixer', {

        init: function (editor) {
            if (CKEDITOR.env.gecko) {
                editor.on('instanceReady', function (event) {
                    event.editor.on('mode', function (ev) {
                        if (ev.editor.mode === 'wysiwyg') {
                            // gets executed everytime the editor switches from source -> WYSIWYG
                            fixFirefox();
                        }
                    });
                });
                // this gets executed on init
                fixFirefox();
            }
        }
    });

})();
