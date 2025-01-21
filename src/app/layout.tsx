import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex flex-col max-h-screen overflow-auto items-center">
        {children}
      </body>
    </html>
  );
}
