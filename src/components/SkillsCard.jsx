export default function SkillsCard({ icon, name }) {
  return (
    <div className="flex flex-col gap-1 items-center justify-center bg-white rounded py-2">
      <img src={icon} className="size-8 object-contain" />
      <p className="text-xs text-black font-bold p-1">{name}</p>
    </div>
  );
}
