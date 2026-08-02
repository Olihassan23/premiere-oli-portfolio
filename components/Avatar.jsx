import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex absolute right-30 bottom-10 pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={1000}
        height={1000}
        className="w-[700px] h-auto"
      />
    </div>
  );
};

export default Avatar;
