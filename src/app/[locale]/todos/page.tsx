"use client";
import { useGetTodos } from "@/hooks/useTodos";
import Link from "next/link";
import React from "react";

const Todos = () => {
  const { data: todos, isLoading, error } = useGetTodos();

  if (isLoading)
    return <p className="text-center text-gray-500">Loading todos...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading todos.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">link</th>
            </tr>
          </thead>
          <tbody>
            {todos?.slice(0, 10).map((todo) => (
              <tr key={todo.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{todo.id}</td>
                <td className="px-4 py-2">{todo.title}</td>
                <td className="px-4 py-2">
                  <Link href={`/todos/${todo.id}`}>👁</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Todos;
