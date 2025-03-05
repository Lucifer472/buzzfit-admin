import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { siteName } from "@/constant";

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
        Terms of Service
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          By accessing {process.env.NEXT_PUBLIC_URL}, you agree to comply with
          our Terms of Service. We reserve the right to review and change these
          terms, with any updates taking effect immediately.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Communication
        </h2>
        <p className="w-full text-left">
          Agree to receive newsletters and promotional materials. Opt-out is
          available.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Usage Restrictions
        </h2>
        <p className="w-full text-left">
          By using this website, you warrant on behalf of yourself, your users
          and others you represent that you will not:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            Modify, copy, prepare derivative works of, decompile or reverse
            engineer any material and software contained on this website;
          </li>
          <li>
            Remove any copyright or other proprietary notations from any
            material and software on this website;
          </li>
          <li>
            Transfer the material to another person or “mirror” the material on
            any other server;
          </li>
          <li>
            To impersonate or attempt to impersonate the Company, Company
            employees, other users, or other persons or entities.
          </li>
          <li>
            Knowingly or negligently use this website or its related services in
            a way that abuses or interferes with our network or other services
            that Photos Frame Maker provides;
          </li>
          <li>
            Use this website or its related services to post or publish material
            that is harassing, obscene,, fraudulent or otherwise unlawful;
          </li>
          <li>Harvest, or collect user data without user consent; or</li>
          <li>
            Using this website or its related services in a manner that may
            violate the privacy, intellectual property rights or other rights of
            third parties.
          </li>
        </ul>
        <p className="w-full text-left">In addition, you agree not to:</p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>Disable or interfere with the service</li>
          <li>Use automated devices without consent</li>
          <li>Introduce harmful material</li>
          <li>Attempt unauthorized access or disrupt the service</li>
        </ul>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Acceptable Use Policy:
        </h2>
        <p className="w-full text-left">
          Designed to prevent unethical, irresponsible, and illegal activities.
          Violations may result in service suspension or termination.
        </p>
        {/* Fair Use Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Fair use
        </h2>
        <p className="w-full text-left">
          Usage assumed to be &quot;business as usual.&quot; Excessive use may
          incur additional fees or restrictions.
        </p>
        {/* Customer Accountability Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Customer accountability
        </h2>
        <p className="w-full text-left">
          Customers responsible for their actions and actions of users.
          Violations may lead to service termination without notice.
        </p>
        {/* Prohibited Activity Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Prohibited activity
        </h2>
        <p className="w-full text-left">
          Copyright infringement and access to unauthorized material
        </p>
        <p className="w-full text-left">Including but not limited to:</p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>Copyright infringement</li>
          <li>Spam or unauthorized message activity</li>
          <li>Unethical, exploitative, and malicious behavior</li>
          <li>Unauthorized use of {siteName} property</li>
        </ul>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Intellectual Property Rights:
        </h2>
        <p className="w-full text-left">
          Material on the website is owned by {siteName}. Users may download one
          copy for personal, non-commercial use. License terminates on
          violation.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          User Generated Content:
        </h2>
        <p className="w-full text-left">
          You retain intellectual property rights for content submitted to
          Photos Frame Maker. We require a license to use it, but we don&apos;t
          claim ownership. By posting content, you grant us a non-exclusive,
          worldwide license.
        </p>
        <p className="w-full text-left">
          You can terminate this license by deleting your content or account.
          However, it continues for commercial/sponsored content until
          termination.
        </p>
        <p className="w-full text-left">
          We may use your username and associated information in line with your
          privacy preferences.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Campaign:
        </h2>
        <p className="w-full text-left">
          Creators can create campaigns but must ensure they comply with
          {siteName} community guidelines.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Personal Use:
        </h2>
        <p className="w-full text-left">
          Accounts are for personal use; sharing may result in termination.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>Ads:</h2>
        <p className="w-full text-left">
          Advertisements on {siteName} are third-party content.
          {siteName} isn&apos;t responsible for ad accuracy.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Obligation:
        </h2>
        <p className="w-full text-left">
          {siteName} provides services &quot;as is&quot; and disclaims
          warranties. Not liable for any loss. No compensation for issues.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Material Accuracy:
        </h2>
        <p className="w-full text-left">
          Material on the website is for general information; accuracy
          isn&apos;t guaranteed.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>Link:</h2>
        <p className="w-full text-left">
          {siteName} isn&apos;t responsible for linked site content. Use linked
          sites at your own risk.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Right to Terminate:
        </h2>
        <p className="w-full text-left">
          {siteName} may suspend or terminate users for violations.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Termination:
        </h2>
        <p className="w-full text-left">
          {siteName} can terminate services for violations. The Terms constitute
          the entire agreement.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Government Regulations:
        </h2>
        <p className="w-full text-left">
          Governed by Indian laws; exclusive jurisdiction in Indian courts.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Error Reporting and Feedback:
        </h2>
        <p className="w-full text-left">
          Feedback may be submitted, and the company has usage rights.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Service Changes:
        </h2>
        <p className="w-full text-left">
          {siteName} reserves the right to modify or withdraw services without
          notice.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Policy Modification:
        </h2>
        <p className="w-full text-left">
          {siteName} may modify policies; users are bound to the revised terms.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Amendment to Terms:
        </h2>
        <p className="w-full text-left">
          Terms may change; it&apos;s the user&apos;s responsibility to review
          and accept revised terms. Continued use implies acceptance.
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
