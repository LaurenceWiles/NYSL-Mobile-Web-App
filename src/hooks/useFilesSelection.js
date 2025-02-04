import { useState, useRef } from "react";

const useFileSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const resetFileInput = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return { selectedImage, setSelectedImage, fileInputRef, resetFileInput };
};

export default useFileSelection;
