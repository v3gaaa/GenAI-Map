import React from "react";
import ReactMarkdown from "react-markdown";

const MDRenderer = ({ markdownText }) => {
  return (
    <>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </>
  );
};

export default MDRenderer;
