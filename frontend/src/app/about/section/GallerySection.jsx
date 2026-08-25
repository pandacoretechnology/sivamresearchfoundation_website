"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchGallery } from "@/lib/api";

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadGallery() {
      try {
        setLoading(true);
        const res = await fetchGallery();
        if (isMounted) {
          if (res.success && Array.isArray(res.data)) {
            setImages(res.data);
          } else {
            setError(res.message || "Failed to load gallery");
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadGallery();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 bg-white">
      {/* Header Area */}
      <div className="flex flex-col items-center text-center mb-12 px-4">
        <span className="text-sm font-semibold tracking-wider text-[#1f7456] uppercase mb-2">
          Moments & Memories
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f7456] mb-4">
          Gallery of Works
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
          Showcasing our journey of empowering individuals, supporting communities,
          and advancing mental health through meaningful initiatives and rehabilitation.
        </p>
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="relative w-full aspect-square bg-gray-200 animate-pulse rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-300/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      )}

      {/* Error or Empty State */}
      {!loading && error && (
        <div className="text-center py-12 px-4 bg-red-50 rounded-2xl border border-red-100 max-w-md mx-auto">
          <p className="text-red-700 font-medium mb-2">Unable to load gallery images</p>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && images.length === 0 && (
        <div className="text-center py-16 px-4 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            No gallery images yet
          </h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Images uploaded through the admin portal will appear here dynamically.
          </p>
        </div>
      )}

      {/* Grid Area */}
      {!loading && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {image.imageUrl ? (
                <Image
                  src={image.imageUrl}
                  alt={image.title || "Gallery item"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                  No Image
                </div>
              )}

              {/* Gradient Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-white font-medium text-base line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </p>
                <span className="text-white/80 text-xs mt-1 flex items-center gap-1 font-light">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Click to expand
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/90 hover:text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors focus:outline-none"
              aria-label="Close image preview"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Modal Image */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden bg-black/40 shadow-2xl">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title || "Gallery preview"}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>

            {/* Image Title / Info Footer */}
            {selectedImage.title && (
              <div className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium text-center max-w-lg">
                {selectedImage.title}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}