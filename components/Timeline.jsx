export default function Timeline({ items }) {
  return (
    <ol className="space-y-8 border-l-2 border-accent pl-6">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-bg" />
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{item.meta}</p>
          {item.children && <div className="mt-3">{item.children}</div>}
        </li>
      ))}
    </ol>
  );
}
