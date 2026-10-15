"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardPage() {
  const [profileName, setProfileName] = useState("Aster Quinn");

  useEffect(() => {
    async function loadProfile() {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data.user?.user_metadata?.full_name) {
        setProfileName(String(data.user.user_metadata.full_name));
      }
    }

    loadProfile();
  }, []);

  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h1>Welcome back, {profileName}</h1>
          <div className="user-pill">
            <span className="brand-mark" />
            <span>Private workspace</span>
          </div>
        </div>

        <section className="dashboard-grid">
          <div className="metric-card">
            <label>Files</label>
            <strong>42</strong>
          </div>
          <div className="metric-card">
            <label>Storage Used</label>
            <strong>3.2 GB</strong>
          </div>
          <div className="metric-card">
            <label>Unread Messages</label>
            <strong>7</strong>
          </div>
        </section>

        <section className="content-grid">
          <div className="form-card">
            <h3>Recent activity</h3>
            <table className="list-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Context</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Uploaded file</td>
                  <td>Portfolio assets</td>
                  <td>Today</td>
                </tr>
                <tr>
                  <td>Updated profile</td>
                  <td>Bio and contact details</td>
                  <td>2 days ago</td>
                </tr>
                <tr>
                  <td>Saved note</td>
                  <td>Client workshop ideas</td>
                  <td>4 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="form-card">
            <h3>Quick actions</h3>
            <div className="inline-actions">
              <a href="/dashboard/files" className="primary-btn">Open Files</a>
              <a href="/dashboard/messages" className="secondary-btn">View Messages</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
