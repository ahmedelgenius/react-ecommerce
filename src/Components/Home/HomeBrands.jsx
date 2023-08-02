import HomeBrandHook from "../../hook/brand/home-brand-hook";
import BrandCard from "../Brands/BrandCard";
import SubTitle from "./../Utilits/SubTitle";

const HomeBrands = () => {
  const [items, loading] = HomeBrandHook();

  return (
    <>
      <>
        <div className="container mx-auto my-20">
          <SubTitle
            title="Brands"
            btnTitle="Browse all brands →"
            path="/allbrands"
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 place-content-center place-items-center gap-y-8">
            {loading === false ? (
              items ? (
                items.map((brand, index) => {
                  return <BrandCard key={index} img={brand.image} />;
                })
              ) : (
                <h2>brands is empty</h2>
              )
            ) : (
              <div
                className="flex justify-center  items-center text-center w-96   "
                // style={{ marginLeft: "600px" }}
              >
                <i
                  className="pi pi-spin pi-spinner"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default HomeBrands;
