"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { createGalleryItem, updateGalleryItem } from "@/lib/api";

export default function GalleryFormModal({ isOpen, onClose, onSuccess, editItem = null }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const isEdit = Boolean(editItem);

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title || "");
      setPreviewUrl(editItem.imageUrl || "");
      setFile(null);
    } else {
      setTitle("");
      setPreviewUrl("");
      setFile(null);
    }
    setError("");
  }, [editItem, isOpen]);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Validate size (5MB max)
    if (selected.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    // Validate type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validTypes.includes(selected.type)) {
      setError("Only JPG, PNG, and WEBP formats are supported");
      return;
    }

    setError("");
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selected = e.dataTransfer.files[0];
      if (selected.size > 5 * 1024 * 1024) {
        setError("Image size must be less than 5MB");
        return;
      }
      const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
      if (!validTypes.includes(selected.type)) {
        setError("Only JPG, PNG, and WEBP formats are supported");
        return;
      }
      setError("");
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Please enter a title for the image");
      return;
    }

    if (!isEdit && !file) {
      setError("Please select an image to upload");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title.trim());

      if (isEdit) {
        formData.append("id", editItem.id);
        if (file) {
          formData.append("image", file);
        }
        const res = await updateGalleryItem(formData);
        if (res.success) {
          onSuccess(res.message || "Image updated successfully!");
          onClose();
        } else {
          setError(res.message || "Failed to update image");
        }
      } else {
        formData.append("image", file);
        const res = await createGalleryItem(formData);
        if (res.success) {
          onSuccess(res.message || "Image uploaded successfully!");
          onClose();
        } else {
          setError(res.message || "Failed to upload image");
        }
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {isEdit ? "Edit Gallery Item" : "Upload New Image"}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              {isEdit
                ? "Update image caption or replace the photo"
                : "Add a photo with caption to the foundation gallery"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload Area / Preview */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Photo {isEdit && <span className="text-xs font-normal text-gray-500">(Leave unchanged to keep current image)</span>}
            </label>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                previewUrl
                  ? "border-[#0F6E57]/40 bg-emerald-50/20"
                  : "border-gray-300 hover:border-[#0F6E57] bg-gray-50/50 hover:bg-emerald-50/10"
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg,image/png,image/webp,image/jpg"
                className="hidden"
              />

              {previewUrl ? (
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                    unoptimized={previewUrl.startsWith("blob:")}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Click or drag to change image
                  </div>
                </div>
              ) : (
                <div className="py-8 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100/70 text-[#0F6E57] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG, WEBP up to 5MB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Title / Caption <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Annual Community Health Workshop"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F6E57] focus:border-transparent text-sm text-gray-500 transition-all"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#0F6E57] hover:bg-[#0c5946] transition-colors shadow-md hover:shadow-lg disabled:opacity-50 flex items-center gap-2"
            >
              {loading && (
                <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              <span>{loading ? "Saving..." : isEdit ? "Update Image" : "Upload Image"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
