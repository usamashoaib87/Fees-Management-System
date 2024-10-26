import React, { useState } from "react";
import "../../App.css";

interface SignUpProps {
  onSignUp: (username: string, password: string) => void;
  onSwitchToLogin: () => void;
}

interface SignUpState {
  username: string;
  password: string;
  confirmPassword: string;
  error: string;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp, onSwitchToLogin }) => {
  const [state, setState] = useState<SignUpState>({
    username: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      setState(prevState => ({ ...prevState, error: "Passwords do not match!" }));
      return;
    }
    onSignUp(state.username, state.password);
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-800 p-4">
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-semibold text-center text-white">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-white">Sign-Up to get started</p>
      </div>
      <div className="p-6">
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex justify-center items-center py-2 px-4 rounded shadow-md bg-white text-sm font-medium text-zinc-900 hover:bg-gray-200 focus:outline-none"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
            <path fill="none" d="M1 1h22v22H1z" />
          </svg>
          SignUp with Google
        </button>
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-customBlue"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>
        <div className="mt-3">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-zinc-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="email"
                  required
                  className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                  placeholder="Enter your email"
                  value={state.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-900"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                  placeholder="Create a password"
                  value={state.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-zinc-900"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                  placeholder="Confirm your password"
                  value={state.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 focus:outline-none transform active:translate-y-0.5"
              >
                SIGN UP
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-900">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-800 hover:text-blue-500"
              onClick={onSwitchToLogin}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;