import './globals.css';
import './styles/prism-catppuccin-mocha.css';
import Header from '../components/Header';

export const metadata = {
  title: 'My Personal Website',
  description: 'A futuristic portfolio website built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
} 