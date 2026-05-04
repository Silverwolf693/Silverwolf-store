export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="container-page py-8 text-sm text-slate-600">
        © {new Date().getFullYear()} Silverwolf Store. Built for modern shopping.
      </div>
    </footer>
  );
}
