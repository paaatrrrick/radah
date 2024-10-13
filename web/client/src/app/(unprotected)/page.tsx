import React from 'react';

export default function Home() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="flex flex-col xl:w-[1100px] w-[90%] mt-10 gap-6 xl:mb-[250px] mb-[100px]">
        <h1 className="xl:text-4xl font-semibold font-mono text-3xl">
          World's Best Boilerplate 🚀
        </h1>
        <p className="font-mono">
          A full-stack boilerplate with Next.js (React), TypeScript, Node.js, Express, MongoDB, and TailwindCSS. Authentication, Navbars, Databases, Error Handling, Loading Screens, and project setup are already done.
        </p>
        <p className="font-mono font-semibold text-lg">
          {`You can fork the repo here ->`} <a href="https://github.com/paaatrrrick/boilerplate" target="_blank" className="text-brandColor-500 underline">Github Repo</a>
        </p>
        <h3 className='font-mono text-3xl font-semibold mt-8'>
          What is included?
        </h3>
        <p className="font-mono">
          This boilerplate aims to save you 6 hours every time you start a new project and prevents common bugs from happening.
          <br />
          <br />
          But don't just take it from me, this website is the boilerplate. Feel free to explore.
        </p>
        <h6 className="font-mono text-xl font-semibold mt-8">
          Authentication:
        </h6>
        <p className="font-mono">
          Authentication is handled through Firebase with Google and Email Login. Adding a page to the `{`(client/src/app/(protected))`}` folder makes it accessible only to logged-in users. 
          Endpoints can be easily protected with the Authenticate middleware. A demo of this can be seen in `{`(src/server/routes/profile.ts)`}`.
        </p>
        <p className="font-mono">
          There is Regex for email and password validation with error messages on authentication screens.
        </p>
        <h6 className="font-mono text-xl font-semibold">
          Navbar:
        </h6>
        <p className="font-mono">
          There are two Navbars (one for the homepage and one for logged-in users). It is responsive to both mobile and desktop.
        </p>
        <h6 className="font-mono text-xl font-semibold">
          Error Handling / Loading:
        </h6>
        <p className="font-mono">
          In all components, using the `useError()` and `useLoader()` context, you can add error messages and loading screens. There are three types of error messages: error, warning, and success.
        </p>
        <h3 className='font-mono text-3xl font-semibold mt-8'>
          10 Minute Setup:
        </h3>
        <div className="font-mono flex flex-col">
          <p className="font-semibold">General:</p>
          - Fork the repo<br />
          - Run `npm install` in both the client and server folders<br />
          - Create a Firebase project and add a web app with Google and Email Authentication<br /><br />
          <p className="font-semibold">Client:</p>
          - In firebase.ts, add your Firebase config <br />
          - Once you have deployed your server, in constants.ts update it to your server url <br />
          - In tailwind.config.js, update the brandColors to the colors you want to use<br />
          - Change the favicon.ico and images/logo192.png to your own logo<br />
          - Deploy (I recommend Vercel)<br /><br />
          <p className="font-semibold">Server:</p>
          - In .env, add your CLIENT_URL (initially http://localhost:3000)<br />
          - In .env, add your DB_URL<br />
          - In .env, add each private key from your Firebase project using the naming in `server/src/methods/firebase.ts`<br />
          <p> -  - Go to <a href='https://console.firebase.google.com/u/0/project' target="_blank" className='text-brandColor-500 underline'>Firebase Analytics</a> then go to Settings {`>`} Project Settings {`>`} Service Accounts {`>`} Generate New Private Key<br /></p>
          - Deploy (I recommend Railway.app)
        </div>
        <p className="font-mono mt-8 font-semibold">
          If you are struggling to get it running or have any questions, feel free to reach out at patrick.123.foster@gmail.com
        </p>
      </div>
    </div>

  );
}
