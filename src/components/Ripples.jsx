export default function Ripples() {
  return (
    <div className="fixed animate-ping duration-1000 flex items-center justify-center bg-red-300 -z-10">
      {[
        "size-[10rem]",
        "size-[20rem]",
        "size-[30rem]",
        "size-[40rem]",
        "size-[50rem]",
        "size-[60rem]",
        "size-[70rem]",
        "size-[80rem]",
        "size-[90rem]",
        "size-[100rem]",
      ].map((size) => (
        <div
          key={size}
          className={`absolute ${size} border border-slate-800 rounded-full`}
        ></div>
      ))}
    </div>
  );
}
