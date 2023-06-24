type TechBadgeProps = {
  name: "string";
};

export const TechBadge = ({ name }: TechBadgeProps) => {
  <span className="text-emerald-400 bg-emerald-900/80">{name}</span>;
};