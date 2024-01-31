import { useContext } from "react";
import { CompanyContext } from "./CompanyContext";


export function CompanyConsumer() {
    const data = useContext(CompanyContext);

    return (
      <div>
        {/* Utilizar los datos */}
        {data.map(item => (
          <div key={item._id}>{item.name}</div>
        ))}
      </div>
    );
  };

