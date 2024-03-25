import { Fragment } from "react";
import { useState } from "react";

const pricingAmounts = {
  1: {
    pageViews: "10K",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageViews: "50K",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageViews: "100K",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageViews: "500K",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageViews: "1M",
    monthly: 36,
    yearly: 324,
  },
};
function App() {
  return (
    <>
      <InputSlider />
    </>
  );
}

export const InputSlider = () => {
  const [pageviews, setPageviews] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);

  console.log(pageviews);
  console.log(pricingAmounts[pageviews].pageViews);

  const handleInputRange = (e) => {
    setPageviews(e.target.value);
  };

  const handleCheckbox = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Fragment>
      <section>
        <h2>{pricingAmounts[pageviews].pageViews} Pageviews</h2>

        <input
          type="range"
          name="range-slider"
          id="range-slider"
          value={pageviews}
          step={1}
          min={1}
          max={5}
          aria-label={`${pricingAmounts[pageviews].pageViews} pageviews`}
          onInput={handleInputRange}
        />

        <p>
          ${pricingAmounts[pageviews][isMonthly ? "monthly" : "yearly"]} /
          {isMonthly ? "Month" : "Year"}
        </p>
      </section>

      <div>
        <p>Monthly Billing</p>

        <div className="card--checkbox">
          <input
            type="checkbox"
            id="card--checkbox"
            onChange={handleCheckbox}
          />
        </div>

        <p>
          Yearly Billing <span>-25%</span>
        </p>
      </div>
    </Fragment>
  );
};

export default App;
