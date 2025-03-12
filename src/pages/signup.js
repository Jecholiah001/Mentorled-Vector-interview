import React from 'react';
import SignupForm from '../components/SignUpForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <SignupForm /> {/* Renders the signup form */}
      </div>
    </div>
  );
};

export default SignupPage;
