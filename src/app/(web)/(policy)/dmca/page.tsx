import { siteName } from "@/constant";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const TermsPage = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-2 sm:px-2 md:px-4 xl:px-0">
      <h1
        className={cn(
          "text-2xl md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        DMCA Copyright Policy
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          {siteName} has adopted the following general policy toward copyright
          infringement in accordance with the Digital Millennium Copyright Act
          (http://lcweb.loc.gov/copyright/legislation/dmca.pdf). The address of
          the Designated Agent to Receive Notification of Claimed Infringement
          (“Designated Agent”) is listed at the end of this policy.
        </p>
        <p className="w-full text-left">
          IProcedure for Reporting Copyright Infringement:
        </p>
        <p className="w-full text-left">
          If you believe that material or content residing on or accessible
          through Company’s websites or services infringes a copyright, please
          send a notice of copyright infringement containing the following
          information to the Designated Agent listed below:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            A physical or electronic signature of a person authorized to act on
            behalf of the owner of the copyright that has been allegedly
            infringed;
          </li>
          <li>Identification of works or materials being infringed;</li>
          <li>
            Identification of the material that is claimed to be infringing
            including information regarding the location of the infringing
            materials that the copyright owner seeks to have removed, with
            sufficient detail so that Company is capable of finding and
            verifying its existence;
          </li>
          <li>
            Contact information about the notifier including address, telephone
            number and, if available, e-mail address;
          </li>
          <li>
            A statement that the notifier has a good faith belief that the
            material is not authorized by the copyright owner, its agent, or the
            law; and
          </li>
          <li>
            A statement made under penalty of perjury that the information
            provided is accurate and the notifying party is authorized to make
            the complaint on behalf of the copyright owner.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TermsPage;
