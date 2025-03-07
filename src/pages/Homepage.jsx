import Banner from "../components/banner/Banner";
import { AdvertisementProperty } from "../components/sections/AdvertisementProperty";
import { Description } from "../components/sections/Description";

export default function Homepage() {
  return (
    <>
      <Banner />
      <Description />
      <AdvertisementProperty />
    </>
  );
}
