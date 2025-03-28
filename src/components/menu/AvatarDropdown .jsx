import { DropdownMenu } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AvatarDropdown = () => {
  const { user, logOut } = useAuth();

  // User's LogOut Function
  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <DropdownMenu.Root>
      {/* Avatar Button as Trigger */}
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 p-1 rounded-full mr-8 transition">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </button>
      </DropdownMenu.Trigger>

      {/* Dropdown Menu Content */}
      <DropdownMenu.Content className="w-56 mr-4 bg-[#F3F4F6] rounded-md">
        <div className="p-4 text-center border-b border-gray-200">
          <p className="font-semibold text-gray-800">{user?.displayName}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <NavLink to={`/dashboard`}>Dashboard</NavLink>
        </DropdownMenu.Item>
        <DropdownMenu.Item color="red" onClick={handleLogOut}>
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AvatarDropdown;
