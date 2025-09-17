"use client";

import { useState } from "react";
import { BookRowMenu } from "./BookRowMenu";

// Mock data
const books = [
  {
    id: 1,
    name: "The Great Gatsby",
    genre: "Fiction",
    author: "F. Scott Fitzgerald",
    language: "English",
    releaseDate: "1925",
    publisher: "Scribner",
  },
  {
    id: 2,
    name: "Clean Code",
    genre: "Tech",
    author: "Robert C. Martin",
    language: "English",
    releaseDate: "2008",
    publisher: "Prentice Hall",
  },
];

export function BooksTable() {
  const [page, setPage] = useState(1);

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full bg-white dark:bg-gray-900">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Language</th>
            <th className="px-4 py-2">Release Date</th>
            <th className="px-4 py-2">Publisher</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="px-4 py-2">{book.name}</td>
              <td className="px-4 py-2">{book.genre}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.language}</td>
              <td className="px-4 py-2">{book.releaseDate}</td>
              <td className="px-4 py-2">{book.publisher}</td>
              <td className="px-4 py-2 text-right">
                <BookRowMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Simple pagination */}
      <div className="flex justify-between items-center p-4 text-sm">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
