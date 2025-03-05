import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const PrivacyPolicy = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-2 sm:px-2 md:px-4 xl:px-0">
      <h1
        className={cn(
          "text-2xl md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Privacy Policy
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          TruepubMedia Solution Private Limited, operating photosframemaker.com,
          values your privacy. This policy outlines how we collect, maintain,
          and disclose information resulting from your use of our services.
        </p>

        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Information We Collect
        </h2>
        <p className="w-full text-left">
          Voluntarily Provided Information: Actively provided by you during the
          use of our services.
        </p>
        <p className="w-full text-left">
          Automatically Collected Information: Data sent by your devices while
          accessing our products and services.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Log Data
        </h2>
        <p className="w-full text-left">
          When you visit our website, servers may log standard data provided by
          your web browser, including IP address, browser type, pages visited,
          etc.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Device Data
        </h2>
        <p className="w-full text-left">
          Automatically collected data about your device, including type,
          operating system, unique identifier, settings, location, and internet
          speed.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Personal information
        </h2>
        <p className="w-full text-left">
          May include name, email, social media profile, payment preferences,
          collected when you submit content, contact us, or engage with our
          services.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          User Generated Content:
        </h2>
        <p className="w-full text-left">
          Material voluntarily provided by users for publication on our website
          or social media channels.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Legitimate Reasons to Process Personal Information:
        </h2>
        <p className="w-full text-left">
          We collect and use personal information only when we have a legitimate
          reason, reasonably necessary to provide our services.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Information Collection and Use:
        </h2>
        <p className="w-full text-left">
          Collected when registering, participating in competitions, signing up
          for updates, using our platform, creating content, purchasing
          packages, contacting us, or mentioning us on social media.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Security of Your Personal Information:
        </h2>
        <p className="w-full text-left">
          We protect personal information to prevent loss, theft, unauthorized
          access, or modification. While we aim for security, no method is 100%
          secure.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          How Long We Keep Your Personal Information:
        </h2>
        <p className="w-full text-left">
          Retained only as long as necessary, considering purposes like
          compliance, analysis, legal obligations, or archiving.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Kids Privacy:
        </h2>
        <p className="w-full text-left">
          We don&apos;t direct services to children under 13, and we don&apos;t
          knowingly collect personal information from them.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Disclosure of Personal Information to Third Parties:
        </h2>
        <p className="w-full text-left">
          May disclose to third parties, including service providers,
          affiliates, sponsors, regulatory authorities, or in legal proceedings.
          Third-party services include Google Analytics, Google AdSense and
          Weplan Analytics.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          International Transfer of Personal Information:
        </h2>
        <p className="w-full text-left">
          Information may be stored or processed in other locations where
          partners maintain facilities. Transfer is done in accordance with
          legal requirements and this Privacy Policy.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Your Rights and Controlling Your Personal Information:
        </h2>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            Choice: You&lsquo;re not obligated to provide personal information,
            but it may affect your site or service use.
          </li>
          <li>
            Access: You can request details of the personal information we hold
            about you.
          </li>
          <li>
            Correction: We&lsquo;ll correct inaccurate information upon request.
          </li>
          <li>
            Non-discrimination: Exercising rights won&apos;t result in
            discrimination.
          </li>
          <li>
            Data breach notice: We comply with laws regarding data breaches.
          </li>
          <li>
            Complaints: If you believe there&apos;s a violation, contact us or a
            regulatory body.
          </li>
          <li>
            Unsubscribe: To opt out of communications, contact us or use the
            provided opt-out facility.
          </li>
        </ul>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Cookies and Business Transfer:
        </h2>
        <p className="w-full text-left">
          Use of Cookies: We use cookies to collect information about your
          activity on our sites. Cookies are small data pieces stored on your
          computer, accessed during visits to understand your preferences. Refer
          to our Cookie Policy for details.
        </p>
        <p className="w-full text-left">
          Business Transfer: In case of acquisition or bankruptcy, data,
          including personal information, may be transferred to acquiring
          parties. You acknowledge such transfers, and acquirers will use data
          following this policy.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Limits of Our Policy:
        </h2>
        <p className="w-full text-left">
          Our site may link to external sites with different privacy policies.
          We aren&apos;t responsible for their content and practices..
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Changes to This Policy:
        </h2>
        <p className="w-full text-left">
          We may update the privacy policy at our discretion. Changes will be
          posted on the same link used to access the policy.
        </p>
        <p className="w-full text-left">
          Significant changes may prompt notifications to users, with details
          and links to updated policies.
        </p>
        <p className="w-full text-left">
          Consent or opt-in/out options will be provided when required by law.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Additional Disclosures for Australian Privacy Act (AU) Compliance:
        </h2>
        <p className="w-full text-left">
          Third parties may not be governed by the Australian Privacy Act, and
          you won&apos;t seek redress under the Act for their acts contrary to
          Privacy Principles.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Additional Disclosures for General Data Protection Regulation (GDPR)
          Compliance (EU):
        </h2>
        <p className="w-full text-left">
          Data Controller/Processor: Photosframemaker is the Data
          Controller/Processor for the personal information provided.
        </p>
        <p className="w-full text-left">
          Legal Basis for Processing: Personal information is collected and used
          lawfully, fairly, and transparently. Legal basis includes consent,
          execution of contracts, legitimate interests, and compliance with the
          law.
        </p>
        <p className="w-full text-left">
          International Transfers: Transfers outside the European Economic Area
          (EEA) will be safeguarded with appropriate measures.
        </p>
        <p className="w-full text-left">
          Your Rights: Rights include restricting processing, objecting to
          processing, data portability, and deletion. Exceptions to deletion
          exist for legal reasons.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Additional Disclosures for California (US) Compliance:
        </h2>
        <p className="w-full text-left">
          California Collection Notice: Categories of personal information
          collected in the past 12 months listed. Used for business purposes,
          including providing and administering services.
        </p>
        <p className="w-full text-left">
          Right to Know and Erase: California residents have the right to
          request information about collected personal information and its
          deletion. To exercise these rights, contact us.
        </p>
        <p className="w-full text-left">
          Shine the Light: California residents can request information about
          sharing personal information with third parties for direct marketing
          purposes. Submit requests with &quot;California Privacy Rights
          Request.&quot;
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Contact Us:
        </h2>
        <p className="w-full text-left">
          For privacy-related questions or concerns, contact us, Customer
          Excellence Officer,at truepubmedia@gmail.com.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
