"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider({ children ,  session }) {

    /**
     * Hooks.
     */


    return (
        <div className="">
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </div>
    )
}