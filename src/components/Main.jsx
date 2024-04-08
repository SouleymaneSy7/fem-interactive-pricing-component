import { InputSlider } from "./InputSlider";
import { MainBtn } from "./MainBtn";
import { MainList } from "./MainList";

export const Main = () => {
  const list = ["Unlimited websites", "100% data ownership", "Email reports"];
  const btnProps = "Start my trial";

  return (
    <main className="card">
      <section className="card__top">
        <InputSlider />
      </section>

      <section className="card__bottom">
        <MainList list={list} />
        <MainBtn btnProps={btnProps} />
      </section>
    </main>
  );
};
