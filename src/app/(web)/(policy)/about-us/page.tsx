import { siteName } from "@/constant";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-y-4 min-h-[80vh]">
      <h2 className="text-center text-3xl my-6 font-medium text-rose-600">
        About {siteName}
      </h2>
      <p className="text-justify font-medium text-xl px-4 mb-6">
        {siteName} is a website designed specifically for all users worldwide,
        offering the most trending and entertaining content information. <br />
        <br />
        <br /> It features entertainment tests, professional assessments, image
        synthesis, and various formats such as trivia, regular login tests,
        extended-choice questions, and extended-answer questions. <br />
        <br />
        <br /> Our platform leverages technologies such as one-click Facebook
        login, image synthesis, facial recognition integration, and intelligent
        hot topic recommendations. <br />
        <br />
        <br /> We aim to provide users with comprehensive and diverse leisure
        content services in the realm of audio and video entertainment.
      </p>
    </div>
  );
};

export default AboutUs;
