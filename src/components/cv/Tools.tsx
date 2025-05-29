import excel from '../../images/excel.png';
import powerbi from '../../images/power BI.png';
import python from '../../images/python.png';
import sql from '../../images/sql.png';
import PQ from '../../images/PQ.png';
import Trello from '../../images/trello.png';

const tools = [
  { name: 'Excel', icon: excel },
  { name: 'Power BI', icon: powerbi },
  { name: 'Trello', icon: Trello },
  { name: 'sql', icon: sql },
  { name: 'Python', icon: python },
  { name: 'PQ', icon: PQ },
];

export default function Tools() {
  return (
    <div className="mb-16">
<h2 className="tracking-[0.4em] text-2xl md:text-2xl font-bold tracking-wide text-center mb-20 mt-20">
          TOOLS
      </h2>

      <div className="grid grid-cols-3 gap-12 max-w-md mx-auto">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
