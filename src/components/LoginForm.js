import React from 'react';
import { useForm } from 'react-hook-form';  // For form state management
import { yupResolver } from '@hookform/resolvers/yup'; // Integrates Yup with React Hook Form
import * as yup from 'yup';  // For validation schema

// Define validation schema using Yup
const schema = yup.object().shape({
  email: yup.string()
    .email('Invalid email format')   // Ensures valid email
    .required('Email is required'),  // Email is mandatory
  password: yup.string()
    .min(6, 'Password must be at least 6 characters') // Minimum length check
    .required('Password is required'),         // Password is mandatory
});

const LoginForm = () => {
  // Initialize form with validation resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Login data:', data); // Logs form data (replace with API call in production)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')} // Registers input with React Hook Form
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> // Displays validation error
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log in
          </button>
        </form>
      );
    };

    export default LoginForm;