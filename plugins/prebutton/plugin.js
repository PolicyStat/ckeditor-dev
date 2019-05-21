'use strict';

(function () {
  CKEDITOR.plugins.add("prebutton", {
    requires: "toolbar",
    icons: "pre",
    init: function (editor) {
    
      //eslint-disable-next-line new-cap
      var preStyle = new CKEDITOR.style({ element: "pre" });
      //eslint-disable-next-line new-cap
      var divStyle = new CKEDITOR.style({ element: "div" });
      //eslint-disable-next-line new-cap
      var pStyle = new CKEDITOR.style({ element: "p" });
      
      editor.ui.addButton("prebutton", {
        icon: "pre",
        label: "Formatted Text",
        command: "prebutton"
      });

      editor.addCommand("prebutton", {
        contextSensitive: 1,
        exec: function (editor) {          
          if (editor.elementPath().block.is({pre:1})) {
            if (editor.config.enterMode === CKEDITOR.ENTER_DIV) {
              editor.applyStyle(divStyle);
            } else {
              editor.applyStyle(pStyle);
            }
          } else {
            editor.applyStyle(preStyle);
          }
        },
        refresh: function (editor, path) {
          if (path.block && path.block.is({pre:1})) {
            this.setState(CKEDITOR.TRISTATE_ON);
          } else {
            this.setState(CKEDITOR.TRISTATE_OFF);
          }
        }
      });
    }
  });
})();
