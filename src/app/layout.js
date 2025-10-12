import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website of LN Praneesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
