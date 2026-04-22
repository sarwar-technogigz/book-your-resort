import CommonBanner from "@/common/CommonBanner";
import Contact from "@/components/contact/Contact";
import Info from "@/components/contact/Info";

function Page() {
  return (
    <>
      <CommonBanner
        title="Contact Us"
        image="/images/contac-us.jpg"
        breadcrumbs={["Home", "Contact"]}
      />
      <Info />
      <Contact />
    </>
  );
}

export default Page;