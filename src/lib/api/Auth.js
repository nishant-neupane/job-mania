const API_BASE = "/backend_api/main";
import Cookies from "js-cookie";

export async function login({ email, password, userType }) {
  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role: userType,
      }),
      credentials: "include",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Login failed");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function register({ name, email, password, role }) {
  try {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email,
        password,
        role: role,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Registration failed");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function sendOtp({ email }) {
  try {
    const response = await fetch(`${API_BASE}/otp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "OTP send failed");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function verifyOtp({ email, otp }) {
  try {
    const response = await fetch(`${API_BASE}/otp/verify/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "OTP verification failed");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProfile() {
  try {
    const response = await fetch(`${API_BASE}/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Failed to fetch profile");

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateProfile(profileData) {
  try {
    const isFormData = profileData instanceof FormData;

    const headers = {
      "X-CSRFToken": Cookies.get("csrftoken"),
    };

    // Only set Content-Type for JSON, not for FormData
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_BASE}/users/profile`, {
      method: "PUT",
      headers,
      credentials: "include",
      body: isFormData ? profileData : JSON.stringify(profileData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || "Failed to update profile");
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    const response = await fetch(`${API_BASE}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.detail || "Logout failed");
    }

    return { success: true };
  } catch (error) {
    throw error;
  }
}
