// "use client";

import { Card, Header, Intro } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Card />
    </div>
  );

  // const [isClicked, setIsClicked] = useState(false);
  // console.log(isClicked);
  // return (
  //   <div>
  //     <button onClick={() => setIsClicked(true)}>Click me</button>
  //   </div>
  // );
  //   return (
  //     <div data-theme="retro">
  //       <button class="btn btn-accent btn-outline">Button</button>
  //     </div>
  //   );
}
