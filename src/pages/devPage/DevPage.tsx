import React from "react";
import { TechCardList } from "@/shared/ui/TechCardList/TechCardList";

export const DevPage: React.FC = () => {
  const TechCardListData = [{
    name: 'Проектирование', description: 'Проектируем очистные, КНС, КОС, ЛОС и т д. Согласовываем утверждаем РД. Прям рэпчина'
  },
  {
    name: 'Поставка в срок', description: 'Быстро и в срок Быстро и в срок'
  },
  {
    name: 'Шеф-монтаж', description: 'Быстро и в срок Быстро и в срок Быстро и в срок'
  }]
  return (
    <div>
      <div className="test-class">
        <TechCardList techCardList={TechCardListData}/>
      </div>
    </div>
  );
};
