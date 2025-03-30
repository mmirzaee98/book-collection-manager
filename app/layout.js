// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My Book App',
  description: 'A Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
          <h1>My Book App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', marginTop: '1rem' }}>
          <p>&copy; 2025 My Book App</p>
        </footer>
      </body>
    </html>
  );
}
