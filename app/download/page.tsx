import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/p67-download/";
const FEATURE_IMAGE = "/assets/images/p67-download-feature.webp";
const DOWNLOAD_URL = "https://p67vip.com?a=63149821";

const META_TITLE = "P67 Download 2026 – APK for Android & iOS [Free]";
const META_DESCRIPTION =
  "Complete P67 download guide for Android & iOS in 2026. Get the latest APK, install safely, register, and start earning real money via JazzCash & EasyPaisa.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  keywords: [
    "P67 download",
    "P67 APK download",
    "P67 iOS download",
    "P67 Android APK",
    "P67 install guide",
    "P67 JazzCash EasyPaisa",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${getSiteUrl()}${path}`,
    siteName: SITE_NAME,
    images: [
      {
        url: FEATURE_IMAGE,
        width: 1024,
        height: 576,
        alt: "P67 Download 2026 APK for Android and iOS free",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [FEATURE_IMAGE],
  },
};

export default function DownloadPage() {
  return (
    <main id="main" className="wrap home-content">
      <section className="home-section" aria-labelledby="download-title">
        <h1 id="download-title">P67 Download 2026 - APK for Android & iOS [Free]</h1>
        <figure className="home-section-image">
          <Image
            src={FEATURE_IMAGE}
            alt="P67 Download 2026 feature image showing Android APK and iOS support"
            width={1024}
            height={576}
            priority
            fetchPriority="high"
            sizes="(max-width: 900px) 96vw, 900px"
          />
          <figcaption className="sr-only">
            P67 Download 2026 feature image for Android APK and iOS installation.
          </figcaption>
        </figure>
        <aside className="quick-answer" aria-label="Quick answer">
          <h2 className="quick-answer-title">Quick Answer</h2>
          <p>
            P67 download is available as a free APK file for Android (v2.3 / v3.21, 16-39 MB, requires
            Android 5.0+) and as an IPA file for iOS. Since it&apos;s not on the Google Play Store, you
            download it directly from the official P67 website. Enable &quot;Install from Unknown
            Sources&quot; in your phone settings first, then install and register in under 3 minutes.
          </p>
        </aside>
        <div className="hero-cta hero-cta--primary">
          <a className="btn btn-apk" href={DOWNLOAD_URL} rel="noopener noreferrer" target="_blank">
            Download APK
          </a>
        </div>
        <p>
          You searched for P67 download — so let&apos;s skip the background story and get straight to
          it. This post supports the <Link href="/">PK67 Game</Link> pillar and covers exactly how to
          download P67 on Android and iPhone, how to install it
          without errors, and what to do the moment you open it for the first time.
        </p>
      </section>

      <section className="home-section" aria-labelledby="checklist">
        <h2 id="checklist">Before You Download P67 — Quick Checklist</h2>
        <p>Don&apos;t skip this. Two minutes here prevents a frustrating failed install:</p>
        <ul className="home-feature-ul">
          <li>Android version: Your phone must run Android 5.0 or higher.</li>
          <li>Free storage: Keep at least 50 MB free before downloading.</li>
          <li>
            Internet connection: 4G or stable Wi-Fi recommended — a dropped connection mid-download
            corrupts the APK file.
          </li>
          <li>
            Unknown Sources setting: This needs to be ON before installation (not before download).
          </li>
          <li>
            Source: Only download from the official P67 website. Third-party APK sites sometimes bundle
            modified files that compromise your account security.
          </li>
        </ul>
      </section>

      <section className="home-section" aria-labelledby="android-download">
        <h2 id="android-download">P67 Download for Android — Step-by-Step</h2>
        <p>Android is P67&apos;s primary platform. The process takes about 3 minutes on a 4G connection.</p>
        <h3>Step 1 — Enable Unknown Sources</h3>
        <p>
          Go to Settings → Security → Unknown Sources and toggle it on. On newer Android versions
          (8.0+), this permission is app-specific: when you try to install, your browser will ask
          &quot;Allow installs from this source?&quot; — tap Allow.
        </p>
        <p>
          You only need to do this once. After P67 is installed, you can turn Unknown Sources back off
          if you prefer.
        </p>
        <h3>Step 2 — Open the Official P67 Website</h3>
        <p>
          Open your phone&apos;s browser — Chrome or any default browser works. Navigate to the official
          P67 site. Don&apos;t download from Telegram links or random social media posts — always use the
          official URL.
        </p>
        <h3>Step 3 — Tap the Download Button</h3>
        <p>
          The download button is clearly placed on the homepage. Tap it and the APK file begins
          downloading immediately. The file is 16-39 MB depending on the version, so it downloads in
          30-90 seconds on a 4G connection.
        </p>
        <h3>Step 4 — Locate the Downloaded File</h3>
        <p>
          Once the download finishes, you&apos;ll see a notification in your status bar. Tap it to open
          the file directly, or find it manually in your Downloads folder using your phone&apos;s file
          manager.
        </p>
        <h3>Step 5 — Install the APK</h3>
        <p>
          Tap the APK file. Your phone will show an installation screen. Tap Install and wait 5-10
          seconds. The app installs silently — no complicated setup required.
        </p>
        <h3>Step 6 — Launch P67</h3>
        <p>
          Find the P67 icon on your home screen or app drawer. Tap it to open. You&apos;ll land on the
          registration/login screen — from there, <Link href="/blog/p67-account-signup/">register your account</Link>{" "}
          and continue setup.
        </p>
      </section>

      <section className="home-section" aria-labelledby="ios-download">
        <h2 id="ios-download">P67 Download for iOS (iPhone & iPad)</h2>
        <p>
          The iOS download process differs because Apple restricts non-App Store installations. Use Safari
          — not Chrome — for this to work correctly.
        </p>
        <ul className="home-feature-ul">
          <li>Open Safari on your iPhone or iPad.</li>
          <li>Navigate to the official P67 website.</li>
          <li>Tap the iOS Download link.</li>
          <li>Follow the on-screen prompts — Safari handles IPA file installation differently from APK.</li>
          <li>
            If you see a prompt about the developer being untrusted: go to Settings → General → VPN &
            Device Management, find the P67 developer profile, and tap Trust.
          </li>
          <li>Return to your home screen and open P67.</li>
        </ul>
        <p>
          This trust step is standard for any app installed outside the App Store. It doesn&apos;t affect
          your device&apos;s security when the source is the official P67 platform.
        </p>
      </section>

      <section className="home-section" aria-labelledby="apk-details">
        <h2 id="apk-details">P67 APK File Details (Latest Version 2026)</h2>
        <div className="table-wrap">
          <table className="content-table">
            <thead>
              <tr>
                <th scope="col">Specification</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>App Name</td><td>P67 Game</td></tr>
              <tr><td>Latest Version</td><td>v2.3 / v3.21</td></tr>
              <tr><td>Updated</td><td>March 27, 2026</td></tr>
              <tr><td>File Size</td><td>16 MB - 39 MB</td></tr>
              <tr><td>Android Requirement</td><td>Android 5.0 and above</td></tr>
              <tr><td>iOS Compatibility</td><td>iOS 11.0+</td></tr>
              <tr><td>Price</td><td>Free</td></tr>
              <tr><td>In-App Purchases</td><td>Yes (deposits for real-money games)</td></tr>
              <tr><td>Age Rating</td><td>18+</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="home-section" aria-labelledby="first-10-minutes">
        <h2 id="first-10-minutes">What to Do Right After P67 Download — First 10 Minutes</h2>
        <p>
          Most players download P67, open it, and immediately feel lost. Here&apos;s exactly what to do
          in your first 10 minutes so you don&apos;t waste your welcome bonus.
        </p>
        <p>
          Once you complete setup, <Link href="/blog/p67-game-deposit/">make your first deposit</Link> only
          after checking bonus eligibility.
        </p>
        <ul className="home-feature-ul">
          <li>
            Minute 1-2: Register your account. Tap Register, enter your phone number, create a password,
            verify via OTP.
          </li>
          <li>
            Minute 3-4: Claim your welcome bonus from the dashboard before doing anything else.
          </li>
          <li>
            Minute 4-5: Join the official Telegram or WhatsApp group to unlock a free 10 PKR bonus.
          </li>
          <li>
            Minute 5-7: Browse the game lobby first — check game categories and minimum bet amounts.
          </li>
          <li>
            Minute 7-10: Try offline mode first. Practice rounds help you learn game pace and payout flow.
          </li>
        </ul>
        <p>Only after this should you consider making your first deposit.</p>
      </section>

      <section className="home-section" aria-labelledby="first-deposit">
        <h2 id="first-deposit">How to Make Your First Deposit After P67 Download</h2>
        <p>
          Your first 100 PKR deposit triggers a free 70 PKR bonus — that&apos;s a 70% top-up on your
          opening amount. Here&apos;s the fastest way to deposit:
        </p>
        <ul className="home-feature-ul">
          <li>Tap Wallet from the home dashboard.</li>
          <li>Tap Add Funds or Deposit.</li>
          <li>Select JazzCash, EasyPaisa, SadaPay, or Bank Transfer.</li>
          <li>Enter amount (minimum: 100 PKR).</li>
          <li>Enter accurate wallet details (name must match registration).</li>
          <li>Confirm and enter OTP sent to your phone.</li>
          <li>Your balance updates within seconds for most wallet payments.</li>
        </ul>
        <p>
          First-time deposits may trigger quick KYC verification. This is a one-time security step to
          protect your funds.
        </p>
      </section>

      <section className="home-section" aria-labelledby="problems">
        <h2 id="problems">P67 Download Problems — Fixes for Common Errors</h2>
        <ul className="home-feature-ul">
          <li>
            <strong>&quot;App not installed&quot;:</strong> Enable Unknown Sources and ensure at least
            50 MB storage is free.
          </li>
          <li>
            <strong>Download stops halfway:</strong> Delete incomplete file and re-download on stable
            internet.
          </li>
          <li>
            <strong>APK won&apos;t open:</strong> Re-download from official site; corrupted files are common
            on interrupted sessions.
          </li>
          <li>
            <strong>&quot;Parse error&quot;:</strong> Usually damaged APK or Android below 5.0.
          </li>
          <li>
            <strong>iOS trust error:</strong> Settings → General → VPN & Device Management → Trust profile.
          </li>
          <li>
            <strong>App crashes on opening:</strong> Uninstall, restart phone, and reinstall a fresh copy.
          </li>
        </ul>
      </section>

      <section className="home-section" aria-labelledby="safe">
        <h2 id="safe">Is the P67 Download Safe?</h2>
        <p>The short answer: yes, when you download from the official site.</p>
        <p>
          P67 uses encrypted data transmission and doesn&apos;t share personal information with third
          parties. Payment processing runs through JazzCash and EasyPaisa — both established local
          platforms with their own security infrastructure. The Google Play-equivalent listing on
          p67d1.cc shows 100,000+ installs with a 4.8 rating from over 1,000 reviews.
        </p>
        <p>
          The risk doesn&apos;t come from the app itself — it comes from third-party download links.
          Modified APK files circulate on Telegram channels, WhatsApp groups, and unofficial APK sites.
          Always download from the official P67 domain.
        </p>
      </section>

      <section className="home-section" aria-labelledby="update">
        <h2 id="update">How to Update P67 After Download</h2>
        <p>P67 doesn&apos;t auto-update since it&apos;s not on the Play Store. To get the latest version:</p>
        <ul className="home-feature-ul">
          <li>Visit the official P67 website.</li>
          <li>Download the newest APK version.</li>
          <li>Install it over your existing app — account data stays intact.</li>
          <li>If bugs appear after update, uninstall first then install fresh.</li>
        </ul>
        <p>
          Check for updates roughly once a month. Major updates add new games, fix payment bugs, and
          often include a version-update bonus.
        </p>
      </section>

      <section className="home-section" aria-labelledby="download-faq">
        <h2 id="download-faq">Frequently Asked Questions About P67 Download</h2>
        <dl className="home-faq-dl">
          <div className="home-faq-item">
            <dt>Is P67 download free?</dt>
            <dd>
              Yes. The app is free to download and install. Real-money gameplay requires deposits, but
              browsing, bonuses, and offline mode are free.
            </dd>
          </div>
          <div className="home-faq-item">
            <dt>Can I download P67 on PC?</dt>
            <dd>
              Not directly. Use an Android emulator like BlueStacks if needed. Official platform support
              is Android and iOS.
            </dd>
          </div>
          <div className="home-faq-item">
            <dt>Why isn&apos;t P67 on Google Play Store?</dt>
            <dd>
              Real-money gambling apps face strict Play Store restrictions in many markets, so P67 uses
              direct APK distribution.
            </dd>
          </div>
          <div className="home-faq-item">
            <dt>Does P67 work on old phones?</dt>
            <dd>
              Yes. P67 supports Android 5.0+ and is optimized for lower-RAM devices and slower
              connections.
            </dd>
          </div>
          <div className="home-faq-item">
            <dt>Will installing P67 void my phone warranty?</dt>
            <dd>No. Installing APK files outside Play Store does not void phone warranty.</dd>
          </div>
          <div className="home-faq-item">
            <dt>How do I download P67 again after deleting it?</dt>
            <dd>
              Revisit the official site and install the latest version. Your account remains tied to your
              phone number and password.
            </dd>
          </div>
        </dl>
      </section>

      <section className="home-section home-cta-final" aria-labelledby="final-word">
        <h2 id="final-word">Final Word</h2>
        <p>
          P67 download takes under 3 minutes from start to finish. Enable Unknown Sources, download from
          the official site, install, register, and claim your welcome bonus.
        </p>
        <p>
          If install issues appear, the error-fix section above covers every common problem. When
          you&apos;re ready to play for real, start with offline practice and small bets first.
        </p>
        <p>
          <Link href="/">Back to homepage</Link>
        </p>
      </section>
    </main>
  );
}
