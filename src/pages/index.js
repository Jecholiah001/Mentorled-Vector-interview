import React from 'react';
import Link from 'next/link'; // For client-side navigation
import RootLayout from '../app/layout';



const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Vector Interview App
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please{' '}
            <Link href="/login" className="font-medium text-white hover:text-indigo-500">
              log in
            </Link>{' '}
            or{' '}
            <Link href="/signup" className="font-medium text-white hover:text-indigo-500">
                  sign up
                </Link>{' '}
                to continue.
              </p>
            </div>
          </div>
        </div>
      );
    };

    export default HomePage;