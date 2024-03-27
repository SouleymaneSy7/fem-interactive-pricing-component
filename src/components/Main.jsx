import { InputSlider } from "./InputSlider";
import { MainBtn } from "./MainBtn";
import { MainList } from "./MainList";

export const Main = () => {
  const list = ["Unlimited websites", "100% data ownership", "Email reports"];
  const btnProps = "Start my trial";

  return (
    <main>
      <InputSlider />
      <MainList list={list} />
      <MainBtn btnProps={btnProps} />
    </main>
  );
};
