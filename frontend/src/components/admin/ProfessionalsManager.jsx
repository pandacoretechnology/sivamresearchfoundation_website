"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { fetchProfessionals, deleteProfessional } from "@/lib/api";
import ProfessionalModal from "./ProfessionalModal";

export default function ProfessionalsManager({ showToast }) {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetchProfessionals();
      if (res && res.success && Array.isArray(res.data)) {
        setProfessionals(res.data);
      } else {
        setError(res?.message || "Failed to load professionals");
      }
    } catch (err) {
      setError(err.message || "Failed to connect to backend");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
      const res = await deleteProfessional(deletingItem.id);
      if (res && res.success) {
        showToast("Professional profile deleted successfully", "success");
        setProfessionals((prev) => prev.filter((item) => item.id !== deletingItem.id));
        setDeletingItem(null);
      } else {
        showToast(res?.message || "Failed to delete profile", "error");
      }
    } catch (err) {
      showToast(err.message || "Error deleting profile", "error");
    } finally {
      setDeleteLoading(false);
    }
  };

  const filtered = professionals.filter((item) =>
    (item.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.specialty || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Professionals Management</h2>
          <p className="text-sm text-gray-500 mt-1">
            Add, update, or remove doctors and clinical specialists displayed on the homepage.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            disabled={loading}
            className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors shadow-sm disabled:opacity-50"
            title="Refresh List"
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
            <span>Add New Professional</span>
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
            placeholder="Search by name or specialty..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-gray-500 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E57] focus:bg-white transition-all"
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

        <span className="text-xs text-gray-500 font-medium">
          Showing {filtered.length} of {professionals.length} specialists
        </span>
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
          <button onClick={loadData} className="text-xs font-semibold text-red-800 hover:underline">
            Retry
          </button>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-200 animate-pulse">
              <div className="w-full aspect-4/5 bg-gray-200 rounded-2xl mb-4" />
              <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded-md w-full" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filtered.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-lg mx-auto my-8">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#0F6E57] mx-auto flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {searchQuery ? "No matching specialists found" : "No professionals added yet"}
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            {searchQuery
              ? `No professionals match your search "${searchQuery}".`
              : "Add your first doctor or therapist to showcase them on the homepage."}
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
              <span>Add First Professional</span>
            </button>
          )}
        </div>
      )}

      {/* Grid of Professionals */}
      {!loading && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((pro) => (
            <div
              key={pro.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image & overlay */}
              <div className="relative w-full aspect-4/5 bg-gray-100 overflow-hidden">
                {pro.imageUrl ? (
                  <Image
                    src={pro.imageUrl}
                    alt={pro.name || "Doctor portrait"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                    No Portrait
                  </div>
                )}

                {/* Quick actions overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5 p-4">
                  <button
                    onClick={() => handleOpenEdit(pro)}
                    className="p-2.5 rounded-full bg-white/95 text-gray-800 hover:bg-white hover:text-[#0F6E57] shadow-md transition-transform hover:scale-110"
                    title="Edit Profile"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setDeletingItem(pro)}
                    className="p-2.5 rounded-full bg-white/95 text-red-600 hover:bg-white hover:text-red-700 shadow-md transition-transform hover:scale-110"
                    title="Delete Profile"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-1" title={pro.name}>
                    {pro.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed" title={pro.specialty}>
                    {pro.specialty}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>ID: #{pro.id}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEdit(pro)}
                      className="text-gray-600 hover:text-[#0F6E57] font-medium"
                    >
                      Edit
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => setDeletingItem(pro)}
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

      {/* Modal */}
      <ProfessionalModal
        isOpen={isModalOpen}
        editItem={editingItem}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        onSuccess={(msg) => {
          showToast(msg, "success");
          loadData();
        }}
      />

      {/* Delete Confirmation Modal */}
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Professional?</h3>
            <p className="text-sm text-gray-500 mb-2">
              Are you sure you want to remove <span className="font-semibold text-gray-800">"{deletingItem.name}"</span>?
            </p>
            <p className="text-xs text-red-500 mb-6 bg-red-50 p-2.5 rounded-xl">
              This will delete their portrait from Cloudinary and database permanently.
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
    </div>
  );
}
