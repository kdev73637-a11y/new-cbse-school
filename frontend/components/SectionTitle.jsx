export default function SectionTitle({ title, subtitle, align = "left" }) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
      <div className={`mt-3 ${align === "center" ? "mx-auto" : ""} w-16 h-1.5 bg-blue-700 rounded-full`} />
    </div>
  );
}
