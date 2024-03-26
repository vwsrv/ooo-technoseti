import React from "react";
import { Button } from "@/shared/ui/Button";
export const DevPage: React.FC = () => {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Button
          disabled={false}
          variant="pink"
        >
          Читать далее
        </Button>
      </div>
    </div>
  );
};
