import { MaskContainer } from "@/components/ui/svg-mask-effect";

type GenerateIdeaCardProps = {
  idea: string;
};

export function GenerateIdeaCard({ idea }: GenerateIdeaCardProps) {
  return (
    <div className="flex items-center justify-center w-full max-w-5xl overflow-hidden h-96">
      <MaskContainer
        revealText={
          <p className="font-bold leading-normal text-center text-7xl text-slate-800">
            ¡Revela el secreto!
          </p>
        }
        className="w-full h-full border rounded-md"
      >
        <span className="text-7xl leading-normal text-[#3B82F6] mx-8">
          {idea}
        </span>
      </MaskContainer>
    </div>
  );
}
