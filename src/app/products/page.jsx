"use client";
import Link from "next/link";
import { Products } from "@/app/components/Products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Products />
    </div>
  );
}
