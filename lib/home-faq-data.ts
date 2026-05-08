/**
 * Homepage FAQ — must exactly match visible FAQ markup on `/` and `FAQPage` JSON-LD.
 */
export type HomeFaqItem = { question: string; answer: string };

export const homeFaqItems: HomeFaqItem[] = [
  {
    question: "Is P67 Game real money?",
    answer:
      "Yes. Players deposit real PKR and can withdraw real PKR via JazzCash, EasyPaisa, or bank transfer.",
  },
  {
    question: "What is the minimum withdrawal amount?",
    answer: "100 PKR per transaction.",
  },
  {
    question: "Can I play P67 on PC?",
    answer:
      "The app is designed for Android and iOS. PC access via an Android emulator like BlueStacks works, but the official platform doesn't support direct PC play.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "JazzCash and EasyPaisa withdrawals typically process within minutes. Bank transfers may take a few hours.",
  },
  {
    question: "Is there a referral earning limit?",
    answer:
      "No fixed limit. The more active friends you refer, the more you earn across multiple milestones.",
  },
  {
    question: "What happens if I forget my password?",
    answer:
      'Tap "Forgot Password" on the login screen, enter your phone number, and reset via OTP.',
  },
  {
    question: "Is P67 available outside Pakistan?",
    answer:
      "The platform is built for Pakistani users with local payment integration. Access from other countries may be limited.",
  },
];
