function Registration() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen pt-6 bg-gray-100 dark:bg-gray-900">
        {/* Parent div with green blurred background */}
        <div className="relative w-full max-w-md p-6 rounded-lg dark:border-white backdrop-blur-md shadow-lg">
          <div className="bg-white bg-opacity-80 rounded-lg shadow dark:bg-gray-800 dark:bg-opacity-80 dark:border dark:border-white">
            <div className="p-6 space-y-9 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-centerß leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-7 md:space-y-8" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Emelia Erickson"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="emelia@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
                <div className= " text-white">
                  ---------------------or---------------------
                </div>
                <button
                  type="submit"
                  className="w-full text-green bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-800"
                >
                  Continue With Google
                </button>


                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline dark:text-green-600"
                    href="/signin"
                  >
                    Sign in here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
