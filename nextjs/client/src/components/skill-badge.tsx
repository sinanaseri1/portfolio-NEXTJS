import { type Skill } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Badge variant="outline" className="text-sm py-1 px-3">
        {skill.name}
      </Badge>
    </motion.div>
  );
}
