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

export const InputSlider = () => {
  const [pageviews, setPageviews] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);

  const handleInputRange = (event) => {
    setPageviews(event.target.value);

    const element = event.target;
    const sliderValue = element.value;
    const sliderMin = element.min;
    const sliderMax = element.max;

    const getProgress = (value, min, max) => {
      return ((value - min) / (max - min)) * 100;
    };

    const progress = getProgress(sliderValue, sliderMin, sliderMax);
    let extraWidth = (100 - progress) / 20;

    const rangeWidth = progress + extraWidth;

    element.style.background = `linear-gradient(to right, var(--full-slider-bar-clr) ${rangeWidth}%, var(--empty-slider-bar-clr) ${rangeWidth}%)`;
  };

  const handleCheckbox = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Fragment>
      <div className="card__input">
        <h2 className="card__input__pageviews">
          {pricingAmounts[pageviews].pageViews} Pageviews
        </h2>

        <input
          className="card__input--range"
          type="range"
          value={pageviews}
          min={1}
          max={5}
          onInput={handleInputRange}
        />

        <p className="card__input__pricing">
          <span className="card__input__pricing-amount">
            ${pricingAmounts[pageviews][isMonthly ? "monthly" : "yearly"]}.00{" "}
          </span>

          <span className="card__input__pricing-month">
            / {isMonthly ? "month" : "year"}
          </span>
        </p>
      </div>

      <div className="card__checkbox">
        <label htmlFor="card--checkbox" className="card__checkbox__label">
          <p>Monthly Billing</p>

          <div className="card--checkbox__wrapper">
            <input
              type="checkbox"
              id="card--checkbox"
              onChange={handleCheckbox}
            />

            {/* Fake Checkbox */}
            <div className="card--checkbox__container">
              <span className="card--checkbox--toggler"></span>
            </div>
          </div>

          <p>
            Yearly Billing
            <span className="discount">
              -25% <span className="discount-hidden">discount</span>{" "}
            </span>
          </p>
        </label>
      </div>
    </Fragment>
  );
};
