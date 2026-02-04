function Register() {
    return(
       <div class="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
    
    <h2 className="text-2xl font-bold text-gray-800 text-center">
      Create Account
    </h2>
    <p className="text-sm text-gray-500 text-center mt-1">
      Register to get started
    </p>

    <form class="mt-6 space-y-4">

      <div>
        <label class="block text-sm text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="email@example.com"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
      >
        Register
      </button>

    </form>

    <p class="text-sm text-center text-gray-600 mt-6">
      Already have an account?
      <a href="#" class="text-primary font-medium hover:underline">
        Login
      </a>
    </p>

  </div>
    );
}
export default Register;