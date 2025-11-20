function BrandFooter() {
  return (
    <footer className="border-t border-cyan-400/10 bg-black/90 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h4 className="text-xl font-bold">
              <span className="bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent">Cloestic</span>
            </h4>
            <p className="mt-1 text-sm text-zinc-400">Tech-luxe streetwear for the bold.</p>
          </div>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Cloestic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default BrandFooter;
