import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";

const [url, setUrl] = useState();

export const PhotoGallery = () => {

    const { gameId } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileSelect = (event) => {

        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setSelectedImage(selectedFile);
        }
    };

    const handleUpload = async () => {
        if (selectedImage) {
            setUploading(true);
            const gameRef = ref(storage, `pictures/${gameId}/${selectedImage.name}`); 
            try {
                await uploadBytes(gameRef, selectedImage); 
                console.log("File uploaded successfully");
            } catch (error) {
                console.error("Error uploading file:", error);
            }
            setUploading(false);
        }
    };

    return (
        <div>
            <h1>Photo Gallery</h1>
            <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileSelect}
            />
            {selectedImage && (
                <div>
                    <h2>Selected Image:</h2>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                </div>
            )}
             <button onClick={handleUpload} disabled={!selectedImage || uploading}>
        {uploading ? "Uploading..." : "Post"}
      </button>
        </div>
    )
}