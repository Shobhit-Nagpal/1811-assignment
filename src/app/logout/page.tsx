"use client";

import { logout } from "./actions";

export default function LogoutPage() {
  async function handleLogout() {
    logout();
  }
  return (
  <div>
  <button onClick={() => handleLogout()}>Logout</button>
  </div>
  );
}
