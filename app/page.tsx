import Image from "next/image";
import { Button } from "./components/atomes/button";

export default function Home() {
  return (
    <h3 className="flex justify-center items-center">
      hello world
      <Button
        variant="primary"
        size="tiny"
        className="mt-7"
        animatedIcon={true}
      >
        دوره‌های ری اکت و نکست‌ جی‌اس
      </Button>
    </h3>
  );
}
