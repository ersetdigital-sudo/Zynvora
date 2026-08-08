import Link from "next/link";

export function CTASection() {
  return (
    <section className="sect border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 text-center relative">
        <div
          className="glow"
          style={{ width: 400, height: 400, background: "#f5b544", top: -120, left: "50%", transform: "translateX(-50%)", opacity: 0.2 }}
        />
        <h2 className="relative font-display h-cta font-semibold leading-tight">
          Siap top up? Diamond kamu masuk <br className="hidden sm:block" />
          <span className="gold-text">sebelum lobby dimulai.</span>
        </h2>
        <p className="relative mt-5 text-white/55 font-light">Top up game murah, cepat, dan terpercaya dengan pembayaran QRIS, e-wallet, dan transfer bank. Aktif 24 jam.</p>
        <Link
          href="/#games"
          className="relative inline-block mt-8 btn-gold font-semibold px-8 py-3.5 rounded-full transition"
        >
          Mulai Top Up
        </Link>
      </div>
    </section>
  );
}
