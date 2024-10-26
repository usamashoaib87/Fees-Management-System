import React, { useState } from "react";
import "../../App.css";

interface ForgotPassProps {
  onPasswordReset: (email: string, newPassword: string) => void;
  onCancel: () => void;
  users: { username: string; password: string }[];
}

interface ForgotPassState {
  email: string;
  newPassword: string;
  confirmPassword: string;
  error: string;
}

const ForgotPass: React.FC<ForgotPassProps> = ({
  onPasswordReset,
  onCancel,
  users,
}) => {
  const [state, setState] = useState<ForgotPassState>({
    email: "",
    newPassword: "",
    confirmPassword: "",
    error: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.newPassword !== state.confirmPassword) {
      setState(prevState => ({ ...prevState, error: "Passwords do not match!" }));
      return;
    }

    const user = users.find((u) => u.username === state.email);
    if (!user) {
      setState(prevState => ({ ...prevState, error: "Email not found!" }));
      return;
    }

    onPasswordReset(state.email, state.newPassword);
    setState(prevState => ({ ...prevState, error: "Password reset successfully!" }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-800 p-4">
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-semibold text-center text-white">
          Reset Password
        </h2>
        <p className="mt-2 text-center text-white">
          Enter your email and new password
        </p>
      </div>
      <div className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                placeholder="Enter your email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="mt-1">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                placeholder="Enter new password"
                value={state.newPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full px-3 py-2 border border-customBlue rounded shadow placeholder-gray-400 focus:outline-none focus:bg-gray-100 sm:text-sm"
                placeholder="Confirm new password"
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
              Reset Password
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-900">
          Remember your password?{" "}
          <a
            href="#"
            className="font-medium text-blue-800 hover:text-blue-500"
            onClick={onCancel}
          >
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;