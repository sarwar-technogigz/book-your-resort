import CommonBanner from "@/common/CommonBanner";
import AboutBanner from "@/components/about/AboutBanner";
import Experience from "@/components/about/Experience";

function page() {
  return (
    <>
      <CommonBanner
        title="About Us"
        image="/images/pool.jpg"
        breadcrumbs={["Home", "Pages", "About Us"]}
      />
      <Experience />
    </>
  );
}

export default page;
