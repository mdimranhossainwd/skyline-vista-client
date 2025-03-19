export const UserCard = ({ user, refetch }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div className="bg-[#444] text-white grid grid-cols-6 px-4 py-3 text-center font-bold">
          <div>Serial</div>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Joined</div>
          <div>Actions</div>
        </div>

        {/* Table Body */}
        {user?.map((user, index) => (
          <div
            key={user._id}
            className="grid items-center grid-cols-6 text-center border-b-[1px] border-[#DDD] hover:bg-gray-100 px-4 py-2"
          >
            <div>{index + 1}</div>
            <div>{user.name}</div>
            <div>{user?.email}</div>
            <div>{user?.role}</div>
            <div>
              {new Date(user?.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
              })}
            </div>

            <div>view</div>
          </div>
        ))}
      </div>
    </div>
  );
};
