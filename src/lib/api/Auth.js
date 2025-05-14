import Cookies from "js-cookie";

const API_BASE = "/backend_api";

// Login API
export async function login({ email, password, userType }) {
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role: userType,
      }),
      credentials: "include", // For cookies set by the backend (if any)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Login failed");

    // Save tokens and user info in cookies
    Cookies.set("access_token", data.access_token);
    Cookies.set("refresh_token", data.refresh_token);
    Cookies.set("role", data.role);
    Cookies.set("user_id", data.user_id);
    Cookies.set("username", data.username);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function register({ name, email, password, role }) {
  try {
    const response = await fetch(`${API_BASE}/register/`, {
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
