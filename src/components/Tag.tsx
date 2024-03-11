type TagProps = {
  name: string;
  color: string;
};

export default function Tag({ name }: TagProps) {
  return (
    <div className={`bg-blue-50 rounded-full p-2`}>
      <p className={`text-blue-700 text-base font-medium`}>#{name}</p>
    </div>
  );
}
