import { AboutProcess, AboutStat, AboutValue } from "@/types/about";
import { Users, Target, Award, Heart } from "lucide-react";

export const values: AboutValue[] = [
  { icon: Target, title: "focus", description: "" }, // 'focus' anahtarını JSON'da kullanacağız
  { icon: Heart, title: "passion", description: "" },
  { icon: Users, title: "collab", description: "" },
  { icon: Award, title: "quality", description: "" },
];

export const stats: AboutStat[] = [
  { number: "%100", label: "stat1" },
  { number: "0", label: "stat2" },
  { number: "7/24", label: "stat3" },
  { number: "360°", label: "stat4" },
];

export const process: AboutProcess[] = [
  { step: "01", title: "step1", description: "" },
  { step: "02", title: "step2", description: "" },
  { step: "03", title: "step3", description: "" },
  { step: "04", title: "step4", description: "" },
];

export const reasons = [
  { id: "reason1" },
  { id: "reason2" },
  { id: "reason3" },
  { id: "reason4" },
  { id: "reason5" },
  { id: "reason6" },
];