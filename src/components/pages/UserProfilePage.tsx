import React from 'react';
import { Layout } from '@/components/common';
import { useAuth } from '@/context';

export const UserProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
            <p className="text-gray-600">Please log in to view your profile.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const handleLogout = () => {
    logout();
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">User Profile</h1>
              <p className="text-gray-600">Welcome to your Netflix profile</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">First Name</h3>
                  <p className="mt-1 text-xl font-semibold text-gray-900">{user.firstName}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Last Name</h3>
                  <p className="mt-1 text-xl font-semibold text-gray-900">{user.lastName}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email Address</h3>
                <p className="mt-1 text-xl font-semibold text-gray-900">{user.email}</p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
