const FAQS = [
  {
    q: "Berapa lama proses top up di Zynvora?",
    a: "Rata-rata di bawah 10 detik setelah pembayaran terkonfirmasi. Saat maintenance server game, proses bisa tertunda hingga beberapa menit.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "QRIS, DANA, OVO, GoPay, ShopeePay, BCA, BRI, Mandiri, BNI.",
  },
  {
    q: "Bagaimana jika saya salah memasukkan User ID?",
    a: "Hubungi live chat kami segera. Tim kami akan membantu memperbaiki data sebelum item dikirim.",
  },
  {
    q: "Apakah Zynvora menyediakan refund?",
    a: "Ya. Jika top up gagal, dana dikembalikan 100% ke metode pembayaran asal.",
  },
  {
    q: "Apakah transaksi di Zynvora aman?",
    a: "Aman. Kami tidak pernah meminta password atau OTP. Cukup User ID dan Server ID.",
  },
  {
    q: "Kapan jam operasional Zynvora?",
    a: "Server top up aktif 24 jam, 7 hari seminggu. Termasuk hari libur nasional.",
  },
  {
    q: "Game apa saja yang bisa di-top up?",
    a: "Mobile Legends, Free Fire, PUBG Mobile, COD Mobile, Magic Chess: Go Go. Katalog bertambah tiap bulan.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="sect border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5">
        <p className="text-[11px] tracking-[.25em] uppercase text-white/40">FAQ</p>
        <h2 className="mt-3 font-display h-sec font-semibold">Pertanyaan umum</h2>
        <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-base text-white/85 gap-4">
                {item.q}
                <span className="text-gold group-open:rotate-45 transition shrink-0 text-lg leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/50 font-light">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
