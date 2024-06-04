"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null); // [GoogleProvider, FacebookProvider, TwitterProvider, GithubProvider]

  useEffect(() => {
    const handleSetProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    handleSetProviders();
  }, []);

  const handleSignOut = () => setIsUserLoggedIn(false);
  const mobileSignOut = () => {
    setIsUserLoggedIn(false);
    setToggleDropdown(false);
  };
  const handleDropdown = () => setToggleDropdown((prev) => !prev);
  const handleDropdownClose = () => setToggleDropdown(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button
              type="button"
              onClick={handleSignOut}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/profile.jpeg"
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div className="">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.jpeg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={handleDropdown}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={handleDropdownClose}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={handleDropdownClose}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={mobileSignOut}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
