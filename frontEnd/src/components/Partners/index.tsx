import { ImagePartners } from "./styles";

interface PartnersProps {
  img: string;
}

export function Partners({ img }: PartnersProps) {
  return (
    <>
      <ImagePartners src={img} alt="" />
    </>
  );
}
