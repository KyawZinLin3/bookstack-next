"use client";

import { useState } from "react";

export function SearchFilterBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select className="px-3 py-2 border rounded-lg">
        <option value="">All Genres</option>
        <option value="fiction">Fiction</option>
        <option value="history">History</option>
        <option value="tech">Tech</option>
      </select>
    </div>
  );
}
