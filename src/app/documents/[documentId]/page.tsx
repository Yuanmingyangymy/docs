import React from "react";
import Editor from "./editor";

interface DocumentIdParams {
  params: Promise<{ documentId: string }>;
}
async function DocumentIdPage({ params }: DocumentIdParams) {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
}

export default DocumentIdPage;
