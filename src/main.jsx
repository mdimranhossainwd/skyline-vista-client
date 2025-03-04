import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./routes/router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
