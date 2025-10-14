import { Link, useLocation } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/assess', label: 'Assess' },
    { to: '/about', label: 'About' },
    { to: '/explanations', label: 'Explanations' },
    { to: '/tips', label: 'Tips' },
    { to: '/contact', label: 'Contact' },
  ];
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color:var(--surface)]/85 border-b border-[color:var(--border)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <HeartPulse className="w-6 h-6 text-[color:var(--primary)]" />
            <span className="font-['EB_Garamond',serif] font-semibold text-lg">Early Heart Risk</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[color:var(--primary)] ${
                  location.pathname === link.to ? 'text-[color:var(--primary)]' : 'text-[color:var(--ink)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link to="/assess">
            <Button
              data-testid="nav-start-assessment-button"
              className="inline-flex items-center justify-center px-4 h-11 rounded-[var(--r-md)] font-medium bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200"
            >
              Start Assessment
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};