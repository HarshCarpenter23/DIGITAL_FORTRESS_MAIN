import './globals.css'
import { RootLayout } from "@/components/RootLayout";

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head></head>
      <body className="flex min-h-full flex-col text-black">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
