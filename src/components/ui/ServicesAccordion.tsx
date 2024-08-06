import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

interface ServicesType {
    title : string;
    text : string[];
}

interface AccordionProps {
    services : ServicesType[]
}

export default function ServicesAccordion(props : AccordionProps) {
    const {services} = props
    return (
            <Accordion type="single" collapsible>
                {services.map((service,index) => (<AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{service.title}</AccordionTrigger>
                    <AccordionContent>
                        <ul className="text-lg mobile:text-base md-min:w-[85%] list-disc">
                            {service.text.map((points,index) => (
                          <li className={`ml-10 ${index != 0 ? 'mt-3' : ''}`}key={index}>
                                {points}
                            </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>))}
            </Accordion>
    )
}