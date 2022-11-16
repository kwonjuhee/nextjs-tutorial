import Counter from "./counter";

export async function generateStaticParams() {
  return [
    {
      slug: "1",
    },
  ];
}

export default function IndividualBlogPage() {
  return (
    <div>
      <h1>hi this is post 1</h1>
      <Counter />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea sed
      sequi doloribus saepe alias? A quo quaerat harum nam exercitationem
      corporis consequuntur excepturi nesciunt possimus? Quisquam eos assumenda
      voluptatem!
    </div>
  );
}
