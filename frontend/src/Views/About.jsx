import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "Click-Fox | About";
    document.querySelector('meta[name="description"]').setAttribute('content', 'Learn more about Click-Fox, a modern web application for testing clicking speed, and its tech stack.');
  }, []);

  return (
    <>
      <div className="min-h-screen bg-zinc-800 text-zinc-200 py-12 px-4 sm:px-6 lg:px-8">
        <main className="max-w-4xl space-y-16 mx-auto text-center">
          {/* Introduction Section */}
          <h1 className="text-5xl font-extrabold mb-6">Welcome to Click-Fox</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Click-Fox is a modern and engaging web application designed to help you test and improve your clicking speed and accuracy. Inspired by the sleek design and user-centric experience of <a href="https://monkeytype.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">MonkeyType</a>, we provide a fun and challenging platform for users of all skill levels.
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Whether you're a casual user looking to pass the time, a gamer aiming to enhance your reaction time, or simply curious about your clicking capabilities, Click-Fox offers a variety of game modes and statistics to track your progress. Our goal is to provide a smooth, responsive, and insightful experience that makes improving your clicking skills enjoyable.
          </p>

          {/* How It Works Section */}
          <section className="mb-16 text-left">
            <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              <p className="text-lg">
                Click-Fox offers a straightforward yet powerful way to measure your clicking speed. Here's a quick overview of how you can test your limits:
              </p>
              <ul className="list-disc list-inside ml-5 space-y-2">
                <li><strong>Choose Your Game Mode:</strong> Select from various challenges like "Click Speed Test," "Reaction Time Test," and more. Each mode is designed to target different aspects of your clicking abilities.</li>
                <li><strong>Start the Test:</strong> Once you begin, a countdown will initiate, preparing you for the action.</li>
                <li><strong>Click Away:</strong> Follow the on-screen instructions, typically involving clicking a designated area as many times as possible within a time limit or reacting to visual cues.</li>
                <li><strong>Get Your Results:</strong> After the test concludes, you'll receive detailed statistics including your Clicks Per Second (CPS), average reaction time, and a graph visualizing your performance.</li>
                <li><strong>Track Your Progress:</strong> Registered users can save their results and monitor their improvement over time, competing with themselves and others on the leaderboard.</li>
              </ul>
              <p className="text-lg">
                Our intuitive interface and precise tracking ensure that you get accurate and meaningful feedback on your performance.
              </p>
            </div>
          </section>

          {/* section seperator */}
          <div className='h-px w-full border-2 border-zinc-500 rounded-xl'></div>

          {/* Tech stack section */}
          <section className="mb-16 text-left">
            <h2 className="text-4xl font-bold mb-8 text-center">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-700 p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-center ">Frontend</h3>
                <ul className="h-full space-y-6 list-none flex flex-col place-content-evenly text-start">
                  <li><strong>React</strong> - UI framework with functional components and hooks. Chosen for its component-based architecture, making UI development modular and efficient.</li>
                  <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for styling. Enables rapid UI development with highly customizable designs directly in markup.</li>
                  <li><strong>Vite</strong> - Fast build tool and development server. Offers incredibly fast cold start times and instant hot module replacement (HMR), significantly improving developer experience.</li>
                  <li><strong>Chart.js</strong> - Open source and easy to use charting library. Utilized for creating interactive and visually appealing data representations of user performance.</li>
                </ul>
              </div>
              <div className="bg-zinc-700 p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-center ">Backend</h3>
                <ul className="h-full space-y-6 list-none flex flex-col place-content-evenly text-start">
                  <li><strong>Express.js</strong> - Node.js web framework. Provides a robust set of features for web and mobile applications, forming the backbone of our API.</li>
                  <li><strong>MongoDB</strong> - NoSQL database with Mongoose ODM. Chosen for its flexibility and scalability, ideal for handling varied user data and game statistics.</li>
                  <li><strong>Firebase</strong> - Authentication, hosting, and functions. Leveraged for secure user authentication, reliable static site hosting, and scalable serverless functions.</li>
                </ul>
              </div>
              <div className="bg-zinc-700 p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-center ">Infrastructure</h3>
                <ul className="h-full space-y-6 list-none flex flex-col place-content-evenly text-start">
                  <li><strong>Firebase Hosting</strong> - Static site hosting. Offers fast, secure, and global content delivery for the frontend application.</li>
                  <li><strong>Firebase Authentication</strong> - User management. Provides a secure and easy-to-implement authentication system supporting various providers.</li>
                  <li><strong>Firebase Functions</strong> - Cloud functions. Used for running backend code in a serverless environment, handling API requests and database operations efficiently.</li>
                  <li><strong>MongoDB Atlas</strong> - Cloud database. A fully managed cloud database service that ensures high availability, scalability, and security for our MongoDB instances.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* section seperator */}
          <div className='h-px w-full border-2 border-zinc-500 rounded-xl'></div>

          {/* Future Plans Section */}
          <section className="mb-16 text-left">
            <h2 className="text-4xl font-bold mb-8 text-center">Future Plans</h2>
            <div className="space-y-6">
              <p className="text-lg">
                We are continuously working to improve Click-Fox and add new features to enhance your experience. Our future roadmap includes:
              </p>
              <ul className="list-disc list-inside ml-5 space-y-2">
                <li><strong>More Game Modes:</strong> Introducing additional challenging game modes to keep things fresh and test different aspects of clicking skills.</li>
                <li><strong>Advanced Analytics:</strong> Providing deeper insights into your performance with more detailed graphs and personalized improvement suggestions.</li>
                <li><strong>User Customization:</strong> Allowing users to personalize their interface and game settings.</li>
                <li><strong>Multiplayer Challenges:</strong> Implementing real-time multiplayer options to compete with friends and other users globally.</li>
              </ul>
              <p className="text-lg">
                Stay tuned for exciting updates! We value your feedback and encourage you to share your ideas for new features.
              </p>
            </div>
          </section>

          {/* section seperator */}
          <div className='h-px w-full border-2 border-zinc-500 rounded-xl'></div>

          {/* License section */}
          <section>
            <h2 className="text-4xl font-bold mb-8">License</h2>
            <p className="text-xl mb-4">
              This project is open source and available under the MIT License.
            </p>
            <p className="text-lg">
              You can view the full license details on our <a href="https://github.com/cole-deboer/click-fox/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub repository</a>.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
