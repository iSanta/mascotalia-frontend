import { Suspense } from "react";
import Login from "@/Presentation/layout/login/LoginLayout";

export default async function login() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Login />      
    </Suspense>
  );
}
