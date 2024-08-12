import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Tracker",
  description: "Inventory Tracker is a React and Next.js application that uses Firebase Firestore and Material-UI to manage inventory items. Users can add, remove, and search for items, with the current inventory displayed along with quantities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
