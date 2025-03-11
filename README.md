# Vector Interview App Frontend Design

  A frontend for the Vector Interview platform built with Next.js, featuring authentication UI with Login and Signup pages and form validation.

  ## Project Structure

  - `pages/` - Defines routes and page components.
    - `index.js` - Home page with links to login/signup.
    - `login.js` - Login page rendering `LoginForm`.
    - `signup.js` - Signup page rendering `SignupForm`.
  - `components/` - Reusable UI components.
    - `LoginForm.js` - Form with email and password fields, validated using Yup.
    - `SignupForm.js` - Form with email, password, and confirm password fields.
  - `styles/` - Global styles with Tailwind CSS configuration.

  ## Component Architecture

  - **LoginForm**: Manages email and password inputs with React Hook Form, validated by Yup (email format, min password length).
  - **SignupForm**: Extends LoginForm with a confirm password field, ensuring passwords match.
  - **Pages**: Use Tailwind CSS to center forms, providing a responsive layout.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
