# Svenska annonsörer att börja med (exempel)
> Exakt nätverk kan variera över tid – kontrollera i Adtraction / Adrecord / Awin / Tradedoubler / Adservice / Daisycon när du ansöker.

- Amazon SE – (ofta via Awin)
- CDON – (Adrecord / Awin)
- Webhallen – (Adtraction / Awin)
- Inet – (Adrecord / Adtraction)
- Kjell & Company – (Adtraction)
- NetOnNet – (Adrecord / Tradedoubler)
- Proshop – (Adservice / Awin)
- Apotea – (Adtraction / Adrecord)
- Jollyroom – (Adtraction)
- Boozt – (Adtraction / Awin)

När du får feed-länk (CSV/TSV/JSON) för respektive program: öppna `feeds_template.sql`, ersätt `YOUR_FEED_URL` och kör i Supabase SQL Editor. Därefter öppna `/api/cron/ingest` för första importen (cron tar över sen).
