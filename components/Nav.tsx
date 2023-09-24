"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  /**
   * Hooks.
   */

  const isLogindIn: boolean = true;

  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response:any = await fetchProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex  gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promtopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isLogindIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={() => signOut()} className="outline_btn">
              Sign Out
            </button>
            <Link href={"profile"} className="">
              <Image
                src={"/assets/images/logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          <div className="">
            {providers &&
              Object.values(providers).map((item:any, index) => (
                <button
                  type="button"     
                  key={item.name}
                  onClick={() => signIn(item.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {isLogindIn ? (
        <div className="">

        </div>
        ) : <div className=""></div>}
      </div>
      
    </nav>
  );
}
