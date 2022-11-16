import "../../styles/globals.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside>
        <ul>
          <li>Engineering</li>
          <li>New</li>
        </ul>
      </aside>
      {children}
    </>
  );
}
