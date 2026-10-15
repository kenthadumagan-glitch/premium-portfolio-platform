import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardNotesPage() {
  const notes = [
    { title: "Client workshop", preview: "Define product story, launch narrative, and key conversion checkpoints." },
    { title: "Brand strategy", preview: "Refine visual hierarchy and confirm premium aesthetic direction." },
    { title: "Launch checklist", preview: "Finalize QA, analytics, handoff, and launch communications." }
  ];

  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h1>My Notes</h1>
        </div>

        <section className="note-card">
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="note-title">Title</label>
              <input id="note-title" placeholder="New note title" />
            </div>
            <div className="field-group">
              <label htmlFor="note-content">Notes</label>
              <textarea id="note-content" placeholder="Write your private notes here..." />
            </div>
            <button type="button" className="primary-btn">Save Note</button>
          </div>
        </section>

        <section className="content-grid">
          {notes.map((note) => (
            <article key={note.title} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.preview}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
