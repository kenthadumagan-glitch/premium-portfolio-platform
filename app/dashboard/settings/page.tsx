import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardSettingsPage() {
  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h1>Settings</h1>
        </div>

        <section className="profile-card">
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="display-name">Display Name</label>
              <input id="display-name" defaultValue="Aster Quinn" />
            </div>
            <div className="field-group">
              <label htmlFor="website">Portfolio URL</label>
              <input id="website" defaultValue="https://asterquinn.design" />
            </div>
            <div className="field-group">
              <label htmlFor="notifications">Email Notifications</label>
              <input id="notifications" type="checkbox" defaultChecked />
            </div>
            <button type="button" className="primary-btn">Save Settings</button>
          </div>
        </section>
      </main>
    </div>
  );
}
