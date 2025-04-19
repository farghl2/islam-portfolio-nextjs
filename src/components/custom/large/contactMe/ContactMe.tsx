import { contactMeData } from "@/lib/data";
import SectionHeader from "../../atoms/sectionHeader/SectionHeader";
import Link from "next/link";

const ContactMe = () => (
  <section className="w-11/12 mx-auto">
    <SectionHeader
      title="Contact Me"
    >
      <span className="text-secondary mr-2">
        Let’s Talk
      </span>
      for your
      Next Projects

    </SectionHeader>
    <div className="flex flex-wrap justify-start items-center gap-4 my-5">
      {contactMeData.map((item) => 
      <Link href={item.link} key={item.title} className="flex items-center justify-center gap-5 hover:bg-slate-200 py-2 px-4 rounded-lg">
        <div className="p-3 bg-slate-300 rounded-full text-3xl">{<item.icon />}</div>
        <p className="text-2xl">
          {item.title}
          </p> 
      </Link>)}

    </div>
  </section>
);

export default ContactMe;
