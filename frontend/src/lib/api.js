/**
 * Centralized API client for SRF Backend
 */

export function getApiBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

  if (typeof window !== "undefined") {
    // If NEXT_PUBLIC_API_BASE_URL is configured, adapt hostname if client is browsing from an IP/network
    if (envUrl) {
      try {
        const urlObj = new URL(envUrl);
        if (
          (urlObj.hostname === "localhost" || urlObj.hostname === "127.0.0.1") &&
          window.location.hostname !== "localhost" &&
          window.location.hostname !== "127.0.0.1"
        ) {
          urlObj.hostname = window.location.hostname;
          return urlObj.toString().replace(/\/$/, "");
        }
        return envUrl;
      } catch (e) {
        return envUrl;
      }
    }

    // Default fallback when running in browser
    return `http://${window.location.hostname}:8000`;
  }

  return envUrl || "http://localhost:8000";
}

/**
 * Fetch wrapper with timeout to prevent hanging UI
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = 4000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      throw new Error(`Request timed out. Please check if the PHP backend server is running.`);
    }
    throw err;
  }
}

/**
 * Check if the admin is currently authenticated with an active session.
 */
export async function checkAuthSession() {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/auth/check.php`,
      {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      },
      3000 // 3 seconds timeout for fast initial load
    );

    if (!res.ok) {
      return { success: false, loggedIn: false, message: `Server status: ${res.status}` };
    }

    const data = await res.json();
    return {
      success: data.success ?? false,
      loggedIn: data.data?.loggedIn ?? false,
      user: data.data?.user ?? null,
    };
  } catch (error) {
    console.warn("Auth check unreachable or timed out:", error.message);
    return { success: false, loggedIn: false, error: error.message };
  }
}

/**
 * Login admin with username and password.
 */
export async function loginAdmin(username, password) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/auth/login.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      },
      8000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    return {
      success: false,
      message: error.message || "Failed to connect to backend server. Make sure PHP server is running.",
    };
  }
}

/**
 * Logout active admin session.
 */
export async function logoutAdmin() {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/auth/logout.php`,
      {
        method: "POST",
        credentials: "include",
      },
      5000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Logout failed:", error);
    return { success: false, message: error.message || "Failed to logout" };
  }
}

/**
 * Fetch all gallery items.
 */
export async function fetchGallery() {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/gallery/get.php`,
      {
        method: "GET",
        cache: "no-store",
      },
      5000
    );

    if (!res.ok) {
      return { success: false, message: `Server returned ${res.status}`, data: [] };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("Fetch gallery failed:", error.message);
    return {
      success: false,
      message: error.message || "Backend server not responding.",
      data: [],
    };
  }
}

/**
 * Fetch a single gallery item by ID.
 */
export async function fetchGalleryItem(id) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/gallery/show.php?id=${encodeURIComponent(id)}`,
      {
        method: "GET",
        cache: "no-store",
      },
      5000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch gallery item failed:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Upload a new gallery item (FormData containing `title` and `image`).
 */
export async function createGalleryItem(formData) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/gallery/create.php`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      },
      25000 // 25s for Cloudinary upload
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Create gallery item failed:", error);
    return { success: false, message: error.message || "Failed to upload image" };
  }
}

/**
 * Update an existing gallery item (FormData containing `id`, `title`, and optional `image`).
 */
export async function updateGalleryItem(formData) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/gallery/update.php`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      },
      25000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Update gallery item failed:", error);
    return { success: false, message: error.message || "Failed to update image" };
  }
}

/**
 * Delete a gallery item by ID.
 */
export async function deleteGalleryItem(id) {
  const baseUrl = getApiBaseUrl();
  try {
    const formData = new FormData();
    formData.append("id", id);

    const res = await fetchWithTimeout(
      `${baseUrl}/api/gallery/delete.php`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      },
      10000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Delete gallery item failed:", error);
    return { success: false, message: error.message || "Failed to delete image" };
  }
}

/**
 * Fetch all professionals / doctors.
 */
export async function fetchProfessionals() {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/professionals/get.php`,
      {
        method: "GET",
        cache: "no-store",
      },
      5000
    );

    if (!res.ok) {
      return { success: false, message: `Server returned ${res.status}`, data: [] };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("Fetch professionals failed:", error.message);
    return {
      success: false,
      message: error.message || "Backend server not responding.",
      data: [],
    };
  }
}

/**
 * Fetch a single professional by ID.
 */
export async function fetchProfessionalItem(id) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/professionals/show.php?id=${encodeURIComponent(id)}`,
      {
        method: "GET",
        cache: "no-store",
      },
      5000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch professional item failed:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Create a new professional (FormData containing `name`, `specialty`, and `image`).
 */
export async function createProfessional(formData) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/professionals/create.php`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      },
      25000 // 25s for Cloudinary upload
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Create professional failed:", error);
    return { success: false, message: error.message || "Failed to add professional" };
  }
}

/**
 * Update an existing professional (FormData containing `id`, `name`, `specialty`, and optional `image`).
 */
export async function updateProfessional(formData) {
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetchWithTimeout(
      `${baseUrl}/api/professionals/update.php`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      },
      25000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Update professional failed:", error);
    return { success: false, message: error.message || "Failed to update professional" };
  }
}

/**
 * Delete a professional by ID.
 */
export async function deleteProfessional(id) {
  const baseUrl = getApiBaseUrl();
  try {
    const formData = new FormData();
    formData.append("id", id);

    const res = await fetchWithTimeout(
      `${baseUrl}/api/professionals/delete.php`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      },
      10000
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Delete professional failed:", error);
    return { success: false, message: error.message || "Failed to delete professional" };
  }
}
