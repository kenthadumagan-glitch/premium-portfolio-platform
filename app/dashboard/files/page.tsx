"use client";

import { ChangeEvent, useState } from "react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { formatBytes, formatDate } from "@/lib/utils";

const sampleFiles = [
  { name: "brand-guidelines.pdf", type: "PDF", size: 2140000, uploadedAt: "2025-06-12T14:00:00.000Z" },
  { name: "portfolio-images.zip", type: "ZIP", size: 873000, uploadedAt: "2025-06-11T11:24:00.000Z" },
  { name: "meeting-notes.txt", type: "TXT", size: 16000, uploadedAt: "2025-06-09T18:12:00.000Z" }
];

export default function DashboardFilesPage() {
  const [files, setFiles] = useState(sampleFiles);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files;
    if (!selected || selected.length === 0) return;

    const newFiles = Array.from(selected).map((file) => ({
      name: file.name,
      type: file.name.split(".").pop()?.toUpperCase() || "FILE",
      size: file.size,
      uploadedAt: new Date().toISOString()
    }));

    setFiles((current) => [...newFiles, ...current]);
    event.target.value = "";
  };

  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h1>My Files</h1>
          <label className="file-upload">
            <input className="upload-input" type="file" multiple onChange={handleUpload} />
            Upload Files
          </label>
        </div>

        <section className="file-card">
          <table className="list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Uploaded</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={`${file.name}-${file.uploadedAt}`}>
                  <td>{file.name}</td>
                  <td>{file.type}</td>
                  <td>{formatBytes(file.size)}</td>
                  <td>{formatDate(file.uploadedAt)}</td>
                  <td>
                    <div className="inline-actions">
                      <a href="#" className="inline-link">Download</a>
                      <a href="#" className="inline-link">Rename</a>
                      <a href="#" className="inline-link">Delete</a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
