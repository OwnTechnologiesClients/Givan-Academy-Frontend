import React, { useState } from "react";
import copy from "clipboard-copy";
import "./copyToClipboardButton.scss";

const CopyToClipboardButton = ({ linkToCopy, buttonText }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState("");

  const handleCopyClick = async () => {
    try {
      await copy(linkToCopy);
      setIsCopied(true);
      setCopiedMessage("Copied");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      setCopiedMessage("Error copying");
    } finally {
      setTimeout(() => setCopiedMessage(""), 1000);
    }
  };

  return (
    <div className="link-container">
      <input 
        className="link-input"
        type="text"
        placeholder="Enter link to copy"
        value={linkToCopy}
      />
      <button onClick={handleCopyClick} className={`copy-button`}>
        {buttonText}
      </button>
      <span className="copied-message">{copiedMessage}</span>
    </div>
  );
};

export default CopyToClipboardButton;
