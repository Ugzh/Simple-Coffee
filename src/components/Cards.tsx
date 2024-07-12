import React from "react";

const ENDPOINT: string =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function Cards() {
  async function fetcher() {
    const response = await fetch(ENDPOINT);
    const json = await response.json();
    setCoffeeList(json);
  }

  React.useEffect(() => {
    fetcher();
  }, []);
  const [coffeeList, setCoffeeList] = React.useState([]);

  return (
    <div className="flex flex-wrap justify-center gap-8 w-2/3 mb-16">
      {coffeeList.map(
        ({ name, id, image, popular, price, rating, votes, available }) => {
          return (
            <div key={id} className="flex flex-col ">
              <div className="flex flex-col relative">
                <img src={`${image}`} alt={name} className="rounded-lg" />
                {popular ? (
                  <span className="absolute left-2 top-2 text-black bg-[#F6C768] px-3 py-1 rounded-2xl font-DMsans font-semibold text-sm">
                    popular
                  </span>
                ) : null}
              </div>
              <div className="flex relative mt-3 justify-between font-DMsans">
                <p>{name}</p>
                <p className="bg-[#BEE3CC] text-black py-1 px-2 rounded-md font-DMsans font-bold">
                  {price}
                </p>
              </div>
              <div className="flex justify-between pt-2">
                {rating ? (
                  <div className="flex">
                    <img src="src/assets/img/Star_fill.svg" alt={rating} />
                    <p>{rating}</p>
                    <span className="text-[#6F757C] font-semibold pl-1">
                      ({votes} votes)
                    </span>
                  </div>
                ) : (
                  <div className="flex">
                    <img src="src/assets/img/Star.svg" alt={rating} />
                    <p className="text-[#6F757C] font-semibold">No rating</p>
                  </div>
                )}
                {!available ? (
                  <p className="text-[#ED735D] font-semibold">Sold Out</p>
                ) : null}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}

export default Cards;
