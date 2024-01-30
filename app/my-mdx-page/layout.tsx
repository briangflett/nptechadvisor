export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <main className="pb[160px] container pt-[160px]">
      This is a test blog page, with a wrapper from the blog layout.tsx file
      {children}
    </main>
  );
}
