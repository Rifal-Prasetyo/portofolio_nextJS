import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useRef } from "react";

const Editor = ({
    value,
    data
}: { value: any, data: any }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
                data(editor.getData());
            }}
        />
    );
};

export default Editor;