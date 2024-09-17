// "use client";

import { Header } from "@/components/header/Header";
import { Intro } from "@/components/intro/intro";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
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
