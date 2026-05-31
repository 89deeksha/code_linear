function Marquee() {
  const items = [
    "N7",
    "Say 👋",
    "to the new way of banking",
    "CB7",
    "Say"
    
  ];

  return (
    <div className="w-full overflow-hidden border-y bg-white py-3 relative ">
      <div className="flex w-max animate-marquee gap-6 text-5xl py-3 px-5 font-semibold">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-12  text-black">
            <span
  className={
    item === "N7" || item === "CB7"
      ? "bg-gradient-to-r from-[#00B4FD] to-[#003ACE] bg-clip-text text-transparent"
      : ""
  }
>
  {item}
</span>
            <span className="text-gray-400">✳</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;