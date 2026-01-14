import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
} from '@/components/ui/animate-ui/primitives/radix/accordion';
import { Sparkles } from "lucide-preact";

type ProjectAccordionProps = {
  multiple?: boolean;
  collapsible?: boolean;
  keepRendered?: boolean;
  items: {
    title: string;
    content: string;
  }[]; 
  defaultOpen?: boolean;  // 新增：是否預設開啟第一個
};

export const ProjectAccordion = ({
  multiple = false,
  collapsible = true,
  keepRendered = false,
  items,
  defaultOpen = true,  // 預設開啟第一個
}: ProjectAccordionProps) => {
  const defaultValue = defaultOpen
      ? multiple
        ? ["item-1"]
        : "item-1"
      : undefined;
  return (
    <Accordion
      type={multiple ? "multiple" : "single"}
      collapsible={collapsible}
      className="max-w-[400px] w-full"
      defaultValue={defaultValue}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionHeader>
            <AccordionTrigger className="border-b border-white/20 py-2 w-full text-start flex">
              <Sparkles className="text-primary pr-2"></Sparkles>{item.title}
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