import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
