import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'unknow';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    width: '80%',
    minWidth: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      // comment for show icon in text editor
      [
        'undo',
        'redo',
        'bold',
        'italic',
        //'underline',
        //'strikeThrough',
        'subscript',
        'superscript',
        // 'justifyLeft',
        // 'justifyCenter',
        // 'justifyRight',
        // 'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        // 'heading',
        // 'fontName',

        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
        // 'customClasses',
        'link',
        'unlink',
        // 'insertImage',
        // 'insertVideo',
        'insertHorizontalRule',
        // 'removeFormat',
        'toggleEditorMode'
      ],
    ],
    customClasses: [
      {
        name: "Class A",
        class: "classname1",
      },
      {
        name: 'Class B',
        class: 'classname2',
        tag: "span",
      },
      {
        name: "Class C",
        class: "classname3",
        tag: "h1",
      },
    ]
  };
}
