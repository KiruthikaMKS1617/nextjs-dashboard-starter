import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('RootLayout rendered')
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1>Hello from me</h1>
        {children}
      </body>
    </html>
  );
}
