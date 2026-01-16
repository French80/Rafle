import './globals.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: 'GiftHaven — Gift ideas for everyone',
  description: 'Find gift ideas by recipient, occasion, budget, and interests.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
