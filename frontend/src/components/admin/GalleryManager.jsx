"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchGallery, deleteGalleryItem, logoutAdmin } from "@/lib/api";
import GalleryFormModal from "./form";
import ProfessionalsManager from "./ProfessionalsManager";

export default function GalleryManager({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("gallery"); // "gallery" | "professionals"
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);

  // Modal states for gallery
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "table"

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const loadImages = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetchGallery();
      if (res && res.success && Array.isArray(res.data)) {
        setImages(res.data);
      } else {
        setError(res?.message || "Failed to load gallery items");
      }
    } catch (err) {
      setError(err.message || "Failed to connect to backend server");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingItem) return;

    try {
      setDeleteLoading(true);
      const res = await deleteGalleryItem(deletingItem.id);
      if (res && res.success) {
        showToast("Image deleted successfully", "success");
        setImages((prev) => prev.filter((img) => img.id !== deletingItem.id));
        setDeletingItem(null);
      } else {
        showToast(res?.message || "Failed to delete image", "error");
      }
    } catch (err) {
      showToast(err.message || "Error deleting image", "error");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    if (onLogout) {
      onLogout();
    }
  };

  const filteredImages = images.filter((img) =>
    (img.title || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white/90">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-xl border text-sm font-medium flex items-center gap-3 transition-all animate-in slide-in-from-bottom-5 ${
            toast.type === "success"
              ? "bg-emerald-800 text-white border-emerald-700"
              : "bg-red-800 text-white border-red-700"
          }`}
        >
          {toast.type === "success" ? (
            <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#0F6E57] flex items-center justify-center text-white font-bold text-lg shadow-xs">
                S
              </div>
              <div>
                <h1 className="text-base font-bold text-gray-900 leading-tight">
                  SRF Admin Portal
                </h1>
                <p className="text-xs text-gray-400">Content Management</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#0F6E57] px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#0F6E57] transition-colors"
            >
              <span>Live Website</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <div className="h-6 w-px bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#0F6E57] font-semibold flex items-center justify-center text-xs">
                {user?.username ? user.username.charAt(0).toUpperCase() : "A"}
              </div>
              <span className="text-sm font-medium text-gray-700 hidden md:block">
                {user?.username || "Admin"}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
              title="Logout"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-gray-100/90 rounded-2xl w-fit border border-gray-200/70">
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "gallery"
                ? "bg-white text-[#0F6E57] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Gallery Collection</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === "gallery" ? "bg-emerald-50 text-[#0F6E57]" : "bg-gray-200 text-gray-600"
            }`}>
              {images.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("professionals")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "professionals"
                ? "bg-white text-[#0F6E57] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Our Professionals</span>
          </button>
        </div>

        {/* Tab 1: Gallery Management */}
        {activeTab === "gallery" && (
          <div>
            {/* Header & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Gallery Management</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Upload, edit, and organize photos featured in the public gallery.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={loadImages}
                  disabled={loading}
                  className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors shadow-sm disabled:opacity-50"
                  title="Refresh Gallery"
                >
                  <svg className={`w-5 h-5 ${loading ? "animate-spin text-[#0F6E57]" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>

                <button
                  onClick={handleOpenCreate}
                  className="inline-flex items-center gap-2 bg-[#0F6E57] hover:bg-[#0c5946] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Upload New Photo</span>
                </button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search images by title..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F6E57] focus:bg-white transition-all"
                />
                <svg
                  className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-xs text-gray-500 font-medium">
                  Showing {filteredImages.length} of {images.length} photos
                </span>

                <div className="flex items-center bg-gray-100 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-gray-900 shadow-xs"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    title="Grid View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                      viewMode === "table"
                        ? "bg-white text-gray-900 shadow-xs"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    title="List View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 text-sm rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
                <button
                  onClick={loadImages}
                  className="text-xs font-semibold text-red-800 hover:underline"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Loading state */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <div key={n} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 animate-pulse">
                    <div className="w-full aspect-square bg-gray-200 rounded-xl mb-3" />
                    <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-2" />
                    <div className="h-3 bg-gray-200 rounded-md w-1/2" />
                  </div>
                ))}
              </div>
            )}

            {/* Empty state */}
            {!loading && filteredImages.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-lg mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#0F6E57] mx-auto flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {searchQuery ? "No matching photos found" : "No photos uploaded yet"}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {searchQuery
                    ? `No images match your search "${searchQuery}".`
                    : "Upload your first photo to start curating the public gallery."}
                </p>
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Clear Search
                  </button>
                ) : (
                  <button
                    onClick={handleOpenCreate}
                    className="inline-flex items-center gap-2 bg-[#0F6E57] hover:bg-[#0c5946] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Upload First Photo</span>
                  </button>
                )}
              </div>
            )}

            {/* Grid View */}
            {!loading && filteredImages.length > 0 && viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.title || "Gallery thumbnail"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                        <button
                          onClick={() => setPreviewImage(image)}
                          className="p-2.5 rounded-full bg-white/90 text-gray-800 hover:bg-white hover:text-[#0F6E57] shadow-md transition-transform hover:scale-110"
                          title="Preview Full Image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleOpenEdit(image)}
                          className="p-2.5 rounded-full bg-white/90 text-gray-800 hover:bg-white hover:text-[#0F6E57] shadow-md transition-transform hover:scale-110"
                          title="Edit Caption / Image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setDeletingItem(image)}
                          className="p-2.5 rounded-full bg-white/90 text-red-600 hover:bg-white hover:text-red-700 shadow-md transition-transform hover:scale-110"
                          title="Delete Image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2" title={image.title}>
                        {image.title}
                      </h4>
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                        <span>ID: #{image.id}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenEdit(image)}
                            className="text-gray-500 hover:text-[#0F6E57] font-medium"
                          >
                            Edit
                          </button>
                          <span>•</span>
                          <button
                            onClick={() => setDeletingItem(image)}
                            className="text-red-500 hover:text-red-700 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Table View */}
            {!loading && filteredImages.length > 0 && viewMode === "table" && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                      <tr>
                        <th scope="col" className="px-6 py-3.5 font-semibold">Photo</th>
                        <th scope="col" className="px-6 py-3.5 font-semibold">Title / Caption</th>
                        <th scope="col" className="px-6 py-3.5 font-semibold">ID</th>
                        <th scope="col" className="px-6 py-3.5 text-right font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredImages.map((image) => (
                        <tr key={image.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div
                              className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer"
                              onClick={() => setPreviewImage(image)}
                            >
                              <Image src={image.imageUrl} alt={image.title} fill className="object-cover" />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-900 max-w-md">{image.title}</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-mono text-xs">
                            #{image.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium space-x-2">
                            <button
                              onClick={() => setPreviewImage(image)}
                              className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                            >
                              Preview
                            </button>
                            <button
                              onClick={() => handleOpenEdit(image)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-50 text-[#0F6E57] hover:bg-emerald-100 transition-colors"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => setDeletingItem(image)}
                              className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Gallery Upload/Edit Modal */}
            <GalleryFormModal
              isOpen={isModalOpen}
              editItem={editingItem}
              onClose={() => {
                setIsModalOpen(false);
                setEditingItem(null);
              }}
              onSuccess={(msg) => {
                showToast(msg, "success");
                loadImages();
              }}
            />

            {/* Delete Modal */}
            {deletingItem && (
              <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setDeletingItem(null)}
              >
                <div
                  className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Gallery Photo?</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Are you sure you want to permanently delete <span className="font-semibold text-gray-800">"{deletingItem.title}"</span>?
                  </p>
                  <p className="text-xs text-red-500 mb-6 bg-red-50 p-2.5 rounded-xl">
                    This will remove the image from Cloudinary storage and database permanently.
                  </p>

                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setDeletingItem(null)}
                      disabled={deleteLoading}
                      className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleDeleteConfirm}
                      disabled={deleteLoading}
                      className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 flex items-center gap-2"
                    >
                      {deleteLoading && (
                        <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      )}
                      <span>{deleteLoading ? "Deleting..." : "Yes, Delete"}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Lightbox Preview */}
            {previewImage && (
              <div
                className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                onClick={() => setPreviewImage(null)}
              >
                <div
                  className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setPreviewImage(null)}
                    className="absolute -top-12 right-0 text-white/90 hover:text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden bg-black/40 shadow-2xl">
                    <Image
                      src={previewImage.imageUrl}
                      alt={previewImage.title || "Preview"}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 896px"
                    />
                  </div>
                  {previewImage.title && (
                    <div className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
                      {previewImage.title}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Professionals Management */}
        {activeTab === "professionals" && (
          <ProfessionalsManager showToast={showToast} />
        )}
      </main>
    </div>
  );
}
