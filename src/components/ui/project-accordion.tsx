import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
  useAccordionItem,
} from '@/components/ui/animate-ui/primitives/radix/accordion';
import { Plus } from "lucide-preact";
import { motion } from "motion/react";

type ProjectAccordionProps = {
  collapsible?: boolean;
  keepRendered?: boolean;
  items: {
    title: string;
    content: string;
  }[]; 
  defaultOpen?: boolean;
};

function AccordionIcon() {
  const { isOpen } = useAccordionItem();
  
  return (
    <motion.div
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="shrink-0 w-4 h-4 mr-2 flex items-center justify-center"
      style={{ transformOrigin: "center center" }}
    >
      <Plus className="text-primary w-4 h-4" />
    </motion.div>
  );
}

export const ProjectAccordion = ({
  collapsible = true,
  keepRendered = false,
  items,
  defaultOpen = true,
}: ProjectAccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible={collapsible}
      className="max-w-[400px] w-full"
      defaultValue={defaultOpen ? "item-1" : undefined}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionHeader>
            <AccordionTrigger className="border-b border-white/20 py-2 w-full text-start flex items-center">
              <AccordionIcon />
              {item.title}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent keepRendered={keepRendered}>
            <div 
              className="py-2 text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};