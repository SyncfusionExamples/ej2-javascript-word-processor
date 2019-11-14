import { DocumentEditorContainer,Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);
let documenteditor: DocumentEditorContainer = new DocumentEditorContainer();
documenteditor.appendTo('#DocumentEditor');