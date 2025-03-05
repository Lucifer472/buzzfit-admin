"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

const CropperImage = ({ file }: { file: File | null }) => {
  const previewRef = useRef<ReactCropperElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    const onImageChange = (file: File) => {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    };

    if (file) {
      onImageChange(file);
    }
  }, [file]);

  const cropImage = () => {
    setLoading(true);
    const cropper = previewRef.current?.cropper;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas(); // Get the cropped canvas

      const croppedImage = croppedCanvas.toDataURL("image/png"); // You can also use 'image/jpeg' or 'image/webp'

      // Create FormData to send the cropped image
      const formData = new FormData();

      // Convert the base64 image data into a Blob for FormData (send as PNG or JPEG)
      const byteString = atob(croppedImage.split(",")[1]); // Decoding base64 data
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([arrayBuffer], { type: "image/png" }); // You can change 'image/png' to 'image/jpeg' if needed

      // Append the Blob (cropped image) to the FormData
      const randomName = Math.round(Math.random() * 999999) + 1;
      formData.append("img", blob, `${randomName}.png`); // 'cropped-image.png' is the filename, adjust as needed

      formData.append("folder", "users");

      fetch("https://img.missiongujarat.in/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          router.push(
            `/ai/${params.id}/result?img=${encodeURIComponent(data)}`
          );
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          alert("Error uploading image");

          window.location.reload();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (!image) return;

  return (
    <div
      className={cn(
        "max-w-screen-sm mx-auto w-full min-h-screen relative overflow-hidden"
      )}
    >
      <div className="absolute top-1/2 bg-black -translate-y-1/2 left-0 w-full items-center justify-center h-full flex max-w-full">
        <Cropper
          src={image}
          style={{ aspectRatio: "auto" }}
          aspectRatio={1 / 1} // Set the aspect ratio (optional)
          guides={true} // Show guides (optional)
          ref={previewRef}
          cropBoxResizable={true} // Allow resizing of crop box
          viewMode={1} // Restrict cropping to the image boundary
        />
        <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2">
          <button
            onClick={cropImage}
            disabled={loading}
            type="button"
            className="px-12 py-2 bg-pink-500 text-xl font-medium text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropperImage;
