import React, { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation';
import Home from '@/components/home';
import LoginPage from '@/components/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="frog8-ui-theme">
      {isAuthenticated ? (
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main className="pt-20">
            <Home />
          </main>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </ThemeProvider>
  );
}

export default App;
