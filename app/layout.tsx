"use client";
import Providers from "./providers";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Canvas from "../components/layout/canvas";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Shader from "../components/canvas/ShaderExample/ShaderExample";
// For deubgging, please use static import above ^^^

// Dynamic imports
const Shader = dynamic(
  () => import("../components/canvas/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Welcome to this site!",
};

export default function RootLayout({
  // Children prop is required
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Canvas>
            <Shader onClick={undefined} />
          </Canvas>
          {/* Add a video background option later */}
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  );
}
