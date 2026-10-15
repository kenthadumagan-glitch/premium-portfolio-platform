import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardMessagesPage() {
  const messages = [
    { sender: "Maya Stone", email: "maya@example.com", subject: "Project inquiry", preview: "I would love to hear more about your process and timeline.", received: "Today" },
    { sender: "Noah James", email: "noah@example.com", subject: "Brand strategy", preview: "Could we discuss a premium design system for our next launch?", received: "2 days ago" },
    { sender: "Rina West", email: "rina@example.com", subject: "Portfolio feedback", preview: "Your recent concept work feels really polished and premium.", received: "5 days ago" }
  ];

  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h1>Messages</h1>
        </div>

        <section className="message-card">
          {messages.length === 0 ? (
            <div className="empty-state">No messages yet.</div>
          ) : (
            <table className="list-table">
              <thead>
                <tr>
                  <th>Sender</th>
                  <th>Subject</th>
                  <th>Preview</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={`${message.sender}-${message.subject}`}>
                    <td>{message.sender}<br /><small>{message.email}</small></td>
                    <td>{message.subject}</td>
                    <td>{message.preview}</td>
                    <td>{message.received}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
}
