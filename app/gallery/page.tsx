import CommonBanner from "@/common/CommonBanner";
import Gallery from "@/components/gallery/Gallery";


function page() {
  return (
    <>
      <CommonBanner
        title="Gallery"
        image="/images/contac-us.jpg"
        breadcrumbs={["Home", "Gallery"]}
      />
      <Gallery />
    </>
  );
}

export default page;
