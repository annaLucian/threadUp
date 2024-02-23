import SkeletonCard from "./skeletonCard";
export default function SkeletonCardList() {
  const array = Array.from({ length: 12 });

  return array.map((item, index) => <SkeletonCard key={index} />);
}
