import React, { useState, useEffect } from "react";
import "../../App.css";
import SignUp from "../SignUpPage/SignUp";
import ForgotPass from "../ForgotPass/ForgotPass";

interface LoginPageProps {
  onLogin: () => void;
}

interface User {
  username: string;
  password: string;
}

interface LoginState {
  username: string;
  password: string;
  error: string;
  isSignUp: boolean;
  isForgotPassword: boolean;
  rememberMe: boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [state, setState] = useState<LoginState>({
    username: "",
    password: "",
    error: "",
    isSignUp: false,
    isForgotPassword: false,
    rememberMe: false,
  });

  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      const { username, password } = JSON.parse(rememberedUser);
      setState((prevState) => ({
        ...prevState,
        username,
        password,
        rememberMe: true,
      }));
    }
  }, []);

  const getUsers = (): User[] => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  const saveUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find(
      (u) => u.username === state.username && u.password === state.password
    );
    if (user) {
      if (state.rememberMe) {
        localStorage.setItem(
          "rememberedUser",
          JSON.stringify({ username: state.username, password: state.password })
        );
      } else {
        localStorage.removeItem("rememberedUser");
      }
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
      setState((prevState) => ({ ...prevState, error: "" }));
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Incorrect username/password",
      }));
    }
  };

  const handleSignUp = (newUsername: string, newPassword: string) => {
    const users = getUsers();
    if (users.some((u) => u.username === newUsername)) {
      setState((prevState) => ({
        ...prevState,
        error: "Username already exists",
      }));
      return;
    }
    const newUsers = [
      ...users,
      { username: newUsername, password: newPassword },
    ];
    saveUsers(newUsers);
    setState((prevState) => ({
      ...prevState,
      isSignUp: false,
      username: newUsername,
      password: newPassword,
      error: "",
    }));
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  const handlePasswordReset = (email: string, newPassword: string) => {
    const users = getUsers();
    const updatedUsers = users.map((user) =>
      user.username === email ? { ...user, password: newPassword } : user
    );
    saveUsers(updatedUsers);
    setState((prevState) => ({
      ...prevState,
      isForgotPassword: false,
      username: email,
      password: newPassword,
      error: "",
    }));
  };

  if (state.isSignUp) {
    return (
      <div className="min-h-screen bg-[#EAF1F6] flex flex-col justify-center px-5 py-10 sm:px-6 lg:px-8">
        <SignUp
          onSignUp={handleSignUp}
          onSwitchToLogin={() =>
            setState((prevState) => ({ ...prevState, isSignUp: false }))
          }
        />
      </div>
    );
  }

  if (state.isForgotPassword) {
    return (
      <div className="min-h-screen bg-[#EAF1F6] flex flex-col justify-center px-5 py-10 sm:px-6 lg:px-8">
        <ForgotPass
          onPasswordReset={handlePasswordReset}
          onCancel={() =>
            setState((prevState) => ({ ...prevState, isForgotPassword: false }))
          }
          users={getUsers()}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EAF1F6] flex flex-col justify-center px-5 py-10 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-800 p-4">
          <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-xl mt-2 font-semibold text-center text-white">
            Welcome to Fees Management
          </h2>
          <p className="mt-3 text-center text-white">
            Please Sign-In to your account
          </p>
        </div>
        <div className="p-6">
          <button
            onClick={handleGoogleSignIn}
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
            Login with Google
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
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                    placeholder="Enter your email"
                    value={state.username}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        username: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
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
                    placeholder="············"
                    value={state.password}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={state.rememberMe}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        rememberMe: e.target.checked,
                      }))
                    }
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-zinc-900"
                  >
                    Remember Me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-800 hover:text-blue-500"
                    onClick={() =>
                      setState((prevState) => ({
                        ...prevState,
                        isForgotPassword: true,
                      }))
                    }
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {state.error && (
                <p className="text-red-500 text-sm">{state.error}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 focus:outline-none transform active:translate-y-0.5"
                >
                  SIGN IN
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-zinc-900">
              New on our platform?{" "}
              <a
                href="#"
                className="font-medium text-blue-800 hover:text-blue-500"
                onClick={() =>
                  setState((prevState) => ({ ...prevState, isSignUp: true }))
                }
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
