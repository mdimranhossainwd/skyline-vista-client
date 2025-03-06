import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { router } from "./routes/router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Theme>
  </StrictMode>
);
