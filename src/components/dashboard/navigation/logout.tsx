"use client";
import { Logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

export const LogOut = () => {
  const handleLogOut = () => {
    Logout().finally(() => {
      window.location.reload();
    });
  };
  return (
    <Button
      variant={"link"}
      className="text-rose-600"
      size={"lg"}
      onClick={handleLogOut}
    >
      Logout
    </Button>
  );
};
