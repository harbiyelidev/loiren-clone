import "./globals.css";

export const metadata = {
  title: "Vezir Oni",
  description: "Full-Stack Developer. My name is Egemen, I live in Turkey and I am a high school student.",
  color: 2450411,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="keywords" content="vezironi, harbiyelidev, agdev" />
      </head>
      <body className={`font-galanoRegular px-5 sm:px-0`}>{children}</body>
    </html>
  );
}
