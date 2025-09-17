"use client";

import Container from "@/shared/ui/Container";
import { BooksTable } from "@/features/books/components/BooksTable";
import { SearchFilterBar } from "@/features/books/components/SearchFilterBar";

export default function BooksPage() {
  return (
    <Container>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Books</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Create Book
        </button>
      </div>

      <SearchFilterBar />

      <BooksTable />
    </Container>
  );
}
