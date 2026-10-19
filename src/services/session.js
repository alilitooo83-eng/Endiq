// إنشاء Session ID عشوائي
export function generateSessionId() {
  return Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();
}

// إنشاء جلسة جديدة (Host)
export function createSession() {
  const id = generateSessionId();

  localStorage.setItem("endiq-session", id);
  localStorage.setItem("endiq-role", "host");

  return id;
}

// حفظ جلسة موجودة (Guest)
export function saveSession(id) {
  localStorage.setItem("endiq-session", id);
  localStorage.setItem("endiq-role", "guest");
}

// ضمان وجود دور للـ Host
export function ensureHostRole() {
  if (!localStorage.getItem("endiq-role")) {
    localStorage.setItem("endiq-role", "host");
  }
}

// الحصول على Session ID
export function getSession() {
  return localStorage.getItem("endiq-session");
}

// الحصول على الدور
export function getRole() {
  return localStorage.getItem("endiq-role");
}

// هل المستخدم Host؟
export function isHost() {
  return getRole() === "host";
}

// هل المستخدم Guest؟
export function isGuest() {
  return getRole() === "guest";
}

// حذف بيانات الجلسة
export function clearSession() {
  localStorage.removeItem("endiq-session");
  localStorage.removeItem("endiq-role");
}

// إنشاء رابط المشاركة
export function getSessionLink() {
  const id = getSession();

  if (!id) return "";

  return `${window.location.origin}/join?session=${id}`;
}