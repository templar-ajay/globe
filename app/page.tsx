import { GlobeDemo } from "@/components/my-comps/my-globe";

export default function Home({ searchParams }) {
  const showBorder = searchParams.border != "false";
  const showText = searchParams.text != "false";
  const removeBackground = searchParams["remove-background"] == "true";

  return (
    <main className="h-full w-full">
      <GlobeDemo
        showBorder={showBorder}
        showText={showText}
        removeBackground={removeBackground}
      />
    </main>
  );
}
