import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardProfilePage() {
  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h1>Profile</h1>
        </div>

        <section className="profile-card">
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="full-name">Full Name</label>
              <input id="full-name" defaultValue="Aster Quinn" />
            </div>
            <div className="field-group">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" defaultValue="Creative developer and designer crafting premium digital experiences." />
            </div>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" defaultValue="aster@example.com" />
            </div>
            <div className="field-group">
              <label htmlFor="photo">Profile Photo URL</label>
              <input id="photo" defaultValue="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" />
            </div>
            <button type="button" className="primary-btn">Save Profile</button>
          </div>
        </section>
      </main>
    </div>
  );
}
