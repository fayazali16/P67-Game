import Image from "next/image";
import Link from "next/link";
import { homeFaqItems } from "@/lib/home-faq-data";
import { HOME_HERO_BRAND_SRC } from "@/lib/seo-media";
import { HOME_H1_TEXT } from "@/lib/seo-home";

export { HOME_HERO_BRAND_SRC };
const HOME_APK_URL = "https://p67vip.com?a=63149821";
const HOME_HERO_W = 512;
const HOME_HERO_H = 512;
const SECTION_IMAGE_W = 1024;
const SECTION_IMAGE_H = 576;

const SEO_IMAGES = {
  apk: "/assets/images/p67-game-apk-showcase.webp",
  promotions: "/assets/images/p67-game-promotions.webp",
  withdraw: "/assets/images/p67-game-withdraw.webp",
  rewards: "/assets/images/p67-game-rewards.webp",
  deposits: "/assets/images/p67-game-deposits.webp",
} as const;

function SectionImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="home-section-image">
      <Image
        src={src}
        alt={alt}
        width={SECTION_IMAGE_W}
        height={SECTION_IMAGE_H}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 900px) 96vw, 900px"
      />
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}

export function HomeLongform() {
  const DownloadBtn = () => (
    <a className="btn btn-apk" href={HOME_APK_URL} rel="noopener noreferrer" target="_blank">
      Download APK
    </a>
  );

  return (
    <>
      <section className="hero wrap home-hero" aria-labelledby="home-hero-title">
        <div className="hero-grid hero-grid--featured">
          <div className="home-hero-copy">
            <h1 id="home-hero-title">{HOME_H1_TEXT}</h1>
          </div>
          <figure className="home-feature-wrap">
            <Image
              src={HOME_HERO_BRAND_SRC}
              alt="P67 Game logo for APK download and real-money casino gameplay"
              width={HOME_HERO_W}
              height={HOME_HERO_H}
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) min(100vw - 2.5rem, 28rem), min(24rem, 38vw)"
              className="home-hero-brand-img"
            />
          </figure>
          <div className="hero-cta hero-cta--primary">
            <DownloadBtn />
          </div>
          <p className="lead" id="speakable-summary">
            Pakistan&apos;s mobile gaming scene has exploded — and P67 sits right at the centre of it.
            Millions of players across the country open this app daily to play card games, mini-games,
            and casino classics while earning real PKR from home. Whether you&apos;re new to online
            earning apps or already familiar with platforms like Aviator and Teen Patti, this guide
            covers everything you need to know about P67 Game in 2026 — with deeper walkthroughs on our{" "}
            <Link href="/blog/">Blogs guides hub</Link>.
          </p>
        </div>
      </section>

      <div className="wrap home-content">
        <aside className="quick-answer" id="quick-answer" aria-label="Quick answer">
          <h2 className="quick-answer-title">Quick Answer</h2>
          <p>
            <strong>P67 Game</strong> is a real-money online casino and earning platform popular in
            Pakistan. It offers 40+ games including Teen Patti, Aviator, Dragon vs Tiger, Poker, and
            Slots. Players can deposit and withdraw using JazzCash, EasyPaisa, or bank transfer. The app
            runs on Android 5.0+ and iOS, weighs around 16-40 MB, and is free to download.
          </p>
        </aside>

        <section className="home-section" aria-labelledby="what-is">
          <h2 id="what-is">What Is P67 Game?</h2>
          <p>
            P67 Game is an online casino and real-money earning platform built for Android and iOS users
            in Pakistan. The app combines traditional card games with modern casino mechanics, giving
            players a genuine casino atmosphere without leaving their homes.
          </p>
          <p>
            It launched as one of Pakistan&apos;s most downloaded earning apps and has maintained that
            status through regular updates, a growing game library, and localised payment support. The
            platform supports both casual players looking for entertainment and serious users who want to
            build a steady income stream through referrals and consistent gameplay.
          </p>
          <p>
            The name &quot;P67&quot; references its Pakistani identity — &quot;PK&quot; for Pakistan,
            designed specifically around local preferences, cultural game styles, and domestic payment
            methods like JazzCash and EasyPaisa.
          </p>
          <SectionImage
            src={SEO_IMAGES.apk}
            alt="P67 Game APK interface and casino lobby preview on mobile screens"
            caption="P67 Game APK showcase: mobile lobby, game categories, and in-app navigation."
          />
        </section>

        <section className="home-section" aria-labelledby="details-glance">
          <h2 id="details-glance">P67 Game APK — Key Details at a Glance</h2>
          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th scope="col">Detail</th>
                  <th scope="col">Information</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>App Name</td><td>P67 Game</td></tr>
                <tr><td>Version</td><td>v2.3 / v3.21 (latest 2026)</td></tr>
                <tr><td>File Size</td><td>16 MB - 39 MB</td></tr>
                <tr><td>OS Compatibility</td><td>Android 5.0+, iOS</td></tr>
                <tr><td>Category</td><td>Online Casino / Earning App</td></tr>
                <tr><td>Payment Methods</td><td>JazzCash, EasyPaisa, SadaPay, Bank Transfer</td></tr>
                <tr><td>Minimum Deposit</td><td>100 PKR</td></tr>
                <tr><td>Minimum Withdrawal</td><td>100 PKR</td></tr>
                <tr><td>Maximum Withdrawal</td><td>50,000 PKR per transaction</td></tr>
                <tr><td>Customer Support</td><td>24/7 in-app support</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="home-section" aria-labelledby="features">
          <h2 id="features">P67 Game Features — What Makes It Stand Out</h2>
          <SectionImage
            src={SEO_IMAGES.promotions}
            alt="P67 Game promotions screen with bonus banners and VIP offers"
            caption="P67 Game promotions: event bonuses, VIP offers, and limited-time reward cards."
          />
          <h3>40+ Games in One App</h3>
          <p>
            P67 packs over 40 games into a single app, covering virtually every casino game type Pakistani
            players enjoy. The library spans classic card games, fast-paced slots, and skill-based betting
            modes. You&apos;re never stuck playing one thing — new games get added with most updates, so
            the platform stays fresh.
          </p>
          <p>
            Popular titles currently available include Teen Patti, Dragon vs Tiger, Aviator, Poker,
            Blackjack, Andar Bahar, Rummy, Roulette, Baccarat, Sic Bo, Lucky Wheel, Fortune Tiger,
            Fortune Ox, Fortune Rabbit, Ludo, Rocket, and Fruit Roulette.
          </p>
          <h3>Real Money Withdrawals — Instant and Local</h3>
          <p>
            This is the feature that drives most downloads. P67 connects directly to JazzCash, EasyPaisa,
            SadaPay, and standard bank accounts. Most withdrawal requests are processed within minutes.
            The minimum cashout is 100 PKR, and the maximum per transaction sits at 50,000 PKR —
            practical limits that work for both occasional players and daily earners.
          </p>
          <p>
            Unlike some apps that delay payments or require complex verification loops, P67 keeps the
            withdrawal flow straightforward: open wallet → select method → enter amount → confirm OTP → done.
          </p>
          <h3>Daily Login Bonuses</h3>
          <p>
            Log in every day, and the app rewards you. Daily bonuses range from free spins and coins to
            cash credits. The longer your login streak, the better the rewards get. For players who
            aren&apos;t depositing large amounts, daily bonuses provide a genuine way to build a balance
            without spending extra.
          </p>
          <h3>Referral Program — Earn by Inviting Friends</h3>
          <p>
            P67&apos;s referral system lets you generate income beyond regular gameplay. When you invite
            someone using your unique referral link, and they sign up, both of you earn a reward. As your
            referred friends stay active — completing first games, making deposits, maintaining streaks —
            you continue earning commissions.
          </p>
          <p>
            Depositing your first 100 PKR unlocks a 70 PKR free bonus. Joining the official Telegram or
            WhatsApp group adds another 10 PKR on top. Small numbers, but they stack quickly with an
            active network.
          </p>
          <h3>VIP Tier System</h3>
          <p>
            Active players who deposit regularly move up through VIP tiers. Higher tiers unlock better
            cashback rates, priority customer support, exclusive bonus access, double rewards during
            special events, and early access to new game modes. VIP status isn&apos;t just cosmetic — it
            changes the earning ceiling significantly for committed players.
          </p>
          <h3>Premium Graphics and Sound Design</h3>
          <p>
            P67 matches the visual quality of mainstream casino apps. The interface uses vibrant 3D
            animations, smooth transitions, and casino-grade sound effects that make each game feel
            immersive. The audio is designed to be relaxing rather than jarring — an important detail for
            players who spend extended sessions on the platform.
          </p>
          <p>
            The app is optimised for older Android devices too, so low-RAM phones don&apos;t lag or crash
            mid-game.
          </p>
          <h3>Offline Mode Available</h3>
          <p>
            Unlike most online earning apps that require a constant internet connection, P67 includes an
            offline mode for solo practice sessions. This lets you get familiar with game rules, test
            strategies, and improve your skills without spending real money or burning mobile data.
          </p>
          <ul className="home-feature-ul">
            <li>
              <strong>40+ Games:</strong> Card games, slots, crash games, and betting formats in one app.
            </li>
            <li>
              <strong>Local Payments:</strong> JazzCash, EasyPaisa, SadaPay, and bank transfer support.
            </li>
            <li>
              <strong>Consistent Rewards:</strong> Daily bonuses, referral commissions, and VIP cashback.
            </li>
            <li>
              <strong>Offline Practice:</strong> Learn game behavior and improve strategy without risk.
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="how-download">
          <h2 id="how-download">How to Download P67 Game APK on Android</h2>
          <SectionImage
            src={SEO_IMAGES.apk}
            alt="How to download P67 Game APK on Android using the official website"
            caption="Android APK download flow: official source, install process, and account setup."
          />
          <p>
            P67 Game is distributed as an APK file since it&apos;s not available on the Google Play
            Store. If you want the direct installation walkthrough, start with{" "}
            <Link href="/p67-download/">P67 download</Link>. Follow these steps carefully:
          </p>
          <ol className="home-ol">
            <li>
              <strong>Step 1 — Enable Unknown Sources:</strong> Go to your phone&apos;s Settings →
              Security → enable &quot;Install from Unknown Sources.&quot;
            </li>
            <li>
              <strong>Step 2 — Visit the Official Website:</strong> Open your browser and go to the
              official P67 website. Avoid third-party APK sites.
            </li>
            <li>
              <strong>Step 3 — Download the APK:</strong> Tap the download button on the official page.
              The file is 16-39 MB depending on the version.
            </li>
            <li>
              <strong>Step 4 — Install the APK:</strong> Locate the downloaded file in your Downloads
              folder, tap it, then tap &quot;Install.&quot;
            </li>
            <li>
              <strong>Step 5 — Open and Register:</strong> Launch the app, tap Register, and follow the
              steps in the next section.
            </li>
          </ol>
        </section>

        <section className="home-section" aria-labelledby="ios-download">
          <h2 id="ios-download">How to Download P67 Game on iOS (iPhone/iPad)</h2>
          <p>P67 for iOS requires a slightly different method since it&apos;s not on the Apple App Store:</p>
          <ol className="home-ol">
            <li>Open Safari on your iPhone or iPad — not Chrome.</li>
            <li>Navigate to the official P67 website.</li>
            <li>Tap the iOS download link.</li>
            <li>Follow the on-screen prompts to install the IPA file.</li>
            <li>
              If prompted about trust settings, go to Settings → General → VPN &amp; Device Management
              and trust the developer profile.
            </li>
          </ol>
        </section>

        <section className="home-section" aria-labelledby="register">
          <h2 id="register">How to Register on P67 Game — Step by Step</h2>
          <p>
            Registration takes under two minutes. To get the full signup path,{" "}
            <Link href="/blog/p67-account-signup/">create your account</Link> using the dedicated guide:
          </p>
          <ol className="home-ol">
            <li>Open the P67 app and tap Register on the homepage.</li>
            <li>Enter your full name, phone number, and a secure password.</li>
            <li>A verification OTP arrives on your phone — enter it to confirm.</li>
            <li>Accept the Terms and Conditions.</li>
            <li>Tap Submit to complete registration.</li>
            <li>Log in with your phone number and password.</li>
            <li>Collect your welcome bonus from the dashboard.</li>
          </ol>
          <p>Keep your phone number and password stored safely — they&apos;re your primary login credentials.</p>
        </section>

        <section className="home-section" aria-labelledby="payments">
          <h2 id="payments">How to Deposit Money in the P67 Game</h2>
          <SectionImage
            src={SEO_IMAGES.deposits}
            alt="P67 Game deposit screen with JazzCash and EasyPaisa payment options"
            caption="P67 Game deposit methods: JazzCash, EasyPaisa, bank transfer, and amount presets."
          />
          <p>
            You need a balance to play most real-money games. For the complete transaction flow, see{" "}
            <Link href="/blog/p67-game-deposit/">how to deposit money</Link>. Here&apos;s how deposits work:
          </p>
          <ol className="home-ol">
            <li>Log in and go to your Wallet or Add Funds section.</li>
            <li>Choose your payment method: EasyPaisa, JazzCash, SadaPay, or Bank Transfer.</li>
            <li>Enter your account details accurately — mismatched names cause transaction failures.</li>
            <li>Select the amount you want to deposit (minimum: 100 PKR).</li>
            <li>Follow the on-screen instructions and enter the OTP sent to your phone.</li>
            <li>Wait for in-app confirmation — usually instant via digital wallets.</li>
          </ol>
          <p>
            First-time deposits may trigger a quick KYC check. This is standard practice and protects
            both you and the platform from fraud.
          </p>
        </section>

        <section className="home-section" aria-labelledby="withdraw">
          <h2 id="withdraw">How to Withdraw Money from the P67 Game</h2>
          <SectionImage
            src={SEO_IMAGES.withdraw}
            alt="P67 Game withdrawal options page showing JazzCash EasyPaisa and bank tabs"
            caption="P67 Game withdrawal flow with local payout channels and transaction limits."
          />
          <p>
            Getting your earnings out is the most important part. For the full cashout walkthrough, follow
            the <Link href="/blog/p67-game-withdrawal/">withdrawal process</Link>. Here&apos;s the exact process:
          </p>
          <ol className="home-ol">
            <li>Open the app and navigate to Wallet → Withdrawal.</li>
            <li>Select your preferred method: JazzCash, EasyPaisa, SadaPay, or bank transfer.</li>
            <li>Enter the amount (minimum 100 PKR, maximum 50,000 PKR per transaction).</li>
            <li>Verify your identity if prompted — first-time cashouts often require KYC.</li>
            <li>Confirm the transaction and wait for processing.</li>
          </ol>
          <p>
            Digital wallets like JazzCash and EasyPaisa process the fastest. Bank transfers take slightly
            longer. If a payment shows &quot;paid&quot; on your wallet provider but doesn&apos;t appear in
            P67, record the transaction ID and contact 24/7 support immediately — don&apos;t retry
            multiple times, as this can create duplicate charges.
          </p>
        </section>

        <section className="home-section" aria-labelledby="bonuses">
          <h2 id="bonuses">P67 Bonus System — Every Reward Type Explained</h2>
          <SectionImage
            src={SEO_IMAGES.rewards}
            alt="P67 Game rewards and missions section with bonus collection options"
            caption="P67 Game rewards: mission bonuses, campaign rewards, and referral-linked incentives."
          />
          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th scope="col">Bonus Type</th>
                  <th scope="col">How to Get It</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Welcome Bonus</td><td>Automatically credited after registration</td></tr>
                <tr><td>First Deposit Bonus</td><td>Deposit 100 PKR → receive 70 PKR free</td></tr>
                <tr><td>Daily Login Bonus</td><td>Log in every day without missing a streak</td></tr>
                <tr><td>Referral Bonus</td><td>Invite friends via your unique link</td></tr>
                <tr><td>Telegram/WhatsApp Group Bonus</td><td>Join the official groups → get 10 PKR</td></tr>
                <tr><td>VIP Cashback</td><td>Higher VIP tier = higher cashback %</td></tr>
                <tr><td>Tournament Prize</td><td>Win or place in weekly competitions</td></tr>
                <tr><td>Mission Bonus</td><td>Complete daily and weekly in-app tasks</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The most underutilised bonus is the mission system. Most players focus only on gameplay, but
            daily and weekly missions consistently reward coins and PKR without requiring any betting risk.
          </p>
        </section>

        <section className="home-section" aria-labelledby="games-list">
          <h2 id="games-list">P67 Games List — What You Can Play</h2>
          <SectionImage
            src={SEO_IMAGES.apk}
            alt="P67 Game game list view with slots crash games and card game icons"
            caption="P67 Game list: card games, slots, crash modes, and sports betting markets."
          />
          <h3>Card Games</h3>
          <p>
            Teen Patti, Poker, Blackjack, Andar Bahar, Rummy, Baccarat, Dragon Tiger, Three Card Poker,
            Caribbean Stud Poker, Red Dog, Punto Banco, Casino War.
          </p>
          <h3>Casino &amp; Slots</h3>
          <p>
            Fortune Tiger, Fortune Ox, Fortune Rabbit, Fruit Roulette, Zoo Roulette, Gates of Olympus
            (via PK68 mode), Slot Machines, Roulette, Sic Bo, Keno, Big Six Wheel, Craps.
          </p>
          <h3>Fast-Paced Bet Games</h3>
          <p>Aviator, Rocket, Lucky Wheel, Lucky Draw, Color Prediction, Spin-to-Win.</p>
          <h3>Classic Casual Games</h3>
          <p>Ludo, Dragon vs Tiger (board version).</p>
          <h3>Sports Betting</h3>
          <p>
            Cricket match betting, Football League, Tennis odds — all available for live and upcoming
            matches.
          </p>
          <ul className="home-feature-ul">
            <li>
              <strong>Tip:</strong> Start with low-volatility games first to understand wallet flow and
              reward pacing.
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="tips">
          <h2 id="tips">Tips to Win More on P67 Game</h2>
          <p>
            These strategies come from experienced players and won&apos;t guarantee wins — no strategy
            does in luck-based games — but they reduce unnecessary losses and improve your earning
            consistency.
          </p>
          <ul className="home-feature-ul">
            <li>
              Start with small bets. New players who jump to high-stakes rounds burn through balance
              before understanding game mechanics.
            </li>
            <li>
              Set a daily loss limit and honour it. Once you hit it, close the session.
            </li>
            <li>
              Claim every bonus before playing. Rewards are free value and should always be checked first.
            </li>
            <li>
              Use offline mode to practice new games before betting real PKR.
            </li>
            <li>
              Don&apos;t miss tournaments. Weekly prizes can exceed standard daily play returns.
            </li>
            <li>
              Build a referral network carefully. A smaller active network outperforms large inactive
              signups.
            </li>
            <li>
              Withdraw profits regularly. Small consistent withdrawals are usually safer than large
              infrequent cashouts.
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="safety">
          <h2 id="safety">Is P 67 Game Safe and Legit?</h2>
          <p>This is the question every new user asks — and it deserves a direct answer.</p>
          <p>
            P67 uses encrypted data transmission and doesn&apos;t share personal information with third
            parties. Payment processing runs through established local platforms (JazzCash and EasyPaisa)
            that have their own security infrastructure. Thousands of Pakistani users report successful
            daily withdrawals across forums and social communities.
          </p>
          <p>
            That said, P67 is a real-money gambling platform. Like any casino app, it carries financial
            risk. The money you deposit can be lost through gameplay. No earning app eliminates that risk
            — they only vary the game variety and payout rates.
          </p>
          <p>
            Play responsibly. Set deposit limits. Never spend money you can&apos;t afford to lose. If
            you notice yourself chasing losses or playing out of frustration, take a break.
          </p>
        </section>

        <section className="home-section" aria-labelledby="comparison">
          <h2 id="comparison">P67 vs Similar Pakistani Earning Apps</h2>
          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">P67</th>
                  <th scope="col">Lucky 91</th>
                  <th scope="col">G555</th>
                  <th scope="col">We999</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Games Available</td><td>40+</td><td>Slot-focused</td><td>30+</td><td>25+</td></tr>
                <tr><td>Min Deposit</td><td>100 PKR</td><td>100 PKR</td><td>100 PKR</td><td>50 PKR</td></tr>
                <tr><td>Payment Methods</td><td>JazzCash, EasyPaisa, Bank</td><td>JazzCash, EasyPaisa</td><td>JazzCash, EasyPaisa</td><td>JazzCash</td></tr>
                <tr><td>Referral Program</td><td>Multi-milestone</td><td>Single-tier</td><td>Basic</td><td>Basic</td></tr>
                <tr><td>Offline Mode</td><td>Yes</td><td>No</td><td>No</td><td>No</td></tr>
                <tr><td>VIP System</td><td>Tiered</td><td>Basic</td><td>Yes</td><td>No</td></tr>
                <tr><td>Daily Bonuses</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            P67&apos;s referral program stands out most sharply in this comparison. Multi-milestone
            rewards mean you keep earning from referred users over time — not just from their initial
            signup.
          </p>
        </section>

        <section className="home-section" aria-labelledby="issues">
          <h2 id="issues">Common Problems and How to Fix Them</h2>
          <ul className="home-feature-ul">
            <li>
              App won&apos;t install: Make sure &quot;Install from Unknown Sources&quot; is enabled and
              you have at least 50 MB free storage.
            </li>
            <li>
              Login not working: Tap &quot;Forgot Password&quot; and reset using your registered phone
              number via OTP.
            </li>
            <li>
              Deposit not reflecting: Wait 2-3 minutes for sync, then contact support with transaction ID.
            </li>
            <li>
              Withdrawal rejected: Common reasons include mismatched account names, incomplete KYC, or
              bonus abuse flags.
            </li>
            <li>
              App crashing on older devices: Uninstall, clear cache, and reinstall the latest APK.
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="vip">
          <h2 id="vip">P67 VIP Membership — Is It Worth It?</h2>
          <p>VIP status kicks in when you deposit regularly and maintain active gameplay. Benefits include:</p>
          <ul className="home-feature-ul">
            <li>Double bonuses on deposits and events.</li>
            <li>Free premium features, including exclusive tournaments.</li>
            <li>Customisation options for your dashboard.</li>
            <li>Priority customer support response times.</li>
            <li>Higher cashback percentages on losses.</li>
            <li>Early access to new game releases.</li>
          </ul>
          <p>
            For casual players logging in a few times a week, standard membership is fine. For daily
            players who are treating P67 as a consistent income stream, VIP unlocks meaningfully better
            earning conditions — especially cashback and tournament access.
          </p>
        </section>

        <section className="home-section" aria-labelledby="requirements">
          <h2 id="requirements">System Requirements</h2>
          <p><strong>Android:</strong></p>
          <ul className="home-feature-ul">
            <li>OS: Android 5.0 or higher</li>
            <li>RAM: 1 GB minimum (2 GB recommended)</li>
            <li>Storage: 50 MB free space</li>
            <li>Internet: 3G minimum, 4G recommended</li>
          </ul>
          <p><strong>iOS:</strong></p>
          <ul className="home-feature-ul">
            <li>Requires iOS 11.0 or later</li>
            <li>Compatible with iPhone, iPad, and iPod touch</li>
            <li>Install via Safari using the IPA method described above</li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="home-faq">
          <h2 id="home-faq">Frequently Asked Questions</h2>
          <dl className="home-faq-dl">
            {homeFaqItems.map((item) => (
              <div className="home-faq-item" key={item.question}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="home-section home-cta-final" aria-labelledby="final-verdict">
          <h2 id="final-verdict">Final Verdict</h2>
          <p>
            P67 Game earns its place as one of Pakistan&apos;s most popular online earning apps through a
            combination of game variety, fast local payments, and a well-structured bonus system. The
            referral program adds a genuine second income layer that most similar apps don&apos;t match.
            The offline practice mode is a thoughtful feature that gives new players a risk-free way to
            learn.
          </p>
          <p>
            The platform is not a guaranteed income source — it&apos;s a casino-style app where outcomes
            depend on both skill and luck, depending on the game. Players who approach it with a clear
            budget, consistent daily habits, and an active referral network get the best results.
          </p>
          <p>
            Download P67, start with the free welcome bonuses, and spend your first few sessions in
            offline practice mode before committing real PKR. That single habit separates players who
            enjoy the platform long-term from those who burn out in the first week.
          </p>
          <div className="hero-cta hero-cta--primary home-cta-spaced">
            <DownloadBtn />
          </div>
          <ul className="home-meta-list">
            <li>
              <strong>Compatible with:</strong> Android 5.0+
            </li>
            <li>
              <strong>iOS Support:</strong> Yes (IPA method)
            </li>
            <li>
              <strong>Payment:</strong> JazzCash | EasyPaisa | SadaPay | Bank
            </li>
            <li>
              <strong>Withdrawal:</strong> 100 PKR min, 50,000 PKR max/tx
            </li>
          </ul>
        </section>

        <section className="home-section home-responsible" aria-labelledby="resp">
          <h2 id="resp" className="sr-only">
            Responsible play
          </h2>
          <p className="disclaimer-banner" role="note">
            <strong>Always gamble responsibly.</strong> Set limits before you play. Real money is at risk
            in every real-money gaming session.
          </p>
        </section>
      </div>
    </>
  );
}
