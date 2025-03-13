import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  description: string;
  showCheckbox?: boolean; // Le paramètre pour afficher la checkbox
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Préouvrir le premier accordéon
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null); // Permet de gérer la case cochée mutuellement exclusive

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCheckboxChange = (index: number) => {
    // Si la case est déjà cochée, on la décoche, sinon on coche celle-là et on décoche l'autre
    setCheckedIndex(checkedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 mb-6 sm:mb-8">
      {items.map((item, index) => (
        <div key={index}>
          {/* Afficher la ligne de séparation (un seul trait entre les sections) */}
          {index !== 0 && <div className="border-t border-gray-300" />}

          <div
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full p-4 text-lg font-medium text-gray-500 hover:bg-gray-200"
          >
            <div className="flex items-center space-x-2">
              {/* Condition pour afficher la checkbox si showCheckbox est true */}
              {item.showCheckbox && (
                <input
                  type="checkbox"
                  checked={checkedIndex === index}
                  onChange={() => handleCheckboxChange(index)}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              )}
              <span>{item.title}</span>
            </div>
            {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
          </div>
          {openIndex === index && (
            <div className="p-4 text-gray-600">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
