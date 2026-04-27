export type HomeScreenshot = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  description: string;
};

export const homeScreenshots: HomeScreenshot[] = [
  {
    id: "p67-game-apk",
    name: "P67 Game APK Home",
    src: "/assets/images/p67-game-apk.webp",
    width: 1024,
    height: 576,
    alt: "P67 Game APK home screen with lobby and game tiles",
    description:
      "P67 Game APK home interface with game categories, lobby tiles, and quick actions.",
  },
  {
    id: "p67-game-promotions",
    name: "P67 Game Promotions",
    src: "/assets/images/p67-game-promotions.webp",
    width: 1024,
    height: 576,
    alt: "P67 Game promotions tab with bonus campaign banners",
    description:
      "P67 Game promotions section highlighting bonus events, offers, and VIP campaign cards.",
  },
  {
    id: "p67-game-deposits",
    name: "P67 Game Deposits",
    src: "/assets/images/p67-game-deposits.webp",
    width: 1024,
    height: 576,
    alt: "P67 Game deposit screen with JazzCash and EasyPaisa options",
    description:
      "Deposit workflow in P67 Game with local wallet options and amount selection.",
  },
  {
    id: "p67-game-withdraw",
    name: "P67 Game Withdraw",
    src: "/assets/images/p67-game-withdraw.webp",
    width: 1024,
    height: 576,
    alt: "P67 Game withdrawal interface showing bank and wallet tabs",
    description:
      "Withdrawal screen with payment method tabs, amount input, and support tools.",
  },
  {
    id: "p67-game-rewards",
    name: "P67 Game Rewards",
    src: "/assets/images/p67-game-rewards.webp",
    width: 1024,
    height: 576,
    alt: "P67 Game rewards and mission page with claim options",
    description:
      "P67 Game rewards area for missions, task completion, and claimable incentives.",
  },
];
