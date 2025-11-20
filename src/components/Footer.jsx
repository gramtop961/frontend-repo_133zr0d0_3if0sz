function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 bg-black/90 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Flames Blue — Crafted with a premium aesthetic.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
