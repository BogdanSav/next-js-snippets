"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}
const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [editorValue, setEditorValue] = useState<string>(snippet.code);
  const handleEditorChange = (value?: string) => {
    setEditorValue(value || "");
  };

  return (
    <div>
      <Editor
        height={"40vh"}
        theme={"vs-dark"}
        language={"javascript"}
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />
      <button>Save</button>
    </div>
  );
};

export default SnippetEditForm;
