import Cookies from "js-cookie";

const API_BASE = "/backend_api";

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
      credentials: "include",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Login failed");

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

export async function getProfile() {
  try {
    let token = Cookies.get("access_token");

    if (!token && typeof window !== "undefined") {
      const authState = JSON.parse(localStorage.getItem("auth"));
      token = authState?.access_token;
    }

    if (!token) {
      throw new Error("Authentication required. Please login again.");
    }

    const response = await fetch(`${API_BASE}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include", 
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Failed to fetch profile");

    return data;
  } catch (error) {
    if (error.message.includes("Authentication")) {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
    }
    throw error;
  }
}

export async function logout() {
  try {
    const response = await fetch(`${API_BASE}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
      credentials: "include",
    });

    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("role");
    Cookies.remove("user_id");
    Cookies.remove("username");

    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
    }

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.detail || "Logout failed");
    }

    return { success: true };
  } catch (error) {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("role");
    Cookies.remove("user_id");
    Cookies.remove("username");

    throw error;
  }
}
