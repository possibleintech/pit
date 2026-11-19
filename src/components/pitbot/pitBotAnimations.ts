import type { TargetAndTransition } from "framer-motion";

export type PitBotPose =
  | "wave"
  | "master"
  | "laptop"
  | "package"
  | "search"
  | "analytics"
  | "pointing"
  | "celebrate"
  | "thinking"
  | "chat";

export type PitBotAnimationState =
  | "idle"
  | "floating"
  | "float"
  | "subtle"
  | "waving"
  | "happy"
  | "excited"
  | "thinking"
  | "confused"
  | "pointing"
  | "working"
  | "celebrating"
  | "surprised"
  | "bounce"
  | "none";

export type PitBotExpression =
  | "friendly"
  | "excited"
  | "thinking"
  | "celebrating"
  | "curious";

export const PITBOT_POSE_ASSETS: Record<PitBotPose, { src: string; alt: string }> = {
  wave: {
    src: "/assets/pit-bot/pit-bot-wave.webp",
    alt: "PIT BOT waving hello warmly",
  },
  master: {
    src: "/assets/pit-bot/pit-bot-master.webp",
    alt: "PIT BOT official mascot master pose",
  },
  laptop: {
    src: "/assets/pit-bot/pit-bot-laptop.webp",
    alt: "PIT BOT coding on a futuristic laptop",
  },
  package: {
    src: "/assets/pit-bot/pit-bot-package.webp",
    alt: "PIT BOT presenting e-commerce shopping packages",
  },
  search: {
    src: "/assets/pit-bot/pit-bot-search.webp",
    alt: "PIT BOT analyzing SEO through a holographic magnifying glass",
  },
  analytics: {
    src: "/assets/pit-bot/pit-bot-analytics.webp",
    alt: "PIT BOT presenting business analytics charts and metrics",
  },
  pointing: {
    src: "/assets/pit-bot/pit-bot-pointing.webp",
    alt: "PIT BOT pointing enthusiastically to the consultation CTA",
  },
  celebrate: {
    src: "/assets/pit-bot/pit-bot-celebrate.webp",
    alt: "PIT BOT celebrating project delivery with raised arms",
  },
  thinking: {
    src: "/assets/pit-bot/pit-bot-thinking.webp",
    alt: "PIT BOT thinking with tilted head and curious visor display",
  },
  chat: {
    src: "/assets/pit-bot/pit-bot-chat.webp",
    alt: "PIT BOT digital assistant avatar",
  },
};

/**
 * Keyframe generator for Motion animations
 */
export function getPitBotKeyframes(
  animation: PitBotAnimationState
): TargetAndTransition {
  switch (animation) {
    case "floating":
    case "float":
    case "idle":
      return {
        y: [0, -8, 0],
        rotate: [-0.6, 0.8, -0.6],
        transition: {
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "subtle":
      return {
        y: [0, -4, 0],
        scale: [1, 1.015, 1],
        transition: {
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "waving":
      return {
        rotate: [0, 5, -3, 4, 0],
        y: [0, -4, 0],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "happy":
    case "excited":
      return {
        y: [0, -10, 0],
        scale: [1, 1.03, 1],
        rotate: [-1, 1.5, -1],
        transition: {
          duration: 2.0,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "thinking":
    case "confused":
      return {
        rotate: [-3, 3, -3],
        y: [0, -4, 0],
        transition: {
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "pointing":
      return {
        x: [0, 4, 0],
        y: [0, -3, 0],
        transition: {
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "working":
      return {
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        transition: {
          duration: 3.0,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "celebrating":
      return {
        y: [0, -12, 0],
        rotate: [-2, 2, -2],
        scale: [1, 1.04, 1],
        transition: {
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "bounce":
      return {
        y: [0, -14, 0],
        transition: {
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "surprised":
      return {
        scale: [1, 1.06, 1],
        y: [0, -6, 0],
        transition: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

    case "none":
    default:
      return {};
  }
}
