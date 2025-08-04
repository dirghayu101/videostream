import React, { useState } from "react";
import { LoginModal, RegisterModal } from "@/components/auth";
import { Header, Footer } from "@/components/common";
import { layoutConfig } from "@/config";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { registerEndpoint, loginEndpoint, searchEndpoint } = layoutConfig;
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onLoginClick={() => setShowLoginModal(true)}
        onRegisterClick={() => setShowRegisterModal(true)}
        searchEndpoint={searchEndpoint}
      />

      <main className="flex-grow">{children}</main>

      <Footer />
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        endpoint={loginEndpoint}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        endpoint={registerEndpoint}
      />
    </div>
  );
};
